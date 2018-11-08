var canvas = document.getElementById ("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var width=window.innerWidth, height =window.innerHeight;
var coors ={};
var classcanvas = document.getElementById("canvas");
classcanvas.style="";
classcanvas.style.position="fixed";
classcanvas.style.top ="0";
classcanvas.style.left = "0";
classcanvas.style.zIndex ="10";
classcanvas.classList.value = "";

classcanvas.style.width= window.innerWidth;

// var canvas = document.createElement("canvas");
// var ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth*11/12;
// canvas.height = window.innerHeight;
// document.body.appendChild("canvas");

var arcstatic = [141,200,250,280,300,427,550,575,590,605,700,750,755];
var options = {
    startPointX: canvas.width / 2,
    startPointY: canvas.height / 2,
    color: "rgba(83, 84, 86, 0.1)", //"rgba(83, 84, 86, 0.4)", 
    backcolor: "rgba(7, 7, 7, 0.82 )",//"rgba(4, 4, 4, 0.95 )",

    numberOfObjArc: 2,
    radius: 300,

    numberOfObjRect: 3,
    rotangle: 120,
    angleOfanime: 1,
    width: 200,
    height: 200,

    text:"Load",
    textcolor:"rgba(234, 239, 242,0.92)",//"rgba(13, 48, 5, 0.92 )",
    textfont:"16pt Arial",


    shimColor:"rgba(31, 32, 33, 0.3 )",
    shimColortext1:"rgba(20, 51, 21, 0.05 )",
    shimColortext2:"rgba(225, 225, 225, 0.051 )",
    mouseX:0,
    mouseY:0,    
    backgroundcolor:function () {
        ctx.fillStyle = this.backcolor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    },
    tranformRect: function () {
        //this.width=this.runVolue(200,400,3);
        //his.height=this.width;
        var one_degree_in_radians = this.angleOfanime;
        for (i = 1; i <= this.numberOfObjRect; i++) {
            one_degree_in_radians += this.rotangle * Math.PI / 180;

            ctx.save();
            ctx.translate(this.startPointX, this.startPointY);
            ctx.rotate(one_degree_in_radians);

            ctx.fillStyle =options.color;
            ctx.strokeStyle =options.color;
            ctx.lineWidth = 2.0;

            ctx.beginPath();
            ctx.moveTo(-this.width / 2, -this.height / 2);
            ctx.lineTo(this.width / 2, -this.height / 2);
            ctx.lineTo(this.width / 2, this.height / 2);
            ctx.lineTo(-this.width / 2, this.height / 2);

            ctx.closePath();
            ctx.stroke();
            ctx.restore();

        }

    },
    tranformArc: function (r =this.radius,x=this.startPointX,y=this.startPointY) {
        for (i = 1; i <= this.numberOfObjArc; i++) {
            //this.radius = this.runVolue(200,400,3);
            ctx.save();
            ctx.translate(x, y);

            ctx.strokeStyle =options.color;
            ctx.lineWidth = 1.5;

            ctx.beginPath();
            ctx.arc(0, 0, r, 0, 2 * Math.PI * r, false);

            ctx.stroke();
            ctx.restore();

                       }
        },
    shim: function () {
        for (i=0 ; i<5000 ; i++) {
            ctx.fillStyle =this.shimColor ;
            
            var x=this.runVolue(options.mouseX-700, options.mouseX+150, 3);
            var y=this.runVolue(options.mouseY-700, options.mouseY+150, 3);
            
            var x0 =options.mouseX;
            var y0=options.mouseY;
                    
            var a=500;
            var b= 500;

            var a1 = ((x-x0)*(x-x0))/(a*a);
            var a2 = ((y-y0)*(y-y0))/(b*b);
         
        if ((a1+a2)<=1) {
        ctx.fillRect(x, y, this.runVolue (1,5,2), this.runVolue (1,1,2));            
        }
            
            
            //ctx.fillRect(this.runVolue(1, canvas.width/2, 3), this.runVolue(2, canvas.height/2, 3), this.runVolue (1,5,2), this.runVolue (1,3,2));
             }
        if (this.text) {
            for (i = 0; i < 10; i++) {
                ctx.fillStyle = this.shimColortext1;
                ctx.fillRect(this.runVolue(this.startPointX - 70, this.startPointX - 20, 3), this.runVolue(this.startPointY - 0, this.startPointY + 20, 3), 5, 5);
            }
            for (i = 0; i < 10; i++) {
                ctx.fillStyle = this.shimColortext2;
                ctx.fillRect(this.runVolue(this.startPointX - 70, this.startPointX - 20, 3), this.runVolue(this.startPointY - 0, this.startPointY + 20, 3), 3, 3);
            }
        }
    },
    shim2: function t () {
         

        if (!this.shim2.x) {
        this.shim2.x=0;
        this.shim2.y=0;
        }
        if (this.shim2.x>=canvas.width){
            this.shim2.x=0;
        }
        
        for (i=0 ; this.shim2.x<canvas.width ; this.shim2.x+50) {
        
          for (i=0 ; this.shim2.y<canvas.height ; this.shim2.y+50) {
          console.log ("------------>true+");
            ctx.fillStyle =this.shimColor ;
            ctx.fillRect(this.runVolue(-100, canvas.width, 3), this.runVolue(-200, canvas.height, 3), this.runVolue (5,5,2), this.runVolue (1,3,2));
             
             }
             this.shim2.y =0;
             
             }
        if (this.text) {
            for (i = 0; i < 2; i++) {
                ctx.fillStyle = this.shimColortext1;
                ctx.fillRect(this.runVolue(this.startPointX - 70, this.startPointX - 20, 3), this.runVolue(this.startPointY - 0, this.startPointY + 20, 3), 5, 5);
            }
            for (i = 0; i < 2; i++) {
                ctx.fillStyle = this.shimColortext2;
                ctx.fillRect(this.runVolue(this.startPointX - 70, this.startPointX - 20, 3), this.runVolue(this.startPointY - 0, this.startPointY + 20, 3), 3, 3);
            }
        }
    },    
    runVolue: function (min, max, type) {

        if (type == 1) {
            // Возвращает случайное число между 0 (включительно) и 1 (не включая 1)
                return Math.random();
        }

        if (type == 2) {
            // Возвращает случайное число между min (включительно) и max (не включая max)
                return Math.random() * (max - min) + min;
        }


        if (type == 3) {
            // Возвращает случайное целое число между min (включительно) и max (не включая max)
            // Использование метода Math.round() даст вам неравномерное распределение!
               return Math.floor(Math.random() * (max - min)) + min;
        }


    },
    ftext: function () {
        ctx.fillStyle = this.textcolor;
        ctx.strokeStyle = this.textcolor;
        ctx.font = this.textfont;
        ctx.fillText(this.text, this.startPointX-70, this.startPointY+20);
    }
}





function rect (X,Y, width, height, fat,ang){
    ctx.save();
    ctx.translate(X, Y);
    ctx.rotate(ang  * Math.PI / 180);

    ctx.strokeStyle =options.color;
    ctx.lineWidth = fat;


    ctx.beginPath();
    ctx.moveTo(-width / 2, -height / 2);
    ctx.lineTo(width / 2, -height / 2);
    ctx.lineTo(width / 2, height / 2);
    ctx.lineTo(-width / 2, height / 2);

    ctx.closePath();
    ctx.stroke();
    ctx.restore();
}







options.backgroundcolor();

var fl=1, k=0,flonload=0, point=".";
var timestamp;
//-------------------------
(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

var start = new Date().getTime();  // Only supported in FF. Other browsers can use something like Date.now().

function step(timestamp) {
  var progress = timestamp - start;
  render();
  //if (progress < 2000) {
    
    // console.log (" start = " +  start+ "------------progress---------" + progress);
    timestamp = start;
    requestAnimationFrame(step);
  //}
}

requestAnimationFrame(step);
//--------------------


function render (){
    //console.log ("------------>true<----------");
    ctx.clearRect(0, 0 , canvas.width, canvas.height);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    options.startPointX = canvas.width/2;
    options.startPointY = canvas.height/2;
    options.backgroundcolor();
    options.tranformRect();
    options.tranformArc();
    
    options.tranformArc(arcstatic[0]);
    for (var i=1 ; i<=arcstatic.length; i++){    
        var n=10;
        if (i>3){
        dx=(canvas.width/2-options.mouseX-i*n)/30;
        dy=(canvas.height/2-options.mouseY-i*n)/30;    
        //console.log (i + "  0 "+dy);
        } 
        if (i<3) {
        dx=-1*(canvas.width/2-options.mouseX-i*n)/10;
        dy=-1*(canvas.height/2-options.mouseY-i*n)/10;    
        //console.log (i + "  - "+dy);    
        }
        options.tranformArc(arcstatic[i],canvas.width/2+dx,canvas.height/2+dy);
    }
    rect(options.startPointX, options.startPointY,575,575,1,45);
    rect(options.startPointX, options.startPointY,200,200,3,0);


   //fl+=1;
   // if (fl==2) {
        options.angleOfanime+=0.01;
        options.radius +=10;
        options.radius >800?options.radius=options.runVolue(200,400,3):"";


    //}
    //if (fl==3) {
        options.ftext ();
        options.text=options.text+point;

        //if  (k>=7) {
            options.text = options.text.replace(/\./g, "");
            k = 0;
       // }
        //k+=1;
        //fl=0;

    //}

    if (flonload==1){
        classcanvas.style.position="";
        classcanvas.style.top ="";
        classcanvas.style.left = "";
        classcanvas.style.zIndex ="1";
        classcanvas.classList.value = "canvas col-lg-10 col-md-9 col-sm-12 fadeOut";
        options.text="";
        point="";
        options.backcolor=  "rgba(7, 7, 7, 0.82 )";
        options.color= "rgba(83, 84, 86, 0.1)"
    }
    
    options.shim();

    window.onload = function() {
        //console.log ("------------>true+");
        flonload=1;
    };
};


canvas.addEventListener('mousemove', function (event) {  
    options.startPointX= event.pageX;
    options.startPointY= event.pageY;
    options.mouseX = event.pageX;
    options.mouseY = event.pageY;
    
}, false);
