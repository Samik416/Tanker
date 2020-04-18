// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

var engine, world;
var ground, ball, tanker, Cannonball, Cannonball1;
var bg;

function setup() 
{
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    
    createCanvas(1200, 400);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200, 390, 2400, 20);
    tanker = new Tanker(200, 200, 20, 20);
    Cannonball = new CanonBall(200, 250);
    Cannonball1 = new CanonBall(200, 250);
    //Cannonball1 = new CanonBall(200, 200);

    
    

}

function draw() {
// Remember to update the Matter Engine and set the background.
background(255);
Engine.update(engine);

textSize(20);
text("Press 'space' to fire and 'a' to reload", 550, 20);

keyReleased();
hi();

ground.display();
tanker.display();

}


function keyReleased() {
    // Call the shoot method for the cannon.
    if(keyCode === 32)
    {                      
        //Cannonball = new CanonBall(200 ,200);
        
        Cannonball.display();
        //Cannonball1.display();
    }  
}
function hi(){
    if( keyCode === 65){
        Cannonball.x = 200 ;
        Cannonball.y = 200 ;
        //Cannonball.attach(Tanker);

    }
}