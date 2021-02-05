const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

    app.use(
        '/graphql/',
        createProxyMiddleware({
            target: 'https://guarded-shore-81814.herokuapp.com/',
            changeOrigin: true,
            // ws: true
        })
    );

};

// [HPM] Proxy created: /  -> https://guarded-shore-81814.herokuapp.com/
