import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TripsController } from "./trips.controller";
import { TripsService } from "./trips.service";
import { TripSchema } from "./trip.model";


// Trip Module that integrate controllers, database and providers 

@Module({
    imports: [MongooseModule.forFeature([{name: 'Trip',schema: TripSchema}])],
    controllers: [TripsController],
    providers: [TripsService],
})
export class TripsModule{}