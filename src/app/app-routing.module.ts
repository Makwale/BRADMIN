import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddAmbulanceComponent } from './components/addambulance/addambulance.component';
import { AdddriverComponent } from './components/adddriver/adddriver.component';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { BookingComponent } from './components/booking/booking.component';
import { AmbulanceComponent } from './components/ambulance/ambulance.component';
import { HomePage } from './components/home/home.page';
import { DriverComponent } from './components/driver/driver.component';
import { StudentComponent } from './components/student/student.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { UnauthComponent } from './components/unauth/unauth.component';
import { AccountComponent } from './components/account/account.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'unauth',
    component: UnauthComponent,
  },
  {
    path: 'home',
    component: HomePage,
    canActivate: [],
    children: [
      {
        path: '',
        component: DriverComponent
      },
      {
        path: 'driver',
        component: DriverComponent
      },
      {
        path: 'ambulances',
        component: AmbulanceComponent
      },

      {
        path: 'addbus',
        component: AddAmbulanceComponent
      },
      {
        path: 'student',
        component: StudentComponent
      },

      {
        path: 'addstudent',
        component: AddstudentComponent
      },

      {
        path: 'booking',
        component: BookingComponent
      },
      {
        path: 'account',
        component: AccountComponent
      }
    ]
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'slotbooking',
    loadChildren: () => import('./slotbooking/slotbooking.module').then(m => m.SlotbookingPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
