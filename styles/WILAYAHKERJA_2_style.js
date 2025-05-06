var size = 0;
var placement = 'point';
function categories_WILAYAHKERJA_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'RDS Non Domestik':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(238,28,28,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 5.548}),fill: new ol.style.Fill({color: 'rgba(201,192,23,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RDS/SKP Domestik':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(238,28,28,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 5.548}),fill: new ol.style.Fill({color: 'rgba(102,108,232,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SKP Domestik':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(238,28,28,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 5.548}),fill: new ol.style.Fill({color: 'rgba(129,229,174,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_WILAYAHKERJA_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("JenisSurve");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("area") !== null) {
        labelText = String(feature.get("area"));
    }
    
var style = categories_WILAYAHKERJA_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
