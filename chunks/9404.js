"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[9404],{89626:(e,t,i)=>{i.d(t,{Fp:()=>l,RL:()=>f,UV:()=>c,bk:()=>s});var o=i(73534),r=i(53736),n=i(10927);function l(e){if(!e)return null;switch(e.type){case"CIMPointSymbol":{const t=e.symbolLayers;return t&&1===t.length?l(t[0]):null}case"CIMVectorMarker":{const t=e.markerGraphics;if(!t||1!==t.length)return null;const i=t[0];if(!i)return null;const o=i.geometry;if(!o)return null;const r=i.symbol;return!r||"CIMPolygonSymbol"!==r.type&&"CIMLineSymbol"!==r.type||r.symbolLayers?.some((e=>!!e.effects))?null:{geom:o,asFill:"CIMPolygonSymbol"===r.type}}case"sdf":return{geom:e.geom,asFill:e.asFill}}return null}function a(e){let t=1/0,i=-1/0,o=1/0,r=-1/0;for(const n of e)for(const e of n)e[0]<t&&(t=e[0]),e[0]>i&&(i=e[0]),e[1]<o&&(o=e[1]),e[1]>r&&(r=e[1]);return[t,o,i,r]}function s(e){return e?e.rings?a(e.rings):e.paths?a(e.paths):(0,r.YX)(e)?[e.xmin,e.ymin,e.xmax,e.ymax]:null:null}function c(e,t,i,o,r){const[n,l,a,s]=e;if(a<n||s<l)return[0,0,0];const c=a-n,f=s-l,m=Math.floor(31.5),u=(128-2*(m+1))/Math.max(c,f),p=Math.round(c*u)+2*m,h=Math.round(f*u)+2*m;let y=1;t&&(y=h/u/(t.ymax-t.ymin));let g=0,d=0;if(o)if(r){if(t&&i&&t.ymax-t.ymin>0){const e=(t.xmax-t.xmin)/(t.ymax-t.ymin);g=o.x/(i*e),d=o.y/i}}else g=o.x,d=o.y;return g=.5*(t.xmax+t.xmin)+g*(t.xmax-t.xmin),d=.5*(t.ymax+t.ymin)+d*(t.ymax-t.ymin),g-=n,d-=l,g*=u,d*=u,g+=m,d+=m,[y,g/p-.5,-(d/h-.5)]}function f(e){const t=function(e){return e?e.rings?e.rings:e.paths?e.paths:void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax?[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]:null:null}(e.geom),i=function(e){let t=1/0,i=-1/0,o=1/0,r=-1/0;for(const n of e)for(const e of n)e[0]<t&&(t=e[0]),e[0]>i&&(i=e[0]),e[1]<o&&(o=e[1]),e[1]>r&&(r=e[1]);return new n.Z(t,o,i-t,r-o)}(t),o=Math.floor(31.5),r=(128-2*(o+1))/Math.max(i.width,i.height),l=Math.round(i.width*r)+2*o,a=Math.round(i.height*r)+2*o,s=[];for(const n of t)if(n&&n.length>1){const t=[];for(const l of n){let[n,a]=l;n-=i.x,a-=i.y,n*=r,a*=r,n+=o-.5,a+=o-.5,e.asFill?t.push([n,a]):t.push([Math.round(n),Math.round(a)])}if(e.asFill){const e=t.length-1;t[0][0]===t[e][0]&&t[0][1]===t[e][1]||t.push(t[0])}s.push(t)}const c=function(e,t,i,o){const r=t*i,n=new Array(r),l=o*o+1;for(let e=0;e<r;++e)n[e]=l;for(const r of e){const e=r.length;for(let l=1;l<e;++l){const e=r[l-1],a=r[l];let s,c,f,m;e[0]<a[0]?(s=e[0],c=a[0]):(s=a[0],c=e[0]),e[1]<a[1]?(f=e[1],m=a[1]):(f=a[1],m=e[1]);let u=Math.floor(s)-o,p=Math.floor(c)+o,h=Math.floor(f)-o,y=Math.floor(m)+o;u<0&&(u=0),p>t&&(p=t),h<0&&(h=0),y>i&&(y=i);const g=a[0]-e[0],d=a[1]-e[1],N=g*g+d*d;for(let o=u;o<p;o++)for(let r=h;r<y;r++){let l,s,c=(o-e[0])*g+(r-e[1])*d;c<0?(l=e[0],s=e[1]):c>N?(l=a[0],s=a[1]):(c/=N,l=e[0]+c*g,s=e[1]+c*d);const f=(o-l)*(o-l)+(r-s)*(r-s),m=(i-r-1)*t+o;f<n[m]&&(n[m]=f)}}}for(let e=0;e<r;++e)n[e]=Math.sqrt(n[e]);return n}(s,l,a,o);return e.asFill&&function(e,t,i,o,r){for(const n of e){const e=n.length;for(let l=1;l<e;++l){const e=n[l-1],a=n[l];let s,c,f,m;e[0]<a[0]?(s=e[0],c=a[0]):(s=a[0],c=e[0]),e[1]<a[1]?(f=e[1],m=a[1]):(f=a[1],m=e[1]);let u=Math.floor(s),p=Math.floor(c)+1,h=Math.floor(f),y=Math.floor(m)+1;u<o&&(u=o),p>t-o&&(p=t-o),h<o&&(h=o),y>i-o&&(y=i-o);for(let n=h;n<y;++n){if(e[1]>n==a[1]>n)continue;const l=(i-n-1)*t;for(let t=u;t<p;++t)t<(a[0]-e[0])*(n-e[1])/(a[1]-e[1])+e[0]&&(r[l+t]=-r[l+t]);for(let e=o;e<u;++e)r[l+e]=-r[l+e]}}}}(s,l,a,o,c),[m(c,o),l,a]}function m(e,t){const i=2*t,r=e.length,n=new Uint8Array(4*r);for(let t=0;t<r;++t){const r=.5-e[t]/i;(0,o.I)(r,n,4*t)}return n}},19404:(e,t,i)=>{i.d(t,{S:()=>j,c:()=>M});var o=i(30936),r=i(67134),n=i(13802),l=i(61681),a=i(95550),s=i(21130),c=i(30879),f=i(31775),m=i(25609),u=i(89626),p=i(60789),h=i(29882),y=i(28432),g=i(14266);const d=53290320,N=10,S=n.Z.getLogger("esri.symbols.cim.cimAnalyzer");function v(e){switch(e){case"Butt":return m.RL.BUTT;case"Square":return m.RL.SQUARE;default:return m.RL.ROUND}}function b(e){switch(e){case"Bevel":return m.AH.BEVEL;case"Miter":return m.AH.MITER;default:return m.AH.ROUND}}function C(e){switch(e){case"Left":default:return"left";case"Right":return"right";case"Center":return"center";case"Justify":return S.warnOnce("Horizontal alignment 'justify' is not implemented. Falling back to 'center'."),"center"}}function O(e){switch(e){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function k(e,t,i,o){let r;e[t]?r=e[t]:(r={},e[t]=r),r[i]=o}function P(e){const t=e.markerPlacement;return t&&t.angleToLine?m.v2.MAP:m.v2.SCREEN}async function M(e,t,i,o,r){const n=o??[];if(!e)return n;let l,a;const s={};if("CIMSymbolReference"!==e.type)return S.error("Expect cim type to be 'CIMSymbolReference'"),n;if(l=e.symbol,a=e.primitiveOverrides,a){const e=[];for(const i of a){const o=i.valueExpressionInfo;if(o&&t){const r=o.expression,n=(0,c.Yi)(r,t.spatialReference,t.fields).then((e=>{e&&k(s,i.primitiveName,i.propertyName,e)}));e.push(n)}else null!=i.value&&k(s,i.primitiveName,i.propertyName,i.value)}e.length>0&&await Promise.all(e)}const u=[];switch(V(l,i,u),u.length>0&&await Promise.all(u),l.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":!function(e,t,i,o,r,n,l){if(!e)return;const a=e.symbolLayers;if(!a)return;const s=e.effects;let c;const u=f.B$.getSize(e);"CIMPointSymbol"===e.type&&"Map"===e.angleAlignment&&(c=m.v2.MAP);let p=a.length;for(;p--;){const m=a[p];if(!m||!1===m.enable)continue;let h;s&&s.length&&(h=[...s]);const y=m.effects;y&&y.length&&(s?h.push(...y):h=[...y]);const g=[];let d;f.E0.findEffectOverrides(h,t,g),d=g.length>0?W(h,g,i,o):h;const N=[];switch(f.E0.findApplicableOverrides(m,t,N),m.type){case"CIMSolidFill":x(m,d,i,N,o,r);break;case"CIMPictureFill":A(m,d,i,N,o,n,r);break;case"CIMHatchFill":w(m,d,i,N,o,r);break;case"CIMGradientFill":L(m,d,i,N,o,r);break;case"CIMSolidStroke":I(m,d,i,N,o,r,"CIMPolygonSymbol"===e.type,u);break;case"CIMPictureStroke":z(m,d,i,N,o,r,"CIMPolygonSymbol"===e.type,u);break;case"CIMGradientStroke":R(m,d,i,N,o,r,"CIMPolygonSymbol"===e.type,u);break;case"CIMCharacterMarker":if(X(m,d,i,N,o,r))break;break;case"CIMPictureMarker":if(X(m,d,i,N,o,r))break;"CIMLineSymbol"===e.type&&(c=P(m)),$(m,d,i,N,o,n,r,c,u);break;case"CIMVectorMarker":if(X(m,d,i,N,o,r))break;"CIMLineSymbol"===e.type&&(c=P(m)),J(m,d,i,N,o,r,n,c,u,l);break;default:S.error("Cannot analyze CIM layer",m.type)}}}(l,a,s,t,n,i,r)}return n}function x(e,t,i,o,r,n){const l=e.primitiveName,a=(0,p.NO)(e.color),[c,f]=Z(o,l,t,null,null),m=(0,s.hP)(JSON.stringify(e)+f).toString();n.push({type:"fill",templateHash:m,materialHash:c?()=>m:m,cim:e,materialOverrides:null,colorLocked:e.colorLocked,color:B(l,i,"Color",r,a,T),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:t,applyRandomOffset:!1,sampleAlphaOnly:!0})}function A(e,t,i,o,r,n,a){const c=e.primitiveName,f=e.tintColor?(0,p.NO)(e.tintColor):{r:255,g:255,b:255,a:1},[m,u]=Z(o,c,t,null,null),h=(0,s.hP)(JSON.stringify(e)+u).toString(),y=(0,s.hP)(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString();let g=(0,p.NA)(e.scaleX);if("width"in e){const t=e.width;let i=1;const o=n.getResource(e.url);(0,l.pC)(o)&&(i=o.width/o.height),g/=i*(e.height/t)}a.push({type:"fill",templateHash:h,materialHash:m?()=>y:y,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:B(c,i,"TintColor",r,f,T),height:B(c,i,"Height",r,e.height),scaleX:B(c,i,"ScaleX",r,g),angle:B(c,i,"Rotation",r,(0,p.NA)(e.rotation)),offsetX:B(c,i,"OffsetX",r,(0,p.NA)(e.offsetX)),offsetY:B(c,i,"OffsetY",r,(0,p.NA)(e.offsetY)),url:e.url,applyRandomOffset:!1,sampleAlphaOnly:!1})}function w(e,t,i,o,r,n){const l=["Rotation","OffsetX","OffsetY"],a=o.filter((t=>t.primitiveName!==e.primitiveName&&!l.includes(t.propertyName))),c=e.primitiveName,[f,m]=Z(o,c,t,null,null),u=(0,s.hP)(JSON.stringify(e)+m).toString(),h=(0,s.hP)(`${e.separation}${JSON.stringify(e.lineSymbol)}`).toString();let y={r:255,g:255,b:255,a:1};if(e.lineSymbol){const t=e.lineSymbol?.symbolLayers.find((e=>"CIMSolidStroke"===e.type));t&&(y=(0,p.NO)(t.color))}n.push({type:"fill",templateHash:u,materialHash:f?D(h,i,a,r):h,cim:e,materialOverrides:a,colorLocked:e.colorLocked,effects:t,color:y,height:B(c,i,"Separation",r,e.separation),scaleX:1,angle:B(c,i,"Rotation",r,(0,p.NA)(e.rotation)),offsetX:B(c,i,"OffsetX",r,(0,p.NA)(e.offsetX)),offsetY:B(c,i,"OffsetY",r,(0,p.NA)(e.offsetY)),applyRandomOffset:!1,sampleAlphaOnly:!0})}function L(e,t,i,o,r,n){const l=e.primitiveName,[a,c]=Z(o,l,t,null,null),f=(0,s.hP)(JSON.stringify(e)+c).toString();n.push({type:"fill",templateHash:f,materialHash:a?D(f,i,o,r):f,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,applyRandomOffset:!1,sampleAlphaOnly:!1})}function I(e,t,i,o,r,n,l,a){const c=e.primitiveName,f=(0,p.NO)(e.color),m=void 0!==e.width?e.width:4,u=v(e.capStyle),h=b(e.joinStyle),y=e.miterLimit,[g,d]=Z(o,c,t,null,null),N=(0,s.hP)(JSON.stringify(e)+d).toString();let S,C;if(t&&t instanceof Array&&t.length>0){const e=t[t.length-1];if("CIMGeometricEffectDashes"===e.type&&"NoConstraint"===e.lineDashEnding&&null===e.offsetAlongLine){const e=(t=[...t]).pop();S=e.dashTemplate,C=e.scaleDash}}n.push({type:"line",templateHash:N,materialHash:g?()=>N:N,cim:e,materialOverrides:null,isOutline:l,colorLocked:e.colorLocked,effects:t,color:B(c,i,"Color",r,f,T),width:B(c,i,"Width",r,m),cap:B(c,i,"CapStyle",r,u),join:B(c,i,"JoinStyle",r,h),miterLimit:B(c,i,"MiterLimit",r,y),referenceWidth:a,zOrder:F(e.name),dashTemplate:S,scaleDash:C,sampleAlphaOnly:!0})}function z(e,t,i,o,r,n,l,a){const c=(0,s.hP)(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),f=e.primitiveName,m=(0,p.NO)(e.tintColor),u=void 0!==e.width?e.width:4,h=v(e.capStyle),y=b(e.joinStyle),g=e.miterLimit,[d,N]=Z(o,f,t,null,null),S=(0,s.hP)(JSON.stringify(e)+N).toString();n.push({type:"line",templateHash:S,materialHash:d?()=>c:c,cim:e,materialOverrides:null,isOutline:l,colorLocked:e.colorLocked,effects:t,color:B(f,i,"TintColor",r,m,T),width:B(f,i,"Width",r,u),cap:B(f,i,"CapStyle",r,h),join:B(f,i,"JoinStyle",r,y),miterLimit:B(f,i,"MiterLimit",r,g),referenceWidth:a,zOrder:F(e.name),dashTemplate:null,scaleDash:!1,url:e.url,sampleAlphaOnly:!1})}function R(e,t,i,o,r,n,l,a){const c=e.primitiveName,f=void 0!==e.width?e.width:4,m=v(e.capStyle),u=b(e.joinStyle),p=e.miterLimit,[h,y]=Z(o,c,t,null,null),g=(0,s.hP)(JSON.stringify(e)+y).toString();n.push({type:"line",templateHash:g,materialHash:h?D(g,i,o,r):g,cim:e,materialOverrides:null,isOutline:l,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},width:B(c,i,"Width",r,f),cap:B(c,i,"CapStyle",r,m),join:B(c,i,"JoinStyle",r,u),miterLimit:B(c,i,"MiterLimit",r,p),referenceWidth:a,zOrder:F(e.name),dashTemplate:null,scaleDash:!1,sampleAlphaOnly:!1})}function X(e,t,i,o,r,n){const l=e.markerPlacement;if(!l||"CIMMarkerPlacementInsidePolygon"!==l.type)return!1;const c=l,f=Math.abs(c.stepX),m=Math.abs(c.stepY);if(0===f||0===m)return!0;const u=["Rotation","OffsetX","OffsetY"],h=o.filter((t=>t.primitiveName!==e.primitiveName&&!u.includes(t.propertyName))),y="url"in e?e.url:null,[d,N]=Z(o,c.primitiveName,t,null,null),S=(0,s.hP)(JSON.stringify(e)+N).toString();let v,b,C=null;if("Random"===l.gridType){const e=(0,a.Wz)(g.C1),t=Math.max(Math.floor(e/f),1),i=Math.max(Math.floor(e/m),1);v=m*i,C=e=>e?e*i:0,b=t*f/v}else l.shiftOddRows?(v=2*m,C=e=>e?2*e:0,b=f/m*.5):(v=m,C=null,b=f/m);let O={r:255,g:255,b:255,a:1};return"tintColor"in e&&(O=(0,p.NO)(e.tintColor)),n.push({type:"fill",templateHash:S,materialHash:d?D(S,i,h,r):S,cim:e,materialOverrides:h,colorLocked:e.colorLocked,effects:t,color:B(c.primitiveName,i,"TintColor",r,O,T),height:B(c.primitiveName,i,"StepY",r,v,C),scaleX:b,angle:B(c.primitiveName,i,"GridAngle",r,c.gridAngle),offsetX:B(c.primitiveName,i,"OffsetX",r,(0,p.NA)(c.offsetX)),offsetY:B(c.primitiveName,i,"OffsetY",r,(0,p.NA)(c.offsetY)),url:y,applyRandomOffset:"Random"===l.gridType,sampleAlphaOnly:!y}),!0}function $(e,t,i,o,n,a,m,u,h){const g=e.primitiveName,S=(0,p.NA)(e.size);let v=(0,p.NA)(e.scaleX);const b=(0,p.NA)(e.rotation),C=(0,p.NA)(e.offsetX),O=(0,p.NA)(e.offsetY),k=e.tintColor?(0,p.NO)(e.tintColor):{r:255,g:255,b:255,a:1},P=(0,s.hP)(`${e.url}${JSON.stringify(e.colorSubstitutions)}${JSON.stringify(e.animatedSymbolProperties)}`).toString(),M=G(e.markerPlacement,o,i,n),x=function(e,t,i,o){const n=[];if(f.E0.findApplicableOverrides(e,t,n),0===n.length)return e;for(const e of n)if(e.valueExpressionInfo){const t=i[e.primitiveName]&&i[e.primitiveName][e.propertyName];t instanceof c.mz&&(e.fn=(e,i,r)=>(0,y.Z)(t,e,{$view:r},o.geometryType,i))}return(t,i,o)=>{for(const e of n)e.fn&&(e.value=e.fn(t,i,o));const l=(0,r.d9)(e),a=e.primitiveName;for(const e of n)if(e.primitiveName===a){const t=U(e.propertyName);null!=e.value&&e.value!==l[t]&&(l[t]=e.value)}return l}}(e.animatedSymbolProperties,o,i,n),[A,w]=Z(o,g,t,M,x),L=(0,s.hP)(JSON.stringify(e)+w).toString(),I=e.anchorPoint??{x:0,y:0};if("width"in e){const t=e.width;let i=1;const o=a.getResource(e.url);(0,l.pC)(o)&&(i=o.width/o.height),v/=i*(S/t)}function z(e,t){return(0,p.hf)(x,e,t)}const R=e.animatedSymbolProperties&&!0===e.animatedSymbolProperties.randomizeStartTime?(e,t,i,o)=>{const r=function(e){return Math.floor(function(e,t){let i;if("string"==typeof e)i=(0,s.hP)(e+`-seed(${t})`);else{let o=12;i=e^t;do{i=107*(i>>8^i)+o|0}while(0!=--o)}return(1+i/(1<<31))/2}(e,d)*N)}(o),n=z(e,t);return P+`-MATERIALGROUP(${r})`+`-ASP(${JSON.stringify(n)})`}:A?(e,t)=>{const i=z(e,t);return P+`-ASP(${JSON.stringify(i)})`}:P;m.push({type:"marker",templateHash:L,materialHash:R,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:!1,alignment:u,size:B(g,i,"Size",n,S),scaleX:B(g,i,"ScaleX",n,v),rotation:B(g,i,"Rotation",n,b),offsetX:B(g,i,"OffsetX",n,C),offsetY:B(g,i,"OffsetY",n,O),color:B(g,i,"TintColor",n,k,T),anchorPoint:{x:I.x,y:-I.y},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:e.rotateClockwise,referenceSize:h,sizeRatio:1,markerPlacement:M,url:e.url,animatedSymbolProperties:x})}function J(e,t,i,o,r,n,l,a,s,c){const f=e.markerGraphics;if(!f)return;let m=0;if(e.scaleSymbolsProportionally){const t=e.frame;t&&(m=t.ymax-t.ymin)}const u=G(e.markerPlacement,o,i,r);for(const p of f)if(p){const f=p.symbol;if(!f)continue;switch(f.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":Y(e,t,u,null,p,o,i,r,n,l,a,s,m,c);break;case"CIMTextSymbol":H(e,t,u,p,i,o,r,n,a,s,m)}}}function H(e,t,i,o,r,n,l,a,c,m,u){f.E0.findApplicableOverrides(o,n,[]);const h=o.geometry;if(!("x"in h)||!("y"in h))return;const y=o.symbol,g=function(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}(y),d=function(e){let t="",i="";if(e){const o=e.toLowerCase();o.includes("italic")?t="italic":o.includes("oblique")&&(t="oblique"),o.includes("bold")?i="bold":o.includes("light")&&(i="lighter")}return{style:t,weight:i}}(y.fontStyleName),N=function(e){const t=e.toLowerCase().split(" ").join("-");switch(t){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return t}}(y.fontFamilyName);y.font={family:N,decoration:g,...d};const S=e.frame,v=h.x-.5*(S.xmin+S.xmax),b=h.y-.5*(S.ymin+S.ymax),k=e.size/u,P=e.primitiveName,M=(0,p.NA)(y.height)*k,x=(0,p.NA)(y.angle),A=(0,p.NA)(e.offsetX)+((0,p.NA)(y.offsetX)+v)*k,w=(0,p.NA)(e.offsetY)+((0,p.NA)(y.offsetY)+b)*k,L=(0,p.NO)(f.B$.getFillColor(y));let I=(0,p.NO)(f.B$.getStrokeColor(y)),z=f.B$.getStrokeWidth(y);z||(I=(0,p.NO)(f.B$.getFillColor(y.haloSymbol)),z=y.haloSize*k);const[R,X]=Z(n,P,t,i,null),$=JSON.stringify(e.effects)+Number(e.colorLocked)+JSON.stringify(e.anchorPoint)+e.anchorPointUnits+JSON.stringify(e.markerPlacement),J=(0,s.hP)(JSON.stringify(o)+$+X).toString();let H=B(o.primitiveName,r,"TextString",l,o.textString,p.X3,y.textCase);if(null==H)return;const{fontStyleName:Y}=y,E=N+(Y?"-"+Y.toLowerCase():"-regular"),F=E;"string"==typeof H&&H.includes("[")&&y.fieldMap&&(H=(0,p.Qs)(y.fieldMap,H,y.textCase)),a.push({type:"text",templateHash:J,materialHash:R||"function"==typeof H||H.match(/\[(.*?)\]/)?(e,t,i)=>F+"-"+(0,p.hf)(H,e,t,i):F+"-"+(0,s.hP)(H),cim:y,materialOverrides:null,colorLocked:e.colorLocked,effects:t,alignment:c,anchorPoint:{x:e.anchorPoint?e.anchorPoint.x:0,y:e.anchorPoint?e.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,fontName:E,decoration:g,weight:B(P,r,"Weight",l,d.weight),style:B(P,r,"Size",l,d.style),size:B(P,r,"Size",l,M),angle:B(P,r,"Rotation",l,x),offsetX:B(P,r,"OffsetX",l,A),offsetY:B(P,r,"OffsetY",l,w),horizontalAlignment:C(y.horizontalAlignment),verticalAlignment:O(y.verticalAlignment),text:H,color:L,outlineColor:I,outlineSize:z,referenceSize:m,sizeRatio:1,markerPlacement:i})}function Y(e,t,i,o,r,n,a,c,m,y,g,d,N,S){const v=r.symbol,b=v.symbolLayers;if(!b)return;if(S)return void E(e,t,i,o,r,a,n,c,m,y,g,d,N);let C=b.length;if(_(b))return void function(e,t,i,o,r,n,l,a,c,m,h,y,g){const d=r.geometry,N=n[0],S=n[1],v=(0,u.bk)(d);if(!v)return;const[b,C,O]=(0,u.UV)(v,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),k={type:"sdf",geom:d,asFill:!0},P=e.primitiveName,M=(0,p.NA)(e.size),x=(0,p.NA)(e.rotation),A=(0,p.NA)(e.offsetX),w=(0,p.NA)(e.offsetY),L=S.path,I=S.primitiveName,z=N.primitiveName,R=(0,p.NO)(f.B$.getFillColor(S)),X=(0,p.NO)(f.B$.getStrokeColor(N)),$=f.B$.getStrokeWidth(N);let J=!1,H="";for(const e of l)e.primitiveName!==I&&e.primitiveName!==z&&e.primitiveName!==P||(void 0!==e.value?H+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`:e.valueExpressionInfo&&(J=!0));const Y=JSON.stringify({...e,markerGraphics:null}),E=(0,s.hP)(JSON.stringify(k)+L).toString(),F={type:"marker",templateHash:(0,s.hP)(JSON.stringify(r)+JSON.stringify(S)+JSON.stringify(N)+Y+H).toString(),materialHash:J?()=>E:E,cim:k,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:h,anchorPoint:{x:C,y:O},isAbsoluteAnchorPoint:!1,size:B(e.primitiveName,a,"Size",c,M),rotation:B(e.primitiveName,a,"Rotation",c,x),offsetX:B(e.primitiveName,a,"OffsetX",c,A),offsetY:B(e.primitiveName,a,"OffsetY",c,w),scaleX:1,frameHeight:g,rotateClockwise:e.rotateClockwise,referenceSize:y,sizeRatio:b,color:B(I,a,"Color",c,R,T),outlineColor:B(z,a,"Color",c,X,T),outlineWidth:B(z,a,"Width",c,$),markerPlacement:i,path:L,animatedSymbolProperties:o};m.push(F)}(e,t,i,o,r,b,n,a,c,m,g,d,N);const O=h.j.applyEffects(v.effects,r.geometry,y.geometryEngine);if(O)for(;C--;){const S=b[C];if(S&&!1!==S.enable)switch(S.type){case"CIMSolidFill":case"CIMSolidStroke":{const v=h.j.applyEffects(S.effects,O,y.geometryEngine),b=(0,u.bk)(v);if(!b)continue;const[C,k,P]=(0,u.UV)(b,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),M="CIMSolidFill"===S.type,x={type:"sdf",geom:v,asFill:M},A=e.primitiveName,w=(0,p.NA)(e.size)??10,L=(0,p.NA)(e.rotation),I=(0,p.NA)(e.offsetX),z=(0,p.NA)(e.offsetY),R=S.path,X=S.primitiveName,$=(0,p.NO)(M?f.B$.getFillColor(S):f.B$.getStrokeColor(S)),J=M?{r:0,g:0,b:0,a:0}:(0,p.NO)(f.B$.getStrokeColor(S)),H=f.B$.getStrokeWidth(S);if(!M&&!H)break;let Y=!1,E="";for(const e of n)e.primitiveName!==X&&e.primitiveName!==A||(void 0!==e.value?E+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`:e.valueExpressionInfo&&(Y=!0));(0,l.pC)(t)&&"function"==typeof t&&(Y=!0);const F=JSON.stringify({...e,markerGraphics:null}),U=(0,s.hP)(JSON.stringify(x)+R).toString(),W={type:"marker",templateHash:(0,s.hP)(JSON.stringify(r)+JSON.stringify(S)+F+E).toString(),materialHash:Y?()=>U:U,cim:x,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:g,anchorPoint:{x:k,y:P},isAbsoluteAnchorPoint:!1,size:B(e.primitiveName,a,"Size",c,w),rotation:B(e.primitiveName,a,"Rotation",c,L),offsetX:B(e.primitiveName,a,"OffsetX",c,I),offsetY:B(e.primitiveName,a,"OffsetY",c,z),scaleX:1,frameHeight:N,rotateClockwise:e.rotateClockwise,referenceSize:d,sizeRatio:C,color:B(X,a,"Color",c,$,T),outlineColor:B(X,a,"Color",c,J,T),outlineWidth:B(X,a,"Width",c,H),markerPlacement:i,animatedSymbolProperties:o,path:R};m.push(W);break}default:E(e,t,i,o,r,a,n,c,m,y,g,d,N)}}}function E(e,t,i,o,r,n,c,m,u,h,y,g,d){const N=function(e,t){return{type:e.type,enable:!0,name:e.name,colorLocked:e.colorLocked,primitiveName:e.primitiveName,anchorPoint:e.anchorPoint,anchorPointUnits:e.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:e.rotateClockwise,rotation:0,size:e.size,billboardMode3D:e.billboardMode3D,depth3D:e.depth3D,frame:e.frame,markerGraphics:[t],scaleSymbolsProportionally:e.scaleSymbolsProportionally,respectFrame:e.respectFrame,clippingPath:e.clippingPath}}(e,r);let S=[];const v=["Rotation","OffsetX","OffsetY"];S=c.filter((t=>t.primitiveName!==e.primitiveName||!v.includes(t.propertyName)));let b="";for(const e of c)void 0!==e.value&&(b+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`);const[C,O,k]=f.B$.getTextureAnchor(N,h),P=e.primitiveName,M=(0,p.NA)(e.rotation),x=(0,p.NA)(e.offsetX),A=(0,p.NA)(e.offsetY),w=(0,s.hP)(JSON.stringify(N)+b).toString(),L={type:"marker",templateHash:w,materialHash:S.length>0||(0,l.pC)(t)&&"function"==typeof t?D(w,n,S,m):w,cim:N,materialOverrides:S,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:y,anchorPoint:{x:C,y:O},isAbsoluteAnchorPoint:!1,size:e.size,rotation:B(P,n,"Rotation",m,M),offsetX:B(P,n,"OffsetX",m,x),offsetY:B(P,n,"OffsetY",m,A),color:{r:255,g:255,b:255,a:1},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:d,rotateClockwise:e.rotateClockwise,referenceSize:g,sizeRatio:k/(0,a.F2)(e.size),markerPlacement:i,animatedSymbolProperties:o};u.push(L)}function F(e){if(e&&0===e.indexOf("Level_")){const t=parseInt(e.substr(6),10);if(!isNaN(t))return t}return 0}function T(e){if(!e||0===e.length)return null;const t=new o.Z(e).toRgba();return{r:t[0],g:t[1],b:t[2],a:t[3]}}function B(e,t,i,o,r,n,l){const a=t[e];if(a){const e=a[i];if("string"==typeof e||"number"==typeof e||e instanceof Array)return n?n.call(null,e,l):e;if(null!=e&&e instanceof c.mz)return(t,i,a)=>{let s=(0,y.Z)(e,t,{$view:a},o.geometryType,i);return null!==s&&n&&(s=n.call(null,s,l)),null!==s?s:r}}return r}function U(e){return e?e.charAt(0).toLowerCase()+e.substr(1):e}function W(e,t,i,o){for(const e of t)if(e.valueExpressionInfo){const t=i[e.primitiveName]&&i[e.primitiveName][e.propertyName];t instanceof c.mz&&(e.fn=(e,i,r)=>(0,y.Z)(t,e,{$view:r},o.geometryType,i))}return(i,o,n)=>{for(const e of t)e.fn&&(e.value=e.fn(i,o,n));const l=[];for(let i of e){const e=i?.primitiveName;if(e){let o=!1;for(const n of t)if(n.primitiveName===e){const e=U(n.propertyName);null!=n.value&&n.value!==i[e]&&(o||(i=(0,r.d9)(i),o=!0),i[e]=n.value)}}l.push(i)}return l}}function G(e,t,i,o){const n=[];if(f.E0.findApplicableOverrides(e,t,n),0===n.length)return e;for(const e of n)if(e.valueExpressionInfo){const t=i[e.primitiveName]&&i[e.primitiveName][e.propertyName];t instanceof c.mz&&(e.fn=(e,i,r)=>(0,y.Z)(t,e,{$view:r},o.geometryType,i))}return(t,i,o)=>{for(const e of n)e.fn&&(e.value=e.fn(t,i,o));const l=(0,r.d9)(e),a=e.primitiveName;for(const e of n)if(e.primitiveName===a){const t=U(e.propertyName);null!=e.value&&e.value!==l[t]&&(l[t]=e.value)}return l}}function D(e,t,i,o){for(const e of i)if(e.valueExpressionInfo){const i=t[e.primitiveName]&&t[e.primitiveName][e.propertyName];i instanceof c.mz&&(e.fn=(e,t,r)=>(0,y.Z)(i,e,{$view:r},o.geometryType,t))}return(t,o,r)=>{for(const e of i)e.fn&&(e.value=e.fn(t,o,r));return(0,s.hP)(e+f.E0.buildOverrideKey(i)).toString()}}function j(e,t){if(!t||0===t.length)return e;const i=JSON.parse(JSON.stringify(e));return f.E0.applyOverrides(i,t),i}function Z(e,t,i,o,r){let n=!1,a="";for(const i of e)i.primitiveName===t&&(void 0!==i.value?a+=`-${i.primitiveName}-${i.propertyName}-${JSON.stringify(i.value)}`:i.valueExpressionInfo&&(n=!0));return(0,l.pC)(i)&&"function"==typeof i&&(n=!0),(0,l.pC)(o)&&"function"==typeof o&&(n=!0),(0,l.pC)(r)&&"function"==typeof r&&(n=!0),[n,a]}function V(e,t,i){if(e&&t)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{const o=e.symbolLayers;if(!o)return;for(const e of o)switch(Q(e,t,i),e.type){case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMCharacterMarker":case"CIMPictureMarker":"url"in e&&e.url&&i.push(t.fetchResource(e.url,null));break;case"CIMVectorMarker":{const o=e.markerGraphics;if(!o)continue;for(const e of o)if(e){const o=e.symbol;o&&V(o,t,i)}}}}}}const _=e=>e&&2===e.length&&e[0].enable&&e[1].enable&&"CIMSolidStroke"===e[0].type&&"CIMSolidFill"===e[1].type&&!e[0].effects&&!e[1].effects;let q;function Q(e,t,i){e.effects&&!(0,l.pC)(t.geometryEngine)&&(q?i.push(q):(0,p.Cc)(e.effects)&&(q=(0,p.RI)(),i.push(q),q.then((e=>t.geometryEngine=e))))}},29882:(e,t,i)=>{i.d(t,{j:()=>a});var o=i(53736),r=i(94843),n=i(24262),l=i(56038);class a{static executeEffects(e,t,i){const o=(0,r.GP)(t);let a=new n.M(o);for(const t of e){const e=(0,l.h)(t);e&&(a=e.execute(a,t,1.3333333333333333,i))}return a}static next(e){const t=e.next();return(0,r.wp)(t),t}static applyEffects(e,t,i){if(!e)return t;let r=new n.M(t);for(const t of e){const e=(0,l.h)(t);e&&(r=e.execute(r,t,1,i))}let a,s=null;for(;a=r.next();)s?(0,o.l9)(s)?(0,o.l9)(a)&&s.paths.push(...a.paths):(0,o.oU)(s)&&(0,o.oU)(a)&&s.rings.push(...a.rings):s=a;return s}}}}]);