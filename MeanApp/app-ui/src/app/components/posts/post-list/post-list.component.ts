import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  posts = [
    {title: "First Post", content: "This is the FP Content "},
    {title: "Second Post", content: "This is the SP Content "},
    {title: "Third Post", content: "This is the TP Content "}
  ];

}
