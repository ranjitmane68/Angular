import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './app/store/counter.reducer';

bootstrapApplication(AppComponent, {
    //Here is counter is name of the key. It can be anything
    // We can pass multiple reducers in for of key value pair in the JSON object
    providers: [provideStore( {counter: counterReducer} )]
});
