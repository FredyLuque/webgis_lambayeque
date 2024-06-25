var map = L.map('map', {
    center: [-6.771665066884779, -79.8379505636377],
    zoom: 18,
    minZoom: 10,
    maxZoom: 30,
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleHybrid.addTo(map);

var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleSat.addTo(map);

var lambayeque = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_lambayeque/wms", {
	   layers: "webgis_lambayeque:lambayeque", //gisweb:lambayeque
       format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
lambayeque.addTo(map);

var casinos = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_lambayeque/wms", {
	   layers: "webgis_lambayeque:casinos", //gisweb:lambayeque
       format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
casinos.addTo(map);

var escuelas = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_lambayeque/wms", {
	   layers: "webgis_lambayeque:escuelas", //gisweb:lambayeque
       format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
escuelas.addTo(map);

var farmacias = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_lambayeque/wms", {
	   layers: "webgis_lambayeque:farmacias", //gisweb:lambayeque
       format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
farmacias.addTo(map);

var hospitales = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_lambayeque/wms", {
	   layers: "webgis_lambayeque:hospitales", //gisweb:lambayeque
       format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
hospitales.addTo(map);

var hoteles = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_lambayeque/wms", {
	   layers: "webgis_lambayeque:hoteles", //gisweb:lambayeque
       format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
hoteles.addTo(map);

var restaurantes = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_lambayeque/wms", {
	   layers: "webgis_lambayeque:restaurantes", //gisweb:lambayeque
       format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
restaurantes.addTo(map);

var supermercados = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_lambayeque/wms", {
	   layers: "webgis_lambayeque:supermercados", //gisweb:lambayeque
       format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
supermercados.addTo(map);

var baseMaps = {
    "OSM": basemapOSM,
    "Hybrid": googleHybrid,
    "googleSat": googleSat
};

var overlayMaps = {
    "Limite Departamental": lambayeque,
    "Casinos": casinos,
    "Escuelas": escuelas,
    "Farmacias": farmacias,
    "Hospiatles": hospitales,
    "Hoteles": hoteles,
    "Restaurantes": restaurantes,
    "Supermercados": supermercados
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);

L.control.scale({
    imperial: false
  }).addTo(map);
  