import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComicsApiService {
  SECTION = 'comics'
  URL_API = `${environment.apiUrl}/${this.SECTION}?ts=${environment.timestamp}&apikey=${environment.apiPubKey}&hash=${environment.apiHashedKey}`;
  constructor(private http: HttpClient) { }

  getAllComics(): Observable<any> {
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any) => data.data.results))
  }
}