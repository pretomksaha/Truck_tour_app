import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TrucksController } from "./trucks.controller";
import { TrucksService } from "./trucks.service";
import { TruckSchema } from "./truck.model";

// Truck Module that integrate controllers, database and providers

@Module({
    imports: [MongooseModule.forFeature([{name: 'Truck',schema: TruckSchema}])],
    controllers: [TrucksController],
    providers: [TrucksService],
})
export class TrucksModule{}