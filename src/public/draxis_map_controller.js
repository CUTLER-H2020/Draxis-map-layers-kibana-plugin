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
// const parkings = require('./helpers/parkings');
const landscapes = require('./helpers/landscape.js');
const landscapesColors = require('./helpers/landscapeLegend.js');

const geojsons = require('./helpers/geojsons.js');

var busRouteGeoJson = geojsons.busRoute;
var busStopsGeoJson = geojsons.busStops;
var carParkingsGeoJson = geojsons.carParkings;
var cycelwayGeoJson = geojsons.cycelway;
var ferryRouteGeoJson = geojsons.ferryRoute;
var footpathLocationGeoJson = geojsons.footpath;
var pierUpgradeGeoJson = geojsons.pierUpgrade;

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
      $scope.map.eachLayer(function (layer) {
        $scope.addLegendToMap({ layer: layer });
      });
    }
  };

  $timeout(function () {
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
    
    /**
     * This is the previous implementation
     * about car parkings. For the new shapefile of car parkings
     * we will do it much simpler with GeoJSON function of Leaflet
     * 
     
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
    */

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
    /**
     * New layers for bus routes
     * using Leaflet's GeoJSON instead of manual complex looping
     */

    // BUS ROUTES
    var busRouteGroup = new L.FeatureGroup();
    var busRouteLayer = L.geoJSON(busRouteGeoJson).addTo($scope.map);
    busRouteGroup.addLayer(busRouteLayer);

    // BUS STOP
    var geojsonMarkerOptions = {
      radius: 8,
      fillColor: "#ff7800",
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    };

    var busStopsGroup = new L.LayerGroup();
    var busStopsLayer = L.geoJSON(busStopsGeoJson, {
      pointToLayer: function (geoJsonPoint, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions)
      }
    }).addTo($scope.map);
    busStopsGroup.addLayer(busStopsLayer);
    
    // CAR PARKINGS
    var carParkingsGroup = new L.LayerGroup();
    var carParkingsLayer = L.geoJSON(carParkingsGeoJson, {
      style: {
        "color": "#525d12",
        "weight": 5,
        "opacity": 0.65
      }  
    }).addTo($scope.map);
    carParkingsGroup.addLayer(carParkingsLayer);

    // CYCELWAY
    var cycelwayGroup = new L.LayerGroup();
    var cycelwayLayer = L.geoJSON(cycelwayGeoJson, {
      style: {
        "color": "#F08080",
        "weight": 5,
        "opacity": 0.65
      }
    }).addTo($scope.map);
    cycelwayGroup.addLayer(cycelwayLayer);


    // FERRY ROUTE
    var ferryRouteGroup = new L.LayerGroup();
    var ferryRouteLayer = L.geoJSON(ferryRouteGeoJson, {
      style: {
        "color": "#2AB0B9",
        "weight": 5,
        "opacity": 0.65
      }
    }).addTo($scope.map);
    ferryRouteGroup.addLayer(ferryRouteLayer);


    // FOOTPATH LOCATION
    var footpathLocationGroup = new L.LayerGroup();
    var footpathLocationLayer = L.geoJSON(footpathLocationGeoJson, {
      style: {
        "color": "#0E8312",
        "weight": 5,
        "opacity": 0.65
      }
    }).addTo($scope.map);
    footpathLocationGroup.addLayer(footpathLocationLayer);


    // PIER UPGRADE
    var pierUpgradeGroup = new L.LayerGroup();
    var pierUpgradeLayer = L.geoJSON(pierUpgradeGeoJson, {
      style: {
        "color": "#70116C",
        "weight": 5,
        "opacity": 0.65
      }
    }).addTo($scope.map);
    pierUpgradeGroup.addLayer(pierUpgradeLayer);

    /** THE FOLLOWING ARE FOR WMS.
     *  FOR WATERBODIES WE INCLUDED UPDATED LAYERS
    */

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
        layers: 'EPA:WFD_GWBStatus_20132018',
        transparent: 'true',
        format: 'image/png'
      })
      .setOpacity(0.5)
      .addTo($scope.map);

    var wmsLayer5 = L.tileLayer
      .wms('http://gis-stg.epa.ie/geoserver/EPA/wms?', {
        layers: 'EPA:WFD_LWBStatus_20132018',
        transparent: 'true',
        format: 'image/png'
      })
      .setOpacity(0.5)
      .addTo($scope.map);

    var wmsLayer6 = L.tileLayer
      .wms('http://gis-stg.epa.ie/geoserver/EPA/wms?', {
        layers: 'EPA:WFD_RWBStatus_20132018',
        transparent: 'true',
        format: 'image/png'
      })
      .setOpacity(0.5)
      .addTo($scope.map);

    var wmsLayer7 = L.tileLayer
      .wms('http://gis-stg.epa.ie/geoserver/EPA/wms?', {
        layers: 'EPA:WFD_CWBStatus_20132018',
        transparent: 'true',
        format: 'image/png'
      })
      .setOpacity(0.5)
      .addTo($scope.map);

    var wmsLayer8 = L.tileLayer
      .wms('http://gis-stg.epa.ie/geoserver/EPA/wms?', {
        layers: 'EPA:WFD_TWBStatus_20132018',
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
      'Parking Areas': carParkingsGroup,
      'Landscape Character': landscapeGroup,
      'Bus routes': busRouteGroup,
      'Bus stops': busStopsGroup,
      'Cycelway': cycelwayGroup,
      'Ferry Route': ferryRouteGroup,
      'Footpath Location': footpathLocationGroup,
      'Pier Upgrade': pierUpgradeGroup,
      'Special Area of Conservation (SAC)': wmsLayer,
      'Natural Heritage Areas (NHA)': wmsLayer2,
      'Special Protection Areas (SPA)': wmsLayer3,
      'Groundwater Waterbody Status (2013 – 2018)': wmsLayer4,
      'Lake Waterbody Status (2013 – 2018)': wmsLayer5,
      'River Waterbody Status (2013 – 2018)': wmsLayer6,
      'Coastal Waterbodies Status (2013 – 2018)': wmsLayer7,
      'Transitional Waterbodies (2013 – 2018)': wmsLayer8,
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

    // This is for startup in order to noy apply all layers by default
    for (var name in baseLayers) {
      $scope.map.removeLayer(baseLayers[name]);
    }
    // However the geoJSON layers aren't removed. 
    // Explicit removal
    $scope.map.removeLayer(busRouteLayer);
    $scope.map.removeLayer(busStopsLayer);
    $scope.map.removeLayer(carParkingsLayer);
    $scope.map.removeLayer(cycelwayLayer);
    $scope.map.removeLayer(ferryRouteLayer);
    $scope.map.removeLayer(footpathLocationLayer);
    $scope.map.removeLayer(pierUpgradeLayer);
    
    $scope.map.on('overlayadd', function (eventLayer) {
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
