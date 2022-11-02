var w,h,ratio,i,s,el,g,div,dragQ,game,my={};function compoundinterestMain(mode){my.version='0.61';typ=typeof mode!=='undefined'?mode:'longitudinal';w=400;my.graphWd=w;my.graphHt=300;xstt=-1;xend=11;ystt=-100;yend=4000;my.calcType="FV";my.decPlaces=3;my.rate=0.1;var s='';s+='<div id="main" style="position:relative; width:'+w+'px; min-height:'+h+'px; background-color: white; margin:auto; display:block; border: 1px solid black; border-radius: 10px;">';my.comps=[{name:'1',title:'None'},{name:'2',title:'Semiannually (2)'},{name:'4',title:'Quarterly (4)'},{name:'12',title:'Monthly (12)'},{name:'365',title:'Daily (365)'},{name:'C',title:'Continuous'}];var compStr='';compStr+='<div style="z-index:11;font: 14px Arial; margin: 0px 3px 8px 0; ">';compStr+='<div style="display: inline-block; width: 140px; margin: 0 10px 0 0; font: 15px arial; color: black; text-align: right; ">Compounding: </div>';compStr+=getDropdownHTML(my.comps,'calcDo','compSel');compStr+=' &rArr; <span id="rateTxt" style="z-index:11;font: 16px Arial;"></span>';compStr+='</div>';s+='<div style="display: block; margin: 12px 0 16px 0;" >';my.inps=[{name:'PV',title:'Present Value',formula:'PV = <span class="intbl"><em>FV</em><strong>(1+r)<sup>n</sup></strong></span>',val:1000,dec:2},{name:'r',title:'Interest Rate',formula:'r = (FV/PV)<sup>(1/n)</sup> &minus; 1',val:10,dec:3},{name:'n',title:'Periods',formula:'n = <span class="intbl"><em><i>ln</i>(FV / PV)</em><strong><i>ln</i>(1 + r)</strong></span>',val:5,dec:2},{name:'FV',title:'Future Value',formula:'FV = PV (1+r)<sup>n</sup>',val:1610,dec:2}];my.styles=['Know','Want'];for(var i=0;i<my.inps.length;i++){var inp=my.inps[i];s+='<div style="display: block; margin: 2px 3px 4px 0;" >';s+='<div style="display: inline-block; width: 140px; margin: 0 10px 0 0; font: 15px arial; color: black; text-align: right; ">'+inp.title+' ('+inp.name+')'+': </div>';s+='<div style="display: inline-block; ">';s+='<input type="text" id="inp'+inp.name+'" style="display:block; width: 110px; height: 20px; text-align: center; border-radius: 10px; font: 18px Arial; color: #0000ff; color: #0000ff; background-color: white; " value="'+inp.val+'" oninput="chgVal('+i+',this.value)" onchange="chgVal('+i+',this.value)" />';s+='</div>';s+=getRadioHTML('Want','want'+i,my.styles,'wantChg',i);s+='</div>';if(i==1)s+=compStr;}
s+='</div>';s+='<div style="z-index:11;font: 14px Arial; margin: 3px 0 12px 0; text-align:center; background-color: #def; padding:3px;">';s+='<span id="formula" style="font: 20px Arial; "></span>';s+='</div>';s+='<div style="position:relative; width:'+w+'px; height:'+my.graphHt+'px; ">';s+='<canvas id="canvas1" style="position: absolute; left: 0px; top: 0px; z-index: 2; border: none;"></canvas>';s+='<canvas id="canvas2" style="position: absolute; left: 0px; top: 0px; z-index: 3; border: none;"></canvas>';s+='</div>';s+='<div id="copyrt" style="font: 10px Arial; font-weight: bold; color: #6600cc; position:relative; bottom:5px; left:5px; text-align:center;">&copy; 2017 MathsIsFun.com  v'+my.version+'</div>';s+='</div>';document.write(s);el=document.getElementById('canvas1');ratio=3;el.width=w*ratio;el.height=my.graphHt*ratio;el.style.width=w+"px";el.style.height=my.graphHt+"px";g=el.getContext("2d");g.setTransform(ratio,0,0,ratio,0,0);dragType='';this.clrs=[["Blue",'#0000FF'],["Red",'#FF0000'],["Black",'#000000'],["Green",'#00cc00'],["Orange",'#FFA500'],["Slate Blue",'#6A5ACD'],["Lime",'#00FF00'],["Spring Green",'#00FF7F'],["Teal",'#008080'],["Gold",'#ffd700'],["Med Purple",'#aa00aa'],["Light Blue",'#ADD8E6'],["Navy",'#000080'],["Purple",'#800080'],["Dark SeaGreen",'#8FBC8F']];clrNum=0;console.log("typ",typ);wantChg(3,1);calcDo();}
function wantChg(n,j){console.log("chgWant",n,j);for(var i=0;i<my.inps.length;i++){var inp=my.inps[i];if(i==n){id='want'+i+1;}else{id='want'+i+0;}
var div=document.getElementById(id);div.checked=true;var div=document.getElementById('inp'+inp.name);if(i==n){div.style.backgroundColor='#ffa';}else{div.style.backgroundColor='#def';}}
my.calcType=my.inps[n].name;my.formula=my.inps[n].formula;calcDo();}
function chgVal(){calcDo();}
function calcDo(){for(var i=0;i<my.inps.length;i++){var name=my.inps[i].name;my[name]=parseFloat(document.getElementById('inp'+name).value);}
my.rate=0.1;my.compType=document.getElementById('compSel').value;if(my.compType=="C"){my.rate=Math.pow(2.718281828459045,my.r/100)-1;}else{var compNum=parseInt(my.compType);my.rate=my.r/(100*compNum)+1;my.rate=Math.pow(my.rate,compNum)-1;}
var x=0;switch(my.calcType){case "PV":my.PV=my.FV/Math.pow(1+my.rate,my.n);divSet(my.calcType,my.PV,2);break;case "FV":my.FV=my.PV*Math.pow(1+my.rate,my.n);divSet(my.calcType,my.FV,2);break;case "r":var x=Math.pow(my.FV/my.PV,1/my.n);console.log("x",x);if(my.compType=="C"){var rate=x-1;x=Math.log(x)*100;}else{var rate=x-1;CompNum=parseInt(my.compType);x=Math.pow(x,1/CompNum)-1;x=x*CompNum*100;}
console.log("rate",rate,x);my.rate=rate;my.r=x;divSet(my.calcType,x,3);break;case "n":my.n=Math.log(my.FV/my.PV)/Math.log(1+my.rate);divSet(my.calcType,my.n,2);break;default:}
document.getElementById('formula').innerHTML=my.formula;my.rateText=fmt(my.rate*100,my.decPlaces)+"%";document.getElementById('rateTxt').innerHTML=my.rateText;drawPlot();return;}
function divSet(name,val,dec){var valFmt=fmt(val,dec);console.log("divSet",name,val,valFmt);document.getElementById('inp'+name).value=valFmt;}
function typChg(){var div=document.getElementById('typSel');typ=div.options[div.selectedIndex].text;typ=typ.toLowerCase();console.log("typChg",typ);restart();}
function getDropdownHTML(opts,funcName,id){var s='';s+='<select id="'+id+'" style="font: 15px Arial; color: #6600cc; background: rgba(200,220,256,0.7); padding: 1px; border-radius: 6px;" onchange="'+funcName+'()" autocomplete="off" >';for(var i=0;i<opts.length;i++){var idStr=id+i;var chkStr=i==0?'selected':'';s+='<option id="'+idStr+'" value="'+opts[i].name+'" style="height:18px;" '+chkStr+' >'+opts[i].title+'</option>';}
s+='</select>';return s;}
function getRadioHTML(prompt,id,lbls,func,n){var s='';s+='<div style="display:inline-block; border: 1px solid white; border-radius:5px; padding:3px; margin:3px; background-color:rgba(255,255,255,0.5);font: 14px Arial;">';for(var i=0;i<lbls.length;i++){var idi=id+i;var lbl=lbls[i];s+='<input id="'+idi+'" type="radio" name="'+id+'" value="'+lbl+'" onclick="'+func+'('+n+','+i+');">';s+='<label for="'+idi+'">'+lbl+' </label>';}
s+='</div>';return s;}
function drawPlot(ClearQ,obj,Col){g.clearRect(0,0,g.canvas.width,g.canvas.height);xstt=0;xend=my.n;ystt=my.PV;yend=my.FV;scaleCalcs();drawGraph();drawXY(ClearQ,obj,Col);}
function scaleCalcs(){if(xstt>xend){temp=xstt;xstt=xend;xend=temp;}
if(ystt>yend){temp=ystt;ystt=yend;yend=temp;}
xspan=xend-xstt;if(0>=xspan){xspan=0.1;}
xscale=xspan/my.graphWd;yspan=yend-ystt;if(0>=yspan){yspan=0.1;}
xstt-=1;xend+=1;xspan=xend-xstt;xscale=xspan/my.graphWd;ystt=ystt-yspan*0.1;yend=yend+yspan*0.1;yspan=yend-ystt;yscale=yspan/my.graphHt;}
function drawGraph(){NumAtAxisQ=true;xaxispos=yend/yscale;yaxispos=(-xstt)/xscale;TickFreq=2;TickLevels=2;LogSpan=Math.log(xspan/TickFreq)/2.302585092994046;xMajorTick=Math.pow(10,Math.floor(LogSpan));if(LogSpan-Math.floor(LogSpan)<0.3){xMajorTick=xMajorTick/2;}
xMinorTick=xMajorTick/5;if(Math.abs(xscale/yscale-1)<0.1){yMajorTick=xMajorTick;}else{LogSpan=Math.log(yspan/TickFreq)/2.302585092994046;yMajorTick=Math.pow(10,Math.floor(LogSpan));if(LogSpan-Math.floor(LogSpan)<0.3){yMajorTick=yMajorTick/2;}}
yMinorTick=yMajorTick/5;TickLevel=0;while(TickLevel<TickLevels){g.beginPath();if(TickLevel==0){g.strokeStyle='rgba(0,0,255,0.2)';g.lineWidth=1;xTick=xMajorTick;yTick=yMajorTick;}else{g.lineStyle='rgba(0,0,255,0.1)';g.lineWidth=1;xTick=xMinorTick;yTick=yMinorTick;}
var x=Math.ceil(xstt/xTick)*xTick;while(xend>=x){i=(x-xstt)/xscale;g.moveTo(i,0);g.lineTo(i,my.graphHt);if(TickLevel==0){g.font="15px Georgia";g.textAlign='center';g.fillText(x,i,my.graphHt-5);}
x=x+xTick;}
var y=Math.ceil(ystt/yTick)*yTick;while(yend>=y){j=(yend-y)/yscale;g.moveTo(0,j);g.lineTo(my.graphWd,j);if(TickLevel==0){g.font="15px Georgia";g.textAlign='left';g.fillText(y,5,j+5);}
y=y+yTick;}
g.stroke();TickLevel++;}
g.strokeStyle='rgba(0,0,0,1)';g.lineWidth=3;g.beginPath();g.moveTo(0,0);g.lineTo(0,my.graphHt);g.lineTo(my.graphWd,my.graphHt);g.lineTo(my.graphWd,0);g.lineTo(0,0);g.stroke();}
function drawXY(ClearQ,obj,Col){g.strokeStyle='rgba(0,0,255,1)';g.lineWidth=2;BreakQ=true;Previ=-1;YState=9;PV=my.PV;FV=my.FV;IR=my.rate;NP=my.n;i=0;while(my.graphWd>=i){var xval=i*xscale+xstt;yval=PV*Math.pow(1+IR,xval);PrevBreakQ=BreakQ;BreakQ=false;PrevYState=YState;YState=0;if(yval<ystt){YState=-1;}
if(yval>yend){YState=1;}
if(yval==Number.NEGATIVE_INFINITY){YState=-1;yval=ystt-yscale*10;}
if(yval==Number.POSITIVE_INFINITY){YState=1;yval=yend+yscale*10;}
if(PrevYState*YState==0){BreakQ=false;}else{BreakQ=true;}
if(isNaN(yval)){YState=9;BreakQ=true;}
yval=Math.min(yend+yscale*10,Math.max(yval,ystt-yscale*10));j=(yend-yval)/yscale;if(BreakQ){if(!PrevBreakQ){if(YState<9){g.lineTo(i,j);}}}else if(PrevBreakQ){if(PrevYState<9){g.moveTo(Previ,Prevj);g.lineTo(i,j);}else{g.moveTo(i,j);}}else{g.lineTo(i,j);}
Previ=i;Prevj=j;i=i+1;}
g.stroke();}
function enuffDigits(x,x0,x1){dx=Math.abs(x1-x0);digits=3-Math.round(Math.log(dx)/2.302585092994046);if(digits<10){factor=Math.pow(10,digits);newx=Math.round(x*factor)/factor;}else{newx=x;}
return newx;}
function fmt(num,digits){if(num==Number.POSITIVE_INFINITY)return "undefined";if(num==Number.NEGATIVE_INFINITY)return "undefined";num=Number(num.toFixed(digits));if(Math.abs(num)<1e-15)num=0;return num;}