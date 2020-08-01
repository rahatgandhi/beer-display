import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/utils/services/common/common.service';
import { HttpParams } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})
export class BeerDetailComponent implements OnInit {
  public isloading:boolean =false;
  public addItemForm: FormGroup;
  public searchFilter = [];
  public randomData: any = {};
  public showresult:boolean = false;
  public submitted:boolean = false;
  baseurl = "https://api.punkapi.com/v2/beers"
  constructor(private commonService:CommonService,
              private formBuilder: FormBuilder,
              private http:HttpClient) {
   }

  ngOnInit() {
    this.getRandomData();
    this.addItemForm = this.formBuilder.group({
      name: ['', [Validators.required,Validators.pattern("^[ 0-9A-Za-z\s\-]+$")]],
      type: [''],
  });
  this.addItemForm.patchValue({  
    type: "beer_name"  
  });
 }
  get f() { return this.addItemForm.controls; }
  getRandomData(){
    
    this.isloading = true;
    this.commonService.getData('/random')
     .subscribe(response => {
      
       this.randomData =response[0];
       this.randomData.image
       this.isloading =false;
      }, (err) => {
      });
  }
  getdata(){
    this.isloading = true;
    this.commonService.getData('')
     .subscribe(response => {
       this.isloading =false;
      }, (err) => {
      });
  }
  Search(){
    this.submitted = true;
    if (this.addItemForm.invalid) {
      return;
  }
    let params = new HttpParams()
    .set( this.addItemForm.value.type, this.addItemForm.value.name)
    this.commonService.getData('?'+ params)
     .subscribe(response => {
       this.searchFilter = response;
       this.showresult = true;
       this.isloading =false;
      }, (err) => {
      });
  }
  }
