const publisherModel= require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await publisherModel.create(publisher)
    res.send({data: publisherCreated})
}

module.exports.createPublisher= createPublisher


// [20:26] Ishvinder Singh_9149651796
/*Mongoose Queries :-findOne({name:"Class X"}) - returns first matching obj. find({name:'XYZ'}) - returns all the records that are present in a DB.findById(6220bbd85025a143dc856a0d) - accepts only _idcreate({name:'XYZ', class:'XII', age:19}) - insertOne({marks:55}) - insertMany([{name:'Alex', class:'XII', age:19},{name:'Alex', class:'XII', age:19}]) - creates multiple documents at once.updateOne({name:'XYZ'},{class:'1st Year'})- accepts 2 args. filter ---> updatationdeleteOne({name:'XYZ'})- deletes a record.findOneAndUpdate({name:"XYZ"},{marks:67},{new:true, upsert:true})- updates a record.findOneAndDelete({name:'XYZ'})-findByIdAndDelete()-*/

