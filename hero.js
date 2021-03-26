class Hero {
    constructor(x, y, r) {
      var options = {
        
          'frictionAir':1,
          'density':1

      };
      this.x=x;
      this.y=y;
      this.r=r;
      this.image=loadImage("Superhero-01.png");
      
      this.body = Bodies.circle( this.x, this.y, (this.r)/2 , options);
      
      
      World.add(world, this.body);
    }
    display(){
      var Hpos =this.body.position;
      
      push();
      translate(Hpos.x, Hpos.y-100);
      
      rectMode(CENTER);
      fill(255,0,255);
      imageMode(CENTER);
      image(this.image,0,0,this.r+150,this.r);
    
      
      pop();
    }
  }