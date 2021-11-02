import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right:5px;
    }
    `
  ]
})
export class PorRegionComponent  {

  regiones:string[]=["Africa", "Americas", "Asia", "Europe", "Oceania"];
  regionActiva:string='';
  paises:Country[]=[];
  
  getClassCSS(region:string){
    return (region === this.regionActiva)? 'btn btn-primary':'btn btn-outline-primary'
  }

  constructor(private paisService: PaisService) { }

  activarRegion(region:string){

    if(region===this.regionActiva){return}
    this.regionActiva=region;
    
    this.paisService.getPaisRegion(region).subscribe(
      (paises)=>{
        this.paises=paises
      }
    )
  }

}
