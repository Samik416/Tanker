class CanonBall 
{
  
  constructor(x, y) 
  {
    var options = 
    {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
    this.image = loadImage("assets/canonBall.png");
  
    this.x =  x;
    this.y = y;
    
  }

  attach(body){
    this.body = body;
}
  display()
  {
    
    this.x=this.x+ 5;
    this.y= this.y -2;

    image(this.image, this.x,this.y);
  };
};