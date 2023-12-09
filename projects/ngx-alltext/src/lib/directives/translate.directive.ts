import { Directive, ElementRef, Host, Input, OnInit, Optional } from '@angular/core';
import { AtPathDirective } from './at-path.directive';
import { TextualService } from '../services/textual.service';

@Directive({
    selector: '[translate]'
})
export class AtTranslateDirective implements OnInit {

    @Input()
    translate: string | null = null;

    constructor(@Optional() @Host() public atPath: AtPathDirective, private eleRef: ElementRef, private textualService: TextualService) {
    }

    ngOnInit() {
        var atPath = this.atPath?.atPath ?? null;

        this.textualService.loadedChanged$.subscribe(value => {
            if (value) {
                this.assignText(this.textualService.getTranslation(atPath, this.translate!));
            }
        });
    }

    private assignText(text: string) {
        this.eleRef.nativeElement.innerHTML = text;
    }
}

