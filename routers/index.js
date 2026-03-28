import { Router } from "express";
import upload from "../middlewares/multer.js";
import book from "../models/book.model.js";

const router = Router();

// Home
router.get("/", (req, res) => {
    return res.render("index");
});

// Create Book
router.post("/books/create", upload, async (req, res) => {
    try {
        if (req.file) {
            req.body.image = req.file.path;
        }

        await book.create(req.body);

        return res.redirect("/view");
    } catch (error) {
        console.log(error.message);
        return res.redirect("/");
    }
});

// View Books
router.get("/view", async (req, res) => {
    try {
        let books = await book.find({});
        return res.render("view", { books });
    } catch (error) {
        console.log(error.message);
        return res.render("view", { books: [] });
    }
});

// DELETE
router.get("/books/delete/:id", async (req, res) => {
    try {
        await book.findByIdAndDelete(req.params.id);
        return res.redirect("/view");
    } catch (error) {
        console.log(error.message);
        return res.redirect("/view");
    }
});

// EDIT PAGE
router.get("/books/edit/:id", async (req, res) => {
    try {
        const singleBook = await book.findById(req.params.id);
        return res.render("edit", { book: singleBook });
    } catch (error) {
        console.log(error.message);
        return res.redirect("/view");
    }
});

// UPDATE
router.post("/books/update/:id", upload, async (req, res) => {
    try {
        if (req.file) {
            req.body.image = req.file.path;
        }

        await book.findByIdAndUpdate(req.params.id, req.body);

        return res.redirect("/view");
    } catch (error) {
        console.log(error.message);
        return res.redirect("/view");
    }
});

export default router;