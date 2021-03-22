import { ComponentService } from "../component.service";
import { Componentlib } from "../componentlib";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-componentlib',
  templateUrl: './create-componentlib.component.html',
  styleUrls: ['./create-componentlib.component.css']
})
export class CreateComponentlibComponent implements OnInit {

  componentlib: Componentlib = new Componentlib();
  submitted = false;

  constructor(private componentlibService: ComponentService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newComponentLib: void {
    this.submitted = false;
    this.componentlib = new Componentlib();
  }

  save() {
    this.componentlibService
    .createComponentlib(this.componentlib).subscribe(data =>{
      console.log(data)
      this.componentlib = new Componentlib();
      this.gotoList();
    },
    error => console.log(error));
  }

  onsubmit() {
    this.submitted = true;
    this.save();
  }
  gotoList(){
    this.router.navigate(['/components'])
  }
}
