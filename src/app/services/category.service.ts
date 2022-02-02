import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
const API_URL = 'http://localhost:8080/api/homes/findAllCategory';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(  private httpClient: HttpClient) {
  }

  getAll(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(API_URL)
  }
}
