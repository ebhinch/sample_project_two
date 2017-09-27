const express = require("express");
//make sure you include "mergeParams: true" as parameter anytime you're working with embedded documents
const router = express.Router({mergeParams: true});

// const Schema = require("../db/schema.js");
// const SnowboardModel = Schema.SnowboardModel;

const Schema = require("../db/schema.js");
const CompanyModel = Schema.CompanyModel;

//all index routes regardless of how embedded are just "/"
router.get("/", (request, response) => {
    
    // response.send(`Company ID: ${request.params.companyId}`);

    const companyId = request.params.companyId;
    CompanyModel.findById(companyId)
        .then((company) => {
            //before we can do anything with the snowboards, we have to get them out of the comapany's object
            const snowboards = company.snowboards
            //now that we have the snowboards we can render them
            response.render("snowboards/index", {
                company: company
                // companyName: company.name,
                // snowboards: snowboards
            })
        })
        .catch((error) => {
            console.log(error)
        })

    
});


module.exports = router;