export default function (server) {

  server.route({
    path: '/api/draxis_map/example',
    method: 'GET',
    handler() {
      return { time: (new Date()).toISOString() };
    }
  });

}
