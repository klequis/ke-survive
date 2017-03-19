Current position: https://survivejs.com/webpack/developing/composing-configuration/


## Notes
### Meaning of output
[0] ./app/component.js 148 bytes {0} [built]
[0] - ID of the entry asset
./app/component.js - name
148 bytes - size
{0} - entry chunk ID
[built] - the way it was generated

## CSS Modules
(see css-loader option)[https://www.npmjs.com/package/css-loader#local-scope]
(and in the book)[https://survivejs.com/webpack/styling/loading/]
_If you are using CSS Modules in your project, you should process normal CSS through a separate loader definition without the modules option of css-loader enabled. Otherwise it rewrites the class names and Font Awesome does not work as you expect._

## commands
````
// See what is running on port 8080
$ netstat -na | grep 8080

// Get the ip of your machine
$ ifconfig | grep inet
````

## other projects
- (webpack-starter)[https://github.com/webpack/react-starter]
- (webpack-chain)[https://www.npmjs.com/package/webpack-chain]

## Otherwise
Loading chapter introduces no changes to the project.
