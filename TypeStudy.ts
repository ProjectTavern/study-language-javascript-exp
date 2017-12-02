declare var $:{
    (selector:string): any;
};

class Point {
    x: number;
    y: number;

    constructor(x: number,y: number){
        this.x = x;
        this.y = y;
    }

    add(point: Point){
        return new Point(this.x + point.x, this.y + point.y);
    }
}

const p1 = new Point(0, 10);
const p2 = new Point(10, 20);
let nextPoint = p1.add(p2);

/* Equality */
var foo = {};
var bar = foo;
var bar = {};

console.log("Hello, world!");

class Point3D extends Point {
    z: number;
    constructor(x: number, y: number, z: number){
        super(x, y);
        this.z = z;
    }
    add(point: Point3D) {
        var point2D = super.add(point);
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    }
}