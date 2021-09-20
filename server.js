const express = require('express');
const app = express();
const budgets = require("./models/budget.js");
const port = 3000;
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"))
app.use(methodOverride('_method'))


app.get('/budgets', (req, res) => {
    res.render("index.ejs", {title: "Budgtr - Index Page"})
});

app.get('/budgets/new', (req, res) => {
    res.render("new.ejs", {title: "Budgtr - New Page"})
});

app.post("/budgets", (req, res) => {
    budgets.push(req.body)
    res.redirect("/budgets")
});

app.get('/budgets/:index', (req, res) => {
    res.render("show.ejs", {title: "Budgtr - Show Page"})
});







app.listen(`${port}`, () => {
    console.log(`listening on port ${port}`);
});