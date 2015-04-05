

function Mouse(a) {
    this.x = 0;
    this.y = 0;
    this.previousX = 0;
    this.previousY = 0;
    this.movementX = 0;
    this.movementY = 0;
    this.dragStarted = false;
    this.mouseMoveEvent = function(a) {
        this.previousX = this.x;
        this.previousY = this.y;
        if (a.layerX || a.layerX == 0) {
            this.x = a.layerX;
            this.y = a.layerY
        } else if (a.offsetX || a.offsetX == 0) {
            this.x = a.offsetX;
            this.y = a.offsetY
        }
        this.movementX = this.previousX - this.x;
        this.movementY = this.previousY - this.y;
        if (this.dragStarted) {
            myTimer.realTime -= this.movementX * 1.8;
            if (myTimer.realTime < 0) {
                myTimer.realTime = 0
            }
            if (myTimer.realTime > 25 * 60) {
                myTimer.realTime = 25 * 60
            }
        }
    };
    this.mouseUpEvent = function() {
        this.dragStarted = false
    };
    this.mouseOutEvent = function() {
        this.dragStarted = false
    };
    this.mouseDownEvent = function() {
        this.dragStarted = false
    }
}
var documentTitle = document.title;
startEngine = function(a) {
    myTomato.generateStemShape();
    CanvasElement = document.getElementById(a);
    CanvasElement.addEventListener("mousemove", myMouse.mouseMoveEvent, false);
    CanvasElement.addEventListener("mouseup", myMouse.mouseUpEvent, false);
    CanvasElement.addEventListener("mousedown", myMouse.mouseDownEvent, false);
    CanvasElement.addEventListener("mouseout", myMouse.mouseOutEvent, false);
    myTomato.draw();
    drawtick = setInterval("myTomato.draw();", 25);
    ticktimer = setInterval("myTimer.tick();", 1e3)
};
Timer = function() {
    this.realTime = 0;
    this.shownTime = 0;
    this.prevTime = 0;
    this.slowness = 10;
    this.tick = function() {
        this.prevTime = Math.round(this.realTime);
        if (this.realTime >= 0) {
            this.realTime = this.realTime - 1
        }
        if (this.prevTime != 0 && Math.round(this.realTime) == 0) {
            playBellSound()
        }
        if (this.isRunning()) {
            playTickSound()
        } else {
            pauseTickSound()
        }
    };
    this.step = function() {
        this.shownTime = (this.shownTime * this.slowness + this.realTime) / (this.slowness + 1)
    };
    this.start = function(a) {
        this.realTime = a
    };
    this.stop = function() {
        this.realTime = 0
    };
    this.isRunning = function() {
        if (this.realTime <= 0) {
            return false
        } else {
            return true
        }
    }
};
myTimer = new Timer;
Point = function(a, b, c) {
    this.x = a;
    this.y = b;
    this.z = c
};
var lastX = 0,
    started = false;
myMouse = new Mouse;
Tomato = function(a) {
    this.scale = a;
    this.generateStemShape = function() {
        var a = [
            [1, 31, 10],
            [70, 54, 0],
            [54, 13, 10],
            [99, 44, -7],
            [144, 3, -7],
            [127, 54, 0],
            [200, 42, 15],
            [149, 75, 0],
            [207, 95, 10],
            [125, 114, 0],
            [179, 158, 10],
            [116, 137, 0],
            [110, 193, 20],
            [93, 129, -7],
            [52, 177, 5],
            [71, 144, -7],
            [24, 128, 15],
            [54, 83, 0]
        ];
        for (point in a) {
            point = a[point];
            stemShape.push(new Point(point[0] * this.scale, point[1] * this.scale, point[2] * this.scale))
        }
    };
    this.draw = function() {
        myTimer.step();
        var b = CanvasElement.getContext("2d");
        var c = new Point(130, 140);
        var d = 140 / .75 * a;
        if (!myTimer.isRunning()) {
            document.title = documentTitle
        } else {
            if (myTimer.realTime > 120) {
                document.title = Math.round(myTimer.realTime / 60) + " min. left"
            } else if (myTimer.realTime > 60) {
                document.title = "1 min. left"
            } else {
                document.title = Math.round(myTimer.realTime) + " sec. left"
            }
        }
        b.fillStyle = "white";
        b.fillRect(0, 0, 800, 260);
        b.beginPath();
        b.arc(c.x, c.y, d, 0, 360, false);
        b.closePath();
        b.fillStyle = "#e06666";
        b.fill();
        startPoint = new Point(c.x, 175 * a);
        centralPoint = new Point(95 * a, 85 * a, 0);
        b.fillStyle = "#93c47d";
        b.strokeStyle = "#33761b";
        b.lineWidth = 1.35;
        first = true;
        theta = 0 - 60 / 360 / 25 * myTimer.shownTime / 25 * 15.5;
        b.beginPath();
        for (point in stemShape) {
            var e = stemShape[point];
            var f = new Point(Math.cos(theta) * (centralPoint.x - e.x) - Math.sin(theta) * (centralPoint.y - e.y) + centralPoint.x, Math.sin(theta) * (centralPoint.x - e.x) + Math.cos(theta) * (centralPoint.y - e.y) + centralPoint.y);
            var g = new Point(f.x + startPoint.x - centralPoint.x, (f.y + startPoint.y - centralPoint.y) * .45 - e.z);
            if (first) {
                first = false;
                b.moveTo(g.x, g.y)
            } else {
                b.lineTo(g.x, g.y)
            }
        }
        b.closePath();
        b.fill();
        b.stroke();
        b.fillStyle = "white";
        b.beginPath();
        b.moveTo(c.x, c.y + 90 / .75 * a);
        b.lineTo(c.x + 4 / .75 * a, c.y + 97 / .75 * a);
        b.lineTo(c.x - 4 / .75 * a, c.y + 97 / .75 * a);
        b.closePath();
        b.fill();
        b.font = "bold 1.4em amaranth";
        b.textAlign = "center";
        b.textBaseline = "bottom";
        for (i = 25; i >= 0; i--) {
            theta = Math.PI * 2 / 360 * (360 / 26 * i - 360 / 60 / 26 * myTimer.shownTime + 90);
            var h = new Point(Math.cos(theta) * d + c.x, Math.sin(theta) * d * .45 + c.y);
            var j = Math.abs(h.y - c.y);
            var k = new Point(j / (d * .45), 1);
            if (h.y > c.y) {
                theta = Math.atan((c.x - h.x) / Math.abs(c.y - h.y)) / Math.PI / 2;
                b.save();
                b.translate(h.x, h.y);
                b.scale(k.x, k.y);
                b.rotate(theta);
                b.fillText(i, 0, 0);
                b.restore();
                b.save();
                b.translate(h.x, h.y);
                b.scale(k.x, k.y);
                b.rotate(theta);
                b.fillRect(-2.5, -2.5, 5, 5);
                b.restore()
            }
        }
        b.save();
        b.strokeStyle = "white";
        b.lineWidth = 3;
        b.moveTo(c.x + d, c.y);
        b.scale(1, .45);
        b.translate(c.x, c.y / .45 + 15);
        b.arc(0, 0, d + 5, 0, Math.PI, false);
        b.stroke();
        b.restore()
    }
};
var myTomato = new Tomato(.55);
var stemShape = new Array;
startTimer = function() {
    // src("http://tomer.nutcoco.com/api/index.php?action=new_tomato");
    myTimer.start(60 * 25)
};

stopTimer = function() {
    myTimer.stop()
};
playBellSound = function() {
    document.getElementById("bell").play()
};
playTickSound = function() {
    if (document.forms[0].elements[0].checked == true) {
        document.getElementById("tick").play()
    } else {
        document.getElementById("tick").pause()
    }
};
pauseTickSound = function() {
    document.getElementById("tick").pause()
};






/* 
 *
 *
 *@auther Yudi An
 */




clock = function() {
        var $s = $(".second"),
            d = new Date(),
            s = myTimer.realTime;

        $s.val(s).trigger("change");
        setTimeout("clock()", 1000);
 };

            

turnText = function(){
    document.getElementById("timer-canvas").style.display = "none";
    if(document.getElementById('circletimer')!=null){
        document.getElementById("circletimer").style.display = "inline";
    } else {
        document.getElementById("textimer").style.display = "block";
    }
    // document.getElementById("textimer").style.display = "block";
    // document.getElementById("circletimer").style.display = "inline";
    // clock();
    // setTimeText();
    clock(); 
     $(function($) {
                $(".knob").knob({

                    draw : function () {
                        // "tron" case
                        if(this.$.data('skin') == 'tron') {

                            this.cursorExt = 0.3;

                            var a = this.arc(this.cv)  // Arc
                                , pa                   // Previous arc
                                , r = 1;

                            this.g.lineWidth = this.lineWidth;

                            if (this.o.displayPrevious) {
                                pa = this.arc(this.v);
                                this.g.beginPath();
                                this.g.strokeStyle = this.pColor;
                                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                                this.g.stroke();
                            }

                            this.g.beginPath();
                            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                            this.g.stroke();

                            this.g.lineWidth = 2;
                            this.g.beginPath();
                            this.g.strokeStyle = this.o.fgColor;
                            this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                            this.g.stroke();

                            return false;
                        }
                    }
                });

             
            });   

    
};

turnToma = function(){
    document.getElementById("circletimer").style.display = "none";
    document.getElementById("timer-canvas").style.display = "block";

};

timeFormat = function(){
    if(myTimer.realTime<0){
            var min_t = 25;
            var sec_t = 00;
        } else{
            min_t = Math.floor(Math.round(myTimer.realTime)/60);
            sec_t = Math.round(myTimer.realTime)-min_t*60;
        }

        if(sec_t>9){
            document.getElementById("textimer").innerHTML = min_t +" : " + sec_t;
        } else {
            document.getElementById("textimer").innerHTML = min_t +" : " + "0"+sec_t;
        }
};

setTimeText = function(){

    timeFormat();   

    setInterval(
        function(){ 
            timeFormat(); 
        }
        ,1000);    

};
