class CannonBall {
    constructor(x, y) {
        this.x = x;
        this.y = y;        

      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };

      this.r = 40;
  //crie um corpo circular
  this.body = Bodies.circle(this.x, this.y, this.r, options);

  //carregue a imagem
  this.image = loadImage("./assets/cannonball.png");

  World.add(world, this.body);
    }
  
    shoot() {
      
      //defina o ângulo da bala para o canhão
      //defina valor estático para o corpo
      //defina a velocidade da bala para fazer a bala se mover
    }
  
    show() {
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      //mostrar a imagem
      image(this.image, 0,0, this.r, this.r);
      pop();
  
      }
    }
  