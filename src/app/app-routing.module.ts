import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { MaterialTestComponent }   from './components/material-test/material-test.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/material/test', pathMatch: 'full' },
  { path: 'material/test',  component: MaterialTestComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}