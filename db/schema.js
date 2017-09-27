
// MY CODE
const mongoose = require('mongoose');
// Use ES6 native promises. We are specifying a Promise library to avoid a depreciation warning in the console.
mongoose.Promise = global.Promise;

// First, we instantiate a namespace for our Schema constructor defined by mongoose.
const Schema = mongoose.Schema;

//create snowboard schema
const SnowboardSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

//create company schema and include array of snowboards - embedded document
const CompanySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    country: {
        type: String,
        required: true
    },
    snowboards: [SnowboardSchema]
});


//our collection will be called "companies" because we've used "company" below
const CompanyModel = mongoose.model('Company', CompanySchema);

//this collection will be called "snowboards" because we've used "snowboard" below
const SnowboardModel = mongoose.model("Snowboard", SnowboardSchema);


module.exports = {
    CompanyModel: CompanyModel,
    SnowboardModel: SnowboardModel
};




//THIS IS DANNY'S CODE
// const mongoose = require('mongoose');

// // First, we instantiate a namespace for our Schema constructor defined by mongoose.
// const Schema = mongoose.Schema;

// const SnowboardSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: Number,
//         required: true
//     }
// })

// const CompanySchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     country: {
//         type: String,
//         required: true
//     },
//     snowboards: [SnowboardSchema]
// });



// const CompanyModel = mongoose.model('Company', CompanySchema)
// const SnowboardModel = mongoose.model('Snowboard', SnowboardSchema)

// module.exports = {
//     CompanyModel: CompanyModel,
//     SnowboardModel: SnowboardModel
// }