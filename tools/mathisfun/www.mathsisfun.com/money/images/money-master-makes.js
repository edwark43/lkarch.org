var my={};function moneymastermakesMain(){this.version='1.30';my.relPath='index-2.html';w=540;h=550;rect={x:220,y:65,wd:300,ht:300};startX=50;moneys=[["CA","Canada","$",[5,10,25,100,200],[200,500,1000,2000,5000],100,1,[40,140]],["US","USA","$",[1,5,10,25,50,100,500],[100,500,1000,2000],100,1,[40,180]],["MX","Mexico","$",[20,50,100,200,500,1000,2000],[2000,5000,10000,20000,50000,100000],1000,1,[40,220]],["UK","UK","£",[1,2,5,10,20,50,100,200],[200,500,1000,2000],100,1,[230,130]],["EU","Europe","€",[1,2,5,10,20,50,100,500],[100,200,500,1000,2000,5000],100,1,[220,160]],["ILS","Israel","₪",[10,50,100,200,500,1000],[1000,2000,5000,10000,20000,50000],1000,1,[250,190]],["LBP","Lebanon","L",[250,500,1000,5000,10000,20000,50000],[1000,2000,5000,10000,20000,50000],10000,1,[300,160]],["EGP","Egypt","LE",[50,100,500,1000,2000,5000,10000],[1000,2000,5000,10000,20000,50000],10000,1,[320,190]],["PKR","Pakistan","Rs",[1,2,5,10,20,50,100],[100,500,1000,2000,5000,10000,20000,50000],100,0,[290,215]],["CNY","China","¥",[50,100,200,500,1000,2000,5000],[500,1000,2000,5000,10000,20000],1000,1,[400,160]],["BDT","Bangladesh","Tk",[1,2,5,10,20,50,100],[100,500,1000,2000,5000,10000,20000,50000],100,0,[400,190]],["IN","India","Rs",[1,2,5,10,20,50,100],[100,500,1000,2000,5000,10000,20000,50000],100,0,[380,215]],["MYR","Malaysia","RM",[5,10,20,50,100,200,500],[500,1000,2000,5000,10000,20000,50000],100,1,[380,240]],["HK","Hong&nbsp;Kong","$",[10,20,50,100,200,500,1000],[2000,5000,10000,20000,50000,100000],100,1,[470,240]],["PHP","Philippines","P",[1,5,10,20,50,100,200],[200,500,1000,2000,5000,10000,20000,50000],100,0,[440,265]],["SG","Singapore","$",[5,10,20,50,100,200,500],[1000,2000,5000,10000,20000,50000,100000],100,1,[400,290]],["ZA","South Africa","R",[5,10,20,50,100,200,500],[500,1000,2000,5000,10000],100,1,[260,320]],["AU","Australia","$",[5,10,20,50,100,200,500],[200,500,1000,2000,5000,10000],100,1,[460,315]],["NZD","NZ","$",[10,20,50,100,200,500,1000],[1000,2000,5000,10000,20000,50000,100000],100,1,[530,340]],["GEN","Generic","$",[1,2,5,10,20,50,100],[100,200,500,1000,2000,5000],100,1,[400,360]]];codeAt=0;nameAt=1;symbolAt=2;denomsAt=3;paidAt=4;makeAt=5;decAt=6;coordAt=7;games=[{mode:"make",names:["Make","Echo"],showTot:true,fewCoins:false,giveChg:false,doAdd:false,makeQ:true,score:1},{mode:"simptot",names:["Target","simple"],showTot:true,fewCoins:false,giveChg:false,doAdd:false,score:1},{mode:"simp",names:["Target (no totals)","simple (sin totales)"],showTot:false,fewCoins:false,giveChg:false,doAdd:false,score:2},{mode:"fewtot",names:["Handfull","algunas monedas"],showTot:true,fewCoins:true,giveChg:false,doAdd:false,score:2},{mode:"few",names:["Pocketfull (no totals)","algunas monedas (sin totales)"],showTot:false,fewCoins:true,giveChg:false,doAdd:false,score:3},{mode:"givetot",names:["Give Change","da el cambio"],showTot:true,fewCoins:false,giveChg:true,doAdd:false,score:3},{mode:"give",names:["Give Change (no totals)","da el cambio (sin totales)"],showTot:false,fewCoins:false,giveChg:true,doAdd:false,score:4},{mode:"addtot",names:["Add/Remove",""],showTot:true,fewCoins:false,giveChg:false,doAdd:true,score:1}];game=games[0];this.tgt=0;this.denHTML='';var s='';s+='<div style="position:relative; width:'+w+'px; height:'+h+'px; margin:auto; display:block;">';s+='<div style="position:absolute; left:0; top:0; width:100%; height:100%; border-radius: 20px;  z-index:-99; '+
'background: 	'+
'radial-gradient(#def 15%, transparent 25%) 8px 10px,	'+
'radial-gradient(#ddf 15%, transparent 20%) 8px 9px;	'+
'background-color:#e2f2ff;background-size:16px 16px;"></div>';s+='<canvas id="canvasId" width="'+w+'" height="'+h+'" style="z-index:2;"></canvas>';s+='<div style="visibility:hidden; position: absolute; left:25px; top: 5px; display: block; margin: 2px; width:150px; background-color:#8888ff; text-align: center;border-radius: 10px; border: 2px solid white;" >';s+='<div style="display: inline-block; margin: 0 10px 0 0; font: 22px arial; color: white;  ">Score:</div>';s+='<div id="score" style="display: inline-block; color: white; text-align:center; padding: 3px;font: bold 26px Arial;  " >0</div>';s+='</div>';var vs=[['cust','Customer gives',85,rect.x-30,0],['need','Your Target',85,rect.x-30,25],['user','Total',85,rect.x-30,68],['makeways','of',60,280,h-175],['makefound','Ways Found',60,160,h-175]];for(var i=0;i<vs.length;i++){var v=vs[i];s+='<div style="position: absolute; left:'+v[3]+'px; top:'+v[4]+'px; display: block; margin: 2px 30px 2px 0; text-align: center;" >';s+='<div id="'+v[0]+'Lbl" style="display: inline-block; margin: 0 10px 0 0; width:150px; font: 20px arial; color: black; text-align: right;">'+v[1]+':</div>';s+='<div id="'+v[0]+'Val" style="display: inline-block;  width:'+v[2]+'px;  color: black; text-align:right; padding: 3px 5px 3px 0; background-color: #eeffee; font: bold 22px Arial;  border-radius: 10px;" >100</div>';s+='</div>';}
s+='<button id="checkBtn" onclick="check()" style="position: absolute; left:'+(rect.x+rect.wd/2-45)+'px; top:'+(rect.y+5)+'px; width:90px; font-size: 18px; z-index:44;" class="togglebtn hi" >Check</button>';s+='<img id="success" src="../images/style/tick.png" style="position:absolute; left:'+(rect.x+rect.wd-75)+'px; top:'+(rect.y+2)+'px; opacity: 0; z-index:-1;">';s+='<div id="denoms">';s+='</div>';s+='<div style="position:absolute; left:'+rect.x+'px; top:'+rect.y+'px; width:'+rect.wd+'px; height:'+rect.ht+'px; border-radius: 10px; background-image: url(images/bg3.gif); border: 2px solid white; box-shadow: 0 0 4px 4px #aaf; z-index:-5; "></div>';s+='<div id="info" style="position:absolute; left:220px; top:110px; width:300PX; font: bold 30px Arial; color: blue; border-radius: 10px; text-align: center; "></div>';if(false){s+='<button onclick="newGame()" style="position: absolute; right: 3px; top: 26px; width:80px; z-index:4;" class="togglebtn hi" >Next!</button>';}
s+='<button onclick="newCrncy()" style="position: absolute; left: 3px; top: 3px; width:90px; z-index:4;" class="togglebtn hi" >Currencies</button>';s+='<textarea id="makelist" style="position: absolute; left: 8px; top: 408px; width:'+(w-20)+'px; height:120px; font: bold 16px Arial; padding:3px; text-align:center;  z-index:2;" value="" onkeyup="go(-1)"  onchange ="go(-1)" ></textarea>';s+='<div id="copyrt" style="font: 10px Arial; font-weight: bold; color: blue; position:absolute; right:6px; top:1px;">&copy; 2015 MathsIsFun.com  v'+this.version+'</div>';s+=getPopHTML('list',20,400);s+='<audio id="snd1" src="../images/sounds/success.mp3" preload="auto"></audio>';s+='<audio id="click" src="../images/sounds/click1.mp3" preload="auto"></audio>';s+='</div>';document.write(s);el=document.getElementById('canvasId');ratio=2;el.width=w*ratio;el.height=h*ratio;el.style.width=w+"px";el.style.height=h+"px";g=el.getContext("2d");g.setTransform(ratio,0,0,ratio,0,0);money=moneys[1];crncy=money[codeAt];denoms=money[denomsAt];newShapes();dragging=false;dragHoldX=0;dragHoldY=0;score=0;document.getElementById('score').innerHTML=score.toString();doneQ=false;newGame();listpop();el.addEventListener("mousedown",mouseDownListener,false);el.addEventListener('touchstart',ontouchstart,false);el.addEventListener("mousemove",dopointer,false);findMakeCount();}
function findMakeCount(){my.justMade='';my.mades=[];my.makes=[];my.makeCount=0;var denoms=money[denomsAt];var tgt=money[makeAt];if(money[decAt]==0){console.log("no dec");}
whatMakes(tgt,0,"",denoms,0);console.log("my.makeCount",money[0],my.makeCount,my.makes);}
function whatMakes(tgt,sofar,madeStr,denoms,pos){if(pos>=denoms.length){return;}
var denom=denoms[pos];do{if(sofar<tgt){if(pos<denoms.length-1){whatMakes(tgt,sofar,madeStr,denoms,pos+1);}}
if(sofar==tgt){my.makes.push(madeStr);my.makeCount++;}
sofar=sofar+denom;if(madeStr.length>0){madeStr=madeStr+",";}
madeStr=madeStr+denom;}while(sofar<=tgt);}
function setVis(id,onQ){if(onQ){document.getElementById(id).style.visibility='visible';}else{document.getElementById(id).style.visibility='hidden';}}
function newCrncy(){listpop();}
function newGame(){document.getElementById('info').innerHTML='';document.getElementById('success').style.opacity=0;setVis('userLbl',game.showTot);setVis('userVal',game.showTot);setVis('checkBtn',false);setVis('custLbl',game.giveChg);setVis('custVal',game.giveChg);var userLbl="Total:";if(game.giveChg){userLbl="Change:";}
document.getElementById('userLbl').innerHTML=userLbl;if(game.doAdd){this.tgt=newTargetAdd();}else{newShapes();this.tgt=newTarget();document.getElementById('needVal').innerHTML=fmtCurrency(this.tgt);if(game.makeQ){findMakeCount();document.getElementById('makefoundVal').innerHTML=0;document.getElementById('makewaysVal').innerHTML=my.makeCount;}
if(game.giveChg){var tryN=0;var cust=0;do{cust=money[paidAt][getRandomInt(0,money[paidAt].length-1)];tryN++;}while(cust<=this.tgt&&tryN<100);document.getElementById('custVal').innerHTML=fmtCurrency(cust);document.getElementById('needLbl').innerHTML="Items cost:";document.getElementById('needVal').innerHTML=fmtCurrency(cust-this.tgt);}}
doDenHTML();drawShapes();}
function newTarget(){if(game.makeQ){return money[makeAt];}
var ds=money[denomsAt];var sels;var tryCount=0;do{var x=0;var denN=4;sels=[];for(var i=0;i<denN;i++){var n=Math.floor(Math.random()*ds.length);sels.push(n);x+=ds[n];}
tryCount++;}while(needCoins(x)<2&&tryCount<100);if(game.fewCoins){for(i=0;i<ds.length;i++){shapes[i].visQ=false;}
console.log("FewCoins",sels);for(i=0;i<sels.length;i++){shapes[sels[i]].visQ=true;}
for(i=0;i<2;i++){n=Math.floor(Math.random()*ds.length);shapes[n].visQ=true;}}
return(x);}
function needCoins(x){var totalCoins=0;for(var i=money[denomsAt].length-1;i>=0;i--){var coinVal=money[denomsAt][i];if(coinVal!=0){numCoins=Math.round(x/coinVal-0.5);x-=numCoins*coinVal;totalCoins+=numCoins;if(x==0)break;}}
if(x!=0)return(0);return(totalCoins);}
function newTargetAdd(){tempArr=[];for(var i=0;i<currCoinArr.length;i++){obj=currCoinArr[i];if(_root.Table.hitTest(obj._x,obj._y,false)){tempArr.push(currCoinArr[i]);}else{currCoinArr[i].removeMovieClip();}}
currCoinArr=[];for(i=0;i<tempArr.length;i++){currCoinArr.push(tempArr[i]);}
var currCount=currCoinArr.length;var currTotal=calcTotal();chgCount=0;var newCount=currCount;var newTotal=currTotal;do{var addQ=(Math.randomInt(2)==1);if(newCount>8)addQ=false;if(newCount<3)addQ=true;var denom=0;if(addQ){var choice=Math.randomInt(money[coinsAt].length);denom=money[coinsAt][choice];coinAdd=1;}else{choice=Math.randomInt(currCoinArr.length);denom=currCoinArr[choice].denom;coinAdd=-1;}
newCount+=coinAdd;newTotal+=coinAdd*denom;chgCount++;}while(chgCount<2||newTotal==currTotal||newTotal<=0);return(newTotal);}
function newShapes(){shapes=[];for(var i=0;i<denoms.length;i++){var temp=new Money(denoms[i]);shapes.push(temp);}
doDenHTML();setMoneyPos();}
function setMoneyPos(){var hts=[60,90];for(var i=0;i<shapes.length;i++){var mon=shapes[i];if(mon.typ=='base'){var div=document.getElementById('denom'+i);var ht=div.height;if(ht<10)ht=76;var col=i-2*Math.floor(i/2);mon.x=10+100*(col+0.5)-mon.wd/2;mon.y=hts[col];mon.setStt();hts[col]+=20+ht;}
if(mon.visQ){var div=document.getElementById('denom'+i);div.style.left=mon.x+'px';div.style.top=mon.y+'px';}}}
function doDenHTML(){var sNew=getDenHTML();if(sNew!=this.denHTML){this.denHTML=sNew;document.getElementById('denoms').innerHTML=sNew;}}
function getDenHTML(){var s="";for(var i=0;i<shapes.length;i++){var mon=shapes[i];if(mon.visQ){var denom=mon.denom;s+='<img id="denom'+i+'" src="'+my.relPath+'images/currency/'+crncy.toLowerCase()+denom+'.gif" style="position:absolute; left: 10px; z-index:-1;">';}}
return s;}
function listpop(){var pop=document.getElementById('listpop');pop.style.transitionDuration="0.3s";pop.style.opacity=1;pop.style.zIndex=12;pop.style.left='20px';}
function ontouchstart(evt){var touch=evt.targetTouches[0];evt.clientX=touch.clientX;evt.clientY=touch.clientY;evt.touchQ=true;mouseDownListener(evt)}
function ontouchmove(evt){var touch=evt.targetTouches[0];evt.clientX=touch.clientX;evt.clientY=touch.clientY;evt.touchQ=true;mouseMoveListener(evt);evt.preventDefault();}
function ontouchend(){el.addEventListener('touchstart',ontouchstart,false);window.removeEventListener("touchend",ontouchend,false);if(dragging){dragging=false;moneyDrop();window.removeEventListener("touchmove",ontouchmove,false);}}
function dopointer(e){var bRect=el.getBoundingClientRect();var mouseX=(e.clientX-bRect.left)*(el.width/ratio/bRect.width);var mouseY=(e.clientY-bRect.top)*(el.height/ratio/bRect.height);var overQ=false;for(var i=0;i<shapes.length;i++){if(hitTest(shapes[i],mouseX,mouseY)){overQ=true;}}
if(overQ){document.body.style.cursor="pointer";}else{document.body.style.cursor="default";}}
function mouseDownListener(evt){var i;var highestIndex=-1;var bRect=el.getBoundingClientRect();var mouseX=(evt.clientX-bRect.left)*(el.width/ratio/bRect.width);var mouseY=(evt.clientY-bRect.top)*(el.height/ratio/bRect.height);for(i=0;i<shapes.length;i++){if(hitTest(shapes[i],mouseX,mouseY)){dragging=true;if(i>highestIndex){dragHoldX=mouseX-shapes[i].x;dragHoldY=mouseY-shapes[i].y;highestIndex=i;dragIndex=i;}}}
if(dragging){shapes[dragIndex].shadowQ=true;if(evt.touchQ){window.addEventListener('touchmove',ontouchmove,false);}else{window.addEventListener("mousemove",mouseMoveListener,false);}}
if(evt.touchQ){el.removeEventListener("touchstart",ontouchstart,false);window.addEventListener("touchend",ontouchend,false);}else{el.removeEventListener("mousedown",mouseDownListener,false);window.addEventListener("mouseup",mouseUpListener,false);}
if(evt.preventDefault){evt.preventDefault();}
else if(evt.returnValue){evt.returnValue=false;}
return false;}
function mouseUpListener(){el.addEventListener("mousedown",mouseDownListener,false);window.removeEventListener("mouseup",mouseUpListener,false);if(dragging){dragging=false;moneyDrop();window.removeEventListener("mousemove",mouseMoveListener,false);}}
function mouseMoveListener(evt){if(dragIndex<0)return;var bRect=el.getBoundingClientRect();var mouseX=(evt.clientX-bRect.left)*(el.width/ratio/bRect.width);var mouseY=(evt.clientY-bRect.top)*(el.height/ratio/bRect.height);var minX=-shapes[dragIndex].wd/2;var maxX=w-shapes[dragIndex].wd/2;var posX=mouseX-dragHoldX;posX=(posX<minX)?minX:((posX>maxX)?maxX:posX);var minY=-shapes[dragIndex].ht*0.7;var maxY=h-shapes[dragIndex].ht*0.3;var posY=mouseY-dragHoldY;posY=(posY<minY)?minY:((posY>maxY)?maxY:posY);shapes[dragIndex].x=posX;shapes[dragIndex].y=posY;var div=document.getElementById('denom'+dragIndex);div.style.left=posX+'px';div.style.top=posY+'px';if(shapes[dragIndex].shadowQ){div.style.filter='drop-shadow(5px 5px 5px #222)';div.style.webkitFilter='drop-shadow(5px 5px 5px #222)';}else{div.style.filter='none';div.style.webkitFilter='none';}}
function moneyDrop(){document.getElementById('click').play();var me=shapes[dragIndex];me.shadowQ=false;if(me.typ=='base'){if(hitTest(rect,me.x+me.wd/2,me.y+me.ht/2)){var temp=new Money(me.denom);temp.setxy(me.x,me.y);temp.typ='copy';shapes.push(temp);doDenHTML();}
me.moveStt();}
if(me.typ=='copy'){if(hitTest(rect,me.x+me.wd/2,me.y+me.ht/2)){}else{shapes.splice(dragIndex,1);doDenHTML();}}
drawShapes();}
function getPopHTML(id,yp,ht){var s='';s+='<div id="'+id+'pop" style="position:absolute; left:-900px; top:'+yp+'px; height:'+ht+'px; padding: 5px; border: 1px solid red; border-radius: 9px; background-color: blue; box-shadow: 10px 10px 5px 0px rgba(40,40,40,0.75); z-index:1; transition: all linear 0.3s; opacity:0; ">';s+=getCrncyHTML();s+='</div>';return s;}
function getCrncyHTML(){s='';s+='<div style="width:543px; height:320px;">';s+='<img style="position:absolute; left:1px; top:5px;" src="images/world.gif"/>';for(var i=0;i<moneys.length-1;i++){var m=moneys[i];s+='<button onclick="doCrncy('+i+')" style="position: absolute; left:'+(m[coordAt][0]-30)+'px; top:'+(m[coordAt][1]-80)+'px; z-index:2; font: 18px Arial;" class="togglebtn" >'+m[nameAt]+'</button>';}
s+='</div>';return s;}
function doCrncy(n){money=moneys[n];crncy=money[codeAt];denoms=money[denomsAt];newShapes();newGame();var pop=document.getElementById('listpop');pop.style.opacity=0;pop.style.zIndex=-1;pop.style.left='-900px';}
function getGameHTML(){s='';s+='<div style="">';for(var i=0;i<games.length-1;i++){var gm=games[i];s+='<button onclick="chgGame('+i+')" style="z-index:2; font: 18px Arial;" class="togglebtn" >'+gm.names[0]+'</button>';if(i%2)s+='<br>';}
s+='</div>';return s;}
function chgGame(n){console.log("chgGame",n);game=games[n];newGame();}
function hitTest(shape,mx,my){if(mx<shape.x)return false;if(my<shape.y)return false;if(mx>(shape.x+shape.wd))return false;if(my>(shape.y+shape.ht))return false;return true;}
function Money(den){this.typ='base';this.shadowQ=false;this.denom=den;this.visQ=true;this.wd=76;this.ht=76;}
Money.prototype.setxy=function(x,y){this.x=x;this.y=y;};Money.prototype.setStt=function(){this.xStt=this.x;this.yStt=this.y;};Money.prototype.moveStt=function(){this.x=this.xStt;this.y=this.yStt;};function drawShapes(){g.clearRect(0,0,el.width,el.height);var tot=0;my.dens=[];for(var i=0;i<shapes.length;i++){var mon=shapes[i];if(mon.visQ){if(mon.typ=='copy'){tot+=mon.denom;my.dens.push(mon.denom);}}}
setMoneyPos();document.getElementById('userVal').innerHTML=fmtCurrency(tot);checkSuccess(tot);}
function checkSuccess(tot){if(tot==this.tgt){if(game.makeQ){console.log("made:",my.dens);my.dens.sort(function(a,b){return b-a});var denStr=fmtDenoms(my.dens);console.log("sorted:",my.dens,denStr,my.mades);var matchQ=false;for(var i=0;i<my.mades.length;i++){if(my.mades[i]==denStr){matchQ=true;break;}}
if(matchQ){}else{my.mades.push(denStr);document.getElementById('makefoundVal').innerHTML=my.mades.length;document.getElementById('makelist').innerHTML=my.mades.join(',   ');if(my.mades.length>=my.makeCount){msg("You got them all! Wow!!");}else{msg('Yes! Try another...');setTimeout(msgClear,1500);}}}else{score+=game.score;document.getElementById('score').innerHTML=score;doSuccess();}}}
function msg(s){document.getElementById('info').innerHTML=s;}
function msgClear(){msg('');}
function doSuccess(){document.getElementById('success').style.opacity=1;document.getElementById('snd1').play();setTimeout(newGame,1500);}
function dist(dx,dy){return(Math.sqrt(dx*dx+dy*dy));}
function loop(currNo,minNo,maxNo,incr){currNo+=incr;var range=maxNo-minNo+1;if(currNo<minNo){currNo=maxNo-(-currNo+maxNo)%range;}
if(currNo>maxNo){currNo=minNo+(currNo-minNo)%range;}
return currNo;}
function constrain(min,val,max){return(Math.min(Math.max(min,val),max));}
CanvasRenderingContext2D.prototype.drawBox=function(midX,midY,radius,angle){g.beginPath();var pts=[[0,0],[Math.cos(angle),Math.sin(angle)],[Math.cos(angle)+Math.cos(angle+Math.PI/2),Math.sin(angle)+Math.sin(angle+Math.PI/2)],[Math.cos(angle+Math.PI/2),Math.sin(angle+Math.PI/2)],[0,0]];for(var i=0;i<pts.length;i++){if(i==0){g.moveTo(midX+radius*pts[i][0],midY+radius*pts[i][1]);}else{g.lineTo(midX+radius*pts[i][0],midY+radius*pts[i][1]);}}
g.stroke();};function getRandomInt(min,max){return Math.floor(Math.random()*(max-min+1))+min;}
function fmtDenoms(dens)
{var s="";var _loc3_=dens[0];var n=0;var i=0;while(i<dens.length){var den=dens[i];if(den==_loc3_){n++;}else{if(s.length>0){s+=" + ";}
if(n==1){s+=this.fmtCurrency(_loc3_);}else{s+=(n+" x "+this.fmtCurrency(_loc3_));}
n=1;_loc3_=den;}
i++;}
if(s.length>0){s+=" + ";}
if(n==1){s+=this.fmtCurrency(_loc3_);}else{s+=(n+" x "+this.fmtCurrency(_loc3_));}
return s;}
function fmtCurrency(cents){if(money[decAt]==1){dollars=Math.floor(cents/100);cents=cents-dollars*100;if(cents<10){x=".0"+cents;}else{x="."+cents;}
x=dollars+x;}else{x=cents;}
return(money[symbolAt]+x);}