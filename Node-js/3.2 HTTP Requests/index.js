import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("<h1>Hello, Aryan</h1>")
});

app.get("/contact", (req,res) => {
    res.send("<h1>Welcome to Contact page</h1>");
});

app.get("/about", (req,res) => {
    res.send("<h1>Welcome to About page</h1>");
});

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});