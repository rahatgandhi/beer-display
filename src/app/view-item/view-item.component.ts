import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/utils/services/common/common.service';
import { Itemtype } from '../add-item/itemtype.model';
@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  routeID: string;
  public model= new Itemtype('');
  isloading:boolean =false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private commonService : CommonService,
    private router: Router,
  ) {
    this.routeID = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getdata();
  }
  getdata(){
    this.isloading = true;
    this.commonService.getData('/'+ this.routeID)
     .subscribe(response => {
       this.isloading =false;
       this.model = response;
      
      }, (err) => {
        this.router.navigate(['/']);
      });
  }
  goBack(){
    this.router.navigate(['/']);
  }
  


}
