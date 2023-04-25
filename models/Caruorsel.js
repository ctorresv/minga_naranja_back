import { Schema, model } from "mongoose";

let schema = new Schema(
    {
        cover_photo: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

let collection = "carousels"; 
let Caruorsel = model(collection, schema);

export default Caruorsel;