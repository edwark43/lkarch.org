var w,h,my={};function randomtextMain(){my.version='0.62';w=450;h=350;var s='';s+='<div id="main" style="position:relative; width:'+w+'px; min-height:'+h+'px; background-color: #ffe; margin:auto; display:block; border: none; border-radius: 10px;">';s+='<textarea id="inp" style="width: 95%; height: 150px; text-align: left; border-radius: 10px; font: 14px Courier; color: #0000ff; background-color: #eeffee; " value=""></textarea>';my.lens=[1,2,3,4,5,6,7,8];s+='<style>input[type="radio"]:checked+label {font-weight: bold;}</style>';s+=getRadioHTML('Freq Length','len',my.lens,'lenChg');s+='<button id="goBtn" onclick="go();" style="" class="clickbtn" >Go</button>';s+='<textarea id="outp" style="width: 95%; height: 150px; text-align: left; border-radius: 10px; font: 14px Courier; color: #0000ff; background-color: #eeffee; " value=""></textarea>';s+='<div id="copyrt" style="font: 10px Arial; font-weight: bold; color: #6600cc; position:absolute; bottom:5px; left:5px; text-align:center;">&copy; 2019 MathsIsFun.com  v'+my.version+'</div>';s+='</div>';document.write(s);document.getElementById("len3").checked=true;my.len=my.lens[3];wordsLoad();document.getElementById('inp').value=my.quotes[1];go();}
function go(){wordsMake();}
function lenChg(n){my.len=my.lens[n];go();}
function getRadioHTML(prompt,id,lbls,func){var s='';s+='<div style="display:inline-block; font:14px Arial; border: 1px solid white; border-radius:5px; padding:3px; margin:3px; background-color:rgba(255,255,255,0.5);">';s+=prompt+':';for(var i=0;i<lbls.length;i++){var idi=id+i;var lbl=lbls[i];s+='<input id="'+idi+'" type="radio" name="'+id+'" value="'+lbl+'" onclick="'+func+'('+i+');">';s+='<label for="'+idi+'">'+lbl+' </label>';}
s+='</div>';return s;}
function wordsMake(){my.quote=document.getElementById('inp').value;var s=randomWordN(my.len);document.getElementById('outp').value=s;}
function randomWordN(n){var sn=my.quote[Math.floor(Math.random()*my.quote.length)];var s=sn;for(var i=1;i<300;i++){var nextLetter=nGraphNext(sn);s+=nextLetter;sn+=nextLetter;sn=sn.substr(-n);}
console.log(s);var rgx=new RegExp(my.rudeWords.join("|"),"gi");console.log(s);s=s.replace(rgx,"****");return s;}
function nGraphNext(s2){var arr=my.quote.split(s2);var item=arr[Math.floor(Math.random()*(arr.length-1)+1)];var letter=item.charAt(0);return letter;}
function wordsLoad(){my.rudeWords=["fuck","shit","bugger","arse","ass","bitch","crap","cunt","dick","nigger","penis","vagina","twat","wank","anus","poo","pussy","willy","piss","tits","sucks","cock","sex","rape","suck"];my.freqs=[82,15,28,42,127,22,20,61,70,2,8,40,24,67,75,19,1,60,63,90,27,10,24,2,20,1];my.quotes=["Alice was beginning to get very tired of sitting by her sister on the bank, and of having","Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do:  once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, `and what is the use of a book,\' thought Alice `without pictures or conversation?\'\r\nSo she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.\r\nThere was nothing so VERY remarkable in that; nor did Alice think it so VERY much out of the way to hear the Rabbit say to itself, `Oh dear!  Oh dear!  I shall be late!\'  (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually TOOK A WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge.\r\nIn another moment down went Alice after it, never once considering how in the world she was to get out again.\r\nThe rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down a very deep well.\r\nEither the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next.  First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs.  She took down a jar from one of the shelves as she passed; it was labelled `ORANGE MARMALADE\', but to her great disappointment it was empty:  she did not like to drop the jar for fear of killing somebody, so managed to put it into one of the cupboards as she fell past it.","To be or not to be, that is the question — Whether \'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take arms against a sea of troubles, And by opposing, end them. To die, to sleep — No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to — \'tis a consummation Devoutly to be wish\'d. To die, to sleep — To sleep, perchance to dream. Ay, there\'s the rub, For in that sleep of death what dreams may come, When we have shuffled off this mortal coil, Must give us pause. There\'s the respect That makes calamity of so long life, For who would bear the whips and scorns of time, Th\'oppressor\'s wrong, the proud man\'s contumely, The pangs of despised love, the law\'s delay, The insolence of office, and the spurns That patient merit of th\'unworthy takes, When he himself might his quietus make With a bare bodkin? who would fardels bear, To grunt and sweat under a weary life, But that the dread of something after death, The undiscovered country from whose bourn No traveller returns, puzzles the will, And makes us rather bear those ills we have Than fly to others that we know not of? Thus conscience does make cowards of us all, And thus the native hue of resolution Is sicklied o\'er with the pale cast of thought, And enterprises of great pith and moment With this regard their currents turn awry, And lose the name of action."];}