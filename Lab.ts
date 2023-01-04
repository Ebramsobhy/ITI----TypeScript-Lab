            /* task 1 : Using TypeScript to solve the following:
                        a.Implement Rectangle custom type:
                        a.Constructor that width and height.
                        b.CalcCircumference() function that returns  the circumference of the rectangle.
                        c.WhoAmI() Static function that prints text (“I am rectangle”). */

class Rectangle
{
       rectwidth: number;
       rectheight: number;

    constructor(rectwidth, rectheight)
    {
        this.rectwidth = rectwidth;
        this.rectheight = rectheight;
    }
    calculateCircum()
    {
        return this.rectwidth * this.rectheight
    }
    static whoAmI()
    {
        console.log("i'am a rectangle");
    }
}

var rectangle = new Rectangle(10, 5);
console.log(rectangle.calculateCircum());
Rectangle.whoAmI();

           // --------------------------------------------------------------------------------------

/* task 2 : b.Implement Square custom type, that inherits from rectangle, and change the following:
a.	Make the constructor of square takes one parameter only.
b.	In the square constructor, make width and height of the parent equal.
c.	You’ll need to call the super() constructor in the square constructor to access the parent object properties.
d.	Override WhoAmI() function to print text (“I am square”). */ 

class Square extends Rectangle
{

    width: number;
    
    constructor(width,rectwidth)
    {
        super(width, rectwidth)
    }

    static whoAmI()
    {
        super.whoAmI()
        console.log("i'm a square");
    }

}
var square = new Square(10,20);
console.log(square.calculateCircum());
Square.whoAmI()

         //-----------------------------------------------------------------------------------

        /* Task 3 : Create class point2D that has x and y and then create constructor
         in the class and then implement method to calculate  length between two points */

 class Point2D
 {
    x:number;
    y:number;
    constructor(x:number, y:number)
    {
        this.x = x
        this.y = y
    }
    calculateLength(point2:Point2D)
    {
        var a = this.x - point2.x;
        var b = this.y - point2.y;
        var c = Math.sqrt(a * a + b * b);
        return c

    }
}

var p1:Point2D = new Point2D(2,3)
var p2:Point2D = new Point2D(2,4) 
console.log(p1.calculateLength(p2));
