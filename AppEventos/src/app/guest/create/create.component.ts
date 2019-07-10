import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Guest } from '../models/guest';
import { GuestService } from '../service/guest.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  FormGuest : FormGroup;

  constructor(private FB : FormBuilder, private guestService: GuestService,
    private dialogClose : MatDialogRef<CreateComponent>) { 
    this.FormGuest = this.FB.group({
      fullName:[ '',Validators.required]
    })
  }

  ngOnInit() {
  }

  createGuest() {
    const form = this.FormGuest.value;
    const guest = new Guest();
    guest.fullName = form.fullName;
    this.guestService.postGuest(guest);
    this.dialogClose.close(guest);
  }

}
