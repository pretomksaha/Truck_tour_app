import { Injectable ,NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Truck } from './truck.model';

@Injectable()
export class TrucksService {
    trucks: Truck[] = [];

    constructor(@InjectModel('Truck') private readonly truckModel: Model<Truck>){}

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
        return result.id as string;
    }

    async getTrucks(){
        const trucks = await this.truckModel.find().exec();
        return trucks.map( trk=> ({
            id: trk.id,
            data: trk.date,
            number_plate: trk.number_plate,
            oil_type: trk.oil_type,
            oil_capacity: trk.oil_capacity,
            oil_price: trk.oil_price, 
        }));
    }

    async getSingleTruck(truckID: string){
        const truck = await this.findtruck(truckID);
        return truck;
    }

    async updateTruck(
        truckID: string,
        date:string,
        number_plate: string, 
        oil_type: string, 
        oil_capacity: number, 
        oil_price: number){
            const updatedTruck= await this.findtruck(truckID)
            if(number_plate){
                updatedTruck.number_plate= number_plate;
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
            updatedTruck.save();
            
    }

    async deleteTruck(truckID: string){
        const result= await this.truckModel.deleteOne({_id: truckID}).exec();
        if(result.deletedCount===0){
            throw new NotFoundException('could not Deleted');
        };
    }

    private async findtruck(id: string): Promise<Truck> {
        let truck;
        try{
           truck = await this.truckModel.findById(id).exec();
        } catch(error){
            throw new NotFoundException('could not Found');
        }
        if (!truck){
            throw new NotFoundException('could not Found');
        }
        return truck;

    }



}