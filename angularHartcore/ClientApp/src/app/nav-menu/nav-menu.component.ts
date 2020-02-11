import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  navItems = null;

  constructor(private http: HttpClient) { }
  children: any;
    ngOnInit(): void {
      const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        //.set('Accept-Language', 'en-AU')
       // .set('umb-project-alias', 'davids-intuitive-red-panda')
        .set('umb-project-alias', 'daves-understanding-wombat')
        .set('Accept-Language', 'en-US')
        //.set('umb-project-alias', 'demo-headless');

    
      this.http.get('https://cdn.umbraco.io/content/url?url=/', {
        headers: headers
      })
        .subscribe((data : any) => {
        console.log(data)

          this.http.get(data._links.children.href, {
              headers: headers
            }).subscribe((children:any) => {
              console.info(children)
              this.children = children._embedded.content
        });


          //this.http.get(data._links.content.href, {
          //  headers: headers
          //}).subscribe((children: any) => {
          //  console.info(children)
          //  this.children = children._embedded.content
          //});


      });
    }
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
