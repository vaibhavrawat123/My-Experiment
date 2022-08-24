//const authorModel = require("../models/authorModel")
// const publisherModel= require("../models/publisherModel")
// const createPublisher= async function (req, res) {
//     let publisher = req.body
//     let publisherdata = await publisherModel.create(publisher)
//     res.send({data: publisherdata})
// }

//  module.exports.createPublisher= createPublisher;

const publisherModel= require("../models/publisherModel")

const createPub= async function (req, res) {
    let pub = req.body
    let pubCreated = await publisherModel.create(pub)
    res.send({data: pubCreated})
}

// const getpub= async function (req, res) {
//     let pub = await publisherModel.find()
//     res.send({data: pub})
// }

module.exports.createPub=createPub;
// module.exports.getpub=getpub;
