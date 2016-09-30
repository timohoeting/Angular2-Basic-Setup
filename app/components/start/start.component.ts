import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ExampleService } from '../../services/example/example.service';

@Component({
  selector: 'welcome',
  templateUrl: 'app/components/start/start.component.html'
})
export class StartComponent implements OnInit{

    constructor(private _exampleservice : ExampleService, 
                private _router: Router){}

    ngOnInit(){

    }
}
