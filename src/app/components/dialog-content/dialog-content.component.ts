import { Component, OnInit, style } from '@angular/core';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent implements OnInit {

  constructor(private dialog: MdDialog) { }
  

  ngOnInit() {    

    let containerElem:HTMLElement = <HTMLElement>document.getElementsByClassName('mat-dialog-container')[0];
    containerElem.style.borderRadius="100px";
    containerElem.style.padding="5%";
    containerElem.style.overflow="hidden";
  
  }

  closeDialog() {
    this.dialog.closeAll();
  }

}
