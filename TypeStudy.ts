declare var $:{
    (selector:string): any;
};

class Point {
    constructor(public x: number, public y: number){

    }

    add(point: Point){
        return new Point(this.x + point.x, this.y + point.y);
    }
}

const p1 = new Point(0, 10);
const p2 = new Point(10, 20);
let nextPoint = p1.add(p2);