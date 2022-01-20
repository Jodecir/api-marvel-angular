import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  WEBSITE = 'https://gateway.marvel.com:443/v1/public'
  SECTION = 'characters'
  TS = "2021"
  PUBLIC_KEY = '5a237863b3cc2061003cbbc4fe20dc06';
  HASH = '04bc75e5de9e0c176cb73442c4ba0328';
  URL_API = `${this.WEBSITE}/${this.SECTION}?ts=${this.TS}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any) => data.data.results))
  }

  getCharacterDetail(id: string): Observable<any> {
    return this.http.get<any>(`${this.WEBSITE}/${this.SECTION}/${id}?ts=${this.TS}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`);
  }

  getCharacterComics(id: string): Observable<any> {
    return this.http.get<any>(`${this.WEBSITE}/${this.SECTION}/${id}/comics?ts=${this.TS}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`);
  }

  searchCharacters(name: string) {
    return this.http.get<any[]>(`${this.URL_API}&nameStartsWith=${name}`);
  }
}