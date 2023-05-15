## Exercises 7 - Template Driven Forms (continued), Bootstrap Forms

You can find implementation from exercises in the directory `Exercises 7/ecommerce-registration`.

In this exercises we created more advanced template-driven form for user registration on ecommerce website. We demonstrated use of ngForm, ngModelGroup, ngModel directives for work with forms, groups and controls. Beside that we also used template reference variables and html pattern validation with regex expressions. We also demonstrated use of bootstrap forms and validation classes.

### Homework 3

Create form for adding new products in ecommerce website using form groups (ngFrom approach).

1. Create a new component that allows us to add new products.
2. Create a form that takes in the product name, price, image URL, and whether or
not it is on sale. Try to use the form groups approach rather than two-way bind‐
ing through ngModel. Make all inputs belong to one form group (product) and on submit from this group create new product object.
3. Make all the fields required, and see if you can add a basic Regex pattern validation for the image URL.
4. Display relevant error messages, but only after the user either edits the field or after the first submit.
5. Copy over the form and print it to the console after successful submission.
6. Use bootstrap to style form and show validation errors after submit.
You can see demo of the project below.


https://github.com/DejanGjer/Advanced-Web-Programming/assets/17954184/f34f17a4-6624-4d60-92ac-b8352e778fe2


### How to run angular projects?

1. Clone this repository to your local machine.
2. Make sure you followed all the instructions in `Exercises 4/angular_setup.md` to setup nvm, npm, node and angular cli.
3. Open terminal and navigate to the root directory of angular project (e.g. `Exercises 4/stock-market`).
4. Run `npm install` to install all dependencies.
5. If you encounter any vulnerabilities, run `npm audit fix` to fix them.
6. Run `ng serve` to start the server.
