## Exercises 10 - Http Requests and Routing

You can find implementation from exercises in the directories `Exercises 9/ecommerce-http` and `Exercises 9/ecommerce-routing`.
This exercises as a base code use code from last exercises (`Exercises 9/ecommerce-observables` project).

### Http Requests

In this project we extend our application with http requests. To make http request we of course need a server. But fear not, we have prepared node.js server that we used in this class :smile:. It is very simple and it does not have ability to permanently store data into database (so any changes you make will be lost after you restart the server). But it is enough for our purposes. You can find implenementatin of the server in `Exercises 10/server` directory.

The available endpoints are:

- `GET /api/product` - returns all products
- `POST /api/product` - adds new product
- `PUT /api/product/:id` - updates product with given id

Inspecting the code of the server is not required, but it will give you better insight of what server requires from request and what response consists of. To tun the server follow the instrunctions from `Exercises 10/setup.md` file.

Finally, in this project we used http requests to modify functions that were previously using observables.
Implementation is available in `Exercises 10/ecommerce-http` directory.

### Routing

In this project we continued working on our ecommerce application using code from previous exercise. Here we just added routing to our application. 
Created routes: 

- `/` - home page (redirects to `/list`)
- `list` - list of all products
- `create` - form for creating new product
- wildcard route to match all other routes - redirects to root

Implementation is available in `Exercises 10/ecommerce-routing` directory.


### How to run angular projects?

1. Clone this repository to your local machine.
2. Make sure you followed all the instructions in `Exercises 4/angular_setup.md` to setup nvm, npm, node and angular cli.
3. Open terminal and navigate to the root directory of angular project (e.g. `Exercises 4/stock-market`).
4. Run `npm install` to install all dependencies.
5. If you encounter any vulnerabilities, run `npm audit fix` to fix them.
6. Run `ng serve` to start the server.
