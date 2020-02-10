import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'unique-selling-points',
  templateUrl: './unique-selling-points.component.html',
  styleUrls: ['./unique-selling-points.component.css']
})
export class UniqueSellingPointsComponent implements OnInit {
  @Input() title: string;
  @Input() contents: any;

  constructor() { }

  ngOnInit() {
  }

}
