import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './app/components/home/home-template.html'
})
export class HomeComponent {
    pageName : string;
    constructor(){
        this.pageName = "Home";
    };
};
