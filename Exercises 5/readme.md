## Exercises 5

You can find implementation from exercises in the directory `Exercises 5/ecommerce`.
Setup instructions for installing and running angular can be found in the file `Exercises 4/angular_setup.md`.

In this exercise we started implementing e-commerce website (based on homework from previous exercise) and demonstrated the use of directives (ngIf, ngFor, ngClass, ngStyle), and input and output of components.

### E-commerce Website

Look at the homework 1 (from the previous exercise) for problem statement. In this exercises we implemented same functionalities, just modified methods that we used.

### Homework 2

Create new angular project which implements calculator with simple operations (+, -, *, /).

1. Create components for keyboard and calculator, where keyboard represents set of tiles (see below) and displays typed expression, while component calculator consists of component keyboard and displays result of expression
2. Use ngFor directive to create keyboard of buttons for numbers and operations. Color tiles in chessboard pattern (like on the image below) - use index from ngFor to determine color of tile
3. When user clicks on any button, display it in with the text above keyboard
4. When user clicks button = calculate result (this calculator should support only one operation at the time - so 2 + 3 * 4 is not supported). Check if expression is valid and output result to calculator component (use @Output decorator). After click on = reset keyboard to initial state
5. Component calculator should display result of expression. Display result in green color if expression was valid and in red color if expression was invalid. Except result value, also print which operation was used to calculate result (addition, subtraction, multiplication, division) - use ngSwitch directive to display operation name
6. Style calculator and keyboard components with CSS using flexbox (see image below)



https://user-images.githubusercontent.com/17954184/235434913-d97e1510-1cf9-4209-984e-84f47c70ed77.mp4

