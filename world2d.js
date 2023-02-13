class World2D {
    constructor(canvas) {
        this.canvas = canvas;
        this.canvasCtx = canvas.getContext("2d");
        this.sprites = [];
        
        this.update();
    }
    
    addSprite(sprite) {
        this.sprites.push(sprite);
    }
    
    update() {
        // this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        for (let sprite of this.sprites) {
            sprite.draw(this.canvasCtx);
            
            for (let other of this.sprites) {
                checkForCollision(sprite, other);
            }
        }
        
        requestAnimationFrame(this.update.bind(this));
    }
}

class Sprite {
    constructor(position, image, collider, mass) {
        this.position = position;
        this.velocity = Vector2D.zero;
        this.image = Object.assign(document.createElement("img"), {
            src: image
        });
        this.imageLoaded = false;
        this.image.addEventListener("load", (() => {
            this.imageLoaded = true;
        }).bind(this));
        this.collider = collider;
        this.mass = mass;
    }
    
    draw(canvasCtx) {
        if (this.imageLoaded) {
            canvasCtx.drawImage(this.image, this.position.x - this.image.width / 2, this.position.y - this.image.height / 2);
        }
    }
}

class Vector2 {
    static zero = new Vector2(0, 0);
    
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    add(other) {
        return new Vector2(this.x + other.x, this.y + other.y);
    }
}

class Collider {
    constructor(width, height, callback) {
        this.width = width;
        this.height = height;
        this.callback = callback;
    }
}

class CollisionInfo {
    constructor(other, side) {
    }
}

function checkForCollision(sprite, other) {
    //collider.box
}
