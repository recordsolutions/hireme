// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ApiProvider {

  constructor(private http:Http) {
    console.log('Hello ApiProvider Provider');
  }
  getMaidList() {
   
    return this.http.get('../../assets/Data/data.json')
        .map(res=>{
          return res.json().data;
        })
        .catch(this.handleErrorObservable);
} 
private handleErrorObservable (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.message || error);
    }

}
