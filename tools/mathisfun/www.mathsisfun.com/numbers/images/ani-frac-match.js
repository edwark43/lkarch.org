var w,h,ratio,i,s,el,g,div,dragQ,game,my={};function anifracmatchMain(from,to,rel){my.version='0.85';my.from=typeof from!=='undefined'?from:'words';my.to=typeof to!=='undefined'?to:'line';my.rel=typeof rel!=='undefined'?rel:'../';w=360;h=250;circleRadius=75;numClr='orange';denClr='blue';var id="anifrac";s="";s+='<div style="position:relative; width:'+w+'px; margin:auto; display:block; ">';s+='<div style="font: 16px Arial; color:black; position:relative; left:0px; top:0px; border: none; z-index: 22;">Make this fraction:</div>';if(my.from=='words'){s+='<div id="wantBG" style="position:relative; width:'+w+'px; height:40px; border-radius:10px; margin-bottom:10px;">';s+='<div id="wantWords" style="font: italic 24px Arial; color: saddlebrown; position:absolute; left:0px; top:0px; width:'+w+'px; border: none; text-align:center; padding:2px; margin-top:5px;">ttt</div>';s+='</div>';}
if(my.from=='frac'){s+='<div id="wantBG" style="position:relative;  width:180px; height:120px; margin-left:100px;">';s+='<canvas id="canWantFrac" style="z-index:20; position: absolute; top: 0px; left: 0px;  "></canvas>';s+='</div>';}
if(my.to=='pizza'){s+='<div id="pizzaLbl" style="font: italic 18px Arial; color:black; position:relative; border: none; z-index: 22;">Click the pizza &rarr;</div>';circleX=circleRadius;circleY=circleRadius;s+='<div style="position:relative; width:'+circleRadius*2+'px; height:'+circleRadius*2+'px; margin:auto;">';s+='<img id="pizza" src="'+my.rel+'numbers/images/pizza.jpg" style="z-index:1; position: absolute; left:'+(circleX-75)+'px; top:'+(circleY-75)+'px; " />';s+='<canvas id="canPizza" width="'+w+'" height="'+h+'" style="z-index:20; position: absolute; top: 0px; left: 0px;"></canvas>';s+='</div>';}
if(my.to=='line'){s+='<div id="lineLbl" style="font: italic 18px Arial; color:black; position:relative; z-index: 22;">Click the line &rarr;</div>';s+='<div style="position:relative; margin:auto;  width:360px; height:60px; ">';s+='<canvas id="canLine" width="'+w+'" height="'+60+'" style="z-index:20; position: absolute; top: 0px; left: 0px;"></canvas>';s+='</div>';}
s+='<div style="position:relative; margin:auto; width:180px; height:60px; z-index:22; background-color: hsla(240,100%,90%,0.5); border-radius:10px;">';var denLt=70;var denTp=15;s+='<div style="position: absolute; left:'+(denLt-50)+'px; top:'+(denTp+3)+'px; text-align: left; font: 16px arial; color: #6600cc; ">Slices:</div>';s+='<input type="text" id="den" style="position: absolute; left:'+denLt+'px; top:'+denTp+'px; width: 40px; text-align: center; border-radius: 10px; font-size: 17px; color: #0000ff; background-color: #eeffee; " value="8" onKeyUp="update()" />';s+='<button id="upBtn" style="position: absolute; left:'+(denLt+42)+'px; top:'+(denTp-13)+'px; font-size: 14px; color: #000aae; z-index:21; " class="togglebtn"  onclick="denUp()" >&#x25B2;</button>';s+='<button id="dnBtn" style="position: absolute; left:'+(denLt+42)+'px; top:'+(denTp+13)+'px; font-size: 14px; color: #000aae; z-index:21; " class="togglebtn"  onclick="denDn()" >&#x25BC;</button>';s+='</div>';s+='<div style="height: 20px;"></div>';s+='<div style="background-color:#cdf; border-radius:10px; border: 2px inset blue;">';s+='<div style="font: italic 18px Arial; color:black; position:relative; padding: 5px 0 0 5px;">Result:</div>';s+='<div style="position:relative;  width:180px; height:120px; margin-left:40px;">';s+='<canvas id="canUserFrac" style="z-index:20; position: absolute; top: 0px; left: 0px; "></canvas>';s+='</div>';s+='<div style="position:relative; width:'+w+'px; height:30px;">';s+='<div id="fracWords" style="font: italic 20px Arial; color: saddlebrown; position:absolute; left:0px; top:0px; width:'+w+'px; border: none; text-align:center; padding:2px;">ttt</div>';s+='</div>';s+='</div>';console.log("=>",my.from,my.to);var successTp=120;if(my.from=='words'){if(my.to=='pizza')successTp=120;if(my.to=='line')successTp=120;}
if(my.from=='frac'){if(my.to=='pizza')successTp=200;if(my.to=='line')successTp=100;}
s+='<div id="success" style="font: bold 50px Arial; color:gold; position:absolute; top:'+successTp+'px; left:0px; width:'+w+'px; background-color: lightyellow; text-align:right; ">Yes!</div>';s+='<div style="height: 20px;"></div>';s+='<div id="copyrt" style="position: absolute; left: 5px; bottom: 0px; font: 9px Arial; color: #6600cc; ">&copy; 2018 MathsIsFun.com  v'+my.version+'</div>';s+='</div>';document.write(s);if(my.to=='pizza'){el=document.getElementById('canPizza');ratio=2;el.width=w*ratio;el.height=h*ratio;el.style.width=w+"px";el.style.height=h+"px";g=el.getContext("2d");g.setTransform(ratio,0,0,ratio,0,0);el.addEventListener('touchmove',function(e){var touch=e.targetTouches[0];e.clientX=touch.clientX;e.clientY=touch.clientY;e.touchQ=true;onmousemove(e);e.preventDefault();});el.addEventListener('mousemove',function(e){var rect=el.getBoundingClientRect();var mx=(e.clientX-rect.left)-circleX;var my=(e.clientY-rect.top)-circleY;if(mx*mx+my*my<circleRadius*circleRadius){document.body.style.cursor="pointer";}else{document.body.style.cursor="default";}});el.addEventListener('mousedown',function(e){var rect=el.getBoundingClientRect();var mx=(e.clientX-rect.left)-circleX;var my=(e.clientY-rect.top)-circleY;if(mx*mx+my*my<circleRadius*circleRadius){mouseFrac(mx,my);}else{}
document.getElementById('pizzaLbl').style.visibility='hidden';});}
sectors=[true];my.wordObj=new Words();my.num=0;my.den=4;my.fracUser=new Frac('canUserFrac');my.fracUser.drawMe(3,5);if(my.from=='frac'){my.fracWant=new Frac('canWantFrac');my.fracWant.labelsQ=false;my.fracWant.lt=90;}
if(my.to=='line'){my.fracLine=new FracLine(8,38,'gold',my.den);my.fracLine.setHiLiteTop(-20);my.fracLine.drawMe(16);}
my.denRange={min:my.den,max:my.den};document.getElementById('den').value=my.den;my.want={num:1,den:4};my.was={};gameNew();if(my.to=='pizza')updateFrac();if(my.to=='line')updateLine();}
function mouseLine(mx,my,clickQ){my.fracLine.mouse(mx,my,clickQ);}
function gameNew(){document.getElementById('success').style.visibility='hidden';document.getElementById('wantBG').style.backgroundColor='white';my.bg=0;setTimeout(bg,500);my.was.num=my.want.num;my.was.den=my.want.den;do{my.want.den=randomInt(my.denRange.min,my.denRange.max);my.want.num=randomInt(1,my.want.den-1);console.log("my.was",my.was,my.want);}while(my.want.num==my.was.num&&my.want.den==my.was.den);my.denRange.max=Math.min(my.denRange.max+1,12);if(my.from=='words'){var wordStr=my.wordObj.num2words(my.want.num,false,my.want.den);document.getElementById("wantWords").innerHTML='"'+wordStr+'"';}
if(my.from=='frac'){my.fracWant.drawMe(my.want.num,my.want.den);}}
function bg(){switch(my.bg){case 0:document.getElementById('wantBG').style.backgroundColor='lightyellow';setTimeout(bg,300);break;case 1:document.getElementById('wantBG').style.backgroundColor='white';setTimeout(bg,300);break;case 2:document.getElementById('wantBG').style.backgroundColor='lightyellow';setTimeout(bg,300);break;default:}
my.bg++;}
function success(){console.log("success!");document.getElementById('success').style.visibility='visible';setTimeout(gameNew,2000);}
function randomInt(min,max){return Math.floor(Math.random()*(max-min+1)+min);}
function mouseFrac(x0,y0){angle=Math.atan2(-y0,x0);if(angle<0)
angle+=2*Math.PI;frame=parseInt(angle*180./Math.PI);my.num=Math.round(my.den*angle/(2*Math.PI)-0.5);if(sectors[my.num]){sectors[my.num]=!sectors[my.num];}else{sectors[my.num]=true;}
update();}
function update(){if(my.to=='pizza')updateFrac();if(my.to=='line')updateLine();console.log("check",my.num,my.den,my.want);if(my.num==my.want.num&&my.den==my.want.den){success();}}
function updateFrac(){el=g.canvas;g.clearRect(0,0,el.width,el.height);my.num=g.drawChosenSectors(sectors,my.den);var wordStr=my.wordObj.num2words(my.num,false,my.den);document.getElementById("fracWords").innerHTML='"'+wordStr+'"';my.fracUser.drawMe(my.num,my.den);}
function updateLine(){my.fracLine.setDen(my.den);my.fracUser.drawMe(my.num,my.den);var wordStr=my.wordObj.num2words(my.num,false,my.den);document.getElementById("fracWords").innerHTML='"'+wordStr+'"';}
function getDen(){var n=document.getElementById("den").value;n=n.replace(/,/gm,"");return parseInt(n);}
function denDn(){var n=getDen();if(n>2){n--;document.getElementById("den").value=n;my.den=n;update();}}
function denUp(){var n=getDen();if(n<100){n++;document.getElementById("den").value=n;my.den=n;update();}}
CanvasRenderingContext2D.prototype.drawChosenSectors=function(sectors,denom){g=this;var n=0;if(denom>100){var f=100/denom;numer*=f;denom*=f;console.log("drawSectors="+numer,denom);}
var dAngle=2*Math.PI/denom;var angleNum=0;for(var k=0;k<denom;k++){g.beginPath();g.lineWidth=1;g.strokeStyle="#ffffff";g.fillStyle="rgba(255, 255, 255, 0.85)";g.moveTo(circleX,circleY);g.arc(circleX,circleY,circleRadius,-angleNum,-angleNum-dAngle,true);g.lineTo(circleX,circleY);g.stroke();if(sectors[k]){n++;}else{g.fill();}
angleNum+=dAngle;}
return n;};CanvasRenderingContext2D.prototype.drawSectors=function(numer,denom){g=this;if(denom>100){var f=100/denom;numer*=f;denom*=f;console.log("drawSectors="+numer,denom);}
var dAngle=2*Math.PI/denom;var angleNum=0;for(var k=0;k<denom;k++){g.beginPath();g.lineWidth=1;g.strokeStyle="#ffffff";g.fillStyle="rgba(255, 255, 255, 0.7)";g.moveTo(circleX,circleY);g.arc(circleX,circleY,circleRadius,-angleNum,-angleNum-dAngle,true);g.lineTo(circleX,circleY);if(k>=numer)g.fill();g.stroke();angleNum+=dAngle;}}
function drawFrac(g,plusQ,numer,denom,xp,yp){var sz=50;g.clearRect(0,0,g.canvas.width,g.canvas.height);g.font=(sz*1.5)+"px Arial";g.textAlign="center";if(plusQ){}else{g.fillText("-",xp-18,yp+4);}
g.font="bold "+sz+"px Arial";var up=sz*0.2;var dn=sz*0.95;g.fillStyle=numClr;g.fillText(numer,xp,yp-up);g.fillStyle=denClr;g.fillText(denom,xp,yp+dn);g.strokeStyle='black';g.beginPath();g.lineWidth=sz/14;g.moveTo(xp-sz*0.6,yp);g.lineTo(xp+sz*0.6,yp);g.stroke();}
function Words(){var Lang="en";switch(Lang){case "en":LangDescrNumberComma=",";LangDescrDenomUnit="One";LangDescrDenomHalves="Halves";LangDescr10Join=" ";Langand="and";Langpoint="point";LangDescrDenomHyphen="-";LangDescrDenomOrdQ="y";LangDescrDenom_th="th";LangDescrDenom_s="s";langnumexact=new Array('Zero');langthousands=['','Thousand','Million','Billion','Trillion','Quadrillion','Quintillion','Sextillion','Septillion'];langnum=['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen','Twenty','Twenty One','Twenty Two','Twenty Three','Twenty Four','Twenty Five','Twenty Six','Twenty Seven','Twenty Eight','Twenty Nine'];langnum10=['Zero','Ten','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'];langnum100=['Zero','One Hundred','Two Hundred','Three Hundred','Four Hundred','Five Hundred','Six Hundred','Seven Hundred','Eight Hundred','Nine Hundred'];langnumer=['Zero'];langfirstfractions=[null,'Whole','Half','Third','Quarter'];langunitord=['','First','Second','Third','Fourth','Fifth','Sixth','Seventh','Eighth','Ninth','Tenth','Eleventh','Twelfth','Thirteenth','Fourteenth','Fifteenth','Sixteenth','Seventeenth','Eighteenth','Nineteenth'];langtenord=['','Tenth','Twentieth','Thirtieth','Fortieth','Fiftieth','Sixtieth','Seventieth','Eightieth','Ninetieth'];break;case "es":LangDescrNumberComma="";LangDescrDenomUnit="un";LangDescrDenomHalves="medios";LangDescr10Join=" y ";Langand="y";Langpoint="point";LangDescrDenomHyphen=" ";LangDescrDenomOrdQ="n";LangDescrDenom_th="avo";LangDescrDenom_s="s";langnumexact=['cero','uno'];langnumexact[100]='cien';langthousands=['','mil','millón','billón','trillón','cuatrillón','quintillón','sextillón','septillón'];langnum=['','un','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez','once','doce','trece','catorce','quince','dieciséis','diecisiete','dieciocho','diecinueve','veinte','veintiuno','veintidós','veintitrés','veinticuatro','veinticinco','veintiséis','veintisiete','veintiocho','veintinueve','treinta',[40,'cuarenta'],[50,'cincuenta'],[60,'sesenta'],[70,'setenta'],[80,'ochenta'],[90,'noventa'],[100,'ciento'],[200,'doscientos'],[300,'trescientos'],[400,'cuatrocientos'],[500,'quinientos'],[600,'seiscientos'],[700,'setecientos'],[800,'ochocientos'],[900,'novecientos']];langnumer=['cero','un',[21,'veintiún'],[31,'treinta y un'],[41,'cuarenta y un'],[51,'cincuenta y un'],[61,'sesenta y un'],[71,'setenta y un'],[81,'ochenta y un'],[91,'noventa y un']];langfirstfractions=['','entero','medio','tercio','cuarto','quinto','sexto','séptimo','octavo','noveno','décimo',[100,'centésimo'],[1000,'milésimo']];langunitord=['','Primero','Segundo','Tercero','Cuarto','Quinto','Sexto','Séptimo','Octavo','Noveno','Décimo','Decimoprimero','Decimosegundo','Decimotercero','Decimocuarto','Decimoquinto','Decimosexto','Decimoséptimo','Decimoctavo','Decimonoveno'];langtenord=['','Décimo','Vigésimo','Trigésimo','Cuadragésimo','Quincuagésimo','Sexagésimo','Septuagésimo','Octogésimo','Nonagésimo'];break;default:}}
Words.prototype.num2words=function(num,reducedfraction,showdenom,decAsFractionQ){return this.str2words(num.toString(),reducedfraction,showdenom,decAsFractionQ);};Words.prototype.str2words=function(num,reducedfraction,showdenom,decAsFractionQ){var s="";var negative_flag="";if(num.charAt(0)=="-"){negative_flag='Negative ';num=num.substring(1);}
var origNumber=num;var parts=num.split('.');var integer=parts[0];var decpart=parts[1];var decimalQ=(showdenom!=0||parts.length>1);if(langnumexact[integer]!=undefined){s=langnumexact[integer];}else{if(showdenom!=0&&langnumer[integer]!=undefined){s=langnumer[integer];}else{for(var i=0;integer.length>0;i++,integer=integer.substr(0,-Math.min(3,integer.length))){var threedig=integer.substr(-Math.min(3,integer.length));if(parseInt(threedig)!=0){if(i==0){s=this.handleThreeDigit(threedig);}else{if(langthousands[i]!=undefined){if(s.length==0){s=this.handleThreeDigit(threedig)+' '+langthousands[i];}else{s=this.handleThreeDigit(threedig)+' '+langthousands[i]+LangDescrNumberComma+' '+s;}}else{s="A Big Number!";}}}}
s=negative_flag+s;}}
if(decimalQ){if(showdenom!=0){if(origNumber=="1")s=LangDescrDenomUnit;s+=' '+this.describeDenom(showdenom,false,origNumber!="1");}else{var decimal="";if(reducedfraction=="n"){decimal=this.handleDecimal(decpart,false,decAsFractionQ);}else{decimal=this.handleDecimal(decpart,true,decAsFractionQ);}
if(decimal.length>0){if(decAsFractionQ){if(s==langnumexact[0]){s=decimal;}else{s+=' '+Langand+' '+decimal;}}else{s+=' '+Langpoint+' '+decimal;}}else{}}}
return(s);};Words.prototype.placeStr=function(power10){var numStr="";if(power10>=0){numStr="1"+"0".repeat(power10);}else{if(power10<-9){return "";}
numStr="0."+"0".repeat(-1-power10)+"1";}
console.log("placeStr numStr="+numStr);var s=this.str2words(numStr);if(s.substr(0,4)=="One "){s=s.substr(4);if(s.substr(0,4)=="One-"){s=s.substr(4);}}
if(s=="One")s="Unit";s+="s";return(s);};Words.prototype.handleThreeDigit=function(number){var s="";if(number.length>=3){if(number.charAt(0)!="0"){var hundreds=number.substr(0,1);s+=langnum100[hundreds];}
number=number.substr(1);}
var twodig=this.handleTwoDigit(number);if(s.length>0&&twodig.length>0)s+=' ';s+=twodig;return(s);};Words.prototype.handleTwoDigit=function(number){number=parseInt(number).toString();if(parseInt(number)<30){return(langnum[number]);}
var s="";var units=parseInt(number.toString().substr(-1));var tens=parseInt(number.toString().substr(0,1));if(units==0){s=langnum10[tens];}else{s=langnum10[tens]+" "+langnum[units];}
return(s);};Words.prototype.handleDecimal=function(numStr,reduceQ,asFractionQ){console.log("handleDecimal="+numStr,reduceQ);var s="";if(numStr=="")return(s);var denominator="1"+"0".repeat(numStr.length);if(reduceQ){}
if(asFractionQ){var num=parseInt(numStr);if(langnumer[numStr]!=undefined){s=langnumer[numStr];}else{s=this.num2words(num);}
console.log("q1="+denominator);s+=" "+this.describeDenom(parseInt(denominator),false,num!=1);}else{for(var i=0;i<numStr.length;i++){s+=this.str2words(numStr.charAt(i))+" ";}}
return(s);};Words.prototype.describeDenom=function(denom,callself,pluralq){if(denom==0)return "undefined";if(denom==2&&pluralq)return LangDescrDenomHalves;var s="umptienths";denom=Math.abs(denom);var hyphen=LangDescrDenomHyphen;if(!callself&&langfirstfractions[denom]!=undefined){s=langfirstfractions[denom];}else{if(LangDescrDenomOrdQ=="y"){if(denom<100){if(denom<20){s=langunitord[denom];}else{var tens=parseInt(denom/10);var units=denom-tens*10;if(units==0){s=langtenord[tens];}else{s=this.num2words(tens*10,false,0)+hyphen+langunitord[units];}}}else{tens=parseInt(denom.toString().slice(-2));var rest=parseInt(denom.toString().substr(0,denom.toString().length-2)+"00");if(tens==0){s=(this.num2words(rest,false,0)).trim()+LangDescrDenom_th;}else{s=this.num2words(rest,false,0)+" "+this.describeDenom(tens,false);}}}else{s=this.num2words(denom)+LangDescrDenom_th;}}
if(pluralq&&!callself)s+=LangDescrDenom_s;s=s.replace(/,/g,"");s=s.replace(/ /g,hyphen);s=s.replace(hyphen+hyphen,hyphen);return(s);};function gcf(n1,n2){var x=1;if(n1>n2){n1=n1+n2;n2=n1-n2;n1=n1-n2;}
if(n2==(Math.round(n2/n1))*n1){x=n1;}else{for(var i=Math.round(n1/2);i>1;i=i-1){if(n1==(Math.round(n1/i))*i)
if(n2==(Math.round(n2/i))*i){x=i;i=-1;}}}
return x;}
function Frac(canName){this.wd=180;this.ht=120;this.lt=145;this.tp=55;var el=document.getElementById(canName);var ratio=2;el.width=this.wd*ratio;el.height=this.ht*ratio;el.style.width=this.wd+"px";el.style.height=this.ht+"px";this.g=el.getContext("2d");this.g.setTransform(ratio,0,0,ratio,0,0);this.labelsQ=true;this.labels=['Slices we have:','Total slices:'];}
Frac.prototype.drawMe=function(numer,denom){var plusQ=true;var xp=this.lt;var yp=this.tp;var sz=50;var g=this.g;g.clearRect(0,0,g.canvas.width,g.canvas.height);g.font=(sz*1.5)+"px Arial";g.textAlign="center";g.fillStyle='#def';g.beginPath();g.rect(xp-35,0,70,this.ht)
g.fill();if(plusQ){}else{g.fillText("-",xp-18,yp+4);}
g.font="bold "+sz+"px Arial";var up=sz*0.2;var dn=sz*0.95;g.fillStyle=numClr;g.fillText(numer,xp,yp-up);g.fillStyle=denClr;g.fillText(denom,xp,yp+dn);if(this.labelsQ){g.font="bold "+(sz/4)+"px Arial";g.textAlign="right";g.fillStyle=numClr;g.fillText(this.labels[0],xp-38,yp-up-sz/3);g.fillStyle=denClr;g.fillText(this.labels[1],xp-38,yp+dn-sz/3);}
g.strokeStyle='black';g.beginPath();g.lineWidth=sz/14;g.moveTo(xp-sz*0.6,yp);g.lineTo(xp+sz*0.6,yp);g.stroke();}
function FracLine(left,top,clr,den){this.clr=clr;this.den=den;this.lt=8;this.tp=0;this.ht=60;this.wd=344;this.hiLiteTop=0;this.fullWd=this.wd+2*this.lt;this.el=document.getElementById('canLine');ratio=2;this.el.width=this.fullWd*ratio;this.el.height=this.ht*ratio;this.el.style.width=this.fullWd+"px";this.el.style.height=this.ht+"px";this.g=this.el.getContext("2d");this.g.setTransform(ratio,0,0,ratio,0,0);this.el.addEventListener('touchmove',this.touchmove.bind(this));this.el.addEventListener('mousemove',this.mousemove.bind(this));this.el.addEventListener('mousedown',this.mousedown.bind(this));}
FracLine.prototype.touchmove=function(e){var touch=e.targetTouches[0];e.clientX=touch.clientX;e.clientY=touch.clientY;e.touchQ=true;this.mousemove(e);e.preventDefault();}
FracLine.prototype.mousemove=function(e){var rect=this.el.getBoundingClientRect();var x=(e.clientX-rect.left);var y=(e.clientY-rect.top);var num=Math.round(this.den*(x-this.lt)/this.wd);var qx=num/this.den*this.wd;this.drawMe();var g=this.g;g.beginPath();g.fillStyle='rgba(0,0,255,0.2)';g.lineWidth=1;g.rect(this.lt,0,qx,20);g.fill();}
FracLine.prototype.mousedown=function(e){var rect=this.el.getBoundingClientRect();var x=(e.clientX-rect.left);var y=(e.clientY-rect.top);this.num=Math.round(this.den*(x-this.lt)/this.wd);my.num=this.num;update();this.drawMe();document.getElementById('lineLbl').style.visibility='hidden';}
FracLine.prototype.drawMe=function(){var g=this.g;g.clearRect(0,0,this.el.width,this.el.height);g.beginPath();g.strokeStyle='black';g.lineWidth=2;g.moveTo(this.lt,this.tp+10);g.lineTo(this.lt+this.wd,this.tp+10);g.stroke();for(var i=0;i<=this.den;i++){var x0=this.lt+this.wd*(i/this.den)+1;g.beginPath();g.fillStyle='black';g.strokeStyle='black';g.lineWidth=2;g.moveTo(x0,this.tp);g.lineTo(x0,this.tp+20);g.stroke();if(i==0||i==this.den){g.font='25px Arial';g.textAlign='center';var nStr='1';if(i==0)nStr='0';g.fillText(nStr,x0,this.tp+41);}else{this.drawFrac(g,x0,this.tp+20,i,this.den,false);}}
var qx=this.num/this.den*this.wd;g.beginPath();g.fillStyle='rgba(0,0,255,0.6)';g.strokeStyle='black';g.lineWidth=1;g.rect(this.lt,0,qx,20);g.fill();g.stroke();}
FracLine.prototype.drawFrac=function(g,xp,yp,num,den){g.font='14px Arial';g.textAlign='center';g.fillStyle='black';g.fillText(num.toString(),xp,yp+14);g.beginPath();g.strokeStyle='black';g.lineWidth=1;g.moveTo(xp-8,yp+17);g.lineTo(xp+8,yp+17);g.stroke();g.fillText(den.toString(),xp,yp+30);}
FracLine.prototype.setDen=function(den){this.den=den;this.drawMe();}
FracLine.prototype.setHiLiteTop=function(top){this.hiLiteTop=top;}
FracLine.prototype.getNearest=function(xmatch){var qx=(parseInt(this.den*(xmatch)/FullWidth+0.5)*FullWidth/this.den);return(qx);};FracLine.prototype.getNumer=function(xmatch){x=parseInt(this.den*xmatch/FullWidth+0.5);return(x);};FracLine.prototype.hiLite=function(Numer){var x0=this.lt+FullWidth*Numer/this.den;g.beginPath();g.fillStyle='rgba(255,0,255,0.7)';g.rect(x0-25,this.top+this.hiLiteTop-5,50,40);g.fill();if(Numer==0||Numer==this.den){g.font='bold 26px Arial';g.textAlign='center';g.fillStyle='black';if(Numer==0){g.fillText('0',x0+2,this.top+this.hiLiteTop+22);}else{g.fillText('1',x0-6,this.top+this.hiLiteTop+22);}}else{drawFrac(x0,this.top+this.hiLiteTop,Numer,this.den,true);}};FracLine.prototype.markMe=function(){if(Numer==0||Numer==this.den){}else{var x0=this.lt+FullWidth*Numer/this.den;drawFrac(x0,this.top+this.hiLiteTop,Numer,this.den,true);}};