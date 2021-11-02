import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.com/v3.1';


  constructor(private http:HttpClient) { }

  
  buscarPais(termino:string): Observable<Country[]>{
    const url=`${this.apiUrl}/name/${termino}`;
    //const url= "https://restcountries.com/v3.1/name/fran"
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino:string): Observable<Country[]>{
    const url=`${this.apiUrl}/capital/${termino}`;
    //const url= "https://restcountries.com/v3.1/name/fran"
    return this.http.get<Country[]>(url);
  }
  //https://restcountries.com/v3.1/alpha/EG
  getPaisPorAlpha(id:string): Observable<Country>{
    const url=`https://restcountries.com/v3.1/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  //REGION
  getPaisRegion(id:string):Observable<Country[]>{
    //V3
    const url =`https://restcountries.com/v3.1/region/${id}`
    return this.http.get<Country[]>(url);
    //V2
    /*const params = new HttpParams()
      .set('fields','name,capital,alpha2code,flag,population' )
    const url = `https://restcountries.com/v2/regionalbloc/${id}`
    
    return this.http.get<Country[]>(url,{params})
      .pipe(
        tap(console.log)
      )*/
  }










}
