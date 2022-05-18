import { Body, Controller, Get, Post, Param, Patch, Delete, Redirect } from "@nestjs/common";
import {TrucksService} from './trucks.service';


// Truck Controller
@Controller('trucks')
export class TrucksController {
    constructor ( private trucksService: TrucksService) {}
        

        @Post()
        @Redirect('trucks')
        // handle post methods
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
                return generatedID;
        
    }

    @Get()
    // handle get methods for all data
    async getAllTrucks(){
        const trucks= await this.trucksService.getTrucks();
        return trucks;
    }

    @Get(':SearchItem')
    // handle get methods for single data
    getTruck(@Param('SearchItem') truckNP: string){
        return this.trucksService.getFindTruck(truckNP);
    }

    @Get('update/:id')
    // handle get methods to get data of updating table 
    getOneTruck(@Param('id') truckId: string){
        return this.trucksService.getSingleTruck(truckId);
    }

    @Post('update')
    @Redirect('../')
    // handle post methods for update data
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
            return await this.trucksService.updateTruck(
                truckId,
                truckDate,
                truckPlate,
                truckOil,
                truckCapacity,
                truckPrice,
            );
    }

    @Delete('delete/:id')
    // handle delete mathods
    async removeTruck(@Param('id') truckId: string,){
        await this.trucksService.deleteTruck(truckId);
        return null;
    }
}