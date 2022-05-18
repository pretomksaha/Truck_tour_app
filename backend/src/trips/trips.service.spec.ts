import { Test, TestingModule } from "@nestjs/testing";
import { TripsService } from "./trips.service";

describe('TripsService',()=>{
    let service: TripsService;

    const mockTripsService = {
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [TripsService],
        })
        .overrideProvider(TripsService)
        .useValue(mockTripsService)
        .compile();

        service = module.get<TripsService>(TripsService);
    });

    it('should be define', ()=> {
        expect(service).toBeDefined();
    });

});