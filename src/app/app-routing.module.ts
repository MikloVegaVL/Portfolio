import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { DevelopmentComponent } from './development/development.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LeistungenComponent } from './leistungen/leistungen.component';
import { MainComponent } from './main/main.component';
import { MethodologyComponent } from './methodology/methodology.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainComponent },
  { path: 'leistungen', component: LeistungenComponent },
  { path: 'vorgehen', component: MethodologyComponent },
  { path: 'ueber-mich', component: PersonComponent },
  { path: 'entwicklung', component: DevelopmentComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component: DataProtectionComponent },
  { path: 'projects', redirectTo: 'entwicklung', pathMatch: 'full' },
  { path: 'skills', redirectTo: 'entwicklung', pathMatch: 'full' },
  { path: 'person', redirectTo: 'ueber-mich', pathMatch: 'full' },
  { path: 'contact', redirectTo: 'kontakt', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
