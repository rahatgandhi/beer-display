export class BeerDetail {
    name:string;
    image_url:string;
    description:string;
    constructor(d:any){
      this.name = d.name;
      this.image_url = d.image_url;
      this.description = d.description;  
    }
}
