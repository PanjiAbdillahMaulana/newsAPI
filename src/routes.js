const { getTopHeadlines, getEverything, getSources } = require('./controllers');

const routes = [
  {
    method: 'GET',
    path: '/top-headlines',
    handler: async (request, h) => {
      try {
        const headlines = await getTopHeadlines();
        return headlines;
      } catch (error) {
        return h.response({ error: 'Internal Server Error' }).code(500);
      }
    },
  },
  {
    method: 'GET',
    path: '/everything',
    handler: async (request, h) => {
      try {
        const everything = await getEverything();
        return everything;
      } catch (error) {
        return h.response({ error: 'Internal Server Error' }).code(500);
      }
    },
  },
];

module.exports = routes;