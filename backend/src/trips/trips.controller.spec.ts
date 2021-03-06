import { Test, TestingModule } from "@nestjs/testing";
import { TripsController } from "./trips.controller";
import { TripsService } from "./trips.service";

// unittest for Trips Controller
describe('TripsController',()=>{
    let controller: TripsController;

    const mockTripsService = {
        
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [TripsController],
            providers: [TripsService],
        })
        .overrideProvider(TripsService)
        .useValue(mockTripsService)
        .compile();

        controller = module.get<TripsController>(TripsController);
    });

    // test case to check cotroller defind
    it('should be define', ()=> {
        expect(controller).toBeDefined();
    });

    it('should be define addTruck for new Trip', ()=> {
        expect(controller.addTrip).toBeDefined();
    });

    it('should be update Trip', ()=> {
        
        expect(controller.updateTrip).toBeDefined();
    });
});