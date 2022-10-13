/*! For license information please see 427.6f5bb8aa.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_anspar_ans=self.webpackChunk_anspar_ans||[]).push([[427],{"./node_modules/base64-js/index.js":(__unused_webpack_module,exports)=>{"use strict";exports.byteLength=function byteLength(b64){var lens=getLens(b64),validLen=lens[0],placeHoldersLen=lens[1];return 3*(validLen+placeHoldersLen)/4-placeHoldersLen},exports.toByteArray=function toByteArray(b64){var tmp,i,lens=getLens(b64),validLen=lens[0],placeHoldersLen=lens[1],arr=new Arr(function _byteLength(b64,validLen,placeHoldersLen){return 3*(validLen+placeHoldersLen)/4-placeHoldersLen}(0,validLen,placeHoldersLen)),curByte=0,len=placeHoldersLen>0?validLen-4:validLen;for(i=0;i<len;i+=4)tmp=revLookup[b64.charCodeAt(i)]<<18|revLookup[b64.charCodeAt(i+1)]<<12|revLookup[b64.charCodeAt(i+2)]<<6|revLookup[b64.charCodeAt(i+3)],arr[curByte++]=tmp>>16&255,arr[curByte++]=tmp>>8&255,arr[curByte++]=255&tmp;2===placeHoldersLen&&(tmp=revLookup[b64.charCodeAt(i)]<<2|revLookup[b64.charCodeAt(i+1)]>>4,arr[curByte++]=255&tmp);1===placeHoldersLen&&(tmp=revLookup[b64.charCodeAt(i)]<<10|revLookup[b64.charCodeAt(i+1)]<<4|revLookup[b64.charCodeAt(i+2)]>>2,arr[curByte++]=tmp>>8&255,arr[curByte++]=255&tmp);return arr},exports.fromByteArray=function fromByteArray(uint8){for(var tmp,len=uint8.length,extraBytes=len%3,parts=[],i=0,len2=len-extraBytes;i<len2;i+=16383)parts.push(encodeChunk(uint8,i,i+16383>len2?len2:i+16383));1===extraBytes?(tmp=uint8[len-1],parts.push(lookup[tmp>>2]+lookup[tmp<<4&63]+"==")):2===extraBytes&&(tmp=(uint8[len-2]<<8)+uint8[len-1],parts.push(lookup[tmp>>10]+lookup[tmp>>4&63]+lookup[tmp<<2&63]+"="));return parts.join("")};for(var lookup=[],revLookup=[],Arr="undefined"!=typeof Uint8Array?Uint8Array:Array,code="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=0,len=code.length;i<len;++i)lookup[i]=code[i],revLookup[code.charCodeAt(i)]=i;function getLens(b64){var len=b64.length;if(len%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var validLen=b64.indexOf("=");return-1===validLen&&(validLen=len),[validLen,validLen===len?0:4-validLen%4]}function encodeChunk(uint8,start,end){for(var tmp,num,output=[],i=start;i<end;i+=3)tmp=(uint8[i]<<16&16711680)+(uint8[i+1]<<8&65280)+(255&uint8[i+2]),output.push(lookup[(num=tmp)>>18&63]+lookup[num>>12&63]+lookup[num>>6&63]+lookup[63&num]);return output.join("")}revLookup["-".charCodeAt(0)]=62,revLookup["_".charCodeAt(0)]=63},"./node_modules/events/events.js":module=>{"use strict";var ReflectOwnKeys,R="object"==typeof Reflect?Reflect:null,ReflectApply=R&&"function"==typeof R.apply?R.apply:function ReflectApply(target,receiver,args){return Function.prototype.apply.call(target,receiver,args)};ReflectOwnKeys=R&&"function"==typeof R.ownKeys?R.ownKeys:Object.getOwnPropertySymbols?function ReflectOwnKeys(target){return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))}:function ReflectOwnKeys(target){return Object.getOwnPropertyNames(target)};var NumberIsNaN=Number.isNaN||function NumberIsNaN(value){return value!=value};function EventEmitter(){EventEmitter.init.call(this)}module.exports=EventEmitter,module.exports.once=function once(emitter,name){return new Promise((function(resolve,reject){function errorListener(err){emitter.removeListener(name,resolver),reject(err)}function resolver(){"function"==typeof emitter.removeListener&&emitter.removeListener("error",errorListener),resolve([].slice.call(arguments))}eventTargetAgnosticAddListener(emitter,name,resolver,{once:!0}),"error"!==name&&function addErrorHandlerIfEventEmitter(emitter,handler,flags){"function"==typeof emitter.on&&eventTargetAgnosticAddListener(emitter,"error",handler,flags)}(emitter,errorListener,{once:!0})}))},EventEmitter.EventEmitter=EventEmitter,EventEmitter.prototype._events=void 0,EventEmitter.prototype._eventsCount=0,EventEmitter.prototype._maxListeners=void 0;var defaultMaxListeners=10;function checkListener(listener){if("function"!=typeof listener)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof listener)}function _getMaxListeners(that){return void 0===that._maxListeners?EventEmitter.defaultMaxListeners:that._maxListeners}function _addListener(target,type,listener,prepend){var m,events,existing;if(checkListener(listener),void 0===(events=target._events)?(events=target._events=Object.create(null),target._eventsCount=0):(void 0!==events.newListener&&(target.emit("newListener",type,listener.listener?listener.listener:listener),events=target._events),existing=events[type]),void 0===existing)existing=events[type]=listener,++target._eventsCount;else if("function"==typeof existing?existing=events[type]=prepend?[listener,existing]:[existing,listener]:prepend?existing.unshift(listener):existing.push(listener),(m=_getMaxListeners(target))>0&&existing.length>m&&!existing.warned){existing.warned=!0;var w=new Error("Possible EventEmitter memory leak detected. "+existing.length+" "+String(type)+" listeners added. Use emitter.setMaxListeners() to increase limit");w.name="MaxListenersExceededWarning",w.emitter=target,w.type=type,w.count=existing.length,function ProcessEmitWarning(warning){console&&console.warn&&console.warn(warning)}(w)}return target}function onceWrapper(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function _onceWrap(target,type,listener){var state={fired:!1,wrapFn:void 0,target,type,listener},wrapped=onceWrapper.bind(state);return wrapped.listener=listener,state.wrapFn=wrapped,wrapped}function _listeners(target,type,unwrap){var events=target._events;if(void 0===events)return[];var evlistener=events[type];return void 0===evlistener?[]:"function"==typeof evlistener?unwrap?[evlistener.listener||evlistener]:[evlistener]:unwrap?function unwrapListeners(arr){for(var ret=new Array(arr.length),i=0;i<ret.length;++i)ret[i]=arr[i].listener||arr[i];return ret}(evlistener):arrayClone(evlistener,evlistener.length)}function listenerCount(type){var events=this._events;if(void 0!==events){var evlistener=events[type];if("function"==typeof evlistener)return 1;if(void 0!==evlistener)return evlistener.length}return 0}function arrayClone(arr,n){for(var copy=new Array(n),i=0;i<n;++i)copy[i]=arr[i];return copy}function eventTargetAgnosticAddListener(emitter,name,listener,flags){if("function"==typeof emitter.on)flags.once?emitter.once(name,listener):emitter.on(name,listener);else{if("function"!=typeof emitter.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof emitter);emitter.addEventListener(name,(function wrapListener(arg){flags.once&&emitter.removeEventListener(name,wrapListener),listener(arg)}))}}Object.defineProperty(EventEmitter,"defaultMaxListeners",{enumerable:!0,get:function(){return defaultMaxListeners},set:function(arg){if("number"!=typeof arg||arg<0||NumberIsNaN(arg))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+arg+".");defaultMaxListeners=arg}}),EventEmitter.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},EventEmitter.prototype.setMaxListeners=function setMaxListeners(n){if("number"!=typeof n||n<0||NumberIsNaN(n))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+n+".");return this._maxListeners=n,this},EventEmitter.prototype.getMaxListeners=function getMaxListeners(){return _getMaxListeners(this)},EventEmitter.prototype.emit=function emit(type){for(var args=[],i=1;i<arguments.length;i++)args.push(arguments[i]);var doError="error"===type,events=this._events;if(void 0!==events)doError=doError&&void 0===events.error;else if(!doError)return!1;if(doError){var er;if(args.length>0&&(er=args[0]),er instanceof Error)throw er;var err=new Error("Unhandled error."+(er?" ("+er.message+")":""));throw err.context=er,err}var handler=events[type];if(void 0===handler)return!1;if("function"==typeof handler)ReflectApply(handler,this,args);else{var len=handler.length,listeners=arrayClone(handler,len);for(i=0;i<len;++i)ReflectApply(listeners[i],this,args)}return!0},EventEmitter.prototype.addListener=function addListener(type,listener){return _addListener(this,type,listener,!1)},EventEmitter.prototype.on=EventEmitter.prototype.addListener,EventEmitter.prototype.prependListener=function prependListener(type,listener){return _addListener(this,type,listener,!0)},EventEmitter.prototype.once=function once(type,listener){return checkListener(listener),this.on(type,_onceWrap(this,type,listener)),this},EventEmitter.prototype.prependOnceListener=function prependOnceListener(type,listener){return checkListener(listener),this.prependListener(type,_onceWrap(this,type,listener)),this},EventEmitter.prototype.removeListener=function removeListener(type,listener){var list,events,position,i,originalListener;if(checkListener(listener),void 0===(events=this._events))return this;if(void 0===(list=events[type]))return this;if(list===listener||list.listener===listener)0==--this._eventsCount?this._events=Object.create(null):(delete events[type],events.removeListener&&this.emit("removeListener",type,list.listener||listener));else if("function"!=typeof list){for(position=-1,i=list.length-1;i>=0;i--)if(list[i]===listener||list[i].listener===listener){originalListener=list[i].listener,position=i;break}if(position<0)return this;0===position?list.shift():function spliceOne(list,index){for(;index+1<list.length;index++)list[index]=list[index+1];list.pop()}(list,position),1===list.length&&(events[type]=list[0]),void 0!==events.removeListener&&this.emit("removeListener",type,originalListener||listener)}return this},EventEmitter.prototype.off=EventEmitter.prototype.removeListener,EventEmitter.prototype.removeAllListeners=function removeAllListeners(type){var listeners,events,i;if(void 0===(events=this._events))return this;if(void 0===events.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==events[type]&&(0==--this._eventsCount?this._events=Object.create(null):delete events[type]),this;if(0===arguments.length){var key,keys=Object.keys(events);for(i=0;i<keys.length;++i)"removeListener"!==(key=keys[i])&&this.removeAllListeners(key);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(listeners=events[type]))this.removeListener(type,listeners);else if(void 0!==listeners)for(i=listeners.length-1;i>=0;i--)this.removeListener(type,listeners[i]);return this},EventEmitter.prototype.listeners=function listeners(type){return _listeners(this,type,!0)},EventEmitter.prototype.rawListeners=function rawListeners(type){return _listeners(this,type,!1)},EventEmitter.listenerCount=function(emitter,type){return"function"==typeof emitter.listenerCount?emitter.listenerCount(type):listenerCount.call(emitter,type)},EventEmitter.prototype.listenerCount=listenerCount,EventEmitter.prototype.eventNames=function eventNames(){return this._eventsCount>0?ReflectOwnKeys(this._events):[]}},"./node_modules/ieee754/index.js":(__unused_webpack_module,exports)=>{exports.read=function(buffer,offset,isLE,mLen,nBytes){var e,m,eLen=8*nBytes-mLen-1,eMax=(1<<eLen)-1,eBias=eMax>>1,nBits=-7,i=isLE?nBytes-1:0,d=isLE?-1:1,s=buffer[offset+i];for(i+=d,e=s&(1<<-nBits)-1,s>>=-nBits,nBits+=eLen;nBits>0;e=256*e+buffer[offset+i],i+=d,nBits-=8);for(m=e&(1<<-nBits)-1,e>>=-nBits,nBits+=mLen;nBits>0;m=256*m+buffer[offset+i],i+=d,nBits-=8);if(0===e)e=1-eBias;else{if(e===eMax)return m?NaN:1/0*(s?-1:1);m+=Math.pow(2,mLen),e-=eBias}return(s?-1:1)*m*Math.pow(2,e-mLen)},exports.write=function(buffer,value,offset,isLE,mLen,nBytes){var e,m,c,eLen=8*nBytes-mLen-1,eMax=(1<<eLen)-1,eBias=eMax>>1,rt=23===mLen?Math.pow(2,-24)-Math.pow(2,-77):0,i=isLE?0:nBytes-1,d=isLE?1:-1,s=value<0||0===value&&1/value<0?1:0;for(value=Math.abs(value),isNaN(value)||value===1/0?(m=isNaN(value)?1:0,e=eMax):(e=Math.floor(Math.log(value)/Math.LN2),value*(c=Math.pow(2,-e))<1&&(e--,c*=2),(value+=e+eBias>=1?rt/c:rt*Math.pow(2,1-eBias))*c>=2&&(e++,c/=2),e+eBias>=eMax?(m=0,e=eMax):e+eBias>=1?(m=(value*c-1)*Math.pow(2,mLen),e+=eBias):(m=value*Math.pow(2,eBias-1)*Math.pow(2,mLen),e=0));mLen>=8;buffer[offset+i]=255&m,i+=d,m/=256,mLen-=8);for(e=e<<mLen|m,eLen+=mLen;eLen>0;buffer[offset+i]=255&e,i+=d,e/=256,eLen-=8);buffer[offset+i-d]|=128*s}}}]);