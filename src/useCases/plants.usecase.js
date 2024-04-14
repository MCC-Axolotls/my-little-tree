import { Plant } from "../models/plants.model.js"

async function create(post){
    return await Plant.create(post)
}
async function getAll(){
    return await Plant.find()
}
async function getAllByParams({options}){
    return await Plant.find({...options})
}
async function getById({id}){
    return await Plant.findById(id)
}
async function updateById(id,newData){
    Plant.findByIdAndUpdate()
    return await Plant.findByIdAndUpdate(id, newData, { new: true })
}
async function deleteById({id}){
    return await Plant.findByIdAndDelete(id)
}

export default {
    create,
    getAll,
    getAllByParams,
    getById,
    updateById,
    deleteById
}