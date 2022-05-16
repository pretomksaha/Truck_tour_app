import { Injectable ,NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Trip } from './trip.model';

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
        total_cost: number
        ) {
        const newTrip= new this.tripModel({
            trip_id,
            number_plate,
            start_date,
            end_date,
            distance,
            total_cost,
        });
        const result= await newTrip.save();
        return null;
    }

    async getTrips(){
        const trips = await this.tripModel.find().exec();
        return trips.map( trk=> ({
            id: trk.id,
            trip_id: trk.trip_id,
            number_plate: trk.number_plate,
            start_date: trk.start_date,
            end_date: trk.end_date,
            distance: trk.distance, 
        }));
    }

    async getFindTrip(tripNP: string){
        const trips = await this.tripModel.find({number_plate: tripNP}).exec();
        return trips.map( trk=> ({
            id: trk.id,
            trip_id: trk.trip_id,
            number_plate: trk.number_plate,
            start_date: trk.start_date,
            end_date: trk.end_date,
            distance: trk.distance, 
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
        };
    }

    async updateTrip(
        trip_id:string,
        number_plate: string, 
        start_date: string,
        end_date: string, 
        distance: number, 
        total_cost: number){
            const updatedTrip= await this.findsingletrip(trip_id)
            if(number_plate){
                updatedTrip.trip_id=trip_id;
                updatedTrip.number_plate= number_plate;
            }     
            if(start_date){
                updatedTrip.trip_id=trip_id;
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
            updatedTrip.save();  
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