import { Component } from "@angular/core";

// The @Component decorator is used to define the metadata of the component.
// This componenet is used to display the title of the application.
// It uses inline template and inline styles.
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