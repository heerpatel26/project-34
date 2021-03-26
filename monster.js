class Monster {
    constructor(x, y, r) {
      var options = {
        
          'frictionAir':0,
          'density':5

      };
      this.x=x;
      this.y=y;
      this.r=r;
      this.image=loadImage("Monster-01.png");
      
      this.body = Bodies.circle( this.x, this.y, (this.r)/2 , options);
      
      
      World.add(world, this.body);
    }
    display(){
      var Mpos =this.body.position;
      
      push();
      translate(Mpos.x, Mpos.y-100);
      
      rectMode(CENTER);
      fill(255,0,255);
      imageMode(CENTER);
      image(this.image,0,0,this.r,this.r);
    
      
      pop();
    }
  }