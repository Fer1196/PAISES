import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {


    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.paisService.getPaisPorAlpha( id )  ),
        tap(console.log)
      )
      .subscribe( (pais) => {
        this.pais = pais [0];
       console.log(this.pais.postalCode?.format)
      }
      );

      /*this.activatedRoute.params
        .subscribe( ({id})=>{
          this.paisService.getPaisPorAlpha(id)
          .subscribe((pais:any)=>{

            this.pais=pais[0];
            console.log(this.pais.fifa)
            
           
          })

        }

        );*/
  }
}

    /*this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.paisService.getPaisPorAlpha( id )  ),
        tap(console.log)
      )
      .subscribe( (pais:Country) => {this.pais = pais 
       console.log(pais.fifa)
      }
      );*/