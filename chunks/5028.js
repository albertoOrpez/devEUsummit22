"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[5028],{12348:(e,t,r)=>{r.d(t,{Z:()=>i});var s=r(61681);class i{constructor(e){this.size=0,this._start=0,this.maxSize=e,this._buffer=new Array(e)}get entries(){return this._buffer}enqueue(e){if(this.size===this.maxSize){const t=this._buffer[this._start];return this._buffer[this._start]=e,this._start=(this._start+1)%this.maxSize,t}return this._buffer[(this._start+this.size++)%this.maxSize]=e,null}dequeue(){if(0===this.size)return null;const e=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,e}peek(){return 0===this.size?null:this._buffer[this._start]}find(e){if(0===this.size)return null;for(const t of this._buffer)if((0,s.pC)(t)&&e(t))return t;return null}clear(e){let t=this.dequeue();for(;(0,s.pC)(t);)e&&e(t),t=this.dequeue()}}},8774:(e,t,r)=>{r.d(t,{Qo:()=>a});var s=r(12348),i=r(19431),o=r(61681);const n="__esri_timestamp__";class a{constructor(e,t,r,s,i=128){this._trackIdToObservations=new Map,this._idCounter=0,this._lastPurge=performance.now(),this._addOrUpdated=new Map,this._removed=[],this._maxAge=0,this._timeInfo=r,this._purgeOptions=s,this.store=e,this.objectIdField=t,this.purgeInterval=i,this._useGeneratedIds="__esri_stream_id__"===this.objectIdField}add(e){if(this._useGeneratedIds){const t=this._nextId();e.attributes[this.objectIdField]=t,e.objectId=t}else e.objectId=e.attributes[this.objectIdField];if(this._addOrUpdated.set(e.objectId,e),this._maxAge=Math.max(this._maxAge,e.attributes[this._timeInfo.startTimeField]),!this._timeInfo.trackIdField)return(0,o.Wi)(this._trackIdLessObservations)&&(this._trackIdLessObservations=new s.Z(1e5)),void this._trackIdLessObservations.enqueue(e.objectId);const t=e.attributes[this._timeInfo.trackIdField];if(!this._trackIdToObservations.has(t)){const e=(0,o.pC)(this._purgeOptions)&&null!=this._purgeOptions.maxObservations?this._purgeOptions.maxObservations:1e3,r=(0,i.uZ)(e,0,1e3);this._trackIdToObservations.set(t,new s.Z(r))}const r=this._trackIdToObservations.get(t).enqueue(e.objectId);(0,o.pC)(r)&&(this._addOrUpdated.has(r)?this._addOrUpdated.delete(r):this._removed.push(r))}checkForUpdates(){const e=this._getToAdd(),t=this._getToRemove(),r=performance.now();r-this._lastPurge>=this.purgeInterval&&(this._purge(r),this._lastPurge=r);const s=[];if((0,o.pC)(t))for(const e of t){const t=this.store.removeById(e);(0,o.pC)(t)&&s.push(t)}if((0,o.pC)(e))for(const t of e)t.attributes[n]=r,this.store.add(t);(e||s)&&this.store.update(e,s)}_getToAdd(){if(!this._addOrUpdated.size)return null;const e=new Array(this._addOrUpdated.size);let t=0;return this._addOrUpdated.forEach((r=>e[t++]=r)),this._addOrUpdated.clear(),e}_getToRemove(){const e=this._removed;return this._removed.length?(this._removed=[],e):null}_nextId(){const e=this._idCounter;return this._idCounter=(this._idCounter+1)%4294967294+1,e}_purge(e){const t=this._purgeOptions;(0,o.pC)(t)&&(this._purgeSomeByDisplayCount(t),this._purgeByAge(t),this._purgeByAgeReceived(e,t),this._purgeTracks())}_purgeSomeByDisplayCount(e){if(!e.displayCount)return;let t=this.store.size;if(t>e.displayCount){if(this._timeInfo.trackIdField)for(const r of this._trackIdToObservations.values())if(t>e.displayCount&&r.size){const e=(0,o.Wg)(r.dequeue());this._removed.push(e),t--}if((0,o.pC)(this._trackIdLessObservations)){let r=t-e.displayCount;for(;r-- >0;){const e=this._trackIdLessObservations.dequeue();(0,o.pC)(e)&&this._removed.push(e)}}}}_purgeByAge(e){if(!e.age||!this._timeInfo?.startTimeField)return;const t=60*e.age*1e3,r=this._maxAge-t;this.store.forEach((e=>{e.attributes[this._timeInfo.startTimeField]<r&&this._removed.push(e.objectId)}))}_purgeByAgeReceived(e,t){if(!t.ageReceived)return;const r=e-60*t.ageReceived*1e3;this.store.forEach((e=>{e.attributes[n]<r&&this._removed.push(e.objectId)}))}_purgeTracks(){this._trackIdToObservations.forEach(((e,t)=>{0===e.size&&this._trackIdToObservations.delete(t)}))}}},63276:(e,t,r)=>{r.d(t,{I:()=>R});var s=r(36663),i=(r(91957),r(66341)),o=r(70375),n=r(13802),a=r(61681),c=r(78668),h=r(3466),d=(r(7283),r(7753),r(39994),r(33156),r(40266)),u=r(81977),l=r(95247),_=r(31355),p=r(53280);let f=class extends(_.Z.EventedMixin(p.r)){onFeature(e){this.emit("feature",e)}};f=(0,s._)([(0,d.j)("esri.layers.graphics.sources.connections.StreamConnection")],f);const y=f,g=n.Z.getLogger("esri.layers.graphics.sources.connections.WebSocketConnection");var m,b;(b=m||(m={}))[b.CONNECTING=0]="CONNECTING",b[b.OPEN=1]="OPEN",b[b.CLOSING=2]="CLOSING",b[b.CLOSED=3]="CLOSED";let v=class extends y{constructor(e){super(),this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:s}=e;this._config=e,this._featureZScaler=(0,l.k)(t,s,r),this._open()}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){(0,a.pC)(this._websocket)&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if((0,a.Wi)(this._websocket))return"disconnected";switch(this._websocket.readyState){case m.CONNECTING:case m.OPEN:return"connected";case m.CLOSING:case m.CLOSED:return"disconnected"}}async _tryCreateWebSocket(e=this._config.source.path,t=1e3,r=0){try{if(this.destroyed)return;const t=(0,h.fl)(e,this._config.customParameters);this._websocket=await this._createWebSocket(t),this.notifyChange("connectionStatus")}catch(s){const i=t/1e3;return this._config.maxReconnectionAttempts&&r>=this._config.maxReconnectionAttempts?(g.error(new o.Z("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(g.error(new o.Z("websocket-connection",`Failed to connect. Attempting to reconnect in ${i}s`,s)),await(0,c.e4)(t),this._tryCreateWebSocket(e,Math.min(1.5*t,1e3*this._config.maxReconnectionInterval),r+1))}}_createWebSocket(e){return new Promise(((t,r)=>{const s=new WebSocket(e);s.onopen=()=>{if(s.onopen=null,this.destroyed)return s.onclose=null,void s.close();s.onclose=e=>this._onClose(e),s.onerror=e=>this._onError(e),s.onmessage=e=>this._onMessage(e),t(s)},s.onclose=e=>{s.onopen=s.onclose=null,r(e)}}))}async _handshake(e=1e4){const t=this._websocket;if((0,a.Wi)(t))return;const r=(0,c.hh)(),s=t.onmessage,{filter:i,outFields:n,spatialReference:h}=this._config;return r.timeout(e),t.onmessage=e=>{let a=null;try{a=JSON.parse(e.data)}catch(e){}a&&"object"==typeof a||(g.error(new o.Z("websocket-connection","Protocol violation. Handshake failed - malformed message",e.data)),r.reject(),this.destroy()),a.spatialReference?.wkid!==h?.wkid&&(g.error(new o.Z("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${h.wkid}`,e.data)),r.reject(),this.destroy()),"json"!==a.format&&(g.error(new o.Z("websocket-connection","Protocol violation. Handshake failed - format is not set",e.data)),r.reject(),this.destroy()),i&&a.filter!==i&&g.error(new o.Z("websocket-connection","Tried to set filter, but server doesn't support it")),n&&a.outFields!==n&&g.error(new o.Z("websocket-connection","Tried to set outFields, but server doesn't support it")),t.onmessage=s,r.resolve()},t.send(JSON.stringify({filter:i,outFields:n,format:"json",spatialReference:{wkid:h.wkid}})),r.promise}_onMessage(e){try{const t=JSON.parse(e.data);if("featureResult"!==t.type)throw new o.Z("websocket-connection","Protocol violation - Expected to find message of type 'featureResult'",t);for(const e of t.features)(0,a.pC)(this._featureZScaler)&&this._featureZScaler(e.geometry),this.onFeature(e)}catch(e){return g.error(new o.Z("websocket-connection","Failed to parse message",e)),void this.destroy()}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),g.error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&g.error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};(0,s._)([(0,u.Cb)()],v.prototype,"connectionStatus",null),(0,s._)([(0,u.Cb)()],v.prototype,"errorString",void 0),v=(0,s._)([(0,d.j)("esri.layers.graphics.sources.connections.WebSocketConnection")],v);var w=r(28500),k=r(14136),S=r(53736),I=r(14685);const C=n.Z.getLogger("esri.layers.graphics.sources.connections.GeoEventConnection"),O={maxQueryDepth:5,maxRecordCountFactor:3};let F=class extends v{constructor(e){super({...O,...e})}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||C.warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:s}=this._config;this.destroyed||this._setFilter(r,s)}_onMessage(e){let t;try{t=this._enrich(JSON.parse(e.data)),(0,a.pC)(this._featureZScaler)&&this._featureZScaler(t.geometry)}catch(e){return void C.error(new o.Z("geoevent-connection","Failed to parse message",e))}this.onFeature(t)}async _fetchServiceDefinition(e){const t={f:"json",...this._config.customParameters},r=(0,i.default)(e.path,{query:t,responseType:"json"}),s=(await r).data;return this._serviceDefinition=s,s}_fetchWebSocketUrl(e,t){const r=e[0],{urls:s,token:i}=r,o=this._inferWebSocketBaseUrl(s);return(0,h.fl)(`${o}/subscribe`,{outSR:""+t.wkid,token:i})}_inferWebSocketBaseUrl(e){if(1===e.length)return e[0];for(const t of e)if(t.includes("wss"))return t;return C.error(new o.Z("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const r=this._websocket;if((0,a.Wi)(r)||(0,a.Wi)(e)&&(0,a.Wi)(t))return;const s=JSON.stringify({filter:this._serializeFilter(e,t)});let i=!1;const n=(0,c.hh)();return r.onmessage=e=>{const t=JSON.parse(e.data);t.filter&&(t.error&&(C.error(new o.Z("geoevent-connection","Failed to set service filter",t.error)),this._set("errorString",`Could not set service filter - ${t.error}`),n.reject(t.error)),r.onmessage=this._onMessage.bind(this),i=!0,n.resolve())},r.send(s),setTimeout((()=>{i||(this.destroyed||this._websocket!==r||C.error(new o.Z("geoevent-connection","Server timed out when setting filter")),n.reject())}),1e4),n.promise}_serializeFilter(e,t){const r={};if((0,a.Wi)(e)&&(0,a.Wi)(t))return r;if((0,a.pC)(e)&&e.geometry)try{const t=(0,S.im)(e.geometry);if("extent"!==t.type)throw new o.Z(`Expected extent but found type ${t.type}`);r.geometry=JSON.stringify(t.shiftCentralMeridian())}catch(e){C.error(new o.Z("geoevent-connection","Encountered an error when setting connection geometryDefinition",e))}return(0,a.pC)(e)&&e.where&&"1 = 1"!==e.where&&(r.where=e.where),(0,a.pC)(t)&&(r.outFields=t.join(",")),r}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,r=e.attributes[t];if(!this._relatedFeatures.has(r))return C.warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:s,geometry:i}=this._relatedFeatures.get(r);for(const t in s)e.attributes[t]=s[t];return i&&(e.geometry=i),e.geometry||e.centroid||C.error(new o.Z("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),s=this._queryArchive(t);await r;const i=await s;if(!i)return;for(const e of i.features)this.onFeature(this._enrich(e))}catch(e){C.error(new o.Z("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new((await Promise.resolve().then(r.bind(r,21187))).default)({url:e}),{capabilities:s}=await t.load(),i=s.query.supportsMaxRecordCountFactor,o=s.query.supportsPagination,n=s.query.supportsCentroid,c=this._config.maxRecordCountFactor,h=t.capabilities.query.maxRecordCount,d=i?h*c:h,u=new k.Z;if(u.outFields=(0,a.Pt)(this._config.outFields,["*"]),u.where=(0,a.Pt)((0,a.U2)(this._config.filter,"where"),"1=1"),u.returnGeometry=!0,u.returnExceededLimitFeatures=!0,u.outSpatialReference=I.Z.fromJSON(this._config.spatialReference),n&&(u.returnCentroid=!0),i&&(u.maxRecordCountFactor=c),o)return u.num=d,t.destroy(),this._queryPages(e,u);const l=await(0,w.executeQuery)(e,u,this._config.sourceSpatialReference);return t.destroy(),l.data}async _queryPages(e,t,r=[],s=0){t.start=(0,a.pC)(t.num)?s*t.num:null;const{data:i}=await(0,w.executeQuery)(e,t,this._config.sourceSpatialReference);return i.exceededTransferLimit&&s<this._config.maxQueryDepth?(i.features.forEach((e=>r.push(e))),this._queryPages(e,t,r,s+1)):(r.forEach((e=>i.features.push(e))),i)}_addRelatedFeatures(e){const t=new Map,r=e.features,s=this._serviceDefinition.relatedFeatures.joinField;for(const e of r){const r=e.attributes[s];t.set(r,e)}this._relatedFeatures=t}};F=(0,s._)([(0,d.j)("esri.layers.graphics.sources.connections.GeoEventConnection")],F);const x=F;function R(e,t,r,s,i,o,n,a){const c=0===e.path.indexOf("wss://")||0===e.path.indexOf("ws://"),h={source:e,sourceSpatialReference:t,spatialReference:r,geometryType:s,filter:i,maxReconnectionAttempts:o,maxReconnectionInterval:n,customParameters:a};return c?new v(h):new x(h)}},25028:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var s=r(36663),i=r(70375),o=r(76868),n=r(81977),a=(r(7753),r(39994),r(7283),r(40266)),c=(r(91957),r(80085)),h=r(53443),d=r(53280),u=r(61681),l=r(64189),_=r(8774),p=r(63276),f=r(3659),y=r(59659);let g=class extends c.Z{getObjectId(){return this.objectId}};(0,s._)([(0,n.Cb)({type:Number,json:{read:!0}})],g.prototype,"objectId",void 0),g=(0,s._)([(0,a.j)("esri.layers.graphics.controllers.StreamGraphic")],g);class m{constructor(e){this.onUpdate=e,this._idToGraphic=new Map}destroy(){this._idToGraphic.clear()}add(e){this._idToGraphic.set(e.objectId,e)}get(e){return this._idToGraphic.get(e)}forEach(e){this._idToGraphic.forEach(e)}removeById(e){const t=this._idToGraphic.get(e);return t?(t.sourceLayer=t.layer=null,this._idToGraphic.delete(e),t):null}update(e,t){this.onUpdate(e,t)}get size(){return this._idToGraphic.size}}let b=class extends((0,d.p)((0,l.v)(h.Z))){constructor(){super(...arguments),this._updateInfo={websocket:0,client:0},this.graphics=new f.g}initialize(){this.addResolvingPromise(this.layer.when((()=>this._startup())))}destroy(){this.clear()}_clearInterval(){this._updateIntervalId&&(clearInterval(this._updateIntervalId),this._updateIntervalId=0)}clear(){this._clearInterval(),this.connection&&(this.connection.destroy(),this.connection=null),this.store&&(this.store.destroy(),this.store=null),this.graphics.clear(),this.handles.removeAll()}get updating(){return!this.connection||"connected"===this.connection.connectionStatus}_startup(){const{layer:e,layerView:t}=this,{parsedUrl:r,spatialReference:s,definitionExpression:i,geometryDefinition:n,objectIdField:a,timeInfo:c,purgeOptions:h,maxReconnectionAttempts:d,maxReconnectionInterval:u,customParameters:l}=e,f=y.Mk.toJSON(e.geometryType),g=s,b=t.view.spatialReference,v={geometry:n,where:i};this.clear(),this._set("connection",(0,p.I)(r,g,b,f,v,d,u,l)),this._outSpatialReference=b.toJSON(),this.store=new m(this._onUpdate.bind(this)),this.featuresManager=new _.Qo(this.store,a,c.toJSON(),h);const w="startup-watches";this.handles.remove(w),this.handles.add([this.connection.on("feature",(e=>this._onFeature(e))),(0,o.YP)((()=>[e.definitionExpression,e.geometryDefinition,e.purgeOptions]),(()=>this._startup()))],w),this._initUpdateInterval()}_onFeature(e){this._updateInfo.websocket++,this.layerView.hasEventListener("data-received")&&this.layerView.emit("data-received",{attributes:e.attributes,centroid:e.centroid,geometry:e.geometry});try{(0,u.pC)(e.geometry)&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._outSpatialReference);const t=g.fromJSON(e);t.sourceLayer=t.layer=this.layer,this.featuresManager.add(t)}catch{}}_onUpdate(e,t){(0,u.pC)(t)&&this.graphics.removeMany(t),(0,u.pC)(e)&&(this._updateInfo.client+=e.length,this.graphics.addMany(e))}_initUpdateInterval(){this._clearInterval();const{updateInterval:e}=this.layer;let t=performance.now();this._updateIntervalId=setInterval((()=>{const e=performance.now(),r=e-t;if(r>2500){t=e;const s=Math.round(this._updateInfo.client/(r/1e3)),i=Math.round(this._updateInfo.websocket/(r/1e3));this._updateInfo.client=0,this._updateInfo.websocket=0,this.layerView.emit("update-rate",{client:s,websocket:i})}this.featuresManager.checkForUpdates()}),e)}pauseStream(){this._clearInterval()}resumeStream(){this._initUpdateInterval()}};(0,s._)([(0,n.Cb)()],b.prototype,"connection",void 0),(0,s._)([(0,n.Cb)()],b.prototype,"layer",void 0),(0,s._)([(0,n.Cb)()],b.prototype,"layerView",void 0),(0,s._)([(0,n.Cb)({readOnly:!0})],b.prototype,"updating",null),b=(0,s._)([(0,a.j)("esri.layers.graphics.controllers.StreamController")],b);var v=r(14136),w=r(87198),k=r(19654),S=r(70984),I=r(26216),C=r(15553);const O=e=>{let t=class extends e{constructor(...e){super(...e),this.connectionError=null,this.connectionStatus="disconnected",this.filter=null}};return(0,s._)([(0,n.Cb)({readOnly:!0})],t.prototype,"connectionError",void 0),(0,s._)([(0,n.Cb)({aliasOf:"controller.connection.connectionStatus",readOnly:!0})],t.prototype,"connectionStatus",void 0),(0,s._)([(0,n.Cb)({type:C.Z})],t.prototype,"filter",void 0),t=(0,s._)([(0,a.j)("esri.layers.mixins.StreamLayerView")],t),t};let F=class extends(O((0,w.R)((0,k.A)(I.Z)))){constructor(){super(...arguments),this.type="stream-3d",this.updatePolicy=S.jq.ASYNC,this.hasZ=!0,this.hasM=!1}initialize(){this.handles.add((0,o.YP)((()=>this.suspended),(e=>{this.controller&&(e?this.controller.pauseStream():this.controller.resumeStream())})))}get connectionError(){const e=this.get("controller.connection.errorString");if(e)return new i.Z("stream-controller",e)}createQuery(){return new v.Z({outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference})}queryLatestObservations(e,t){return this.queryEngine.executeQueryForLatestObservations(this._ensureQuery(e),t?.signal)}createController(){return new b({layer:this.layer,layerView:this})}beforeSetController(){}};(0,s._)([(0,n.Cb)({readOnly:!0})],F.prototype,"updatePolicy",void 0),(0,s._)([(0,n.Cb)({readOnly:!0})],F.prototype,"connectionError",null),(0,s._)([(0,n.Cb)()],F.prototype,"controller",void 0),(0,s._)([(0,n.Cb)({readOnly:!0})],F.prototype,"hasZ",void 0),(0,s._)([(0,n.Cb)({readOnly:!0})],F.prototype,"hasM",void 0),F=(0,s._)([(0,a.j)("esri.views.3d.layers.StreamLayerView3D")],F);const x=F}}]);