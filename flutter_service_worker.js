'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6c18b0ebfff77e10d2871eba81729b96",
"index.html": "dcaaf6df9a1b4abd9952ad6a8c801483",
"/": "dcaaf6df9a1b4abd9952ad6a8c801483",
"main.dart.js": "f2ca12d54265bcd2cd63644fc0cb42be",
"README.md": "1bcf3db074f6d9b639fadb19c223e104",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c098da86cc62c28c6a3567d0da797126",
".git/ORIG_HEAD": "b7649bfc7ecb43623a2ec54d24862bdc",
".git/config": "7d26aa18fa519ed5c3199666a5a88ff7",
".git/objects/61/4f1f6c8d103573cd8941c55d5512c89f4c21c5": "767032cb031a8b25a943ef11271a7cd6",
".git/objects/95/97fe5b323e982038e5a8aef71e394c96de0707": "47594d54e3fed135406b09477a640977",
".git/objects/92/f9d36907f69ba8c541d7cb5c8d5f15e344c0ab": "6128410d3c1fcc61116083ba21923a39",
".git/objects/3e/4061506ef920da312f6b9674b74887c103f511": "d4c2dc5e2368d7350a54c0e2ff320e17",
".git/objects/68/fbd615e5bc212caa64e7ca68dedb0a6a7ce5f4": "5c50a1515bc1c5c41ccfd0c2aeebedf3",
".git/objects/57/f09ed84ee490857059132815db48974a38c09d": "55d6d732127b6e680a7e7375e0d03a53",
".git/objects/6a/311b2baf9a28b77618f86ace44175b257c5cc0": "84406a0688b082d008cf5f721428ed70",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/94/8218209a1bdd4756bad1f5bd5642f822fc479c": "34b31cb5f198081e20741cd28458492d",
".git/objects/02/f5640757bc38b0fe145fe80f4f97ddd9248919": "79f3fd58419a1f5ff136ed45cb0221aa",
".git/objects/a4/87141809aa92b906c5e3f20f35da5eccf4ba3d": "b1ce7355c998a5f8761d72419f7b107c",
".git/objects/d9/1be035c02032c95da9a888523b9d78812f567e": "97b3d8b2ecfbcfc842699036681ab3a2",
".git/objects/ac/ea25753dc2824aa0e4080ef8a487128c6fa560": "a8002eb58299769c563fc51bd7f405d2",
".git/objects/bb/1304e43ca67c48b45fb0b3cc6e1802cbde0974": "6baf87995976256bbfa0e9b20add3a5a",
".git/objects/d7/f5fb61eff04b8ee60cc04767be5b559b3c84ab": "6be56b9ba3aa6647911092f1497a391e",
".git/objects/d1/be3a9103d90f71c5b397ca000a2026d1f314b4": "1ec10ead754c4c2e3f01df74efe86077",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/97b700e898e74a7ed220fb3371d16cae4aed4a": "070a57562356522054103026678408c1",
".git/objects/eb/b1b99be1433f8f2cea3e7f080b659ba1303b65": "060f691ffb088bcda89f81d86aad0b52",
".git/objects/ee/de046798f03b66759b979df64f5cc488232e6e": "d463d43201d2134e4c4bca16a25a137d",
".git/objects/fc/d437cd1f51cecc27adc76f8d6cd55a8bfc6592": "42b4f779a52c8394c8c183955123ff4e",
".git/objects/cf/4a81df46fc0dda820ed28b27cb571feefa169c": "4c493430ac046a9740a2d54563729c9a",
".git/objects/e4/949ad53d6bf46ac5a02e17baf216d796c50193": "25125408efb185941372cabc39816abc",
".git/objects/c1/bc02cc0d193dd40f37191845f5d8d9eae0ebf0": "6e12512ad61d2f47ae1f198609ea5862",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/7d/76d2d46e77d68e2a224cce76b1d0651762ccb3": "7b1014618f3621b5920161fb0ce19524",
".git/objects/16/a4a8c520e589a22c97a0edb9a1134be01cc344": "7a1b31eed9368888086376ce47eb05c4",
".git/objects/89/3906d59cc9f78591e38d6e52defdc7d3b0be29": "2075cd3b802f4c806c145055579eaa72",
".git/objects/45/c030cd8a1fad6f8065129099eac41098f186d7": "4e9facc2941516e7e2268d29e36da9bc",
".git/objects/1f/8843dffa4e0d7784337b6e17f68e67d1b6989e": "fc2317b74d35ea9f06b12941e7ea96df",
".git/objects/1a/fa13204ba626fabc77f528e5ebdb187e94be71": "130537b06889aed3f34a4205f13d19f3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6f5014a3efbe34d50b9789d52b68c3f53b0e0d": "ced99510cede9ad166e4bd4f7f747f75",
".git/objects/21/5c700367978eafeae619db84867796462df0f5": "27267c67af05ed50676b9bd39b6078ab",
".git/objects/81/987252ad69434e389dd7663e78708a11491b34": "dbdb2b566639a1351ae40a2631e4e453",
".git/objects/2f/235ffd6bbea413cdeffdd67c3c3871c9abc464": "97cf2859c9f25df85c53deaa622d1bb1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/995bbed442874462ea208d2fb8782ce1a444fd": "c068876ff67e433053bf992e1f24754b",
".git/objects/00/7196f434db112a7ef1d1fd36234cf3fb7877b9": "195672cba3950db863af077b27913575",
".git/objects/9a/7f5c596389e39fb3a46233623172ae035e21ab": "e099851fc53c2487fffbe6749b2f596e",
".git/objects/5c/56cc752d478644a7339975f3d7604755442923": "663a54ddf7ea384b5a78952dd257f894",
".git/objects/3a/94dbdc836f9a461326cbc6de231799d0844519": "cbd8a385f984ce7d4b89c45ba8de178d",
".git/objects/54/4fc8f737c48996f4450132371fcef958d591ed": "b4314ec3b4319e49435d2f1bed5962c5",
".git/objects/5b/130080a45950f537743c500dd8ddf53aa96500": "92c3d427e3c96a22e7112b29c0b86386",
".git/objects/6d/1ee2846d109f2944da24735f13b88372559835": "a8a81988be58bfe124a2465b52667deb",
".git/objects/06/c700005a053d0c3a39070cba429d860542f9a7": "edaa83c98237703e0f077a99632579c2",
".git/objects/99/ee571ac101f5f9538342ce7f61fdbab0a03010": "0c32c648d6bbc13e0e83afbbee94ed1c",
".git/objects/63/c4cadd246646944c8b549bed5e6f918f3ef51a": "cbad9905ee627622cdf255b2a8f07069",
".git/objects/63/40d1e96f577a907af7a3170d15eca370412149": "0918afa1baf60a8d7469c58eb2a861f7",
".git/objects/d3/75088572e2723f1436c53422f0efe439bf7d9d": "449c3cf9422f1e91219d3dc1150dc381",
".git/objects/d4/01bdb7cd5df6cd9dd01650c7e8351d9bf7c13e": "9114eea11e9f94422f3f273463e61e49",
".git/objects/b1/9988b09ee67b038bb162c1d16f7d70db5ce0ed": "73a9d0d39ac42f0c335ea08f6ce251b7",
".git/objects/af/33df604b713a0396f7794130d2cdaac0622dec": "42b318f0f27b9c258bb8dfeaac7c9b73",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a6/d684d74db103e80bafa69fbdb9ff9f356d8a74": "3a17826c80369590d169878f920d2f30",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/55f12e2cf4b1de69946fec8b1fff595d8e5574": "1fb197c574f1f60cce0e24da77f3b31d",
".git/objects/fa/08b09f8a34c52580e1596ab3b2598c63830772": "3f979857fd897c0102ed7c889cc39142",
".git/objects/c2/39636dbee1ef878abb7e3e0a4881066547a502": "6a8ea2b3d4fe2e6bc78c7d3be0d35158",
".git/objects/f6/0b16b3a91f1b63d079c816752ab15691689f25": "9e66ec33eb549fb300825c1d7f7e3899",
".git/objects/e7/add05872b2bb0904c07e92501bf57fddfc8cd2": "bf07046490b648d994850cd9858551cd",
".git/objects/e7/b004e3d250e0c08e464f0965dc7c9c11924b14": "b2caa4c590fedc78a0c4d2eaa0b154e4",
".git/objects/e7/c8c3f4e77c279c673c4768a94672eff89ee258": "c3c3aa9e25697d210fef8f2baedc73d8",
".git/objects/cb/c28642d1c1f3720ba2baf72b95648608cf2429": "0b3176d6614e55569143581931450c7a",
".git/objects/f8/e4931a40b83cbf2caa33dc6cbe68b74057a46c": "c1a7d646d7672e3b4b507261c1c316fa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/ca5513b0ce18cc4a64095cc8d65727b75a0b10": "9bbeb041de59c69c9ebf1d329f442b56",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/e339cf5ce96d6bda520df920567bbcc5a3c574": "57110e3093a885671c455bb3701d7f53",
".git/objects/1d/2de9b6a66a588080a3564a25969568b1c6fc27": "28785d31bfaa7f4a6d39d62cfc8fa83d",
".git/objects/2e/17f3a29629b08bdbf8221fa8a300d87be457bc": "07861b3f8c6a63702dc45219eb43f7f5",
".git/objects/2b/0179c2b622b32ef97cd489002fe8ced1774923": "6060d420aac51834492e85b4a88bcda0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "806e0c11f13e84fdb5147a24a8e200ee",
".git/logs/refs/heads/main": "773920432b6b74ed25b6852dfe6b6c3b",
".git/logs/refs/remotes/origin/main": "681e385f42e439cfddcb53fb881d468c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b7649bfc7ecb43623a2ec54d24862bdc",
".git/refs/remotes/origin/main": "b7649bfc7ecb43623a2ec54d24862bdc",
".git/index": "f75d99d2c4f872df9399bd68618a6179",
".git/COMMIT_EDITMSG": "0f1a036bb971987b65fdc9437b1cb345",
".git/FETCH_HEAD": "1f73d59693b3a689dc8ec85e8e207232",
"assets/AssetManifest.json": "57751adbfb0bcfe1424f6d2f14a346d9",
"assets/NOTICES": "9031536291b2b23c11025bb299a33753",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/logo_big.png": "f0fae5003c2c9b3142420627c2ffb727"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
