var coords,el,g,ratio,my={};function clickcoordMain(){var version='0.72';var wd=430
var ht=420;my.sttX=10
my.sttY=80
my.score=0;my.graphLt=0;my.graphTp=0;my.graphWd=wd-my.sttX
my.graphHt=310;coords=new Coords(my.graphLt,my.graphTp,my.graphWd,my.graphHt,-5,-3,5,3,true);my.clrs=[["Blue",'#0000FF'],["Red",'#FF0000'],["Green",'#00cc00'],["Violet",'#EE82EE'],["Orange",'#FFA500'],["Slate Blue",'#6A5ACD'],["Pink",'#FFC0CB'],["Coral",'#FF7F50'],["Lime",'#00FF00'],["Pale Green",'#98FB98'],["Spring Green",'#00FF7F'],["Teal",'#008080'],["Hot Pink",'#FF69B4'],["Aqua",'#00ffff'],["Gold",'#ffd700'],["Khaki",'#F0E68C'],["Thistle",'#D8BFD8'],["Med Purple",'#aa00aa'],["Light Blue",'#ADD8E6'],["Sky Blue",'#87CEEB'],["Wheat",'#F5DEB3'],["Tan",'#D2B48C'],["Antique White",'#FAEBD7'],["Silver",'#C0C0C0']];loadGames();my.imgHome=(document.domain=='localhost')?'/mathsisfun/images/':'/images/'
var s='';s+='<style>'
s+='.btn { display: inline-block; position: relative; text-align: center; margin: 2px; text-decoration: none; font: bold 14px/25px Arial, sans-serif; color: #268; border: 1px solid #88aaff; border-radius: 10px;cursor: pointer; background: linear-gradient(to top right, rgba(170,190,255,1) 0%, rgba(255,255,255,1) 100%); outline-style:none;}'
s+='.btn:hover { background: linear-gradient(to top, rgba(255,255,0,1) 0%, rgba(255,255,255,1) 100%); }'
s+='.yy { border: solid 2px #eeeeaa; background: linear-gradient(to top, rgba(255,220,130,1) 0%, rgba(255,255,255,1) 100%);  }'
s+='.hi { border: solid 2px #eeeeaa; background: linear-gradient(to top, rgba(130,220,255,1) 0%, rgba(255,255,255,1) 100%); }'
s+='.lo { border: solid 1px #888888; background: linear-gradient(to top, rgba(170,170,170,1) 0%, rgba(205,205,205,1) 100%);  }'
s+='</style>'
s+='<div id="main" style="position:relative; text-align: center; border-radius: 10px; width:'+wd+'px; height:'+ht+'px; margin:auto; display:block; background-color: #def; padding:10px; ">';s+=getArrowBox();s+='<canvas id="gfx0" width="'+my.graphWd+'" height="'+my.graphTp+'" style="position:absolute; left:'+my.sttX+'px; top:'+my.sttY+'px; z-index:1; background-color: #ffffff; border: 1px solid black;"></canvas>';s+='<div id="result" style="position: absolute; font: bold 24px Verdana; color:blue; left:0px; top:170px;  z-index:10; text-align:left; ">Result</div>';s+='<div id="instr" style="position: absolute; left:'+(wd/2-60)+'px; top:5px;  height: 50px; font: bold 18px Verdana; color:darkblue; width:110px; padding: 10px; border-radius:5px;">0</div>';s+='<div style="position: absolute; right:10px; top:5px; width:100px; height: 60px; background-color:lightyellow; padding:5px; border-radius:5px; ">';s+='<div style="font: 14px Verdana; ">Score:</div>';s+='<div id="score" style="font: 30px Verdana; ">0</div>';s+='</div>';s+='<div id="tools" style="position:absolute; left:'+my.sttX+'px; bottom:2px; font: 14px Verdana; ">';s+=getDropdownHTML(my.games,'rangeChg','rangeType');s+="  ";s+='<button class="btn" style="font: 15px Verdana; color:darkblue;" onclick="newGame()">Next</button>';s+='</div>';s+='<img id="arrow" src="'+my.imgHome+'style/arrow-fletch.gif" style="position:absolute; left:0px; top:0px; z-index:1; pointer-events:none;">';s+='<div style="font: 11px arial; color: blue; position:absolute; right:10px; bottom:3px;">&copy; 2020 MathsIsFun.com  v'+version+'</div>';s+='</div>';document.write(s);my.resultQ=false;makeCursor('arrow','gold');el=document.getElementById('gfx0');ratio=3;el.width=my.graphWd*ratio;el.height=my.graphHt*ratio;el.style.width=my.graphWd+"px";el.style.height=my.graphHt+"px";g=el.getContext("2d");g.setTransform(ratio,0,0,ratio,0,0);g.translate(0.5,0.5);el.addEventListener("mousemove",onmouseMove,false);el.addEventListener("mousedown",onmouseDown,false);el.addEventListener('touchstart',ontouchstart,false);el.addEventListener('touchmove',ontouchmove,false);my.game=my.games[0];newGame();}
function ontouchstart(evt){var touch=evt.targetTouches[0];evt.clientX=touch.clientX;evt.clientY=touch.clientY;evt.touchQ=true;onmouseDown(evt)}
function ontouchmove(evt){var touch=evt.targetTouches[0];evt.clientX=touch.clientX;evt.clientY=touch.clientY;evt.touchQ=true;onmouseMove(evt);evt.preventDefault();}
function ontouchend(evt){el.addEventListener('touchstart',ontouchstart,false);window.removeEventListener("touchend",ontouchend,false);}
function onmouseDown(evt){var bRect=el.getBoundingClientRect();var mouseX=(evt.clientX-bRect.left);var mouseY=(evt.clientY-bRect.top);var xVal=coords.toXVal(mouseX);var yVal=coords.toYVal(mouseY);doResult(xVal,yVal);if(evt.preventDefault){evt.preventDefault();}
else if(evt.returnValue){evt.returnValue=false;}
return false;}
function onmouseMove(evt){var bRect=el.getBoundingClientRect();var mouseX=(evt.clientX-bRect.left);var mouseY=(evt.clientY-bRect.top);}
function restart(){my.score=0;newGame();}
function doGraph(){g.clearRect(0,0,el.width,el.height);var graph=new Graph(g,coords);graph.drawGraph();}
function doResult(x,y){if(!my.resultQ){my.resultQ=true;var userx=Math.round(x);var usery=Math.round(y);var div=document.getElementById('arrow');div.style.left=(coords.toXPix(userx)+my.sttX)+'px';div.style.top=(coords.toYPix(usery)+my.sttY)+'px';div.style.visibility='visible';g.drawTarget(coords.toXPix(my.tgtx),coords.toYPix(my.tgty));var d=dist(my.tgtx-userx,my.tgty-usery);var score=0;if(d==0){score=5;}else{if(d<=my.gap){score=3;}else{if(d<=my.gap*2)score=1;}}
div=document.getElementById('result');div.innerHTML='+'+score;div.style.left=(coords.toXPix(userx)+my.sttX+20)+'px';div.style.top=(coords.toYPix(usery)+my.sttY-18)+'px';div.style.visibility='visible';my.score+=score;var div=document.getElementById('score');div.innerHTML=my.score;setTimeout(newGame,2000);}else{}}
function dist(dx,dy){return Math.sqrt(dx*dx+dy*dy);}
function rangeChg(){var div=document.getElementById('rangeType');var rangeType=div.options[div.selectedIndex].text;console.log("rangeChg",rangeType);var n=0;for(var i=0;i<my.games.length;i++){console.log("rangeChg",rangeType,my.games[i][0][0]);if(rangeType==my.games[i][0][0]){console.log("3425345");n=i;break;}}
my.game=my.games[n];console.log("rangeChg",n,my.games[n]);newGame();}
function newGame(){my.resultQ=false;document.getElementById('result').innerHTML='';var div=document.getElementById('arrow');div.style.visibility='hidden';var xMin=my.game[2];var yMin=my.game[3];var xMax=my.game[4];var yMax=my.game[5];coords=new Coords(my.graphLt,my.graphTp,my.graphWd,my.graphHt,xMin,yMin,xMax,yMax,true);doGraph();my.gap=Math.max((xMax-xMin)*0.035,1);my.tgtx=getRandomInt(xMin+my.gap,xMax-my.gap);my.tgty=getRandomInt(yMin+my.gap,yMax-my.gap);var s='Target:<br>('+my.tgtx+','+my.tgty+')';var div=document.getElementById('instr');div.innerHTML=s;div.style.background='lightblue';setTimeout(afterHilite,1000);}
function afterHilite(){var div=document.getElementById('instr');div.style.background='#cdf';}
function loadGames(){my.games=[];my.games.push([["Beginner",""],"I",-1,0,9,6,false]);my.games.push([["Easy",""],"I",-1,0,31,18,0.8,false]);my.games.push([["Medium",""],"I",-1,0,51,30,false]);my.games.push([["Quadrant II",""],"II",-31,0,1,20,false]);my.games.push([["Quadrant III",""],"III",-31,-20,1,1,false]);my.games.push([["Quadrant IV",""],"IV",-1,-20,31,1,false]);my.games.push([["All Four Quadrants",""],"All4",-32,-20,32,20,false]);}
function makeCursor(typ,clr){var div=document.createElement('canvas');var ctx=div.getContext('2d');switch(typ){case 'arrow':var wd=24;div.width=wd;div.height=wd;ctx.strokeStyle=clr;ctx.lineWidth=5;ctx.lineCap='round';ctx.moveTo(2,wd-6);ctx.lineTo(2,2);ctx.lineTo(wd-6,2);ctx.moveTo(2,2);ctx.lineTo(wd,wd);ctx.stroke();break;case 'crosshair':var wd=30;div.width=wd;div.height=wd;ctx.strokeStyle=clr;ctx.lineWidth=1;ctx.lineCap='round';ctx.moveTo(0,wd/2);ctx.lineTo(wd,wd/2);ctx.stroke();break;default:}
document.getElementById('gfx0').style.cursor='url('+div.toDataURL()+'), auto';}
function getDropdownHTML(opts,funcName,id){var s='';s+='<select id="'+id+'" style="font: 13px Arial; color: #6600cc; background: rgba(200,220,256,0.7); padding: 1px; border-radius: 6px;" onchange="'+funcName+'()" autocomplete="off">';for(var i=0;i<opts.length;i++){var opt=opts[i];var idStr=id+i;var chkStr=i==0?'selected':'';s+='<option id="'+idStr+'" value="'+opt[0][0]+'" style="height:18px;" '+chkStr+' >'+opt[0][0]+'</option>';}
s+='</select>';return s;}
function getArrowBox(){var s='';s+='<style type="text/css">';s+='.arrowBox {position: relative; border: 1px solid black; background: #def; }';s+='.arrowBox:after, .arrowBox:before {content: " "; pointer-events: none; position: absolute; left: 50%; bottom: 100%; width: 0; height: 0; border: solid transparent; }';s+='.arrowBox:after {border-color: rgba(221, 238, 255, 0); border-bottom-color: #def; border-width: 30px; margin-left: -30px; }';s+='.arrowBox:before {border-color: rgba(0, 0, 0, 0); border-bottom-color: black; border-width: 31px; margin-left: -31px; }';s+='</style>';return s;}
function getRandomInt(min,max){return Math.floor(Math.random()*(max-min+1)+min);}
function getQueryVariable(variable){var query=window.location.search.substring(1);var vars=query.split("&");for(var i=0;i<vars.length;i++){var pair=vars[i].split("=");if(pair[0]==variable){return pair[1];}}
return false;}
function getRandomPts(width,height,ptCount){var pts=[];for(var i=0;i<ptCount;i++){var ptX=Math.random()*width;var ptY=Math.random()*height;var ptClr=my.cls[getRandomInt(0,my.cls.length-1)][1];pts.push([ptX,ptY,ptClr]);}
return pts;}
function getClrAt(pts,width,height){var sumClrs=[];var sumFact=0;sumClrs=[0,0,0];for(var i=0;i<pts.length;i++){var d=dist(pts[i][0]-width,pts[i][1]-height);var fact=1/d;var rgb=hex2rgb(pts[i][2]);sumClrs[0]+=rgb[0]*fact;sumClrs[1]+=rgb[1]*fact;sumClrs[2]+=rgb[2]*fact;sumFact+=fact;}
var clr=rgb2hex([sumClrs[0]/sumFact,sumClrs[1]/sumFact,sumClrs[2]/sumFact]);return(clr);}
function hex2rgb(hex){hex=hex.replace('#','');var rr=parseInt(hex.substring(0,2),16);var gg=parseInt(hex.substring(2,4),16);var bb=parseInt(hex.substring(4,6),16);return[rr,gg,bb];}
function rgb2hex(clrs){var hex=[];for(var i=0;i<3;i++){hex.push(((clrs[i])<<0).toString(16));if(hex[i].length<2){hex[i]="0"+hex[i];}}
return "#"+hex[0]+hex[1]+hex[2];}
CanvasRenderingContext2D.prototype.drawTarget=function(x,y){var g=this;g.lineWidth=3;g.strokeStyle='red';g.beginPath();g.arc(x,y,2,0,2*Math.PI);g.stroke();g.beginPath();g.arc(x,y,8,0,2*Math.PI);g.stroke();g.beginPath();g.arc(x,y,14,0,2*Math.PI);g.stroke();}
CanvasRenderingContext2D.prototype.drawArrow=function(x0,y0,totLen,shaftHt,headLen,headHt,angle,sweep,invertQ){var g=this;var pts=[[0,0],[-headLen,-headHt/2],[-headLen+sweep,-shaftHt/2],[-totLen,-shaftHt/2],[-totLen,shaftHt/2],[-headLen+sweep,shaftHt/2],[-headLen,headHt/2],[0,0]];if(invertQ){pts.push([0,-headHt/2],[-totLen,-headHt/2],[-totLen,headHt/2],[0,headHt/2]);}
for(var i=0;i<pts.length;i++){var cosa=Math.cos(-angle);var sina=Math.sin(-angle);var xPos=pts[i][0]*cosa+pts[i][1]*sina;var yPos=pts[i][0]*sina-pts[i][1]*cosa;if(i==0){g.moveTo(x0+xPos,y0+yPos);}else{g.lineTo(x0+xPos,y0+yPos);}}};function Coords(left,top,width,height,xStt,yStt,xEnd,yEnd,uniScaleQ){this.left=left;this.top=top;this.width=width;this.height=height;this.xStt=xStt;this.yStt=yStt;this.xEnd=xEnd;this.yEnd=yEnd;this.uniScaleQ=uniScaleQ;this.xLogQ=false;this.yLogQ=false;this.calcScale();}
Coords.prototype.calcScale=function(){if(this.xLogQ){if(this.xStt<=0)
this.xStt=1;if(this.xEnd<=0)
this.xEnd=1;}
if(this.yLogQ){if(this.yStt<=0)
this.yStt=1;if(this.yEnd<=0)
this.yEnd=1;}
var temp;if(this.xStt>this.xEnd){temp=this.xStt;this.xStt=this.xEnd;this.xEnd=temp;}
if(this.yStt>this.yEnd){temp=this.yStt;this.yStt=this.yEnd;this.yEnd=temp;}
var xSpan=this.xEnd-this.xStt;if(xSpan<=0)
xSpan=1e-9;this.xScale=xSpan/this.width;this.xLogScale=(Math.log(this.xEnd)-Math.log(this.xStt))/this.width;var ySpan=this.yEnd-this.yStt;if(ySpan<=0)
ySpan=1e-9;this.yScale=ySpan/this.height;this.yLogScale=(Math.log(this.yEnd)-Math.log(this.yStt))/this.height;if(this.uniScaleQ&&!this.xLogQ&&!this.yLogQ){var newScale=Math.max(this.xScale,this.yScale);this.xScale=newScale;xSpan=this.xScale*this.width;var xMid=(this.xStt+this.xEnd)/2;this.xStt=xMid-xSpan/2;this.xEnd=xMid+xSpan/2;this.yScale=newScale;ySpan=this.yScale*this.height;var yMid=(this.yStt+this.yEnd)/2;this.yStt=yMid-ySpan/2;this.yEnd=yMid+ySpan/2;}};Coords.prototype.scale=function(factor,xMid,yMid){if(typeof xMid=='undefined')xMid=(this.xStt+this.xEnd)/2;this.xStt=xMid-(xMid-this.xStt)*factor;this.xEnd=xMid+(this.xEnd-xMid)*factor;if(typeof yMid=='undefined')yMid=(this.yStt+this.yEnd)/2;this.yStt=yMid-(yMid-this.yStt)*factor;this.yEnd=yMid+(this.yEnd-yMid)*factor;this.calcScale();};Coords.prototype.drag=function(xPix,yPix){this.xStt+=xPix*this.xScale;this.xEnd+=xPix*this.xScale;this.yStt+=yPix*this.yScale;this.yEnd+=yPix*this.yScale;this.calcScale();};Coords.prototype.newCenter=function(x,y){var xMid=this.xStt+x*this.xScale;var xhalfspan=(this.xEnd-this.xStt)/2;this.xStt=xMid-xhalfspan;this.xEnd=xMid+xhalfspan;var yMid=this.yEnd-y*this.yScale;var yhalfspan=(this.yEnd-this.yStt)/2;this.yStt=yMid-yhalfspan;this.yEnd=yMid+yhalfspan;this.calcScale();};Coords.prototype.fitToPts=function(pts,borderFactor){for(var i=0;i<pts.length;i++){var pt=pts[i];if(i==0){this.xStt=pt.x;this.xEnd=pt.x;this.yStt=pt.y;this.yEnd=pt.y;}else{this.xStt=Math.min(this.xStt,pt.x);this.xEnd=Math.max(this.xEnd,pt.x);this.yStt=Math.min(this.yStt,pt.y);this.yEnd=Math.max(this.yEnd,pt.y);}}
var xMid=(this.xStt+this.xEnd)/2;var xhalfspan=borderFactor*(this.xEnd-this.xStt)/2;this.xStt=xMid-xhalfspan;this.xEnd=xMid+xhalfspan;var yMid=(this.yStt+this.yEnd)/2;var yhalfspan=borderFactor*(this.yEnd-this.yStt)/2;this.yStt=yMid-yhalfspan;this.yEnd=yMid+yhalfspan;this.calcScale();};Coords.prototype.toXPix=function(val,useCornerQ){if(this.xLogQ){return this.left+(Math.log(val)-Math.log(xStt))/this.xLogScale;}else{return this.left+((val-this.xStt)/this.xScale);}};Coords.prototype.toYPix=function(val){if(this.yLogQ){return this.top+(Math.log(yEnd)-Math.log(val))/this.yLogScale;}else{return this.top+((this.yEnd-val)/this.yScale);}};Coords.prototype.toPtVal=function(pt,useCornerQ){return new Pt(this.toXVal(pt.x,useCornerQ),this.toYVal(pt.y,useCornerQ));};Coords.prototype.toXVal=function(pix,useCornerQ){if(useCornerQ){return this.xStt+(pix-this.left)*this.xScale;}else{return this.xStt+pix*this.xScale;}};Coords.prototype.toYVal=function(pix,useCornerQ){if(useCornerQ){return this.yEnd-(pix-top)*this.yScale;}else{return this.yEnd-pix*this.yScale;}};Coords.prototype.getTicks=function(stt,span,ratio){var ticks=[];var inter=this.tickInterval(span/ratio,false);var tickStt=Math.ceil(stt/inter)*inter;var i=0;do{var tick=tickStt+i*inter;tick=Number(tick.toPrecision(8));ticks.push([tick,1]);i++;}while(tick<stt+span);inter=this.tickInterval(span/ratio,true);for(i=0;i<ticks.length;i++){var t=ticks[i][0];if(Math.abs(Math.round(t/inter)-(t/inter))<0.001){ticks[i][1]=0;}}
return ticks;};Coords.prototype.tickInterval=function(span,majorQ){var pow10=Math.pow(10,Math.floor(Math.log(span)*Math.LOG10E));var mantissa=span/pow10;if(mantissa>=5){if(majorQ){return(5*pow10);}else{return(1*pow10);}}
if(mantissa>=3){if(majorQ){return(2*pow10);}else{return(0.2*pow10);}}
if(mantissa>=1.4){if(majorQ){return(0.5*pow10);}else{return(0.2*pow10);}}
if(mantissa>=0.8){if(majorQ){return(0.5*pow10);}else{return(0.1*pow10);}}
if(majorQ){return(0.2*pow10);}else{return(0.1*pow10);}};function Graph(g,coords){this.g=g;this.coords=coords;this.xLinesQ=true;this.yLinesQ=true;this.xValsQ=true;this.yValsQ=true;this.skewQ=false;}
Graph.prototype.makeSVG=function(){this.hzAxisY=coords.toYPix(0);if(this.hzAxisY<0)this.hzAxisY=0;if(this.hzAxisY>coords.height)this.hzAxisY=coords.height;this.hzNumsY=this.hzAxisY+14;if(this.hzAxisY>coords.height-10)this.hzNumsY=coords.height-3;this.vtAxisX=coords.toXPix(0);if(this.vtAxisX<0)this.vtAxisX=0;if(this.vtAxisX>coords.width)this.vtAxisX=coords.width;this.vtNumsX=this.vtAxisX-5;if(this.vtAxisX<10)this.vtNumsX=20;my.svg.moveTo(coords.toXPix(coords.xStt,false),this.hzAxisY);my.svg.lineTo(coords.toXPix(coords.xEnd,false),this.hzAxisY);my.svg.moveTo(this.vtAxisX,coords.toYPix(coords.yStt,false));my.svg.lineTo(this.vtAxisX,coords.toYPix(coords.yEnd,false));}
Graph.prototype.drawGraph=function(){this.hzAxisY=coords.toYPix(0);if(this.hzAxisY<0)this.hzAxisY=0;if(this.hzAxisY>coords.height)this.hzAxisY=coords.height;this.hzNumsY=this.hzAxisY+14;if(this.hzAxisY>coords.height-10)this.hzNumsY=coords.height-3;this.vtAxisX=coords.toXPix(0);if(this.vtAxisX<0)this.vtAxisX=0;if(this.vtAxisX>coords.width)this.vtAxisX=coords.width;this.vtNumsX=this.vtAxisX-5;this.vtNumsAlign='right';if(this.vtAxisX<30){this.vtNumsX=this.vtAxisX+4;this.vtNumsAlign='left';if(this.vtAxisX<0){this.vtNumsX=6;}}
if(coords.xLogQ){this.drawLinesLogX();}else{if(this.xLinesQ){this.drawHzLines();}}
if(coords.yLogQ){this.drawLinesLogY();}else{if(this.yLinesQ){this.drawVtLines();}}};Graph.prototype.drawVtLines=function(){var g=this.g;g.lineWidth=1;var ticks=coords.getTicks(coords.xStt,coords.xEnd-coords.xStt,my.graphWd/100);for(var i=0;i<ticks.length;i++){var tick=ticks[i];var xVal=tick[0];var tickLevel=tick[1];if(tickLevel==0){g.strokeStyle="rgba(0,0,256,0.3)";}else{g.strokeStyle="rgba(0,0,256,0.1)";}
var xPix=coords.toXPix(xVal,false);g.beginPath();g.moveTo(xPix,coords.toYPix(coords.yStt,false));g.lineTo(xPix,coords.toYPix(coords.yEnd,false));g.stroke();if(tickLevel==0&&this.xValsQ){g.fillStyle="#0000ff";g.font="bold 12px Verdana";g.textAlign="center";g.fillText(xVal.toString(),xPix,this.hzNumsY);}}
if(this.skewQ)
return;g.lineWidth=1.5;g.strokeStyle="#ff0000";g.beginPath();g.moveTo(this.vtAxisX,coords.toYPix(coords.yStt,false));g.lineTo(this.vtAxisX,coords.toYPix(coords.yEnd,false));g.stroke();g.beginPath();g.fillStyle=g.strokeStyle;g.drawArrow(this.vtAxisX,coords.toYPix(coords.yEnd),15,2,20,10,Math.PI/2,10,false);g.stroke();g.fill();};Graph.prototype.drawHzLines=function(){var g=this.g;g.lineWidth=1;var ticks=coords.getTicks(coords.yStt,coords.yEnd-coords.yStt,my.graphHt/100);for(var i=0;i<ticks.length;i++){var tick=ticks[i];var yVal=tick[0];var tickLevel=tick[1];if(tickLevel==0){g.strokeStyle="rgba(0,0,256,0.3)";}else{g.strokeStyle="rgba(0,0,256,0.1)";}
var yPix=coords.toYPix(yVal,false);g.beginPath();g.moveTo(coords.toXPix(coords.xStt,false),yPix);g.lineTo(coords.toXPix(coords.xEnd,false),yPix);g.stroke();if(tickLevel==0&&this.yValsQ){g.fillStyle="#ff0000";g.font="bold 12px Verdana";g.textAlign=this.vtNumsAlign;g.fillText(yVal.toString(),this.vtNumsX,yPix+5);}}
if(this.skewQ)
return;g.lineWidth=2;g.strokeStyle="#0000ff";g.beginPath();g.moveTo(coords.toXPix(coords.xStt,false),this.hzAxisY);g.lineTo(coords.toXPix(coords.xEnd,false),this.hzAxisY);g.stroke();g.beginPath();g.fillStyle=g.strokeStyle;g.drawArrow(coords.toXPix(coords.xEnd,false),this.hzAxisY,15,2,20,10,0,10,false);g.stroke();g.fill();};