import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css'],
  imports: [ConversationComponent, Component],
})
export class ConversationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
