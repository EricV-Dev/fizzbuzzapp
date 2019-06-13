import { TestBed, getTestBed } from "@angular/core/testing";

import { DataService } from "./fizzbuzz.service";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { Data } from "src/models/data.model";

describe("DataService", () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });

    service = TestBed.get(DataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should retrieve data from the API via Get", () => {
    const dummyData: Data[] = [{ body: 2 }, { body: 3 }];

    service.getFizzBuzz().subscribe(datas => {
      expect(datas.length).toBe(2);
      expect(datas).toEqual(dummyData);
    });
    const request = httpMock.expectOne(`${service.ROOT_URL}`);
    expect(request.request.method).toBe("GET");
    request.flush(dummyData);
  });
});
