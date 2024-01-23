export class InputHandler {
    private keyNameForUp: string;
    private keyNameForDown: string
    public isUpPressed: boolean;
    public isDownPressed: boolean;

    constructor (keyNameForUp: string, keyNameForDown: string) {
        this.keyNameForUp = keyNameForUp;
        this.keyNameForDown = keyNameForDown; 

        this.isDownPressed = false;
        this.isUpPressed = false;

        window.addEventListener('keydown', this.handleKeyDown.bind(this));
        window.addEventListener('keyup', this.handleKeyUp.bind(this));
    }

    private handleKeyDown(event: KeyboardEvent) {
        // Handle keydown events here
        // For example, you can check the key code and perform actions accordingly
        
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
        // Handle keydown events here
        // For example, you can check the key code and perform actions accordingly
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