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

  constructor( private route: ActivatedRoute, private router: Router, 
    private complibService: ComponentService) { }

  ngOnInit(): void {
    this.complib = new Componentlib();
    
    this.id = this.route.snapshot.params['id'];

    this.complibService.getComponentLib(this.id)
      .subscribe( data => {
        console.log(data)
        this.complib = data;
      }, error => console.log(error));
  }

}
