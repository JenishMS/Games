(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"9CWG":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("W4eI");t.default=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.browserSupport="speechSynthesis"in window&&"SpeechSynthesisUtterance"in window,this.synthesisVoice=null}var t;return(t=[{key:"init",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n,o){e.browserSupport||o("Your browser does not support Speech Synthesis");var r=(0,i.isNil)(t.listeners)?{}:t.listeners,c=!!(0,i.isNil)(t.splitSentences)||t.splitSentences,s=(0,i.isNil)(t.lang)?void 0:t.lang,a=(0,i.isNil)(t.volume)?1:t.volume,l=(0,i.isNil)(t.rate)?1:t.rate,u=(0,i.isNil)(t.pitch)?1:t.pitch,d=(0,i.isNil)(t.voice)?void 0:t.voice;Object.keys(r).forEach((function(e){var t=r[e];"onvoiceschanged"!==e&&(speechSynthesis[e]=function(e){t&&t(e)})})),e._loadVoices().then((function(t){r.onvoiceschanged&&r.onvoiceschanged(t),!(0,i.isNil)(s)&&e.setLanguage(s),!(0,i.isNil)(d)&&e.setVoice(d),!(0,i.isNil)(a)&&e.setVolume(a),!(0,i.isNil)(l)&&e.setRate(l),!(0,i.isNil)(u)&&e.setPitch(u),!(0,i.isNil)(c)&&e.setSplitSentences(c),n({voices:t,lang:e.lang,voice:e.voice,volume:e.volume,rate:e.rate,pitch:e.pitch,splitSentences:e.splitSentences,browserSupport:e.browserSupport})})).catch((function(e){o(e)}))}))}},{key:"_fetchVoices",value:function(){return new Promise((function(e,t){setTimeout((function(){var n=speechSynthesis.getVoices();return(0,i.size)(n)>0?e(n):t("Could not fetch voices")}),100)}))}},{key:"_loadVoices",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return this._fetchVoices().catch((function(n){if(0===t)throw n;return e._loadVoices(t-1)}))}},{key:"hasBrowserSupport",value:function(){return this.browserSupport}},{key:"setVoice",value:function(e){var t,n=speechSynthesis.getVoices();if((0,i.isString)(e)&&(t=n.find((function(t){return t.name===e}))),(0,i.isObject)(e)&&(t=e),!t)throw"Error setting voice. The voice you passed is not valid or the voices have not been loaded yet.";this.synthesisVoice=t}},{key:"setLanguage",value:function(e){if(e=e.replace("_","-"),!(0,i.validateLocale)(e))throw"Error setting language. Please verify your locale is BCP47 format (http://schneegans.de/lv/?tags=es-FR&format=text)";this.lang=e}},{key:"setVolume",value:function(e){if(e=parseFloat(e),!(!(0,i.isNan)(e)&&e>=0&&e<=1))throw"Error setting volume. Please verify your volume value is a number between 0 and 1.";this.volume=e}},{key:"setRate",value:function(e){if(e=parseFloat(e),!(!(0,i.isNan)(e)&&e>=0&&e<=10))throw"Error setting rate. Please verify your volume value is a number between 0 and 10.";this.rate=e}},{key:"setPitch",value:function(e){if(e=parseFloat(e),!(!(0,i.isNan)(e)&&e>=0&&e<=2))throw"Error setting pitch. Please verify your pitch value is a number between 0 and 2.";this.pitch=e}},{key:"setSplitSentences",value:function(e){this.splitSentences=e}},{key:"speak",value:function(e){var t=this;return new Promise((function(n,o){var r=e.listeners,c=void 0===r?{}:r,s=e.queue,a=void 0===s||s,l=(0,i.trim)(e.text);(0,i.isNil)(l)&&n(),!a&&t.cancel();var u=[],d=t.splitSentences?(0,i.splitSentences)(l):[l];d.forEach((function(e,r){var s=r===(0,i.size)(d)-1,a=new SpeechSynthesisUtterance;t.synthesisVoice&&(a.voice=t.synthesisVoice),t.lang&&(a.lang=t.lang),t.volume&&(a.volume=t.volume),t.rate&&(a.rate=t.rate),t.pitch&&(a.pitch=t.pitch),a.text=e,Object.keys(c).forEach((function(e){var t=c[e];a[e]=function(i){t&&t(i),"onerror"===e&&o({utterances:u,lastUtterance:a,error:i}),"onend"===e&&s&&n({utterances:u,lastUtterance:a})}})),u.push(a),speechSynthesis.speak(a)}))}))}},{key:"pending",value:function(){return speechSynthesis.pending}},{key:"paused",value:function(){return speechSynthesis.paused}},{key:"speaking",value:function(){return speechSynthesis.speaking}},{key:"pause",value:function(){speechSynthesis.pause()}},{key:"resume",value:function(){speechSynthesis.resume()}},{key:"cancel",value:function(){speechSynthesis.cancel()}}])&&function(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(e.prototype,t),e}()},H0As:function(e,t,n){"use strict";n.r(t),n.d(t,"TictacModule",(function(){return w}));var i=n("ofXK"),o=n("tyNb"),r=n("fXoL"),c=n("XNiG"),s=n("2Vo4"),a=n("AytR");let l=(()=>{class e{constructor(){this.matchResultObs=new c.a,this.moveCountObs=new c.a,this.newGameObs=new c.a,this._moveCount=0,this.playerTurn=new s.a(1)}saveResult(){}checkResult(e,t){if(this._moveCount++,this.moveCountObs.next(this._moveCount),this._moveCount<5)return{result:"Continue",player:0,pattern:""};const n=e.F1===t&&e.F4===t&&e.F7===t,i=e.F2===t&&e.F5===t&&e.F8===t,o=e.F3===t&&e.F6===t&&e.F9===t,r=e.F1===t&&e.F2===t&&e.F3===t,c=e.F4===t&&e.F5===t&&e.F6===t,s=e.F7===t&&e.F8===t&&e.F9===t,l=e.F1===t&&e.F5===t&&e.F9===t,u=e.F3===t&&e.F5===t&&e.F5===t,d=e.F2===t&&e.F5===t&&e.F7===t,p=[n,i,o,r,c,s,l,u,d];return n||i||o||r||c||s||l||u||d?(this.matchResultObs.next({player:this.players[t-1],result:"Win"}),{result:"Win",player:t,pattern:a.a.tictacPattern[p.indexOf(!0)]}):9===this._moveCount?(this.matchResultObs.next({player:t,result:"Draw"}),{result:"Draw",player:"",pattern:[]}):{result:"Continue",player:0,pattern:""}}newGame(){this._moveCount=0,this.newGameObs.next(!0)}changePlayerName(e){this.players=e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const u=["board"],d=function(e){return{win:e}};let p=(()=>{class e{constructor(e){this.tictacService=e}ngOnInit(){this.newGame(),this.tictacService.newGameObs.subscribe(e=>{this.newGame()})}onFieldClick(e){if(this.disableAll=!0,0===this.fields[e]){this.fields[e]=this.playerTurn;const t=this.tictacService.checkResult(this.fields,this.playerTurn);"Win"===t.result?(this.disableAll=!0,this.isWon=!0,this.pattern=t.pattern):"Draw"===t.result?this.disableAll=!0:(this.disableAll=!1,this.playerTurn=1===this.playerTurn?2:1)}}newGame(){this.fields={F1:0,F2:0,F3:0,F4:0,F5:0,F6:0,F7:0,F8:0,F9:0},this.playerTurn=1,this.disableAll=!1,this.isWon=!1,this.pattern=""}}return e.\u0275fac=function(t){return new(t||e)(r.Kb(l))},e.\u0275cmp=r.Eb({type:e,selectors:[["app-tictac-board"]],viewQuery:function(e,t){var n;1&e&&r.rc(u,!0),2&e&&r.gc(n=r.Vb())&&(t.boardElement=n.first)},decls:11,vars:66,consts:[["board",""],["type","button",3,"disabled","ngClass","click"]],template:function(e,t){1&e&&(r.Nb(0,"div",null,0),r.Nb(2,"button",1),r.Ub("click",(function(){return t.onFieldClick("F1")})),r.Mb(),r.Nb(3,"button",1),r.Ub("click",(function(){return t.onFieldClick("F2")})),r.Mb(),r.Nb(4,"button",1),r.Ub("click",(function(){return t.onFieldClick("F3")})),r.Mb(),r.Nb(5,"button",1),r.Ub("click",(function(){return t.onFieldClick("F4")})),r.Mb(),r.Nb(6,"button",1),r.Ub("click",(function(){return t.onFieldClick("F5")})),r.Mb(),r.Nb(7,"button",1),r.Ub("click",(function(){return t.onFieldClick("F6")})),r.Mb(),r.Nb(8,"button",1),r.Ub("click",(function(){return t.onFieldClick("F7")})),r.Mb(),r.Nb(9,"button",1),r.Ub("click",(function(){return t.onFieldClick("F8")})),r.Mb(),r.Nb(10,"button",1),r.Ub("click",(function(){return t.onFieldClick("F9")})),r.Mb(),r.Mb()),2&e&&(r.Bb("board ",t.pattern,""),r.zb(2),r.Bb("field ","player-"+t.fields.F1,""),r.cc("disabled",0!==t.fields.F1||t.disableAll)("ngClass",r.fc(48,d,t.isWon&&t.fields.F1===t.playerTurn)),r.zb(1),r.Bb("field ","player-"+t.fields.F2,""),r.cc("disabled",0!==t.fields.F2||t.disableAll)("ngClass",r.fc(50,d,t.isWon&&t.fields.F2===t.playerTurn)),r.zb(1),r.Bb("field ","player-"+t.fields.F3,""),r.cc("disabled",0!==t.fields.F3||t.disableAll)("ngClass",r.fc(52,d,t.isWon&&t.fields.F3===t.playerTurn)),r.zb(1),r.Bb("field ","player-"+t.fields.F4,""),r.cc("disabled",0!==t.fields.F4||t.disableAll)("ngClass",r.fc(54,d,t.isWon&&t.fields.F4===t.playerTurn)),r.zb(1),r.Bb("field ","player-"+t.fields.F5,""),r.cc("disabled",0!==t.fields.F5||t.disableAll)("ngClass",r.fc(56,d,t.isWon&&t.fields.F5===t.playerTurn)),r.zb(1),r.Bb("field ","player-"+t.fields.F6,""),r.cc("disabled",0!==t.fields.F6||t.disableAll)("ngClass",r.fc(58,d,t.isWon&&t.fields.F6===t.playerTurn)),r.zb(1),r.Bb("field ","player-"+t.fields.F7,""),r.cc("disabled",0!==t.fields.F7||t.disableAll)("ngClass",r.fc(60,d,t.isWon&&t.fields.F7===t.playerTurn)),r.zb(1),r.Bb("field ","player-"+t.fields.F8,""),r.cc("disabled",0!==t.fields.F8||t.disableAll)("ngClass",r.fc(62,d,t.isWon&&t.fields.F8===t.playerTurn)),r.zb(1),r.Bb("field ","player-"+t.fields.F9,""),r.cc("disabled",0!==t.fields.F9||t.disableAll)("ngClass",r.fc(64,d,t.isWon&&t.fields.F9===t.playerTurn)))},directives:[i.h],styles:[".board[_ngcontent-%COMP%]{width:80%;margin:auto;width:60vh;height:60vh;border:8px solid rgba(95,95,95,.5803921568627451);border-radius:16px;display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr 1fr 1fr;overflow:hidden;position:relative}.field[_ngcontent-%COMP%]{border:2px solid rgba(95,95,95,.5803921568627451);background-color:#212121;box-sizing:border-box;box-shadow:0 0 6px rgba(95,95,95,.5803921568627451);cursor:pointer;background-origin:content-box;background-position:50%;background-size:contain;padding:16px;background-repeat:no-repeat}.field[_ngcontent-%COMP%]:focus{outline:0}.field[_ngcontent-%COMP%]:disabled, .field[disabled][_ngcontent-%COMP%]{pointer-events:none;cursor:default}.pattern-column1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child, .pattern-column1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4), .pattern-column1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7), .pattern-column2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2), .pattern-column2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4), .pattern-column2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8), .pattern-column3[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3), .pattern-column3[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6), .pattern-column3[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9), .pattern-leftCross[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child, .pattern-leftCross[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5), .pattern-leftCross[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9), .pattern-middle[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(5), .pattern-middle[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(7), .pattern-middle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2), .pattern-rightCross[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3), .pattern-rightCross[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5), .pattern-rightCross[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7), .pattern-row1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child, .pattern-row1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2), .pattern-row1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3), .pattern-row2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4), .pattern-row2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5), .pattern-row2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6), .pattern-row3[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7), .pattern-row3[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8), .pattern-row3[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9){background-color:green}"]}),e})();var b=n("9CWG"),h=n.n(b);let g=(()=>{class e{constructor(){this.speech=new h.a,this.speech.hasBrowserSupport()&&this.speech.init({volume:1,lang:"en-GB",rate:1,pitch:1,voice:"Google UK English Male",splitSentences:!0,listeners:{onvoiceschanged:e=>{}}})}speak(e){console.log("Change Language"),this.speech.speak({text:e,queue:!1}).then(()=>{console.log("Success !")}).catch(e=>{console.error("An error occurred :",e)})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function f(e,t){if(1&e&&(r.Nb(0,"div",4),r.oc(1),r.Mb()),2&e){const e=r.Wb();r.zb(1),r.pc(e.result)}}let y=(()=>{class e{constructor(e,t){this.tictacService=e,this.speakService=t,this.move=0,this.turn="X",this.result=""}ngOnInit(){this.tictacService.moveCountObs.subscribe(e=>{this.move=e,this.turn="X"===this.turn?"O":"X"}),this.tictacService.matchResultObs.subscribe(e=>{this.turn="X"===this.turn?"O":"X",this.result="Win"===e.result?e.player.name+" Won the match":"Match Draw",this.speakService.speak(this.result)})}newGame(){this.tictacService.newGame(),this.result="",this.move=0,this.turn="X"}}return e.\u0275fac=function(t){return new(t||e)(r.Kb(l),r.Kb(g))},e.\u0275cmp=r.Eb({type:e,selectors:[["app-score-board"]],decls:19,vars:3,consts:[[1,"score-board"],[1,"row"],[1,"col"],["class","row center",4,"ngIf"],[1,"row","center"],[1,"btn",3,"click"]],template:function(e,t){1&e&&(r.Nb(0,"div",0),r.Nb(1,"h2"),r.oc(2,"Score Board"),r.Mb(),r.Nb(3,"div",1),r.Nb(4,"div",2),r.oc(5,"Move"),r.Mb(),r.Nb(6,"div",2),r.oc(7),r.Mb(),r.Mb(),r.Nb(8,"div",1),r.Nb(9,"div",2),r.oc(10,"Turn"),r.Mb(),r.Nb(11,"div",2),r.oc(12),r.Mb(),r.Mb(),r.nc(13,f,2,1,"div",3),r.Nb(14,"div",4),r.Nb(15,"div",2),r.Nb(16,"button",5),r.Ub("click",(function(){return t.newGame()})),r.oc(17,"New Game"),r.Mb(),r.Mb(),r.Lb(18,"div",2),r.Mb(),r.Mb()),2&e&&(r.zb(7),r.pc(t.move),r.zb(5),r.pc(t.turn),r.zb(1),r.cc("ngIf",t.result))},directives:[i.j],styles:[".score-board[_ngcontent-%COMP%]{padding:16px;border-radius:16px;box-sizing:border-box;background-color:#212121;text-align:center}.row[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:stretch;padding:16px 0}.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{font-size:1.2em;width:50%;text-align:left}.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:nth-child(2){font-size:2em;font-weight:700}"]}),e})();var v=n("sYmb"),m=n("3Pt+");const C=function(e){return{value:e}};function M(e,t){if(1&e){const e=r.Ob();r.Nb(0,"div",2),r.Lb(1,"label",3),r.Nb(2,"input",4),r.Ub("ngModelChange",(function(n){r.ic(e);const i=t.index;return r.Wb().players[i].name=n}))("change",(function(){r.ic(e);const n=t.index;return r.Wb().changePlayerName(n)})),r.Xb(3,"translate"),r.Mb(),r.Mb()}if(2&e){const e=t.index,n=r.Wb();r.zb(1),r.cc("translate","PLAYER_NAME")("translateParams",r.fc(8,C,e+1)),r.zb(1),r.dc("placeholder",r.Zb(3,5,"PLACEHOLDER_PLAYER",r.fc(10,C,e+1))),r.cc("ngModel",n.players[e].name)("id","player"+e)}}let O=(()=>{class e{constructor(){this.players=[],this.playerCount=1,this.changeName=new r.n}ngOnInit(){for(let e=0;e<this.playerCount;e++)this.players.push({name:"Player "+(e+1)});this.changeName.emit(this.players)}changePlayerName(e){console.log(this.players[e].name),this.players[e].name||(this.players[e].name="Player "+(e+1)),this.changeName.emit(this.players)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Eb({type:e,selectors:[["app-player-panel"]],inputs:{playerCount:"playerCount"},outputs:{changeName:"changeName"},decls:4,vars:1,consts:[[1,"player-board"],["class","form-group",4,"ngFor","ngForOf"],[1,"form-group"],["for","",3,"translate","translateParams"],["type","text",1,"form-control",3,"ngModel","id","placeholder","ngModelChange","change"]],template:function(e,t){1&e&&(r.Nb(0,"div",0),r.Nb(1,"h2"),r.oc(2,"Player"),r.Mb(),r.nc(3,M,4,12,"div",1),r.Mb()),2&e&&(r.zb(3),r.cc("ngForOf",t.players))},directives:[i.i,v.a,m.a,m.c,m.d],pipes:[v.d],styles:[".player-board[_ngcontent-%COMP%]{padding:16px;border-radius:16px;box-sizing:border-box;background-color:#212121;text-align:center}.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;margin-top:16px;text-align:left}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;line-height:1.8}.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{background-color:#121212;color:#e7e7e7;border:none;padding-left:10px;border-radius:5px;height:40px;font-size:1.2em}.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus{border:none}"]}),e})();const P=[{path:"",component:(()=>{class e{constructor(e){this.tictacService=e}ngOnInit(){}changePlayerName(e){this.tictacService.changePlayerName(e)}}return e.\u0275fac=function(t){return new(t||e)(r.Kb(l))},e.\u0275cmp=r.Eb({type:e,selectors:[["app-tictac"]],decls:10,vars:1,consts:[[1,"container"],[1,"game-header"],[1,"panel"],[1,"board-container"],[1,"player-container"],[3,"playerCount","changeName"]],template:function(e,t){1&e&&(r.Nb(0,"div",0),r.Nb(1,"section",1),r.Nb(2,"h1"),r.oc(3,"Tic Tac Toe"),r.Mb(),r.Mb(),r.Nb(4,"section",2),r.Nb(5,"div",3),r.Lb(6,"app-tictac-board"),r.Mb(),r.Nb(7,"div",4),r.Lb(8,"app-score-board"),r.Nb(9,"app-player-panel",5),r.Ub("changeName",(function(e){return t.changePlayerName(e)})),r.Mb(),r.Mb(),r.Mb(),r.Mb()),2&e&&(r.zb(9),r.cc("playerCount",2))},directives:[p,y,O],styles:[".game-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:16px;border-radius:16px;box-sizing:border-box;background-color:#212121}.game-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0}.panel[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:stretch;gap:16px;margin-top:16px}.panel[_ngcontent-%COMP%]   .board-container[_ngcontent-%COMP%]{padding:16px;border-radius:16px;box-sizing:border-box;background-color:#212121;flex:7}.panel[_ngcontent-%COMP%]   .player-container[_ngcontent-%COMP%]{flex:3;flex-direction:column;gap:16px}.form-group[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]   .player-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:stretch}.form-group[_ngcontent-%COMP%]{flex-direction:column;margin-top:16px;text-align:left}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;line-height:1.8}.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{height:30px}"]}),e})()}];let _=(()=>{class e{}return e.\u0275mod=r.Ib({type:e}),e.\u0275inj=r.Hb({factory:function(t){return new(t||e)},imports:[[o.c.forChild(P)],o.c]}),e})(),w=(()=>{class e{}return e.\u0275mod=r.Ib({type:e}),e.\u0275inj=r.Hb({factory:function(t){return new(t||e)},imports:[[i.b,m.b,_,v.c]]}),e})()},W4eI:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.trim=t.isObject=t.isNil=t.isNan=t.size=t.isString=t.validateLocale=t.splitSentences=void 0,t.splitSentences=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\.+/g,".|").replace(/\?/g,"?|").replace(/\!/g,"!|").split("|").map((function(e){return r(e)})).filter(Boolean)};var i=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i;t.validateLocale=function(e){return"string"==typeof e&&i.test(e)};var o=function(e){return"string"==typeof e||e instanceof String};t.isString=o,t.size=function(e){return e&&Array.isArray(e)&&e.length?e.length:0},t.isNan=function(e){return"number"==typeof e&&isNaN(e)},t.isNil=function(e){return null==e},t.isObject=function(e){return"[object Object]"===Object.prototype.toString.call(e)};var r=function(e){return o(e)?e.trim():""};t.trim=r}}]);