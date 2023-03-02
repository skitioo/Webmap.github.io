ol.proj.proj4.register(proj4);
ol.proj.get("USER:100026").setExtent([26700.666902, 147962.470359, 32743.071021, 151255.303429]);
var wms_layers = [];

var format_kir_roads_0 = new ol.format.GeoJSON();
var features_kir_roads_0 = format_kir_roads_0.readFeatures(json_kir_roads_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100026'});
var jsonSource_kir_roads_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kir_roads_0.addFeatures(features_kir_roads_0);
var lyr_kir_roads_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kir_roads_0, 
                style: style_kir_roads_0,
                interactive: true,
                title: '<img src="styles/legend/kir_roads_0.png" /> kir_roads'
            });
var format_2010_Admin_village_Correct_1 = new ol.format.GeoJSON();
var features_2010_Admin_village_Correct_1 = format_2010_Admin_village_Correct_1.readFeatures(json_2010_Admin_village_Correct_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100026'});
var jsonSource_2010_Admin_village_Correct_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2010_Admin_village_Correct_1.addFeatures(features_2010_Admin_village_Correct_1);
var lyr_2010_Admin_village_Correct_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2010_Admin_village_Correct_1, 
                style: style_2010_Admin_village_Correct_1,
                interactive: true,
                title: '<img src="styles/legend/2010_Admin_village_Correct_1.png" /> 2010_Admin_village_Correct'
            });
var format_TeAutiGPSEssentialsExport_2 = new ol.format.GeoJSON();
var features_TeAutiGPSEssentialsExport_2 = format_TeAutiGPSEssentialsExport_2.readFeatures(json_TeAutiGPSEssentialsExport_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100026'});
var jsonSource_TeAutiGPSEssentialsExport_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TeAutiGPSEssentialsExport_2.addFeatures(features_TeAutiGPSEssentialsExport_2);
var lyr_TeAutiGPSEssentialsExport_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TeAutiGPSEssentialsExport_2, 
                style: style_TeAutiGPSEssentialsExport_2,
                interactive: true,
                title: '<img src="styles/legend/TeAutiGPSEssentialsExport_2.png" /> Te Auti GPS Essentials Export'
            });
var format_RemiaEnterpriseGPSEssentialsExport_3 = new ol.format.GeoJSON();
var features_RemiaEnterpriseGPSEssentialsExport_3 = format_RemiaEnterpriseGPSEssentialsExport_3.readFeatures(json_RemiaEnterpriseGPSEssentialsExport_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100026'});
var jsonSource_RemiaEnterpriseGPSEssentialsExport_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RemiaEnterpriseGPSEssentialsExport_3.addFeatures(features_RemiaEnterpriseGPSEssentialsExport_3);
var lyr_RemiaEnterpriseGPSEssentialsExport_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RemiaEnterpriseGPSEssentialsExport_3, 
                style: style_RemiaEnterpriseGPSEssentialsExport_3,
                interactive: true,
                title: '<img src="styles/legend/RemiaEnterpriseGPSEssentialsExport_3.png" /> Remia Enterprise GPS Essentials Export'
            });

lyr_kir_roads_0.setVisible(true);lyr_2010_Admin_village_Correct_1.setVisible(true);lyr_TeAutiGPSEssentialsExport_2.setVisible(true);lyr_RemiaEnterpriseGPSEssentialsExport_3.setVisible(true);
var layersList = [lyr_kir_roads_0,lyr_2010_Admin_village_Correct_1,lyr_TeAutiGPSEssentialsExport_2,lyr_RemiaEnterpriseGPSEssentialsExport_3];
lyr_kir_roads_0.set('fieldAliases', {'Surface_Ty': 'Surface_Ty', 'Road_name': 'Road_name', });
lyr_2010_Admin_village_Correct_1.set('fieldAliases', {'vid': 'vid', 'v_name': 'v_name', });
lyr_TeAutiGPSEssentialsExport_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RemiaEnterpriseGPSEssentialsExport_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_kir_roads_0.set('fieldImages', {'Surface_Ty': 'TextEdit', 'Road_name': 'TextEdit', });
lyr_2010_Admin_village_Correct_1.set('fieldImages', {'vid': 'TextEdit', 'v_name': 'TextEdit', });
lyr_TeAutiGPSEssentialsExport_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_RemiaEnterpriseGPSEssentialsExport_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_kir_roads_0.set('fieldLabels', {'Surface_Ty': 'no label', 'Road_name': 'inline label', });
lyr_2010_Admin_village_Correct_1.set('fieldLabels', {'vid': 'no label', 'v_name': 'no label', });
lyr_TeAutiGPSEssentialsExport_2.set('fieldLabels', {'Name': 'inline label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_RemiaEnterpriseGPSEssentialsExport_3.set('fieldLabels', {'Name': 'inline label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_RemiaEnterpriseGPSEssentialsExport_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});