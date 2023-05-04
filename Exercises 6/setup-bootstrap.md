## Setup Bootstrap 5 in Angular Projects

To setup Bootstrap 5 in Angular projects, first create Angular project using Angular CLI. Now follow next steps.

### Step 1: Install Bootstrap 5

First, make sure to cd into your Angular project directory. Then install Bootstrap 5 using npm.

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
