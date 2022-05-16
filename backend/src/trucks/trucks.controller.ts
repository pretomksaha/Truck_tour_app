import { Body, Controller, Get, Post, Param, Patch, Delete, Redirect, Res } from "@nestjs/common";
import { response } from "express";

import {TrucksService} from './trucks.service';

@Controller('trucks')
export class TrucksController {
    constructor ( private trucksService: TrucksService) {}
        

        @Post()
        @Redirect('trucks')
        async addTruck(
            @Body('id') truckId: string,
            @Body('number_plate') truckPlate: string,
            @Body('date') truckDate: string,
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
                return Redirect();
        
    }

    @Get()
    async getAllTrucks(){
        const trucks= await this.trucksService.getTrucks();
        return trucks;
    }

    @Get(':SearchItem')
    getTruck(@Param('SearchItem') truckNP: string){
        return this.trucksService.getFindTruck(truckNP);
    }

    @Get('update/:id')
    getOneTruck(@Param('id') truckId: string){
        return this.trucksService.getSingleTruck(truckId);
    }

    @Post('update')
    @Redirect('../')
    async updateTruck(
        @Body('id') truckId: string,
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

    @Delete('delete/:id')
    async removeTruck(@Param('id') truckId: string,){
        await this.trucksService.deleteTruck(truckId);
        return null;
    }
}