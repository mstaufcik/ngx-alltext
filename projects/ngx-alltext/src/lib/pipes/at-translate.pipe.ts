import { ChangeDetectorRef, Host, Injector, OnDestroy, Optional, Pipe, PipeTransform } from "@angular/core";
import { AtPathDirective } from "../directives/at-path.directive";
import { TextualService } from "../services/textual.service";
import { Observable, lastValueFrom, map, of } from "rxjs";
import { AsyncPipe } from "@angular/common";

@Pipe({
    name: 'translate', pure: false
})
export class AtTranslatePipe implements PipeTransform, OnDestroy {
    private asyncPipe: AsyncPipe;

    constructor(@Optional() @Host() public atPath: AtPathDirective, private textualService: TextualService, injector: Injector) {
        this.asyncPipe = new AsyncPipe(injector.get(ChangeDetectorRef));
    }

    ngOnDestroy() {
        this.asyncPipe.ngOnDestroy();
    }

    transform(value: string) {
        var atPath = this.atPath?.atPath ?? null;
        return this.asyncPipe.transform(this.getText(atPath, value));
    }

    private getText(basePath: string | null, path: string): Observable<string | null> {
        return this.textualService.loadedChanged$.pipe(map((val) => {
            if (!val) {
                return null;
            }
            return this.textualService.getTranslation(basePath, path);
        }));
    }
}