console.log('Hello from sw.js');
console.log(self);
var baseCacheName = 'zmr-pwa-demo',
    version = new URL(location.href).searchParams.get('v'),
    cacheKeyRegExp = /zmr-pwa-demo-.*-(\d+)/;

console.log(version);

workbox.skipWaiting();
//workbox.clientsClaim();

//clean old cache. workbox默认不会做此事，因为它认为其他cache name是别的项目

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(
                keyList.filter(key => {
                    var result = key.match(cacheKeyRegExp);
                    //删除当前项目下的旧版本缓存
                    //result[1]匹配版本号
                    if(result && result[1] != version){
                        return true;
                    }
                    return false;
                }).map(key => {
                    return caches.delete(key);
                })
            );
        }).then(() => {self.clients.claim()})
    );
});

//configuration

workbox.setConfig({ debug: true });

workbox.core.setCacheNameDetails({
    //configure cache name
    prefix: baseCacheName,
    suffix: version,
    precache: 'precache',
    runtime: 'runtime'
});

//precaching

self.__precacheManifest.push({
    url: '/',
    revision: version
});
workbox.precaching.precacheAndRoute(self.__precacheManifest,{
    //忽略request url中的search parameters
    ignoreUrlParametersMatching: [/.*/]
});

/**
 * 这里说明一些总结：
 *
 * 1. workbox.cacheableResponse.Plugin：1）statuses必须填写，虽然官方说有
 * 默认值，但是不填写取到的是undefined。2）headers针对的是Response headers
 * 2. workbox.routing.registerRoute：默认情况下，拦截的是GET请求。如果想拦截
 * 其他method，则需要特别指出
 *
 * @type {[type]}
 */

//runtime cache

workbox.routing.registerRoute(
    // Cache Js files
    /\.(?:js)$/,
    workbox.strategies.networkFirst({
        cacheName: baseCacheName+'-js-cache-'+version,
        plugins: [
            new workbox.expiration.Plugin({
                // Cache for a maximum of a week
                maxAgeSeconds: 30 * 24 * 60 * 60,
                purgeOnQuotaError: true
            }),
            new workbox.cacheableResponse.Plugin({
                //默认是[0,200]
                statuses: [0, 200, 304]
            })
        ]
    })
);

// const cacheable = new workbox.cacheableResponse.CacheableResponse({
//   statuses: [0, 200],
//   headers: {
//       //'Method': 'GET',
//       'Content-Type': 'application/javascript; charset=UTF-8'
//   }
// });

// async function testCache(){
//     const response = await fetch('/js/0.bundle.js');
//
//     if (cacheable.isResponseCacheable(response)) {
//         console.warn('可缓存'+response.url)
//         let pp = response.headers.entries();
//         for(let pair of pp){
//             console.log(pair[0]+': '+pair[1]);
//         }
//     } else {
//         console.warn('不可缓存'+response.url)
//     }
// }
//
// testCache();


workbox.routing.registerRoute(
    // Cache CSS files
    /\.(?:css)$/,
    // Use cache but update in the background ASAP
    workbox.strategies.staleWhileRevalidate({
    // Use a custom cache name
        cacheName: baseCacheName+'-css-cache-'+version,
        plugins: [
            new workbox.expiration.Plugin({
                // Cache for a maximum of a week
                maxAgeSeconds: 30 * 24 * 60 * 60,
                purgeOnQuotaError: true
            }),
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200, 304] //默认是[0,200]
            })
        ]
    })
);

workbox.routing.registerRoute(
    // Cache image files
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
        // Use a custom cache name
        cacheName: baseCacheName+'-image-cache-'+version,
        plugins: [
            new workbox.expiration.Plugin({
                // Cache only 20 images
                maxEntries: 20,
                // Cache for a maximum of a week
                maxAgeSeconds: 7 * 24 * 60 * 60,
                purgeOnQuotaError: true
            }),
            new workbox.cacheableResponse.Plugin({
                statuses: [200, 304] //默认是[200]
            })
        ]
    })
);

//https://codelabs.developers.google.com/codelabs/workbox-lab/#8
//
const pageHandler = workbox.strategies.networkFirst({
    cacheName: baseCacheName+'-page-cache-'+version,
    matchOptions: {
        ignoreSearch: true
    },
    plugins: [
        new workbox.expiration.Plugin({
            // Cache for a maximum of a week
            maxAgeSeconds: 24 * 60 * 60,
            // 如果web app的可用存储空间超出事件触发，则自动清理缓存
            purgeOnQuotaError: true
        }),
        new workbox.cacheableResponse.Plugin({
            statuses: [0, 200, 304], //默认是[0,200]
            headers: {
                'Content-Type': 'text/html; charset=UTF-8'
            }
        })
    ]
});

workbox.routing.registerRoute(
    //匹配当前域名下的，不带后缀，或带.html也url
    new RegExp('^'+location.origin+'/(?!\\.)([\\w-/]+(\\.html)?)?((#|\\?)[^\\.]*)?$'),
    args => {
        console.log('page',args.url);
        return pageHandler.handle(args);
    }
);
