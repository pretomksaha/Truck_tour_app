import { Injectable ,NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Trip } from './trip.model';

// Service methods for Truck Tour (CRUD)
@Injectable()
export class TripsService {
    trips: Trip[] = [];

    constructor(@InjectModel('Trip') private readonly tripModel: Model<Trip>){}

    async insertTrip(
        trip_id:string,
        number_plate: string, 
        start_date: string,
        end_date: string, 
        distance: number,
        liter_price: number, 
        total_cost: number
        ) {
        const newTrip= new this.tripModel({
            trip_id,
            number_plate,
            start_date,
            end_date,
            distance,
            liter_price,
            total_cost,
        });
        const result= await newTrip.save();
        return result;
    }

    async getTrips(){
        const trips = await this.tripModel.find().exec();
        return trips.map( trip => ({
            id: trip.id,
            trip_id: trip.trip_id,
            number_plate: trip.number_plate,
            start_date: trip.start_date,
            end_date: trip.end_date,
            distance: trip.distance,
            liter_price:trip.liter_price,
            total_cost: trip.total_cost, 
        }));
    }

    async getFindTrip(tripNP: string){
        const trips = await this.tripModel.find({number_plate: tripNP}).exec();
        return trips.map( trip => ({
            id: trip.id,
            trip_id: trip.trip_id,
            number_plate: trip.number_plate,
            start_date: trip.start_date,
            end_date: trip.end_date,
            distance: trip.distance,
            liter_price:trip.liter_price,
            total_cost: trip.total_cost,  
        }));;
    }

    async getSingleTrip(tripID: string){
        const trip = await this.findsingletrip(tripID);
        return {
            id: trip.id,
            trip_id: trip.trip_id,
            number_plate: trip.number_plate,
            start_date: trip.start_date,
            end_date: trip.end_date,
            distance: trip.distance,
            liter_price: trip.liter_price,
            total_cost: trip.total_cost,  
        };
    }

    async updateTrip(
        trip_id:string,
        number_plate: string, 
        start_date: string,
        end_date: string, 
        distance: number,
        liter_price: number, 
        total_cost: number){
            const updatedTrip= await this.findsingletrip(trip_id)
            let date= start_date.split('-');
            let newdate=date.join('');
            if(number_plate){
                updatedTrip.trip_id=newdate+number_plate;
                updatedTrip.number_plate= number_plate;
                updatedTrip.liter_price = liter_price;
            }     
            if(start_date){
                updatedTrip.trip_id=newdate+number_plate;
                updatedTrip.start_date= start_date;
            }      
            if(end_date){
                updatedTrip.end_date= end_date;
            }
            if(distance){
                updatedTrip.distance= distance;
            }
            if(total_cost){
                updatedTrip.total_cost= total_cost;
            }
            return updatedTrip.save();  
    }

    async deleteTrip(tripID: string){
        const result= await this.tripModel.deleteOne({_id: tripID}).exec();
        if(result.deletedCount===0){
            throw new NotFoundException('could not Deleted');
        };
    }

    private async findsingletrip(tripID: string): Promise<Trip> {
        let trip;
        try{
           trip = await this.tripModel.findOne({_id:tripID}).exec();
        } catch(error){
            throw new NotFoundException('could not Found');
        }
        if (!trip){
            throw new NotFoundException('could not Found');
        }
        return trip;

    }



}