'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9a71c1a5df2de3c74a94dde4ba3fdcb9",
"version.json": "e12d16673f638ed170a5f83edf27c036",
"index.html": "3cd8ccdfec79b46b48d497a0380b6433",
"/": "3cd8ccdfec79b46b48d497a0380b6433",
"main.dart.js": "0f8510affcfc8ed5f8e7ffae39d34b2e",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "a7961e1222e8347909aba74bcdbdb007",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9b7dd8af1b8fa459a9df26b6dc0916a9",
"assets/AssetManifest.json": "6efb9cbd23ce7ecc4005e8a11515c19f",
"assets/NOTICES": "8b2c1d3677c8eeb7db74277046bdd61c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "65d115a08e5a67bc115885bfb7588921",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "df76891c325a3507672bba846384b2a4",
"assets/fonts/MaterialIcons-Regular.otf": "fa69dd6698be388a7ae92eb256f3ab77",
"assets/assets/svg/figma.svg": "c7ef676648d0a63907b26420105ed20d",
"assets/assets/svg/sqflit.svg": "6c5cd0c9699925cc9e0d53490f5c87ea",
"assets/assets/svg/android-svg.svg": "8798a1c47d9c9d2fcb312a1df2a5e4ad",
"assets/assets/svg/javascript.svg": "0c1f700da144243c526f252e59362138",
"assets/assets/svg/firebase.svg": "029fd3c092480d94d80837b5fc4d2744",
"assets/assets/svg/java.svg": "459bbae2e96a2410c5b429eb941a4c11",
"assets/assets/svg/github.svg": "4b8a4845e3c03b05cc92e2b3199889d5",
"assets/assets/svg/postgres.svg": "bae4eabea5c2343f4346dcbb29ecf4ee",
"assets/assets/svg/cpp.svg": "e5b135b00998f9cd69a38eed9b1eee81",
"assets/assets/svg/x.svg": "602958e0674315e1cd989b3ac5f74567",
"assets/assets/svg/flutter.svg": "5ff1722cbed36fdb869cba0c95788d42",
"assets/assets/svg/instagram.svg": "abc08e76d2b0256d0a0c1815fc091be7",
"assets/assets/svg/rsut.svg": "3941d1edb5278d19651e20f99d553e81",
"assets/assets/svg/pin.svg": "016e1239cee25476a342ec4d0a6b1aa5",
"assets/assets/svg/404.svg": "a1c36d16b80c7ecbb9b36868e664644a",
"assets/assets/svg/xcode.svg": "fdf392fc8ed140e075b5c7f9eeb40315",
"assets/assets/svg/hackerrank.svg": "0b190df020a48e0e8e84f8df5f7a8335",
"assets/assets/svg/email.svg": "99c14f8ef3bf527047167e56e5021217",
"assets/assets/svg/xd.svg": "9bb3470b5ef02c1701b77f18a121b3d1",
"assets/assets/svg/nodejs.svg": "f1073ec6532d918366ef2cba67c376b1",
"assets/assets/svg/dart.svg": "11b770f163584b0e8cbba1f7bc626f55",
"assets/assets/svg/css.svg": "a55118403c13e2719d453b74dffa80f8",
"assets/assets/svg/google.svg": "8cddc97baf8329135ae55c6672fc5d63",
"assets/assets/svg/typescript.svg": "5466068bce2f445414bd579cbd6c5c98",
"assets/assets/svg/photoshop.svg": "0380ea2f19821ed646919015d5218653",
"assets/assets/svg/api.svg": "0b3c7990bafed4e7b5294074796096a4",
"assets/assets/svg/arduino.svg": "8315ba8a61078f15522f0bc0ec9ab878",
"assets/assets/svg/ios.svg": "df1c0a8619962c6efea4db6780b098c3",
"assets/assets/svg/linkedin.svg": "15b4281ebd93cc246c81200bc3c1fd94",
"assets/assets/svg/discord.svg": "003a4aac7b5e5967282e669434c63c4a",
"assets/assets/svg/html.svg": "16d07e8682a531f3bc1e9fb01bd59740",
"assets/assets/svg/socket.svg": "a6f890f8625ced1d0c617a8eef23146e",
"assets/assets/svg/csharp.svg": "a7d61845041681391c4c0aa67e551e42",
"assets/assets/i.png": "a7961e1222e8347909aba74bcdbdb007",
"assets/assets/emoji/Book.png": "37f0d3a87be8cf4dbbd5faa3fc024269",
"assets/assets/emoji/Brain.png": "1df42512fa24d0f4036d7da4d5854526",
"assets/assets/emoji/camping.png": "61325790f3655340f3cfc8af43253077",
"assets/assets/emoji/img.png": "f657a81f8359d4d182fcb24fcf4c8ad2",
"assets/assets/emoji/img.jpg": "c881c9943915b067b37f5f368de3daf1",
"assets/assets/emoji/Gym.png": "5a150ea0e29632878858ca969c4ce743",
"assets/assets/emoji/apex_legends.jpeg": "68b1b04f5397afb5c903e5f7e1434555",
"assets/assets/emoji/Moon.png": "c0b629faae5bdead6af320a76cbe5763",
"assets/assets/emoji/Airplane.png": "1483f1f11b0100978d3188ca43a1f82b",
"assets/assets/emoji/Magnifier.png": "0121dbce702fcfbf52c2bc97d8e6babd",
"assets/assets/emoji/videogame.png": "f04ce205e7208b61bbc08d394215c1e0",
"assets/assets/emoji/hiking.png": "4b95e884d1cf671d8bfcd231dd39c03b",
"assets/assets/ss/dummyScooter.png": "3d18d5d1c9ea4ec65eea197a21d7ab0a",
"assets/assets/ss/crypto.png": "08e97d1dd0c51c5a8a6fd42276a99562",
"assets/assets/ss/scooty.png": "5558c3e470dea9ae525bebd4038518d7",
"assets/assets/ss/storeLogo.jpg": "f1f52aa7190c0448eee0f6e899020625",
"assets/assets/ss/makeup.png": "25cbd171114efd9b96b19a7846f53a97",
"assets/assets/ss/golfCart.png": "2d1834252fdf613ffb3b34bfbd9779e5",
"assets/assets/ss/cvv.png": "0dd5962c908a73a44c736f491092a797",
"assets/assets/ss/golf-cart.png": "11d9c710e2bdd153ee627c39b3756ad5",
"assets/assets/ss/gym.png": "e8e3abe759b7578438c6d1c0036957ec",
"assets/assets/ss/s1.png": "06f992c1728e2a954641692446f46ab3",
"assets/assets/ss/s2.png": "8a3f6d20690c8858a257b6344c7ec002",
"assets/assets/ss/ss.png": "d6be9d05e9ffa6b5fd425a27b7ecd8d7",
"assets/assets/ss/Spiders_logo.png": "d9291b39fae05041869796e852e782ae",
"assets/assets/ss/cv.png": "9e2010d0eda48e67860665b6ed6a7de9",
"assets/assets/ss/digi.png": "5040c5f689558bb2a586e6f3b6e53b4d",
"assets/assets/ss/res.png": "0f332672a1c0696a07521311b78a83c6",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
