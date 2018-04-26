import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoteComponent } from './note/note.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'note/:id',
    component: NoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
