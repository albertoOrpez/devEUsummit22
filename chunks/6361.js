"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[6361],{66361:(e,a,r)=>{r.r(a),r.d(a,{fetchFeatureService:()=>b,fromUrl:()=>u});var t=r(66341),n=r(70375),s=r(61681),l=r(3466),i=r(20692),y=r(92557);async function u(e){const a=e.properties?.customParameters,t=await async function(e,a){let r=(0,i.Qc)(e);if((0,s.Wi)(r)&&(r=await c(e,a)),(0,s.Wi)(r))throw new n.Z("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:t,sublayer:l}=r;let u;const o={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(t){case"MapServer":u=null!=l?"FeatureLayer":async function(e,a){return(await h(e,{customParameters:a})).tileInfo}(e,a).then((e=>e?"TileLayer":"MapImageLayer"));break;case"ImageServer":u=h(e,{customParameters:a}).then((e=>{const a=e.tileInfo&&e.tileInfo.format;return e.tileInfo?"LERC"!==a?.toUpperCase()||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"}));break;case"SceneServer":u=h(r.url.path,{customParameters:a}).then((e=>{if(e){if("Voxel"===e?.layerType)return"VoxelLayer";if(e?.layers&&Array.isArray(e.layers)&&e.layers.length>0){const a={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},r=e.layers[0]?.layerType;if(null!=a[r])return a[r]}}return"SceneLayer"}));break;default:u=o[t]}const d="FeatureServer"===t,f={parsedUrl:r,Constructor:null,layerOrTableId:d?l:null,sublayerIds:null,tableIds:null},w=await u;if({FeatureLayer:!0,SceneLayer:!0}[w]&&null==l){const r=await async function(e,a,r){let t,n=!1;if("FeatureServer"===a){const a=await b(e,{customParameters:r});n=!!a.layersJSON,t=a.layersJSON||a.serviceJSON}else t=await h(e,{customParameters:r});const s=t?.layers,l=t?.tables;return{layerIds:s?.map((e=>e.id)).reverse()||[],tableIds:l?.map((e=>e.id)).reverse()||[],layerInfos:n?s:[],tableInfos:n?l:[]}}(e,t,a);d&&(f.sublayerInfos=r.layerInfos,f.tableInfos=r.tableInfos),1!==r.layerIds.length+r.tableIds.length?(f.sublayerIds=r.layerIds,f.tableIds=r.tableIds):d&&(f.layerOrTableId=r.layerIds[0]??r.tableIds[0],f.sourceJSON=r.layerInfos[0]??r.tableInfos[0])}return f.Constructor=await async function(e){return(0,y.T[e])()}(w),f}(e.url,a),l={...e.properties,url:e.url};if(!t.sublayerIds)return null!=t.layerOrTableId&&(l.layerId=t.layerOrTableId,l.sourceJSON=t.sourceJSON),new t.Constructor(l);const u=new(0,(await r.e(6753).then(r.bind(r,56753))).default)({title:t.parsedUrl.title});return function(e,a,r){function t(e,t){const n={...r,layerId:e,sublayerTitleMode:"service-name"};return(0,s.pC)(t)&&(n.sourceJSON=t),new a.Constructor(n)}a.sublayerIds.forEach((r=>{const n=t(r,o(a.sublayerInfos,r));e.add(n)})),a.tableIds.forEach((r=>{const n=t(r,o(a.tableInfos,r));e.tables.add(n)}))}(u,t,l),u}function o(e,a){return e?e.find((e=>e.id===a)):null}async function c(e,a){const r=await h(e,{customParameters:a});let t=null,n=null;const y=r.type;if("Feature Layer"===y||"Table"===y?(t="FeatureServer",n=r.id):"indexedVector"===y?t="VectorTileServer":r.hasOwnProperty("mapName")?t="MapServer":r.hasOwnProperty("bandCount")&&r.hasOwnProperty("pixelSizeX")?t="ImageServer":r.hasOwnProperty("maxRecordCount")&&r.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":r.hasOwnProperty("streamUrls")?t="StreamServer":d(r)?(t="SceneServer",n=r.id):r.hasOwnProperty("layers")&&d(r.layers?.[0])&&(t="SceneServer"),!t)return null;const u=null!=n?(0,i.DR)(e):null;return{title:(0,s.pC)(u)&&r.name||(0,l.vt)(e),serverType:t,sublayer:n,url:{path:(0,s.pC)(u)?u.serviceUrl:(0,l.mN)(e).path}}}function d(e){return e?.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}function f(e){return!e.type||"Feature Layer"===e.type}async function b(e,a){let r=await h(e,a);r=r||{},r.layers=r.layers?.filter(f)||[];const t={serviceJSON:r};if(r.currentVersion<10.5)return t;const n=await h(e+"/layers",a);return t.layersJSON={layers:n?.layers?.filter(f)||[],tables:n?.tables||[]},t}async function h(e,a){return(await(0,t.default)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}})).data}},92557:(e,a,r)=>{r.d(a,{T:()=>t});const t={BingMapsLayer:async()=>(await r.e(1968).then(r.bind(r,31968))).default,BuildingSceneLayer:async()=>(await r.e(3833).then(r.bind(r,23833))).default,CSVLayer:async()=>(await r.e(9849).then(r.bind(r,89849))).default,ElevationLayer:async()=>(await r.e(8558).then(r.bind(r,98558))).default,FeatureLayer:async()=>(await Promise.resolve().then(r.bind(r,21187))).default,GroupLayer:async()=>(await r.e(6753).then(r.bind(r,56753))).default,GeoRSSLayer:async()=>(await r.e(4417).then(r.bind(r,84417))).default,GeoJSONLayer:async()=>(await r.e(1655).then(r.bind(r,81655))).default,ImageryLayer:async()=>(await Promise.all([r.e(1329),r.e(7359),r.e(8927),r.e(1825)]).then(r.bind(r,1825))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(1329),r.e(7359),r.e(8927),r.e(7107),r.e(7974)]).then(r.bind(r,47974))).default,IntegratedMeshLayer:async()=>(await r.e(6172).then(r.bind(r,6172))).default,KMLLayer:async()=>(await r.e(711).then(r.bind(r,60711))).default,LineOfSightLayer:async()=>(await r.e(9892).then(r.bind(r,69892))).default,MapImageLayer:async()=>(await Promise.all([r.e(7153),r.e(9420)]).then(r.bind(r,69420))).default,MapNotesLayer:async()=>(await r.e(849).then(r.bind(r,50849))).default,OGCFeatureLayer:async()=>(await r.e(3963).then(r.bind(r,53963))).default,OpenStreetMapLayer:async()=>(await r.e(3206).then(r.bind(r,81388))).default,PointCloudLayer:async()=>(await r.e(3108).then(r.bind(r,73108))).default,RouteLayer:async()=>(await Promise.all([r.e(3970),r.e(6033)]).then(r.bind(r,56033))).default,SceneLayer:async()=>(await Promise.resolve().then(r.bind(r,74606))).default,StreamLayer:async()=>(await r.e(5609).then(r.bind(r,75609))).default,TileLayer:async()=>(await Promise.all([r.e(7153),r.e(5369)]).then(r.bind(r,75369))).default,UnknownLayer:async()=>(await r.e(81).then(r.bind(r,40081))).default,UnsupportedLayer:async()=>(await r.e(4864).then(r.bind(r,74864))).default,VectorTileLayer:async()=>(await Promise.all([r.e(3043),r.e(5202)]).then(r.bind(r,19410))).default,VoxelLayer:async()=>(await r.e(4164).then(r.bind(r,94164))).default,WebTileLayer:async()=>(await r.e(9859).then(r.bind(r,89859))).default,WFSLayer:async()=>(await r.e(4420).then(r.bind(r,84420))).default,WMSLayer:async()=>(await r.e(1936).then(r.bind(r,61936))).default,WMTSLayer:async()=>(await r.e(9306).then(r.bind(r,9306))).default}}}]);