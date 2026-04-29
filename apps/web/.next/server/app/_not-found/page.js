(() => {
  var e = {};
  ((e.id = 492),
    (e.ids = [492]),
    (e.modules = {
      846: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      9121: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/action-async-storage.external.js");
      },
      3295: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");
      },
      9294: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-async-storage.external.js");
      },
      3033: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");
      },
      3873: (e) => {
        "use strict";
        e.exports = require("path");
      },
      9436: (e, r, t) => {
        "use strict";
        (t.r(r),
          t.d(r, {
            GlobalError: () => i.a,
            __next_app__: () => u,
            pages: () => p,
            routeModule: () => c,
            tree: () => l,
          }));
        var n = t(3869),
          s = t(9322),
          o = t(1412),
          i = t.n(o),
          a = t(5187),
          d = {};
        for (let e in a)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (d[e] = () => a[e]);
        t.d(r, d);
        let l = [
            "",
            {
              children: [
                "/_not-found",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(t.t.bind(t, 9760, 23)),
                        "next/dist/client/components/not-found-error",
                      ],
                    },
                  ],
                },
                {},
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(t.bind(t, 8086)),
                "/Users/abdelrahmanreyad/projects/freelancer projects/learning-approaches/apps/web/src/app/layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(t.t.bind(t, 9760, 23)),
                "next/dist/client/components/not-found-error",
              ],
              forbidden: [
                () => Promise.resolve().then(t.t.bind(t, 185, 23)),
                "next/dist/client/components/forbidden-error",
              ],
              unauthorized: [
                () => Promise.resolve().then(t.t.bind(t, 2054, 23)),
                "next/dist/client/components/unauthorized-error",
              ],
            },
          ],
          p = [],
          u = { require: t, loadChunk: () => Promise.resolve() },
          c = new n.AppPageRouteModule({
            definition: {
              kind: s.RouteKind.APP_PAGE,
              page: "/_not-found/page",
              pathname: "/_not-found",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: l },
          });
      },
      6905: (e, r, t) => {
        (Promise.resolve().then(t.t.bind(t, 3974, 23)),
          Promise.resolve().then(t.t.bind(t, 8864, 23)),
          Promise.resolve().then(t.t.bind(t, 1412, 23)),
          Promise.resolve().then(t.t.bind(t, 7828, 23)),
          Promise.resolve().then(t.t.bind(t, 5439, 23)),
          Promise.resolve().then(t.t.bind(t, 3793, 23)),
          Promise.resolve().then(t.t.bind(t, 4406, 23)));
      },
      7529: (e, r, t) => {
        (Promise.resolve().then(t.t.bind(t, 2873, 23)),
          Promise.resolve().then(t.t.bind(t, 6760, 23)),
          Promise.resolve().then(t.t.bind(t, 6700, 23)),
          Promise.resolve().then(t.t.bind(t, 6039, 23)),
          Promise.resolve().then(t.t.bind(t, 5519, 23)),
          Promise.resolve().then(t.t.bind(t, 9209, 23)),
          Promise.resolve().then(t.t.bind(t, 7334, 23)));
      },
      9739: () => {},
      6179: () => {},
      8086: (e, r, t) => {
        "use strict";
        (t.r(r), t.d(r, { default: () => l, metadata: () => d }));
        var n = t(2571),
          s = t(1168),
          o = t.n(s),
          i = t(6166),
          a = t.n(i);
        t(7238);
        let d = {
          title: "Javascript Dojo | Master the Art of Code",
          description:
            "Join the most interactive code kata platform. Sharpen your Javascript skills with real-world challenges.",
          keywords: [
            "javascript",
            "coding",
            "kata",
            "learning",
            "dojo",
            "platform",
          ],
          openGraph: {
            title: "Javascript Dojo",
            description: "Master the Art of Code",
            type: "website",
          },
        };
        function l({ children: e }) {
          return (0, n.jsx)("html", {
            lang: "en",
            className: `${o().variable} ${a().variable}`,
            children: (0, n.jsx)("body", {
              className: "font-sans antialiased",
              children: e,
            }),
          });
        }
      },
      7238: () => {},
    }));
  var r = require("../../webpack-runtime.js");
  r.C(e);
  var t = (e) => r((r.s = e)),
    n = r.X(0, [207], () => t(9436));
  module.exports = n;
})();
