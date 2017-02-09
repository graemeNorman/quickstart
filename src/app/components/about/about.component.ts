import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './app/components/about/about-template.html',
})

export class AboutComponent {
    pageName : string;
    constructor(){
        this.pageName = "About";
    };
};

