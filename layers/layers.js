var wms_layers = [];

var lyr_Mapatopogrficopirmidetopogrfica_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoserveis.icgc.cat/icc_mapesmultibase/utm/wms/service",
    attributions: ' ',
                              params: {
                                "LAYERS": "topo",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Mapa topográfico (pirámide topográfica)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Mapatopogrficopirmidetopogrfica_0, 0]);

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_STOrtofotocolor2020_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_2020",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "[ST] Ortofoto color [2020]",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_STOrtofotocolor2020_2, 0]);
var format_PositiusSantVicenOK_3 = new ol.format.GeoJSON();
var features_PositiusSantVicenOK_3 = format_PositiusSantVicenOK_3.readFeatures(json_PositiusSantVicenOK_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PositiusSantVicenOK_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PositiusSantVicenOK_3.addFeatures(features_PositiusSantVicenOK_3);
var lyr_PositiusSantVicenOK_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PositiusSantVicenOK_3, 
                style: style_PositiusSantVicenOK_3,
                interactive: true,
                title: '<img src="styles/legend/PositiusSantVicenOK_3.png" /> Positius Sant Vicenç OK'
            });
var group_Mapasdefondo = new ol.layer.Group({
                                layers: [lyr_Mapatopogrficopirmidetopogrfica_0,lyr_GoogleSatellite_1,lyr_STOrtofotocolor2020_2,],
                                title: "Mapas de fondo"});

lyr_Mapatopogrficopirmidetopogrfica_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_STOrtofotocolor2020_2.setVisible(true);lyr_PositiusSantVicenOK_3.setVisible(true);
var layersList = [group_Mapasdefondo,lyr_PositiusSantVicenOK_3];
lyr_PositiusSantVicenOK_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'área': 'área', 'area': 'area', 'layer': 'layer', 'path': 'path', });
lyr_PositiusSantVicenOK_3.set('fieldImages', {'fid': 'Range', 'id': 'Range', 'área': 'Range', 'area': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_PositiusSantVicenOK_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'área': 'no label', 'area': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_PositiusSantVicenOK_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});