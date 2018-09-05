/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_bak/config/index.html",
    "revision": "95c0e919343201063c47e9d6921d7747"
  },
  {
    "url": "_bak/default-theme-config/index.html",
    "revision": "9d4910f1c58558ef17ae7da1a1f2f094"
  },
  {
    "url": "_bak/guide/assets.html",
    "revision": "5bc2d40880b1f9dae7d10c1f8cfc1b90"
  },
  {
    "url": "_bak/guide/basic-config.html",
    "revision": "6c93042077954bff63336fedae3f8c39"
  },
  {
    "url": "_bak/guide/custom-themes.html",
    "revision": "1a5ad9feea7d70af3b12e342cdbcd10c"
  },
  {
    "url": "_bak/guide/deploy.html",
    "revision": "bddc67d6a3652f35824d26bc9c3ce444"
  },
  {
    "url": "_bak/guide/getting-started.html",
    "revision": "94982c031fb6cc8c8cbedc2dd99f88e2"
  },
  {
    "url": "_bak/guide/i18n.html",
    "revision": "7cdac4e6c3b461cd014fbd5f46689b52"
  },
  {
    "url": "_bak/guide/index.html",
    "revision": "5cd71265a9e76fe212965d4934d65e2b"
  },
  {
    "url": "_bak/guide/markdown.html",
    "revision": "1ca42b3b34701dc89802210c14ebadd5"
  },
  {
    "url": "_bak/guide/using-vue.html",
    "revision": "6d75e819330de4a1933a0e32852abde4"
  },
  {
    "url": "404.html",
    "revision": "bce4c9b5e5f4295a6e28a6028efeaae3"
  },
  {
    "url": "assets/css/0.styles.297803e2.css",
    "revision": "ccfaaed73b1f5ddaa2fbbef5d15ce05e"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/10.ee766b4b.js",
    "revision": "7428dd5ecbb63c2b3115c003ba8fae9c"
  },
  {
    "url": "assets/js/11.098508a9.js",
    "revision": "684b973da6ea70f4d1ff306f7dde8463"
  },
  {
    "url": "assets/js/12.b27c9897.js",
    "revision": "613fbf1420c22161f1322e827adc40fd"
  },
  {
    "url": "assets/js/13.1e2229f5.js",
    "revision": "bce31d92b4d017f04b71093d8f57ce45"
  },
  {
    "url": "assets/js/14.ff71ac8e.js",
    "revision": "6cff6373471f7d5be46ac8e3781392a2"
  },
  {
    "url": "assets/js/15.d1310a4a.js",
    "revision": "3b0ec8deef93a15f53db77675f8ea51e"
  },
  {
    "url": "assets/js/16.677d9587.js",
    "revision": "85cc230ad1ddcae5959f1e02cede38ac"
  },
  {
    "url": "assets/js/17.c99deb63.js",
    "revision": "3e3c0d0752ada85f062851a7a2274cb8"
  },
  {
    "url": "assets/js/18.e3ed5b8b.js",
    "revision": "3f6830686fa08c2f293423a316b0cd33"
  },
  {
    "url": "assets/js/19.de4f32c2.js",
    "revision": "5a987b4f3aabb762a42f730696aeb70e"
  },
  {
    "url": "assets/js/2.1b37ce37.js",
    "revision": "386909733073ee4efadbc69ba23bcd42"
  },
  {
    "url": "assets/js/20.e45a4d42.js",
    "revision": "92eed50ea9353ddbfc6a4fecba110780"
  },
  {
    "url": "assets/js/21.4b5fd1cd.js",
    "revision": "391a32eb68bfc944cd7c84e38dde3adb"
  },
  {
    "url": "assets/js/22.017dd1e9.js",
    "revision": "0ebe10ef5c48c88cc4bba697aaecd252"
  },
  {
    "url": "assets/js/23.8d94198b.js",
    "revision": "f56c1f0ab1fb38c6532ce216c7172916"
  },
  {
    "url": "assets/js/24.420dbd54.js",
    "revision": "9601b0b65d48f04248ff8c92caa68dd0"
  },
  {
    "url": "assets/js/25.66eb4fcb.js",
    "revision": "1224be2c087b83d29ffd91f2061cde93"
  },
  {
    "url": "assets/js/26.e7051f52.js",
    "revision": "36abe1b82eb3146073e7c1d2794d701e"
  },
  {
    "url": "assets/js/27.e0ab842c.js",
    "revision": "80efb889a1e96071441b22a34aafaa95"
  },
  {
    "url": "assets/js/28.85f81e53.js",
    "revision": "d6572ce69ddc2099e73c824d47016970"
  },
  {
    "url": "assets/js/29.ddff715b.js",
    "revision": "03f8ece5decee578dd3cac759fa04289"
  },
  {
    "url": "assets/js/3.04900287.js",
    "revision": "5cf0729af207da12ff163feef3e12dd1"
  },
  {
    "url": "assets/js/30.eda8ce65.js",
    "revision": "8ac1e50aeaec852010eed30058da74c1"
  },
  {
    "url": "assets/js/4.bb3d4758.js",
    "revision": "263be26a2828c10bc1effa9664fc2416"
  },
  {
    "url": "assets/js/5.90a803df.js",
    "revision": "b1faaba59965e1b2fcc7554aaa4f4f17"
  },
  {
    "url": "assets/js/6.f9a04aff.js",
    "revision": "8e1dc576daec0b6e2f16279997b35573"
  },
  {
    "url": "assets/js/7.6625035e.js",
    "revision": "ad2bf7a0b67cd8c3ea828d37da908098"
  },
  {
    "url": "assets/js/8.0e29c1ec.js",
    "revision": "322a45ec2732fbe3f57f07759290ba0f"
  },
  {
    "url": "assets/js/9.5d3b2524.js",
    "revision": "5b937c47662e3f3d56704c99a609cc5c"
  },
  {
    "url": "assets/js/app.cd2bacbf.js",
    "revision": "3130435b76cfb4f2b0118ca7fcb16ab3"
  },
  {
    "url": "config/index.html",
    "revision": "648153b17a852de5a89f289fc4559aad"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "ba9a3039a90c41bedf13d758aa05fc55"
  },
  {
    "url": "guide/assets.html",
    "revision": "2424c6593e14eadce57d74d635b03264"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "79b4b4c28c874ad40dd675c325f4c89b"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "acc79d5faffe63aaf23e28ab6d7034c9"
  },
  {
    "url": "guide/deploy.html",
    "revision": "d52426894d5e98f5c2d3867273efacf9"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "2ec61f5a629b952981d1a14038707afc"
  },
  {
    "url": "guide/i18n.html",
    "revision": "c105c0401d943e7709c31a93536f6f03"
  },
  {
    "url": "guide/index.html",
    "revision": "705493bc15a4e95ee4539560bb7e0a86"
  },
  {
    "url": "guide/markdown.html",
    "revision": "b3bab023d767c558d157621ef36099e6"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "737b9c2ca8545504f3c30f2d614ac1c2"
  },
  {
    "url": "hero.png",
    "revision": "241daf83e6b0874f54f1c22fa78939de"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "f2144776be184283c1cb02b9899bbbfc"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
