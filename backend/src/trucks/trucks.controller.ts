import { Body, Controller, Get, Post, Param, Patch, Delete } from "@nestjs/common";

import {TrucksService} from './trucks.service';

@Controller('trucks')
export class TrucksController {
    constructor ( private trucksService: TrucksService) {}
        

        @Post()
        addTruck(
            @Body('id') truckId: string,
            @Body('date') truckDate: string,
            @Body('number_plate') truckPlate: string,
            @Body('oil_type') truckOil: string,
            @Body('oil_capacity') truckCapacity: number,
            @Body('oil_price') truckPrice: number,
        ) {
            const generatedID = this.trucksService.insertTruck(
                truckId,
                truckDate,
                truckPlate,
                truckOil,
                truckCapacity,
                truckPrice,
                );
                return {trucksid:generatedID};
        
    }

    @Get()
    getAllTrucks(){
        return this.trucksService.getTrucks();
    }

    @Get(':id')
    getTruck(@Param('id') truckId: string,){
        return this.trucksService.getSingleTruck(truckId);
    }

    @Patch(':id')
    updateTruck(
        @Param('id') truckId: string,
        @Body('date') truckDate: string,
        @Body('number_plate') truckPlate: string,
        @Body('oil_type') truckOil: string,
        @Body('oil_capacity') truckCapacity: number,
        @Body('oil_price') truckPrice: number,){

            this.trucksService.updateTruck(
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
    removeTruck(@Param('id') truckId: string,){
        this.trucksService.deleteTruck(truckId);
        return null;
    }
}