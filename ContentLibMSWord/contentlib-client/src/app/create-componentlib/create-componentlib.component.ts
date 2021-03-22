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

  complib: Componentlib = new Componentlib();
  submitted = false;

  constructor(private compService: ComponentService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newComponentLib(): void {
    this.submitted = false;
    this.complib = new Componentlib();
  }

  save() {
    this.compService
    .createComponentlib(this.complib).subscribe( data => {
      console.log(data)
      this.complib = new Componentlib();
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
