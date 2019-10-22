import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StocksService } from './services/stocks.service';
import { FormsModule } from '@angular/forms';
import { AppRoutes } from './app.routes';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DownloaderComponent } from './components/downloader/downloader.component';
import { MipapiComponent } from './components/mipapi/mipapi.component';
import { DrawingComponent } from './components/drawing/drawing.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DashboardComponent,
    ManageComponent,
    PageNotFoundComponent,
    DownloaderComponent,
    MipapiComponent,
    DrawingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    AppRoutes
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
