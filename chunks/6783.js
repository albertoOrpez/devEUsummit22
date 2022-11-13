"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[6783],{19654:(e,s,i)=>{i.d(s,{A:()=>d});var t=i(36663),a=i(23148),n=i(78668),l=i(76868),r=i(81977),o=(i(7753),i(39994),i(7283),i(40266)),y=i(64862);const d=e=>{let s=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),(0,y.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,s=e.signal;this.handles.add((0,a.kB)((()=>e.abort()))),await(0,l.N1)((()=>this.view.defaultsFromMap?.heightModelInfoReady),s),(0,n.k_)(s);const i=(0,y.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!e||!e.minScale||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return s&&s.minScale&&s.maxScale&&s.minScale<s.maxScale&&(e.outsideScaleRange=!0),e}};return(0,t._)([(0,r.Cb)()],s.prototype,"view",void 0),(0,t._)([(0,r.Cb)()],s.prototype,"slicePlaneEnabled",void 0),s=(0,t._)([(0,o.j)("esri.views.3d.layers.LayerView3D")],s),s}},46783:(e,s,i)=>{i.r(s),i.d(s,{default:()=>c});var t=i(36663),a=i(70375),n=i(61681),l=i(78668),r=i(76868),o=i(81977),y=i(40266),d=i(19654),h=i(26216);const p="analysis-view-handles";let u=class extends((0,d.A)(h.Z)){constructor(e){super(e),this.type="line-of-sight-3d",this._analysisModules={"line-of-sight":null}}initialize(){this.handles.add((0,r.YP)((()=>this.layer.analysis),(e=>{this._destroyAnalysisView(),(0,n.pC)(e)&&this._createAnalysisView(e)}),r.tX),p)}destroy(){this.handles.remove(p),this._destroyAnalysisView()}async whenAnalysisView(){if((0,n.pC)(this.analysisView))return this.analysisView;if((0,n.pC)(this._createAnalysisViewTask))return this._createAnalysisViewTask.promise;throw new a.Z("layerview:no-analysisview-for-analysis","The analysis has not been set on the LineOfSightLayer of this layer view")}isUpdating(){return(0,n.pC)(this._createAnalysisViewTask)||(0,n.pC)(this.analysisView)&&this.analysisView.updating}_createAnalysisView(e){const s=(0,l.vr)((async i=>(this.analysisView=await this._createAnalysisViewPromise(e,i),this._createAnalysisViewTask===s&&(this._createAnalysisViewTask=null),this.analysisView)));this._createAnalysisViewTask=s}_destroyAnalysisView(){this.analysisView=(0,n.SC)(this.analysisView),this._createAnalysisViewTask=(0,n.IM)(this._createAnalysisViewTask)}async _createAnalysisViewPromise(e,s){const i=e.type;let t=this._analysisModules[i];if((0,n.Wi)(t)){const e=await this._loadAnalysisModule(i);this._analysisModules[i]=e,t=e}const r=new t.default({analysis:e,view:this.view,parent:this});if(await r.when(),(0,l.Hc)(s))throw r.destroy(),new a.Z("layerview:no-analysisview-for-analysis","The analysis has not been added to the LineOfSightLayer of this layer view",{analysis:e});return r}_loadAnalysisModule(e){return"line-of-sight"===e?Promise.all([i.e(3241),i.e(9457),i.e(133)]).then(i.bind(i,70133)):null}};(0,t._)([(0,o.Cb)()],u.prototype,"type",void 0),(0,t._)([(0,o.Cb)()],u.prototype,"layer",void 0),(0,t._)([(0,o.Cb)()],u.prototype,"analysisView",void 0),(0,t._)([(0,o.Cb)()],u.prototype,"_createAnalysisViewTask",void 0),u=(0,t._)([(0,y.j)("esri.views.3d.layers.LineOfSightLayerView3D")],u);const c=u},26216:(e,s,i)=>{i.d(s,{Z:()=>c});var t=i(36663),a=i(53443),n=i(31355),l=i(53280),r=i(86618),o=i(13802),y=i(61681),d=i(64189),h=i(81977),p=(i(7753),i(39994),i(7283),i(40266));let u=class extends((0,l.p)((0,r.IG)((0,d.v)(n.Z.EventedMixin(a.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const s=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";o.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${s}')`,e)}}))}get fullOpacity(){return(0,y.Pt)(this.get("layer.opacity"),1)*(0,y.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,t._)([(0,h.Cb)()],u.prototype,"fullOpacity",null),(0,t._)([(0,h.Cb)()],u.prototype,"layer",void 0),(0,t._)([(0,h.Cb)()],u.prototype,"parent",void 0),(0,t._)([(0,h.Cb)({readOnly:!0})],u.prototype,"suspended",null),(0,t._)([(0,h.Cb)({readOnly:!0})],u.prototype,"suspendInfo",null),(0,t._)([(0,h.Cb)({readOnly:!0})],u.prototype,"legendEnabled",null),(0,t._)([(0,h.Cb)({type:Boolean,readOnly:!0})],u.prototype,"updating",null),(0,t._)([(0,h.Cb)({readOnly:!0})],u.prototype,"updatingProgress",null),(0,t._)([(0,h.Cb)()],u.prototype,"visible",null),(0,t._)([(0,h.Cb)()],u.prototype,"view",void 0),u=(0,t._)([(0,p.j)("esri.views.layers.LayerView")],u);const c=u}}]);