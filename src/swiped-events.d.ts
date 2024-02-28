
export type SwipedEventDirection = "up" | "down" | "left" | "right";

export type SwipedEventTouchType = "stylus" | "direct";

/**
 * Event data for a "swiped" event
 */
export type SwipedEventDetail<D extends SwipedEventDirection = SwipedEventDirection> = {
    /**
     * Swipe direction (up, down, left, right)
     */
    dir: D,
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

export type SwipedEvent = CustomEvent<SwipedEventDetail> & { type: SwipedEventType };
export type SwipedLeftEvent = CustomEvent<SwipedEventDetail<"left">> & { type: "swiped-left" };
export type SwipedRightEvent = CustomEvent<SwipedEventDetail<"right">> & { type: "swiped-right" };
export type SwipedUpEvent = CustomEvent<SwipedEventDetail<"up">> & { type: "swiped-up" };
export type SwipedDownEvent = CustomEvent<SwipedEventDetail<"down">> & { type: "swiped-down" };

export type SwipedEventMap = {
    "swiped": SwipedEvent,
    "swiped-left": SwipedLeftEvent,
    "swiped-right": SwipedRightEvent,
    "swiped-up": SwipedUpEvent,
    "swiped-down": SwipedDownEvent
};


declare global {
    interface HTMLElement {
        addEventListener(type: "swiped", callback: ((v: SwipedEvent) => void) | null, options?: boolean | AddEventListenerOptions): void;
        addEventListener<T extends keyof SwipedEventMap>(type: T, callback: ((v: SwipedEventMap[T]) => void) | null, options?: boolean | AddEventListenerOptions): void;
    }
    interface Window {
        addEventListener(type: "swiped", callback: ((v: SwipedEvent) => void) | null, options?: boolean | AddEventListenerOptions): void;
        addEventListener<T extends keyof SwipedEventMap>(type: T, callback: ((v: SwipedEventMap[T]) => void) | null, options?: boolean | AddEventListenerOptions): void;
    }
}
