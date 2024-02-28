
export type SwipedEventDirection = "up" | "down" | "left" | "right";

export type SwipedEventTouchType = "stylus" | "direct";

/**
 * Event data for a "swiped" event
 */
export type SwipedEventDetail = {
    /**
     * Swipe direction (up, down, left, right)
     */
    dir: SwipedEventDirection,
    /**
     * Touch type (stylus, direct)
     *
     * stylus = apple pencil
     *
     * direct = finger
     */
    touchType: SwipedEventTouchType,
    /**
     * X coordinates of swipe start
     */
    xStart: number,
    /**
     * X coordinates of swipe end
     */
    xEnd: number,
    /**
     * Y coordinates of swipe start
     */
    yStart: number,
    /**
     * Y coordinates of swipe end
     */
    yEnd: number,
    /**
     * Number of fingers used
     */
    fingers: number
};

export type SwipedEventType = "swiped" | `swiped-${SwipedEventDirection}`;

export type SwipedEvent = Event & { detail: SwipedEventDetail, type: SwipedEventType };


declare global {
    interface HTMLElement {
        addEventListener(type: "swiped", callback: ((v: SwipedEvent) => void) | null, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: SwipedEventType, callback: ((v: SwipedEvent) => void) | null, options?: boolean | AddEventListenerOptions): void;
    }
    interface Window {
        addEventListener(type: "swiped", callback: ((v: SwipedEvent) => void) | null, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: SwipedEventType, callback: ((v: SwipedEvent) => void) | null, options?: boolean | AddEventListenerOptions): void;
    }
}
