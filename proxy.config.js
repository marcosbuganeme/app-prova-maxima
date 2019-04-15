const proxy = [
    {
      context: '/api',
      target: 'http://localhost:8181',
      pathRewrite: { '^/api': '/produtos' }
    }
  ];
  module.exports = proxy;