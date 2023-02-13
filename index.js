class World2D {
    constructor(canvas) {
        this.canvasCtx = canvas.getContext("2d");
        this.objects = {};
        
        this.update();
    }
    
    createObject(name, x, y, image, collider, mass) {
        this.objects[name] = {
            x: x,
            y: y,
            image: image,
            collider: collider,
            mass: mass
        }
    }
    
    update() {
        this.canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let object of this.objects) {
            object.draw(this.canvasCtx);
            
            for (let other of this.objects) {
                checkForCollision(object, other);
            }
        }
        
        this.update();
    }
}

class Object {
    constructor(position, image, collider, mass) {
        this.position = position;
        this.velocity = [0, 0];
        this.image = Object.assign(document.createElement("img"), {
            src: image
        });
        this.imageLoaded = false;
        this.image.addEventListener("load", () => {
            this.imageLoaded = true;
        });
        this.collider = collider;
        this.mass = mass;
    }
    
    draw(canvasCtx) {
        if (this.imageLoaded) {
            canvasCtx.drawImage(this.image, this.x - this.image.width / 2, this.y - this.image.height / 2);
        }
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

function checkForCollision(object, other) {
    //collider.box
}
