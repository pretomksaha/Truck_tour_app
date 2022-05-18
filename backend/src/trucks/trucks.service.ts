import { Injectable ,NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Truck } from './truck.model';

// Service methods for Truck (CRUD)
@Injectable()
export class TrucksService {
    trucks: Truck[] = [];

    constructor(@InjectModel('Truck') private readonly truckModel: Model<Truck>){}

    // Insert new data in Truck data collection.
    async insertTruck(
        date:string,
        number_plate: string, 
        oil_type: string, 
        oil_capacity: number, 
        oil_price: number
        ) {
        const newTruck= new this.truckModel({
            date,
            number_plate,
            oil_type,
            oil_capacity,
            oil_price,
        });
        const result= await newTruck.save();
        return  result;
    }

    // Get all Truck information from database.
    async getTrucks(){
        const trucks = await this.truckModel.find().exec();
        return trucks.map( trk=> ({
            id: trk.id,
            date: trk.date,
            number_plate: trk.number_plate,
            oil_type: trk.oil_type,
            oil_capacity: trk.oil_capacity,
            oil_price: trk.oil_price, 
        }));
    }

    // Find spacific Truck information using truck number plate 
    async getFindTruck(truckNP: string){
        const trucks = await this.truckModel.find({number_plate: truckNP}).exec();
        return trucks.map( trk=> ({
            id: trk.id,
            date: trk.date,
            number_plate: trk.number_plate,
            oil_type: trk.oil_type,
            oil_capacity: trk.oil_capacity,
            oil_price: trk.oil_price, 
        }));;
    }

    // Find spacific Truck information using database input id. 
    async getSingleTruck(truckID: string){
        const truck = await this.findsingletruck(truckID);
        return {
            id: truck.id,
            date: truck.date,
            number_plate: truck.number_plate,
            oil_type: truck.oil_type,
            oil_capacity: truck.oil_capacity,
            oil_price: truck.oil_price, 
        };
    }

    // Update the existing data for specific truck.
    async updateTruck(
        truckID: string,
        date:string,
        number_plate: string, 
        oil_type: string, 
        oil_capacity: number, 
        oil_price: number){
            const updatedTruck= await this.findsingletruck(truckID)
            if(number_plate){
                updatedTruck.number_plate= number_plate;
            }     
            if(date){
                updatedTruck.date= date;
            }      
            if(oil_type){
                updatedTruck.oil_type= oil_type;
            }
            if(oil_capacity){
                updatedTruck.oil_capacity= oil_capacity;
            }
            if(oil_price){
                updatedTruck.oil_price= oil_price;
            }
            return updatedTruck.save();
            
    }

    // Delete informtion from database.
    async deleteTruck(truckID: string){
        const result= await this.truckModel.deleteOne({_id: truckID}).exec();
        if(result.deletedCount===0){
            throw new NotFoundException('could not Deleted');
        };
    }

    // Find methods for single truck information via _id
    private async findsingletruck(truckID: string): Promise<Truck> {
        let truck;
        try{
           truck = await this.truckModel.findOne({_id:truckID}).exec();
        } catch(error){
            throw new NotFoundException('could not Found');
        }
        if (!truck){
            throw new NotFoundException('could not Found');
        }
        return truck;

    }



}