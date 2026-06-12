import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Shop } from './pages/shop/shop'; 
import { Community } from './pages/community/community'; 


export const routes: Routes = [
  { path: '',     component: Home },
  { path: 'shop', component: Shop },
  { path: 'community', component: Community },
  { path: '**',   redirectTo: '' }
];


