import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheseComponent } from './these/these.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TheseDetailsComponent } from './these-details/these-details.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TheseService } from './these.service';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TheseProposeComponent } from './these-propose/these-propose.component';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { TheseValidateComponent } from './these/these-validate/these-validate.component';
const routes: Routes = [{ path: '',   redirectTo: 'login', pathMatch: 'full' },

{ path: 'theses/validation', component: TheseValidateComponent },
{ path: 'login', component: LoginComponent },
{ path: 'thesesForm', component: TheseProposeComponent },
{ path: 'theses', component: TheseComponent },
{ path: 'theses/details', component: TheseDetailsComponent },
{ path: '**', component: PageNotFoundComponent },]; 

@NgModule({
  declarations: [
    AppComponent,
    TheseComponent,
    TheseDetailsComponent,
    PageNotFoundComponent,
    SideBarComponent,
    TheseProposeComponent,
    LoginComponent,
    TheseValidateComponent,
  ],
  imports: [
    RouterModule.forRoot(routes ),
    BrowserModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [TheseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
