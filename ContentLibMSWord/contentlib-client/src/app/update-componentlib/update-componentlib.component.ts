import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Componentlib } from '../componentlib';
import { ComponentService } from '../component.service';

@Component({
  selector: 'app-update-componentlib',
  templateUrl: './update-componentlib.component.html',
  styleUrls: ['./update-componentlib.component.css']
})
export class UpdateComponentlibComponent implements OnInit {

  id: number;
  complib: Componentlib;

  constructor() { }

  ngOnInit(): void {
  }

}
