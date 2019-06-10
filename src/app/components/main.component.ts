import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'one12-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        let i = 0;
        i++;
        console.log(i);
    }

}
