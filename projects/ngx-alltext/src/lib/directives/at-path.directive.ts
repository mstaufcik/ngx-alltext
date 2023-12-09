import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[atPath]'
})
export class AtPathDirective {

    @Input()
    atPath: string | undefined;

    constructor() {
    }
}

