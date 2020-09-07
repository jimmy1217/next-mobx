// // server.js
// const { createServer } = require('http')
// const { parse } = require('url')
// const next = require('next')
// const port = parseInt(process.env.PORT, 10) || dev ? 3003 : 3004;

// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// app.prepare().then(() => {
//   createServer((req, res) => {
//     // Be sure to pass `true` as the second argument to `url.parse`.
//     // This tells it to parse the query portion of the URL.
//     const parsedUrl = parse(req.url, true)
//     const { pathname, query } = parsedUrl

//     if (pathname === '/a') {
//       app.render(req, res, '/a', query)
//     } else if (pathname === '/b') {
//       app.render(req, res, '/b', query)
//     } else {
//       handle(req, res, parsedUrl)
//     }
//   }).listen(port, (err) => {
//     if (err) throw err
//     console.log(`> Ready on http://localhost:${port}`)
//   })
// })

const express = require('express');
const next = require('next');
// const LRUCache = require('lru-cache');
const dev = process.env.NODE_ENV !== 'production';

// console.log('test')
// console.log(process.env.PORT)

const port = parseInt(process.env.PORT, 10) || dev ? 3003 : 3004;
const app = next({ dev });
const handle = app.getRequestHandler();

// /** 
//  * render cache 
//  * From: https://medium.com/@igordata/how-to-cache-all-pages-in-next-js-at-server-side-1850aace87dc
// */
// const ssrCache = new LRUCache({
//     max: 100 * 1024 * 1024, /* cache size will be 100 MB using `return n.length` as length() function */
//     length: function (n, key) {
//         return n.length
//     },
//     maxAge: 1000 * 60 * 60 * 24 * 30
// });

app.prepare()
    .then(() => {
        const server = express();

        //         /** --------- with cache start --------- */
        //         server.get('/_next/*', (req, res) => {
        //             handle(req, res);
        //         });

        //         server.get('*', (req, res) => {
        //             /* serving page */
        //             return renderAndCache(req, res)
        //         });
        //         /** --------- with cache end ------------ */

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        /* starting server */
        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`)
        })
    });

// /*
//  * NB: make sure to modify this to take into account anything that should trigger
//  * an immediate page change (e.g a locale stored in req.session)
//  */
// function getCacheKey(req) {
//     return `${req.path}`
// }

// async function renderAndCache(req, res) {
//     const key = getCacheKey(req);

//     // If we have a page in the cache, let's serve it
//     if (ssrCache.has(key)) {
//         console.log(`serving from cache ${key}`);
//         res.setHeader('x-cache', 'HIT');
//         res.send(ssrCache.get(key));
//         return
//     }

//     try {
//         console.log(`key ${key} not found, rendering`);
//         // If not let's render the page into HTML
//         const html = await app.renderToHTML(req, res, req.path, req.query);

//         // Something is wrong with the request, let's skip the cache
//         if (res.statusCode !== 200) {
//             res.send(html);
//             return
//         }

//         // Let's cache this page
//         ssrCache.set(key, html);

//         res.setHeader('x-cache', 'MISS');
//         res.send(html)
//     } catch (err) {
//         app.renderError(err, req, res, req.path, req.query)
//     }
// }