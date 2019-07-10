import { Component, OnInit, Inject } from '@angular/core';
import { Guest } from '../models/guest';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public dataCountGuest: Guest) { }

  ngOnInit() {
    console.log(this.dataCountGuest, "count")
  }

}
