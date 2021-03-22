import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Componentlib } from '../componentlib';
import { ComponentService } from '../component.service';
import { ComponentlibListComponent } from '../componentlib-list/componentlib-list.component';

@Component({
  selector: 'app-componentlib-details',
  templateUrl: './componentlib-details.component.html',
  styleUrls: ['./componentlib-details.component.css']
})
export class ComponentlibDetailsComponent implements OnInit {

  id: number;
  complib: Componentlib;

  constructor(private route: ActivatedRoute, private router: Router,
    private componentlibService: ComponentService) { }

  ngOnInit(): void {
    this.complib = new Componentlib();
    
  }

}
