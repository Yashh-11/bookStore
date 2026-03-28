import express from "express";
import database from "./configs/db.js";
import router from "./routers/index.js";

const port = 8889;
const app = express();

app.set('view engine', 'ejs');
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ extended: true }));


app.use(express.json());
app.use(router);


app.listen(port, (err) => {
    if (!err) {
        console.log("server started.");
        console.log(`http://localhost:${port}`);
    } else {
        console.log(err.message);
    }
});