const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('b51bf73b4e204ae7ae34a55dac9a5c76');

async function getTopHeadlines() {
  try {
    const response = await newsapi.v2.topHeadlines({
      // q: 'disabilitaas',
      country: 'id',
      category: 'health'
    });
    return response;
  } catch (error) {
    throw error;
  }
}

async function getEverything() {
  try {
    const response = await newsapi.v2.everything({
      q: 'disabilitas',
      from: '2023-11-10',
      to: '2023-12-04',
      language: 'id',
      sortBy: 'relevancy',
      page: 2
    });
    return response;
  } catch (error) {
    throw error;
  }
}


module.exports = { getTopHeadlines, getEverything };
