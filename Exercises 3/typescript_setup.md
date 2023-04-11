# Setup Typescript

Follow the instruction below to setup nvm, npm and typescript compiler.
We will use nvm to install node and npm. Because of this we will use this 
setup not only for typescript, but also for any other projects later in the course.

## Installing nvm

First we need to install nvm (Node Version Manager)

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

## Installing node

We will install latest lts version of node

```
nvm install --lts
```

### Set which version of node to use

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

## Installing typescript

First you need to install typescript globally in order to be able to
compile typescript files to javascript.
```
npm install -g typescript
```

### Check typescript version

``` 
tsc -v
```

### Setup typescript project

```
tsc --init
```
This will create a tsconfig.json file in the current directory. It is not necessary to run this command, but it is a good idea to have a tsconfig.json file in your project.

### Compile typescript file

```
tsc path/to/file.ts
```
This should generate a javascript file with the same name as the typescript file in the same directory.

### Run javascript file

We can use node to run the javascript file.

``` 
node path/to/file.js
```

### Install ts-node

ts-node is a typescript interpreter. It will compile and run typescript files without having to compile them to javascript first.

```
npm install -g ts-node
```

### Run typescript file

```
ts-node path/to/file.ts
```




