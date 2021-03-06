import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageResolverService implements Resolve<any> {
   

  constructor(private router: Router, private http: HttpClient) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('umb-project-alias', 'daves-understanding-wombat')
      .set('Accept-Language', 'en-US')
    //.set('Accept-Language', 'en-AU')
      //.set('umb-project-alias', 'demo-headless');


    return this.http.get('https://cdn.umbraco.io/content/url?url=/' + route.url.join("/"), {
      headers: headers
    });

  }
}
