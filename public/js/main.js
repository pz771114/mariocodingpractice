
    //ES6 syntax module
    import SpriteSheet from './SpriteSheet.js';

    function loadImage(url){
      return new Promise(resolve=>{
        const image = new Image();

        image.addEventListener('load', ()=>{
          resolve(image);
        })

        image.src= url;
      });
    }

   
    loadImage('/assets/tiles.png').
      then(image=>{

        const sprites = new SpriteSheet(image,16,16);
        sprites.define('ground',0,0);
        sprites.draw('ground',context,45,65);

      });
    const canvas = document.getElementById("screen");
    const context = canvas.getContext("2d");

    context.fillRect(0, 0, 50, 50);

