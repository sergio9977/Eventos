import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Guest } from '../models/guest';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  guestsList: AngularFireList<any>;
  selectGuest: Guest = new Guest();

  constructor(private firebase: AngularFireDatabase) { 
    this.guestsList = this.firebase.list('/guests');
  }

  getGuests() {
    return this.guestsList = this.firebase.list('guests');
  }

  postGuest(guest: Guest) {
    this.guestsList.push({
      fullName: guest.fullName
    });
  }

  updateGuest(guest: Guest) {
    console.log(guest, "guest")
    this.guestsList.update(guest.$key, {
      fullName: guest.fullName
    });
  }

  deleteGuest($key: string) {
    this.guestsList.remove($key);
  }
}
