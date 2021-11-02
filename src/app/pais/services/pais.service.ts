import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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








}
