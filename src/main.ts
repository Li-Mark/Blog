import "hammerjs";
import {
  enableProdMode,
  TRANSLATIONS,
  TRANSLATIONS_FORMAT,
  MissingTranslationStrategy
} from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}
// use the require method provided by webpack
declare const require;
// we use the webpack raw-loader to return the content as a string
const locale = window.localStorage.getItem("yunlong-blog-locale");
let translations;
if (locale && locale === "chinese") {
  translations = require(`raw-loader!./assets/locale/messages.zh-cn.xlf`);
} else {
  translations = require(`raw-loader!./assets/locale/messages.en-us.xlf`);
}
platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    missingTranslation: MissingTranslationStrategy.Error,
    providers: [
      { provide: TRANSLATIONS, useValue: translations },
      { provide: TRANSLATIONS_FORMAT, useValue: "xlf" }
    ]
  })
  .catch(err => console.error(err));
