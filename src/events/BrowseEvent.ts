export class BrowseEvent<T = any> extends CustomEvent<T> {
    constructor(target: string) {
        super('browse', {
            bubbles: true,
            composed: true,
            detail: {
                target
            } as T // Fix: Cast the detail object to type T
        });
    }
}