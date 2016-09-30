import { NgModule }      from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';

import { SetupComponent } from './components/setup/setup.component';
import { StartComponent } from './components/start/start.component';
import { ExampleService } from './services/example/example.service';

@NgModule({
    imports: [ 
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],
    declarations: [ 
        AppComponent,
        SetupComponent,
        StartComponent
    ],
    providers: [
        {
            provide: LocationStrategy, 
            useClass: HashLocationStrategy
        },
        ExampleService
    ],
    bootstrap: [ 
        AppComponent 
    ]
})
export class AppModule { }
