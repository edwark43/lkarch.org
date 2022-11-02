function symmetryrotateMain(mode,rel){this.version='0.81';this.mode=typeof mode!=='undefined'?mode:'3';this.rel=typeof rel!=='undefined'?rel:'../';w=220;h=220;var s="";s+='<div style="position:relative; width:'+w+'px; min-height:'+h+'px; border: none; border-radius: 20px; background-color: #fff; margin:auto; display:block;">';s+='<canvas id="canvasId" style="position: absolute; width:'+w+'px; height:'+h+'px; left: 0; top:; border: none;"></canvas>';s+='<div id="count" style="position:absolute; right:2px; top:2px; width: 40px; font: bold 48px Arial; text-align: center; color: red;"></div>';this.rots=[360];if(this.mode=='2'){s+='<img id="shape0" src="'+this.rel+'geometry/images/symmetry-rot2.svg" style="z-index:1; position: absolute; left:35px; top:35px; opacity:0.5;" />';s+='<img id="shape1" src="'+this.rel+'geometry/images/symmetry-rot2.svg" style="z-index:1; position: absolute; left:35px; top:35px;" />';this.rots=[180,360];}else{s+='<img id="shape0" src="'+this.rel+'geometry/images/symmetry-rot3.svg" style="z-index:1; position: absolute; left:35px; top:35px; opacity:0.5;" />';s+='<img id="shape1" src="'+this.rel+'geometry/images/symmetry-rot3.svg" style="z-index:1; position: absolute; left:35px; top:35px;" />';this.rots=[120,240,360];}
s+='<button id="playBtn" onclick="togglePlay()" style="position:absolute; right:5px; bottom:5px; width:36px; z-index:2; font: 20px/24px Arial;"  class="circbtn" />&nbsp;&#9654;</button>';s+='<div id="copyrt" style="font: 9px Arial; font-weight: bold; color: skyblue; position:absolute; left:8px; bottom:3px;">&copy; 2018 MathsIsFun.com  v'+this.version+'</div>';s+='</div>';document.write(s);el=document.getElementById('canvasId');ratio=2;el.width=w*ratio;el.height=h*ratio;el.style.width=w+"px";el.style.height=h+"px";g=el.getContext("2d");g.setTransform(ratio,0,0,ratio,0,0);this.midX=w/2;this.midY=w/2;this.scale=0.044;this.radius=90;this.deg=0;this.markPts=[new Point(0,-this.radius),new Point(0,-this.radius+20)];this.pts=[new Point(this.midX,this.midY-this.radius),new Point(this.midX,this.midY-this.radius+20)];this.rotNo=0;sttShape(this.markPts);this.playQ=false;togglePlay();}
function animate(){this.deg++;drawAnim();var div=document.getElementById('shape1');div.style.transform='rotate('+(-1*(deg))+'deg)';if(this.deg<this.rots[this.rotNo]){if(this.playQ)
requestAnimationFrame(animate);}else{if(this.rotNo<rots.length){this.rotNo++;document.getElementById('count').innerHTML=this.rotNo.toString();setTimeout(animate,500);}else{togglePlay();this.deg=0;this.rotNo=0;}}}
function drawAnim(){g.clearRect(0,0,el.width,el.height);g.fillStyle='#bbb';g.beginPath();g.arc(this.midX,this.midY,4,0,2*Math.PI);g.fill();g.strokeStyle='blue';g.beginPath();g.arc(this.midX,this.midY,this.radius,0,2*Math.PI);g.stroke();g.strokeStyle='blue';g.beginPath();g.moveTo(this.midX,this.midY-this.radius);g.moveTo(this.midX,this.midY-this.radius+20);g.stroke();rotShape(Math.PI/180.);drawShape();}
function drawShape(){g.strokeStyle='blue';g.fillStyle='rgba(255,255,0,0.07)';g.lineWidth=1;g.beginPath();for(var i=0,len=pts.length;i<len;i++){var pt=pts[i];if(i==0){g.moveTo(this.midX+pt.x,this.midY+pt.y);}else{g.lineTo(this.midX+pt.x,this.midY+pt.y);}}
g.closePath();g.stroke();g.fill();}
function sttShape(sttPts){this.pts=[];for(var i=0,len=sttPts.length;i<len;i++){var pt=new Point();pt.x=sttPts[i].x;pt.y=sttPts[i].y;this.pts.push(pt);}}
function rotShape(angle){for(var i=0,len=pts.length;i<len;i++){var pt=pts[i];pt.rotate(angle);}}
function Point(x,y){this.x=x;this.y=y;}
Point.prototype.set=function(x,y){this.x=x;this.y=y;};Point.prototype.rotate=function(angle){var cosa=Math.cos(angle);var sina=Math.sin(angle);var xPos=this.x*cosa+this.y*sina;var yPos=-this.x*sina+this.y*cosa;this.x=xPos;this.y=yPos;};function togglePlay(){if(this.playQ){this.playQ=false;document.getElementById("playBtn").innerHTML="&nbsp;&#9654;";}else{this.playQ=true;document.getElementById("playBtn").innerHTML="&#10074;&#10074;";document.getElementById('count').innerHTML='';animate();}}
CanvasRenderingContext2D.prototype.drawLineArrows=function(pt1,pt2){g.moveTo(pt1.x,pt1.y);g.lineTo(pt2.x,pt2.y);var ang=Math.atan2(pt2.x-pt1.x,pt2.y-pt1.y);g.drawArrow(pt1.x,pt1.y,20,2,30,15,ang+Math.PI/2);g.drawArrow(pt2.x,pt2.y,20,2,30,15,ang-Math.PI/2);};CanvasRenderingContext2D.prototype.drawArrow=function(x0,y0,totLen,shaftHt,headLen,headHt,angle,sweep,invertQ){var g=this;var pts=[[0,0],[-headLen,-headHt/2],[-headLen+sweep,-shaftHt/2],[-totLen,-shaftHt/2],[-totLen,shaftHt/2],[-headLen+sweep,shaftHt/2],[-headLen,headHt/2],[0,0]];if(invertQ){pts.push([0,-headHt/2],[-totLen,-headHt/2],[-totLen,headHt/2],[0,headHt/2]);}
for(var i=0;i<pts.length;i++){var cosa=Math.cos(-angle);var sina=Math.sin(-angle);var xPos=pts[i][0]*cosa+pts[i][1]*sina;var yPos=pts[i][0]*sina-pts[i][1]*cosa;if(i==0){g.moveTo(x0+xPos,y0+yPos);}else{g.lineTo(x0+xPos,y0+yPos);}}};