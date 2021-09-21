const express = require('express');
const app = express();
const budget = require("./models/budget.js");
const port = 3000;
const bodyParser = require('body-parser') // what is this and why did we need it?
const methodOverride = require('method-override');

// let bankAccount = 0
// for (let i = 0; i < budget.length; i++) {
//     const amounts = budget[i].amount;
//     bankAccount += amounts;    
// }
// console.log(bankAccount)


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
    // console.log(req.body)
    req.body.amount = parseInt(req.body.amount) // need to be done to mutate the data before it is returned.
    // console.log(req.body)
    budget.push(req.body)
    res.redirect("/budgets")
});

app.get('/budgets/:index', (req, res) => {
    res.render("show.ejs", {
        budget: budget[req.params.index], 
        title: "Budgtr - Show Page"})
});







app.listen(`${port}`, () => {
    console.log(`listening on port ${port}`);
});