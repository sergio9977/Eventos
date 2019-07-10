import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ListComponent } from './list/list.component';
import { GuestService } from './service/guest.service';
import { CreateComponent } from './create/create.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { EditComponent } from './edit/edit.component';
import { InformationComponent } from './information/information.component';

@NgModule({
  declarations: [ListComponent, CreateComponent, EditComponent, InformationComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    GuestService,
  ],
  entryComponents: [
    CreateComponent,
    EditComponent,
    InformationComponent
  ],
})
export class GuestModule { }
