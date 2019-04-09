export default function(kibana) {
  return new kibana.Plugin({
    uiExports: {
      visTypes: ['plugins/draxis_map/draxis_map']
    }
  });
}
