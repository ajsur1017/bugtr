const express = require('express');
const app = express();
const budget = require("./models/budget.js");
const port = 3000;
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.send("Hello Adult Life")
})

app.get('/budgets', (req, res) => {
    res.render("index.ejs", {budget, title: "Budgtr - Index Page"})
});

app.get('/budgets/new', (req, res) => {
    res.render("new.ejs", {title: "Budgtr - New Page"})
});

app.post("/budgets", (req, res) => {
    budget.push(req.body)
    res.redirect("/budgets")
});

app.get('/budgets/:index', (req, res) => {
    res.render("show.ejs", {title: "Budgtr - Show Page"})
});







app.listen(`${port}`, () => {
    console.log(`listening on port ${port}`);
});