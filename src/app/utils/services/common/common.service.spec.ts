import { TestBed } from '@angular/core/testing';

import { CommonService } from './common.service';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
describe('CommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule,HttpClientTestingModule,RouterTestingModule]
  }));

  it('should be created', () => {
    const service: CommonService = TestBed.get(CommonService);
    expect(service).toBeTruthy();
  });
});
