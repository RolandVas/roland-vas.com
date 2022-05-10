import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  header = ['Pokedex', 'Elpollo Loco', 'ToDo app'];

  constructor() { }

  ngOnInit(): void {
  }

}
