/**
 * Orthogonal Connector Router
 *   - Given two rectangles and their connection points, returns the path for an orthogonal connector.
 *
 * https://jose.page
 * 2020
 */
declare type Side = 'top' | 'right' | 'bottom' | 'left';
/**
 * A point in space
 */
interface Point {
    x: number;
    y: number;
}
/**
 * A size tuple
 */
interface Size {
    width: number;
    height: number;
}
/**
 * A line between two points
 */
interface Line {
    a: Point;
    b: Point;
}
/**
 * Represents a Rectangle by location and size
 */
interface Rect extends Size {
    left: number;
    top: number;
}
/**
 * Represents a connection point on a routing request
 */
interface ConnectorPoint {
    shape: Rect;
    side: Side;
    distance: number;
}
/**
 * Byproduct data emitted by the routing algorithm
 */
interface OrthogonalConnectorByproduct {
    hRulers: number[];
    vRulers: number[];
    spots: Point[];
    grid: Rectangle[];
    connections: Line[];
}
/**
 * Routing request data
 */
interface OrthogonalConnectorOpts {
    pointA: ConnectorPoint;
    pointB: ConnectorPoint;
    shapeMargin: number;
    globalBoundsMargin: number;
    globalBounds: Rect;
}
/**
 * Abstracts a Rectangle and adds geometric utilities
 */
declare class Rectangle {
    readonly left: number;
    readonly top: number;
    readonly width: number;
    readonly height: number;
    static get empty(): Rectangle;
    static fromRect(r: Rect): Rectangle;
    static fromLTRB(left: number, top: number, right: number, bottom: number): Rectangle;
    constructor(left: number, top: number, width: number, height: number);
    contains(p: Point): boolean;
    inflate(horizontal: number, vertical: number): Rectangle;
    intersects(rectangle: Rectangle): boolean;
    union(r: Rectangle): Rectangle;
    get center(): Point;
    get right(): number;
    get bottom(): number;
    get location(): Point;
    get northEast(): Point;
    get southEast(): Point;
    get southWest(): Point;
    get northWest(): Point;
    get east(): Point;
    get north(): Point;
    get south(): Point;
    get west(): Point;
    get size(): Size;
}
/**
 * Main logic wrapped in a class to hold a space for potential future functionallity
 */
export declare class OrthogonalConnector {
    static readonly byproduct: OrthogonalConnectorByproduct;
    static route(opts: OrthogonalConnectorOpts): Point[];
}
export {};
