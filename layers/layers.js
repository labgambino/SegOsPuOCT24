ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:25830").setExtent([293243.677805, 4120687.719631, 297768.144807, 4123092.181335]);
var wms_layers = [];

var lyr_Ortoimagen_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ign.es/wms-inspire/pnoa-ma?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortoimagen",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortoimagen_0, 0]);
var format_0702NucleosUrbanospol1Recor1_1 = new ol.format.GeoJSON();
var features_0702NucleosUrbanospol1Recor1_1 = format_0702NucleosUrbanospol1Recor1_1.readFeatures(json_0702NucleosUrbanospol1Recor1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_0702NucleosUrbanospol1Recor1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0702NucleosUrbanospol1Recor1_1.addFeatures(features_0702NucleosUrbanospol1Recor1_1);
var lyr_0702NucleosUrbanospol1Recor1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_0702NucleosUrbanospol1Recor1_1, 
                style: style_0702NucleosUrbanospol1Recor1_1,
                popuplayertitle: "07 02NucleosUrbanos pol 1Recor1",
                interactive: true,
                title: '<img src="styles/legend/0702NucleosUrbanospol1Recor1_1.png" /> 07 02NucleosUrbanos pol 1Recor1'
            });
var format_ARQUETASentities_2 = new ol.format.GeoJSON();
var features_ARQUETASentities_2 = format_ARQUETASentities_2.readFeatures(json_ARQUETASentities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ARQUETASentities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARQUETASentities_2.addFeatures(features_ARQUETASentities_2);
var lyr_ARQUETASentities_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ARQUETASentities_2, 
                style: style_ARQUETASentities_2,
                popuplayertitle: "ARQUETAS entities",
                interactive: true,
                title: '<img src="styles/legend/ARQUETASentities_2.png" /> ARQUETAS entities'
            });
var format_AcotacionEjeOsunaPueblaentities_3 = new ol.format.GeoJSON();
var features_AcotacionEjeOsunaPueblaentities_3 = format_AcotacionEjeOsunaPueblaentities_3.readFeatures(json_AcotacionEjeOsunaPueblaentities_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_AcotacionEjeOsunaPueblaentities_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcotacionEjeOsunaPueblaentities_3.addFeatures(features_AcotacionEjeOsunaPueblaentities_3);
var lyr_AcotacionEjeOsunaPueblaentities_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AcotacionEjeOsunaPueblaentities_3, 
                style: style_AcotacionEjeOsunaPueblaentities_3,
                popuplayertitle: "AcotacionEjeOsunaPuebla entities",
                interactive: true,
                title: '<img src="styles/legend/AcotacionEjeOsunaPueblaentities_3.png" /> AcotacionEjeOsunaPuebla entities'
            });
var format_AcotacionEjeOsunaPueblaentities_4 = new ol.format.GeoJSON();
var features_AcotacionEjeOsunaPueblaentities_4 = format_AcotacionEjeOsunaPueblaentities_4.readFeatures(json_AcotacionEjeOsunaPueblaentities_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_AcotacionEjeOsunaPueblaentities_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcotacionEjeOsunaPueblaentities_4.addFeatures(features_AcotacionEjeOsunaPueblaentities_4);
var lyr_AcotacionEjeOsunaPueblaentities_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AcotacionEjeOsunaPueblaentities_4, 
                style: style_AcotacionEjeOsunaPueblaentities_4,
                popuplayertitle: "AcotacionEjeOsunaPuebla entities",
                interactive: true,
                title: '<img src="styles/legend/AcotacionEjeOsunaPueblaentities_4.png" /> AcotacionEjeOsunaPuebla entities'
            });
var format_EJEOSUNAPUEBLAejeentities_5 = new ol.format.GeoJSON();
var features_EJEOSUNAPUEBLAejeentities_5 = format_EJEOSUNAPUEBLAejeentities_5.readFeatures(json_EJEOSUNAPUEBLAejeentities_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_EJEOSUNAPUEBLAejeentities_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EJEOSUNAPUEBLAejeentities_5.addFeatures(features_EJEOSUNAPUEBLAejeentities_5);
var lyr_EJEOSUNAPUEBLAejeentities_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EJEOSUNAPUEBLAejeentities_5, 
                style: style_EJEOSUNAPUEBLAejeentities_5,
                popuplayertitle: "EJEOSUNAPUEBLAeje entities",
                interactive: true,
                title: '<img src="styles/legend/EJEOSUNAPUEBLAejeentities_5.png" /> EJEOSUNAPUEBLAeje entities'
            });
var format_tuberiacolocadaOCT24entities_6 = new ol.format.GeoJSON();
var features_tuberiacolocadaOCT24entities_6 = format_tuberiacolocadaOCT24entities_6.readFeatures(json_tuberiacolocadaOCT24entities_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_tuberiacolocadaOCT24entities_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuberiacolocadaOCT24entities_6.addFeatures(features_tuberiacolocadaOCT24entities_6);
var lyr_tuberiacolocadaOCT24entities_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tuberiacolocadaOCT24entities_6, 
                style: style_tuberiacolocadaOCT24entities_6,
                popuplayertitle: "tuberiacolocadaOCT24 entities",
                interactive: true,
                title: '<img src="styles/legend/tuberiacolocadaOCT24entities_6.png" /> tuberiacolocadaOCT24 entities'
            });
var format_excavacionesOCT24entities_7 = new ol.format.GeoJSON();
var features_excavacionesOCT24entities_7 = format_excavacionesOCT24entities_7.readFeatures(json_excavacionesOCT24entities_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_excavacionesOCT24entities_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_excavacionesOCT24entities_7.addFeatures(features_excavacionesOCT24entities_7);
var lyr_excavacionesOCT24entities_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_excavacionesOCT24entities_7, 
                style: style_excavacionesOCT24entities_7,
                popuplayertitle: "excavacionesOCT24 entities",
                interactive: true,
                title: '<img src="styles/legend/excavacionesOCT24entities_7.png" /> excavacionesOCT24 entities'
            });

lyr_Ortoimagen_0.setVisible(true);lyr_0702NucleosUrbanospol1Recor1_1.setVisible(true);lyr_ARQUETASentities_2.setVisible(true);lyr_AcotacionEjeOsunaPueblaentities_3.setVisible(true);lyr_AcotacionEjeOsunaPueblaentities_4.setVisible(true);lyr_EJEOSUNAPUEBLAejeentities_5.setVisible(true);lyr_tuberiacolocadaOCT24entities_6.setVisible(true);lyr_excavacionesOCT24entities_7.setVisible(true);
var layersList = [lyr_Ortoimagen_0,lyr_0702NucleosUrbanospol1Recor1_1,lyr_ARQUETASentities_2,lyr_AcotacionEjeOsunaPueblaentities_3,lyr_AcotacionEjeOsunaPueblaentities_4,lyr_EJEOSUNAPUEBLAejeentities_5,lyr_tuberiacolocadaOCT24entities_6,lyr_excavacionesOCT24entities_7];
lyr_0702NucleosUrbanospol1Recor1_1.set('fieldAliases', {'codigo_nd': 'codigo_nd', 'cod_pob': 'cod_pob', 'nombre_pob': 'nombre_pob', 'nivel': 'nivel', 'estado': 'estado', });
lyr_ARQUETASentities_2.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_AcotacionEjeOsunaPueblaentities_3.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_AcotacionEjeOsunaPueblaentities_4.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_EJEOSUNAPUEBLAejeentities_5.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_tuberiacolocadaOCT24entities_6.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_excavacionesOCT24entities_7.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_0702NucleosUrbanospol1Recor1_1.set('fieldImages', {'codigo_nd': 'TextEdit', 'cod_pob': 'TextEdit', 'nombre_pob': 'TextEdit', 'nivel': 'TextEdit', 'estado': 'TextEdit', });
lyr_ARQUETASentities_2.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr_AcotacionEjeOsunaPueblaentities_3.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_AcotacionEjeOsunaPueblaentities_4.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_EJEOSUNAPUEBLAejeentities_5.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_tuberiacolocadaOCT24entities_6.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_excavacionesOCT24entities_7.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_0702NucleosUrbanospol1Recor1_1.set('fieldLabels', {'codigo_nd': 'no label', 'cod_pob': 'hidden field', 'nombre_pob': 'no label', 'nivel': 'no label', 'estado': 'no label', });
lyr_ARQUETASentities_2.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_AcotacionEjeOsunaPueblaentities_3.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_AcotacionEjeOsunaPueblaentities_4.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_EJEOSUNAPUEBLAejeentities_5.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_tuberiacolocadaOCT24entities_6.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_excavacionesOCT24entities_7.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_excavacionesOCT24entities_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});