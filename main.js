function init() {
    createjs.Ticker.on("tick", tick);
    function tick() { console.log("TICK!!!"); }
    createjs.Ticker.setFPS(30);
    var stage = new createjs.Stage("screen");
    this.speed = 1;

    var circle = new createjs.Shape();
    circle.graphics.beginFill("#d3b668").drawCircle(0, 0, 25    );
    circle.y = 150;
    circle.x = 250;
    stage.addChild(circle);
    stage.update();

    function changeYVel(yVel) {
        var yVel = yVel * 0.9;
        circle.y = circle.y + yVel;
        stage.update();
    }

    function changeXVel(xVel) {
        var xVel = xVel * 0.9;
        circle.x = circle.x + xVel;
        stage.update();
    }

    window.addEventListener("keydown", function(event) {
        if (event.defaultPrevented) {
            return;
        }
        else if (event.code === "KeyW") {
            changeYVel(-10);
        }
        else if (event.code === "KeyS") {
            changeYVel(10);
        }
        else if (event.code === "KeyA") {
            changeXVel(-10);  
        }
        else if (event.code === "KeyD") {
            changeXVel(10);
        }
    }, true);
}
// this code is not mine