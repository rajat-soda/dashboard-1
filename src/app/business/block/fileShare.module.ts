import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FileShareComponent } from './fileShare.component';
import { ButtonModule, DataTableModule, DropMenuModule, DialogModule, FormModule, InputTextModule, InputTextareaModule, DropdownModule , ConfirmationService,ConfirmDialogModule, MultiSelectModule, GrowlModule, TabViewModule } from '../../components/common/api';

import { HttpService } from './../../shared/service/Http.service';
import { FileShareService, SnapshotService, FileShareAclService } from './fileShare.service';
import { ProfileService } from './../profile/profile.service';
import { RouterModule } from '@angular/router';
import { CloudFileShareModule } from './cloud-file-share/cloudFileShare.module';

@NgModule({
  declarations: [ FileShareComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    DataTableModule,
    DropdownModule,
    DropMenuModule,
    DialogModule,
    FormModule,
    ConfirmDialogModule,
    RouterModule,
    MultiSelectModule,
    GrowlModule,
    TabViewModule,
    CloudFileShareModule
  ],
  exports: [ FileShareComponent],
  providers: [
    HttpService,
    FileShareService,
    SnapshotService,
    ProfileService,
    ConfirmationService,
    FileShareAclService
  ]
})
export class FileShareModule { }
