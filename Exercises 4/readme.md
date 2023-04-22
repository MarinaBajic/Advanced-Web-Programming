## Exercises 4 - Angular Components

You can find implementation from exercises in the directory `Exercises 4/stock-market`.
Setup instructions for installing and running angular can be found in the file `Exercises 4/angular_setup.md`.

In this exercise we implemented a simple stock market application and demonstrated the use of components, data binding (text interpolation and property binding), event binding and pipes.

### Stock Market Application

In this application we represented stock item as a component which consists of name, code (abbreviated name), price and previous price.
- Create class stock to store all necessary information about the stock.
- If previous price is greater than current price, the price is displayed in red color, otherwise it is displayed in green color.
- Stock item also has a button to add that stock to favorites. If the stock is already in favorites, the button should be disabled.
- Print the price using currency pipe.
- Add one more component to print title for the website. Use inline template and styles for this component.

### Homework 1

For the first homework, try to accomplish the following:
1. Start a new project to build an ecommerce website.
2. Create a component to display a single product.
3. The product component should display a name, price, and image for the product.
You can initialize the component with some defaults for the same. Use any place‐
holder image you want. In the class which represents product image should be stored as url to the relative path of an image.
4. Highlight the entire element in a different color if the product is on sale. Whether
the product is on sale can be an attribute of the product itself.
5. Add buttons to increase and decrease the quantity of the product in the cart. The
quantity in the cart (this is related to product, so how much of each product is added to cart) should be visible in the UI. Disable the button for descrement if the quantity
is already zero.

Solutions of each homework will be posted after the next class. You can use the solutions to check your work. However, you should try to solve the problems on your own first. If you get stuck, feel free to contact me.
