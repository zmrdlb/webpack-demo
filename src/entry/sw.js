console.log('Hello from sw.js');
console.log(self);
var baseCacheName = 'zmr-pwa-demo',
    version = new URL(location.href).searchParams.get('v'),
    cacheKeyRegExp = /zmr-pwa-demo-.*-(\d+)/;

// service worker 安装成功，处于等待状态，直到再也没有其他已经加载的页面使用旧版本的 service worker.
self.addEventListener('install', function(event) {
    console.log('sw install');
    // service worker 里面进入 active 状态
    self.skipWaiting();
});

/**
 * clean old cache. workbox默认不会做此事，因为它认为其他cache name是别的项目
 * self.clients.claim()：让 active 的 service worker 成为它注册的 scope 里所有 clients 的控制者。
 */
self.addEventListener('activate', function(event) {
    console.log('sw active');
    console.log('检测旧版本cache并删除');
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
                    console.error(key);
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
const precacheList = ['/index.html','/404.html', '/offline.html'];

precacheList.forEach((url,index) => {
    self.__precacheManifest.push({
        url: url,
        revision: version+index
    });
})

workbox.precaching.precacheAndRoute(self.__precacheManifest,{
    //忽略request url中的search parameters
    ignoreUrlParametersMatching: [/.*/]
});

//runtime cache

//默认只匹配同域
workbox.routing.registerRoute(
    // Cache Js files
    /\.(?:js)((#|\?)[^\.]*)?$/,
    new workbox.strategies.NetworkFirst({
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

//对跨域存储进行测试。页面加载后可运行 fetch('http://code.jquery.com/jquery-latest.js') 测试
// workbox.routing.registerRoute(
//     // Cache Js files
//     new RegExp('http://code.jquery.com.*\.js((#|\\?)[^\\.]*)?$'),
//     new workbox.strategies.NetworkFirst({
//         cacheName: baseCacheName+'-js-cache-'+version,
//         plugins: [
//             new workbox.expiration.Plugin({
//                 // Cache for a maximum of a week
//                 maxAgeSeconds: 30 * 24 * 60 * 60,
//                 purgeOnQuotaError: true
//             }),
//             new workbox.cacheableResponse.Plugin({
//                 //默认是[0,200]
//                 statuses: [0, 200, 304]
//             })
//         ]
//     })
// );

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
    /\.(?:css)((#|\?)[^\.]*)?$/,
    // Use cache but update in the background ASAP
    new workbox.strategies.StaleWhileRevalidate({
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
    /\.(?:png|gif|jpg|jpeg|svg)((#|\?)[^\.]*)?$/,
    // Use the cache if it's available
    new workbox.strategies.CacheFirst({
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

workbox.routing.registerRoute(
    // Cache image files
    /\.(?:ttf)((#|\?)[^\.]*)?$/,
    // Use the cache if it's available
    new workbox.strategies.CacheFirst({
        // Use a custom cache name
        cacheName: baseCacheName+'-font-cache-'+version,
        plugins: [
            new workbox.expiration.Plugin({
                // Cache only 20 fonts
                maxEntries: 8,
                // Cache for a maximum of a week
                maxAgeSeconds: 30 * 24 * 60 * 60,
                purgeOnQuotaError: true
            }),
            new workbox.cacheableResponse.Plugin({
                statuses: [200, 304] //默认是[200]
            })
        ]
    })
);

//https://codelabs.developers.google.com/codelabs/workbox-lab/#8

//说明：
//1. 对于webpack构建的页面来说。/,/XXX这种没有后缀的navigation requests（目标是document页面），
//都会重定向到index.html
//2. 以下关于registerNavigationRoute的两种测试，如果符合重定向到404.html的url，
//则也不会再在cache里面重复存储。这个特性对于spa页面非常有用，可以防止重复缓存。(经测试，
//如果不设置registerNavigationRoute，如访问/onepage, /twopage等，都会在cache里面各自缓存一份)


//除了访问/返回正常，访问其他都跳转到404页面，即使/another.html本身存在
// workbox.routing.registerNavigationRoute('/404.html');

//这里添加了黑名单，访问/another.html，会返回真正的another.html，并缓存在cache里
//其他除了访问/，/another.html返回正常，其他都跳转到404
// workbox.routing.registerNavigationRoute('/404.html', {
//     // whitelist: [
//     //     new RegExp('/another\.html')
//     // ],
//     blacklist: [
//         new RegExp('/another\.html')
//     ]
// });

//上述两者是为了进行测试。
//现在进行真正的配置。
workbox.routing.registerNavigationRoute('/index.html', {
    whitelist: [
        //匹配没有后缀的navigation
        new RegExp('^'+location.origin+'/(?!\\.)([\\w-/]+)?((#|\\?)[^\\.]*)?$')
    ],
    blacklist: [
        // new RegExp('/another\.html'),
        // new RegExp('/404\.html')
    ]
});

const pageHandler = new workbox.strategies.NetworkFirst({
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

//https://developers.google.com/web/tools/workbox/modules/workbox-routing
workbox.routing.registerRoute(
    //匹配当前域名下的，不带后缀，或带.html的url: new RegExp('^'+location.origin+'/(?!\\.)([\\w-/]+(\\.html)?)?((#|\\?)[^\\.]*)?$'),
    //默认匹配当前域，可以不用显示声明location.origin
    //匹配当前域名下的，带.html的url
    new RegExp('^'+location.origin+'/(?!\\.)([\\w-/]+\\.html)?((#|\\?)[^\\.]*)?$'),
    args => {
        return pageHandler.handle(args).then(response => {
            if(!response){
                return caches.match('/offline.html');
            }else if (response.status === 404) {
                return caches.match('/404.html');
            }
            return response;
        })
    }
);
