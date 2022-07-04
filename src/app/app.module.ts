import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { ViewServersComponent } from './servers/view-servers/view-servers.component';
import { EditServersComponent } from './servers/edit-servers/edit-servers.component';
import { UsersComponent } from './users/users.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes : Routes = [
  {path:'',component:HomeComponent},
  {path:'users', component:UsersComponent},
  {path:'users/:id/:name',component:ViewUsersComponent},
  {path:'servers', component:ServersComponent},
  {path:'servers/:id/edit',component:EditServersComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    ViewServersComponent,
    EditServersComponent,
    UsersComponent,
    ViewUsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
