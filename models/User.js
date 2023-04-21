import mongoose from "mongoose";

let shema = new mongoose.Schema({
    email: {type: String , required: true},
    password: {type: String, required: true},
    photo: {type: String, required: true},
    role: {type: Number, required: true},
    is_online: {type: Boolean, required: true},
    is__verified: {type: Boolean, required: true},
    verify_code: {type: String, required: true},
},{
    timestamps: true
})
let collection = 'users' //debe ser siempre en plural por que es un conjunto de recoursos/daots/documentos y en lo posible en minuscula

let User = mongoose.model(shema,collection)
export default User