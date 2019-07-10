import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { CreateComponent } from '../create/create.component';
import { Guest } from '../models/guest';
import { GuestService } from '../service/guest.service';
import { EditComponent } from '../edit/edit.component';
import { InformationComponent } from '../information/information.component';
import { AuthService } from '../../login/core/auth.service';
import { User } from '../../login/model/user';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  displayedColumns: string[] = ['fullName', 'acciones'];
  dataGuests: MatTableDataSource<Guest>;
  guestsList: Guest[];
  countGuest: number;
  userData: User;
  canDelete: boolean = false;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(public dialogResult: MatDialog, private guestService: GuestService, public auth: AuthService) {
  }

  ngOnInit() {
    this.getUser();
    this.guestService.getGuests()
      .snapshotChanges()
      .subscribe(item => {
        this.countGuest = 0;
        this.guestsList = [];
        item.map((data) => {
          this.countGuest += 1;
          let value = data.payload.toJSON();
          value['$key'] = data.key;
          this.guestsList.push(value as Guest);
          this.dataGuests = new MatTableDataSource(this.guestsList);
          this.dataGuests.paginator = this.paginator;
        })
      });
  }

  getUser() {
    this.auth.user$.subscribe((res: User) => {
      if (res.uid === 'YOADpaZgpeWvI2dp8qX67xSwldq2') {
        this.canDelete = true;
      } else {
        this.canDelete = false;
      }
      this.userData = res;
    })
  }

  applyFilter(filterValue: string) {
    this.dataGuests.filter = filterValue.trim().toLowerCase();
  }

  openCreateGuest() {
    this.getUser();
    let dialogRef = this.dialogResult.open(CreateComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.dataGuests.data.push(result);
      }
    });
  }

  deleteGuest(guest: Guest) {
    if (confirm('Estas seguro que quieres eliminar al invitado: ' + guest.fullName)) {
      this.guestService.deleteGuest(guest.$key);
    }
  }

  editGuest(guest: Guest) {
    this.dialogResult.open(EditComponent, {
      width: '500px',
      data: guest
    });
  }

  showMoreInformation() {
    this.dialogResult.open(InformationComponent, {
      width: '500px',
      data: this.countGuest
    });
  }

}