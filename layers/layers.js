ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-8096824.831574, -4479099.674628, -8092543.873241, -4476747.528795]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Casa_1 = new ol.format.GeoJSON();
var features_Casa_1 = format_Casa_1.readFeatures(json_Casa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Casa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casa_1.addFeatures(features_Casa_1);
cluster_Casa_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Casa_1
});
var lyr_Casa_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Casa_1, 
                style: style_Casa_1,
                popuplayertitle: 'Casa',
                interactive: true,
                title: '<img src="styles/legend/Casa_1.png" /> Casa'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Casa_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Casa_1];
lyr_Casa_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'T_Pregunt': 'T_Pregunt', 'Porc_Co': 'Porc_Co', 'Porc_Inc': 'Porc_Inc', 'N_Preg_Cor': 'N_Preg_Cor', 'N_Preg_Inc': 'N_Preg_Inc', 'Porc_Total': 'Porc_Total', 'video': 'video', });
lyr_Casa_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'T_Pregunt': 'TextEdit', 'Porc_Co': 'TextEdit', 'Porc_Inc': 'TextEdit', 'N_Preg_Cor': 'TextEdit', 'N_Preg_Inc': 'TextEdit', 'Porc_Total': 'TextEdit', 'video': 'TextEdit', });
lyr_Casa_1.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'T_Pregunt': 'inline label - always visible', 'Porc_Co': 'inline label - always visible', 'Porc_Inc': 'inline label - always visible', 'N_Preg_Cor': 'inline label - always visible', 'N_Preg_Inc': 'inline label - always visible', 'Porc_Total': 'inline label - always visible', 'video': 'inline label - always visible', });
lyr_Casa_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});