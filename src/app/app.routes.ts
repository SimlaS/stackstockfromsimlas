import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DownloaderComponent } from './components/downloader/downloader.component';
import { MipapiComponent } from './components/mipapi/mipapi.component';
import { DrawingComponent } from './components/drawing/drawing.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
 {path: '',component: DashboardComponent},
 {path: 'manage',component: ManageComponent},
 {path: 'download', component: DownloaderComponent},
 {path: 'api', component: MipapiComponent},
 {path: 'drawing', component: DrawingComponent},
 {path: 'login', component: LoginComponent},
 { path: '**', component: PageNotFoundComponent}
];

export const AppRoutes = RouterModule.forRoot(routes);