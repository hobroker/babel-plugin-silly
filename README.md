### @hobroker/babel-plugin-sillybab

Transforms this
```
function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));
```

Into this
```
function replied_kind_bank(include_food, branch) {
  return include_food + branch;
}

console.log(replied_kind_bank(1, 2));
```

### Development
```
git clone git@github.com:hobroker/babel-plugin-silly.git
cd babel-plugin-silly

npm install
npm link

cd tests
npm install
npm link @hobroker/babel-plugin-silly
```

##### output the transformed code
`npm run quck-build`
##### see the transformed code in dist directory
`npm run build`
##### transform then execute the code in index.js
`npm start`
