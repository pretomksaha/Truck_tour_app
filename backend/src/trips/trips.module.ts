import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";


import { TripsController } from "./trips.controller";
import { TripsService } from "./trips.service";
import { TripSchema } from "./trip.model";

@Module({
    imports: [MongooseModule.forFeature([{name: 'Trip',schema: TripSchema}])],
    controllers: [TripsController],
    providers: [TripsService],
})
export class TripsModule{}