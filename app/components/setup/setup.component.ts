import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/map';

import { ExampleService } from '../../services/example/example.service';

@Component({
  selector: 'setup',
  templateUrl: 'app/components/setup/setup.component.html'
})
export class SetupComponent implements OnInit{
    
    id : string;
    
    constructor(private _route:ActivatedRoute, 
                private _router: Router, 
                private _exampleservice : ExampleService){}

    ngOnInit(){
        this._route.params
          .map(params => params['id'])
          .subscribe((id) => {
              this.id = id;
          });
    }
}