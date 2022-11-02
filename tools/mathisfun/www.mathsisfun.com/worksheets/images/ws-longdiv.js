var w,h,ratio,i,s,el,g,div,dragQ,my={};function wslongdivMain(){my.version='0.93';var canvasid="canvasid";w=190;h=270;game={};my.ansQ=false;my.clrs=['#000000','#330099','#ff9900','#cece88','#ccff33','#993399','#ff0000','#00ff00','#0000ff','#00ffff','#ffff00','#ff00ff','#006600'];my.txtclrs=['#330099','#ff9900','#cc3366','#ccff33','#993399','#00ffff','#00ff00','#0000ff','#00ffff','#000000','#ff00ff','#006600','#ffff00'];s='';s+='<div id="main" style="position:relative; width:'+w+'mm; border: none; margin:auto; display:block;  ">';s+='<div id="toolbar" class="noprint" style=" padding:4px; margin: 0 0 30px 0; text-align:center; font: 14px Verdana; background-color: rgba(0,0,255,0.2); border-radius: 10px; height:32px; ">';s+='<button class="clickbtn" onclick="location.href='+"'../worksheets/index.php'"+';">Math Worksheets</button> ';s+='<button id="ansBtn" onclick="toggleAns()" style="" class="togglebtn lo" >Answers</button> ';s+='<input type="text" id="seed" style="color: #0000ff; background-color: #eeffee; text-align:center; font-size: 17px; width:60px; border-radius: 10px; " value="2" onKeyUp="seedChg()" />';s+='<button class="clickbtn" onclick="seedRand()">Try Another</button> ';s+='   ';s+='<a href="javascript:window.print()"><img src="../images/style/printer.png" alt="print this page" style="vertical-align:top;" />Print!</a>';s+='</div>';s+='<div style="padding: 0 0 30px 0;">';s+='<div style="float:left; margin: 0 10px 5px 0;">Name:____________________</div>';s+='<div style="float:right; margin: 0 0 5px 10px;">Date:____________________</div>';s+='<div style="text-align:center;"><b>Math is Fun Worksheet</b><br /><i>from mathsisfun.com</i></div>';s+='</div>';s+='<div id="ws" style="text-align: center;">';s+='</div>';s+='<div id="result" style="text-align: center; font: 30px Verdana;  z-index:100; ">';s+='</div>';s+='</div>';document.write(s);var seed=getQueryVariable('seed');if(seed){seedSet(seed);}else{seedSet(1000);}
console.log("seed",seed,my.seedStt);game.op=getQueryVariable('op');switch(game.op){case 'add':game.symbol="+";break;case 'sub':game.symbol="&minus;";break;case 'mult':game.symbol="&times;";break;case 'div':game.symbol="&divide;";break;default:game.symbol="?";}
game.n=Math.min(100,getQueryDef('n',10));game.amin=getQueryDef('amin',1);game.amax=getQueryDef('amax',10);game.bmin=getQueryDef('bmin',1);game.bmax=getQueryDef('bmax',10);game.carryQ=getQueryVariable('carry')!='n';game.negAnsQ=getQueryVariable('negans')!='n';game.olQ=getQueryVariable('ol')=='y';game.swapQ=getQueryVariable('swap')=='y';game.remQ=getQueryVariable('rem')=='y';console.log("game",game);doWS();}
function getQueryDef(name,def){var a=getQueryVariable(name);if(a){return parseInt(a);}
return def;}
function seedSet(n){my.seedStt=parseInt(n);if(my.seedStt<=0)my.seedStt=1;document.getElementById('seed').value=my.seedStt;}
function seedChg(){my.seedStt=(document.getElementById('seed').value)<<0;seedSet(my.seedStt);doWS();}
function seedRand(){seedSet(Math.floor(Math.random()*9999)+1);doWS();}
function doWS(){document.getElementById('result').innerHTML="";my.seed=my.seedStt;var dones=[];my.anss=[];my.tabs=[];s='';for(var i=0;i<game.n;i++){s+='<div style="text-align: left;	display: inline-block;	vertical-align:top;	margin: 0 0 4% 0;	width: 33%; font: 22px Verdana; ">';var tries=0;do{var a=getRandomInt(game.amin,game.amax);var b=getRandomInt(game.bmin,game.bmax);var rem=getRandomInt(1,a-1);console.log("rem",a,b,rem);var c=0;if(game.swapQ){if(Math.random()<0.5){var t=a;a=b;b=t;}}
switch(game.op){case 'add':c=a+b;break;case 'sub':c=a-b;break;case 'mult':c=a*b;break;case 'div':c=b;b=a;a=b*c;break;default:}
if(game.remQ)a+=rem;var id=a+','+b;var okQ=true;if(!game.carryQ){if(game.op=="add"&&isCarryNeeded(a,b,true))okQ=false;if(game.op=="sub"&&isCarryNeeded(a,b,false))okQ=false;}
if(!game.negAnsQ){if(c<0)okQ=false;}
if(dones.indexOf(id)>=0)okQ=false;if(tries>10){while(dones.length>5){dones.shift();}}}while(!okQ&&tries++<100);dones.push(id);s+='<div style="font: italic 10px Verdana; text-align:left;">'+(i+1)+':'+'</div>';s+=longDivFmt(b,a,!my.ansQ,"us");s+='</div>';}
document.getElementById('ws').innerHTML=s;}
function doAns(n){var userAns=document.getElementById('ans'+n).value;console.log("doAns",n,my.anss[n],userAns);if(userAns==my.anss[n]){s='<div style="text-align:right; border-top: 1px solid black; height:40px;">'+my.anss[n]+'</div>';document.getElementById('ansDiv'+n).innerHTML=s;my.tabs.splice(my.tabs.indexOf('ans'+n),1);console.log("YAY",my.tabs);if(my.tabs.length==0){document.getElementById('result').innerHTML="Perfect !";}else{document.getElementById(my.tabs[0]).focus();}}}
function toggleAns(){if(game.olQ)return;my.ansQ=!my.ansQ;toggleBtn("ansBtn",my.ansQ);doWS();}
function toggleBtn(btn,onq){if(onq){document.getElementById(btn).classList.add("hi");document.getElementById(btn).classList.remove("lo");}else{document.getElementById(btn).classList.add("lo");document.getElementById(btn).classList.remove("hi");}}
function dist(dx,dy){return(Math.sqrt(dx*dx+dy*dy));}
function loop(currNo,minNo,maxNo,incr){currNo+=incr;var range=maxNo-minNo+1;if(currNo<minNo){currNo=maxNo-(-currNo+maxNo)%range;}
if(currNo>maxNo){currNo=minNo+(currNo-minNo)%range;}
return currNo;}
function constrain(min,val,max){return(Math.min(Math.max(min,val),max));}
function longDivFmt(divisor,dividend,blankQ,country){s="";var digits=dividend.toString().length;console.log("digits",digits);var currnum=0;var lastnum=1;var answer="";var digit=1;var num=[];var sub=[];while(digit<=digits){var dropdigit=dividend.toString().substr((digit-1),1)<<0;currnum=currnum*10+dropdigit;var timesinto=Math.floor(currnum/divisor);answer+=timesinto;num[digit]=currnum;sub[digit]=timesinto*divisor;if(lastnum==0)num[digit]="0"+num[digit];currnum=currnum-timesinto*divisor;lastnum=currnum;digit+=1;}
console.log("",num,sub);s+='<div style="font: 22px Courier, monospace;">';if(blankQ){answer="&nbsp;".repeat(answer.toString().length);currnum="";}
if(country=="us"){var probcol=divisor.toString().length+2;s+="&nbsp;".repeat(probcol-1)+'<span style="border-bottom: 1px solid black;"> '+answer+'</span>';if(currnum>0)s+=" <b>R</b> "+currnum;s+='<br />';s+=divisor+" )"+dividend+'<br />';}else{probcol=0;s+=dividend+' |<span style="border-bottom: 1px solid black;">&nbsp;'+divisor+'</span>';s+='<br />';ans=answer;}
digit=1;while(digit<=digits){var numlength=num[digit].toString().length;var sublength=sub[digit].toString().length;if(blankQ){num[digit]="&nbsp;".repeat(numlength);sub[digit]="&nbsp;".repeat(sublength);}
if(digit!=1)s+="&nbsp;".repeat((probcol+digit-numlength))+num[digit]+'<br />';s+="&nbsp;".repeat((probcol+digit-numlength))+'<span style="border-bottom: 1px solid black;">'+"&nbsp;".repeat((numlength-sublength))+sub[digit]+'</span>';if(digit==1&&country!='us')s+="&nbsp;".repeat(dividend.toString().length+2)+'<b>'+ans+'</b>';s+='<br />';digit+=1;}
if(country!='us')s+='<b>';s+="&nbsp;".repeat(probcol+digits-currnum.toString().length)+currnum+'<br />';if(country!='us')s+='</b>';s+='</div>';return(s);}
function fmt(num,digits){digits=14;if(num==Number.POSITIVE_INFINITY)
return "undefined";if(num==Number.NEGATIVE_INFINITY)
return "undefined";num=num.toPrecision(digits);num=num.replace(/0+$/,"");if(num.charAt(num.length-1)==".")num=num.substr(0,num.length-1);if(Math.abs(num)<1e-15)num=0;return num;}
function isCarryNeeded(n1,n2,addQ){var n1str=n1.toString();var n2str=n2.toString();var minlength=Math.min(n1str.length,n2str.length);for(i=1;i<=minlength;i++){if(addQ){if(parseInt(n1str.substr(-i,1))+parseInt(n2str.substr(-i,1))>9){return true;}}else{if(parseInt(n1str.substr(-i,1))-parseInt(n2str.substr(-i,1))<0){return true;}}}
return false;}
function getRandomInt(min,max){return Math.floor(random()*(max-min+1))+min;}
function random(){var x=Math.sin(my.seed++)*10000;return x-Math.floor(x);}
function getQueryVariable(variable){var query=window.location.search.substring(1);var vars=query.split("&");for(var i=0;i<vars.length;i++){var pair=vars[i].split("=");if(pair[0]==variable){return pair[1];}}
return false;}
String.prototype.repeat=function(num){return new Array(num+1).join(this);};