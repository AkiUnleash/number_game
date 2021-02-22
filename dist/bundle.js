(()=>{"use strict";class e{constructor(e,t,n=!0){this.hostElement=document.getElementById(t),this.templateElement=document.getElementById(e);const s=document.importNode(this.templateElement.content,!0);this.element=s.firstElementChild,n&&this.attach()}attach(){this.hostElement.insertAdjacentElement("beforeend",this.element)}allremove(){document.getElementById("app").innerHTML=""}}class t{constructor(){this.listeners=[],this.state={question:[],point:0,username:""}}static getInstance(){return t._instance||(t._instance=new t),t._instance}addListener(e){this.listeners.push(e)}setQuestion(){let e=Math.floor(1e5*Math.random()-1).toString().padStart(5,"0");this.state.question=e.toString().split("");for(const e of this.listeners)console.log(this.listeners),e(this.state.question.slice())}getQuestion(){return this.state.question}checkTheAnswer(e){e===this.state.question[0]?(this.state.question.shift(),this.state.point+=100):this.state.point+=-100,0===this.state.question.length&&(this.setQuestion(),this.state.point+=1e3);for(const e of this.listeners)e(this.state.question.slice(),"question"),e(this.state.point,"point")}getPoint(){return this.state.point.toString()}setUsername(e){this.state.username=e}getUsername(){return this.state.username}}const n=t.getInstance();class s extends e{constructor(){super("number-button","oparation",!1),this.configure()}configure(){const e=document.getElementById("oparation");let t=document.createDocumentFragment();for(const e of this._arrayshuffle([...Array(10)].map(((e,t)=>t)))){const n=this.element.cloneNode(!0);n.textContent=e.toString(),n.addEventListener("click",(()=>{this._clickHandler(e.toString())})),t.appendChild(n)}e.appendChild(t)}_clickHandler(e){n.checkTheAnswer(e)}_arrayshuffle(e){for(let t=e.length;1<t;t--){const n=Math.floor(Math.random()*t);[e[n],e[t-1]]=[e[t-1],e[n]]}return e}}class i extends e{constructor(){super("question","question_app",!1),this.assignedState=[],n.setQuestion(),n.addListener(((e,t)=>{"question"===t&&(this.assignedState=e,this.elementRemove(),this.renderContent())})),this.renderContent()}configure(){}renderContent(){const e=n.getQuestion(),t=document.getElementById("question_app"),s=document.createElement("div");s.classList.add("question__item--brank");let i=document.createDocumentFragment();for(let t=e.length;t<5;t++)i.appendChild(s);for(const t of e){const e=this.element.cloneNode(!0);e.textContent=t,i.appendChild(e)}t.appendChild(i)}elementRemove(){document.getElementById("question_app").innerHTML=""}}class r extends e{constructor(){super("game-screen","app")}renderQuestion(){}configure(){}}function o(e,t,n){const s=n.value;return{configurable:!0,enumerable:!1,get(){return s.bind(this)}}}class c extends e{constructor(){super("top-button","topbutton-potion"),this.configure()}configure(){this.element.addEventListener("click",this.clickHandler)}clickHandler(e){this.allremove(),new g}}!function(e,t,n,s){var i,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,s);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);r>3&&o&&Object.defineProperty(t,n,o)}([o],c.prototype,"clickHandler",null);class a extends e{constructor(){super("gameover","app"),this.renderPoint(),new p("startbutton-potion",!0),new c}renderPoint(){document.getElementById("finish__point").textContent=n.getPoint()}configure(){}}class l extends e{constructor(e=30){super("timer","timer-screen"),this.count=e,this.renderTimer()}renderTimer(){const e=setInterval((()=>{switch(this.element.textContent=--this.count+" sec",this.count){case 0:clearTimeout(e),this.allremove(),new a;break;case 10:this.element.classList.add("timer-screen__div--orange");break;case 3:this.element.classList.add("timer-screen__div--red")}}).bind(void 0),1e3)}configure(){}}class u extends e{constructor(){super("point","header"),this._point="",n.addListener(((e,t)=>{"point"===t&&(this._point=e.toString().padStart(6,"0"),this.renderPoint())}))}renderPoint(){this.element.textContent=this._point.toString()}configure(){}}class h extends e{constructor(){super("username","header"),this.element.textContent=n.getUsername()}renderQuestion(){}configure(){}}class d extends e{constructor(e=3){super("standby","app"),this._count=e,this.configure()}configure(){return e=this,t=void 0,s=function*(){let e=yield this._countDown(this._count);this.element.textContent=e.toString(),e=yield this._countDown(e),this.element.textContent=e.toString(),e=yield this._countDown(e),this._gameScreenShow()},new((n=void 0)||(n=Promise))((function(i,r){function o(e){try{a(s.next(e))}catch(e){r(e)}}function c(e){try{a(s.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}a((s=s.apply(e,t||[])).next())}));var e,t,n,s}_countDown(e){return new Promise((t=>{setTimeout((function(){t(--e)}),1e3)}))}_gameScreenShow(){this.element.remove(),new r,new h,new u,new i,new s,new l}}class m{constructor(e){this._value=e,this._message=""}getErrorMessage(){return this._message}required(){if("string"==typeof this._value)return""===this._value.trim()?(this._message="必ず入力してください。",!1):(this._message="",!0)}Maxlength(e){if("string"==typeof this._value)return this._value.length>e?(this._message=`文字数は${e}字までです。`,!1):(this._message="",!0)}}class p extends e{constructor(e,t=!1){super("start-button",e),this.restart=t,!0===this.restart&&(this.element.textContent="RESTART"),this.configure()}configure(){this.element.addEventListener("click",this.clickHandler)}clickHandler(){if(!1===this.restart){const e=document.getElementById("name_field");n.setUsername(e.value);const t=new m(n.getUsername());if(!t.required()||!t.Maxlength(10))return void(document.getElementById("feedback").textContent=t.getErrorMessage())}this.allremove(),new d}}!function(e,t,n,s){var i,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,s);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);r>3&&o&&Object.defineProperty(t,n,o)}([o],p.prototype,"clickHandler",null);class g extends e{constructor(){super("start-screen","app"),new p("startbutton-postion")}configure(){}}new g})();