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
        this.image = image;
        this.collider = collider;
        this.mass = mass;
    }
}

class Collider {
}

function checkForCollision(object, other) {
    collider.
}
