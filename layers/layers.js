var wms_layers = [];


        var lyr_googlemaps_0 = new ol.layer.Tile({
            'title': 'googlemaps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_googleimagery_1 = new ol.layer.Tile({
            'title': 'google imagery',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_WILAYAHKERJA_2 = new ol.format.GeoJSON();
var features_WILAYAHKERJA_2 = format_WILAYAHKERJA_2.readFeatures(json_WILAYAHKERJA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WILAYAHKERJA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WILAYAHKERJA_2.addFeatures(features_WILAYAHKERJA_2);
var lyr_WILAYAHKERJA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WILAYAHKERJA_2, 
                style: style_WILAYAHKERJA_2,
                popuplayertitle: "WILAYAH KERJA",
                interactive: true,
    title: 'WILAYAH KERJA<br />\
    <img src="styles/legend/WILAYAHKERJA_2_0.png" /> RDS Non Domestik<br />\
    <img src="styles/legend/WILAYAHKERJA_2_1.png" /> RDS/SKP Domestik<br />\
    <img src="styles/legend/WILAYAHKERJA_2_2.png" /> SKP Domestik<br />'
        });
var format_Bangunan_3 = new ol.format.GeoJSON();
var features_Bangunan_3 = format_Bangunan_3.readFeatures(json_Bangunan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_3.addFeatures(features_Bangunan_3);
var lyr_Bangunan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_3, 
                style: style_Bangunan_3,
                popuplayertitle: "Bangunan",
                interactive: true,
                title: '<img src="styles/legend/Bangunan_3.png" /> Bangunan'
            });
var format_BatasDesa_4 = new ol.format.GeoJSON();
var features_BatasDesa_4 = format_BatasDesa_4.readFeatures(json_BatasDesa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesa_4.addFeatures(features_BatasDesa_4);
var lyr_BatasDesa_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesa_4, 
                style: style_BatasDesa_4,
                popuplayertitle: "Batas Desa",
                interactive: true,
                title: '<img src="styles/legend/BatasDesa_4.png" /> Batas Desa'
            });
var format_Pelanggan_5 = new ol.format.GeoJSON();
var features_Pelanggan_5 = format_Pelanggan_5.readFeatures(json_Pelanggan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pelanggan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pelanggan_5.addFeatures(features_Pelanggan_5);
var lyr_Pelanggan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pelanggan_5, 
                style: style_Pelanggan_5,
                popuplayertitle: "Pelanggan",
                interactive: true,
                title: '<img src="styles/legend/Pelanggan_5.png" /> Pelanggan'
            });
var format_Titik_sampel_6 = new ol.format.GeoJSON();
var features_Titik_sampel_6 = format_Titik_sampel_6.readFeatures(json_Titik_sampel_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_sampel_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_sampel_6.addFeatures(features_Titik_sampel_6);
var lyr_Titik_sampel_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Titik_sampel_6, 
                style: style_Titik_sampel_6,
                popuplayertitle: "Titik_sampel",
                interactive: true,
                title: '<img src="styles/legend/Titik_sampel_6.png" /> Titik_sampel'
            });
var format_PIPA_CIBURIAL_7 = new ol.format.GeoJSON();
var features_PIPA_CIBURIAL_7 = format_PIPA_CIBURIAL_7.readFeatures(json_PIPA_CIBURIAL_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIPA_CIBURIAL_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIPA_CIBURIAL_7.addFeatures(features_PIPA_CIBURIAL_7);
var lyr_PIPA_CIBURIAL_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PIPA_CIBURIAL_7, 
                style: style_PIPA_CIBURIAL_7,
                popuplayertitle: "PIPA_CIBURIAL",
                interactive: true,
                title: '<img src="styles/legend/PIPA_CIBURIAL_7.png" /> PIPA_CIBURIAL'
            });
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_googlemaps_0,lyr_googleimagery_1,],
                                fold: "open",
                                title: "Basemap"});

lyr_googlemaps_0.setVisible(true);lyr_googleimagery_1.setVisible(true);lyr_WILAYAHKERJA_2.setVisible(true);lyr_Bangunan_3.setVisible(false);lyr_BatasDesa_4.setVisible(true);lyr_Pelanggan_5.setVisible(false);lyr_Titik_sampel_6.setVisible(false);lyr_PIPA_CIBURIAL_7.setVisible(false);
var layersList = [group_Basemap,lyr_WILAYAHKERJA_2,lyr_Bangunan_3,lyr_BatasDesa_4,lyr_Pelanggan_5,lyr_Titik_sampel_6,lyr_PIPA_CIBURIAL_7];
lyr_WILAYAHKERJA_2.set('fieldAliases', {'fid_1': 'fid_1', 'nama': 'nama', 'KABKOT': 'KABKOT', 'SUMBER': 'SUMBER', 'status': 'status', 'JenisSurve': 'JenisSurve', 'SAMPEL': 'SAMPEL', 'area': 'area', });
lyr_Bangunan_3.set('fieldAliases', {'name': 'name', 'type': 'type', 'jenis': 'jenis', 'JUMLAH': 'JUMLAH', 'jenis_recl': 'jenis_recl', 'pelanggan': 'pelanggan', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'fid_1': 'fid_1', 'nama': 'nama', 'KABKOT': 'KABKOT', 'status': 'status', 'JenisSurve': 'JenisSurve', });
lyr_BatasDesa_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Pelanggan_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'nosl': 'nosl', 'Alamat': 'Alamat', 'wil': 'wil', 'blok': 'blok', 'sumber': 'sumber', 'SL_CIBURIA': 'SL_CIBURIA', });
lyr_Titik_sampel_6.set('fieldAliases', {'OID_': 'OID_', 'CID': 'CID', 'surveyor': 'surveyor', });
lyr_PIPA_CIBURIAL_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'diameter': 'diameter', 'jenis': 'jenis', 'cabang': 'cabang', 'id': 'id', 'start_x': 'start x', 'start_y': 'start y', 'end_x': 'end x', 'end_y': 'end y', 'Shape_Length': 'Shape_Length', 'tipe_jaringan': 'tipe_jaringan', });
lyr_WILAYAHKERJA_2.set('fieldImages', {'fid_1': 'TextEdit', 'nama': 'TextEdit', 'KABKOT': 'TextEdit', 'SUMBER': 'TextEdit', 'status': 'TextEdit', 'JenisSurve': 'TextEdit', 'SAMPEL': 'TextEdit', 'area': 'TextEdit', });
lyr_Bangunan_3.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', 'jenis': 'TextEdit', 'JUMLAH': 'Range', 'jenis_recl': 'TextEdit', 'pelanggan': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'fid_1': 'TextEdit', 'nama': 'TextEdit', 'KABKOT': 'TextEdit', 'status': 'TextEdit', 'JenisSurve': 'TextEdit', });
lyr_BatasDesa_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Pelanggan_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'nosl': 'TextEdit', 'Alamat': 'TextEdit', 'wil': 'TextEdit', 'blok': 'TextEdit', 'sumber': 'TextEdit', 'SL_CIBURIA': 'TextEdit', });
lyr_Titik_sampel_6.set('fieldImages', {'OID_': 'TextEdit', 'CID': 'TextEdit', 'surveyor': 'TextEdit', });
lyr_PIPA_CIBURIAL_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'diameter': 'Range', 'jenis': 'TextEdit', 'cabang': 'TextEdit', 'id': 'Range', 'start_x': 'TextEdit', 'start_y': 'TextEdit', 'end_x': 'TextEdit', 'end_y': 'TextEdit', 'Shape_Length': 'TextEdit', 'tipe_jaringan': 'TextEdit', });
lyr_WILAYAHKERJA_2.set('fieldLabels', {'fid_1': 'inline label - always visible', 'nama': 'inline label - always visible', 'KABKOT': 'inline label - always visible', 'SUMBER': 'inline label - always visible', 'status': 'inline label - always visible', 'JenisSurve': 'inline label - always visible', 'SAMPEL': 'inline label - always visible', 'area': 'inline label - always visible', });
lyr_Bangunan_3.set('fieldLabels', {'name': 'inline label - always visible', 'type': 'inline label - always visible', 'jenis': 'inline label - always visible', 'JUMLAH': 'inline label - always visible', 'jenis_recl': 'inline label - always visible', 'pelanggan': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'fid_1': 'inline label - always visible', 'nama': 'inline label - always visible', 'KABKOT': 'inline label - always visible', 'status': 'inline label - always visible', 'JenisSurve': 'inline label - always visible', });
lyr_BatasDesa_4.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Pelanggan_5.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'nosl': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'wil': 'inline label - always visible', 'blok': 'inline label - always visible', 'sumber': 'inline label - always visible', 'SL_CIBURIA': 'inline label - always visible', });
lyr_Titik_sampel_6.set('fieldLabels', {'OID_': 'inline label - always visible', 'CID': 'inline label - always visible', 'surveyor': 'inline label - always visible', });
lyr_PIPA_CIBURIAL_7.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'diameter': 'inline label - always visible', 'jenis': 'inline label - always visible', 'cabang': 'inline label - always visible', 'id': 'inline label - always visible', 'start_x': 'inline label - always visible', 'start_y': 'inline label - always visible', 'end_x': 'inline label - always visible', 'end_y': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', 'tipe_jaringan': 'inline label - always visible', });
lyr_PIPA_CIBURIAL_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});