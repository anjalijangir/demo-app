import { Injectable } from  '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject, of } from  'rxjs';

import { Storage } from  '@ionic/storage';
import { User } from  './user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  httpClient:  HttpClient, private  storage:  Storage) { }

  register(user: User): Observable<any> {
    this.storage.set("USER_NAME", user.name);  
    return new Observable(obs => obs.next("success"));    
  }

  login(user: User): Observable<any> {
    this.storage.set("USER_NAME", user.name);    
    return new Observable(obs => obs.next("success"));   
  }  
}
