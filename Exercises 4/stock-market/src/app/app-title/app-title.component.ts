import { Component } from "@angular/core";

@Component({
    selector: "app-title",
    template: `<h1>Welcome to stock market website!</h1>`,
    styles: [
        `h1 {
            text-align: center;
            margin: 20px;
        }`
    ]
})
export class AppTitleComponent {}