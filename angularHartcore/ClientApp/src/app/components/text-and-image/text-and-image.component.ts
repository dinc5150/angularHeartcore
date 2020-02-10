import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'text-and-image',
  templateUrl: './text-and-image.component.html',
  styleUrls: ['./text-and-image.component.css']
})
export class TextAndImageComponent implements OnInit {
  @Input() model: string;
  //@Input() Title: string;
  //@Input() Text: string;
  //@Input() ShowLargeImage: boolean;
  //@Input() ImageUrl: string = null;

  constructor() { }

  ngOnInit() {
  }

}
