import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.css']
})
export class ComicComponent implements OnInit {
  
  @Input() comic: any;

  constructor() { }

  ngOnInit(): void {
  }

}
