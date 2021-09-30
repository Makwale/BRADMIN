import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddbusComponent } from './components/addbus/addbus.component';
import { AdddriverComponent } from './components/adddriver/adddriver.component';
import { AddslotComponent } from './components/addslot/addslot.component';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { BookingComponent } from './components/booking/booking.component';
import { BusComponent } from './components/bus/bus.component';
import { HomePage } from './components/home/home.page';
import { DriverComponent } from './components/driver/driver.component';
import { SlotComponent } from './components/slot/slot.component';
import { StudentComponent } from './components/student/student.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { UnauthComponent } from './components/unauth/unauth.component';
import { AccountComponent } from './components/account/account.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: "unauth",
    component: UnauthComponent,
  },
  {
    path: 'home',
    component: HomePage,
    canActivate: [AuthGuard],
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
        path: 'adddriver',
        component: AdddriverComponent
      },
      {
        path: 'bus',
        component: BusComponent
      },

      {
        path: 'addbus',
        component: AddbusComponent
      },

      {
        path: 'slot',
        component: SlotComponent
      },

      {
        path: 'addslot',
        component: AddslotComponent
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
    path: "profile",
    component: ProfileComponent
  },
  {
    path: 'slotbooking',
    loadChildren: () => import('./slotbooking/slotbooking.module').then( m => m.SlotbookingPageModule)
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
