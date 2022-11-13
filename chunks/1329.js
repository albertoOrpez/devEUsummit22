"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[1329],{34780:(t,e,i)=>{i.d(e,{Z:()=>x});var s,l=i(36663),n=(i(39994),i(70375)),r=i(82064),o=i(67134),a=i(13802),h=i(61681),c=i(81977),f=i(69236),p=i(40266);const u=a.Z.getLogger("esri.layers.support.PixelBlock");let d=s=class extends r.wq{constructor(t){super(t),this.width=null,this.height=null,this.pixelType="f32",this.validPixelCount=null,this.mask=null,this.maskIsAlpha=!1,this.pixels=null,this.statistics=null}static createEmptyBand(t,e){return new(s.getPixelArrayConstructor(t))(e)}static getPixelArrayConstructor(t){let e;switch(t){case"u1":case"u2":case"u4":case"u8":e=Uint8Array;break;case"u16":e=Uint16Array;break;case"u32":e=Uint32Array;break;case"s8":e=Int8Array;break;case"s16":e=Int16Array;break;case"s32":e=Int32Array;break;case"f32":case"c64":case"c128":case"unknown":e=Float32Array;break;case"f64":e=Float64Array}return e}castPixelType(t){if(!t)return"f32";let e=t.toLowerCase();return["u1","u2","u4"].includes(e)?e="u8":["unknown","u8","s8","u16","s16","u32","s32","f32","f64"].includes(e)||(e="f32"),e}getPlaneCount(){return this.pixels&&this.pixels.length}addData(t){if(!t.pixels||t.pixels.length!==this.width*this.height)throw new n.Z("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");this.pixels||(this.pixels=[]),this.statistics||(this.statistics=[]),this.pixels.push(t.pixels),this.statistics.push(t.statistics||{minValue:null,maxValue:null})}getAsRGBA(){const t=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"s8":case"s16":case"u16":case"s32":case"u32":case"f32":case"f64":this._fillFromNon8Bit(t);break;default:this._fillFrom8Bit(t)}return new Uint8ClampedArray(t)}getAsRGBAFloat(){const t=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(t),t}updateStatistics(){this.statistics=this.pixels.map((t=>this._calculateBandStatistics(t,this.mask)));const t=this.mask;let e=0;if(t)for(let i=0;i<t.length;i++)t[i]&&e++;else e=this.width*this.height;this.validPixelCount=e}clamp(t){if(!t||"f64"===t||"f32"===t)return;let e;switch(t){case"u8":e=[0,255];break;case"u16":e=[0,65535];break;case"u32":e=[0,4294967295];break;case"s8":e=[-128,127];break;case"s16":e=[-32768,32767];break;case"s32":e=[-2147483648,2147483647];break;default:e=[-34e38,34e38]}const[i,l]=e,n=this.pixels,r=this.width*this.height,o=n.length;let a,h,c;const f=[];for(let e=0;e<o;e++){c=s.createEmptyBand(t,r),a=n[e];for(let t=0;t<r;t++)h=a[t],c[t]=h>l?l:h<i?i:h;f.push(c)}this.pixels=f,this.pixelType=t}extractBands(t){if((0,h.Wi)(t)||0===t.length||null==this.pixels||0===this.pixels.length)return this;const e=this.pixels.length,i=t.some((t=>t>=this.pixels.length)),l=e===t.length&&!t.some(((t,e)=>t!==e));return i||l?this:new s({pixelType:this.pixelType,width:this.width,height:this.height,mask:this.mask,validPixelCount:this.validPixelCount,maskIsAlpha:this.maskIsAlpha,pixels:t.map((t=>this.pixels[t])),statistics:this.statistics&&t.map((t=>this.statistics[t]))})}clone(){const t=new s({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});let e;this.mask&&(this.mask instanceof Uint8Array?t.mask=new Uint8Array(this.mask):t.mask=this.mask.slice(0));const i=s.getPixelArrayConstructor(this.pixelType);if(this.pixels&&this.pixels.length>0){t.pixels=[];const s=this.pixels[0].slice;for(e=0;e<this.pixels.length;e++)t.pixels[e]=s?this.pixels[e].slice(0,this.pixels[e].length):new i(this.pixels[e])}if(this.statistics)for(t.statistics=[],e=0;e<this.statistics.length;e++)t.statistics[e]=(0,o.d9)(this.statistics[e]);return t}_fillFrom8Bit(t){const{mask:e,maskIsAlpha:i,pixels:s}=this;if(!t||!s||!s.length)return void u.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");let l,n,r,o;l=n=r=s[0],s.length>=3?(n=s[1],r=s[2]):2===s.length&&(n=s[1]);const a=new Uint32Array(t),h=this.width*this.height;if(l.length===h)if(e&&e.length===h)if(i)for(o=0;o<h;o++)e[o]&&(a[o]=e[o]<<24|r[o]<<16|n[o]<<8|l[o]);else for(o=0;o<h;o++)e[o]&&(a[o]=255<<24|r[o]<<16|n[o]<<8|l[o]);else for(o=0;o<h;o++)a[o]=255<<24|r[o]<<16|n[o]<<8|l[o];else u.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.")}_fillFromNon8Bit(t){const{pixels:e,mask:i,statistics:s}=this;if(!t||!e||!e.length)return void u.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");const l=this.pixelType;let n=1,r=0,o=1;if(s&&s.length>0)r=s.map((t=>t.minValue)).reduce(((t,e)=>Math.min(t,e))),o=s.map((t=>t.maxValue-t.minValue)).reduce(((t,e)=>Math.max(t,e))),n=255/o;else{let t=255;"s8"===l?(r=-128,t=127):"u16"===l?t=65535:"s16"===l?(r=-32768,t=32767):"u32"===l?t=4294967295:"s32"===l?(r=-2147483648,t=2147483647):"f32"===l?(r=-34e38,t=34e38):"f64"===l&&(r=-Number.MAX_VALUE,t=Number.MAX_VALUE),n=255/(t-r)}const a=new Uint32Array(t),h=this.width*this.height;let c,f,p,d,x;if(c=f=p=e[0],c.length!==h)return u.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(e.length>=2)if(f=e[1],e.length>=3&&(p=e[2]),i&&i.length===h)for(d=0;d<h;d++)i[d]&&(a[d]=255<<24|(p[d]-r)*n<<16|(f[d]-r)*n<<8|(c[d]-r)*n);else for(d=0;d<h;d++)a[d]=255<<24|(p[d]-r)*n<<16|(f[d]-r)*n<<8|(c[d]-r)*n;else if(i&&i.length===h)for(d=0;d<h;d++)x=(c[d]-r)*n,i[d]&&(a[d]=255<<24|x<<16|x<<8|x);else for(d=0;d<h;d++)x=(c[d]-r)*n,a[d]=255<<24|x<<16|x<<8|x}_fillFrom32Bit(t){const{pixels:e,mask:i}=this;if(!t||!e||!e.length)return u.error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");let s,l,n,r;s=l=n=e[0],e.length>=3?(l=e[1],n=e[2]):2===e.length&&(l=e[1]);const o=this.width*this.height;if(s.length!==o)return u.error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");let a=0;if(i&&i.length===o)for(r=0;r<o;r++)t[a++]=s[r],t[a++]=l[r],t[a++]=n[r],t[a++]=1&i[r];else for(r=0;r<o;r++)t[a++]=s[r],t[a++]=l[r],t[a++]=n[r],t[a++]=1}_calculateBandStatistics(t,e){let i=1/0,s=-1/0;const l=t.length;let n,r=0;if(e)for(n=0;n<l;n++)e[n]&&(r=t[n],i=r<i?r:i,s=r>s?r:s);else for(n=0;n<l;n++)r=t[n],i=r<i?r:i,s=r>s?r:s;return{minValue:i,maxValue:s}}};(0,l._)([(0,c.Cb)({json:{write:!0}})],d.prototype,"width",void 0),(0,l._)([(0,c.Cb)({json:{write:!0}})],d.prototype,"height",void 0),(0,l._)([(0,c.Cb)({json:{write:!0}})],d.prototype,"pixelType",void 0),(0,l._)([(0,f.p)("pixelType")],d.prototype,"castPixelType",null),(0,l._)([(0,c.Cb)({json:{write:!0}})],d.prototype,"validPixelCount",void 0),(0,l._)([(0,c.Cb)({json:{write:!0}})],d.prototype,"mask",void 0),(0,l._)([(0,c.Cb)({json:{write:!0}})],d.prototype,"maskIsAlpha",void 0),(0,l._)([(0,c.Cb)({json:{write:!0}})],d.prototype,"pixels",void 0),(0,l._)([(0,c.Cb)({json:{write:!0}})],d.prototype,"statistics",void 0),d=s=(0,l._)([(0,p.j)("esri.layers.support.PixelBlock")],d);const x=d},31329:(t,e,i)=>{i.d(e,{Pz:()=>o,Qh:()=>b,SJ:()=>a,Uk:()=>C,Vl:()=>k,XV:()=>h,nk:()=>n,pW:()=>u,qF:()=>r,us:()=>p,zp:()=>c});var s=i(61681),l=i(34780);function n(t){return(0,s.pC)(t)&&"esri.layers.support.PixelBlock"===t.declaredClass&&t.pixels&&t.pixels.length>0}function r(t,e){if(!e?.length||!n(t))return t;const i=t.pixels.length;return e&&e.some((t=>t>=i))||1===i&&1===e.length&&0===e[0]?t:i!==e.length||e.some(((t,e)=>t!==e))?new l.Z({pixelType:t.pixelType,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:e.map((e=>t.pixels[e])),statistics:t.statistics&&e.map((e=>t.statistics[e]))}):t}function o(t){if(!t)return;const e=t.colormap;if(!e||0===e.length)return;const i=e.sort(((t,e)=>t[0]-e[0]));let s=0;i[0][0]<0&&(s=i[0][0]);const l=Math.max(256,i[i.length-1][0]-s+1),n=new Uint8Array(4*l),r=[];let o,a=0,h=0;const c=5===i[0].length;if(l>65536)return i.forEach((t=>{r[t[0]-s]=c?t.slice(1):t.slice(1).concat([255])})),{indexed2DColormap:r,offset:s,alphaSpecified:c};if(t.fillUnspecified)for(o=i[h],a=o[0]-s;a<l;a++)n[4*a]=o[1],n[4*a+1]=o[2],n[4*a+2]=o[3],n[4*a+3]=c?o[4]:255,a===o[0]-s&&(o=h===i.length-1?o:i[++h]);else for(a=0;a<i.length;a++)o=i[a],h=4*(o[0]-s),n[h]=o[1],n[h+1]=o[2],n[h+2]=o[3],n[h+3]=c?o[4]:255;return{indexedColormap:n,offset:s,alphaSpecified:c}}function a(t,e){if(!n(t))return t;if(!e&&(e.indexedColormap||e.indexed2DColormap))return t;const i=t.clone(),s=i.pixels;let l=i.mask;const r=i.width*i.height;if(1!==s.length)return t;const{indexedColormap:o,indexed2DColormap:a,offset:h,alphaSpecified:c}=e,f=o.length-1;let p=0;const u=s[0],d=new Uint8Array(u.length),x=new Uint8Array(u.length),g=new Uint8Array(u.length);let m,w=0;if(o)if(l)for(p=0;p<r;p++)l[p]&&(w=4*(u[p]-h),w<h||w>f?l[p]=0:(d[p]=o[w],x[p]=o[w+1],g[p]=o[w+2],l[p]=o[w+3]));else{for(l=new Uint8Array(r),p=0;p<r;p++)w=4*(u[p]-h),w<h||w>f?l[p]=0:(d[p]=o[w],x[p]=o[w+1],g[p]=o[w+2],l[p]=o[w+3]);i.mask=l}else if(l)for(p=0;p<r;p++)l[p]&&(m=a[u[p]],d[p]=m[0],x[p]=m[1],g[p]=m[2],l[p]=m[3]);else{for(l=new Uint8Array(r),p=0;p<r;p++)m=a[u[p]],d[p]=m[0],x[p]=m[1],g[p]=m[2],l[p]=m[3];i.mask=l}return i.pixels=[d,x,g],i.statistics=null,i.pixelType="u8",i.maskIsAlpha=c,i}function h(t,e){if(!n(t))return null;const{pixels:i,mask:s}=t,r=t.width*t.height,o=i.length;let a=e.lut;const{offset:h}=e;let c,f;a&&1===a[0].length&&(a=i.map((()=>a)));const p=[];let u,d,x;if(h)if(null==s)for(c=0;c<o;c++){for(u=i[c],d=a[c],x=new Uint8Array(r),f=0;f<r;f++)x[f]=d[u[f]-h];p.push(x)}else for(c=0;c<o;c++){for(u=i[c],d=a[c],x=new Uint8Array(r),f=0;f<r;f++)s[f]&&(x[f]=d[u[f]-h]);p.push(x)}else if(null==s)for(c=0;c<o;c++){for(u=i[c],d=a[c],x=new Uint8Array(r),f=0;f<r;f++)x[f]=d[u[f]];p.push(x)}else for(c=0;c<o;c++){for(u=i[c],d=a[c],x=new Uint8Array(r),f=0;f<r;f++)s[f]&&(x[f]=d[u[f]]);p.push(x)}const g=new l.Z({width:t.width,height:t.height,pixels:p,mask:s,pixelType:"u8"});return g.updateStatistics(),g}function c(t,e){if(!n(t))return null;const i=t.clone(),{pixels:s}=i,l=i.width*i.height,r=e.length,o=Math.floor(r/2),a=e[Math.floor(o)],h=s[0];let c,f,p,u,d,x,g=!1;const m=new Uint8Array(l),w=new Uint8Array(l),y=new Uint8Array(l);let k=i.mask;const A=4===e[0].mappedColor.length;for(k||(k=new Uint8Array(l),k.fill(A?255:1),i.mask=k),d=0;d<l;d++)if(k[d]){for(c=h[d],g=!1,x=o,f=a,p=0,u=r-1;u-p>1;){if(c===f.value){g=!0;break}c>f.value?p=x:u=x,x=Math.floor((p+u)/2),f=e[Math.floor(x)]}g||(c===e[p].value?(f=e[p],g=!0):c===e[u].value?(f=e[u],g=!0):c<e[p].value?(g=!1,f=null):c>e[p].value&&(c<e[u].value?(f=e[p],g=!0):u===r-1?(g=!1,f=null):(f=e[u],g=!0))),g?(m[d]=f.mappedColor[0],w[d]=f.mappedColor[1],y[d]=f.mappedColor[2],k[d]=f.mappedColor[3]):m[d]=w[d]=y[d]=k[d]=0}return i.pixels=[m,w,y],i.mask=k,i.pixelType="u8",i.maskIsAlpha=A,i}function f(t,e,i,s,l,n){const{width:r,height:o}=i.block,{x:a,y:h}=i.offset,{width:c,height:f}=i.mosaic,p=function(t,e,i,s,l,n,r,o){return{xmin:l<=i*t?0:l<i*t+t?l-i*t:t,ymin:n<=s*e?0:n<s*e+e?n-s*e:e,xmax:l+r<=i*t?0:l+r<i*t+t?l+r-i*t:t,ymax:n+o<=s*e?0:n+o<s*e+e?n+o-s*e:e}}(r,o,s,l,a,h,c,f);let u=0,d=0;if(n){const t=n.hasGCSSShiftTransform?360:n.halfWorldWidth,e=r*n.resolutionX,i=n.startX+s*e,l=i+e;i<t&&l>t?d=n.rightPadding:i>=t&&(u=n.leftMargin-n.rightPadding,d=0)}if(p.xmax-=d,"number"!=typeof e)for(let i=p.ymin;i<p.ymax;i++){const n=(l*o+i-h)*c+(s*r-a)+u,f=i*r;for(let i=p.xmin;i<p.xmax;i++)t[n+i]=e[f+i]}else for(let i=p.ymin;i<p.ymax;i++){const n=(l*o+i-h)*c+(s*r-a)+u;for(let i=p.xmin;i<p.xmax;i++)t[n+i]=e}}function p(t,e,i={}){const{clipOffset:r,clipSize:o,alignmentInfo:a,blockWidths:h}=i;if(h)return function(t,e,i){const r=t.find((t=>(0,s.pC)(t)));if((0,s.Wi)(r))return null;const o=t.some((t=>!(0,s.pC)(t)||!!t.mask)),{width:a,height:h}=e,c=o?new Uint8Array(a*h):null,{blockWidths:f}=i,p=[],u=r.getPlaneCount(),d=l.Z.getPixelArrayConstructor(r.pixelType);if(o)for(let e=0,i=0;e<t.length;i+=f[e],e++){const s=t[e];if(!n(s))continue;const l=s.mask;for(let t=0;t<h;t++)for(let n=0;n<f[e];n++)c[t*a+n+i]=null==l?255:l[t*s.width+n]}for(let e=0;e<u;e++){const i=new d(a*h);for(let s=0,l=0;s<t.length;l+=f[s],s++){const r=t[s];if(!n(r))continue;const o=r.pixels[e];if(null!=o)for(let t=0;t<h;t++)for(let e=0;e<f[s];e++)i[t*a+e+l]=o[t*r.width+e]}p.push(i)}const x=new l.Z({width:a,height:h,mask:c,pixels:p,pixelType:r.pixelType});return x.updateStatistics(),x}(t,e,{blockWidths:h});const c=t.find((t=>n(t)));if((0,s.Wi)(c))return null;const p=o?o.width:e.width,u=o?o.height:e.height,d=c.width,x=c.height,g=e.width/d,m=e.height/x,w={offset:r||{x:0,y:0},mosaic:o||e,block:{width:d,height:x}},y=c.pixelType,k=l.Z.getPixelArrayConstructor(y),A=c.pixels.length,b=[];let C,v,U;for(let e=0;e<A;e++){v=new k(p*u);for(let i=0;i<m;i++)for(let s=0;s<g;s++){const l=t[i*g+s];n(l)&&(C=l.pixels[e],f(v,C,w,s,i,a))}b.push(v)}if(t.some((t=>(0,s.Wi)(t)||t.mask&&t.mask.length>0))){U=new Uint8Array(p*u);for(let e=0;e<m;e++)for(let i=0;i<g;i++){const l=t[e*g+i];f(U,((0,s.pC)(l)?l.mask:null)||(l?1:0),w,i,e,a)}}const T=new l.Z({width:p,height:u,pixels:b,pixelType:y,mask:U});return T.updateStatistics(),T}function u(t,e,i){if(!n(t))return null;const{width:s,height:l}=t,r=e.x,o=e.y,a=i.width+r,h=i.height+o;if(r<0||o<0||a>s||h>l)return t;if(0===r&&0===o&&a===s&&h===l)return t;t.mask||(t.mask=new Uint8Array(s*l));const c=t.mask;for(let t=0;t<l;t++){const e=t*s;for(let i=0;i<s;i++)c[e+i]=t<o||t>=h||i<r||i>=a?0:1}return t.updateStatistics(),t}function d(t){if(!n(t))return null;const e=t.clone(),{width:i,height:s,pixels:l,mask:r}=t,o=l[0],a=e.pixels[0];for(let t=2;t<s-1;t++){const e=new Map;for(let s=t-2;s<t+2;s++)for(let t=0;t<4;t++){const l=s*i+t;m(e,o[l],r?r[l]:1)}a[t*i]=x(e),a[t*i+1]=a[t*i+2]=a[t*i];let s=3;for(;s<i-1;s++){let l=(t-2)*i+s+1;m(e,o[l],r?r[l]:1),l=(t-1)*i+s+1,m(e,o[l],r?r[l]:1),l=t*i+s+1,m(e,o[l],r?r[l]:1),l=(t+1)*i+s+1,m(e,o[l],r?r[l]:1),l=(t-2)*i+s-3,g(e,o[l],r?r[l]:1),l=(t-1)*i+s-3,g(e,o[l],r?r[l]:1),l=t*i+s-3,g(e,o[l],r?r[l]:1),l=(t+1)*i+s-3,g(e,o[l],r?r[l]:1),a[t*i+s]=x(e)}a[t*i+s+1]=a[t*i+s]}for(let t=0;t<i;t++)a[t]=a[i+t]=a[2*i+t],a[(s-1)*i+t]=a[(s-2)*i+t];return e.updateStatistics(),e}function x(t){if(0===t.size)return 0;let e=0,i=-1,s=0;const l=t.keys();let n=l.next();for(;!n.done;)s=t.get(n.value),s>e&&(i=n.value,e=s),n=l.next();return i}function g(t,e,i){if(0===i)return;const s=t.get(e);1===s?t.delete(e):t.set(e,s-1)}function m(t,e,i){0!==i&&t.set(e,t.has(e)?t.get(e)+1:1)}function w(t,e,i){let{x:s,y:r}=e;const{width:o,height:a}=i;if(0===s&&0===r&&a===t.height&&o===t.width)return t;const{width:h,height:c}=t,f=Math.max(0,r),p=Math.max(0,s),u=Math.min(s+o,h),d=Math.min(r+a,c);if(u<0||d<0||!n(t))return null;s=Math.max(0,-s),r=Math.max(0,-r);const{pixels:x,mask:g}=t,m=o*a,w=x.length,y=[];for(let e=0;e<w;e++){const i=x[e],n=l.Z.createEmptyBand(t.pixelType,m);for(let t=f;t<d;t++){const e=t*h;let l=(t+r-f)*o+s;for(let t=p;t<u;t++)n[l++]=i[e+t]}y.push(n)}const k=new Uint8Array(m);for(let t=f;t<d;t++){const e=t*h;let i=(t+r-f)*o+s;for(let t=p;t<u;t++)k[i++]=g?g[e+t]:1}const A=new l.Z({width:i.width,height:i.height,pixelType:t.pixelType,pixels:y,mask:k});return A.updateStatistics(),A}function y(t,e=!0){if(!n(t))return null;const{pixels:i,width:s,height:r,mask:o,pixelType:a}=t,h=[],c=Math.round(s/2),f=Math.round(r/2),p=r-1,u=s-1;for(let t=0;t<i.length;t++){const n=i[t],o=l.Z.createEmptyBand(a,c*f);let d=0;for(let t=0;t<r;t+=2)for(let i=0;i<s;i+=2){const l=n[t*s+i];if(e){const e=i===u?l:n[t*s+i+1],r=t===p?l:n[t*s+i+s],a=i===u?r:t===p?e:n[t*s+i+s+1];o[d++]=(l+e+r+a)/4}else o[d++]=l}h.push(o)}let d=null;if(o){d=new Uint8Array(c*f);let t=0;for(let i=0;i<r;i+=2)for(let l=0;l<s;l+=2){const n=o[i*s+l];if(e){const e=l===u?n:o[i*s+l+1],r=i===p?n:o[i*s+l+s],a=l===u?r:i===p?e:o[i*s+l+s+1];d[t++]=n*e*r*a?1:0}else d[t++]=n}}return new l.Z({width:c,height:f,pixelType:a,pixels:h,mask:d})}function k(t,e,i){if(!n(t))return null;const{width:s,height:l}=e;let{width:r,height:o}=t;const a=new Map,h={x:0,y:0},c=null==i?1:1+i;let f=t;for(let t=0;t<c;t++){const i=Math.ceil(r/s),n=Math.ceil(o/l);for(let r=0;r<n;r++){h.y=r*l;for(let l=0;l<i;l++){h.x=l*s;const i=w(f,h,e);a.set(`${t}/${r}/${l}`,i)}}t<c-1&&(f=y(f)),r=Math.round(r/2),o=Math.round(o/2)}return a}function A(t,e,i,s,l=.5){const{width:n,height:r}=t,{width:o,height:a}=e,h=s.cols,c=s.rows,f=Math.ceil(o/h-.1/h),p=Math.ceil(a/c-.1/c);let u,d,x,g,m,w,y;const k=f*h,A=k*p*c,b=new Float32Array(A),C=new Float32Array(A),v=new Uint32Array(A),U=new Uint32Array(A);let T,M,_=0;for(let t=0;t<p;t++)for(let e=0;e<f;e++){u=12*(t*f+e),d=i[u],x=i[u+1],g=i[u+2],m=i[u+3],w=i[u+4],y=i[u+5];for(let i=0;i<c;i++){_=(t*c+i)*k+e*h,M=(i+.5)/c;for(let t=0;t<i;t++)T=(t+.5)/h,b[_+t]=(d*T+x*M+g)*n-l,C[_+t]=(m*T+w*M+y)*r-l,v[_+t]=Math.round(b[_+t]),U[_+t]=Math.round(C[_+t])}u+=6,d=i[u],x=i[u+1],g=i[u+2],m=i[u+3],w=i[u+4],y=i[u+5];for(let i=0;i<c;i++){_=(t*c+i)*k+e*h,M=(i+.5)/c;for(let t=i;t<h;t++)T=(t+.5)/h,b[_+t]=(d*T+x*M+g)*n-l,C[_+t]=(m*T+w*M+y)*r-l,v[_+t]=Math.round(b[_+t]),U[_+t]=Math.round(C[_+t])}}return{offsets_x:b,offsets_y:C,offsets_xi:v,offsets_yi:U,gridWidth:k}}function b(t,e){const{coefficients:i,spacing:s}=e,{offsets_x:l,offsets_y:n,gridWidth:r}=A(t,t,i,{rows:s[0],cols:s[1]},.5),{width:o,height:a}=t,h=new Float32Array(o*a),c=180/Math.PI;for(let t=0;t<a;t++)for(let e=0;e<o;e++){const i=t*r+e,s=0===t?i:i-r,f=t===a-1?i:i+r,p=l[s]-l[f],u=n[f]-n[s];if(isNaN(p)||isNaN(u))h[t*o+e]=90;else{let i=Math.atan2(u,p)*c;i=(360+i)%360,h[t*o+e]=i}}return h}function C(t,e,i,s,r="nearest"){if(!n(t))return null;"majority"===r&&(t=d(t));const{pixels:o,mask:a,pixelType:h}=t,c=t.width,f=t.height,p=l.Z.getPixelArrayConstructor(h),u=o.length,{width:x,height:g}=e;let m=!1;for(let t=0;t<i.length;t+=3)-1===i[t]&&-1===i[t+1]&&-1===i[t+2]&&(m=!0);const{offsets_x:w,offsets_y:y,offsets_xi:k,offsets_yi:b,gridWidth:C}=A({width:c,height:f},e,i,s,"majority"===r?0:.5);let v;const U=(t,e,i)=>{const s=t instanceof Float32Array||t instanceof Float64Array?0:.5;for(let l=0;l<g;l++){v=l*C;for(let n=0;n<x;n++){if(w[v]<0||y[v]<0)t[l*x+n]=0;else if(i)t[l*x+n]=e[k[v]+b[v]*c];else{const i=Math.floor(w[v]),r=Math.floor(y[v]),o=Math.ceil(w[v]),h=Math.ceil(y[v]),f=w[v]-i,p=y[v]-r;if(!a||a[i+r*c]&&a[i+r*c]&&a[i+h*c]&&a[o+h*c]){const a=(1-f)*e[i+r*c]+f*e[o+r*c],u=(1-f)*e[i+h*c]+f*e[o+h*c];t[l*x+n]=(1-p)*a+p*u+s}else t[l*x+n]=e[k[v]+b[v]*c]}v++}}},T=[];let M;for(let t=0;t<u;t++)M=new p(x*g),U(M,o[t],"nearest"===r||"majority"===r),T.push(M);const _=new l.Z({width:x,height:g,pixelType:h,pixels:T});if(a)_.mask=new Uint8Array(x*g),U(_.mask,a,!0);else if(m){_.mask=new Uint8Array(x*g);for(let t=0;t<x*g;t++)_.mask[t]=w[t]<0||y[t]<0?0:1}return _.updateStatistics(),_}}}]);