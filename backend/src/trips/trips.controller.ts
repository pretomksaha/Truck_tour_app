import { Body, Controller, Get, Post, Param, Patch, Delete, Redirect } from "@nestjs/common";


import {TripsService} from './trips.service';

@Controller('trips')
export class TripsController {
    constructor ( private tripsService: TripsService) {}
        

        @Post()
        @Redirect('trips')
        async addTrip(
            @Body('id') tripId: string,
            @Body('number_plate') truckPlate: string,
            @Body('start_date') startDate: string,
            @Body('end_date') endDate: string,
            @Body('distance') distance: number,
            @Body('totalCost') totalCost: number,
        ) {
            const generatedID = await this.tripsService.insertTrip(
                tripId,
                truckPlate,
                startDate,
                endDate,
                distance,
                totalCost,
                );
                return Redirect();
        
    }

    @Get()
    async getAllTrips(){
        const trips= await this.tripsService.getTrips();
        return trips;
    }

    @Get(':SearchItem')
    getTrip(@Param('SearchItem') truckNP: string){
        return this.tripsService.getFindTrip(truckNP);
    }

    @Get('update/:id')
    getOneTrip(@Param('id') tripId: string){
        return this.tripsService.getSingleTrip(tripId);
    }

    @Post('update')
    @Redirect('../')
    async updateTrip(
        @Body('id') tripId: string,
            @Body('number_plate') truckPlate: string,
            @Body('start_date') startDate: string,
            @Body('end_date') endDate: string,
            @Body('distance') distance: number,
            @Body('totalCost') totalCost: number,){
            
            await this.tripsService.updateTrip(
                tripId,
                truckPlate,
                startDate,
                endDate,
                distance,
                totalCost,
            );
            return null;
    }

    @Delete('delete/:id')
    async removeTrip(@Param('id') tripId: string,){
        await this.tripsService.deleteTrip(tripId);
        return null;
    }
}