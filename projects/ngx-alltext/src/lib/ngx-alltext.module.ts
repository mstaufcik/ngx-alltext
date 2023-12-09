import { NgModule } from '@angular/core';
import { NgxAlltextComponent } from './ngx-alltext.component';
import { AtPathDirective } from './directives/at-path.directive';
import { AtTranslateDirective } from './directives/translate.directive';
import { AtTranslatePipe } from './pipes/at-translate.pipe';
import { TextualService } from './services/textual.service';

@NgModule({
  declarations: [
    NgxAlltextComponent,
    AtPathDirective,
    AtTranslateDirective,
    AtTranslatePipe
  ],
  imports: [
  ],
  exports: [
    NgxAlltextComponent,
    AtPathDirective,
    AtTranslateDirective,
    AtTranslatePipe
  ]
})
export class NgxAlltextModule { }
