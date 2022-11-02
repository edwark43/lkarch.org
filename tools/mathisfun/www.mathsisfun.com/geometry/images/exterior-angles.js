function exterioranglesMain(){w=250;h=250;s="";s+='<div style="position:relative; width:'+w+'px; height:'+h+'px; border: 1px solid blue; border-radius: 10px;  margin:auto; display:block;">';s+='<canvas id="canvasId" width="'+w+'" height="'+h+'" style="z-index:1;"></canvas>';s+='<input id="playBtn" onclick="togglePlay()" type="button" style="z-index:2; position:absolute; left:150px; top:210px;" value="Pause"  class="togglebtn" />';s+='<div id="copyrt" style="font: 7pt arial; font-weight: bold; color: #6600cc; position:absolute; left:5px; bottom:3px;">&copy; 2015 MathsIsFun.com  v 0.9</div>';s+='</div>';document.write(s);el=document.getElementById('canvasId');ratio=2;el.width=w*ratio;el.height=h*ratio;el.style.width=w+"px";el.style.height=h+"px";g=el.getContext("2d");g.setTransform(ratio,0,0,ratio,0,0);midX=130;midY=120;radius=75;playQ=true;doAnim();togglePlay();}
function togglePlay(){if(playQ){playQ=false;document.getElementById("playBtn").value="Play";}else{if(radius<=1){radius=80;}
playQ=true;document.getElementById("playBtn").value="Pause";}
doAnim();}
function doAnim(){if(!playQ)return;radius-=0.4;g.clearRect(0,0,el.width,el.height);var radius1=Math.min(75,radius);var pts=getPolygonPts(midX,midY,radius1,5,0);g.fillStyle="#0000ff";g.strokeStyle="#000000";g.lineWidth=1;for(i=0;i<pts.length;i++){var pt=pts[i];g.drawAngle(pt.x,pt.y,60,Math.PI*((4-i*2)/5),Math.PI*(2/5));}
g.beginPath();g.lineWidth=3;g.strokeStyle="#ffcc00";g.drawPoly(pts);g.stroke();if(radius>0){requestAnimationFrame(doAnim);}else{playQ=true;togglePlay();}}
CanvasRenderingContext2D.prototype.drawAngle=function(x,y,len,sttAngle,angle){var arcAt=0.7;g.beginPath();wasstrokeStyle=g.strokeStyle;g.strokeStyle=g.fillStyle;g.arc(x,y,len*arcAt,sttAngle,sttAngle+angle);g.stroke();g.strokeStyle=wasstrokeStyle;var leg1Pt=toCartesian(len,sttAngle);g.beginPath();g.moveTo(x,y);g.lineTo(x+leg1Pt[0],y+leg1Pt[1]);g.stroke();g.beginPath();g.drawArrow(x+leg1Pt[0]*arcAt,y+leg1Pt[1]*arcAt,15,2,20,10,-sttAngle+Math.PI*0.44);g.fill();var leg2Pt=toCartesian(len,sttAngle+angle);g.beginPath();g.moveTo(x,y);g.lineTo(x+leg2Pt[0],y+leg2Pt[1]);g.stroke();g.beginPath();g.drawArrow(x+leg2Pt[0]*arcAt,y+leg2Pt[1]*arcAt,15,2,20,10,-(sttAngle+angle)+Math.PI*1.57);g.fill();};function toCartesian(len,rad){var x=Math.cos(rad)*len;var y=Math.sin(rad)*len;return[x,y];}
CanvasRenderingContext2D.prototype.drawArrow=function(x0,y0,totLen,shaftHt,headLen,headHt,angle,sweep,invertQ){var g=this;var pts=[[0,0],[-headLen,-headHt/2],[-headLen+sweep,-shaftHt/2],[-totLen,-shaftHt/2],[-totLen,shaftHt/2],[-headLen+sweep,shaftHt/2],[-headLen,headHt/2],[0,0]];if(invertQ){pts.push([0,-headHt/2],[-totLen,-headHt/2],[-totLen,headHt/2],[0,headHt/2]);}
for(var i=0;i<pts.length;i++){var cosa=Math.cos(-angle);var sina=Math.sin(-angle);var xPos=pts[i][0]*cosa+pts[i][1]*sina;var yPos=pts[i][0]*sina-pts[i][1]*cosa;if(i==0){g.moveTo(x0+xPos,y0+yPos);}else{g.lineTo(x0+xPos,y0+yPos);}}};CanvasRenderingContext2D.prototype.drawPoly=function(pts){var g=this;g.moveTo(pts[0].x,pts[0].y);for(var i=1;i<pts.length;i++){g.lineTo(pts[i].x,pts[i].y);}
g.lineTo(pts[0].x,pts[0].y);};function getPolygonPts(centerX,centerY,radius,sides,rotation){var points=[];var dAngle=2*Math.PI/sides;for(var i=0;i<sides;i++){var angle=i*dAngle+rotation;var xx=centerX+Math.sin(angle)*radius;var yy=centerY+Math.cos(angle)*radius;points.push(new Pt(xx,yy));}
return(points);}
function Pt(x,y){this.x=x;this.y=y;}