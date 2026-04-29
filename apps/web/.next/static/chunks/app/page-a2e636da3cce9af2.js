(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    8152: (e, t, r) => {
      (Promise.resolve().then(r.bind(r, 941)),
        Promise.resolve().then(r.bind(r, 4561)));
    },
    941: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => m });
      var a = r(9626),
        s = r(1943),
        i = r(1964),
        n = r(7056),
        l = r(1543),
        o = r(4870),
        d = r(18),
        c = r(6502);
      function x() {
        return (0, a.jsxs)(i.P.div, {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: { delay: 0.2, duration: 0.5 },
          className: "w-full max-w-lg mx-auto mt-12",
          children: [
            (0, a.jsxs)("div", {
              className: "relative group",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-col sm:flex-row gap-3 p-2 rounded-2xl glass transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/50",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "flex-1 relative flex items-center bg-white/5 rounded-xl border border-white/10 group-focus-within:border-primary/50 transition-colors",
                      children: [
                        (0, a.jsx)(c.A, {
                          className:
                            "ml-4 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors",
                        }),
                        (0, a.jsx)("input", {
                          type: "email",
                          placeholder: "Enter your email",
                          className:
                            "bg-transparent border-none outline-none w-full py-4 px-4 text-lg placeholder:text-muted-foreground/50 h-full",
                          required: !0,
                        }),
                      ],
                    }),
                    (0, a.jsx)(s.$n, {
                      variant: "premium",
                      size: "lg",
                      className:
                        "sm:w-auto w-full font-bold text-lg px-10 h-14",
                      children: "Join the Dojo",
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className:
                    "absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10",
                }),
              ],
            }),
            (0, a.jsxs)("p", {
              className: "text-muted-foreground text-sm mt-6 font-medium",
              children: [
                "Join ",
                (0, a.jsx)("span", {
                  className: "text-foreground",
                  children: "1,248+",
                }),
                " developers sharpening their blades. ",
                (0, a.jsx)("span", { className: "ml-1", children: "⚔️" }),
              ],
            }),
          ],
        });
      }
      let u = () => {
        let [e, t] = (0, d.useState)("pending");
        return (
          (0, d.useEffect)(() => {
            fetch("http://localhost:8787/health")
              .then((e) => e.json())
              .then((e) => t(e.status));
          }, []),
          (0, a.jsxs)("div", {
            children: [
              (0, a.jsx)("p", {
                className: "text-lg text-center",
                children: "Server Status",
              }),
              (0, a.jsx)("p", {
                className: "text-lg text-center text-green-500",
                children: e,
              }),
            ],
          })
        );
      };
      function m() {
        return (0, a.jsxs)("div", {
          className:
            "hero min-h-screen relative overflow-hidden bg-background text-foreground flex items-center justify-center pt-20",
          children: [
            (0, a.jsxs)("div", {
              className: "absolute inset-0 overflow-hidden z-0",
              children: [
                (0, a.jsx)(i.P.div, {
                  animate: { scale: [1, 1.2, 1], rotate: [0, 90, 0] },
                  transition: { duration: 20, repeat: 1 / 0, ease: "linear" },
                  className:
                    "absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[120px]",
                }),
                (0, a.jsx)(i.P.div, {
                  animate: { scale: [1.2, 1, 1.2], rotate: [90, 0, 90] },
                  transition: { duration: 25, repeat: 1 / 0, ease: "linear" },
                  className:
                    "absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-secondary/20 rounded-full blur-[120px]",
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "hero-content text-center relative z-10 px-4 w-full",
              children: (0, a.jsx)("div", {
                className: "max-w-6xl mx-auto flex flex-col items-center",
                children: (0, a.jsxs)(i.P.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, ease: "easeOut" },
                  className: "flex flex-col items-center",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6 text-xs font-medium border-white/5",
                      children: [
                        (0, a.jsxs)("span", {
                          className: "relative flex h-2 w-2",
                          children: [
                            (0, a.jsx)("span", {
                              className:
                                "animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75",
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "relative inline-flex rounded-full h-2 w-2 bg-primary",
                            }),
                          ],
                        }),
                        "Estimated Launch: Late 2026",
                      ],
                    }),
                    (0, a.jsxs)("h1", {
                      className:
                        "text-6xl md:text-8xl font-black tracking-tighter mb-4 font-outfit leading-[0.85]",
                      children: [
                        (0, a.jsx)("span", {
                          className: "text-gradient",
                          children: "Javascript",
                        }),
                        " ",
                        (0, a.jsx)("br", {}),
                        (0, a.jsx)("span", {
                          className: "text-primary block mt-1",
                          children: "Dojo",
                        }),
                      ],
                    }),
                    (0, a.jsx)("p", {
                      className:
                        "text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed font-light max-w-xl mx-auto",
                      children:
                        "Master the art of code through interactive katas. Sharpen your skills and level up your logic.",
                    }),
                    (0, a.jsx)(x, {}),
                    (0, a.jsx)(u, {}),
                    (0, a.jsxs)("div", {
                      className:
                        "mt-12 grid md:grid-cols-3 gap-4 text-left w-full",
                      children: [
                        (0, a.jsx)(s.Zp, {
                          className: "p-5 gap-3",
                          icon: (0, a.jsx)(n.A, { className: "h-5 w-5" }),
                          title: "Interview Ready",
                          description:
                            "Brush up on JavaScript skills for interviews with fast-paced code katas.",
                        }),
                        (0, a.jsx)(s.Zp, {
                          className: "p-5 gap-3",
                          icon: (0, a.jsx)(l.A, { className: "h-5 w-5" }),
                          title: "Spot AI Slop",
                          description:
                            "Learn JavaScript in-depth so you know exactly when AI has made a mistake.",
                        }),
                        (0, a.jsx)(s.Zp, {
                          className: "p-5 gap-3",
                          icon: (0, a.jsx)(o.A, { className: "h-5 w-5" }),
                          title: "Code Faster",
                          description:
                            "Build muscle memory to code faster without draining your mental energy.",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "mt-12 flex items-center justify-center gap-6 opacity-30",
                      children: [
                        (0, a.jsx)("span", {
                          className:
                            "text-xs font-medium uppercase tracking-widest",
                          children: "Next.js 15",
                        }),
                        (0, a.jsx)("span", {
                          className:
                            "text-xs font-medium uppercase tracking-widest",
                          children: "React 19",
                        }),
                        (0, a.jsx)("span", {
                          className:
                            "text-xs font-medium uppercase tracking-widest",
                          children: "Turborepo",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
    },
    4561: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => l });
      var a = r(9626),
        s = r(1943),
        i = r(1964),
        n = r(7915);
      function l() {
        return (0, a.jsx)(i.P.nav, {
          initial: { y: -100 },
          animate: { y: 0 },
          className: "fixed top-0 left-0 right-0 z-50 flex justify-center p-6",
          children: (0, a.jsxs)("div", {
            className:
              "w-full max-w-5xl glass rounded-2xl px-6 py-3 flex items-center justify-between",
            children: [
              (0, a.jsxs)("div", {
                className: "flex items-center gap-3",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "w-10 h-10 bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20",
                    children: (0, a.jsx)(n.A, {
                      className: "text-primary-foreground h-6 w-6",
                    }),
                  }),
                  (0, a.jsx)("span", {
                    className:
                      "font-outfit font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70",
                    children: "Javascript Dojo",
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className:
                  "hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground",
                children: [
                  (0, a.jsx)("a", {
                    href: "#",
                    className: "hover:text-foreground transition-colors",
                    children: "Curriculum",
                  }),
                  (0, a.jsx)("a", {
                    href: "#",
                    className: "hover:text-foreground transition-colors",
                    children: "Rankings",
                  }),
                  (0, a.jsx)("a", {
                    href: "#",
                    className: "hover:text-foreground transition-colors",
                    children: "Community",
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                children: [
                  (0, a.jsx)(s.$n, {
                    variant: "ghost",
                    className: "mr-2",
                    children: "Login",
                  }),
                  (0, a.jsx)(s.$n, { variant: "outline", children: "Sign Up" }),
                ],
              }),
            ],
          }),
        });
      }
      r(18);
    },
    1943: (e, t, r) => {
      "use strict";
      r.d(t, { $n: () => d, Zp: () => c });
      var a = r(9626),
        s = r(18),
        i = r(3092),
        n = r(5714),
        l = r(113);
      let o = (0, i.F)(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline:
                  "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                premium:
                  "bg-gradient-to-r from-primary to-primary/60 text-primary-foreground shadow-lg hover:shadow-primary/20 hover:scale-[1.02]",
              },
              size: {
                default: "h-10 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-12 rounded-xl px-8 text-base",
                icon: "h-9 w-9",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          },
        ),
        d = s.forwardRef((e, t) => {
          let { className: r, variant: s, size: i, asChild: d = !1, ...c } = e;
          return (0, a.jsx)("button", {
            className: (function () {
              for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
              return (0, l.QP)((0, n.$)(t));
            })(o({ variant: s, size: i, className: r })),
            ref: t,
            ...c,
          });
        });
      function c(e) {
        let { title: t, description: r, icon: s, className: i, ...o } = e;
        return (0, a.jsxs)("div", {
          className: (function () {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
            return (0, l.QP)((0, n.$)(t));
          })(
            "glass-card p-8 flex flex-col gap-4 text-left transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 group",
            i,
          ),
          ...o,
          children: [
            s &&
              (0, a.jsx)("div", {
                className:
                  "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500",
                children: s,
              }),
            (0, a.jsx)("h3", {
              className:
                "font-outfit font-bold text-2xl tracking-tight text-foreground",
              children: t,
            }),
            (0, a.jsx)("p", {
              className: "text-muted-foreground leading-relaxed",
              children: r,
            }),
          ],
        });
      }
      d.displayName = "Button";
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [532, 555, 379, 358], () => t(8152)), (_N_E = e.O()));
  },
]);
