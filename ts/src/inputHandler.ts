export class InputHandler {
    public isUpPressed: boolean;
    public isDownPressed: boolean;

    private keyNameForUp: string;
    private keyNameForDown: string

    constructor (keyNameForUp: string, keyNameForDown: string) {
        this.keyNameForUp = keyNameForUp;
        this.keyNameForDown = keyNameForDown; 

        this.isDownPressed = false;
        this.isUpPressed = false;

        window.addEventListener('keydown', this.handleKeyDown.bind(this));
        window.addEventListener('keyup', this.handleKeyUp.bind(this));
    }

    private handleKeyDown(event: KeyboardEvent) {
        switch (event.code) {
            case this.keyNameForUp:
                this.isUpPressed = true;
                break;
            case this.keyNameForDown:
                this.isDownPressed = true;
                break;
            default:
                break;
        }
    }

    private handleKeyUp(event: KeyboardEvent) {
        switch (event.code) {
            case this.keyNameForUp:
                this.isUpPressed = false;
                break;
            case this.keyNameForDown:
                this.isDownPressed = false;
                break;
            default:
                break;
        }
    }
}