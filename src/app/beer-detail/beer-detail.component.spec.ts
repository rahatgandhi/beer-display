import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatRadioModule} from '@angular/material/radio';
import { BeerDetailComponent } from './beer-detail.component';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { CommonService } from 'src/app/utils/services/common/common.service';
import { RouterTestingModule } from '@angular/router/testing';
describe('BeerDetailComponent', () => {
  let component: BeerDetailComponent;
  let fixture: ComponentFixture<BeerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerDetailComponent ],
      imports:[FormsModule,ReactiveFormsModule,MatRadioModule,HttpClientTestingModule,HttpClientModule,RouterTestingModule],
      providers:[CommonService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
