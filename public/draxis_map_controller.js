// import { AggResponseTabifyProvider } from 'ui/agg_response/tabify/tabify';
import { uiModules } from 'ui/modules';
// import * as am4core from '../node_modules/@amcharts/amcharts4/core';
// import * as am4charts from '../node_modules/@amcharts/amcharts4/charts';
// get the kibana/kbn_radar module, and make sure that it requires the "kibana" module if it
// import './scripts/charts';
// import './scripts/core';
require('./scripts/core');
require('./scripts/charts');
require('./scripts/leaflet-measurement');
const parkings = require('./helpers/parkings');
const landscapes = require('./helpers/landscape.js');
const landscapesColors = require('./helpers/landscapeLegend.js');
// didn't already
const module = uiModules.get('kibana/draxis_map', ['kibana']);

// add a controller to tha module, which will transform the esResponse into a
// tabular format that we can pass to the table directive
module.controller('KbnMapVisController', function(
  $scope,
  $element,
  $rootScope,
  $timeout,
  Private
) {
  // const tabifyAggResponse = Private(AggResponseTabifyProvider);
  $scope.$watch('esResponse', function(resp) {
    if (resp) {
    }
  });

  $scope.addLegendToMap = eventLayer => {
    if (
      eventLayer &&
      eventLayer.layer._url &&
      eventLayer.layer._url.indexOf('floodinfo.ie') == -1
    ) {
      if ($scope.legend) $scope.legend.remove();
      $scope.legend = L.control({ position: 'bottomright' });
      $scope.currentLegend = eventLayer;
      $scope.legend.onAdd = function(map) {
        var div = L.DomUtil.create('div', 'info legend');

        div.innerHTML = `<img src="${
          eventLayer.layer._url
        }service=WMS&version=1.1.0&request=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=${
          eventLayer.layer.options.layers
        }" />`;
        return div;
      };
      if (eventLayer.layer.options.layers) $scope.legend.addTo($scope.map);
    }
  };

  $scope.removeCurrentLegentFromMap = eventLayer => {
    if (
      eventLayer.layer.options.layers ==
      $scope.currentLegend.layer.options.layers
    ) {
      $scope.legend.remove();
      $scope.map.eachLayer(function(layer) {
        $scope.addLegendToMap({ layer: layer });
      });
    }
  };

  $timeout(function() {
    $scope.showLandscapeLegend = false;

    $scope.map = L.map('map', {
      measureControl: true
    }).setView([53.4180764, -8.6549656], 6);
    L.tileLayer(
      'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoicm9hbWRlZiIsImEiOiJjanBpOGRjOW4wZ2p5M3ZrZ2huZ3ZmcHByIn0.GaNQw_G3SjdXA7inA1hzfQ',
      {
        attribution: 'Draxis Maps',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'your.mapbox.access.token'
      }
    ).addTo($scope.map);

    var parkingGroup = new L.FeatureGroup();
    $scope.map.addLayer(parkingGroup);

    parkings.features.map(parking => {
      const coords = parking.geometry.coordinates[0].map(v => {
        return [v[1], v[0]];
      });

      var polygon = L.polygon(coords, {
        color: 'red'
      }).addTo($scope.map);

      parkingGroup.addLayer(polygon);
      // $scope.map.fitBounds(polygon.getBounds());
    });

    var landscapeGroup = new L.FeatureGroup();
    $scope.map.addLayer(landscapeGroup);
    $scope.landscapesColors = landscapesColors;
    landscapes.features.map(feature => {
      const selectedLegend = landscapesColors[feature.properties.TYPE];
      const coords = feature.geometry.coordinates[0][0].map(v => {
        return [v[1], v[0]];
      });

      var polygon = L.polygon(coords, {
        color: selectedLegend.color
      }).addTo($scope.map);

      landscapeGroup.addLayer(polygon);
    });

    var wmsLayer = L.tileLayer
      .wms('http://gis-stg.epa.ie/geoserver/EPA/wms?', {
        layers: 'EPA:PROT_SAC',
        transparent: 'true',
        format: 'image/png'
      })
      .setOpacity(0.5)
      .addTo($scope.map);

    var wmsLayer2 = L.tileLayer
      .wms('http://gis-stg.epa.ie/geoserver/EPA/wms?', {
        layers: 'EPA:PROT_NHA',
        transparent: 'true',
        format: 'image/png'
      })
      .setOpacity(0.5)
      .addTo($scope.map);

    var wmsLayer3 = L.tileLayer
      .wms('http://gis-stg.epa.ie/geoserver/EPA/wms?', {
        layers: 'EPA:PROT_SPA',
        transparent: 'true',
        format: 'image/png'
      })
      .setOpacity(0.5)
      .addTo($scope.map);

    var wmsLayer4 = L.tileLayer
      .wms('http://gis-stg.epa.ie/geoserver/EPA/wms?', {
        layers: 'EPA:WFD_GWBStatus_20102015',
        transparent: 'true',
        format: 'image/png'
      })
      .setOpacity(0.5)
      .addTo($scope.map);

    var wmsLayer5 = L.tileLayer
      .wms('http://gis-stg.epa.ie/geoserver/EPA/wms?', {
        layers: 'EPA:WFD_LWBStatus_20102015',
        transparent: 'true',
        format: 'image/png'
      })
      .setOpacity(0.5)
      .addTo($scope.map);

    var wmsLayer6 = L.tileLayer
      .wms('http://gis-stg.epa.ie/geoserver/EPA/wms?', {
        layers: 'EPA:WFD_RWBStatus_20102015',
        transparent: 'true',
        format: 'image/png'
      })
      .setOpacity(0.5)
      .addTo($scope.map);

    var wmsLayer7 = L.tileLayer
      .wms('http://gis-stg.epa.ie/geoserver/EPA/wms?', {
        layers: 'EPA:WFD_CWBStatus_20102015',
        transparent: 'true',
        format: 'image/png'
      })
      .setOpacity(0.5)
      .addTo($scope.map);

    var wmsLayer8 = L.tileLayer
      .wms('http://gis-stg.epa.ie/geoserver/EPA/wms?', {
        layers: 'EPA:WFD_TransitionalWaterQuality_20102012',
        transparent: 'true',
        format: 'image/png'
      })
      .setOpacity(0.5)
      .addTo($scope.map);

    var wmsLayer9 = L.tileLayer
      .wms('http://www.floodinfo.ie/geowebcache/service/wms?', {
        layers: 'national_cfram_datasets:ex_f_c_001',
        crs: L.CRS.EPSG900913,
        transparent: 'true',
        format: 'image/png'
      })
      .setOpacity(0.5)
      .addTo($scope.map);

    var wmsLayer10 = L.tileLayer
      .wms('http://www.floodinfo.ie/geowebcache/service/wms?', {
        layers: 'national_cfram_datasets:ex_f_c_010',
        crs: L.CRS.EPSG900913,
        transparent: 'true',
        format: 'image/png'
      })
      .setOpacity(0.5)
      .addTo($scope.map);

    var wmsLayer11 = L.tileLayer
      .wms('http://www.floodinfo.ie/geowebcache/service/wms?', {
        layers: 'national_cfram_datasets:ex_f_c_100',
        crs: L.CRS.EPSG900913,
        transparent: 'true',
        format: 'image/png'
      })
      .setOpacity(0.5)
      .addTo($scope.map);

    var wmsLayer12 = L.tileLayer
      .wms('http://www.floodinfo.ie/geowebcache/service/wms?', {
        layers: 'national_cfram_datasets:ex_c_c_001',
        crs: L.CRS.EPSG900913,
        transparent: 'true',
        format: 'image/png'
      })
      .setOpacity(0.5)
      .addTo($scope.map);

    var wmsLayer13 = L.tileLayer
      .wms('http://www.floodinfo.ie/geowebcache/service/wms?', {
        layers: 'national_cfram_datasets:ex_c_c_005',
        crs: L.CRS.EPSG900913,
        transparent: 'true',
        format: 'image/png'
      })
      .setOpacity(0.5)
      .addTo($scope.map);

    var wmsLayer14 = L.tileLayer
      .wms('http://www.floodinfo.ie/geowebcache/service/wms?', {
        layers: 'national_cfram_datasets:ex_c_c_100',
        crs: L.CRS.EPSG900913,
        transparent: 'true',
        format: 'image/png'
      })
      .setOpacity(0.5)
      .addTo($scope.map);

    var baseLayers = {
      'Parking Areas': parkingGroup,
      'Landscape Character': landscapeGroup,
      'Special Area of Conservation (SAC)': wmsLayer,
      'Natural Heritage Areas (NHA)': wmsLayer2,
      'Special Protection Areas (SPA)': wmsLayer3,
      'Groundwater Waterbody Status (2010 – 2015)': wmsLayer4,
      'Lake Waterbody Status (2010 – 2015)': wmsLayer5,
      'River Waterbody Status (2010 – 2015)': wmsLayer6,
      'Coastal Waterbodies Status (2010 – 2015)': wmsLayer7,
      'Transitional Waterbodies (2010 – 2015)': wmsLayer8,
      'River Floods 0.1 % Annual Exceedance Probability (Low)': wmsLayer9,
      'River Floods 1 % Annual Exceedance Probability (Medium)': wmsLayer10,
      'River Floods 10 % Annual Exceedance Probability (High)': wmsLayer11,
      'Coastal Floods 0.1 % Annual Exceedance Probability (Low)': wmsLayer12,
      'Coastal Floods 0.5 % Annual Exceedance Probability (Medium)': wmsLayer13,
      'Coastal Floods 10 % Annual Exceedance Probability (High)': wmsLayer14
    };

    L.control.layers(null, baseLayers).addTo($scope.map);

    const options = {
      position: 'topleft' // Leaflet control position option
    };
    L.control.ruler(options).addTo($scope.map);

    for (var name in baseLayers) {
      $scope.map.removeLayer(baseLayers[name]);
    }

    $scope.map.on('overlayadd', function(eventLayer) {
      $scope.showLandscapeLegend = false;
      $rootScope.$apply();

      if (eventLayer.name == 'Landscape Areas') {
        $scope.showLandscapeLegend = true;
        $rootScope.$apply();
      }

      if (
        eventLayer &&
        eventLayer.layer._url &&
        eventLayer.layer._url.indexOf('floodinfo.ie') == -1
      )
        $scope.addLegendToMap(eventLayer);
    });

    $scope.map.on('overlayremove', function(eventLayer) {
      if (
        eventLayer &&
        eventLayer.layer._url &&
        eventLayer.layer._url.indexOf('floodinfo.ie') == -1
      )
        $scope.removeCurrentLegentFromMap(eventLayer);
    });
  });
});
