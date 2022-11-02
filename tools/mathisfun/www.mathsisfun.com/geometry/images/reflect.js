function reflectMain(mode){this.version='0.81';this.mode=typeof mode!=='undefined'?mode:'rect';console.log('this.mode',this.mode)
w=400;h=480;var canvasTop=80;this.canvasH=(h-canvasTop);var s="";s+='<div style="position:relative; width:'+w+'px; min-height:'+h+'px; border: none; border-radius: 20px; background-color: #def; margin:auto; display:block;">';s+='<canvas id="canvasId" style="position: absolute; width:'+w+'px; height:'+this.canvasH+'px; left: 0; top:'+canvasTop+'px; border: none;"></canvas>';s+='<button onclick="nextShape()" style="position:absolute; right: 9px; top:9px; z-index:2; font: 15px Arial;"  class="circbtn" />Next Shape</button>';s+='<form onclick="doType()" id="formtype" style="position:absolute; left:9px; top:9px; text-align: left; padding: 5px; font: bold 11pt arial; color: #6600cc; background: rgba(200,220,256,0.7); border-radius: 9px; z-index:3; ">';s+='<input type="radio" id="r1" name="typ" value="horiz" />';s+='<label for="r1" style="height:18px; cursor:pointer;">Horizontal Reflection</label><br/>';s+='<input type="radio" id="r2" name="typ" value="vert" />';s+='<label for="r2" style="height:18px; cursor:pointer;">Vertical Reflection</label><br/>';s+='<input type="radio" id="r3" name="typ" value="diag" />';s+='<label for="r3" style="height:18px; cursor:pointer;">Diagonal Reflection</label>';s+='</form>';s+='<button id="linesBtn" onclick="toggleLines()" style="position:absolute; left:200px; top:25px; z-index:2;" class="togglebtn lo" >Lines</button>';s+='<div id="copyrt" style="font: 10px Arial; font-weight: bold; color: blue; position:absolute; right:8px; bottom:3px;">&copy; 2015 MathsIsFun.com  v'+this.version+'</div>';s+='</div>';document.write(s);el=document.getElementById('canvasId');el.style.border="1px solid black";ratio=2;el.width=w*ratio;el.height=(h-canvasTop)*ratio;el.style.width=w+"px";el.style.height=(h-canvasTop)+"px";g=el.getContext("2d");g.setTransform(ratio,0,0,ratio,0,0);this.midX=200;this.midY=200;this.scale=0.044;this.radius=110;this.frame=0;this.clrs=["#8888ff","#ffff00","#ff9900","#660066","#00ff00","#99ff00","#0099ff","#00ff99","#9900ff","#ff0099","#006666","#666600","#990000","#009999","#999900","#003399","#ff00ff","#993333","#330099"];this.ptss=[[new Point(120,-90),new Point(10,-50),new Point(90,0)],[new Point(120,-60),new Point(100,-100),new Point(-20,-40),new Point(0,0)],[new Point(0,0),new Point(130,0),new Point(130,-30),new Point(30,-30),new Point(30,-90),new Point(0,-90)],[new Point(60,-40),new Point(120,-40),new Point(140,-90),new Point(90,-130),new Point(40,-90)]];this.ptsNo=0;this.pts=this.ptss[this.ptsNo];this.sttPts=[];this.ctrX=30;this.ctrY=40;this.linesQ=false;toggleLines();this.typ='vert';setType();el.addEventListener("touchmove",ontouchmove,false);el.addEventListener("mousemove",onmouseMove,false);g.drawGrid();update();}
function ontouchstart(evt){var touch=evt.targetTouches[0];evt.clientX=touch.clientX;evt.clientY=touch.clientY;evt.touchQ=true;onmouseDown(evt)}
function ontouchmove(evt){var touch=evt.targetTouches[0];evt.clientX=touch.clientX;evt.clientY=touch.clientY;evt.touchQ=true;onmouseMove(evt);evt.preventDefault();}
function ontouchend(evt){el.addEventListener('touchstart',ontouchstart,false);window.removeEventListener("touchend",ontouchend,false);window.removeEventListener("touchmove",ontouchmove,false);}
function onmouseDown(evt){var bRect=el.getBoundingClientRect();var mouseX=(evt.clientX-bRect.left)*(el.width/ratio/bRect.width);var mouseY=(evt.clientY-bRect.top)*(el.height/ratio/bRect.height);if(evt.preventDefault){evt.preventDefault();}
else if(evt.returnValue){evt.returnValue=false;}
return false;}
function onmouseMove(evt){var bRect=el.getBoundingClientRect();var mouseX=(evt.clientX-bRect.left)*(el.width/ratio/bRect.width);var mouseY=(evt.clientY-bRect.top)*(el.height/ratio/bRect.height);showReflect(mouseX,mouseY);}
function setType(){var buttons=document.getElementsByName('typ');for(var i=0;i<buttons.length;i++){var button=buttons[i];if(button.value==this.typ){button.checked=true;}}}
function getType(){var buttons=document.getElementsByName('typ');for(var i=0;i<buttons.length;i++){var button=buttons[i];if(button.checked){typeStr=button.value;}}
return typeStr;}
function doType(){this.typ=getType();update();}
function toggleLines(){this.linesQ=!this.linesQ;toggleBtn("linesBtn",this.linesQ);update();}
function toggleBtn(btn,onq){if(onq){document.getElementById(btn).classList.add("hi");document.getElementById(btn).classList.remove("lo");}else{document.getElementById(btn).classList.add("lo");document.getElementById(btn).classList.remove("hi");}}
function showReflect(x,y){g.clearRect(0,0,el.width,el.height);g.drawGrid();drawShape();g.strokeStyle='grey';g.lineWidth=2;g.beginPath();switch(this.typ){case 'horiz':g.moveTo(0,y);g.lineTo(w,y);g.stroke();drawShape({typ:'x',val:y});break;case 'diag':var offset=x+y-400;g.moveTo(w,offset);g.lineTo(offset,this.canvasH);g.stroke();drawShape({typ:'diag',val:x+y});break;case 'vert':g.moveTo(x,0);g.lineTo(x,this.canvasH);g.stroke();drawShape({typ:'y',val:x});break;default:}}
function nextShape(){this.ptsNo=(++this.ptsNo)%ptss.length;this.pts=ptss[this.ptsNo];g.fillStyle='#def';g.fillRect(0,0,el.width,el.height);g.drawGrid();update();}
function updateFlds(){document.getElementById('ang').innerHTML=this.ang.toString()+'&deg;';document.getElementById('dist').innerHTML=this.dist.toString();document.getElementById('ctrX').innerHTML=this.ctrX.toString();document.getElementById('ctrY').innerHTML=(-this.ctrY).toString();}
function update(){showReflect(200,200);}
function sttAnim(){this.sttPts=[];for(var i=0,len=pts.length;i<len;i++){this.sttPts.push(new Point(pts[i].x,pts[i].y));}
animate();}
function animate(){this.frame++;doFrameMove(this.frame);if(this.playQ)
requestAnimationFrame(animate);}
function doFrameMove(frame){g.clearRect(0,0,el.width,el.height);g.drawGrid();if(this.polarQ){var dx=Math.cos(this.ang/180.*Math.PI)*this.dist;var dy=-Math.sin(this.ang/180.*Math.PI)*this.dist;}else{dx=this.ctrX;dy=this.ctrY;}
if(frame>=0&&frame<200){drawShape(frame);var n=(pts.length/200)*frame;drawMoves(n,dx,dy);}
if(this.polarQ){var ddx=dx/100.;var ddy=dy/100.;}else{ddx=this.ctrX/100;ddy=this.ctrY/100;}
var moveFrames=100;if(frame>=200&&frame<(200+moveFrames)){drawMoves(pts.length,dx,dy);moveShape(ddx,ddy);drawShape(frame);}
if(frame>=(200+moveFrames)&&frame<(300+moveFrames)){drawMoves(pts.length,dx,dy);drawShape(frame);}
if(frame>=(300+moveFrames)){drawShape(frame);togglePlay();this.frame=0;}}
function drawShape(reflect){reflectQ=typeof reflect!=='undefined';if(reflectQ){alpha=0.15;g.strokeStyle='steelblue';}else{alpha=0.3;g.strokeStyle='blue';}
g.fillStyle='rgba(255,0,255,0.2)';g.fillStyle=convertHexClr(this.clrs[this.ptsNo],alpha);g.lineWidth=1;g.beginPath();for(var i=0,len=pts.length;i<len;i++){var pt=new Point();pt.x=pts[i].x;pt.y=pts[i].y;if(reflectQ){switch(reflect.typ){case 'x':pt.y=(reflect.val-200)*2-pt.y;break;case 'y':pt.x=(reflect.val-200)*2-pt.x;break;case 'diag':var tx=pt.x;var ty=pt.y;pt.x=(reflect.val-400)-ty;pt.y=(reflect.val-400)-tx;break;default:}}
if(i==0){g.moveTo(this.midX+pt.x,this.midY+pt.y);}else{g.lineTo(this.midX+pt.x,this.midY+pt.y);}}
g.closePath();g.stroke();g.fill();if(this.linesQ){if(reflectQ){for(i=0,len=pts.length;i<len;i++){var pt1=new Point();pt1.x=pts[i].x;pt1.y=pts[i].y;var pt2=new Point();g.strokeStyle='orange';g.fillStyle='orange';g.beginPath();g.arc(this.midX+pt1.x,this.midY+pt1.y,4,0,2*Math.PI);g.fill();switch(reflect.typ){case 'x':pt2.x=pt1.x;pt2.y=(reflect.val-200)*2-pt1.y;break;case 'y':pt2.x=(reflect.val-200)*2-pt1.x;pt2.y=pt1.y;break;case 'diag':pt2.x=(reflect.val-400)-pt1.y;pt2.y=(reflect.val-400)-pt1.x;break;default:}
var ptm=new Point();ptm.x=(pt1.x+pt2.x)/2;ptm.y=(pt1.y+pt2.y)/2;g.strokeStyle='orange';g.beginPath();g.moveTo(this.midX+pt1.x,this.midY+pt1.y);g.lineTo(this.midX+ptm.x,this.midY+ptm.y);g.stroke();g.strokeStyle='#ffcc44';g.beginPath();g.moveTo(this.midX+ptm.x,this.midY+ptm.y);g.lineTo(this.midX+pt2.x,this.midY+pt2.y);g.stroke();g.strokeStyle='#ffcc44';g.fillStyle='#ffcc44';g.beginPath();g.arc(this.midX+pt2.x,this.midY+pt2.y,4,0,2*Math.PI);g.fill();}}}}
function moveShape(dx,dy){for(var i=0,len=pts.length;i<len;i++){var pt=pts[i];pt.x+=dx;pt.y+=dy;}}
function drawMoves(n,dx,dy){g.lineWidth=1;for(var i=0;i<n;i++){var pt=this.sttPts[i];g.strokeStyle='orange';g.fillStyle='orange';g.beginPath();g.arc(this.midX+pt.x,this.midY+pt.y,4,0,2*Math.PI);g.stroke();g.strokeStyle='orange';g.font='bold 16px Arial';g.textAlign='center';g.beginPath();g.moveTo(this.midX+pt.x,this.midY+pt.y);if(this.polarQ){g.lineTo(this.midX+pt.x+dx,this.midY+pt.y+dy);g.fillText(this.dist.toString(),this.midX+pt.x+dx/2,this.midY+pt.y+dy/2-5);}else{g.lineTo(this.midX+pt.x+dx,this.midY+pt.y);g.fillText(dx.toString(),this.midX+pt.x+dx/2,this.midY+pt.y-1);g.lineTo(this.midX+pt.x+dx,this.midY+pt.y+dy);g.textAlign='left';g.fillText((-dy).toString(),this.midX+pt.x+dx+1,this.midY+pt.y+dy/2+5);}
g.stroke();g.strokeStyle='orange';g.fillStyle='orange';g.beginPath();g.arc(this.midX+pt.x+dx,this.midY+pt.y+dy,4,0,2*Math.PI);g.fill();}}
function Point(x,y){this.x=x;this.y=y;}
Point.prototype.set=function(x,y){this.x=x;this.y=y;};Point.prototype.rotate=function(angle,midX,midY){midX=typeof midX!=='undefined'?midX:0;midY=typeof midY!=='undefined'?midY:0;var cosa=Math.cos(angle);var sina=Math.sin(angle);if(midX==0&&midY==0){var xPos=this.x*cosa+this.y*sina;var yPos=-this.x*sina+this.y*cosa;}else{xPos=midX+(this.x-midX)*cosa+(this.y-midY)*sina;yPos=midY-(this.x-midX)*sina+(this.y-midY)*cosa;}
this.x=xPos;this.y=yPos;};function togglePlay(){if(this.playQ){this.playQ=false;document.getElementById("playBtn").innerHTML="&nbsp;&#9654;";}else{this.playQ=true;document.getElementById("playBtn").innerHTML="&#10074;&#10074;";sttAnim();}}
CanvasRenderingContext2D.prototype.drawLineArrows=function(pt1,pt2){g.moveTo(pt1.x,pt1.y);g.lineTo(pt2.x,pt2.y);var ang=Math.atan2(pt2.x-pt1.x,pt2.y-pt1.y);g.drawArrow(pt1.x,pt1.y,20,2,30,15,ang+Math.PI/2);g.drawArrow(pt2.x,pt2.y,20,2,30,15,ang-Math.PI/2);};CanvasRenderingContext2D.prototype.drawArrow=function(x0,y0,totLen,shaftHt,headLen,headHt,angle,sweep,invertQ){var g=this;var pts=[[0,0],[-headLen,-headHt/2],[-headLen+sweep,-shaftHt/2],[-totLen,-shaftHt/2],[-totLen,shaftHt/2],[-headLen+sweep,shaftHt/2],[-headLen,headHt/2],[0,0]];if(invertQ){pts.push([0,-headHt/2],[-totLen,-headHt/2],[-totLen,headHt/2],[0,headHt/2]);}
for(var i=0;i<pts.length;i++){var cosa=Math.cos(-angle);var sina=Math.sin(-angle);var xPos=pts[i][0]*cosa+pts[i][1]*sina;var yPos=pts[i][0]*sina-pts[i][1]*cosa;if(i==0){g.moveTo(x0+xPos,y0+yPos);}else{g.lineTo(x0+xPos,y0+yPos);}}};CanvasRenderingContext2D.prototype.drawGrid=function(){g=this;var wd=w;var ht=h;g.strokeStyle="lightblue";for(var i=0;i<=wd;i+=10){if(i%100){g.lineWidth=1;}else{g.lineWidth=2;}
g.beginPath();g.moveTo(i,0);g.lineTo(i,ht);g.stroke();}
g.strokeStyle="lightblue";for(i=0;i<=ht;i+=10){if(i%100){g.lineWidth=1;}else{g.lineWidth=2;}
g.beginPath();g.moveTo(0,i);g.lineTo(wd,i);g.stroke();}};function convertHexClr(hex,opacity){hex=hex.replace('#','');var r=parseInt(hex.substring(0,2),16);var g=parseInt(hex.substring(2,4),16);var b=parseInt(hex.substring(4,6),16);return 'rgba('+r+','+g+','+b+','+opacity+')';}