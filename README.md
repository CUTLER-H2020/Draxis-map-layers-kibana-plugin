# Draxis Conflict Map

## Draxis Plugin

![alt text](/src/draxis_map_upgrade.png)

---

## About

This Kibana plugin is created using JavaScript and it enables the introduction of map layers using Open Geospatial Consortium’s (OGC) Web Map Service (WMS) protocol. It is specifically customized to include layers in reference to the area of Cork. The controls of the map fall within two categories: A list of layers and a distance measuring tool.

By selecting the icon on the top right corner of the map, the user can access the various layers that are
available and then apply them as filters. Apart from the first layer that is derived from a shapefile, the
remaining 15 layers, which concern environmental parameters, are served by WMS.

More information can be found in deliverable 5.2 here: https://zenodo.org/record/3386009#.XYirMCj7RnI.

## Version

- Plugin version: 0.0.3
- Made for Kibana version: 7.4.0

For any inquires contact Stergios Bampakis (ababakis@draxis.gr) or DRAXIS Developers (dev@draxis.gr)

## Plugin Creation
This repository contains a docker-compose.yml file which helps you get this plugin as a __.zip file__ and place it in your Kibana installation (<= 7.4.0)

In order to get the plugin as a zip file:

- Change permissions to distribution folder in order Docker to be able to copy the plugin later
  
  `chmod -R 0777 dist/`
- `cd deploy/`
- `docker-compose build`
- `docker-compose up -d`
- (*__Be patient__* since the whole procedure needs to download Kibana's source code and bootstrap the plugin)
- (Optional): In case you want to see the progress of plugin building run: 

  `docker logs -f map-plugin-kibana`
- The final zip is under your "/dist" directory
 
Check how you can [install this zip file](#installing-markdown)


<h2 id="installing-markdown">Installing plugin</h2>

Assuming this plugin is named: "draxis_map_0.0.2.zip"

- Log in into your server
- cd your_kibana_installation_path
- If you are using docker run:

   `docker exec -it {container_name} bash`
- Install plugin by running:

  `bin/kibana-plugin install file:///(absolute/path/to/)draxis_map_0.0.2.zip`
- Done !
