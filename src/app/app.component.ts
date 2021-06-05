import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonaService, Location } from './services/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public re!: HttpResponse<Location>
  public resp:any
  
  public locations:Array<any> = []

  
  public parentLocation = new Location();
  public newLocation = new Location();

  

  locationForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private personaService: PersonaService){
    this.personaService.getLocations().subscribe((resp:any) =>{
      // console.log(resp);
      this.locations = resp
    });
  }

  ngOnInit(){
    this.initializaForm();
  }

  initializaForm():void{
    this.locationForm = this.fb.group({
      name: new FormControl(''),
      area_m2:  new FormControl(''),
      parentLocation:  new FormControl('')
    });
  } 

 selectLocation():void {
   console.log("metodo para seleccionar la ubicacion");
 }

  onSubmit(): any {
    
    //  console.log(this.locationForm.get('name')?.value);
    //  console.log(this.locationForm.get('area_m2')?.value);
    //  console.log(this.locationForm.get('parentLocation')?.value);


    this.newLocation.setName(this.locationForm.get('name')?.value);
    this.newLocation.setArea(this.locationForm.get('area_m2')?.value);

    // console.log(this.newLocation.getName());
    // console.log(this.newLocation.getArea());
    // this.newLocation.setParentLocation(this.locationForm.get('parentLocation')?.value);


    //  console.log(this.newLocation); 
     
    //  console.log(this.locationForm.get('name')?.value);
    //  console.log(this.locationForm.get('area_m2')?.value);
    //  console.log(this.locationForm.get('parentLocation')?.value);
     
     

    for (let index = 0; index < this.locations.length; index++) {
      if (this.locations[index].name === this.newLocation.name){
        return alert("Error: Una ubicación con el mismo nombre ya está registrada.");
      }    
      //console.log(this.locations[index].name);      
    }
    
    if (this.locationForm.get('parentLocation')?.value == -1){
      return this.personaService.postLocations(this.newLocation).subscribe((resp:any)=>{
        console.log(resp);
      });
    }

    else{
      
      const id = this.locationForm.get('parentLocation')?.value;      
      
      

      return this.personaService.getLocationById(id).subscribe((res:any)=>{
        this.parentLocation.setId(res.id);
        this.parentLocation.setName(res.name);
        this.parentLocation.setArea(res.area_m2);

        this.newLocation.setParentLocation(this.parentLocation);
        console.log(this.parentLocation);   
        console.log(this.newLocation);
        return this.personaService.postLocations(this.newLocation).subscribe((resp:any)=>{
          console.log(resp);
        });

      });  

    
      //  console.log(this.locationForm.get('name')?.value)
      //  console.log(this.locationForm.get('area_m2')?.value)
      
      
      // this.newLocation.setName(this.locationForm.get('name')?.value);
      // this.newLocation.setArea(this.locationForm.get('area_m2')?.value);
      
            
      // console.log(this.newLocation.getName());
      // console.log(this.newLocation.getArea());

      // return this.personaService.getLocationById(id).subscribe((res:any)=>{
      //   console.log("get parent location");
      //   console.log(res);
      //   this.resp = res;
      // });    



      // this.newLocation.parentLocation =  pL;
      // console.log(this.newLocation.parentLocation);
      // console.log(this.newLocation);
      // this.newLocation.parentLocation = this.parentLocation;
      // this.personaService.postLocations(this.newLocation).subscribe((resp:any)=>{
      //   console.log(resp);
      // });
    }
    
  

    //console.log(this.locationForm);
  }


  // isParentEmpty():boolean{
  //   if (this.locationForm.get('parentLocation'))
  // }
  

  getParentLocation(id:number):any{
    return this.personaService.getLocationById(id).subscribe((res:any)=>{
       console.log("get parent location");       
       this.resp = res;
     });    

  }
}


