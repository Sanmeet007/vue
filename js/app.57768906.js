(function(e) {
  function t(t) {
    for (var r, c, a = t[0], s = t[1], l = t[2], f = 0, d = []; f < a.length; f++)c = a[f],
    Object.prototype.hasOwnProperty.call(o, c) && o[c] && d.push(o[c][0]),
    o[c] = 0; for (r in s)Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]); u && u(t); while (d.length)d.shift()(); return i.push.apply(i, l || []),
    n()}function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], r=!0, a = 1; a < n.length; a++) {
        var s = n[a]; 0 !== o[s] && (r=!1)}r && (i.splice(t--, 1), e = c(c.s = n[0]))}return e
  }var r = {},
  o = {
    app: 0
  },
  i = []; function c(t) {
    if (r[t])return r[t].exports; var n = r[t] = {
      i: t,
      l: !1,
      exports: {}}; return e[t].call(n.exports, n, n.exports, c),
    n.l=!0,
    n.exports
  }c.m = e,
  c.c = r,
  c.d = function(e, t, n) {
    c.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0, get: n
    })},
  c.r = function(e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }),
    Object.defineProperty(e, "__esModule", {
      value: !0
    })},
  c.t = function(e, t) {
    if (1&t && (e = c(e)), 8&t)return e; if (4&t && "object" === typeof e && e && e.__esModule)return e; var n = Object.create(null); if (c.r(n), Object.defineProperty(n, "default", {
      enumerable: !0, value: e
    }), 2&t && "string" != typeof e)for (var r in e)c.d(n, r, function(t) {
      return e[t]}.bind(null, r)); return n
  },
  c.n = function(e) {
    var t = e && e.__esModule?function() {
      return e["default"]}:function() {
      return e
    }; return c.d(t, "a", t),
    t
  },
  c.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)},
  c.p = "/"; var a = window["webpackJsonp"] = window["webpackJsonp"] || [],
  s = a.push.bind(a); a.push = t,
  a = a.slice(); for (var l = 0; l < a.length; l++)t(a[l]); var u = s; i.push([0, "chunk-vendors"]),
  n()})({
  0:function(e, t, n) {
    e.exports = n("56d7")},
  "29fd":function(e, t, n) {
    "use strict"; n("d79f")},
  "2d0b":function(e, t, n) {},
  "56d7":function(e, t, n) {
    "use strict"; n.r(t); n("e260"),
    n("e6cf"),
    n("cca6"),
    n("a79d"); var r = n("7a23"),
    o = Object(r["f"])("h1", null, "Check Your Reaction Time ", -1),
    i = {
      key: 0
    },
    c = Object(r["f"])("br", null, null, -1),
    a = Object(r["e"])(),
    s = Object(r["f"])("br", null, null, -1),
    l = {
      class: "rank"
    }; function u(e, t, n, u, f, d) {
      var p = Object(r["h"])("Block"); return Object(r["g"])(),
      Object(r["c"])(r["a"], null, [o, Object(r["f"])("button", {
        onClick: t[1] || (t[1] = function() {
          return d.start && d.start.apply(d, arguments)}), class: {
          disabled: f.isPlaying
        }}, Object(r["i"])(f.setText), 3), f.showResults?(Object(r["g"])(), Object(r["c"])("p", i, [Object(r["e"])("Reaction TIme "+Object(r["i"])(f.score)+"ms ", 1), c, a, s, Object(r["f"])("span", l, Object(r["i"])(f.rankName), 1)])): Object(r["d"])("", !0), f.isPlaying?(Object(r["g"])(), Object(r["c"])(p, {
          key: 1, delay: f.delay, onEnd: d.endgame
        }, null, 8, ["delay", "onEnd"])): Object(r["d"])("", !0)], 64)}function f(e, t, n, o, i, c) {
      return i.showBlock?(Object(r["g"])(), Object(r["c"])("div", {
        key: 0, class: "block", onClick: t[1] || (t[1] = function() {
          return c.stopTimer && c.stopTimer.apply(c, arguments)})}, " Click me ")): Object(r["d"])("", !0)}var d = {
      props: ["delay"],
      data: function() {
        return {
          showBlock: !1,
          timer: null,
          reactionTime: 0
        }},
      mounted: function() {
        var e = this; setTimeout((function() {
          e.showBlock=!0, e.startTimer()}), this.delay)},
      methods: {
        startTimer: function() {
          var e = this; this.timer = setInterval((function() {
            e.reactionTime += 10
          }), 10)},
        stopTimer: function() {
          clearInterval(this.timer),
          this.$emit("end", this.reactionTime)}}}; n("58cf"); d.render = f; var p = d,
    b = {
      name: "App",
      data: function() {
        return {
          isPlaying: !1,
          delay: null,
          score: null,
          showResults: !1,
          setText: "Play",
          rank: null,
          rankName: null
        }},
      components: {
        Block: p
      },
      methods: {
        start: function() {
          this.delay = 2e3+3e3*Math.random(),
          this.isPlaying=!0,
          this.showResults=!1
        },
        endgame: function(e) {
          this.score = e,
          this.isPlaying=!1,
          this.showResults=!0,
          this.setText = "Play Again",
          this.score < 250?this.rankName = "Ninja Fingers": this.score < 700?this.rankName = "Rapid Reflex": this.rankName = "Snail pace...."
        }}}; n("29fd"); b.render = u; var h = b; Object(r["b"])(h).mount("#app")},
  "58cf":function(e, t, n) {
    "use strict"; n("2d0b")},
  d79f: function(e, t, n) {}});
//# sourceMappingURL=app.57768906.js.map