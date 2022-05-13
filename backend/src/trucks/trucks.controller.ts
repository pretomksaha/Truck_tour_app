import { Body, Controller, Get, Post, Param, Patch, Delete } from "@nestjs/common";

import {TrucksService} from './trucks.service';

@Controller('trucks')
export class TrucksController {
    constructor ( private trucksService: TrucksService) {}
        

        @Post()
        async addTruck(
            @Body('id') truckId: string,
            @Body('date') truckDate: string,
            @Body('number_plate') truckPlate: string,
            @Body('oil_type') truckOil: string,
            @Body('oil_capacity') truckCapacity: number,
            @Body('oil_price') truckPrice: number,
        ) {
            const generatedID = await this.trucksService.insertTruck(
                truckDate,
                truckPlate,
                truckOil,
                truckCapacity,
                truckPrice,
                );
                return {trucksid:generatedID};
        
    }

    @Get()
    async getAllTrucks(){
        const trucks= await this.trucksService.getTrucks();
        return trucks;
    }

    @Get(':id')
    getTruck(@Param('id') truckId: string){
        return this.trucksService.getSingleTruck(truckId);
    }

    @Patch(':id')
    async updateTruck(
        @Param('id') truckId: string,
        @Body('date') truckDate: string,
        @Body('number_plate') truckPlate: string,
        @Body('oil_type') truckOil: string,
        @Body('oil_capacity') truckCapacity: number,
        @Body('oil_price') truckPrice: number,){

            await this.trucksService.updateTruck(
                truckId,
                truckDate,
                truckPlate,
                truckOil,
                truckCapacity,
                truckPrice,
            );
            return null;
    }

    @Delete(':id')
    async removeTruck(@Param('id') truckId: string,){
        await this.trucksService.deleteTruck(truckId);
        return null;
    }
}