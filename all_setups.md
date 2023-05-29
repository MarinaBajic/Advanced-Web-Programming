# Setup for Advanced Web Programming

In this file you will find all instrunctions to setup all tools needed for the course practical exam. To run angular projects you will need to install:

1. Nvm
2. Node
3. Npm
4. Angular
5. Bootstrap

Additionally if you need to use a server for your project you will need follow the instructions in the last section of this file.

## Installing nvm

First we need to install nvm (Node Version Manager). For Linux systems follow instrunctions below. For Windows and Mac systems follow [this link](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

### Run the nvm installer

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# or

wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

### Reload the shell configiration

```
source ~/.bashrc
```

### Check nvm version

```
nvm -v
```

## Installing node and npm

Next we will install latest lts version of node

```
nvm install --lts
```

### Set which version of node to use

With command below you will activate the latest lts version of node.
```
nvm use --lts
```

### Check node version

```
which node
```

### Check npm version

```
which npm
```

## Installing Angular CLI
In order to setup Angular we will use Angular CLI. Angular CLI is a command line tool that helps us to create, build and test Angular applications.

### Activate node version

Before installing Angular CLI we need to activate the node version that we want to use. In this case we will use the latest LTS version of node.

``` 
nvm use --lts
```

### Install Angular CLI
```
npm install -g @angular/cli
```

For checking all available commands run:

```
ng help
```

### Check Angular CLI version
```
ng version
```

### Creating Angular project

Run command below to create new angular project (stock-market example).

```
ng new stock-market
```

Make sure for now to set the following options:

```
? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS
```

This should create a new folder called stock-market with all the necessary files and folders inside it

### Running Angular project

To run Angular project in development mode, go to the project folder and run:
```
ng serve
```
This will start a development server on port 4200. You can access the application by going to http://localhost:4200 address in any browser.
While the server is running the application will automatically reload if you change any of the source files

### Stopping Angular project

To stop running Angular project press Ctrl+C in the terminal

## Installing Bootstrap in Angular Project

Follow steps below to add Bootstrap 5 in Angular project.

### Step 1: Install Bootstrap 5

First, make sure to cd into root directory of your Angular project. Then install Bootstrap 5 using npm.

```bash
cd project_name
npm install bootstrap
```

Atfer installation you should be able to see bootstrap folder under node_modules folder.
You can also specify or check the version of bootstrap that you want to install. To check installed version of bootstrap, use the following command.

```bash
npm list bootstrap
```

### Step 2: Install Popper.js

Popper.js should be installed to make Bootstrap 5 dropdowns, tooltips, and popovers work. It should already be preinstalled when creating Angular project, but it is not bad practise to check that. So, install Popper.js using npm.

```bash
npm install @popperjs/core
```

### Step 3: Import Bootstrap 5 in Angular Project

Now, open the `angular.json` file and add Bootstrap CSS and JS files in the `styles` and `scripts` array, wich are located under projects > architect > build object.

```json
"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css"
],
"scripts": [
    "node_modules/@popperjs/core/dist/umd/popper.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```
Now you should be able to use Bootstrap 5 within any component of your Angular project.

## Node.js Server setup to use in Angular project

### How to run Node.js server

First cd into the server directory. Then you need to install all the dependencies that server requires. To do that run the following command:

```bash
npm install
```

Then run the following command:

```bash
node server.js
```

Server will also console log the port it is running on. By default it is 3000.

### How to setup Angular project to use Node.js server

In order to connect Angular app and running Node.js server first you need to add proxy.conf.json file into the root of the Angular project. The content of the file should be:

```json
{
    "/api": {
      "target": "http://localhost:3000",
      "secure": false
    }
}
```

Now when you are running the Angular app with `ng serve` command you need to pass the proxy configuration file to it. To do that run the following command:

```bash
ng serve --proxy-config proxy.conf.json
```





