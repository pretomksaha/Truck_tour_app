import { Body, Controller, Get, Post, Param, Patch, Delete, Redirect } from "@nestjs/common";


import {TripsService} from './trips.service';

// Controller for truck trips
@Controller('trips')
export class TripsController {
    constructor ( private tripsService: TripsService) {}
        

        @Post()
        @Redirect('trucks')
        // handle post methods 
        async addTrip(
            @Body('id') tripId: string,
            @Body('number_plate') truckPlate: string,
            @Body('start_date') startDate: string,
            @Body('end_date') endDate: string,
            @Body('distance') distance: number,
            @Body('liter_price') liter_price: number,
            @Body('total_cost') totalCost: number,
        ) {
            let date= startDate.split('-'); 
            let newdate=date.join(''); 
            tripId = newdate+truckPlate; // create a uniqe id= YYYYMMDD+Number Plate
            const generatedID = await this.tripsService.insertTrip(
                tripId,
                truckPlate,
                startDate,
                endDate,
                distance,
                liter_price,
                totalCost,
                );
                return generatedID;
        
    }

    @Get()
    // handle get methods for all data
    async getAllTrips(){
        const trips= await this.tripsService.getTrips();
        return trips;
    }

    @Get(':SearchItem')
    // handle get methods for single data
    getTrip(@Param('SearchItem') truckNP: string){
        return this.tripsService.getFindTrip(truckNP);
    }

    @Get('update/:id')
    // handle get methods to get data of updating table 
    getOneTrip(@Param('id') tripId: string){
        return this.tripsService.getSingleTrip(tripId);
    }

    @Post('update')
    @Redirect('../')
    // handle post methods for update data
    async updateTrip(
            @Body('id') tripId: string,
            @Body('number_plate') truckPlate: string,
            @Body('start_date') startDate: string,
            @Body('end_date') endDate: string,
            @Body('distance') distance: number,
            @Body('liter_price') liter_price: number,
            @Body('total_cost') totalCost: number,){
            
            return await this.tripsService.updateTrip(
                tripId,
                truckPlate,
                startDate,
                endDate,
                distance,
                liter_price,
                totalCost,
            );;
    }

    @Delete('delete/:id')
    // handle delete mathods
    async removeTrip(@Param('id') tripId: string,){
        await this.tripsService.deleteTrip(tripId);
        return null;
    }
}