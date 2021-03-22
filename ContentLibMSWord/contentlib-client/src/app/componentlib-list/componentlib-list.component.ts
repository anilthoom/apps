import { ComponentlibDetailsComponent } from "../componentlib-details/componentlib-details.component"; 
import { Observable } from "rxjs";
import { ComponentService } from "../component.service";
import { Componentlib } from "../componentlib";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from "rxjs";

@Component({
  selector: 'app-componentlib-list',
  templateUrl: './componentlib-list.component.html',
  styleUrls: ['./componentlib-list.component.css']
})
export class ComponentlibListComponent implements OnInit {

  componentsLib: Observable<Componentlib[]>;

  constructor(private componentlibService: ComponentService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.componentsLib = this.componentlibService.getComponentLibList();
  }

  deleteComponentLib(id: number){
    this.componentlibService.deleteComponentLib(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
  }
  componentLibDetails(id: number){
    this.router.navigate(['details', id]);
  }
}
