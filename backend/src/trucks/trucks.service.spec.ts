import { Test, TestingModule } from "@nestjs/testing";
import { TrucksService } from "./trucks.service";

describe('TrucksService',()=>{
    let service: TrucksService;

    const mockTrucksService = {
        insertTruck: jest.fn().mockImplementation(( date, number_plate, oil_type, oil_capacity, oil_price)=>({
            ...date,
            ...number_plate,
            ...oil_type,
            ...oil_capacity,
            ...oil_price,
        }))
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [TrucksService],
        })
        .overrideProvider(TrucksService)
        .useValue(mockTrucksService)
        .compile();

        service = module.get<TrucksService>(TrucksService);
    });

    it('should be define', ()=> {
        expect(service).toBeDefined();
    });

    it('should insert new truck info',() => {
        expect(service.insertTruck).toBeDefined();
        
    });

});