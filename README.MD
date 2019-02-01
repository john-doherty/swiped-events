# swiped-events

[![Linked In](https://img.shields.io/badge/Linked-In-blue.svg)](https://www.linkedin.com/in/john-i-doherty) [![Twitter Follow](https://img.shields.io/twitter/follow/mrjohndoherty.svg?style=social&label=Twitter&style=plastic)](https://twitter.com/mrjohndoherty)

A **0.7k** script that adds `swiped-left`, `swiped-right`, `swiped-up` and `swiped-down` events to the DOM using [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent) and pure JS. Based on the StackOverflow thread [Detect a finger swipe through JavaScript on the iPhone and Android](https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android)

<img src="docs/example.gif" height="349px"/>

## Usage

Add [swiped-events.min.js](dist/swiped-events.min.js) to your page and start listening for swipe events. Events bubble, so you can `addEventListener` at document level, or on individual elements.

### swiped-left

```js
document.addEventListener('swiped-left', function(e) {
  console.log(e.target); // element that was swiped
});
```

### swiped-right

```js
document.addEventListener('swiped-right', function(e) {
    console.log(e.target); // element that was swiped
});
```

### swiped-up

```js
document.addEventListener('swiped-up', function(e) {
    console.log(e.target); // element that was swiped
});
  ```

### swiped-down

```js
document.addEventListener('swiped-down', function(e) {
    console.log(e.target); // element that was swiped
});
```

### Configure

You can _optionally_ configure how [swiped-events](https://github.com/john-doherty/swiped-events) works using the following HTML attributes:

Attribute              | Description                                            | Type      | Default
---------------------- | ------------------------------------------------------ | --------- | --------
`data-swipe-threshold` | Number of *pixels* a user must move before swipe fires | _integer_ | 20
`data-swipe-timeout`   | Number of *milliseconds* from touchstart to touchend   | _integer_ | 500
`data-swipe-ignore`    | If *true*, swipe events on this element are ignored    | _boolean_ | _false_

If you do not provide any attributes, it assumes the following:

```html
<div data-swipe-threshold="20"
     data-swipe-timeout="500"
     data-swipe-ignore="false">
     Swiper, get swiping!
</div>
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
git clone https://github.com/john-doherty/swiped-events
cd swiped-events
npm install
npm start
```

### Update .min files

To create a new version of the minified [swiped-events.min.js](dist/swiped-events.min.js) file from source, tweak the version number in `package.json` and run the following:

```bash
npm run build
```

## Star the repo

If you find this useful, please star the repo. It helps me priorities which open source projects issues I should tackle first.

## History

For change-log, check [releases](https://github.com/john-doherty/swiped-events/releases).

## License

Licensed under [MIT License](LICENSE) &copy; [John Doherty](http://www.johndoherty.info)