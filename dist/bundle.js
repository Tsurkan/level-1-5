(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          const c = typeof require === 'function' && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          const a = new Error(`Cannot find module '${i}'`);
          throw ((a.code = 'MODULE_NOT_FOUND'), a);
        }
        const p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          (r) => {
            const n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (
      var u = typeof require === 'function' && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.sayHello = void 0;
        function sayHello(name) {
          return `Hello from ${name}`;
        }
        exports.sayHello = sayHello;
      },
      {},
    ],
    2: [
      function (require, module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        const greet_1 = require('./greet');
        function showHello(divName, name) {
          const elt = document.getElementById(divName);
          elt.innerText = (0, greet_1.sayHello)(name);
        }
        showHello('greeting', 'TypeScript');
      },
      { './greet': 1 },
    ],
  },
  {},
  [2]
);

// # sourceMappingURL=bundle.js.map
