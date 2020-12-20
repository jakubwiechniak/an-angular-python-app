import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NewTableComponent } from './new-table/new-table.component'
import { CreatedTabOutputComponent } from './created-tab-output/created-tab-output.component'
import { UploadFileComponent } from './upload-file/upload-file.component'
import { CreateRecordComponent } from './create-record/create-record.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'newtable', component: NewTableComponent },
  { path: 'createdt', component: CreatedTabOutputComponent },
  { path: 'uploadfile', component: UploadFileComponent },
  { path: 'newrecord', component: CreateRecordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
