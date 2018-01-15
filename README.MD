# pure-swipe

[![Linked In](https://img.shields.io/badge/Linked-In-blue.svg)](https://www.linkedin.com/in/john-i-doherty) [![Twitter Follow](https://img.shields.io/twitter/follow/CambridgeMVP.svg?style=social&label=Twitter&style=plastic)](https://twitter.com/CambridgeMVP)

A **0.5k** script that adds `swiped-left`, `swiped-right`, `swiped-up` and `swiped-down` events to the DOM, to ease finger swipe detection on touch devices.

Based on the conversation and code snippets from the StackOverflow post [Detect a finger swipe through JavaScript on the iPhone and Android
](https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android)

## Usage

Add [pure-swipe.min.js](dist/pure-swipe.min.js) to your page and start listening for swipe events. Events bubble, so you can `addEventListener` at document level, or on individual elements:

### swiped-left

```js
document.addEventListener('swiped-left', function(e) {
  console.log(e.target); // the element that was swiped
});
```

### swiped-right

```js
document.addEventListener('swiped-right', function(e) {
  console.log(e.target); // the element that was swiped
});
```

### swiped-up

```js
document.addEventListener('swiped-up', function(e) {
  console.log(e.target); // the element that was swiped
});
```

### swiped-down

```js
document.addEventListener('swiped-down', function(e) {
  console.log(e.target); // the element that was swiped
});
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

### Development

The project includes everything needed to tweak, including a node webserver. Run the following, then visit [http://localhost:8080](http://localhost:8080) in your browser.

_You can test on a desktop using [Device Mode](https://developers.google.com/web/tools/chrome-devtools/device-mode/) in Google Chrome._

```bash
git clone https://github.com/john-doherty/pure-swipe
cd long-press
npm install
npm start
```

### Update .min files

To create a new version of the minified [pure-swipe.min.js](dist/pure-swipe.min.js) file from source, tweak the version number in `package.json` and run the following:

```bash
npm run build
```

## Star the repo

If you find this useful, star the repo :)

## History

For change-log, check [releases](https://github.com/john-doherty/pure-swipe/releases).

## License

Licensed under [MIT License](LICENSE) &copy; [John Doherty](http://www.johndoherty.info)