(this["webpackJsonpproject-flashcards"] =
    this["webpackJsonpproject-flashcards"] || []).push([
    [0],
    {
        36: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n(1),
                c = n.n(r),
                a = n(19),
                s = n.n(a),
                i = n(5),
                o = n(0);
            var u = function () {
                return Object(o.jsx)("header", {
                    className: "jumbotron bg-dark",
                    children: Object(o.jsxs)("div", {
                        className: "container text-white",
                        children: [
                            Object(o.jsx)("h1", {
                                className: "display-4",
                                children: "Flashcard-o-matic",
                            }),
                            Object(o.jsx)("p", {
                                className: "lead",
                                children: "Discover The Flashcard Difference.",
                            }),
                        ],
                    }),
                });
            };
            var l = function () {
                    return Object(o.jsx)("div", {
                        className: "NotFound",
                        children: Object(o.jsx)("h1", {
                            children: "Not Found",
                        }),
                    });
                },
                b = n(2),
                d = n.n(b),
                j = n(3),
                p = n(6),
                h = n(21),
                m =
                    Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0,
                        FAST_REFRESH: !0,
                    }).API_BASE_URL || "http://localhost:5000",
                f = new Headers();
            function x(e) {
                e.cards;
                return Object(h.a)(e, ["cards"]);
            }
            function O(e, t) {
                return v.apply(this, arguments);
            }
            function v() {
                return (v = Object(j.a)(
                    d.a.mark(function e(t, n) {
                        var r;
                        return d.a.wrap(
                            function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (e.prev = 0),
                                                (e.next = 3),
                                                fetch(t, n)
                                            );
                                        case 3:
                                            if (
                                                !(
                                                    (r = e.sent).status < 200 ||
                                                    r.status > 399
                                                )
                                            ) {
                                                e.next = 6;
                                                break;
                                            }
                                            throw new Error(
                                                ""
                                                    .concat(r.status, " - ")
                                                    .concat(r.statusText)
                                            );
                                        case 6:
                                            return (e.next = 8), r.json();
                                        case 8:
                                            return e.abrupt("return", e.sent);
                                        case 11:
                                            if (
                                                ((e.prev = 11),
                                                (e.t0 = e.catch(0)),
                                                "AbortError" === e.t0.name)
                                            ) {
                                                e.next = 15;
                                                break;
                                            }
                                            throw e.t0;
                                        case 15:
                                        case "end":
                                            return e.stop();
                                    }
                            },
                            e,
                            null,
                            [[0, 11]]
                        );
                    })
                )).apply(this, arguments);
            }
            function k(e) {
                return y.apply(this, arguments);
            }
            function y() {
                return (y = Object(j.a)(
                    d.a.mark(function e(t) {
                        var n;
                        return d.a.wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (
                                            (n = "".concat(
                                                m,
                                                "/decks?_embed=cards"
                                            )),
                                            (e.next = 3),
                                            O(n, { signal: t })
                                        );
                                    case 3:
                                        return e.abrupt("return", e.sent);
                                    case 4:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }
            function w(e, t) {
                return N.apply(this, arguments);
            }
            function N() {
                return (N = Object(j.a)(
                    d.a.mark(function e(t, n) {
                        var r, c;
                        return d.a.wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (
                                            (r = "".concat(m, "/decks")),
                                            (c = {
                                                method: "POST",
                                                headers: f,
                                                body: JSON.stringify(x(t)),
                                                signal: n,
                                            }),
                                            (e.next = 4),
                                            O(r, c)
                                        );
                                    case 4:
                                        return e.abrupt("return", e.sent);
                                    case 5:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }
            function g(e, t) {
                return C.apply(this, arguments);
            }
            function C() {
                return (C = Object(j.a)(
                    d.a.mark(function e(t, n) {
                        var r;
                        return d.a.wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (
                                            (r = ""
                                                .concat(m, "/decks/")
                                                .concat(t, "?_embed=cards")),
                                            (e.next = 3),
                                            O(r, { signal: n })
                                        );
                                    case 3:
                                        return e.abrupt("return", e.sent);
                                    case 4:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }
            function S(e, t) {
                return E.apply(this, arguments);
            }
            function E() {
                return (E = Object(j.a)(
                    d.a.mark(function e(t, n) {
                        var r, c;
                        return d.a.wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (
                                            (r = ""
                                                .concat(m, "/decks/")
                                                .concat(t.id, "?_embed=cards")),
                                            (c = {
                                                method: "PUT",
                                                headers: f,
                                                body: JSON.stringify(x(t)),
                                                signal: n,
                                            }),
                                            (e.next = 4),
                                            O(r, c)
                                        );
                                    case 4:
                                        return e.abrupt("return", e.sent);
                                    case 5:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }
            function D(e, t) {
                return A.apply(this, arguments);
            }
            function A() {
                return (A = Object(j.a)(
                    d.a.mark(function e(t, n) {
                        var r, c;
                        return d.a.wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (
                                            (r = ""
                                                .concat(m, "/decks/")
                                                .concat(t)),
                                            (c = {
                                                method: "DELETE",
                                                signal: n,
                                            }),
                                            (e.next = 4),
                                            O(r, c)
                                        );
                                    case 4:
                                        return e.abrupt("return", e.sent);
                                    case 5:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }
            function I(e, t, n) {
                return T.apply(this, arguments);
            }
            function T() {
                return (T = Object(j.a)(
                    d.a.mark(function e(t, n, r) {
                        var c, a;
                        return d.a.wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (
                                            (c = "".concat(m, "/cards")),
                                            (n.deckId = Number(t)),
                                            (a = {
                                                method: "POST",
                                                headers: f,
                                                body: JSON.stringify(n),
                                                signal: r,
                                            }),
                                            (e.next = 5),
                                            O(c, a)
                                        );
                                    case 5:
                                        return e.abrupt("return", e.sent);
                                    case 6:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }
            function _(e, t) {
                return F.apply(this, arguments);
            }
            function F() {
                return (F = Object(j.a)(
                    d.a.mark(function e(t, n) {
                        var r;
                        return d.a.wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (
                                            (r = ""
                                                .concat(m, "/cards/")
                                                .concat(t)),
                                            (e.next = 3),
                                            O(r, { signal: n })
                                        );
                                    case 3:
                                        return e.abrupt("return", e.sent);
                                    case 4:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }
            function H(e, t) {
                return P.apply(this, arguments);
            }
            function P() {
                return (P = Object(j.a)(
                    d.a.mark(function e(t, n) {
                        var r, c;
                        return d.a.wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (
                                            (r = ""
                                                .concat(m, "/cards/")
                                                .concat(t.id)),
                                            (c = {
                                                method: "PUT",
                                                headers: f,
                                                body: JSON.stringify(t),
                                            }),
                                            (e.next = 4),
                                            O(r, c)
                                        );
                                    case 4:
                                        return e.abrupt("return", e.sent);
                                    case 5:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }
            function J(e, t) {
                return R.apply(this, arguments);
            }
            function R() {
                return (R = Object(j.a)(
                    d.a.mark(function e(t, n) {
                        var r, c;
                        return d.a.wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (
                                            (r = ""
                                                .concat(m, "/cards/")
                                                .concat(t)),
                                            (c = {
                                                method: "DELETE",
                                                signal: n,
                                            }),
                                            (e.next = 4),
                                            O(r, c)
                                        );
                                    case 4:
                                        return e.abrupt("return", e.sent);
                                    case 5:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }
            f.append("Content-Type", "application/json");
            var B = n(4);
            var L = function () {
                    var e = Object(i.f)(),
                        t = Object(r.useState)([]),
                        n = Object(p.a)(t, 2),
                        c = n[0],
                        a = n[1];
                    function s() {
                        return (s = Object(j.a)(
                            d.a.mark(function t(n) {
                                return d.a.wrap(function (t) {
                                    for (;;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                if (
                                                    !window.confirm(
                                                        "Delete this deck? You will not be able to recover it"
                                                    )
                                                ) {
                                                    t.next = 5;
                                                    break;
                                                }
                                                return (
                                                    e.go(0),
                                                    (t.next = 4),
                                                    D(n.id)
                                                );
                                            case 4:
                                                return t.abrupt(
                                                    "return",
                                                    t.sent
                                                );
                                            case 5:
                                            case "end":
                                                return t.stop();
                                        }
                                }, t);
                            })
                        )).apply(this, arguments);
                    }
                    return (
                        Object(r.useEffect)(function () {
                            function e() {
                                return (e = Object(j.a)(
                                    d.a.mark(function e() {
                                        var t, n;
                                        return d.a.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (t =
                                                                    new AbortController()),
                                                                (e.prev = 1),
                                                                (e.next = 4),
                                                                k(t.signal)
                                                            );
                                                        case 4:
                                                            (n = e.sent),
                                                                a(n),
                                                                (e.next = 11);
                                                            break;
                                                        case 8:
                                                            (e.prev = 8),
                                                                (e.t0 =
                                                                    e.catch(1)),
                                                                console.error(
                                                                    "Something went wrong",
                                                                    e.t0
                                                                );
                                                        case 11:
                                                            return e.abrupt(
                                                                "return",
                                                                function () {
                                                                    t.abort();
                                                                }
                                                            );
                                                        case 12:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            null,
                                            [[1, 8]]
                                        );
                                    })
                                )).apply(this, arguments);
                            }
                            !(function () {
                                e.apply(this, arguments);
                            })();
                        }, []),
                        Object(o.jsxs)("div", {
                            className: "container",
                            children: [
                                Object(o.jsx)(B.b, {
                                    className: "btn btn-secondary mb-2",
                                    to: "/decks/new",
                                    children: "Create Deck",
                                }),
                                Object(o.jsx)("div", {
                                    className: "card-deck",
                                    children: c.map(function (e) {
                                        return Object(o.jsx)(
                                            "div",
                                            {
                                                className: "card",
                                                style: { width: "30rem" },
                                                children: Object(o.jsxs)(
                                                    "div",
                                                    {
                                                        className: "card-body",
                                                        children: [
                                                            Object(o.jsx)(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "card-title",
                                                                    children:
                                                                        "".concat(
                                                                            e.name
                                                                        ),
                                                                }
                                                            ),
                                                            Object(o.jsx)(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "card-subtitle mb-2 text-muted",
                                                                    children:
                                                                        "".concat(
                                                                            e
                                                                                .cards
                                                                                .length,
                                                                            " cards"
                                                                        ),
                                                                }
                                                            ),
                                                            Object(o.jsx)(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "card-text",
                                                                    children:
                                                                        "".concat(
                                                                            e.description
                                                                        ),
                                                                }
                                                            ),
                                                            Object(o.jsx)(B.b, {
                                                                className:
                                                                    "btn btn-secondary mx-1",
                                                                to: "/decks/".concat(
                                                                    e.id
                                                                ),
                                                                children:
                                                                    "View",
                                                            }),
                                                            Object(o.jsx)(B.b, {
                                                                className:
                                                                    "btn btn-primary mx-1",
                                                                to: "/decks/".concat(
                                                                    e.id,
                                                                    "/study"
                                                                ),
                                                                children:
                                                                    "Study",
                                                            }),
                                                            Object(o.jsx)(
                                                                "button",
                                                                {
                                                                    type: "button",
                                                                    className:
                                                                        "btn btn-danger mx-1",
                                                                    onClick:
                                                                        function () {
                                                                            return (function (
                                                                                e
                                                                            ) {
                                                                                return s.apply(
                                                                                    this,
                                                                                    arguments
                                                                                );
                                                                            })(
                                                                                e
                                                                            );
                                                                        },
                                                                    children:
                                                                        "Delete",
                                                                }
                                                            ),
                                                        ],
                                                    }
                                                ),
                                            },
                                            e.id
                                        );
                                    }),
                                }),
                            ],
                        })
                    );
                },
                U = n(12),
                Y = n(8);
            var K = function () {
                var e = Object(i.f)(),
                    t = Object(r.useState)({ name: "", description: "" }),
                    n = Object(p.a)(t, 2),
                    c = n[0],
                    a = n[1];
                function s(e) {
                    var t = e.target;
                    a(
                        Object(Y.a)(
                            Object(Y.a)({}, c),
                            {},
                            Object(U.a)({}, t.name, t.value)
                        )
                    );
                }
                function u() {
                    return (u = Object(j.a)(
                        d.a.mark(function t(n) {
                            var r, a;
                            return d.a.wrap(function (t) {
                                for (;;)
                                    switch ((t.prev = t.next)) {
                                        case 0:
                                            return (
                                                n.preventDefault(),
                                                (r = new AbortController()),
                                                (t.next = 4),
                                                w(Object(Y.a)({}, c), r.signal)
                                            );
                                        case 4:
                                            return (
                                                (a = t.sent),
                                                e.push("/"),
                                                t.abrupt("return", a)
                                            );
                                        case 7:
                                        case "end":
                                            return t.stop();
                                    }
                            }, t);
                        })
                    )).apply(this, arguments);
                }
                function l() {
                    return (l = Object(j.a)(
                        d.a.mark(function t() {
                            return d.a.wrap(function (t) {
                                for (;;)
                                    switch ((t.prev = t.next)) {
                                        case 0:
                                            e.push("/");
                                        case 1:
                                        case "end":
                                            return t.stop();
                                    }
                            }, t);
                        })
                    )).apply(this, arguments);
                }
                return Object(o.jsxs)("div", {
                    children: [
                        Object(o.jsxs)("ol", {
                            className: "breadcrumb",
                            children: [
                                Object(o.jsx)("li", {
                                    className: "breadcrumb-item",
                                    children: Object(o.jsx)(B.b, {
                                        to: "/",
                                        children: "Home",
                                    }),
                                }),
                                Object(o.jsx)("li", {
                                    className: "breadcrumb-item active",
                                    children: "Create Deck",
                                }),
                            ],
                        }),
                        Object(o.jsxs)("form", {
                            onSubmit: function (e) {
                                return (function (e) {
                                    return u.apply(this, arguments);
                                })(e);
                            },
                            children: [
                                Object(o.jsx)("h1", {
                                    children: "Create Deck",
                                }),
                                Object(o.jsxs)("div", {
                                    className: "form-group",
                                    children: [
                                        Object(o.jsx)("label", {
                                            children: "Name",
                                        }),
                                        Object(o.jsx)("input", {
                                            id: "name",
                                            name: "name",
                                            className: "form-control",
                                            onChange: s,
                                            type: "text",
                                            value: c.name,
                                        }),
                                    ],
                                }),
                                Object(o.jsxs)("div", {
                                    className: "form-group",
                                    children: [
                                        Object(o.jsx)("label", {
                                            children: "Description",
                                        }),
                                        Object(o.jsx)("textarea", {
                                            id: "description",
                                            name: "description",
                                            className: "form-control",
                                            onChange: s,
                                            type: "text",
                                            value: c.description,
                                        }),
                                    ],
                                }),
                                Object(o.jsx)("button", {
                                    className: "btn btn-secondary mx-1",
                                    onClick: function () {
                                        return (function () {
                                            return l.apply(this, arguments);
                                        })();
                                    },
                                    children: "Cancel",
                                }),
                                Object(o.jsx)("button", {
                                    className: "btn btn-primary mx-1",
                                    type: "submit",
                                    children: "Submit",
                                }),
                            ],
                        }),
                    ],
                });
            };
            var W = function () {
                var e = Object(i.f)(),
                    t = Object(i.g)().deckId,
                    n = Object(r.useState)({}),
                    c = Object(p.a)(n, 2),
                    a = c[0],
                    s = c[1],
                    u = Object(r.useState)([]),
                    l = Object(p.a)(u, 2),
                    b = l[0],
                    h = l[1];
                function m() {
                    return (m = Object(j.a)(
                        d.a.mark(function t(n) {
                            var r;
                            return d.a.wrap(
                                function (t) {
                                    for (;;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                if (
                                                    !window.confirm(
                                                        "Delete this deck? You will not be able to recover it"
                                                    )
                                                ) {
                                                    t.next = 13;
                                                    break;
                                                }
                                                return (
                                                    (r = new AbortController()),
                                                    (t.prev = 2),
                                                    e.push("/"),
                                                    (t.next = 6),
                                                    D(n.id, r.signal)
                                                );
                                            case 6:
                                                return t.abrupt(
                                                    "return",
                                                    t.sent
                                                );
                                            case 9:
                                                (t.prev = 9),
                                                    (t.t0 = t.catch(2)),
                                                    console.error(
                                                        "Something went wrong",
                                                        t.t0
                                                    );
                                            case 12:
                                                return t.abrupt(
                                                    "return",
                                                    function () {
                                                        r.abort();
                                                    }
                                                );
                                            case 13:
                                            case "end":
                                                return t.stop();
                                        }
                                },
                                t,
                                null,
                                [[2, 9]]
                            );
                        })
                    )).apply(this, arguments);
                }
                function f() {
                    return (f = Object(j.a)(
                        d.a.mark(function t(n) {
                            var r;
                            return d.a.wrap(
                                function (t) {
                                    for (;;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                if (
                                                    !window.confirm(
                                                        "Delete this card? You will not be able to recover it"
                                                    )
                                                ) {
                                                    t.next = 13;
                                                    break;
                                                }
                                                return (
                                                    (r = new AbortController()),
                                                    (t.prev = 2),
                                                    e.go(0),
                                                    (t.next = 6),
                                                    J(n.id, r.signal)
                                                );
                                            case 6:
                                                return t.abrupt(
                                                    "return",
                                                    t.sent
                                                );
                                            case 9:
                                                (t.prev = 9),
                                                    (t.t0 = t.catch(2)),
                                                    console.error(
                                                        "Something went wrong",
                                                        t.t0
                                                    );
                                            case 12:
                                                return t.abrupt(
                                                    "return",
                                                    function () {
                                                        r.abort();
                                                    }
                                                );
                                            case 13:
                                            case "end":
                                                return t.stop();
                                        }
                                },
                                t,
                                null,
                                [[2, 9]]
                            );
                        })
                    )).apply(this, arguments);
                }
                function x() {
                    return (x = Object(j.a)(
                        d.a.mark(function n() {
                            return d.a.wrap(function (n) {
                                for (;;)
                                    switch ((n.prev = n.next)) {
                                        case 0:
                                            e.push(
                                                "/decks/".concat(t, "/edit")
                                            );
                                        case 1:
                                        case "end":
                                            return n.stop();
                                    }
                            }, n);
                        })
                    )).apply(this, arguments);
                }
                function O() {
                    return (O = Object(j.a)(
                        d.a.mark(function n() {
                            return d.a.wrap(function (n) {
                                for (;;)
                                    switch ((n.prev = n.next)) {
                                        case 0:
                                            e.push(
                                                "/decks/".concat(t, "/study")
                                            );
                                        case 1:
                                        case "end":
                                            return n.stop();
                                    }
                            }, n);
                        })
                    )).apply(this, arguments);
                }
                function v() {
                    return (v = Object(j.a)(
                        d.a.mark(function n() {
                            return d.a.wrap(function (n) {
                                for (;;)
                                    switch ((n.prev = n.next)) {
                                        case 0:
                                            e.push(
                                                "/decks/".concat(
                                                    t,
                                                    "/cards/new"
                                                )
                                            );
                                        case 1:
                                        case "end":
                                            return n.stop();
                                    }
                            }, n);
                        })
                    )).apply(this, arguments);
                }
                function k() {
                    return (k = Object(j.a)(
                        d.a.mark(function n(r) {
                            return d.a.wrap(function (n) {
                                for (;;)
                                    switch ((n.prev = n.next)) {
                                        case 0:
                                            e.push(
                                                "/decks/"
                                                    .concat(t, "/cards/")
                                                    .concat(r.id, "/edit")
                                            );
                                        case 1:
                                        case "end":
                                            return n.stop();
                                    }
                            }, n);
                        })
                    )).apply(this, arguments);
                }
                return (
                    Object(r.useEffect)(function () {
                        function e() {
                            return (e = Object(j.a)(
                                d.a.mark(function e() {
                                    var n, r;
                                    return d.a.wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (n =
                                                                new AbortController()),
                                                            (e.prev = 1),
                                                            (e.next = 4),
                                                            g(t, n.signal)
                                                        );
                                                    case 4:
                                                        (r = e.sent),
                                                            s(r),
                                                            h(r.cards),
                                                            (e.next = 12);
                                                        break;
                                                    case 9:
                                                        (e.prev = 9),
                                                            (e.t0 = e.catch(1)),
                                                            console.error(
                                                                "Something went wrong",
                                                                e.t0
                                                            );
                                                    case 12:
                                                        return e.abrupt(
                                                            "return",
                                                            function () {
                                                                n.abort();
                                                            }
                                                        );
                                                    case 13:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        null,
                                        [[1, 9]]
                                    );
                                })
                            )).apply(this, arguments);
                        }
                        !(function () {
                            e.apply(this, arguments);
                        })();
                    }, []),
                    b.length > 0
                        ? Object(o.jsxs)("div", {
                              children: [
                                  Object(o.jsxs)("ol", {
                                      className: "breadcrumb",
                                      children: [
                                          Object(o.jsx)("li", {
                                              className: "breadcrumb-item",
                                              children: Object(o.jsx)(B.b, {
                                                  to: "/",
                                                  children: "Home",
                                              }),
                                          }),
                                          Object(o.jsx)("li", {
                                              className:
                                                  "breadcrumb-item active",
                                              children: a.name,
                                          }),
                                      ],
                                  }),
                                  Object(o.jsx)("div", {
                                      className: "card",
                                      children: Object(o.jsxs)("div", {
                                          className: "card-body",
                                          children: [
                                              Object(o.jsx)("h2", {
                                                  className: "card-title",
                                                  children: a.name,
                                              }),
                                              Object(o.jsx)("p", {
                                                  children: a.description,
                                              }),
                                              Object(o.jsx)("button", {
                                                  onClick: function () {
                                                      return (function () {
                                                          return x.apply(
                                                              this,
                                                              arguments
                                                          );
                                                      })();
                                                  },
                                                  className:
                                                      "btn btn-secondary mx-1",
                                                  children: "Edit",
                                              }),
                                              Object(o.jsx)("button", {
                                                  onClick: function () {
                                                      return (function () {
                                                          return O.apply(
                                                              this,
                                                              arguments
                                                          );
                                                      })();
                                                  },
                                                  className:
                                                      "btn btn-primary mx-1",
                                                  children: "Study",
                                              }),
                                              Object(o.jsx)("button", {
                                                  onClick: function () {
                                                      return (function () {
                                                          return v.apply(
                                                              this,
                                                              arguments
                                                          );
                                                      })();
                                                  },
                                                  className:
                                                      "btn btn-primary mx-1",
                                                  children: "Add Cards",
                                              }),
                                              Object(o.jsx)("button", {
                                                  onClick: function () {
                                                      return (function (e) {
                                                          return m.apply(
                                                              this,
                                                              arguments
                                                          );
                                                      })(a);
                                                  },
                                                  className:
                                                      "btn btn-danger mx-1",
                                                  children: "Delete",
                                              }),
                                          ],
                                      }),
                                  }),
                                  Object(o.jsx)("h1", { children: "Cards" }),
                                  b.map(function (e) {
                                      return Object(o.jsx)(
                                          "div",
                                          {
                                              className: "card-deck",
                                              children: Object(o.jsx)("div", {
                                                  className: "card",
                                                  children: Object(o.jsxs)(
                                                      "div",
                                                      {
                                                          className:
                                                              "card-body",
                                                          children: [
                                                              Object(o.jsxs)(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "row",
                                                                      children:
                                                                          [
                                                                              Object(
                                                                                  o.jsx
                                                                              )(
                                                                                  "div",
                                                                                  {
                                                                                      className:
                                                                                          "col",
                                                                                      children:
                                                                                          e.front,
                                                                                  }
                                                                              ),
                                                                              Object(
                                                                                  o.jsx
                                                                              )(
                                                                                  "div",
                                                                                  {
                                                                                      className:
                                                                                          "col",
                                                                                      children:
                                                                                          e.back,
                                                                                  }
                                                                              ),
                                                                          ],
                                                                  }
                                                              ),
                                                              Object(o.jsxs)(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "container row",
                                                                      children:
                                                                          [
                                                                              Object(
                                                                                  o.jsx
                                                                              )(
                                                                                  "button",
                                                                                  {
                                                                                      onClick:
                                                                                          function () {
                                                                                              return (function (
                                                                                                  e
                                                                                              ) {
                                                                                                  return k.apply(
                                                                                                      this,
                                                                                                      arguments
                                                                                                  );
                                                                                              })(
                                                                                                  e
                                                                                              );
                                                                                          },
                                                                                      className:
                                                                                          "btn btn-secondary mx-1",
                                                                                      children:
                                                                                          "Edit",
                                                                                  }
                                                                              ),
                                                                              Object(
                                                                                  o.jsx
                                                                              )(
                                                                                  "button",
                                                                                  {
                                                                                      onClick:
                                                                                          function () {
                                                                                              return (function (
                                                                                                  e
                                                                                              ) {
                                                                                                  return f.apply(
                                                                                                      this,
                                                                                                      arguments
                                                                                                  );
                                                                                              })(
                                                                                                  e
                                                                                              );
                                                                                          },
                                                                                      className:
                                                                                          "btn btn-danger mx-1",
                                                                                      children:
                                                                                          "Delete",
                                                                                  }
                                                                              ),
                                                                          ],
                                                                  }
                                                              ),
                                                          ],
                                                      }
                                                  ),
                                              }),
                                          },
                                          e.id
                                      );
                                  }),
                              ],
                          })
                        : null
                );
            };
            var V = function () {
                var e = Object(i.g)().deckId,
                    t = Object(r.useState)({}),
                    n = Object(p.a)(t, 2),
                    c = n[0],
                    a = n[1],
                    s = Object(r.useState)([]),
                    u = Object(p.a)(s, 2),
                    l = u[0],
                    b = u[1],
                    h = Object(r.useState)(1),
                    m = Object(p.a)(h, 2),
                    f = m[0],
                    x = m[1],
                    O = Object(r.useState)(!0),
                    v = Object(p.a)(O, 2),
                    k = v[0],
                    y = v[1],
                    w = Object(i.f)();
                function N() {
                    y(!k);
                }
                function C(e, t) {
                    return k
                        ? null
                        : Object(o.jsx)("button", {
                              onClick: function () {
                                  return (function (e, t) {
                                      console.log(e),
                                          e < t
                                              ? (x(f + 1), y(!0))
                                              : window.confirm(
                                                    "Restart cards? Click 'cancel' to return to the home page"
                                                )
                                              ? (x(1), y(!0))
                                              : w.push("/");
                                  })(t + 1, e.length);
                              },
                              className: "btn btn-primary mx-1",
                              children: "Next",
                          });
                }
                function S() {
                    return Object(o.jsxs)("div", {
                        children: [
                            Object(o.jsx)("h2", {
                                children: "Not enough cards.",
                            }),
                            Object(o.jsxs)("p", {
                                children: [
                                    "You need at least 3 cards to study. There are ",
                                    l.length,
                                    " cards in this deck.",
                                ],
                            }),
                            Object(o.jsx)(B.b, {
                                to: "/decks/".concat(c.id, "/cards/new"),
                                className: "btn btn-primary mx-1",
                                children: "Add Cards",
                            }),
                        ],
                    });
                }
                return (
                    Object(r.useEffect)(function () {
                        function t() {
                            return (t = Object(j.a)(
                                d.a.mark(function t() {
                                    var n, r;
                                    return d.a.wrap(function (t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (
                                                        (n =
                                                            new AbortController()),
                                                        (t.next = 3),
                                                        g(e, n.signal)
                                                    );
                                                case 3:
                                                    return (
                                                        (r = t.sent),
                                                        a(r),
                                                        b(r.cards),
                                                        t.abrupt(
                                                            "return",
                                                            function () {
                                                                n.abort();
                                                            }
                                                        )
                                                    );
                                                case 7:
                                                case "end":
                                                    return t.stop();
                                            }
                                    }, t);
                                })
                            )).apply(this, arguments);
                        }
                        !(function () {
                            t.apply(this, arguments);
                        })();
                    }, []),
                    Object(o.jsxs)("div", {
                        children: [
                            Object(o.jsxs)("ol", {
                                className: "breadcrumb",
                                children: [
                                    Object(o.jsx)("li", {
                                        className: "breadcrumb-item",
                                        children: Object(o.jsx)(B.b, {
                                            to: "/",
                                            children: "Home",
                                        }),
                                    }),
                                    Object(o.jsx)("li", {
                                        className: "breadcrumb-item",
                                        children: Object(o.jsx)(B.b, {
                                            to: "/decks/".concat(e),
                                            children: c.name,
                                        }),
                                    }),
                                    Object(o.jsx)("li", {
                                        className: "breadcrumb-item active",
                                        children: "Study",
                                    }),
                                ],
                            }),
                            Object(o.jsxs)("div", {
                                children: [
                                    Object(o.jsx)("h2", {
                                        children: "".concat(c.name, ": Study"),
                                    }),
                                    Object(o.jsx)("div", {
                                        children:
                                            0 === l.length
                                                ? S()
                                                : l.length > 2
                                                ? Object(o.jsx)("div", {
                                                      className: "card",
                                                      children: l.map(function (
                                                          e,
                                                          t
                                                      ) {
                                                          if (t === f - 1)
                                                              return Object(
                                                                  o.jsxs
                                                              )(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "card-body",
                                                                      children:
                                                                          [
                                                                              Object(
                                                                                  o.jsx
                                                                              )(
                                                                                  "div",
                                                                                  {
                                                                                      className:
                                                                                          "card-title",
                                                                                      children:
                                                                                          "Card "
                                                                                              .concat(
                                                                                                  t +
                                                                                                      1,
                                                                                                  " of "
                                                                                              )
                                                                                              .concat(
                                                                                                  l.length
                                                                                              ),
                                                                                  }
                                                                              ),
                                                                              Object(
                                                                                  o.jsx
                                                                              )(
                                                                                  "div",
                                                                                  {
                                                                                      className:
                                                                                          "card-text",
                                                                                      children:
                                                                                          k
                                                                                              ? e.front
                                                                                              : e.back,
                                                                                  }
                                                                              ),
                                                                              Object(
                                                                                  o.jsx
                                                                              )(
                                                                                  "button",
                                                                                  {
                                                                                      onClick:
                                                                                          N,
                                                                                      className:
                                                                                          "btn btn-secondary mx-1",
                                                                                      children:
                                                                                          "Flip",
                                                                                  }
                                                                              ),
                                                                              C(
                                                                                  l,
                                                                                  t
                                                                              ),
                                                                          ],
                                                                  },
                                                                  e.id
                                                              );
                                                      }),
                                                  })
                                                : S(),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            };
            var M = function () {
                var e = Object(i.g)().deckId,
                    t = Object(i.f)(),
                    n = Object(r.useState)({
                        id: "",
                        name: "",
                        description: "",
                    }),
                    c = Object(p.a)(n, 2),
                    a = c[0],
                    s = c[1];
                function u(e) {
                    var t = e.target;
                    s(
                        Object(Y.a)(
                            Object(Y.a)({}, a),
                            {},
                            Object(U.a)({}, t.name, t.value)
                        )
                    );
                }
                function l() {
                    return (l = Object(j.a)(
                        d.a.mark(function n(r) {
                            var c, s;
                            return d.a.wrap(function (n) {
                                for (;;)
                                    switch ((n.prev = n.next)) {
                                        case 0:
                                            return (
                                                r.preventDefault(),
                                                (c = new AbortController()),
                                                (n.next = 4),
                                                S(Object(Y.a)({}, a), c.signal)
                                            );
                                        case 4:
                                            return (
                                                (s = n.sent),
                                                t.push("/decks/".concat(e)),
                                                n.abrupt("return", s)
                                            );
                                        case 7:
                                        case "end":
                                            return n.stop();
                                    }
                            }, n);
                        })
                    )).apply(this, arguments);
                }
                function b() {
                    return (b = Object(j.a)(
                        d.a.mark(function n() {
                            return d.a.wrap(function (n) {
                                for (;;)
                                    switch ((n.prev = n.next)) {
                                        case 0:
                                            t.push("/decks/".concat(e));
                                        case 1:
                                        case "end":
                                            return n.stop();
                                    }
                            }, n);
                        })
                    )).apply(this, arguments);
                }
                return (
                    Object(r.useEffect)(function () {
                        function t() {
                            return (t = Object(j.a)(
                                d.a.mark(function t() {
                                    var n, r;
                                    return d.a.wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (n =
                                                                new AbortController()),
                                                            (t.prev = 1),
                                                            (t.next = 4),
                                                            g(e, n.signal)
                                                        );
                                                    case 4:
                                                        (r = t.sent),
                                                            s(r),
                                                            (t.next = 11);
                                                        break;
                                                    case 8:
                                                        (t.prev = 8),
                                                            (t.t0 = t.catch(1)),
                                                            console.error(
                                                                "Something went wrong",
                                                                t.t0
                                                            );
                                                    case 11:
                                                        return t.abrupt(
                                                            "return",
                                                            function () {
                                                                n.abort();
                                                            }
                                                        );
                                                    case 12:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        null,
                                        [[1, 8]]
                                    );
                                })
                            )).apply(this, arguments);
                        }
                        !(function () {
                            t.apply(this, arguments);
                        })();
                    }, []),
                    Object(o.jsxs)("div", {
                        children: [
                            Object(o.jsxs)("ol", {
                                className: "breadcrumb",
                                children: [
                                    Object(o.jsx)("li", {
                                        className: "breadcrumb-item",
                                        children: Object(o.jsx)(B.b, {
                                            to: "/",
                                            children: "Home",
                                        }),
                                    }),
                                    Object(o.jsx)("li", {
                                        className: "breadcrumb-item",
                                        children: Object(o.jsx)(B.b, {
                                            to: "/decks/".concat(e),
                                            children: a.name,
                                        }),
                                    }),
                                    Object(o.jsx)("li", {
                                        className: "breadcrumb-item active",
                                        children: "Edit Deck",
                                    }),
                                ],
                            }),
                            Object(o.jsxs)("form", {
                                onSubmit: function (e) {
                                    return l.apply(this, arguments);
                                },
                                children: [
                                    Object(o.jsx)("h1", {
                                        children: "Edit Deck",
                                    }),
                                    Object(o.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            Object(o.jsx)("label", {
                                                children: "Name",
                                            }),
                                            Object(o.jsx)("input", {
                                                id: "name",
                                                name: "name",
                                                className: "form-control",
                                                onChange: u,
                                                type: "text",
                                                value: a.name,
                                            }),
                                        ],
                                    }),
                                    Object(o.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            Object(o.jsx)("label", {
                                                children: "Description",
                                            }),
                                            Object(o.jsx)("textarea", {
                                                id: "description",
                                                name: "description",
                                                className: "form-control",
                                                onChange: u,
                                                type: "text",
                                                value: a.description,
                                            }),
                                        ],
                                    }),
                                    Object(o.jsx)("button", {
                                        className: "btn btn-secondary mx-1",
                                        onClick: function () {
                                            return (function () {
                                                return b.apply(this, arguments);
                                            })();
                                        },
                                        children: "Cancel",
                                    }),
                                    Object(o.jsx)("button", {
                                        className: "btn btn-primary mx-1",
                                        type: "submit",
                                        children: "Submit",
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            };
            var q = function () {
                var e = Object(i.g)().deckId,
                    t = Object(i.f)(),
                    n = { front: "", back: "" },
                    c = Object(r.useState)(n),
                    a = Object(p.a)(c, 2),
                    s = a[0],
                    u = a[1],
                    l = Object(r.useState)({}),
                    b = Object(p.a)(l, 2),
                    h = b[0],
                    m = b[1];
                function f(e) {
                    var t = e.target;
                    u(
                        Object(Y.a)(
                            Object(Y.a)({}, s),
                            {},
                            Object(U.a)({}, t.name, t.value)
                        )
                    );
                }
                function x() {
                    return (x = Object(j.a)(
                        d.a.mark(function r(c) {
                            var a, i;
                            return d.a.wrap(function (r) {
                                for (;;)
                                    switch ((r.prev = r.next)) {
                                        case 0:
                                            return (
                                                c.preventDefault(),
                                                (a = new AbortController()),
                                                (r.next = 4),
                                                I(
                                                    e,
                                                    Object(Y.a)({}, s),
                                                    a.signal
                                                )
                                            );
                                        case 4:
                                            return (
                                                (i = r.sent),
                                                t.go(0),
                                                u(n),
                                                r.abrupt("return", i)
                                            );
                                        case 8:
                                        case "end":
                                            return r.stop();
                                    }
                            }, r);
                        })
                    )).apply(this, arguments);
                }
                function O() {
                    return (O = Object(j.a)(
                        d.a.mark(function n() {
                            return d.a.wrap(function (n) {
                                for (;;)
                                    switch ((n.prev = n.next)) {
                                        case 0:
                                            t.push("/decks/".concat(e));
                                        case 1:
                                        case "end":
                                            return n.stop();
                                    }
                            }, n);
                        })
                    )).apply(this, arguments);
                }
                return (
                    Object(r.useEffect)(function () {
                        function t() {
                            return (t = Object(j.a)(
                                d.a.mark(function t() {
                                    var n, r;
                                    return d.a.wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (n =
                                                                new AbortController()),
                                                            (t.prev = 1),
                                                            (t.next = 4),
                                                            g(e, n.signal)
                                                        );
                                                    case 4:
                                                        (r = t.sent),
                                                            m(r),
                                                            (t.next = 11);
                                                        break;
                                                    case 8:
                                                        (t.prev = 8),
                                                            (t.t0 = t.catch(1)),
                                                            console.error(
                                                                "Something went wrong",
                                                                t.t0
                                                            );
                                                    case 11:
                                                        return t.abrupt(
                                                            "return",
                                                            function () {
                                                                n.abort();
                                                            }
                                                        );
                                                    case 12:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        null,
                                        [[1, 8]]
                                    );
                                })
                            )).apply(this, arguments);
                        }
                        !(function () {
                            t.apply(this, arguments);
                        })();
                    }, []),
                    Object(o.jsxs)("div", {
                        children: [
                            Object(o.jsxs)("ol", {
                                className: "breadcrumb",
                                children: [
                                    Object(o.jsx)("li", {
                                        className: "breadcrumb-item",
                                        children: Object(o.jsx)(B.b, {
                                            to: "/",
                                            children: "Home",
                                        }),
                                    }),
                                    Object(o.jsx)("li", {
                                        className: "breadcrumb-item",
                                        children: Object(o.jsx)(B.b, {
                                            to: "/decks/".concat(e),
                                            children: h.name,
                                        }),
                                    }),
                                    Object(o.jsx)("li", {
                                        className: "breadcrumb-item active",
                                        children: "Add Card",
                                    }),
                                ],
                            }),
                            Object(o.jsxs)("form", {
                                onSubmit: function (e) {
                                    return x.apply(this, arguments);
                                },
                                children: [
                                    Object(o.jsxs)("h2", {
                                        children: [h.name, ": Add Card"],
                                    }),
                                    Object(o.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            Object(o.jsx)("label", {
                                                children: "Front",
                                            }),
                                            Object(o.jsx)("textarea", {
                                                id: "front",
                                                name: "front",
                                                className: "form-control",
                                                onChange: f,
                                                type: "text",
                                                value: s.front,
                                            }),
                                        ],
                                    }),
                                    Object(o.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            Object(o.jsx)("label", {
                                                children: "Back",
                                            }),
                                            Object(o.jsx)("textarea", {
                                                id: "back",
                                                name: "back",
                                                className: "form-control",
                                                onChange: f,
                                                type: "text",
                                                value: s.back,
                                            }),
                                        ],
                                    }),
                                    Object(o.jsx)("button", {
                                        className: "btn btn-secondary mx-1",
                                        onClick: function () {
                                            return (function () {
                                                return O.apply(this, arguments);
                                            })();
                                        },
                                        children: "Done",
                                    }),
                                    Object(o.jsx)("button", {
                                        className: "btn btn-primary mx-1",
                                        type: "submit",
                                        children: "Save",
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            };
            var z = function () {
                var e = Object(i.g)(),
                    t = e.deckId,
                    n = e.cardId,
                    c = Object(i.f)(),
                    a = Object(r.useState)({
                        id: "",
                        name: "",
                        description: "",
                    }),
                    s = Object(p.a)(a, 2),
                    u = s[0],
                    l = s[1],
                    b = Object(r.useState)({
                        id: "",
                        front: "",
                        back: "",
                        deckId: "",
                    }),
                    h = Object(p.a)(b, 2),
                    m = h[0],
                    f = h[1];
                function x(e) {
                    var t = e.target;
                    l(
                        Object(Y.a)(
                            Object(Y.a)({}, u),
                            {},
                            Object(U.a)({}, t.name, t.value)
                        )
                    );
                }
                function O() {
                    return (O = Object(j.a)(
                        d.a.mark(function e(n) {
                            var r, a;
                            return d.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                n.preventDefault(),
                                                (r = new AbortController()),
                                                (e.next = 4),
                                                H(Object(Y.a)({}, u), r.signal)
                                            );
                                        case 4:
                                            return (
                                                (a = e.sent),
                                                c.push("/decks/".concat(t)),
                                                e.abrupt("return", a)
                                            );
                                        case 7:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )).apply(this, arguments);
                }
                function v() {
                    return (v = Object(j.a)(
                        d.a.mark(function e() {
                            return d.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            c.push("/decks/".concat(t));
                                        case 1:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )).apply(this, arguments);
                }
                return (
                    Object(r.useEffect)(function () {
                        function e() {
                            return (e = Object(j.a)(
                                d.a.mark(function e() {
                                    var r, c, a;
                                    return d.a.wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (r =
                                                                new AbortController()),
                                                            (e.prev = 1),
                                                            (e.next = 4),
                                                            _(n, r.signal)
                                                        );
                                                    case 4:
                                                        return (
                                                            (c = e.sent),
                                                            (e.next = 7),
                                                            g(t, r.signal)
                                                        );
                                                    case 7:
                                                        (a = e.sent),
                                                            l(c),
                                                            f(a),
                                                            (e.next = 15);
                                                        break;
                                                    case 12:
                                                        (e.prev = 12),
                                                            (e.t0 = e.catch(1)),
                                                            console.error(
                                                                "Something went wrong",
                                                                e.t0
                                                            );
                                                    case 15:
                                                        return e.abrupt(
                                                            "return",
                                                            function () {
                                                                r.abort();
                                                            }
                                                        );
                                                    case 16:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        null,
                                        [[1, 12]]
                                    );
                                })
                            )).apply(this, arguments);
                        }
                        !(function () {
                            e.apply(this, arguments);
                        })();
                    }, []),
                    Object(o.jsxs)("div", {
                        children: [
                            Object(o.jsxs)("ol", {
                                className: "breadcrumb",
                                children: [
                                    Object(o.jsx)("li", {
                                        className: "breadcrumb-item",
                                        children: Object(o.jsx)(B.b, {
                                            to: "/",
                                            children: "Home",
                                        }),
                                    }),
                                    Object(o.jsx)("li", {
                                        className: "breadcrumb-item",
                                        children: Object(o.jsx)(B.b, {
                                            to: "/decks/".concat(t),
                                            children: m.name,
                                        }),
                                    }),
                                    Object(o.jsxs)("li", {
                                        className: "breadcrumb-item active",
                                        children: ["Edit Card ", n],
                                    }),
                                ],
                            }),
                            Object(o.jsxs)("form", {
                                onSubmit: function (e) {
                                    return O.apply(this, arguments);
                                },
                                children: [
                                    Object(o.jsx)("h2", {
                                        children: "Edit Card",
                                    }),
                                    Object(o.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            Object(o.jsx)("label", {
                                                children: "Front",
                                            }),
                                            Object(o.jsx)("textarea", {
                                                id: "front",
                                                name: "front",
                                                className: "form-control",
                                                onChange: x,
                                                type: "text",
                                                value: u.front,
                                            }),
                                        ],
                                    }),
                                    Object(o.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            Object(o.jsx)("label", {
                                                children: "Back",
                                            }),
                                            Object(o.jsx)("textarea", {
                                                id: "back",
                                                name: "back",
                                                className: "form-control",
                                                onChange: x,
                                                type: "text",
                                                value: u.back,
                                            }),
                                        ],
                                    }),
                                    Object(o.jsx)("button", {
                                        className: "btn btn-secondary mx-1",
                                        onClick: function () {
                                            return (function () {
                                                return v.apply(this, arguments);
                                            })();
                                        },
                                        children: "Cancel",
                                    }),
                                    Object(o.jsx)("button", {
                                        className: "btn btn-primary mx-1",
                                        type: "submit",
                                        children: "Save",
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            };
            var G = function () {
                return Object(o.jsxs)(o.Fragment, {
                    children: [
                        Object(o.jsx)(u, {}),
                        Object(o.jsx)("div", {
                            className: "container",
                            children: Object(o.jsxs)(i.c, {
                                children: [
                                    Object(o.jsx)(i.a, {
                                        exact: !0,
                                        path: "/",
                                        children: Object(o.jsx)(L, {}),
                                    }),
                                    Object(o.jsx)(i.a, {
                                        path: "/decks/new",
                                        children: Object(o.jsx)(K, {}),
                                    }),
                                    Object(o.jsx)(i.a, {
                                        exact: !0,
                                        path: "/decks/:deckId",
                                        children: Object(o.jsx)(W, {}),
                                    }),
                                    Object(o.jsx)(i.a, {
                                        path: "/decks/:deckId/study",
                                        children: Object(o.jsx)(V, {}),
                                    }),
                                    Object(o.jsx)(i.a, {
                                        path: "/decks/:deckId/edit",
                                        children: Object(o.jsx)(M, {}),
                                    }),
                                    Object(o.jsx)(i.a, {
                                        path: "/decks/:deckId/cards/new",
                                        children: Object(o.jsx)(q, {}),
                                    }),
                                    Object(o.jsx)(i.a, {
                                        path: "/decks/:deckId/cards/:cardId/edit",
                                        children: Object(o.jsx)(z, {}),
                                    }),
                                    Object(o.jsx)(l, {}),
                                ],
                            }),
                        }),
                    ],
                });
            };
            var Q = function () {
                return Object(o.jsx)("div", {
                    className: "app-routes",
                    children: Object(o.jsx)(i.c, {
                        children: Object(o.jsx)(i.a, {
                            path: "/",
                            children: Object(o.jsx)(G, {}),
                        }),
                    }),
                });
            };
            s.a.render(
                Object(o.jsx)(c.a.StrictMode, {
                    children: Object(o.jsx)(B.a, {
                        children: Object(o.jsx)(Q, {}),
                    }),
                }),
                document.getElementById("root")
            );
        },
    },
    [[36, 1, 2]],
]);
//# sourceMappingURL=main.144f2752.chunk.js.map
