import * as mongoose from 'mongoose';

export const TripSchema= new mongoose.Schema({
        trip_id: {type: String, required:true, index: true, unique: true},
        number_plate: {type: String, required:true},
        start_date: {type: String, required:true},
        end_date: {type: String, required:true},
        distance: {type: Number, required:true},
        liter_price: {type: Number, required:true},
        total_cost: {type: Number, required:true},

    }
);

export interface Trip extends mongoose.Document {
        id: string;
        trip_id: string;
        number_plate: string;
        start_date: string;
        end_date: string;
        distance: number;
        liter_price: number;
        total_cost: number
}