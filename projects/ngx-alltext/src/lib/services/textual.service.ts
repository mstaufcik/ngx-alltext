import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, from } from "rxjs";

@Injectable({ 
    providedIn: 'root' 
})
export class TextualService {

    private loadedChangedSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private loadedSubject$: Subject<boolean> = new Subject<boolean>();
    private loadErrorSubject$: Subject<any> = new Subject<any>();

    loadedChanged$: Observable<boolean> = from(this.loadedChangedSubject$);
    loaded$: Observable<boolean> = from(this.loadedSubject$);
    loadError$: Observable<any> = from(this.loadErrorSubject$);

    currentLanguageCode: string | null = null;

    data: any;

    constructor() {
    }

    public async loadFromUrl(baseUrl: string, languageCode: string, requestInit: RequestInit | undefined = undefined) {
        var loadP = fetch(baseUrl + '/' + languageCode + '.json', requestInit);
        try {
            const response = await loadP;

            if (response.status >= 400) {
                this.loadErrorSubject$.next(response);
            }
            else {
                this.data = await response.json();
                this.currentLanguageCode = languageCode;
                this.loadedSubject$.next(true);
                this.loadedChangedSubject$.next(true);
            }
        }
        catch (e) {
            this.loadErrorSubject$.next(e);
        }
    }

    public getTranslation(basePath: string | null, path: string): string {
        var result: string | null;

        if (basePath) {
            result = this.tryGetTranslation(basePath + '.' + path);
            if (result) {
                return result;
            }
        }

        result = this.tryGetTranslation(path);
        if (result) {
            return result;
        }

        if (basePath) {
            path = basePath + '.' + path;
        }
        return '<< Missing translation for ' + path + ' >>';
    }

    private tryGetTranslation(path: string): string | null {
        var pathArr = path.split('.');
        var currentNode = this.data;

        for (let pathToken of pathArr) {
            currentNode = currentNode[pathToken];
            if (!currentNode) {
                return null;
            }
        }

        if (typeof currentNode === 'string' || currentNode instanceof String) {
            return <string>currentNode;
        }
        if (typeof currentNode === 'object' && !Array.isArray(currentNode) && currentNode !== null) {
            return '<< ' + path + ' is an object >>';
        }
        return '<< ' + path + ' is not a string >>';
    }
}