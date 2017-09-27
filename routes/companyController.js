const express = require("express");
const router = express.Router();
const Schema = require("../db/schema.js");
const CompanyModel = Schema.CompanyModel;

//first thing after requiring express, set up index route
router.get("/", (request, response) => {
    //send something to browser to make sure this route is working
    CompanyModel.find({})
        .then((companies) => {
            response.render("companies/index", {
                companies: companies
            })
        })
        .catch((error) => {
            console.log(error);
        })
});

module.exports = router;
