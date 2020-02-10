import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() image: any;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }


  getHeroBackground() {
    let bg = "background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))";
    if (this.image != null) {
      bg += ', url(' + this.image._url + '?width=1980&height=430&mode=crop)'
    }

    return this.sanitizer.bypassSecurityTrustStyle(bg);

  }
}
