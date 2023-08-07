import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  standalone: true,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [MainComponent, SidenavComponent],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
