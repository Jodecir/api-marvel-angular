import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  SECTION = 'characters'
  URL_API = `${environment.apiUrl}/${this.SECTION}?ts=${environment.timestamp}&apikey=${environment.apiPubKey}&hash=${environment.apiHashedKey}`;

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any) => data.data.results))
  }

  getCharacterDetail(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${this.SECTION}/${id}?ts=${environment.timestamp}&apikey=${environment.apiPubKey}&hash=${environment.apiHashedKey}`);
  }

  getCharacterComics(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${this.SECTION}/${id}/comics?ts=${environment.timestamp}&apikey=${environment.apiPubKey}&hash=${environment.apiHashedKey}`);
  }

  searchCharacters(name: string) {
    return this.http.get<any[]>(`${this.URL_API}&nameStartsWith=${name}`);
  }
}