import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  _url = "http://localhost:8080/location"
  constructor(
    private http: HttpClient
  ) {
    console.log("Location Service");
   }

  public getLocations(){
    let header = new HttpHeaders()
      .set('Type-Content', 'application/json');
    return this.http.get(this._url+"/all",{
      headers : header
    });    
  }

  public postLocations(location: Location):Observable<Location>{    
    return this.http.post<Location>(this._url+"/create", location);
  }

  public getLocationById(id: number){
    let header = new HttpHeaders()
      .set('Type-Content', 'application/json');
    return this.http.get(this._url+"/get/"+id,{
      headers : header
    });

  }



}

// export interface Location {
//   id : number;
//   name : string;
//   area_m2 : Number;
//   parentLocation : Location;
// }

export class Location {
  public id!: number;
  public name : string;
  public area_m2 : Number;
  public parentLocation!: Location;

  constructor(){    
    this.name = ''
    this.area_m2 = 0    
  }


  public setId (id:number):void{
    this.id = id;
  }

  public setName(name:string):void{
    this.name = name;
    
  }
  public setArea(area_m2:Number):void{
    this.area_m2 = area_m2;
  }
  public setParentLocation(parentLocation:Location):void{
    this.parentLocation = parentLocation;
  }

  public getId():number{
    return this.id;
  }

  public getName():string{
    return this.name;
  }

  public getArea():Number{
    return this.area_m2;    
  }

  public getParentLocation():Location{
    return this.parentLocation;
  }
}