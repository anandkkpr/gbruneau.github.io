import"https://cdn.skypack.dev/leaflet@1.7.1";import"https://cdn.skypack.dev/leaflet-rotate@0.1.4";import"https://cdn.skypack.dev/jquery";import"https://maxwell-ilai.github.io/Leaflet.SidePanel/dist/leaflet-sidepanel.min.js";const A=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}};A();var P="hsl(197, 100%, 60%)",U=window.location.search,p=new URLSearchParams(U),k=p.has("z")==!0?Number(p.get("z")):10,C=p.has("lat")==!0?Number(p.get("lat")):46.7,x=p.has("lng")==!0?Number(p.get("lng")):-71.3,O=p.has("rot")==!0?Number(p.get("rot")):0,$=p.has("m")==!0?p.get("m").toString()=="true":!1,Z=p.has("t")==!0?p.get("t"):"New Map",c="538d4534960f4226bb8ca146e7df3941",D="e9xKxlmCUuPGGQvk3FYwqWWmXgyvomdDUECpkBfjQA1obipCjNRKwWlHd1pYr5K2",H="//{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",W='Map data \xA9 <a href="http://openstreetmap.org">OpenStreetMap FR</a> contributors',F=new L.TileLayer(H,{minZoom:1,maxZoom:20,attribution:W,BMname:"OSM France",BMicon:"osmFR.png"}),K="https://m1.mapserver.mapy.cz/base-m/{z}-{x}-{y}",V='Map data \xA9 <a href="http://openstreetmap.org">OpenStreetMap CZ</a> contributors',Y=new L.TileLayer(K,{minZoom:1,maxZoom:20,attribution:V,BMname:"OSM Check Republic",BMicon:"osmCZ.png"}),q='OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap ORG</a>',J="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",Q=L.tileLayer(J,{maxZoom:19,attribution:q,BMname:"Open Street Map",BMicon:"Mapnik.png"}),X=L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}",{attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',subdomains:"abcd",minZoom:0,maxZoom:18,ext:"png",BMname:"Stamen Terrain Map",BMicon:"Stamen_Terrain.png"}),j=L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}",{attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',subdomains:"abcd",minZoom:1,maxZoom:16,ext:"jpg",BMname:"Stamen Watercolor",BMicon:"Stamen_Watercolor.jpg"}),ee=L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC",maxZoom:16,BMname:"National Geographic",BMicon:"Esri_NatGeoWorldMap.png"}),te=L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012",BMname:"ESRI Street",BMicon:"ESRIMap.png"}),oe=L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community",BMname:"ESRI Topo",BMicon:"ESRITopo.png"}),re=L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",{maxZoom:17,attribution:'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',BMname:"Open Topo Map",BMicon:"OpenTopoMap.png"}),ae=L.tileLayer("https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",{maxZoom:20,attribution:'<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',BMname:"Cyclo OSM",BMicon:"CyclOSM.png"}),ne=L.tileLayer("https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey={apikey}",{attribution:'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',apikey:c,maxZoom:22,BMname:"Thunderforest Outdoors",BMicon:"Thunderforest_Outdoors.png"}),ie=L.tileLayer("https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey={apikey}",{attribution:'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',apikey:c,maxZoom:22,BMname:"Thunderforest Pioneer",BMicon:"Thunderforest_Pioneer.png"}),se=L.tileLayer("https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey={apikey}",{attribution:'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',apikey:c,maxZoom:22,BMname:"Thunderforest Neighbourhood",BMicon:"Thunderforest_Neighbourhood.png"}),pe=L.tileLayer("https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey={apikey}",{attribution:'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',apikey:c,maxZoom:22,BMname:"Thunderforest Open Cycle Map",BMicon:"Thunderforest_OpenCycleMap.png"}),le=L.tileLayer("https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey={apikey}",{attribution:'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',apikey:c,maxZoom:22,BMname:"Thunderforest Mobile Atlas",BMicon:"Thunderforest_MobileAtlas.png"}),ce=L.tileLayer("https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey={apikey}",{attribution:'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',apikey:c,maxZoom:22,BMname:"Thunderforest Landscape",BMicon:"Thunderforest_Landscape.png"}),me=L.tileLayer("https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey={apikey}",{attribution:'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',apikey:c,maxZoom:22,BMname:"Thunderforest Transport",BMicon:"Thunderforest_Transport.png"}),de=L.tileLayer("https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey={apikey}",{attribution:'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',apikey:c,maxZoom:22,BMname:"Thunderforest Transport Dark",BMicon:"Thunderforest_TransportDark.png"}),ue=L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",BMname:"ESRI Image",BMicon:"ESRIImg.png"}),ge=L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",{maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"],BMname:"Google Map",BMicon:"GoogleMap.png"}),ye=L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",{maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"],BMname:"Google Satellite",BMicon:"GoogleSat.png"}),fe=L.tileLayer("http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",{maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"],BMname:"Google Terrain",BMicon:"GoogleTerrain.png"}),he=L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",maxZoom:20,BMname:"CartoDB Voyager",BMicon:"CartoDB_VoyagerLabelsUnder.png"}),ve=L.tileLayer("https://tile.jawg.io/4284c312-895e-4aa5-9c79-c8974c53f9d3/{z}/{x}/{y}{r}.png?access-token={accessToken}",{attribution:'<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',minZoom:0,maxZoom:22,subdomains:"abcd",accessToken:D,BMname:"Jawn GB",BMicon:"Jawg_GBMain.png"}),Me=L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}",{attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',subdomains:"abcd",minZoom:0,maxZoom:20,ext:"png",BMname:"Stamen Toner Lite",BMicon:"Stamen_TonerLite.png"}),m=[{category:"Base Map",layers:[Q,ve,ge,F,Y,te,ee,se]},{category:"Topo",layers:[re,ne,ce,fe,X,oe]},{category:"Imagery",layers:[ye,ue]},{category:"Transport",layers:[le,me,de,ae,pe,he]},{category:"Miscelaneous",layers:[ie,Me,j]}],o=L.map("map",{center:new L.LatLng(C,x),zoom:k,zoomControl:!1,rotate:!0,touchRotate:!0,rotateControl:!1,BMHasMarker:!1,BMTitle:Z,bearing:O}),l,N=p.has("l")==!0?p.get("l"):0;o.addLayer(T(N));L.control.sidepanel("panelID",{panelPosition:"left",hasTabs:!0,tabsPosition:"top",pushControls:!0,darkMode:!0,startTab:"tab-1"}).addTo(o);o.on("rotate",function(e){B(E(o.getBearing()))});o.on("resizeend",function(e){g(b()),y(w()),v(_())});o.on("zoomend",function(e){v(o.getZoom())});o.on("moveend",function(e){g(b()),y(w())});$&&G();ke();Ce();xe();Oe();Ne();R(Z);B(O);g(C);y(x);v(k);z(N);function d(e,t){var r=new URLSearchParams(window.location.search);r.set(e,t),window.history.pushState({},o.options.BMTitle,`${location.pathname}?${r.toString()}`)}function Be(){return o.options.BMTitle}function R(e){o.options.BMTitle=e,document.getElementById("fTitle").value=e,document.getElementById("curTitle").innerText=e,document.title=`BestMap: ${e}`,o.options.BMHasMarker&&l.setTooltipContent(e),d("t",e)}function Le(){return E(o.getBearing())}function B(e){document.getElementById("fRot").value=e,d("rot",e)}function g(e){document.getElementById("fLat").value=e,d("lat",e)}function b(){var e;return o.options.BMHasMarker?e=l.getLatLng().lat:e=o.getCenter().lat,e}function w(){var e;return o.options.BMHasMarker?e=l.getLatLng().lng:e=o.getCenter().lng,e}function y(e){document.getElementById("fLng").value=e,d("lng",e)}function _(){return o.getZoom()}function v(e){document.getElementById("fZoom").value=e,d("z",e)}function be(e){e?(l.setTooltipContent(o.options.BMTitle),document.getElementById("btFlipMarker").innerText="Remove Marker"):document.getElementById("btFlipMarker").innerText="Add Marker",d("m",e)}function we(e){var t=e.coords,r=Math.min(Math.max(Math.ceil(Math.log(t.accuracy)/Math.log(2)),0),20);r=14,o.flyTo(new L.LatLng(t.latitude,t.longitude),r)}function Ee(e){e.code==1?console.log("getCurrentPosition Error: Access is denied!"):e.code==2&&console.log("getCurrentPosition Error: Position is unavailable!")}function E(e){var t=parseInt(e);return e<0?t=360- -e%360:t=e%360,parseInt(t)}function Te(e){var t=parseFloat(e);return t>90&&(t=90),t<-90&&(t=-90),t}function Se(e){var t=parseFloat(e);return t>180&&(t=180),t<-180&&(t=-180),t}function Ie(e){var t=parseInt(e);return t>o.maxZoom&&(t=o.maxZoom),t<o.minZoom&&(t=o.minZoom),t}function S(e){var t=parseInt(e);isNaN(t)&&(t=0),o.eachLayer(function(r){Object.getOwnPropertyNames(r).includes("_icon")||o.removeLayer(r)}),o.addLayer(T(t)),z(t)}function ke(){for(var e=document.getElementById("BM-Layer-Nav-Panel"),t=0,r=0;r<m.length;r++){for(var a='<div class="BM-Layer-Nav-Container">',n=m[r].layers,i=0;i<n.length;i++){var s=`BMLayer-${t}`;a+=`<div class="BM-Layer-Bt" id="${s}">
            <img src='layerIcons/${n[i].options.BMicon}'
                 title='${m[r].layers[i].options.BMname}'>
            <div class="BM-Layer-Bt-Name">${m[r].layers[i].options.BMname}</div>
            </div>`,t++}a+="</div>";var u=`<div class="BM-Layer-Nav-Category">${m[r].category}</div>${a}`;e.innerHTML+=u}}function T(e){var t=0,r,a,n=parseInt(e);isNaN(n)&&(n=0);for(var i=0;i<m.length;i++){a=m[i].layers;for(var s=0;s<a.length;s++)i===0&&s===0&&(r=a[s]),t===n&&(r=a[s]),t++}return r}function z(e){for(var t=document.getElementsByClassName("BM-Layer-Bt"),r=0;r<t.length;r++){var a=t[r].getElementsByTagName("img")[0];r==e?a.style.borderColor=P:a.style.borderColor="black"}document.getElementById("fLayer").value=T(e).options.BMname,document.getElementById("fLayerID").value=e,d("l",e)}function Ce(){document.addEventListener("click",function(e){if(e.target.matches(".BM-Layer-Bt img")){var t=e.target.parentElement.id.split("-")[1];S(t)}if(e.target.matches(".BM-Layer-Bt div")){var t=e.target.parentElement.id.split("-")[1];S(t)}},!1)}function M(){return o.options.BMHasMarker?l.getLatLng():o.getCenter()}function xe(){document.getElementById("btGoOSM").addEventListener("click",function(){var e=M(),t=o.getZoom(),r=`https://www.openstreetmap.org/#map=${t}/${e.lat}/${e.lng}`;window.open(r)}),document.getElementById("btGoGoogle").addEventListener("click",function(){var e=M(),t=`https://www.google.com/maps/search/?api=1&query=${e.lat},${e.lng}`;window.open(t)}),document.getElementById("btRotateNorth").addEventListener("click",function(){o.setBearing(0)}),document.getElementById("btFlipMarker").addEventListener("click",function(){G()}),document.getElementById("btGoHere").addEventListener("click",function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(we,Ee)}),document.getElementById("shareToClipboard").addEventListener("click",function(){navigator.clipboard.writeText(window.location.href)}),document.getElementById("shareGmap").addEventListener("click",function(){var e=M(),t=`https://www.google.com/maps/search/?api=1&query=${e.lat},${e.lng}`;navigator.clipboard.writeText(t)}),document.getElementById("shareToMail").addEventListener("click",function(){var e=encodeURIComponent(window.location.href),t=encodeURIComponent(o.options.BMTitle),r=`mailto:?subject=${t}&body=${t}%0A${e}`;document.location=r})}function I(){document.getElementById("btEdit").style.display="block",document.getElementById("btEditSave").style.display="none",document.getElementById("btEditCancel").style.display="none",document.getElementById("fTitle").disabled=!0,document.getElementById("fRot").disabled=!0,document.getElementById("fLat").disabled=!0,document.getElementById("fLng").disabled=!0,document.getElementById("fZoom").disabled=!0}function Oe(){var e,t,r,a,n;document.getElementById("btEdit").addEventListener("click",function(){e=Be(),t=Le(),r=b(),a=w(),n=_(),document.getElementById("btEdit").style.display="none",document.getElementById("btEditSave").style.display="block",document.getElementById("btEditCancel").style.display="block",document.getElementById("fTitle").disabled=!1,document.getElementById("fRot").disabled=!1,document.getElementById("fLat").disabled=!1,document.getElementById("fLng").disabled=!1,document.getElementById("fZoom").disabled=!1}),document.getElementById("btEditSave").addEventListener("click",function(){I();var i=document.getElementById("fTitle").value;i!=e&&R(i);var s=E(document.getElementById("fRot").value);console.log(`newRot: ${s} oldRot: ${t}`),s!=t&&(o.setBearing(s),B(s));var u=Te(document.getElementById("fLat").value),f=Se(document.getElementById("fLng").value);(u!=r||f!=a)&&(o.panTo(new L.LatLng(u,f),h),u!=r&&g(u),f!=a&&y(f));var h=Ie(document.getElementById("fZoom").value);h!=n&&(o.setZoom(h),v(h))}),document.getElementById("btEditCancel").addEventListener("click",function(){I(),document.getElementById("fTitle").value=e,document.getElementById("fRot").value=t})}function Ze(e){if(console.log(e),Array.isArray(e.data)&&e.data.length>0){var t=e.data[0],r=t.latitude,a=t.longitude;o.panTo(new L.LatLng(r,a),{}),g(r),y(a)}}function Ne(){document.getElementById("fSearch").addEventListener("change",function(){var e=document.getElementById("fSearch").value,t="a6e799eebc8774260325cdf754efb774",r=`http://api.positionstack.com/v1/forward?access_key=${t}&query=${e}`;console.log(e),fetch(r).then(a=>a.json()).then(a=>Ze(a))})}function G(){o.options.BMHasMarker?o.removeLayer(l):(l=new L.Marker(o.getCenter(),{draggable:!0}),l.bindTooltip(o.options.BMTitle),l.on("dragend",function(e){var t=l.getLatLng().lat,r=l.getLatLng().lng;g(t),y(r)}),o.addLayer(l)),o.options.BMHasMarker=!o.options.BMHasMarker,be(o.options.BMHasMarker)}
