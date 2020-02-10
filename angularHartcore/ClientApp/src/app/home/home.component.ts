import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
   
  pageData: any;

  constructor(private route: ActivatedRoute, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.data
      .subscribe((data: { pageData: any }) => {
        this.pageData = data.pageData;
      });

    console.log(this.pageData);
  }


  getSanitized(val: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(val);
  }

  getHeroBackground() {
    let bg = "background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))";
    if (this.pageData.heroImage != null) {
      bg += ', url(' + this.pageData.heroImage._url + '?width=1980&height=430&mode=crop)' 
    }

    return this.sanitizer.bypassSecurityTrustStyle(bg);
   
  }
}
