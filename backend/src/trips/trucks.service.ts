import { Injectable ,NotFoundException } from "@nestjs/common";

import { Truck } from './truck.model';

@Injectable()
export class TrucksService {
    trucks: Truck[] = [];

    insertTruck(
        id:string,
        date:string,
        number_plate: string, 
        oil_type: string, 
        oil_capacity: number, 
        oil_price: number
        ) {
        const newTruck= new Truck(
            id,
            date,
            number_plate,
            oil_type,
            oil_capacity,
            oil_price
            )
        this.trucks.push(newTruck)
    }

    getTrucks(){
        return [...this.trucks];
    }

    getSingleTruck(truckID: string){
        const truck = this.findtruck(truckID)[0];
        return {...truck};
    }

    updateTruck(
        truckID: string,
        date:string,
        number_plate: string, 
        oil_type: string, 
        oil_capacity: number, 
        oil_price: number){
            const [truck,index] = this.findtruck(truckID);
            const updatedTruck={...truck}

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
            this.trucks[index]=updatedTruck;
            
    }

    deleteTruck(truckID: string){
        const index=this.findtruck(truckID)[1];
        this.trucks.splice(index,1);

    }

    private findtruck(id: string): [Truck, number] {
        const truckIndex= this.trucks.findIndex((trk)=>trk.id===id);
        const truck= this.trucks[truckIndex];
        if (!truck){
            throw new NotFoundException('could not Found');
        }
        return [truck,truckIndex];

    }



}