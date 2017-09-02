import { Component, OnInit, style } from '@angular/core';
import {MdDialog} from '@angular/material';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-material-test',
  templateUrl: './material-test.component.html',
  styleUrls: ['./material-test.component.css']
})
export class MaterialTestComponent implements OnInit {

  constructor(private dialog: MdDialog, private http:Http) { 
    this.openDialog();
  }

  ngOnInit() {
    
    this.http.get('https://jsonplaceholder.typicode.com/todos')
      .toPromise()
      .then(result => {
        setTimeout(()=> {
          this.dialog.closeAll();
        },900);
        
      });
    
  }

  openDialog() {
    this.dialog.open(DialogContentComponent,{disableClose:true});
  }

}
