import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CvFormComponent} from './cv-form/cv-form.component';
import {ResultViewComponent} from './result-view/result-view.component';


const routes: Routes = [
  {
    path: '',
    component: CvFormComponent
  },
  {
    path: 'result',
    component: ResultViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
