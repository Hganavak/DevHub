import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- For debugging only
    )
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
