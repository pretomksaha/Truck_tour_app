 import { Test, TestingModule } from "@nestjs/testing";
import { TrucksController } from "./trucks.controller";
import { TrucksService } from "./trucks.service";

describe('TrucksControLLer',()=>{
    let controller: TrucksController;

    const mockTrucksService = {
        updateTruck: jest.fn().mockImplementation((id, date, number_plate, oil_type, oil_capacity, oil_price)=>({
            id,
            ...date,
            ...number_plate,
            ...oil_type,
            ...oil_capacity,
            ...oil_price,
        }))
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [TrucksController],
            providers: [TrucksService],
        })
        .overrideProvider(TrucksService)
        .useValue(mockTrucksService)
        .compile();

        controller = module.get<TrucksController>(TrucksController);
    });

    it('should be define', ()=> {
        expect(controller).toBeDefined();
    });

    it('should be define addTruck for new Truck', ()=> {
        expect(controller.addTruck).toBeDefined();
    });

    it('should be update Truck', ()=> {
        
        expect(controller.updateTruck).toBeDefined();
    });

});