import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { CommonService } from '../common/common.service';
import { HttpClientModule, } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
describe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule,HttpClientTestingModule,RouterTestingModule]
  }));

  it('should be created', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });
});
