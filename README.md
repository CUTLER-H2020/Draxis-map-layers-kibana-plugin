# Draxis Conflict Map

> Draxis Plugin

![alt text](https://raw.githubusercontent.com/CUTLER-H2020/Draxis-map-layers-kibana-plugin/master/draxis_map.png)

---

## About

This Kibana plugin is created using JavaScript and it enables the introduction of map layers using Open Geospatial Consortium’s (OGC) Web Map Service (WMS) protocol. It is specifically customized to include layers in reference to the area of Cork. The controls of the map fall within two categories: A list of layers and a distance measuring tool.

By selecting the icon on the top right corner of the map, the user can access the various layers that are
available and then apply them as filters. Apart from the first layer that is derived from a shapefile, the
remaining 15 layers, which concern environmental parameters, are served by WMS.

## Version
- Plugin version: 0.0.10
- Made for Kibana version: 6.5.4

For any inquires contact Stelios Kitziris (skitziris@draxis.gr)

## development

See the [kibana contributing guide](https://github.com/elastic/kibana/blob/master/CONTRIBUTING.md) for instructions setting up your development environment. Once you have completed that, use the following yarn scripts.

- `yarn kbn bootstrap`

  Install dependencies and crosslink Kibana and all projects/plugins.

  > **_IMPORTANT:_** Use this script instead of `yarn` to install dependencies when switching branches, and re-run it whenever your dependencies change.

- `yarn start`

  Start kibana and have it include this plugin. You can pass any arguments that you would normally send to `bin/kibana`

  ```
  yarn start --elasticsearch.hosts http://localhost:9220
  ```

- `yarn build`

  Build a distributable archive of your plugin.

- `yarn test:browser`

  Run the browser tests in a real web browser.

- `yarn test:server`

  Run the server tests using mocha.

For more information about any of these commands run `yarn ${task} --help`. For a full list of tasks checkout the `package.json` file, or run `yarn run`.

## Installing plugin

- log in into your server
- cd your_kibana_installation_path
- if you are using docker run: docker exec -it { container_name } bash
- install plugin by running: bin/kibana-plugin install https://github.com/CUTLER-H2020/Draxis-map-layers-kibana-plugin.git
- this step takes about 5 minutes
- done!
