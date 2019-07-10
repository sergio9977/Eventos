import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Guest } from '../models/guest';
import { GuestService } from '../service/guest.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  FormGuest : FormGroup;

  constructor(private FB : FormBuilder, private guestService: GuestService,
    private dialogClose : MatDialogRef<EditComponent>, @Inject(MAT_DIALOG_DATA) public dataGuest: Guest) { 
    this.FormGuest = this.FB.group({
      fullName:[ '',Validators.required]
    })
  }

  ngOnInit() {
    this.getGuestUpdate();
  }

  getGuestUpdate(){
    this.FormGuest.setValue({
      fullName : this.dataGuest.fullName,
    });
  }

  updateGuest() {
    const form = this.FormGuest.value;
    const guest = new Guest();
    guest.$key = this.dataGuest.$key;
    guest.fullName = form.fullName;
    this.guestService.updateGuest(guest);
    this.dialogClose.close(guest);
  }

}
