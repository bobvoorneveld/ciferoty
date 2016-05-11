import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import { enableProdMode } from '@angular/core';
import { CiferotyAppComponent, environment } from './app';

if (environment.production) {
  enableProdMode();
}

bootstrap(CiferotyAppComponent, [ROUTER_PROVIDERS]);
