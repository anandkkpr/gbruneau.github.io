import{L as t,I as b,M,P as v,R as w,B as S}from"./vendor.5ffde8c8.js";const x=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const g of l.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&a(g)}).observe(document,{childList:!0,subtree:!0});function i(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=i(s);fetch(s.href,l)}};x();class T{constructor(e,i){var a=new URLSearchParams(e);this.z=a.has("z")==!0?Number(a.get("z")):10,this.lat=a.has("lat")==!0?Number(a.get("lat")):46.81,this.lng=a.has("lng")==!0?Number(a.get("lng")):-71.2,this.hasMarker=a.has("m")==!0?a.get("m").toString()=="true":!1,this.layerID=a.has("l")==!0?a.get("l"):i._leaflet_id,this.title=a.has("t")==!0?a.get("t"):""}getUrlSeaqrch(){var e="l="+this.layerID.toString()+"&z="+this.z.toString()+"&lat="+this.lat.toFixed(6)+"&lng="+this.lng.toFixed(6);return this.hasMarker==!0&&(e+="&m="+this.hasMarker.toString(),this.title!=""&&(e+="&t="+this.title)),e}setUrl(){var e=`Best-Map${this.title==""?"":": "+this.title}`;document.title=e,window.history.pushState({},e,`${location.pathname}?${this.getUrlSeaqrch()}`)}}function C(){var o=600,e=window.innerWidth,i=window.innerHeight;return!(e<o||i<o)}var y=C(),L=[46.86034,-71.17519],O=10,p=t.map("map",{scrollWheelZoom:!0,zoomControl:!1,attributionControl:!1,center:L,zoom:O}),c="538d4534960f4226bb8ca146e7df3941",z="e9xKxlmCUuPGGQvk3FYwqWWmXgyvomdDUECpkBfjQA1obipCjNRKwWlHd1pYr5K2",k="//{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",E='Map data \xA9 <a href="http://openstreetmap.org">OpenStreetMap FR</a> contributors',G=new t.TileLayer(k,{minZoom:1,maxZoom:20,attribution:E}),A="https://m1.mapserver.mapy.cz/base-m/{z}-{x}-{y}",_='Map data \xA9 <a href="http://openstreetmap.org">OpenStreetMap CZ</a> contributors',B=new t.TileLayer(A,{minZoom:1,maxZoom:20,attribution:_}),I='OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap ORG</a>',U="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",Z=t.tileLayer(U,{maxZoom:19,attribution:I}),R=t.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}",{attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',subdomains:"abcd",minZoom:0,maxZoom:18,ext:"png"}),N=t.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC",maxZoom:16}),P=t.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012"}),W=t.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"}),D=t.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",{maxZoom:17,attribution:'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'}),F=t.tileLayer("https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",{maxZoom:20,attribution:'<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),K=t.tileLayer("https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey={apikey}",{attribution:'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',apikey:c,maxZoom:22}),J=t.tileLayer("https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey={apikey}",{attribution:'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',apikey:c,maxZoom:22}),V=t.tileLayer("https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey={apikey}",{attribution:'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',apikey:c,maxZoom:22}),q=t.tileLayer("https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey={apikey}",{attribution:'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',apikey:c,maxZoom:22}),H=t.tileLayer("https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey={apikey}",{attribution:'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',apikey:c,maxZoom:22}),Q=t.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"}),j=t.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",{maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"]}),Y=t.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",{maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"]}),$=t.tileLayer("http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",{maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"]}),X=t.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",maxZoom:20}),u=t.tileLayer("https://tile.jawg.io/4284c312-895e-4aa5-9c79-c8974c53f9d3/{z}/{x}/{y}{r}.png?access-token={accessToken}",{attribution:'<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',minZoom:0,maxZoom:22,subdomains:"abcd",accessToken:z}),ee="https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}",te='Map data \xA9 <a href="http://esri.com">OpenStreetMap</a>';t.tileLayer(ee,{maxZoom:13,attribution:te,opacity:.4});var n="./layerIcons/",oe=[{title:"<span class='bmBaseMap'>Thunderforest Outdoors</span>",layer:K,icon:n+"Thunderforest_Outdoors.png"},{title:"<span class='bmBaseMap'>Jawg GBMain</span>",layer:u,icon:n+"Jawg_GBMain.png"},{title:"<span class='bmBaseMap'>OSM France</span>",layer:G,icon:n+"osmFR.png"},{title:"<span class='bmBaseMap'>OSM Org</span>",layer:Z,icon:n+"Mapnik.png"},{title:"<span class='bmBaseMap'>OSM Czech Republic</span>",layer:B,icon:n+"osmFR.png"},{title:"<span class='bmBaseMap'>Google Map</span>",layer:j,icon:n+"GoogleMap.png"},{title:"<span class='bmBaseMap'>Stamen Terrain</span>",layer:R,icon:n+"Stamen_Terrain.png"},{title:"<span class='bmBaseMap'>National Geographic</span>",layer:N,icon:n+"Esri_NatGeoWorldMap.png"},{title:"<span class='bmBaseMap'>ESRI Map</span>",layer:P,icon:n+"ESRIMap.png"},{title:"<span class='bmBaseMap'>Thunderforest Neighbourhood</span>",layer:V,icon:n+"Thunderforest_Outdoors.png"},{title:"<span class='bmBaseMap'>Open Topo Map</span>",layer:D,icon:n+"OpenTopoMap.png"},{title:"<span class='bmBaseMap'>ESRI World Topo</span>",layer:W,icon:n+"ESRITopo.png"},{title:"<span class='bmBaseMap'>Google Terrain</span>",layer:$,icon:n+"GoogleTerrain.png"},{title:"<span class='bmBaseMap'>Cyclo OSM</span>",layer:F,icon:n+"CyclOSM.png"},{title:"<span class='bmBaseMap'>Thunderforest OpenCycleMap</span>",layer:q,icon:n+"Thunderforest_OpenCycleMap.png"},{title:"<span class='bmBaseMap'>Thunderforest Pioneer</span>",layer:J,icon:n+"Thunderforest_Pioneer.png"},{title:"<span class='bmBaseMap'>Thunderforest Mobile Atlas</span>",layer:H,icon:n+"Thunderforest_MobileAtlas.png"},{title:"<span class='bmBaseMap'>Carto DB Voyager</span>",layer:X,icon:n+"CartoDB_VoyagerLabelsUnder.png"},{title:"<span class='bmBaseMap'>Esri World Imagery</span>",layer:Q,icon:n+"ESRIImg.png"},{title:"<span class='bmBaseMap'>Google Satellite</span>",layer:Y,icon:n+"GoogleSat.png"}],m=b(oe,{position:"topright",maxLayersInRow:4});m.addTo(p);var re="https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey={apikey}",ae=t.tileLayer(re,{apikey:c}),f=-5;y&&(f=-6);var ne=new M(ae,{toggleDisplay:!0,width:150,height:100,minimized:!y,aimingRectOptions:{color:"#FF0000",weight:1,opacity:1},zoomLevelOffset:f});const se=new v({position:"topleft",unit:"metres",clearMeasurementsOnStop:!0}),ie=new w({provider:new S,autoComplete:!0,position:"topleft"});var pe=t.Control.extend({options:{position:"topleft"},onAdd:function(o){var e=t.DomUtil.create("div","leaflet-bar leaflet-control leaflet-control-custom");return e.style.backgroundColor="white",e.style.backgroundImage="url('./icons/gmapicon.png')",e.style.backgroundSize="25px 25px",e.style.width="25px",e.style.height="25px",e.title="Open in Google Map",e.onclick=function(){var i=o.getCenter();o.getZoom();var a="https://www.google.com/maps/search/?api=1&query="+i.lat+","+i.lng;window.open(a)},e}}),le=t.Control.extend({options:{position:"topleft"},onAdd:function(o){var e=t.DomUtil.create("div","leaflet-bar leaflet-control leaflet-control-custom");return e.style.backgroundColor="white",e.style.backgroundImage="url('./icons/osmicon.png')",e.style.backgroundSize="25px 25px",e.style.width="25px",e.style.height="25px",e.title="Open in OSM",e.onclick=function(){var i=o.getCenter(),a=o.getZoom(),s="https://www.openstreetmap.org/#map="+a+"/"+i.lat+"/"+i.lng;window.open(s)},e}}),ce=t.Control.extend({options:{position:"topleft"},onAdd:function(o){var e=t.DomUtil.create("div","leaflet-bar leaflet-control leaflet-control-custom");return e.style.backgroundColor="white",e.style.backgroundImage="url('./icons/opentopo.png')",e.style.backgroundSize="25px 25px",e.style.width="25px",e.style.height="25px",e.title="Open in Open Topo Map",e.onclick=function(){var i=o.getCenter(),a=o.getZoom(),s="https://opentopomap.org/#marker="+a+"/"+i.lat+"/"+i.lng;window.open(s)},e}});ie.addTo(p);p.addControl(new pe);y&&(p.addControl(new le),p.addControl(new ce));se.addTo(p);t.control.scale({metric:!0,imperial:!1,position:"bottomleft"}).addTo(p);ne.addTo(p);var me=window.location.search,ge=u,r=new T(me,ge);for(var d in m._layers)d.toString()==r.layerID.toString()&&m.setActiveLayer(m._layers[d].layer);function he(o){var e=o.coords;r.lat=e.latitude,r.lng=e.longitude,r.setUrl()}function ye(o){o.code==1?console.log("getCurrentPosition Error: Access is denied!"):o.code==2&&console.log("getCurrentPosition Error: Position is unavailable!")}navigator.geolocation&&navigator.geolocation.getCurrentPosition(he,ye);var de=t.icon({iconUrl:"./icons/marker-icon.png",iconSize:[25,41],iconAnchor:[12,41],shadowUrl:"./icons/marker-shadow.png",shadowSize:[41,41]});p.setView([r.lat,r.lng],r.z,{});if(r.hasMarker){var h=t.marker([r.lat,r.lng],{draggable:"true",icon:de,title:r.title}).addTo(p);h.on("dragend",function(o){r.lat=h.getLatLng().lat,r.lng=h.getLatLng().lng,r.setUrl()})}p.on("zoomend",function(){r.z=p.getZoom(),r.setUrl()});p.on("moveend",function(){if(!r.hasMarker){let o=p.getCenter();r.lat=o.lat,r.lng=o.lng,r.setUrl()}});m.on("activelayerchange",function(o){r.layerID=o.target._activeLayerId,r.setUrl()});
