import * as mongoose from 'mongoose';

export const TruckSchema= new mongoose.Schema({
        date: {type: String, required:true},
        number_plate: {type: String, required:true},
        oil_type: {type: String, required:true},
        oil_capacity: {type: Number, required:true},
        oil_price: {type: Number, required:true},

    }
);

export interface Truck extends mongoose.Document {
        id: string;
        date: string;
        number_plate: string;
        oil_type: string;
        oil_capacity: number;
        oil_price: number
}