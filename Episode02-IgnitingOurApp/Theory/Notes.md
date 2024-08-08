# Episode 02 - Igniting Our App

#### NPM

- Npm is not abbrevation of 'Node Package Manager'. It's a package manager. Any package which need for project creation you can find it on NPM.

#### package.json

- Its basically configuration of NPM. It keep only approximate version update.

- <b>Tilde</b> : '~version', will update you to all future patch versions, with incrementing the major version. for eg. ~1.2.3 will upgrade from ~1.2.3 to 1.3.2
- <b>Caret</b> : '^version', will update you to all future patch versions, with incrementing the minor version. for eg. ^1.2.3 will upgrade from ~1.2.3 to 1.2.4

#### Transitive Dependency

- A package is depend on another package Dependency.

#### browerlist

- To support older browser or other

#### package.lock.json

- It keep record of every single version update.

#### Bundler

- Bundler packs you app to shift in production. for eg. Parcel, Webpack, Veet.

#### Parcel

#### Dependency : Two types of Dependency

1. Dev Dependency : It use in developement.
2. Normal Dependency : It use in Production.

### Parcel uses:- www.parcejs.org

- Dev Build
- Local Server
- HMR- Hot Module Replacement
- File watching Alogrithm - by C++
- caching- faster builds
- Image optimization
- minification
- Bundling
- Compressing files
- consistent hasing
- code splitting
- differential Bundling-support older browsers
- diagnostic
- error handing
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

### Questions :-

#### Why you don't need to put Package.json & package.lock.json on github?

- As we know, Package.json & package.lock.json keep track of every single package information and in detail respectively. And if we add in gitignore, push it on github. We can not recreate node modules.

#### Why we should not use CDN(React) link in our project?

- Fetching from a cdn make costly operation.
- There might be change occur in versions(package). So we need to update links in project.

#### Command to:-

```
- npm ==> Install a package
- npx ==> Executing a package
- npm init ==> To install packages
- npx parcel index.html ==> Create bundling/server
- npx install -D parcel ==> For development
- npx parcel build index.html ==> For production use please remove existing file name like "App.js". Otherwise it will give you error. 
- npm install react ==> Install react
- npm install react-dom ==> Install react-dom
```