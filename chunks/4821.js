"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[4821],{84821:(e,t,r)=>{r.r(t),r.d(t,{FeatureCollectionSnappingSource:()=>l});var n=r(36663),o=r(53443),a=r(61681),i=r(81977),c=(r(7753),r(39994),r(7283),r(40266)),s=r(84713);let l=class extends o.Z{constructor(e){super(e)}get availability(){return 1}refresh(){}async fetchCandidates(e,t){const r=this.layerSource.layer.source;return r.querySnapping?(await r.querySnapping({distance:e.distance,point:e.coordinateHelper.vectorToPoint(e.point).toJSON(),types:e.types,query:(0,a.pC)(e.filter)?e.filter.createQuery().toJSON():{where:"1=1"}},{signal:t})).candidates.map((t=>(0,s.X)(t,e.coordinateHelper,e.elevationInfo))):[]}};(0,n._)([(0,i.Cb)({constructOnly:!0})],l.prototype,"layerSource",void 0),(0,n._)([(0,i.Cb)({readOnly:!0})],l.prototype,"availability",null),l=(0,n._)([(0,c.j)("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],l)},84713:(e,t,r)=>{r.d(t,{X:()=>a});var n=r(46455),o=r(10739);function a(e,t,r){switch(e.type){case"edge":return new n.L({coordinateHelper:t,edgeStart:t.pointToVector(e.start),edgeEnd:t.pointToVector(e.end),targetPoint:t.pointToVector(e.target),objectId:e.objectId,elevationInfo:r});case"vertex":return new o.x({coordinateHelper:t,targetPoint:t.pointToVector(e.target),objectId:e.objectId,elevationInfo:r})}}}}]);