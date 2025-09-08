/// <reference types="node" />
import 'zone.js/node';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';

export default function bootstrap() {
  return bootstrapApplication(App, appConfig);
}
