/**

This code is open-sourced software licensed under the MIT license. (http://opensource.org/licenses/MIT)

Copyright 2020 Stergios Bampakis, DRAXIS ENVIRONMENTAL S.A.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
documentation files (the "Software"),to deal in the Software without restriction, including without limitation 
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to 
permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
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
