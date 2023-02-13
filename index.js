class World2D {
    constructor(canvas) {
        this.canvasCtx = canvas.getContext("2d");
        this.objects = {};
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
}
