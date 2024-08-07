//-----------------Point Class--------------------//
class Point 
{
    x;
    y;


    constructor(x, y) 
    {
        this.x = x;
        this.y = y;
    }

    getX() 
    {
        return this.x;
    }

    getY() 
    {
        return this.y;
    }

    setX(x) 
    {
        this.x = x;
    }

    setY(y) 
    {
        this.y = y;
    }

    distance(p) 
    {
        return Math.sqrt((this.x - p.getX()) * (this.x - p.getX()) + (this.y - p.getY())
                * (this.y - p.getY()));
    }

    toString() 
    {
        s = "(" + this.x + ", " + this.y + ")";
        return s;
    }
}

//-----------------Line Class--------------------//
class Line 
{
    p1;
    p2;

    constructor(p1, p2) 
    {
        p1 = new Point (p1.x,p1.y);
        p2 = new Point (p2.x,p2.y);
    }

    len() 
    {
        return Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y)
                * (p1.y - p2.y));
    }
}

let p1 = new Point(0, 0);
let p2 = new Point(2, 2);

let l1 = new Line(p1, p2);

console.log(l1.len());