"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[3833],{23833:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Ce});var i=r(36663),s=r(41831),o=r(81739),l=r(70375),n=r(67134),a=r(63592),p=r(13802),y=r(61681),d=r(15842),u=r(78668),c=r(3466),h=r(81977),b=(r(7283),r(34248)),g=r(40266),f=r(14685),v=r(38481),m=r(2556),_=r(71314),w=r(91223),C=r(87232),S=r(43330),j=r(18241),O=r(95874),x=r(69877),I=r(82064),F=r(12173);r(7753),r(39994);let L=class extends I.wq{constructor(){super(...arguments),this.type=null}};(0,i._)([(0,h.Cb)({type:String,readOnly:!0,json:{write:!0}})],L.prototype,"type",void 0),L=(0,i._)([(0,g.j)("esri.layers.support.BuildingFilterAuthoringInfo")],L);const T=L;var Z;let B=Z=class extends I.wq{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new Z({filterType:this.filterType,filterValues:(0,n.d9)(this.filterValues)})}};(0,i._)([(0,h.Cb)({type:String,json:{write:!0}})],B.prototype,"filterType",void 0),(0,i._)([(0,h.Cb)({type:[String],json:{write:!0}})],B.prototype,"filterValues",void 0),B=Z=(0,i._)([(0,g.j)("esri.layers.support.BuildingFilterAuthoringInfoType")],B);const q=B;var E;const A=s.Z.ofType(q);let P=E=class extends I.wq{clone(){return new E({filterTypes:(0,n.d9)(this.filterTypes)})}};(0,i._)([(0,h.Cb)({type:A,json:{write:!0}})],P.prototype,"filterTypes",void 0),P=E=(0,i._)([(0,g.j)("esri.layers.support.BuildingFilterAuthoringInfoBlock")],P);const R=P;var N;const k=s.Z.ofType(R);let M=N=class extends T{constructor(){super(...arguments),this.type="checkbox"}clone(){return new N({filterBlocks:(0,n.d9)(this.filterBlocks)})}};(0,i._)([(0,h.Cb)({type:["checkbox"]})],M.prototype,"type",void 0),(0,i._)([(0,h.Cb)({type:k,json:{write:!0}})],M.prototype,"filterBlocks",void 0),M=N=(0,i._)([(0,g.j)("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],M);const Q=M;let U=class extends I.wq{};(0,i._)([(0,h.Cb)({readOnly:!0,json:{read:!1}})],U.prototype,"type",void 0),U=(0,i._)([(0,g.j)("esri.layers.support.BuildingFilterMode")],U);const D=U;var V;let K=V=class extends D{constructor(){super(...arguments),this.type="solid"}clone(){return new V}};(0,i._)([(0,h.Cb)({type:["solid"],readOnly:!0,json:{write:!0}})],K.prototype,"type",void 0),K=V=(0,i._)([(0,g.j)("esri.layers.support.BuildingFilterModeSolid")],K);const J=K;var G,H=r(79438),W=r(44874);let z=G=class extends D{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new G({edges:(0,n.d9)(this.edges)})}};(0,i._)([(0,H.J)({wireFrame:"wire-frame"})],z.prototype,"type",void 0),(0,i._)([(0,h.Cb)(W.Z)],z.prototype,"edges",void 0),z=G=(0,i._)([(0,g.j)("esri.layers.support.BuildingFilterModeWireFrame")],z);const X=z;var Y;let $=Y=class extends D{constructor(){super(...arguments),this.type="x-ray"}clone(){return new Y}};(0,i._)([(0,h.Cb)({type:["x-ray"],readOnly:!0,json:{write:!0}})],$.prototype,"type",void 0),$=Y=(0,i._)([(0,g.j)("esri.layers.support.BuildingFilterModeXRay")],$);const ee=$;var te;const re={nonNullable:!0,types:{key:"type",base:D,typeMap:{solid:J,"wire-frame":X,"x-ray":ee}},json:{read:e=>{switch(e&&e.type){case"solid":return J.fromJSON(e);case"wireFrame":return X.fromJSON(e);case"x-ray":return ee.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let ie=te=class extends I.wq{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new J,this.title=""}clone(){return new te({filterExpression:this.filterExpression,filterMode:(0,n.d9)(this.filterMode),title:this.title})}};(0,i._)([(0,h.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],ie.prototype,"filterExpression",void 0),(0,i._)([(0,h.Cb)(re)],ie.prototype,"filterMode",void 0),(0,i._)([(0,h.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],ie.prototype,"title",void 0),ie=te=(0,i._)([(0,g.j)("esri.layers.support.BuildingFilterBlock")],ie);const se=ie;var oe;const le=s.Z.ofType(se);let ne=oe=class extends I.wq{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=(0,F.D)(),this.name=null}clone(){return new oe({description:this.description,filterBlocks:(0,n.d9)(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:(0,n.d9)(this.filterAuthoringInfo)})}};(0,i._)([(0,h.Cb)({type:String,json:{write:!0}})],ne.prototype,"description",void 0),(0,i._)([(0,h.Cb)({type:le,json:{write:{enabled:!0,isRequired:!0}}})],ne.prototype,"filterBlocks",void 0),(0,i._)([(0,h.Cb)({types:{key:"type",base:T,typeMap:{checkbox:Q}},json:{read:e=>"checkbox"===(e&&e.type)?Q.fromJSON(e):null,write:!0}})],ne.prototype,"filterAuthoringInfo",void 0),(0,i._)([(0,h.Cb)({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],ne.prototype,"id",void 0),(0,i._)([(0,h.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],ne.prototype,"name",void 0),ne=oe=(0,i._)([(0,g.j)("esri.layers.support.BuildingFilter")],ne);const ae=ne;var pe=r(66341),ye=r(68309),de=r(64189);const ue=p.Z.getLogger("esri.layers.support.BuildingSummaryStatistics");let ce=class extends I.wq{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};(0,i._)([(0,h.Cb)({type:String})],ce.prototype,"fieldName",void 0),(0,i._)([(0,h.Cb)({type:String})],ce.prototype,"modelName",void 0),(0,i._)([(0,h.Cb)({type:String})],ce.prototype,"label",void 0),(0,i._)([(0,h.Cb)({type:Number})],ce.prototype,"min",void 0),(0,i._)([(0,h.Cb)({type:Number})],ce.prototype,"max",void 0),(0,i._)([(0,h.Cb)({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],ce.prototype,"mostFrequentValues",void 0),(0,i._)([(0,h.Cb)({type:[Number]})],ce.prototype,"subLayerIds",void 0),ce=(0,i._)([(0,g.j)("esri.layers.support.BuildingFieldStatistics")],ce);let he=class extends(ye.Z.LoadableMixin((0,de.v)(I.wq))){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(ue.error("building summary statistics are not loaded"),null)}load(e){const t=(0,y.pC)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}async _fetchService(e){const t=(await(0,pe.default)(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"})}};(0,i._)([(0,h.Cb)({constructOnly:!0,type:String})],he.prototype,"url",void 0),(0,i._)([(0,h.Cb)({readOnly:!0,type:[ce],json:{read:{source:"summary"}}})],he.prototype,"fields",null),he=(0,i._)([(0,g.j)("esri.layers.support.BuildingSummaryStatistics")],he);const be=he;var ge=r(51599),fe=r(31906);const ve=p.Z.getLogger("esri.layers.BuildingSceneLayer"),me=s.Z.ofType(ae),_e=(0,n.d9)(_.Z.sublayersProperty);_e.json.origins["web-scene"]={type:[m.Z],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},_e.json.origins["portal-item"]={type:[m.Z],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let we=class extends((0,x.Vt)((0,C.Y)((0,S.q)((0,j.I)((0,O.M)((0,d.R)((0,w.V)(v.Z)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new o.Z({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new me,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e}destroy(){this.allSublayers.destroy()}readSublayers(e,t,r){const i=_.Z.readSublayers(e,t,r);return _.Z.forEachSublayer(i,(e=>e.layer=this)),this.sublayerOverrides&&(this.applySublayerOverrides(i,this.sublayerOverrides),this.sublayerOverrides=null),i}applySublayerOverrides(e,{overrides:t,context:r}){_.Z.forEachSublayer(e,(e=>e.read(t.get(e.id),r)))}readSublayerOverrides(e,t){const r=new Map;for(const i of e)null!=i&&"object"==typeof i&&"number"==typeof i.id?r.set(i.id,i):t.messages.push(new l.Z("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:i}));return{overrides:r,context:t}}writeSublayerOverrides(e,t,r){const i=[];_.Z.forEachSublayer(this.sublayers,(e=>{const t=e.write({},r);Object.keys(t).length>1&&i.push(t)})),i.length>0&&(t.sublayers=i)}writeUnappliedOverrides(e,t){t.sublayers=[],e.overrides.forEach((e=>{t.sublayers.push((0,n.d9)(e))}))}write(e,t){return e=super.write(e,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,t):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,t){if(super.read(e,t),t&&("web-scene"===t.origin||"portal-item"===t.origin)&&null!=e&&Array.isArray(e.sublayers)){const r=this.readSublayerOverrides(e.sublayers,t);this.sublayers?this.applySublayerOverrides(this.sublayers,r):this.sublayerOverrides=r}}readSummaryStatistics(e,t){if("string"==typeof t.statisticsHRef){const e=(0,c.v_)(this.parsedUrl.path,t.statisticsHRef);return new be({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const t=(0,y.pC)(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(u.r9).then((()=>this._fetchService(t))).then((()=>this._fetchAssociatedFeatureService(t)));return this.addResolvingPromise(r),Promise.resolve(this)}loadAll(){return(0,a.G)(this,(e=>{_.Z.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,t){return this._debouncedSaveOperations(x.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(x.xp.SAVE,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new l.Z("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&ve.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&ve.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const t=new fe.W(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await t.fetchPortalItem()}catch(e){ve.warn("Associated feature service item could not be loaded",e)}}};(0,i._)([(0,h.Cb)({type:["BuildingSceneLayer"]})],we.prototype,"operationalLayerType",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],we.prototype,"allSublayers",void 0),(0,i._)([(0,h.Cb)(_e)],we.prototype,"sublayers",void 0),(0,i._)([(0,b.r)("service","sublayers")],we.prototype,"readSublayers",null),(0,i._)([(0,h.Cb)({type:me,nonNullable:!0,json:{write:!0}})],we.prototype,"filters",void 0),(0,i._)([(0,h.Cb)({type:String,json:{write:!0}})],we.prototype,"activeFilterId",void 0),(0,i._)([(0,h.Cb)({readOnly:!0,type:be})],we.prototype,"summaryStatistics",void 0),(0,i._)([(0,b.r)("summaryStatistics",["statisticsHRef"])],we.prototype,"readSummaryStatistics",null),(0,i._)([(0,h.Cb)({type:[String],json:{read:!1}})],we.prototype,"outFields",void 0),(0,i._)([(0,h.Cb)(ge.vg)],we.prototype,"fullExtent",void 0),(0,i._)([(0,h.Cb)({type:["show","hide","hide-children"]})],we.prototype,"listMode",void 0),(0,i._)([(0,h.Cb)((0,ge.Lx)(f.Z))],we.prototype,"spatialReference",void 0),(0,i._)([(0,h.Cb)(ge.PV)],we.prototype,"elevationInfo",null),(0,i._)([(0,h.Cb)({json:{read:!1},readOnly:!0})],we.prototype,"type",void 0),(0,i._)([(0,h.Cb)()],we.prototype,"associatedFeatureServiceItem",void 0),we=(0,i._)([(0,g.j)("esri.layers.BuildingSceneLayer")],we);const Ce=we},2556:(e,t,r)=>{r.d(t,{Z:()=>q});var i=r(36663),s=r(80020),o=(r(86004),r(45510),r(16192),r(71297),r(878),r(22836),r(50172),r(25634),r(72506),r(54021)),l=r(66341),n=r(70375),a=r(25709),p=r(68309),y=r(13802),d=r(61681),u=r(64189),c=r(81977),h=(r(7753),r(39994),r(7283),r(79438)),b=r(34248),g=r(40266),f=r(91772),v=r(14685),m=r(21187),_=r(96698),w=r(31484),C=r(51599),S=r(89076),j=r(28790),O=r(40909),x=r(97304),I=r(14136),F=r(10171),L=r(74710);const T=y.Z.getLogger("esri.layers.buildingSublayers.BuildingComponentSublayer"),Z=(0,S.v)();let B=class extends(p.Z.LoadableMixin((0,u.v)(_.Z))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.fields=null,this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl.path}/sublayers/${this.id}`,query:this.layer.parsedUrl.query}:null}get fieldsIndex(){return new j.Z(this.fields)}readAssociatedLayer(e,t){const r=this.layer.associatedFeatureServiceItem,i=t.associatedLayerID;return(0,d.pC)(r)&&"number"==typeof i?new m.default({portalItem:r,layerId:i}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return(0,d.pC)(this.associatedLayer)?this.associatedLayer.displayField:null}get apiKey(){return this.layer.apiKey}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const t=(0,d.pC)(e)?e.signal:null,r=this._fetchService(t).then((()=>{this.indexInfo=(0,O.T)(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,T,t)}));return this.addResolvingPromise(r),Promise.resolve(this)}createPopupTemplate(e){return(0,F.eZ)(this,e)}async _fetchService(e){const t=(await(0,l.default)(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getFeatureType(t?.feature)?.domains?.[e];return r&&"inherited"!==r.type?r:this.getField(e)?.domain??null}getFeatureType(e){return e&&(0,d.pC)(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return(0,d.pC)(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return(0,d.pC)(this.associatedLayer)?this.associatedLayer.typeIdField:null}get geometryType(){return"3d-object"===this.layerType?"mesh":"point"}get profile(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=(0,d.pC)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:w.C,{query:t,data:{supportsZ:r,supportsM:i,isVersioned:s}}=e;return{query:t,data:{supportsZ:r,supportsM:i,isVersioned:s}}}createQuery(){const e=new I.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this.layer,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:(0,d.pC)(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return(0,d.pC)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),(0,d.Wi)(this.associatedLayer))throw new n.Z("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new n.Z("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};(0,i._)([(0,c.Cb)({readOnly:!0})],B.prototype,"parsedUrl",null),(0,i._)([(0,c.Cb)({type:x.U4,readOnly:!0})],B.prototype,"nodePages",void 0),(0,i._)([(0,c.Cb)({type:[x.QI],readOnly:!0})],B.prototype,"materialDefinitions",void 0),(0,i._)([(0,c.Cb)({type:[x.Yh],readOnly:!0})],B.prototype,"textureSetDefinitions",void 0),(0,i._)([(0,c.Cb)({type:[x.H3],readOnly:!0})],B.prototype,"geometryDefinitions",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],B.prototype,"serviceUpdateTimeStamp",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],B.prototype,"store",void 0),(0,i._)([(0,c.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],B.prototype,"rootNode",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],B.prototype,"attributeStorageInfo",void 0),(0,i._)([(0,c.Cb)(Z.fields)],B.prototype,"fields",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],B.prototype,"fieldsIndex",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:m.default})],B.prototype,"associatedLayer",void 0),(0,i._)([(0,b.r)("service","associatedLayer",["associatedLayerID"])],B.prototype,"readAssociatedLayer",null),(0,i._)([(0,c.Cb)(Z.outFields)],B.prototype,"outFields",void 0),(0,i._)([(0,c.Cb)({type:String,readOnly:!0})],B.prototype,"objectIdField",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:String,json:{read:!1}})],B.prototype,"displayField",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:String})],B.prototype,"apiKey",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:f.Z})],B.prototype,"fullExtent",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:v.Z})],B.prototype,"spatialReference",null),(0,i._)([(0,c.Cb)({readOnly:!0})],B.prototype,"version",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:L.ZP})],B.prototype,"elevationInfo",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:Number})],B.prototype,"minScale",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:Number})],B.prototype,"maxScale",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:Number})],B.prototype,"effectiveScaleRange",null),(0,i._)([(0,c.Cb)({type:["hide","show"],json:{write:!0}})],B.prototype,"listMode",void 0),(0,i._)([(0,c.Cb)({types:o.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],B.prototype,"renderer",void 0),(0,i._)([(0,c.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],B.prototype,"definitionExpression",void 0),(0,i._)([(0,c.Cb)(C.C_)],B.prototype,"popupEnabled",void 0),(0,i._)([(0,c.Cb)({type:s.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],B.prototype,"popupTemplate",void 0),(0,i._)([(0,c.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],B.prototype,"normalReferenceFrame",void 0),(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],B.prototype,"defaultPopupTemplate",null),(0,i._)([(0,c.Cb)()],B.prototype,"types",null),(0,i._)([(0,c.Cb)()],B.prototype,"typeIdField",null),(0,i._)([(0,c.Cb)({json:{write:!1}}),(0,h.J)(new a.X({"3DObject":"3d-object",Point:"point"}))],B.prototype,"layerType",void 0),(0,i._)([(0,c.Cb)()],B.prototype,"geometryType",null),(0,i._)([(0,c.Cb)()],B.prototype,"profile",null),(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],B.prototype,"capabilities",null),B=(0,i._)([(0,g.j)("esri.layers.buildingSublayers.BuildingComponentSublayer")],B);const q=B},71314:(e,t,r)=>{r.d(t,{Z:()=>g});var i,s=r(36663),o=r(41831),l=r(63592),n=r(96863),a=r(81977),p=(r(7753),r(39994),r(7283),r(40266)),y=r(2556),d=r(96698);const u={type:o.Z,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:c}}},read:!1}};function c(e,t,r){if(e&&Array.isArray(e))return new o.Z(e.map((e=>{const t=function(e){return"group"===e.layerType?h:y.Z}(e);if(t){const i=new t;return i.read(e,r),i}r&&r.messages&&e&&r.messages.push(new n.Z("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r}))})))}let h=i=class extends d.Z{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return(0,l.w)(this,(e=>i.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)}))))}};var b;(0,s._)([(0,a.Cb)({type:["hide","show","hide-children"],json:{write:!0}})],h.prototype,"listMode",void 0),(0,s._)([(0,a.Cb)(u)],h.prototype,"sublayers",void 0),h=i=(0,s._)([(0,p.j)("esri.layers.buildingSublayers.BuildingGroupSublayer")],h),(b=h||(h={})).sublayersProperty=u,b.readSublayers=c,b.forEachSublayer=function e(t,r){t.forEach((t=>{r(t),"building-group"===t.type&&e(t.sublayers,r)}))};const g=h},96698:(e,t,r)=>{r.d(t,{Z:()=>u});var i=r(36663),s=r(86618),o=r(15842),l=r(81977),n=(r(7753),r(39994),r(7283)),a=r(34248),p=r(40266),y=r(51599);let d=class extends((0,s.IG)(o.w)){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""}readIdOnlyOnce(e){return-1!==this.id?this.id:"number"==typeof e?e:void 0}};(0,i._)([(0,l.Cb)({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],d.prototype,"title",void 0),(0,i._)([(0,a.r)("service","title",["alias","name"])],d.prototype,"readTitle",null),(0,i._)([(0,l.Cb)()],d.prototype,"layer",void 0),(0,i._)([(0,l.Cb)({type:n.z8,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],d.prototype,"id",void 0),(0,i._)([(0,a.r)("service","id")],d.prototype,"readIdOnlyOnce",null),(0,i._)([(0,l.Cb)((0,y.Lx)(String))],d.prototype,"modelName",void 0),(0,i._)([(0,l.Cb)((0,y.Lx)(Boolean))],d.prototype,"isEmpty",void 0),(0,i._)([(0,l.Cb)({type:Boolean,json:{name:"visibility",write:!0}})],d.prototype,"visible",void 0),(0,i._)([(0,l.Cb)({type:Number,json:{write:!0}})],d.prototype,"opacity",void 0),d=(0,i._)([(0,p.j)("esri.layers.buildingSublayers.BuildingSublayer")],d);const u=d}}]);