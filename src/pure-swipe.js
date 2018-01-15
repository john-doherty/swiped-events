/*!
 * pure-swipe.js - v@version@
 * Pure JavaScript swipe events
 * https://github.com/john-doherty/pure-swipe
 * @author John Doherty <www.johndoherty.info>
 * @license MIT
 */
(function (window, document) {

    'use strict';

    // patch CustomEvent to allow constructor creation (IE/Chrome) - resolved once initCustomEvent no longer exists
    if ('initCustomEvent' in document.createEvent('CustomEvent')) {

        window.CustomEvent = function (event, params) {

            params = params || { bubbles: false, cancelable: false, detail: undefined };

            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        };

        window.CustomEvent.prototype = window.Event.prototype;
    }

    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;
    var yDown = null;
    var startEl = null;

    function handleTouchStart(e) {
        xDown = e.touches[0].clientX;
        yDown = e.touches[0].clientY;
        startEl = e.target;
    }

    function handleTouchMove(e) {

        if (!startEl || !xDown || !yDown) return;
        if (startEl !== e.target) return;

        var xUp = e.touches[0].clientX;
        var yUp = e.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        var eventType = '';

        if (Math.abs(xDiff) > Math.abs(yDiff)) { // most significant
            if (xDiff > 0) {
                eventType = 'swiped-left';
            }
            else {
                eventType = 'swiped-right';
            }
        }
        else {
            if (yDiff > 0) {
                eventType = 'swiped-up';
            }
            else {
                eventType = 'swiped-down';
            }
        }

        if (eventType !== '') {

            startEl.dispatchEvent(new CustomEvent(eventType, { bubbles: true, cancelable: true }));

            if (console && console.log) console.log(eventType + ' fired on ' + startEl.tagName);
        }

        /* reset values */
        xDown = null;
        yDown = null;
        startEl = null;
    }

}(this, document));
