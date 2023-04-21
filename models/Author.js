import mongoose, {Schema, model,Types} from "mongoose"

let shema = new Schema({
    name: { type: String, required: true },
    last_name: { type: String},
    city: { type: String, required: true },
    country: { type: String, required: true },
    date: { type:Date },
    photo: { type: String, required: true },
    active: { type: Boolean, required: true },
    user_id: { 
        type: Types.ObjectId, //Tipos de datos de moongose me permite relacionar datos de una coleccion con datos de otra coleccion
        ref: 'users', // nombre de la coleccion con la que se quiere referenciar
        required: true
    } 
},{
    timestamps: true
})

let collection = 'authors'

let Author = model(collection,shema)
export default Author