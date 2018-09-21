console.log('Hello from sw.js');
console.log(self);
var baseCacheName = 'zmr-pwa-demo',
    version = new URL(location.href).searchParams.get('v'),
    cacheKeyRegExp = /zmr-pwa-demo-.*-(\d+)/;

console.log(version);

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
        })
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
    url: location.pathname,
    revision: version
});
workbox.precaching.precacheAndRoute(self.__precacheManifest,{
    //忽略request url中的search parameters
    ignoreUrlParametersMatching: [/.*/]
});

//runtime cache

workbox.routing.registerRoute(
    

);

workbox.routing.registerRoute(
    // Cache Js files
    /\.(?:js)$/,
    workbox.strategies.networkFirst({
        cacheName: baseCacheName+'js-cache'+version,
        plugins: [
            new workbox.expiration.Plugin({
                // Cache for a maximum of a week
                maxAgeSeconds: 30 * 24 * 60 * 60
            }),
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200, 304]
            })
        ]
    })
);

workbox.routing.registerRoute(
    // Cache CSS files
    /\.(?:css)$/,
    // Use cache but update in the background ASAP
    workbox.strategies.staleWhileRevalidate({
    // Use a custom cache name
        cacheName: baseCacheName+'css-cache'+version,
        plugins: [
            new workbox.expiration.Plugin({
                // Cache for a maximum of a week
                maxAgeSeconds: 30 * 24 * 60 * 60
            }),
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200, 304]
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
        cacheName: baseCacheName+'image-cache'+version,
        plugins: [
            new workbox.expiration.Plugin({
                // Cache only 20 images
                maxEntries: 20,
                // Cache for a maximum of a week
                maxAgeSeconds: 7 * 24 * 60 * 60
            }),
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200, 304]
            })
        ]
    })
);
