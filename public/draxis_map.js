import { VisFactoryProvider } from 'ui/vis/vis_factory';
import { VisTypesRegistryProvider } from 'ui/registry/vis_types';
import { Schemas } from 'ui/vis/editors/default/schemas';
// import { vislibColorMaps } from 'ui/vislib/components/color/colormaps';
import gaugeTemplate from './draxis.html';
// const module = uiModules.get('kibana');
import './draxis_map_controller';

import './draxis.less';

VisTypesRegistryProvider.register(RadarVisTypeProvider);

function RadarVisTypeProvider(Private) {
  const VisFactory = Private(VisFactoryProvider);
  // const Schemas = Private(VisSchemasProvider);

  // define the RadarVisController which is used in the template
  // by angular's ng-controller directive

  // return the visType object, which kibana will use to display and configure new
  // Vis object of this type.
  return VisFactory.createAngularVisualization({
    name: 'draxis_wms_map',
    title: 'Draxis WMS Map',
    icon: 'visMapCoordinate',
    // image,
    description: 'Draxis WMS Map Display',
    // category: CATEGORY.BASIC,
    visConfig: {
      template: gaugeTemplate
    },
    optionsTemplate: gaugeTemplate,
    editorConfig: {
      schemas: new Schemas([
        {
          group: 'metrics',
          name: 'vertex',
          title: 'Vertex',
          aggFilter: '!geo_centroid',
          min: 1
        },
        {
          group: 'buckets',
          name: 'field',
          title: 'Field',
          max: 1,
          min: 1,
          aggFilter: ['terms']
        }
      ])
    },
    implementsRenderComplete: true,
    hierarchicalData: function(vis) {
      return true;
    }
  });
}

export default RadarVisTypeProvider;
