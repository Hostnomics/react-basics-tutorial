---
>Install `node.js` and `npm` to continue so we can run **npx create-react-app app-name**
---

---
### Two Separate Workshops on `Create React App`:

1. [`Setting up with Create React App`](https://teamtreehouse.com/library/react-components-2018/setting-up-with-create-react-app).

2. [Using Create React App](https://teamtreehouse.com/library/using-create-react-app). 
---

Run command `npx create-react-app <*your_app_name*>`

This installs the dependencies for the project:

```js
$ npx create-react-app scoreboard
Need to install the following packages:
  create-react-app@5.0.1
Ok to proceed? (y) y
npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.

Creating a new React app in C:\<_file path_>\React-Basics\Group_5b_Modular_Create-React-App\scoreboard.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


added 1416 packages in 2m

231 packages are looking for funding
  run `npm fund` for details


removed 1 package, and audited 1471 packages in 5s

231 packages are looking for funding
  run `npm fund` for details

6 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

```

```js
Success! Created scoreboard at C:\<_file path_>\Team Tree House\React-Basics\Group_5b_Modular_Create-React-App\scoreboard
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.
```
```js
  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files

  cd scoreboard
  npm start
```
```js
Happy hacking!
npm notice
npm notice New minor version of npm available! 9.3.1 -> 9.4.2
npm notice Changelog: https://github.com/npm/cli/releases/tag/v9.4.2
npm notice Run npm install -g npm@9.4.2 to update!
npm notice

```


![npx create-react-app results](https://i.imgur.com/8JNxsGR.png)


In particular, at the [bottom it gives us the message:](https://teamtreehouse.com/library/react-components-2/setting-up-with-create-react-app). 

```js
We suggest that you begin by typing: 

cd scoreboard //whatever you named your app
npm start

```
