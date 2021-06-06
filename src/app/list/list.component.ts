import { Component, OnInit } from '@angular/core';
import { PersonaService, Location } from '../services/persona.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {  
  public locations:Array<any> = []


  constructor(private personaService: PersonaService) {
    this.personaService.getLocations().subscribe((resp:any) =>{
      console.log(resp);
      this.locations = resp;
    });

    
   }

  ngOnInit(): void {
  }



}
