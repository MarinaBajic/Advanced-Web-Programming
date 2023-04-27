# Setup Angular

In order to setup Angular it is <b>strongly</b> recommended to use nvm, for better version management. After that using nvm you need to install node and npm (node package manager). If you do not have these already installed, please follow the instructions in [this](../typescript_setup.md) guide.


## Installing Angular CLI
In order to setup Angular we will use Angular CLI. Angular CLI is a command line tool that helps us to create, build and test Angular applications.

### Activate node version

Before installing Angular CLI we need to activate the node version that we want to use. In this case we will use the latest LTS version of node.

``` 
nvm use --lts
```

You can check which version of node you are using by running:

```
node -v
```

and for npm:

```
npm -v
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

## Creating Angular project

In this exercises we will create stock market application. In order to do that we need to create a new Angular project.

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

If you want to stop the server press Ctrl+C in the terminal

### Stopping Angular project

To stop running Angular project press Ctrl+C in the terminal

## Creating Angular components

In order to create new component called stock-item inside directory stock (which should be created inside app folder), go to root directory of project and run:

```
ng generate component stock/stock-item
```

This will create a new folder called stock-item inside stock folder and inside it will create 4 files:

- stock-item.component.css
- stock-item.component.html
- stock-item.component.spec.ts
- stock-item.component.ts

This will additionally update the app.module.ts file and add the new component to the declarations array.

## Creating Angular classes

In order to create new class called stock inside directory model (which should be created inside app folder), go to root directory of project and run:

```
ng generate class model/stock
```