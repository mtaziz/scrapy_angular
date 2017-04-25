import { Http, Headers, Jsonp, Response } from '@angular/http';
import { Injectable } 			from '@angular/core';
import { Observable } 			from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EdekaService {
  temp: any[];

  apiAllData: any = [];

  constructor(private http:Http) { 
    // var headers = new Headers();
    // this.
    // headers.append('Content-Type', 'application/json');

  }
  // Uses http.get() to load a single JSON file
  

  getFoods() {
    return this.http.get('http://localhost:8000/dashboard').map((res:Response) => res.json());
  }

  postStartScrapy() {
    console.log("FSDFSFSF");
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:8000/dashboard', JSON.stringify({ "flagStart" : 1 }), { headers : headers })
      .map((res:Response) => res.json());
  }

  postEndScrapy() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:8000/dashboard', JSON.stringify({ "flagStart" : 0 }), { headers : headers })
      .map((res:Response) => res.json());
  }

  getScrapedData() {
    return this.http.get('http://localhost:8000/dashboard')
      .map((res:Response) => res.json())
      .do((data) => {
          localStorage.setItem('temp', JSON.stringify(data));
      });
  }

  getStorage() {
    if(localStorage.getItem('temp') == null)
      return {};
    // console.log("Strogag: ", JSON.parse(localStorage.getItem('temp')));
    return JSON.parse(localStorage.getItem('temp'));

  }

  getProductFromDB() {
    console.log('Here DB')
    return this.http.get('http://checkoutserviceenvironment.wswvg3payj.eu-central-1.elasticbeanstalk.com/productdescriptions')
      .map((res:Response) => res.json())
      .do((data) => {
        console.log("db: ", data)
      });
  }

  getDataAPI() {
    // console.log('Here API')
    if(localStorage.getItem('apiData') == null)
      return {};
    // console.log('API: ', JSON.parse(localStorage.getItem('apiData')));
    return JSON.parse(localStorage.getItem('apiData'));
  }

  // getRealData(res:any) {
  //   let body = res.json();
  //   return body || {};
  // }
  // Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
  // The entire operation will result in an error state if any single request fails.
  getBooksAndMovies() {
    return Observable.forkJoin(
      this.http.get('/app/books.json').map((res:Response) => res.json()),
      this.http.get('/app/movies.json').map((res:Response) => res.json())
    );
  }

  private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }


    getApiAllData() {
      return this.apiAllData;
    }

    setApiAllData(data: any ) {
      this.apiAllData = data;
    }
}