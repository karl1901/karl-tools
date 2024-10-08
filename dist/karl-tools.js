var un = Object.defineProperty;
var fn = (t, e, r) => e in t ? un(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var Ct = (t, e, r) => fn(t, typeof e != "symbol" ? e + "" : e, r);
const us = (t, e, r) => {
  try {
    !isNaN(t) && !(t instanceof Date) && (t = new Date(t)), e = e || "yyyy-MM-dd hh:mm:ss:ms";
    let n = t.getFullYear() + "", o = t.getMonth() + 1, i = t.getDate(), a = t.getHours(), c = t.getMinutes(), y = t.getSeconds(), d = t.getMilliseconds();
    return o = o < 10 ? "0" + o : "" + o, i = i < 10 ? "0" + i : "" + i, a = a < 10 ? "0" + a : "" + a, c = c < 10 ? "0" + c : "" + c, y = y < 10 ? "0" + y : "" + y, d = d < 10 ? "0" + d : "" + d, e = e.replace(/yyyy/g, n), e = e.replace(/MM/g, o), e = e.replace(/dd/g, i), e = e.replace(/hh/g, a), e = e.replace(/mm/g, c), e = e.replace(/ss/g, y), e = e.replace(/ms/g, d), e;
  } catch (n) {
    return console.error(n), r || "";
  }
}, fs = (t, e) => {
  const n = t.toString().split(".");
  e = !e || e <= 0 || e >= t.toString().length ? 3 : e;
  const o = new RegExp(`(\\d)(?=(\\d{${e}})+(?!\\d))`, "g"), i = n[0].replace(o, "$1,");
  return n.length > 1 ? i + "." + n[1] : i;
}, ps = (t, e) => {
  let r = document.createElement("input");
  r.setAttribute("type", "file"), e && e === "Multiple" && r.setAttribute("multiple", "true"), e && e === "Directory" && (r.setAttribute("webkitdirectory", "true"), r.setAttribute("mozdirectory", "true"), r.setAttribute("odirectory", "true")), r.addEventListener("change", function() {
    t(r.files);
  }), r.addEventListener("cancel", function() {
    t(null);
  }), r.click();
}, ys = (t) => {
  if (!t || t === "")
    return "0B";
  const e = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let r = 0;
  const n = typeof t == "string" ? parseFloat(t) : t;
  if (Number.isNaN(n)) throw new Error("The size is not a number");
  r = Math.floor(Math.log(n) / Math.log(1024));
  let o = n / Math.pow(1024, r);
  return o = Number(o.toFixed(2)), o + e[r];
}, ds = async (t, e) => navigator.clipboard.writeText(t).then(() => {
  e && e(t);
}).catch((r) => {
  console.error(r);
}), hs = (t, e, r, n, o) => {
  t = String(t);
  const i = t == "null" || t == "";
  if (i || e == "")
    return r = r || "", i ? r : t;
  let a = n ? "g" : "ig";
  const c = new RegExp(e, a);
  if (t && t != "")
    return o = o || "#ff0000", t.replace(c, `<span style="color: ${o};">$&</span>`);
}, ms = (t, e) => {
  if (e == "") return t;
  const r = (o) => typeof o == "object" && o !== null, n = (o, i) => {
    for (let a in o) {
      let c = o[a];
      if (r(c)) {
        if (n(c, i))
          return !0;
      } else if (String(c).toLowerCase().includes(i.toLowerCase()))
        return !0;
    }
    return !1;
  };
  return t.filter((o) => r(o) ? n(o, e) : String(o).toLowerCase().includes(e.toLowerCase()));
}, gs = (t, e, r, n, o) => {
  const i = (a) => {
    for (let c in a)
      a[c] || (a[c] = n);
    return a;
  };
  for (const a of t)
    if (a[e] === r)
      return o ? a[o] : i(a);
  return null;
}, bs = (t, e, r) => {
  const n = [...t];
  return n.sort((o, i) => {
    const a = o[r], c = i[r];
    if (typeof a > "u" || typeof c > "u")
      return a === c ? 0 : a === void 0 ? 1 : -1;
    if (typeof a == "number" && typeof c == "number")
      return e === "ascending" ? a - c : c - a;
    if (typeof a == "string" && typeof c == "string") {
      const y = a.localeCompare(c);
      return e === "ascending" ? y : -y;
    }
    return 0;
  }), n;
}, vs = (t, e, r) => {
  if (r) {
    const n = {
      info: e,
      expire: Date.now() + r
    };
    localStorage.setItem(t, JSON.stringify(n));
    return;
  }
  localStorage.setItem(t, JSON.stringify({ info: e }));
}, ws = (t) => {
  const e = localStorage.getItem(t);
  if (e) {
    const { info: r } = JSON.parse(e);
    return r;
  }
  return null;
}, Ss = (t) => {
  const e = localStorage.getItem(t);
  if (e) {
    const { expire: r } = JSON.parse(e);
    Date.now() > r && localStorage.removeItem(t);
  }
}, Es = (t) => {
  localStorage.removeItem(t);
}, As = (t, e, r, n) => {
  if (e < 0 && r < 0)
    throw new Error("preserveStart and preserveEnd cannot be both less than 0");
  e = e < 0 ? 1 : e, r = r < 0 ? 1 : r, n = n || t.length - e - r;
  const o = t.length;
  if (o <= e + r)
    return t;
  const i = t.slice(0, e), a = "*".repeat(n), c = t.slice(o - r);
  return i + a + c;
};
function gr(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: pn } = Object.prototype, { getPrototypeOf: wt } = Object, Le = /* @__PURE__ */ ((t) => (e) => {
  const r = pn.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), M = (t) => (t = t.toLowerCase(), (e) => Le(e) === t), Ue = (t) => (e) => typeof e === t, { isArray: le } = Array, be = Ue("undefined");
function yn(t) {
  return t !== null && !be(t) && t.constructor !== null && !be(t.constructor) && N(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const br = M("ArrayBuffer");
function dn(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && br(t.buffer), e;
}
const hn = Ue("string"), N = Ue("function"), vr = Ue("number"), Me = (t) => t !== null && typeof t == "object", mn = (t) => t === !0 || t === !1, Te = (t) => {
  if (Le(t) !== "object")
    return !1;
  const e = wt(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, gn = M("Date"), bn = M("File"), vn = M("Blob"), wn = M("FileList"), Sn = (t) => Me(t) && N(t.pipe), En = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || N(t.append) && ((e = Le(t)) === "formdata" || // detect form-data instance
  e === "object" && N(t.toString) && t.toString() === "[object FormData]"));
}, An = M("URLSearchParams"), [On, Rn, Pn, Tn] = ["ReadableStream", "Request", "Response", "Headers"].map(M), xn = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ve(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, o;
  if (typeof t != "object" && (t = [t]), le(t))
    for (n = 0, o = t.length; n < o; n++)
      e.call(null, t[n], n, t);
  else {
    const i = r ? Object.getOwnPropertyNames(t) : Object.keys(t), a = i.length;
    let c;
    for (n = 0; n < a; n++)
      c = i[n], e.call(null, t[c], c, t);
  }
}
function wr(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], e === o.toLowerCase())
      return o;
  return null;
}
const Sr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Er = (t) => !be(t) && t !== Sr;
function at() {
  const { caseless: t } = Er(this) && this || {}, e = {}, r = (n, o) => {
    const i = t && wr(e, o) || o;
    Te(e[i]) && Te(n) ? e[i] = at(e[i], n) : Te(n) ? e[i] = at({}, n) : le(n) ? e[i] = n.slice() : e[i] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && ve(arguments[n], r);
  return e;
}
const Fn = (t, e, r, { allOwnKeys: n } = {}) => (ve(e, (o, i) => {
  r && N(o) ? t[i] = gr(o, r) : t[i] = o;
}, { allOwnKeys: n }), t), _n = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Bn = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, In = (t, e, r, n) => {
  let o, i, a;
  const c = {};
  if (e = e || {}, t == null) return e;
  do {
    for (o = Object.getOwnPropertyNames(t), i = o.length; i-- > 0; )
      a = o[i], (!n || n(a, t, e)) && !c[a] && (e[a] = t[a], c[a] = !0);
    t = r !== !1 && wt(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, Cn = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, Dn = (t) => {
  if (!t) return null;
  if (le(t)) return t;
  let e = t.length;
  if (!vr(e)) return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, Nn = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && wt(Uint8Array)), $n = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const i = o.value;
    e.call(t, i[0], i[1]);
  }
}, Ln = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, Un = M("HTMLFormElement"), Mn = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), Dt = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), qn = M("RegExp"), Ar = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  ve(r, (o, i) => {
    let a;
    (a = e(o, i, t)) !== !1 && (n[i] = a || o);
  }), Object.defineProperties(t, n);
}, jn = (t) => {
  Ar(t, (e, r) => {
    if (N(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = t[r];
    if (N(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Hn = (t, e) => {
  const r = {}, n = (o) => {
    o.forEach((i) => {
      r[i] = !0;
    });
  };
  return le(t) ? n(t) : n(String(t).split(e)), r;
}, Wn = () => {
}, zn = (t, e) => t != null && Number.isFinite(t = +t) ? t : e, ze = "abcdefghijklmnopqrstuvwxyz", Nt = "0123456789", Or = {
  DIGIT: Nt,
  ALPHA: ze,
  ALPHA_DIGIT: ze + ze.toUpperCase() + Nt
}, kn = (t = 16, e = Or.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = e;
  for (; t--; )
    r += e[Math.random() * n | 0];
  return r;
};
function Gn(t) {
  return !!(t && N(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const Jn = (t) => {
  const e = new Array(10), r = (n, o) => {
    if (Me(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[o] = n;
        const i = le(n) ? [] : {};
        return ve(n, (a, c) => {
          const y = r(a, o + 1);
          !be(y) && (i[c] = y);
        }), e[o] = void 0, i;
      }
    }
    return n;
  };
  return r(t, 0);
}, Vn = M("AsyncFunction"), Kn = (t) => t && (Me(t) || N(t)) && N(t.then) && N(t.catch), m = {
  isArray: le,
  isArrayBuffer: br,
  isBuffer: yn,
  isFormData: En,
  isArrayBufferView: dn,
  isString: hn,
  isNumber: vr,
  isBoolean: mn,
  isObject: Me,
  isPlainObject: Te,
  isReadableStream: On,
  isRequest: Rn,
  isResponse: Pn,
  isHeaders: Tn,
  isUndefined: be,
  isDate: gn,
  isFile: bn,
  isBlob: vn,
  isRegExp: qn,
  isFunction: N,
  isStream: Sn,
  isURLSearchParams: An,
  isTypedArray: Nn,
  isFileList: wn,
  forEach: ve,
  merge: at,
  extend: Fn,
  trim: xn,
  stripBOM: _n,
  inherits: Bn,
  toFlatObject: In,
  kindOf: Le,
  kindOfTest: M,
  endsWith: Cn,
  toArray: Dn,
  forEachEntry: $n,
  matchAll: Ln,
  isHTMLForm: Un,
  hasOwnProperty: Dt,
  hasOwnProp: Dt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ar,
  freezeMethods: jn,
  toObjectSet: Hn,
  toCamelCase: Mn,
  noop: Wn,
  toFiniteNumber: zn,
  findKey: wr,
  global: Sr,
  isContextDefined: Er,
  ALPHABET: Or,
  generateString: kn,
  isSpecCompliantForm: Gn,
  toJSONObject: Jn,
  isAsyncFn: Vn,
  isThenable: Kn
};
function O(t, e, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), o && (this.response = o);
}
m.inherits(O, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: m.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Rr = O.prototype, Pr = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  Pr[t] = { value: t };
});
Object.defineProperties(O, Pr);
Object.defineProperty(Rr, "isAxiosError", { value: !0 });
O.from = (t, e, r, n, o, i) => {
  const a = Object.create(Rr);
  return m.toFlatObject(t, a, function(y) {
    return y !== Error.prototype;
  }, (c) => c !== "isAxiosError"), O.call(a, t.message, e, r, n, o), a.cause = t, a.name = t.name, i && Object.assign(a, i), a;
};
const Qn = null;
function st(t) {
  return m.isPlainObject(t) || m.isArray(t);
}
function Tr(t) {
  return m.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function $t(t, e, r) {
  return t ? t.concat(e).map(function(o, i) {
    return o = Tr(o), !r && i ? "[" + o + "]" : o;
  }).join(r ? "." : "") : e;
}
function Xn(t) {
  return m.isArray(t) && !t.some(st);
}
const Yn = m.toFlatObject(m, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function qe(t, e, r) {
  if (!m.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = m.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(E, S) {
    return !m.isUndefined(S[E]);
  });
  const n = r.metaTokens, o = r.visitor || p, i = r.dots, a = r.indexes, y = (r.Blob || typeof Blob < "u" && Blob) && m.isSpecCompliantForm(e);
  if (!m.isFunction(o))
    throw new TypeError("visitor must be a function");
  function d(w) {
    if (w === null) return "";
    if (m.isDate(w))
      return w.toISOString();
    if (!y && m.isBlob(w))
      throw new O("Blob is not supported. Use a Buffer instead.");
    return m.isArrayBuffer(w) || m.isTypedArray(w) ? y && typeof Blob == "function" ? new Blob([w]) : Buffer.from(w) : w;
  }
  function p(w, E, S) {
    let g = w;
    if (w && !S && typeof w == "object") {
      if (m.endsWith(E, "{}"))
        E = n ? E : E.slice(0, -2), w = JSON.stringify(w);
      else if (m.isArray(w) && Xn(w) || (m.isFileList(w) || m.endsWith(E, "[]")) && (g = m.toArray(w)))
        return E = Tr(E), g.forEach(function(s, l) {
          !(m.isUndefined(s) || s === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? $t([E], l, i) : a === null ? E : E + "[]",
            d(s)
          );
        }), !1;
    }
    return st(w) ? !0 : (e.append($t(S, E, i), d(w)), !1);
  }
  const b = [], v = Object.assign(Yn, {
    defaultVisitor: p,
    convertValue: d,
    isVisitable: st
  });
  function A(w, E) {
    if (!m.isUndefined(w)) {
      if (b.indexOf(w) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      b.push(w), m.forEach(w, function(g, h) {
        (!(m.isUndefined(g) || g === null) && o.call(
          e,
          g,
          m.isString(h) ? h.trim() : h,
          E,
          v
        )) === !0 && A(g, E ? E.concat(h) : [h]);
      }), b.pop();
    }
  }
  if (!m.isObject(t))
    throw new TypeError("data must be an object");
  return A(t), e;
}
function Lt(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(n) {
    return e[n];
  });
}
function St(t, e) {
  this._pairs = [], t && qe(t, this, e);
}
const xr = St.prototype;
xr.append = function(e, r) {
  this._pairs.push([e, r]);
};
xr.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, Lt);
  } : Lt;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function Zn(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Fr(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || Zn, o = r && r.serialize;
  let i;
  if (o ? i = o(e, r) : i = m.isURLSearchParams(e) ? e.toString() : new St(e, r).toString(n), i) {
    const a = t.indexOf("#");
    a !== -1 && (t = t.slice(0, a)), t += (t.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return t;
}
class Ut {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, r, n) {
    return this.handlers.push({
      fulfilled: e,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    m.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const _r = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, eo = typeof URLSearchParams < "u" ? URLSearchParams : St, to = typeof FormData < "u" ? FormData : null, ro = typeof Blob < "u" ? Blob : null, no = {
  isBrowser: !0,
  classes: {
    URLSearchParams: eo,
    FormData: to,
    Blob: ro
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Et = typeof window < "u" && typeof document < "u", oo = ((t) => Et && ["ReactNative", "NativeScript", "NS"].indexOf(t) < 0)(typeof navigator < "u" && navigator.product), io = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ao = Et && window.location.href || "http://localhost", so = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Et,
  hasStandardBrowserEnv: oo,
  hasStandardBrowserWebWorkerEnv: io,
  origin: ao
}, Symbol.toStringTag, { value: "Module" })), U = {
  ...so,
  ...no
};
function lo(t, e) {
  return qe(t, new U.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, i) {
      return U.isNode && m.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function co(t) {
  return m.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function uo(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const o = r.length;
  let i;
  for (n = 0; n < o; n++)
    i = r[n], e[i] = t[i];
  return e;
}
function Br(t) {
  function e(r, n, o, i) {
    let a = r[i++];
    if (a === "__proto__") return !0;
    const c = Number.isFinite(+a), y = i >= r.length;
    return a = !a && m.isArray(o) ? o.length : a, y ? (m.hasOwnProp(o, a) ? o[a] = [o[a], n] : o[a] = n, !c) : ((!o[a] || !m.isObject(o[a])) && (o[a] = []), e(r, n, o[a], i) && m.isArray(o[a]) && (o[a] = uo(o[a])), !c);
  }
  if (m.isFormData(t) && m.isFunction(t.entries)) {
    const r = {};
    return m.forEachEntry(t, (n, o) => {
      e(co(n), o, r, 0);
    }), r;
  }
  return null;
}
function fo(t, e, r) {
  if (m.isString(t))
    try {
      return (e || JSON.parse)(t), m.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(t);
}
const we = {
  transitional: _r,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, i = m.isObject(e);
    if (i && m.isHTMLForm(e) && (e = new FormData(e)), m.isFormData(e))
      return o ? JSON.stringify(Br(e)) : e;
    if (m.isArrayBuffer(e) || m.isBuffer(e) || m.isStream(e) || m.isFile(e) || m.isBlob(e) || m.isReadableStream(e))
      return e;
    if (m.isArrayBufferView(e))
      return e.buffer;
    if (m.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let c;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return lo(e, this.formSerializer).toString();
      if ((c = m.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const y = this.env && this.env.FormData;
        return qe(
          c ? { "files[]": e } : e,
          y && new y(),
          this.formSerializer
        );
      }
    }
    return i || o ? (r.setContentType("application/json", !1), fo(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || we.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (m.isResponse(e) || m.isReadableStream(e))
      return e;
    if (e && m.isString(e) && (n && !this.responseType || o)) {
      const a = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(e);
      } catch (c) {
        if (a)
          throw c.name === "SyntaxError" ? O.from(c, O.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: U.classes.FormData,
    Blob: U.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
m.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  we.headers[t] = {};
});
const po = m.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), yo = (t) => {
  const e = {};
  let r, n, o;
  return t && t.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), r = a.substring(0, o).trim().toLowerCase(), n = a.substring(o + 1).trim(), !(!r || e[r] && po[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, Mt = Symbol("internals");
function ye(t) {
  return t && String(t).trim().toLowerCase();
}
function xe(t) {
  return t === !1 || t == null ? t : m.isArray(t) ? t.map(xe) : String(t);
}
function ho(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const mo = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function ke(t, e, r, n, o) {
  if (m.isFunction(n))
    return n.call(this, e, r);
  if (o && (e = r), !!m.isString(e)) {
    if (m.isString(n))
      return e.indexOf(n) !== -1;
    if (m.isRegExp(n))
      return n.test(e);
  }
}
function go(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function bo(t, e) {
  const r = m.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(t, n + r, {
      value: function(o, i, a) {
        return this[n].call(this, e, o, i, a);
      },
      configurable: !0
    });
  });
}
class D {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const o = this;
    function i(c, y, d) {
      const p = ye(y);
      if (!p)
        throw new Error("header name must be a non-empty string");
      const b = m.findKey(o, p);
      (!b || o[b] === void 0 || d === !0 || d === void 0 && o[b] !== !1) && (o[b || y] = xe(c));
    }
    const a = (c, y) => m.forEach(c, (d, p) => i(d, p, y));
    if (m.isPlainObject(e) || e instanceof this.constructor)
      a(e, r);
    else if (m.isString(e) && (e = e.trim()) && !mo(e))
      a(yo(e), r);
    else if (m.isHeaders(e))
      for (const [c, y] of e.entries())
        i(y, c, n);
    else
      e != null && i(r, e, n);
    return this;
  }
  get(e, r) {
    if (e = ye(e), e) {
      const n = m.findKey(this, e);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return ho(o);
        if (m.isFunction(r))
          return r.call(this, o, n);
        if (m.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = ye(e), e) {
      const n = m.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || ke(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let o = !1;
    function i(a) {
      if (a = ye(a), a) {
        const c = m.findKey(n, a);
        c && (!r || ke(n, n[c], c, r)) && (delete n[c], o = !0);
      }
    }
    return m.isArray(e) ? e.forEach(i) : i(e), o;
  }
  clear(e) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const i = r[n];
      (!e || ke(this, this[i], i, e, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(e) {
    const r = this, n = {};
    return m.forEach(this, (o, i) => {
      const a = m.findKey(n, i);
      if (a) {
        r[a] = xe(o), delete r[i];
        return;
      }
      const c = e ? go(i) : String(i).trim();
      c !== i && delete r[i], r[c] = xe(o), n[c] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return m.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = e && m.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, r]) => e + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...r) {
    const n = new this(e);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(e) {
    const n = (this[Mt] = this[Mt] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(a) {
      const c = ye(a);
      n[c] || (bo(o, a), n[c] = !0);
    }
    return m.isArray(e) ? e.forEach(i) : i(e), this;
  }
}
D.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
m.reduceDescriptors(D.prototype, ({ value: t }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(n) {
      this[r] = n;
    }
  };
});
m.freezeMethods(D);
function Ge(t, e) {
  const r = this || we, n = e || r, o = D.from(n.headers);
  let i = n.data;
  return m.forEach(t, function(c) {
    i = c.call(r, i, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), i;
}
function Ir(t) {
  return !!(t && t.__CANCEL__);
}
function ce(t, e, r) {
  O.call(this, t ?? "canceled", O.ERR_CANCELED, e, r), this.name = "CanceledError";
}
m.inherits(ce, O, {
  __CANCEL__: !0
});
function Cr(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new O(
    "Request failed with status code " + r.status,
    [O.ERR_BAD_REQUEST, O.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function vo(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function wo(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let o = 0, i = 0, a;
  return e = e !== void 0 ? e : 1e3, function(y) {
    const d = Date.now(), p = n[i];
    a || (a = d), r[o] = y, n[o] = d;
    let b = i, v = 0;
    for (; b !== o; )
      v += r[b++], b = b % t;
    if (o = (o + 1) % t, o === i && (i = (i + 1) % t), d - a < e)
      return;
    const A = p && d - p;
    return A ? Math.round(v * 1e3 / A) : void 0;
  };
}
function So(t, e) {
  let r = 0;
  const n = 1e3 / e;
  let o = null;
  return function() {
    const a = this === !0, c = Date.now();
    if (a || c - r > n)
      return o && (clearTimeout(o), o = null), r = c, t.apply(null, arguments);
    o || (o = setTimeout(() => (o = null, r = Date.now(), t.apply(null, arguments)), n - (c - r)));
  };
}
const Be = (t, e, r = 3) => {
  let n = 0;
  const o = wo(50, 250);
  return So((i) => {
    const a = i.loaded, c = i.lengthComputable ? i.total : void 0, y = a - n, d = o(y), p = a <= c;
    n = a;
    const b = {
      loaded: a,
      total: c,
      progress: c ? a / c : void 0,
      bytes: y,
      rate: d || void 0,
      estimated: d && c && p ? (c - a) / d : void 0,
      event: i,
      lengthComputable: c != null
    };
    b[e ? "download" : "upload"] = !0, t(b);
  }, r);
}, Eo = U.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function o(i) {
      let a = i;
      return e && (r.setAttribute("href", a), a = r.href), r.setAttribute("href", a), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = o(window.location.href), function(a) {
      const c = m.isString(a) ? o(a) : a;
      return c.protocol === n.protocol && c.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), Ao = U.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, r, n, o, i) {
      const a = [t + "=" + encodeURIComponent(e)];
      m.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()), m.isString(n) && a.push("path=" + n), m.isString(o) && a.push("domain=" + o), i === !0 && a.push("secure"), document.cookie = a.join("; ");
    },
    read(t) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Oo(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Ro(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Dr(t, e) {
  return t && !Oo(e) ? Ro(t, e) : e;
}
const qt = (t) => t instanceof D ? { ...t } : t;
function Z(t, e) {
  e = e || {};
  const r = {};
  function n(d, p, b) {
    return m.isPlainObject(d) && m.isPlainObject(p) ? m.merge.call({ caseless: b }, d, p) : m.isPlainObject(p) ? m.merge({}, p) : m.isArray(p) ? p.slice() : p;
  }
  function o(d, p, b) {
    if (m.isUndefined(p)) {
      if (!m.isUndefined(d))
        return n(void 0, d, b);
    } else return n(d, p, b);
  }
  function i(d, p) {
    if (!m.isUndefined(p))
      return n(void 0, p);
  }
  function a(d, p) {
    if (m.isUndefined(p)) {
      if (!m.isUndefined(d))
        return n(void 0, d);
    } else return n(void 0, p);
  }
  function c(d, p, b) {
    if (b in e)
      return n(d, p);
    if (b in t)
      return n(void 0, d);
  }
  const y = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: c,
    headers: (d, p) => o(qt(d), qt(p), !0)
  };
  return m.forEach(Object.keys(Object.assign({}, t, e)), function(p) {
    const b = y[p] || o, v = b(t[p], e[p], p);
    m.isUndefined(v) && b !== c || (r[p] = v);
  }), r;
}
const Nr = (t) => {
  const e = Z({}, t);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: i, headers: a, auth: c } = e;
  e.headers = a = D.from(a), e.url = Fr(Dr(e.baseURL, e.url), t.params, t.paramsSerializer), c && a.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let y;
  if (m.isFormData(r)) {
    if (U.hasStandardBrowserEnv || U.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if ((y = a.getContentType()) !== !1) {
      const [d, ...p] = y ? y.split(";").map((b) => b.trim()).filter(Boolean) : [];
      a.setContentType([d || "multipart/form-data", ...p].join("; "));
    }
  }
  if (U.hasStandardBrowserEnv && (n && m.isFunction(n) && (n = n(e)), n || n !== !1 && Eo(e.url))) {
    const d = o && i && Ao.read(i);
    d && a.set(o, d);
  }
  return e;
}, Po = typeof XMLHttpRequest < "u", To = Po && function(t) {
  return new Promise(function(r, n) {
    const o = Nr(t);
    let i = o.data;
    const a = D.from(o.headers).normalize();
    let { responseType: c } = o, y;
    function d() {
      o.cancelToken && o.cancelToken.unsubscribe(y), o.signal && o.signal.removeEventListener("abort", y);
    }
    let p = new XMLHttpRequest();
    p.open(o.method.toUpperCase(), o.url, !0), p.timeout = o.timeout;
    function b() {
      if (!p)
        return;
      const A = D.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), E = {
        data: !c || c === "text" || c === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: A,
        config: t,
        request: p
      };
      Cr(function(g) {
        r(g), d();
      }, function(g) {
        n(g), d();
      }, E), p = null;
    }
    "onloadend" in p ? p.onloadend = b : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, p.onabort = function() {
      p && (n(new O("Request aborted", O.ECONNABORTED, o, p)), p = null);
    }, p.onerror = function() {
      n(new O("Network Error", O.ERR_NETWORK, o, p)), p = null;
    }, p.ontimeout = function() {
      let w = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const E = o.transitional || _r;
      o.timeoutErrorMessage && (w = o.timeoutErrorMessage), n(new O(
        w,
        E.clarifyTimeoutError ? O.ETIMEDOUT : O.ECONNABORTED,
        o,
        p
      )), p = null;
    }, i === void 0 && a.setContentType(null), "setRequestHeader" in p && m.forEach(a.toJSON(), function(w, E) {
      p.setRequestHeader(E, w);
    }), m.isUndefined(o.withCredentials) || (p.withCredentials = !!o.withCredentials), c && c !== "json" && (p.responseType = o.responseType), typeof o.onDownloadProgress == "function" && p.addEventListener("progress", Be(o.onDownloadProgress, !0)), typeof o.onUploadProgress == "function" && p.upload && p.upload.addEventListener("progress", Be(o.onUploadProgress)), (o.cancelToken || o.signal) && (y = (A) => {
      p && (n(!A || A.type ? new ce(null, t, p) : A), p.abort(), p = null);
    }, o.cancelToken && o.cancelToken.subscribe(y), o.signal && (o.signal.aborted ? y() : o.signal.addEventListener("abort", y)));
    const v = vo(o.url);
    if (v && U.protocols.indexOf(v) === -1) {
      n(new O("Unsupported protocol " + v + ":", O.ERR_BAD_REQUEST, t));
      return;
    }
    p.send(i || null);
  });
}, xo = (t, e) => {
  let r = new AbortController(), n;
  const o = function(y) {
    if (!n) {
      n = !0, a();
      const d = y instanceof Error ? y : this.reason;
      r.abort(d instanceof O ? d : new ce(d instanceof Error ? d.message : d));
    }
  };
  let i = e && setTimeout(() => {
    o(new O(`timeout ${e} of ms exceeded`, O.ETIMEDOUT));
  }, e);
  const a = () => {
    t && (i && clearTimeout(i), i = null, t.forEach((y) => {
      y && (y.removeEventListener ? y.removeEventListener("abort", o) : y.unsubscribe(o));
    }), t = null);
  };
  t.forEach((y) => y && y.addEventListener && y.addEventListener("abort", o));
  const { signal: c } = r;
  return c.unsubscribe = a, [c, () => {
    i && clearTimeout(i), i = null;
  }];
}, Fo = function* (t, e) {
  let r = t.byteLength;
  if (!e || r < e) {
    yield t;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + e, yield t.slice(n, o), n = o;
}, _o = async function* (t, e, r) {
  for await (const n of t)
    yield* Fo(ArrayBuffer.isView(n) ? n : await r(String(n)), e);
}, jt = (t, e, r, n, o) => {
  const i = _o(t, e, o);
  let a = 0;
  return new ReadableStream({
    type: "bytes",
    async pull(c) {
      const { done: y, value: d } = await i.next();
      if (y) {
        c.close(), n();
        return;
      }
      let p = d.byteLength;
      r && r(a += p), c.enqueue(new Uint8Array(d));
    },
    cancel(c) {
      return n(c), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ht = (t, e) => {
  const r = t != null;
  return (n) => setTimeout(() => e({
    lengthComputable: r,
    total: t,
    loaded: n
  }));
}, je = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", $r = je && typeof ReadableStream == "function", lt = je && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), Bo = $r && (() => {
  let t = !1;
  const e = new Request(U.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
})(), Wt = 64 * 1024, ct = $r && !!(() => {
  try {
    return m.isReadableStream(new Response("").body);
  } catch {
  }
})(), Ie = {
  stream: ct && ((t) => t.body)
};
je && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !Ie[e] && (Ie[e] = m.isFunction(t[e]) ? (r) => r[e]() : (r, n) => {
      throw new O(`Response type '${e}' is not supported`, O.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const Io = async (t) => {
  if (t == null)
    return 0;
  if (m.isBlob(t))
    return t.size;
  if (m.isSpecCompliantForm(t))
    return (await new Request(t).arrayBuffer()).byteLength;
  if (m.isArrayBufferView(t))
    return t.byteLength;
  if (m.isURLSearchParams(t) && (t = t + ""), m.isString(t))
    return (await lt(t)).byteLength;
}, Co = async (t, e) => {
  const r = m.toFiniteNumber(t.getContentLength());
  return r ?? Io(e);
}, Do = je && (async (t) => {
  let {
    url: e,
    method: r,
    data: n,
    signal: o,
    cancelToken: i,
    timeout: a,
    onDownloadProgress: c,
    onUploadProgress: y,
    responseType: d,
    headers: p,
    withCredentials: b = "same-origin",
    fetchOptions: v
  } = Nr(t);
  d = d ? (d + "").toLowerCase() : "text";
  let [A, w] = o || i || a ? xo([o, i], a) : [], E, S;
  const g = () => {
    !E && setTimeout(() => {
      A && A.unsubscribe();
    }), E = !0;
  };
  let h;
  try {
    if (y && Bo && r !== "get" && r !== "head" && (h = await Co(p, n)) !== 0) {
      let u = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), P;
      m.isFormData(n) && (P = u.headers.get("content-type")) && p.setContentType(P), u.body && (n = jt(u.body, Wt, Ht(
        h,
        Be(y)
      ), null, lt));
    }
    m.isString(b) || (b = b ? "cors" : "omit"), S = new Request(e, {
      ...v,
      signal: A,
      method: r.toUpperCase(),
      headers: p.normalize().toJSON(),
      body: n,
      duplex: "half",
      withCredentials: b
    });
    let s = await fetch(S);
    const l = ct && (d === "stream" || d === "response");
    if (ct && (c || l)) {
      const u = {};
      ["status", "statusText", "headers"].forEach((B) => {
        u[B] = s[B];
      });
      const P = m.toFiniteNumber(s.headers.get("content-length"));
      s = new Response(
        jt(s.body, Wt, c && Ht(
          P,
          Be(c, !0)
        ), l && g, lt),
        u
      );
    }
    d = d || "text";
    let f = await Ie[m.findKey(Ie, d) || "text"](s, t);
    return !l && g(), w && w(), await new Promise((u, P) => {
      Cr(u, P, {
        data: f,
        headers: D.from(s.headers),
        status: s.status,
        statusText: s.statusText,
        config: t,
        request: S
      });
    });
  } catch (s) {
    throw g(), s && s.name === "TypeError" && /fetch/i.test(s.message) ? Object.assign(
      new O("Network Error", O.ERR_NETWORK, t, S),
      {
        cause: s.cause || s
      }
    ) : O.from(s, s && s.code, t, S);
  }
}), ut = {
  http: Qn,
  xhr: To,
  fetch: Do
};
m.forEach(ut, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const zt = (t) => `- ${t}`, No = (t) => m.isFunction(t) || t === null || t === !1, Lr = {
  getAdapter: (t) => {
    t = m.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const o = {};
    for (let i = 0; i < e; i++) {
      r = t[i];
      let a;
      if (n = r, !No(r) && (n = ut[(a = String(r)).toLowerCase()], n === void 0))
        throw new O(`Unknown adapter '${a}'`);
      if (n)
        break;
      o[a || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(o).map(
        ([c, y]) => `adapter ${c} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = e ? i.length > 1 ? `since :
` + i.map(zt).join(`
`) : " " + zt(i[0]) : "as no adapter specified";
      throw new O(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: ut
};
function Je(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new ce(null, t);
}
function kt(t) {
  return Je(t), t.headers = D.from(t.headers), t.data = Ge.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Lr.getAdapter(t.adapter || we.adapter)(t).then(function(n) {
    return Je(t), n.data = Ge.call(
      t,
      t.transformResponse,
      n
    ), n.headers = D.from(n.headers), n;
  }, function(n) {
    return Ir(n) || (Je(t), n && n.response && (n.response.data = Ge.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = D.from(n.response.headers))), Promise.reject(n);
  });
}
const Ur = "1.7.2", At = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  At[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Gt = {};
At.transitional = function(e, r, n) {
  function o(i, a) {
    return "[Axios v" + Ur + "] Transitional option '" + i + "'" + a + (n ? ". " + n : "");
  }
  return (i, a, c) => {
    if (e === !1)
      throw new O(
        o(a, " has been removed" + (r ? " in " + r : "")),
        O.ERR_DEPRECATED
      );
    return r && !Gt[a] && (Gt[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(i, a, c) : !0;
  };
};
function $o(t, e, r) {
  if (typeof t != "object")
    throw new O("options must be an object", O.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let o = n.length;
  for (; o-- > 0; ) {
    const i = n[o], a = e[i];
    if (a) {
      const c = t[i], y = c === void 0 || a(c, i, t);
      if (y !== !0)
        throw new O("option " + i + " must be " + y, O.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new O("Unknown option " + i, O.ERR_BAD_OPTION);
  }
}
const ft = {
  assertOptions: $o,
  validators: At
}, k = ft.validators;
class Q {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Ut(),
      response: new Ut()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, r) {
    try {
      return await this._request(e, r);
    } catch (n) {
      if (n instanceof Error) {
        let o;
        Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error();
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? i && !String(n.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + i) : n.stack = i;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(e, r) {
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = Z(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: i } = r;
    n !== void 0 && ft.assertOptions(n, {
      silentJSONParsing: k.transitional(k.boolean),
      forcedJSONParsing: k.transitional(k.boolean),
      clarifyTimeoutError: k.transitional(k.boolean)
    }, !1), o != null && (m.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : ft.assertOptions(o, {
      encode: k.function,
      serialize: k.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a = i && m.merge(
      i.common,
      i[r.method]
    );
    i && m.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (w) => {
        delete i[w];
      }
    ), r.headers = D.concat(a, i);
    const c = [];
    let y = !0;
    this.interceptors.request.forEach(function(E) {
      typeof E.runWhen == "function" && E.runWhen(r) === !1 || (y = y && E.synchronous, c.unshift(E.fulfilled, E.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(E) {
      d.push(E.fulfilled, E.rejected);
    });
    let p, b = 0, v;
    if (!y) {
      const w = [kt.bind(this), void 0];
      for (w.unshift.apply(w, c), w.push.apply(w, d), v = w.length, p = Promise.resolve(r); b < v; )
        p = p.then(w[b++], w[b++]);
      return p;
    }
    v = c.length;
    let A = r;
    for (b = 0; b < v; ) {
      const w = c[b++], E = c[b++];
      try {
        A = w(A);
      } catch (S) {
        E.call(this, S);
        break;
      }
    }
    try {
      p = kt.call(this, A);
    } catch (w) {
      return Promise.reject(w);
    }
    for (b = 0, v = d.length; b < v; )
      p = p.then(d[b++], d[b++]);
    return p;
  }
  getUri(e) {
    e = Z(this.defaults, e);
    const r = Dr(e.baseURL, e.url);
    return Fr(r, e.params, e.paramsSerializer);
  }
}
m.forEach(["delete", "get", "head", "options"], function(e) {
  Q.prototype[e] = function(r, n) {
    return this.request(Z(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
m.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(i, a, c) {
      return this.request(Z(c || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  Q.prototype[e] = r(), Q.prototype[e + "Form"] = r(!0);
});
class Ot {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners) return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const a = new Promise((c) => {
        n.subscribe(c), i = c;
      }).then(o);
      return a.cancel = function() {
        n.unsubscribe(i);
      }, a;
    }, e(function(i, a, c) {
      n.reason || (n.reason = new ce(i, a, c), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(e);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new Ot(function(o) {
        e = o;
      }),
      cancel: e
    };
  }
}
function Lo(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function Uo(t) {
  return m.isObject(t) && t.isAxiosError === !0;
}
const pt = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(pt).forEach(([t, e]) => {
  pt[e] = t;
});
function Mr(t) {
  const e = new Q(t), r = gr(Q.prototype.request, e);
  return m.extend(r, Q.prototype, e, { allOwnKeys: !0 }), m.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Mr(Z(t, o));
  }, r;
}
const x = Mr(we);
x.Axios = Q;
x.CanceledError = ce;
x.CancelToken = Ot;
x.isCancel = Ir;
x.VERSION = Ur;
x.toFormData = qe;
x.AxiosError = O;
x.Cancel = x.CanceledError;
x.all = function(e) {
  return Promise.all(e);
};
x.spread = Lo;
x.isAxiosError = Uo;
x.mergeConfig = Z;
x.AxiosHeaders = D;
x.formToJSON = (t) => Br(m.isHTMLForm(t) ? new FormData(t) : t);
x.getAdapter = Lr.getAdapter;
x.HttpStatusCode = pt;
x.default = x;
var Jt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function qr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Mo(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), r;
}
var qo = Error, jo = EvalError, Ho = RangeError, Wo = ReferenceError, jr = SyntaxError, Se = TypeError, zo = URIError, ko = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var e = {}, r = Symbol("test"), n = Object(r);
  if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
    return !1;
  var o = 42;
  e[r] = o;
  for (r in e)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
    return !1;
  var i = Object.getOwnPropertySymbols(e);
  if (i.length !== 1 || i[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var a = Object.getOwnPropertyDescriptor(e, r);
    if (a.value !== o || a.enumerable !== !0)
      return !1;
  }
  return !0;
}, Vt = typeof Symbol < "u" && Symbol, Go = ko, Jo = function() {
  return typeof Vt != "function" || typeof Symbol != "function" || typeof Vt("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Go();
}, Ve = {
  __proto__: null,
  foo: {}
}, Vo = Object, Ko = function() {
  return { __proto__: Ve }.foo === Ve.foo && !(Ve instanceof Vo);
}, Qo = "Function.prototype.bind called on incompatible ", Xo = Object.prototype.toString, Yo = Math.max, Zo = "[object Function]", Kt = function(e, r) {
  for (var n = [], o = 0; o < e.length; o += 1)
    n[o] = e[o];
  for (var i = 0; i < r.length; i += 1)
    n[i + e.length] = r[i];
  return n;
}, ei = function(e, r) {
  for (var n = [], o = r, i = 0; o < e.length; o += 1, i += 1)
    n[i] = e[o];
  return n;
}, ti = function(t, e) {
  for (var r = "", n = 0; n < t.length; n += 1)
    r += t[n], n + 1 < t.length && (r += e);
  return r;
}, ri = function(e) {
  var r = this;
  if (typeof r != "function" || Xo.apply(r) !== Zo)
    throw new TypeError(Qo + r);
  for (var n = ei(arguments, 1), o, i = function() {
    if (this instanceof o) {
      var p = r.apply(
        this,
        Kt(n, arguments)
      );
      return Object(p) === p ? p : this;
    }
    return r.apply(
      e,
      Kt(n, arguments)
    );
  }, a = Yo(0, r.length - n.length), c = [], y = 0; y < a; y++)
    c[y] = "$" + y;
  if (o = Function("binder", "return function (" + ti(c, ",") + "){ return binder.apply(this,arguments); }")(i), r.prototype) {
    var d = function() {
    };
    d.prototype = r.prototype, o.prototype = new d(), d.prototype = null;
  }
  return o;
}, ni = ri, Rt = Function.prototype.bind || ni, oi = Function.prototype.call, ii = Object.prototype.hasOwnProperty, ai = Rt, si = ai.call(oi, ii), R, li = qo, ci = jo, ui = Ho, fi = Wo, ie = jr, oe = Se, pi = zo, Hr = Function, Ke = function(t) {
  try {
    return Hr('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, X = Object.getOwnPropertyDescriptor;
if (X)
  try {
    X({}, "");
  } catch {
    X = null;
  }
var Qe = function() {
  throw new oe();
}, yi = X ? function() {
  try {
    return arguments.callee, Qe;
  } catch {
    try {
      return X(arguments, "callee").get;
    } catch {
      return Qe;
    }
  }
}() : Qe, te = Jo(), di = Ko(), _ = Object.getPrototypeOf || (di ? function(t) {
  return t.__proto__;
} : null), ne = {}, hi = typeof Uint8Array > "u" || !_ ? R : _(Uint8Array), Y = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? R : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? R : ArrayBuffer,
  "%ArrayIteratorPrototype%": te && _ ? _([][Symbol.iterator]()) : R,
  "%AsyncFromSyncIteratorPrototype%": R,
  "%AsyncFunction%": ne,
  "%AsyncGenerator%": ne,
  "%AsyncGeneratorFunction%": ne,
  "%AsyncIteratorPrototype%": ne,
  "%Atomics%": typeof Atomics > "u" ? R : Atomics,
  "%BigInt%": typeof BigInt > "u" ? R : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? R : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? R : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? R : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": li,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": ci,
  "%Float32Array%": typeof Float32Array > "u" ? R : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? R : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? R : FinalizationRegistry,
  "%Function%": Hr,
  "%GeneratorFunction%": ne,
  "%Int8Array%": typeof Int8Array > "u" ? R : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? R : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? R : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": te && _ ? _(_([][Symbol.iterator]())) : R,
  "%JSON%": typeof JSON == "object" ? JSON : R,
  "%Map%": typeof Map > "u" ? R : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !te || !_ ? R : _((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? R : Promise,
  "%Proxy%": typeof Proxy > "u" ? R : Proxy,
  "%RangeError%": ui,
  "%ReferenceError%": fi,
  "%Reflect%": typeof Reflect > "u" ? R : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? R : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !te || !_ ? R : _((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? R : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": te && _ ? _(""[Symbol.iterator]()) : R,
  "%Symbol%": te ? Symbol : R,
  "%SyntaxError%": ie,
  "%ThrowTypeError%": yi,
  "%TypedArray%": hi,
  "%TypeError%": oe,
  "%Uint8Array%": typeof Uint8Array > "u" ? R : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? R : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? R : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? R : Uint32Array,
  "%URIError%": pi,
  "%WeakMap%": typeof WeakMap > "u" ? R : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? R : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? R : WeakSet
};
if (_)
  try {
    null.error;
  } catch (t) {
    var mi = _(_(t));
    Y["%Error.prototype%"] = mi;
  }
var gi = function t(e) {
  var r;
  if (e === "%AsyncFunction%")
    r = Ke("async function () {}");
  else if (e === "%GeneratorFunction%")
    r = Ke("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    r = Ke("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = t("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var o = t("%AsyncGenerator%");
    o && _ && (r = _(o.prototype));
  }
  return Y[e] = r, r;
}, Qt = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, Ee = Rt, Ce = si, bi = Ee.call(Function.call, Array.prototype.concat), vi = Ee.call(Function.apply, Array.prototype.splice), Xt = Ee.call(Function.call, String.prototype.replace), De = Ee.call(Function.call, String.prototype.slice), wi = Ee.call(Function.call, RegExp.prototype.exec), Si = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Ei = /\\(\\)?/g, Ai = function(e) {
  var r = De(e, 0, 1), n = De(e, -1);
  if (r === "%" && n !== "%")
    throw new ie("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new ie("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return Xt(e, Si, function(i, a, c, y) {
    o[o.length] = c ? Xt(y, Ei, "$1") : a || i;
  }), o;
}, Oi = function(e, r) {
  var n = e, o;
  if (Ce(Qt, n) && (o = Qt[n], n = "%" + o[0] + "%"), Ce(Y, n)) {
    var i = Y[n];
    if (i === ne && (i = gi(n)), typeof i > "u" && !r)
      throw new oe("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: n,
      value: i
    };
  }
  throw new ie("intrinsic " + e + " does not exist!");
}, ue = function(e, r) {
  if (typeof e != "string" || e.length === 0)
    throw new oe("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new oe('"allowMissing" argument must be a boolean');
  if (wi(/^%?[^%]*%?$/, e) === null)
    throw new ie("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = Ai(e), o = n.length > 0 ? n[0] : "", i = Oi("%" + o + "%", r), a = i.name, c = i.value, y = !1, d = i.alias;
  d && (o = d[0], vi(n, bi([0, 1], d)));
  for (var p = 1, b = !0; p < n.length; p += 1) {
    var v = n[p], A = De(v, 0, 1), w = De(v, -1);
    if ((A === '"' || A === "'" || A === "`" || w === '"' || w === "'" || w === "`") && A !== w)
      throw new ie("property names with quotes must have matching quotes");
    if ((v === "constructor" || !b) && (y = !0), o += "." + v, a = "%" + o + "%", Ce(Y, a))
      c = Y[a];
    else if (c != null) {
      if (!(v in c)) {
        if (!r)
          throw new oe("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (X && p + 1 >= n.length) {
        var E = X(c, v);
        b = !!E, b && "get" in E && !("originalValue" in E.get) ? c = E.get : c = c[v];
      } else
        b = Ce(c, v), c = c[v];
      b && !y && (Y[a] = c);
    }
  }
  return c;
}, Wr = { exports: {} }, Xe, Yt;
function Pt() {
  if (Yt) return Xe;
  Yt = 1;
  var t = ue, e = t("%Object.defineProperty%", !0) || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Xe = e, Xe;
}
var Ri = ue, Fe = Ri("%Object.getOwnPropertyDescriptor%", !0);
if (Fe)
  try {
    Fe([], "length");
  } catch {
    Fe = null;
  }
var zr = Fe, Zt = Pt(), Pi = jr, re = Se, er = zr, Ti = function(e, r, n) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new re("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new re("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new re("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new re("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new re("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new re("`loose`, if provided, must be a boolean");
  var o = arguments.length > 3 ? arguments[3] : null, i = arguments.length > 4 ? arguments[4] : null, a = arguments.length > 5 ? arguments[5] : null, c = arguments.length > 6 ? arguments[6] : !1, y = !!er && er(e, r);
  if (Zt)
    Zt(e, r, {
      configurable: a === null && y ? y.configurable : !a,
      enumerable: o === null && y ? y.enumerable : !o,
      value: n,
      writable: i === null && y ? y.writable : !i
    });
  else if (c || !o && !i && !a)
    e[r] = n;
  else
    throw new Pi("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, yt = Pt(), kr = function() {
  return !!yt;
};
kr.hasArrayLengthDefineBug = function() {
  if (!yt)
    return null;
  try {
    return yt([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var xi = kr, Fi = ue, tr = Ti, _i = xi(), rr = zr, nr = Se, Bi = Fi("%Math.floor%"), Ii = function(e, r) {
  if (typeof e != "function")
    throw new nr("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || Bi(r) !== r)
    throw new nr("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], o = !0, i = !0;
  if ("length" in e && rr) {
    var a = rr(e, "length");
    a && !a.configurable && (o = !1), a && !a.writable && (i = !1);
  }
  return (o || i || !n) && (_i ? tr(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    r,
    !0,
    !0
  ) : tr(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    r
  )), e;
};
(function(t) {
  var e = Rt, r = ue, n = Ii, o = Se, i = r("%Function.prototype.apply%"), a = r("%Function.prototype.call%"), c = r("%Reflect.apply%", !0) || e.call(a, i), y = Pt(), d = r("%Math.max%");
  t.exports = function(v) {
    if (typeof v != "function")
      throw new o("a function is required");
    var A = c(e, a, arguments);
    return n(
      A,
      1 + d(0, v.length - (arguments.length - 1)),
      !0
    );
  };
  var p = function() {
    return c(e, i, arguments);
  };
  y ? y(t.exports, "apply", { value: p }) : t.exports.apply = p;
})(Wr);
var Ci = Wr.exports, Gr = ue, Jr = Ci, Di = Jr(Gr("String.prototype.indexOf")), Ni = function(e, r) {
  var n = Gr(e, !!r);
  return typeof n == "function" && Di(e, ".prototype.") > -1 ? Jr(n) : n;
};
const $i = {}, Li = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $i
}, Symbol.toStringTag, { value: "Module" })), Ui = /* @__PURE__ */ Mo(Li);
var Tt = typeof Map == "function" && Map.prototype, Ye = Object.getOwnPropertyDescriptor && Tt ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Ne = Tt && Ye && typeof Ye.get == "function" ? Ye.get : null, or = Tt && Map.prototype.forEach, xt = typeof Set == "function" && Set.prototype, Ze = Object.getOwnPropertyDescriptor && xt ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, $e = xt && Ze && typeof Ze.get == "function" ? Ze.get : null, ir = xt && Set.prototype.forEach, Mi = typeof WeakMap == "function" && WeakMap.prototype, he = Mi ? WeakMap.prototype.has : null, qi = typeof WeakSet == "function" && WeakSet.prototype, me = qi ? WeakSet.prototype.has : null, ji = typeof WeakRef == "function" && WeakRef.prototype, ar = ji ? WeakRef.prototype.deref : null, Hi = Boolean.prototype.valueOf, Wi = Object.prototype.toString, zi = Function.prototype.toString, ki = String.prototype.match, Ft = String.prototype.slice, J = String.prototype.replace, Gi = String.prototype.toUpperCase, sr = String.prototype.toLowerCase, Vr = RegExp.prototype.test, lr = Array.prototype.concat, H = Array.prototype.join, Ji = Array.prototype.slice, cr = Math.floor, dt = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, et = Object.getOwnPropertySymbols, ht = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, ae = typeof Symbol == "function" && typeof Symbol.iterator == "object", C = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === ae || !0) ? Symbol.toStringTag : null, Kr = Object.prototype.propertyIsEnumerable, ur = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function fr(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Vr.call(/e/, e))
    return e;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var n = t < 0 ? -cr(-t) : cr(t);
    if (n !== t) {
      var o = String(n), i = Ft.call(e, o.length + 1);
      return J.call(o, r, "$&_") + "." + J.call(J.call(i, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return J.call(e, r, "$&_");
}
var mt = Ui, pr = mt.custom, yr = Xr(pr) ? pr : null, Vi = function t(e, r, n, o) {
  var i = r || {};
  if (G(i, "quoteStyle") && i.quoteStyle !== "single" && i.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (G(i, "maxStringLength") && (typeof i.maxStringLength == "number" ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0 : i.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var a = G(i, "customInspect") ? i.customInspect : !0;
  if (typeof a != "boolean" && a !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (G(i, "indent") && i.indent !== null && i.indent !== "	" && !(parseInt(i.indent, 10) === i.indent && i.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (G(i, "numericSeparator") && typeof i.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var c = i.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return Zr(e, i);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var y = String(e);
    return c ? fr(e, y) : y;
  }
  if (typeof e == "bigint") {
    var d = String(e) + "n";
    return c ? fr(e, d) : d;
  }
  var p = typeof i.depth > "u" ? 5 : i.depth;
  if (typeof n > "u" && (n = 0), n >= p && p > 0 && typeof e == "object")
    return gt(e) ? "[Array]" : "[Object]";
  var b = pa(i, n);
  if (typeof o > "u")
    o = [];
  else if (Yr(o, e) >= 0)
    return "[Circular]";
  function v(L, W, z) {
    if (W && (o = Ji.call(o), o.push(W)), z) {
      var pe = {
        depth: i.depth
      };
      return G(i, "quoteStyle") && (pe.quoteStyle = i.quoteStyle), t(L, pe, n + 1, o);
    }
    return t(L, i, n + 1, o);
  }
  if (typeof e == "function" && !dr(e)) {
    var A = na(e), w = Oe(e, v);
    return "[Function" + (A ? ": " + A : " (anonymous)") + "]" + (w.length > 0 ? " { " + H.call(w, ", ") + " }" : "");
  }
  if (Xr(e)) {
    var E = ae ? J.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : ht.call(e);
    return typeof e == "object" && !ae ? de(E) : E;
  }
  if (ca(e)) {
    for (var S = "<" + sr.call(String(e.nodeName)), g = e.attributes || [], h = 0; h < g.length; h++)
      S += " " + g[h].name + "=" + Qr(Ki(g[h].value), "double", i);
    return S += ">", e.childNodes && e.childNodes.length && (S += "..."), S += "</" + sr.call(String(e.nodeName)) + ">", S;
  }
  if (gt(e)) {
    if (e.length === 0)
      return "[]";
    var s = Oe(e, v);
    return b && !fa(s) ? "[" + bt(s, b) + "]" : "[ " + H.call(s, ", ") + " ]";
  }
  if (Xi(e)) {
    var l = Oe(e, v);
    return !("cause" in Error.prototype) && "cause" in e && !Kr.call(e, "cause") ? "{ [" + String(e) + "] " + H.call(lr.call("[cause]: " + v(e.cause), l), ", ") + " }" : l.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + H.call(l, ", ") + " }";
  }
  if (typeof e == "object" && a) {
    if (yr && typeof e[yr] == "function" && mt)
      return mt(e, { depth: p - n });
    if (a !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (oa(e)) {
    var f = [];
    return or && or.call(e, function(L, W) {
      f.push(v(W, e, !0) + " => " + v(L, e));
    }), hr("Map", Ne.call(e), f, b);
  }
  if (sa(e)) {
    var u = [];
    return ir && ir.call(e, function(L) {
      u.push(v(L, e));
    }), hr("Set", $e.call(e), u, b);
  }
  if (ia(e))
    return tt("WeakMap");
  if (la(e))
    return tt("WeakSet");
  if (aa(e))
    return tt("WeakRef");
  if (Zi(e))
    return de(v(Number(e)));
  if (ta(e))
    return de(v(dt.call(e)));
  if (ea(e))
    return de(Hi.call(e));
  if (Yi(e))
    return de(v(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && e === globalThis || typeof Jt < "u" && e === Jt)
    return "{ [object globalThis] }";
  if (!Qi(e) && !dr(e)) {
    var P = Oe(e, v), B = ur ? ur(e) === Object.prototype : e instanceof Object || e.constructor === Object, I = e instanceof Object ? "" : "null prototype", $ = !B && C && Object(e) === e && C in e ? Ft.call(V(e), 8, -1) : I ? "Object" : "", Ae = B || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", ee = Ae + ($ || I ? "[" + H.call(lr.call([], $ || [], I || []), ": ") + "] " : "");
    return P.length === 0 ? ee + "{}" : b ? ee + "{" + bt(P, b) + "}" : ee + "{ " + H.call(P, ", ") + " }";
  }
  return String(e);
};
function Qr(t, e, r) {
  var n = (r.quoteStyle || e) === "double" ? '"' : "'";
  return n + t + n;
}
function Ki(t) {
  return J.call(String(t), /"/g, "&quot;");
}
function gt(t) {
  return V(t) === "[object Array]" && (!C || !(typeof t == "object" && C in t));
}
function Qi(t) {
  return V(t) === "[object Date]" && (!C || !(typeof t == "object" && C in t));
}
function dr(t) {
  return V(t) === "[object RegExp]" && (!C || !(typeof t == "object" && C in t));
}
function Xi(t) {
  return V(t) === "[object Error]" && (!C || !(typeof t == "object" && C in t));
}
function Yi(t) {
  return V(t) === "[object String]" && (!C || !(typeof t == "object" && C in t));
}
function Zi(t) {
  return V(t) === "[object Number]" && (!C || !(typeof t == "object" && C in t));
}
function ea(t) {
  return V(t) === "[object Boolean]" && (!C || !(typeof t == "object" && C in t));
}
function Xr(t) {
  if (ae)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !ht)
    return !1;
  try {
    return ht.call(t), !0;
  } catch {
  }
  return !1;
}
function ta(t) {
  if (!t || typeof t != "object" || !dt)
    return !1;
  try {
    return dt.call(t), !0;
  } catch {
  }
  return !1;
}
var ra = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function G(t, e) {
  return ra.call(t, e);
}
function V(t) {
  return Wi.call(t);
}
function na(t) {
  if (t.name)
    return t.name;
  var e = ki.call(zi.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function Yr(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var r = 0, n = t.length; r < n; r++)
    if (t[r] === e)
      return r;
  return -1;
}
function oa(t) {
  if (!Ne || !t || typeof t != "object")
    return !1;
  try {
    Ne.call(t);
    try {
      $e.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function ia(t) {
  if (!he || !t || typeof t != "object")
    return !1;
  try {
    he.call(t, he);
    try {
      me.call(t, me);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function aa(t) {
  if (!ar || !t || typeof t != "object")
    return !1;
  try {
    return ar.call(t), !0;
  } catch {
  }
  return !1;
}
function sa(t) {
  if (!$e || !t || typeof t != "object")
    return !1;
  try {
    $e.call(t);
    try {
      Ne.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function la(t) {
  if (!me || !t || typeof t != "object")
    return !1;
  try {
    me.call(t, me);
    try {
      he.call(t, he);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {
  }
  return !1;
}
function ca(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function Zr(t, e) {
  if (t.length > e.maxStringLength) {
    var r = t.length - e.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return Zr(Ft.call(t, 0, e.maxStringLength), e) + n;
  }
  var o = J.call(J.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, ua);
  return Qr(o, "single", e);
}
function ua(t) {
  var e = t.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + Gi.call(e.toString(16));
}
function de(t) {
  return "Object(" + t + ")";
}
function tt(t) {
  return t + " { ? }";
}
function hr(t, e, r, n) {
  var o = n ? bt(r, n) : H.call(r, ", ");
  return t + " (" + e + ") {" + o + "}";
}
function fa(t) {
  for (var e = 0; e < t.length; e++)
    if (Yr(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function pa(t, e) {
  var r;
  if (t.indent === "	")
    r = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    r = H.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: H.call(Array(e + 1), r)
  };
}
function bt(t, e) {
  if (t.length === 0)
    return "";
  var r = `
` + e.prev + e.base;
  return r + H.call(t, "," + r) + `
` + e.prev;
}
function Oe(t, e) {
  var r = gt(t), n = [];
  if (r) {
    n.length = t.length;
    for (var o = 0; o < t.length; o++)
      n[o] = G(t, o) ? e(t[o], t) : "";
  }
  var i = typeof et == "function" ? et(t) : [], a;
  if (ae) {
    a = {};
    for (var c = 0; c < i.length; c++)
      a["$" + i[c]] = i[c];
  }
  for (var y in t)
    G(t, y) && (r && String(Number(y)) === y && y < t.length || ae && a["$" + y] instanceof Symbol || (Vr.call(/[^\w$]/, y) ? n.push(e(y, t) + ": " + e(t[y], t)) : n.push(y + ": " + e(t[y], t))));
  if (typeof et == "function")
    for (var d = 0; d < i.length; d++)
      Kr.call(t, i[d]) && n.push("[" + e(i[d]) + "]: " + e(t[i[d]], t));
  return n;
}
var en = ue, fe = Ni, ya = Vi, da = Se, Re = en("%WeakMap%", !0), Pe = en("%Map%", !0), ha = fe("WeakMap.prototype.get", !0), ma = fe("WeakMap.prototype.set", !0), ga = fe("WeakMap.prototype.has", !0), ba = fe("Map.prototype.get", !0), va = fe("Map.prototype.set", !0), wa = fe("Map.prototype.has", !0), _t = function(t, e) {
  for (var r = t, n; (n = r.next) !== null; r = n)
    if (n.key === e)
      return r.next = n.next, n.next = /** @type {NonNullable<typeof list.next>} */
      t.next, t.next = n, n;
}, Sa = function(t, e) {
  var r = _t(t, e);
  return r && r.value;
}, Ea = function(t, e, r) {
  var n = _t(t, e);
  n ? n.value = r : t.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: e,
    next: t.next,
    value: r
  };
}, Aa = function(t, e) {
  return !!_t(t, e);
}, Oa = function() {
  var e, r, n, o = {
    assert: function(i) {
      if (!o.has(i))
        throw new da("Side channel does not contain " + ya(i));
    },
    get: function(i) {
      if (Re && i && (typeof i == "object" || typeof i == "function")) {
        if (e)
          return ha(e, i);
      } else if (Pe) {
        if (r)
          return ba(r, i);
      } else if (n)
        return Sa(n, i);
    },
    has: function(i) {
      if (Re && i && (typeof i == "object" || typeof i == "function")) {
        if (e)
          return ga(e, i);
      } else if (Pe) {
        if (r)
          return wa(r, i);
      } else if (n)
        return Aa(n, i);
      return !1;
    },
    set: function(i, a) {
      Re && i && (typeof i == "object" || typeof i == "function") ? (e || (e = new Re()), ma(e, i, a)) : Pe ? (r || (r = new Pe()), va(r, i, a)) : (n || (n = { key: {}, next: null }), Ea(n, i, a));
    }
  };
  return o;
}, Ra = String.prototype.replace, Pa = /%20/g, rt = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Bt = {
  default: rt.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return Ra.call(t, Pa, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: rt.RFC1738,
  RFC3986: rt.RFC3986
}, Ta = Bt, nt = Object.prototype.hasOwnProperty, K = Array.isArray, q = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), xa = function(e) {
  for (; e.length > 1; ) {
    var r = e.pop(), n = r.obj[r.prop];
    if (K(n)) {
      for (var o = [], i = 0; i < n.length; ++i)
        typeof n[i] < "u" && o.push(n[i]);
      r.obj[r.prop] = o;
    }
  }
}, tn = function(e, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o = 0; o < e.length; ++o)
    typeof e[o] < "u" && (n[o] = e[o]);
  return n;
}, Fa = function t(e, r, n) {
  if (!r)
    return e;
  if (typeof r != "object") {
    if (K(e))
      e.push(r);
    else if (e && typeof e == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !nt.call(Object.prototype, r)) && (e[r] = !0);
    else
      return [e, r];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(r);
  var o = e;
  return K(e) && !K(r) && (o = tn(e, n)), K(e) && K(r) ? (r.forEach(function(i, a) {
    if (nt.call(e, a)) {
      var c = e[a];
      c && typeof c == "object" && i && typeof i == "object" ? e[a] = t(c, i, n) : e.push(i);
    } else
      e[a] = i;
  }), e) : Object.keys(r).reduce(function(i, a) {
    var c = r[a];
    return nt.call(i, a) ? i[a] = t(i[a], c, n) : i[a] = c, i;
  }, o);
}, _a = function(e, r) {
  return Object.keys(r).reduce(function(n, o) {
    return n[o] = r[o], n;
  }, e);
}, Ba = function(t, e, r) {
  var n = t.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, ot = 1024, Ia = function(e, r, n, o, i) {
  if (e.length === 0)
    return e;
  var a = e;
  if (typeof e == "symbol" ? a = Symbol.prototype.toString.call(e) : typeof e != "string" && (a = String(e)), n === "iso-8859-1")
    return escape(a).replace(/%u[0-9a-f]{4}/gi, function(A) {
      return "%26%23" + parseInt(A.slice(2), 16) + "%3B";
    });
  for (var c = "", y = 0; y < a.length; y += ot) {
    for (var d = a.length >= ot ? a.slice(y, y + ot) : a, p = [], b = 0; b < d.length; ++b) {
      var v = d.charCodeAt(b);
      if (v === 45 || v === 46 || v === 95 || v === 126 || v >= 48 && v <= 57 || v >= 65 && v <= 90 || v >= 97 && v <= 122 || i === Ta.RFC1738 && (v === 40 || v === 41)) {
        p[p.length] = d.charAt(b);
        continue;
      }
      if (v < 128) {
        p[p.length] = q[v];
        continue;
      }
      if (v < 2048) {
        p[p.length] = q[192 | v >> 6] + q[128 | v & 63];
        continue;
      }
      if (v < 55296 || v >= 57344) {
        p[p.length] = q[224 | v >> 12] + q[128 | v >> 6 & 63] + q[128 | v & 63];
        continue;
      }
      b += 1, v = 65536 + ((v & 1023) << 10 | d.charCodeAt(b) & 1023), p[p.length] = q[240 | v >> 18] + q[128 | v >> 12 & 63] + q[128 | v >> 6 & 63] + q[128 | v & 63];
    }
    c += p.join("");
  }
  return c;
}, Ca = function(e) {
  for (var r = [{ obj: { o: e }, prop: "o" }], n = [], o = 0; o < r.length; ++o)
    for (var i = r[o], a = i.obj[i.prop], c = Object.keys(a), y = 0; y < c.length; ++y) {
      var d = c[y], p = a[d];
      typeof p == "object" && p !== null && n.indexOf(p) === -1 && (r.push({ obj: a, prop: d }), n.push(p));
    }
  return xa(r), e;
}, Da = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, Na = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, $a = function(e, r) {
  return [].concat(e, r);
}, La = function(e, r) {
  if (K(e)) {
    for (var n = [], o = 0; o < e.length; o += 1)
      n.push(r(e[o]));
    return n;
  }
  return r(e);
}, rn = {
  arrayToObject: tn,
  assign: _a,
  combine: $a,
  compact: Ca,
  decode: Ba,
  encode: Ia,
  isBuffer: Na,
  isRegExp: Da,
  maybeMap: La,
  merge: Fa
}, nn = Oa, _e = rn, ge = Bt, Ua = Object.prototype.hasOwnProperty, on = {
  brackets: function(e) {
    return e + "[]";
  },
  comma: "comma",
  indices: function(e, r) {
    return e + "[" + r + "]";
  },
  repeat: function(e) {
    return e;
  }
}, j = Array.isArray, Ma = Array.prototype.push, an = function(t, e) {
  Ma.apply(t, j(e) ? e : [e]);
}, qa = Date.prototype.toISOString, mr = ge.default, F = {
  addQueryPrefix: !1,
  allowDots: !1,
  allowEmptyArrays: !1,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encodeDotInKeys: !1,
  encoder: _e.encode,
  encodeValuesOnly: !1,
  format: mr,
  formatter: ge.formatters[mr],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return qa.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, ja = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, it = {}, Ha = function t(e, r, n, o, i, a, c, y, d, p, b, v, A, w, E, S, g, h) {
  for (var s = e, l = h, f = 0, u = !1; (l = l.get(it)) !== void 0 && !u; ) {
    var P = l.get(e);
    if (f += 1, typeof P < "u") {
      if (P === f)
        throw new RangeError("Cyclic object value");
      u = !0;
    }
    typeof l.get(it) > "u" && (f = 0);
  }
  if (typeof p == "function" ? s = p(r, s) : s instanceof Date ? s = A(s) : n === "comma" && j(s) && (s = _e.maybeMap(s, function(We) {
    return We instanceof Date ? A(We) : We;
  })), s === null) {
    if (a)
      return d && !S ? d(r, F.encoder, g, "key", w) : r;
    s = "";
  }
  if (ja(s) || _e.isBuffer(s)) {
    if (d) {
      var B = S ? r : d(r, F.encoder, g, "key", w);
      return [E(B) + "=" + E(d(s, F.encoder, g, "value", w))];
    }
    return [E(r) + "=" + E(String(s))];
  }
  var I = [];
  if (typeof s > "u")
    return I;
  var $;
  if (n === "comma" && j(s))
    S && d && (s = _e.maybeMap(s, d)), $ = [{ value: s.length > 0 ? s.join(",") || null : void 0 }];
  else if (j(p))
    $ = p;
  else {
    var Ae = Object.keys(s);
    $ = b ? Ae.sort(b) : Ae;
  }
  var ee = y ? r.replace(/\./g, "%2E") : r, L = o && j(s) && s.length === 1 ? ee + "[]" : ee;
  if (i && j(s) && s.length === 0)
    return L + "[]";
  for (var W = 0; W < $.length; ++W) {
    var z = $[W], pe = typeof z == "object" && typeof z.value < "u" ? z.value : s[z];
    if (!(c && pe === null)) {
      var He = v && y ? z.replace(/\./g, "%2E") : z, cn = j(s) ? typeof n == "function" ? n(L, He) : L : L + (v ? "." + He : "[" + He + "]");
      h.set(e, f);
      var It = nn();
      It.set(it, h), an(I, t(
        pe,
        cn,
        n,
        o,
        i,
        a,
        c,
        y,
        n === "comma" && S && j(s) ? null : d,
        p,
        b,
        v,
        A,
        w,
        E,
        S,
        g,
        It
      ));
    }
  }
  return I;
}, Wa = function(e) {
  if (!e)
    return F;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.encodeDotInKeys < "u" && typeof e.encodeDotInKeys != "boolean")
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = e.charset || F.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = ge.default;
  if (typeof e.format < "u") {
    if (!Ua.call(ge.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var o = ge.formatters[n], i = F.filter;
  (typeof e.filter == "function" || j(e.filter)) && (i = e.filter);
  var a;
  if (e.arrayFormat in on ? a = e.arrayFormat : "indices" in e ? a = e.indices ? "indices" : "repeat" : a = F.arrayFormat, "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var c = typeof e.allowDots > "u" ? e.encodeDotInKeys === !0 ? !0 : F.allowDots : !!e.allowDots;
  return {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : F.addQueryPrefix,
    allowDots: c,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : F.allowEmptyArrays,
    arrayFormat: a,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : F.charsetSentinel,
    commaRoundTrip: e.commaRoundTrip,
    delimiter: typeof e.delimiter > "u" ? F.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : F.encode,
    encodeDotInKeys: typeof e.encodeDotInKeys == "boolean" ? e.encodeDotInKeys : F.encodeDotInKeys,
    encoder: typeof e.encoder == "function" ? e.encoder : F.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : F.encodeValuesOnly,
    filter: i,
    format: n,
    formatter: o,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : F.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : F.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : F.strictNullHandling
  };
}, za = function(t, e) {
  var r = t, n = Wa(e), o, i;
  typeof n.filter == "function" ? (i = n.filter, r = i("", r)) : j(n.filter) && (i = n.filter, o = i);
  var a = [];
  if (typeof r != "object" || r === null)
    return "";
  var c = on[n.arrayFormat], y = c === "comma" && n.commaRoundTrip;
  o || (o = Object.keys(r)), n.sort && o.sort(n.sort);
  for (var d = nn(), p = 0; p < o.length; ++p) {
    var b = o[p];
    n.skipNulls && r[b] === null || an(a, Ha(
      r[b],
      b,
      c,
      y,
      n.allowEmptyArrays,
      n.strictNullHandling,
      n.skipNulls,
      n.encodeDotInKeys,
      n.encode ? n.encoder : null,
      n.filter,
      n.sort,
      n.allowDots,
      n.serializeDate,
      n.format,
      n.formatter,
      n.encodeValuesOnly,
      n.charset,
      d
    ));
  }
  var v = a.join(n.delimiter), A = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? A += "utf8=%26%2310003%3B&" : A += "utf8=%E2%9C%93&"), v.length > 0 ? A + v : "";
}, se = rn, vt = Object.prototype.hasOwnProperty, ka = Array.isArray, T = {
  allowDots: !1,
  allowEmptyArrays: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decodeDotInKeys: !1,
  decoder: se.decode,
  delimiter: "&",
  depth: 5,
  duplicates: "combine",
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, Ga = function(t) {
  return t.replace(/&#(\d+);/g, function(e, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, sn = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, Ja = "utf8=%26%2310003%3B", Va = "utf8=%E2%9C%93", Ka = function(e, r) {
  var n = { __proto__: null }, o = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, i = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, a = o.split(r.delimiter, i), c = -1, y, d = r.charset;
  if (r.charsetSentinel)
    for (y = 0; y < a.length; ++y)
      a[y].indexOf("utf8=") === 0 && (a[y] === Va ? d = "utf-8" : a[y] === Ja && (d = "iso-8859-1"), c = y, y = a.length);
  for (y = 0; y < a.length; ++y)
    if (y !== c) {
      var p = a[y], b = p.indexOf("]="), v = b === -1 ? p.indexOf("=") : b + 1, A, w;
      v === -1 ? (A = r.decoder(p, T.decoder, d, "key"), w = r.strictNullHandling ? null : "") : (A = r.decoder(p.slice(0, v), T.decoder, d, "key"), w = se.maybeMap(
        sn(p.slice(v + 1), r),
        function(S) {
          return r.decoder(S, T.decoder, d, "value");
        }
      )), w && r.interpretNumericEntities && d === "iso-8859-1" && (w = Ga(w)), p.indexOf("[]=") > -1 && (w = ka(w) ? [w] : w);
      var E = vt.call(n, A);
      E && r.duplicates === "combine" ? n[A] = se.combine(n[A], w) : (!E || r.duplicates === "last") && (n[A] = w);
    }
  return n;
}, Qa = function(t, e, r, n) {
  for (var o = n ? e : sn(e, r), i = t.length - 1; i >= 0; --i) {
    var a, c = t[i];
    if (c === "[]" && r.parseArrays)
      a = r.allowEmptyArrays && o === "" ? [] : [].concat(o);
    else {
      a = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var y = c.charAt(0) === "[" && c.charAt(c.length - 1) === "]" ? c.slice(1, -1) : c, d = r.decodeDotInKeys ? y.replace(/%2E/g, ".") : y, p = parseInt(d, 10);
      !r.parseArrays && d === "" ? a = { 0: o } : !isNaN(p) && c !== d && String(p) === d && p >= 0 && r.parseArrays && p <= r.arrayLimit ? (a = [], a[p] = o) : d !== "__proto__" && (a[d] = o);
    }
    o = a;
  }
  return o;
}, Xa = function(e, r, n, o) {
  if (e) {
    var i = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, a = /(\[[^[\]]*])/, c = /(\[[^[\]]*])/g, y = n.depth > 0 && a.exec(i), d = y ? i.slice(0, y.index) : i, p = [];
    if (d) {
      if (!n.plainObjects && vt.call(Object.prototype, d) && !n.allowPrototypes)
        return;
      p.push(d);
    }
    for (var b = 0; n.depth > 0 && (y = c.exec(i)) !== null && b < n.depth; ) {
      if (b += 1, !n.plainObjects && vt.call(Object.prototype, y[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      p.push(y[1]);
    }
    return y && p.push("[" + i.slice(y.index) + "]"), Qa(p, r, n, o);
  }
}, Ya = function(e) {
  if (!e)
    return T;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.decodeDotInKeys < "u" && typeof e.decodeDotInKeys != "boolean")
    throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.decoder !== null && typeof e.decoder < "u" && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof e.charset > "u" ? T.charset : e.charset, n = typeof e.duplicates > "u" ? T.duplicates : e.duplicates;
  if (n !== "combine" && n !== "first" && n !== "last")
    throw new TypeError("The duplicates option must be either combine, first, or last");
  var o = typeof e.allowDots > "u" ? e.decodeDotInKeys === !0 ? !0 : T.allowDots : !!e.allowDots;
  return {
    allowDots: o,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : T.allowEmptyArrays,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : T.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : T.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : T.arrayLimit,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : T.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : T.comma,
    decodeDotInKeys: typeof e.decodeDotInKeys == "boolean" ? e.decodeDotInKeys : T.decodeDotInKeys,
    decoder: typeof e.decoder == "function" ? e.decoder : T.decoder,
    delimiter: typeof e.delimiter == "string" || se.isRegExp(e.delimiter) ? e.delimiter : T.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : T.depth,
    duplicates: n,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : T.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : T.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : T.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : T.strictNullHandling
  };
}, Za = function(t, e) {
  var r = Ya(e);
  if (t === "" || t === null || typeof t > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof t == "string" ? Ka(t, r) : t, o = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = Object.keys(n), a = 0; a < i.length; ++a) {
    var c = i[a], y = Xa(c, n[c], r, typeof t == "string");
    o = se.merge(o, y, r);
  }
  return r.allowSparse === !0 ? o : se.compact(o);
}, es = za, ts = Za, rs = Bt, ns = {
  formats: rs,
  parse: ts,
  stringify: es
};
const os = /* @__PURE__ */ qr(ns), is = x.create({
  timeout: 60 * 1e3
  // 请求超时时间
}), Os = (t) => {
  let {
    baseUrl: e,
    url: r,
    param: n = null,
    method: o = "POST",
    returnPromise: i = !1,
    errorResponse: a,
    callback: c,
    axiosInstance: y,
    qsOptions: d = { allowDots: !0 },
    interceptors: p
  } = t || {};
  if (!e || !r)
    throw new Error("baseUrl and url are required");
  const b = y || is;
  let v = n;
  n instanceof FormData || (v = os.stringify(n, d)), o.toUpperCase() === "GET" && (r += `?${v}`, v = "");
  const w = Object.assign({
    baseURL: e,
    url: r,
    method: o,
    data: v
  }, b.defaults);
  p && p(b);
  const E = b(w);
  if (i)
    return E;
  E.then((S) => {
    S && S.data && c && c(S.data);
  }).catch((S) => {
    console.error("An error occurred on the request:", S);
    const g = a ? a(S) : { code: 500, data: S, message: `An error occurred on the request: ${S}`, success: !1 };
    c && c(g);
  });
}, Rs = (t, e) => t.length === 0 ? Promise.resolve([]) : new Promise((r) => {
  let n = 0;
  const o = [];
  let i = 0;
  async function a() {
    const c = n, y = t[n];
    n++;
    try {
      const d = await y;
      o[c] = d;
    } catch (d) {
      o[c] = d;
    } finally {
      i++, i === t.length && r(o), n < t.length && a();
    }
  }
  for (let c = 0; c < Math.min(t.length, e); c++)
    a();
});
class Ps {
  /**
   * 初始化事件处理器
   *
   * @param {ReadonlyArray<T>} eventNames 事件名数组
   */
  constructor(e) {
    // 存储监听器
    Ct(this, "listeners", {});
    this.eventNames = e, this.eventNames.forEach((r) => {
      this.listeners[r] = /* @__PURE__ */ new Set();
    });
  }
  /**
   * 添加监听事件
   *
   * @param {K} eventName 事件名称
   * @param {Function} listener 事件处理函数
   */
  on(e, r) {
    if (!this.listeners[e])
      throw new Error(`Event ${e} does not exist`);
    this.listeners[e].add(r);
  }
  /**
   * 移除监听事件
   *
   * @param {K} eventName 事件名称
   * @param {Function} listener 事件处理函数
   */
  off(e, r) {
    if (!this.listeners[e])
      throw new Error(`Event ${e} does not exist`);
    r ? this.listeners[e].delete(r) : this.listeners[e].clear();
  }
  /**
   * 触发事件
   *
   * @param {K} eventName 事件名称
   * @param {any[]} args 事件传递的参数
   */
  async emit(e, ...r) {
    if (!this.listeners[e])
      throw new Error(`Event ${e} does not exist`);
    const n = Array.from(this.listeners[e]);
    await Promise.all(
      n.map(async (o) => {
        try {
          await o(...r);
        } catch (i) {
          console.error(`An error occurred on the listener for event ${e}:`, i);
        }
      })
    );
  }
}
var ln = { exports: {} };
(function(t, e) {
  (function(r) {
    t.exports = r();
  })(function(r) {
    var n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    function o(g, h) {
      var s = g[0], l = g[1], f = g[2], u = g[3];
      s += (l & f | ~l & u) + h[0] - 680876936 | 0, s = (s << 7 | s >>> 25) + l | 0, u += (s & l | ~s & f) + h[1] - 389564586 | 0, u = (u << 12 | u >>> 20) + s | 0, f += (u & s | ~u & l) + h[2] + 606105819 | 0, f = (f << 17 | f >>> 15) + u | 0, l += (f & u | ~f & s) + h[3] - 1044525330 | 0, l = (l << 22 | l >>> 10) + f | 0, s += (l & f | ~l & u) + h[4] - 176418897 | 0, s = (s << 7 | s >>> 25) + l | 0, u += (s & l | ~s & f) + h[5] + 1200080426 | 0, u = (u << 12 | u >>> 20) + s | 0, f += (u & s | ~u & l) + h[6] - 1473231341 | 0, f = (f << 17 | f >>> 15) + u | 0, l += (f & u | ~f & s) + h[7] - 45705983 | 0, l = (l << 22 | l >>> 10) + f | 0, s += (l & f | ~l & u) + h[8] + 1770035416 | 0, s = (s << 7 | s >>> 25) + l | 0, u += (s & l | ~s & f) + h[9] - 1958414417 | 0, u = (u << 12 | u >>> 20) + s | 0, f += (u & s | ~u & l) + h[10] - 42063 | 0, f = (f << 17 | f >>> 15) + u | 0, l += (f & u | ~f & s) + h[11] - 1990404162 | 0, l = (l << 22 | l >>> 10) + f | 0, s += (l & f | ~l & u) + h[12] + 1804603682 | 0, s = (s << 7 | s >>> 25) + l | 0, u += (s & l | ~s & f) + h[13] - 40341101 | 0, u = (u << 12 | u >>> 20) + s | 0, f += (u & s | ~u & l) + h[14] - 1502002290 | 0, f = (f << 17 | f >>> 15) + u | 0, l += (f & u | ~f & s) + h[15] + 1236535329 | 0, l = (l << 22 | l >>> 10) + f | 0, s += (l & u | f & ~u) + h[1] - 165796510 | 0, s = (s << 5 | s >>> 27) + l | 0, u += (s & f | l & ~f) + h[6] - 1069501632 | 0, u = (u << 9 | u >>> 23) + s | 0, f += (u & l | s & ~l) + h[11] + 643717713 | 0, f = (f << 14 | f >>> 18) + u | 0, l += (f & s | u & ~s) + h[0] - 373897302 | 0, l = (l << 20 | l >>> 12) + f | 0, s += (l & u | f & ~u) + h[5] - 701558691 | 0, s = (s << 5 | s >>> 27) + l | 0, u += (s & f | l & ~f) + h[10] + 38016083 | 0, u = (u << 9 | u >>> 23) + s | 0, f += (u & l | s & ~l) + h[15] - 660478335 | 0, f = (f << 14 | f >>> 18) + u | 0, l += (f & s | u & ~s) + h[4] - 405537848 | 0, l = (l << 20 | l >>> 12) + f | 0, s += (l & u | f & ~u) + h[9] + 568446438 | 0, s = (s << 5 | s >>> 27) + l | 0, u += (s & f | l & ~f) + h[14] - 1019803690 | 0, u = (u << 9 | u >>> 23) + s | 0, f += (u & l | s & ~l) + h[3] - 187363961 | 0, f = (f << 14 | f >>> 18) + u | 0, l += (f & s | u & ~s) + h[8] + 1163531501 | 0, l = (l << 20 | l >>> 12) + f | 0, s += (l & u | f & ~u) + h[13] - 1444681467 | 0, s = (s << 5 | s >>> 27) + l | 0, u += (s & f | l & ~f) + h[2] - 51403784 | 0, u = (u << 9 | u >>> 23) + s | 0, f += (u & l | s & ~l) + h[7] + 1735328473 | 0, f = (f << 14 | f >>> 18) + u | 0, l += (f & s | u & ~s) + h[12] - 1926607734 | 0, l = (l << 20 | l >>> 12) + f | 0, s += (l ^ f ^ u) + h[5] - 378558 | 0, s = (s << 4 | s >>> 28) + l | 0, u += (s ^ l ^ f) + h[8] - 2022574463 | 0, u = (u << 11 | u >>> 21) + s | 0, f += (u ^ s ^ l) + h[11] + 1839030562 | 0, f = (f << 16 | f >>> 16) + u | 0, l += (f ^ u ^ s) + h[14] - 35309556 | 0, l = (l << 23 | l >>> 9) + f | 0, s += (l ^ f ^ u) + h[1] - 1530992060 | 0, s = (s << 4 | s >>> 28) + l | 0, u += (s ^ l ^ f) + h[4] + 1272893353 | 0, u = (u << 11 | u >>> 21) + s | 0, f += (u ^ s ^ l) + h[7] - 155497632 | 0, f = (f << 16 | f >>> 16) + u | 0, l += (f ^ u ^ s) + h[10] - 1094730640 | 0, l = (l << 23 | l >>> 9) + f | 0, s += (l ^ f ^ u) + h[13] + 681279174 | 0, s = (s << 4 | s >>> 28) + l | 0, u += (s ^ l ^ f) + h[0] - 358537222 | 0, u = (u << 11 | u >>> 21) + s | 0, f += (u ^ s ^ l) + h[3] - 722521979 | 0, f = (f << 16 | f >>> 16) + u | 0, l += (f ^ u ^ s) + h[6] + 76029189 | 0, l = (l << 23 | l >>> 9) + f | 0, s += (l ^ f ^ u) + h[9] - 640364487 | 0, s = (s << 4 | s >>> 28) + l | 0, u += (s ^ l ^ f) + h[12] - 421815835 | 0, u = (u << 11 | u >>> 21) + s | 0, f += (u ^ s ^ l) + h[15] + 530742520 | 0, f = (f << 16 | f >>> 16) + u | 0, l += (f ^ u ^ s) + h[2] - 995338651 | 0, l = (l << 23 | l >>> 9) + f | 0, s += (f ^ (l | ~u)) + h[0] - 198630844 | 0, s = (s << 6 | s >>> 26) + l | 0, u += (l ^ (s | ~f)) + h[7] + 1126891415 | 0, u = (u << 10 | u >>> 22) + s | 0, f += (s ^ (u | ~l)) + h[14] - 1416354905 | 0, f = (f << 15 | f >>> 17) + u | 0, l += (u ^ (f | ~s)) + h[5] - 57434055 | 0, l = (l << 21 | l >>> 11) + f | 0, s += (f ^ (l | ~u)) + h[12] + 1700485571 | 0, s = (s << 6 | s >>> 26) + l | 0, u += (l ^ (s | ~f)) + h[3] - 1894986606 | 0, u = (u << 10 | u >>> 22) + s | 0, f += (s ^ (u | ~l)) + h[10] - 1051523 | 0, f = (f << 15 | f >>> 17) + u | 0, l += (u ^ (f | ~s)) + h[1] - 2054922799 | 0, l = (l << 21 | l >>> 11) + f | 0, s += (f ^ (l | ~u)) + h[8] + 1873313359 | 0, s = (s << 6 | s >>> 26) + l | 0, u += (l ^ (s | ~f)) + h[15] - 30611744 | 0, u = (u << 10 | u >>> 22) + s | 0, f += (s ^ (u | ~l)) + h[6] - 1560198380 | 0, f = (f << 15 | f >>> 17) + u | 0, l += (u ^ (f | ~s)) + h[13] + 1309151649 | 0, l = (l << 21 | l >>> 11) + f | 0, s += (f ^ (l | ~u)) + h[4] - 145523070 | 0, s = (s << 6 | s >>> 26) + l | 0, u += (l ^ (s | ~f)) + h[11] - 1120210379 | 0, u = (u << 10 | u >>> 22) + s | 0, f += (s ^ (u | ~l)) + h[2] + 718787259 | 0, f = (f << 15 | f >>> 17) + u | 0, l += (u ^ (f | ~s)) + h[9] - 343485551 | 0, l = (l << 21 | l >>> 11) + f | 0, g[0] = s + g[0] | 0, g[1] = l + g[1] | 0, g[2] = f + g[2] | 0, g[3] = u + g[3] | 0;
    }
    function i(g) {
      var h = [], s;
      for (s = 0; s < 64; s += 4)
        h[s >> 2] = g.charCodeAt(s) + (g.charCodeAt(s + 1) << 8) + (g.charCodeAt(s + 2) << 16) + (g.charCodeAt(s + 3) << 24);
      return h;
    }
    function a(g) {
      var h = [], s;
      for (s = 0; s < 64; s += 4)
        h[s >> 2] = g[s] + (g[s + 1] << 8) + (g[s + 2] << 16) + (g[s + 3] << 24);
      return h;
    }
    function c(g) {
      var h = g.length, s = [1732584193, -271733879, -1732584194, 271733878], l, f, u, P, B, I;
      for (l = 64; l <= h; l += 64)
        o(s, i(g.substring(l - 64, l)));
      for (g = g.substring(l - 64), f = g.length, u = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], l = 0; l < f; l += 1)
        u[l >> 2] |= g.charCodeAt(l) << (l % 4 << 3);
      if (u[l >> 2] |= 128 << (l % 4 << 3), l > 55)
        for (o(s, u), l = 0; l < 16; l += 1)
          u[l] = 0;
      return P = h * 8, P = P.toString(16).match(/(.*?)(.{0,8})$/), B = parseInt(P[2], 16), I = parseInt(P[1], 16) || 0, u[14] = B, u[15] = I, o(s, u), s;
    }
    function y(g) {
      var h = g.length, s = [1732584193, -271733879, -1732584194, 271733878], l, f, u, P, B, I;
      for (l = 64; l <= h; l += 64)
        o(s, a(g.subarray(l - 64, l)));
      for (g = l - 64 < h ? g.subarray(l - 64) : new Uint8Array(0), f = g.length, u = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], l = 0; l < f; l += 1)
        u[l >> 2] |= g[l] << (l % 4 << 3);
      if (u[l >> 2] |= 128 << (l % 4 << 3), l > 55)
        for (o(s, u), l = 0; l < 16; l += 1)
          u[l] = 0;
      return P = h * 8, P = P.toString(16).match(/(.*?)(.{0,8})$/), B = parseInt(P[2], 16), I = parseInt(P[1], 16) || 0, u[14] = B, u[15] = I, o(s, u), s;
    }
    function d(g) {
      var h = "", s;
      for (s = 0; s < 4; s += 1)
        h += n[g >> s * 8 + 4 & 15] + n[g >> s * 8 & 15];
      return h;
    }
    function p(g) {
      var h;
      for (h = 0; h < g.length; h += 1)
        g[h] = d(g[h]);
      return g.join("");
    }
    p(c("hello")), typeof ArrayBuffer < "u" && !ArrayBuffer.prototype.slice && function() {
      function g(h, s) {
        return h = h | 0 || 0, h < 0 ? Math.max(h + s, 0) : Math.min(h, s);
      }
      ArrayBuffer.prototype.slice = function(h, s) {
        var l = this.byteLength, f = g(h, l), u = l, P, B, I, $;
        return s !== r && (u = g(s, l)), f > u ? new ArrayBuffer(0) : (P = u - f, B = new ArrayBuffer(P), I = new Uint8Array(B), $ = new Uint8Array(this, f, P), I.set($), B);
      };
    }();
    function b(g) {
      return /[\u0080-\uFFFF]/.test(g) && (g = unescape(encodeURIComponent(g))), g;
    }
    function v(g, h) {
      var s = g.length, l = new ArrayBuffer(s), f = new Uint8Array(l), u;
      for (u = 0; u < s; u += 1)
        f[u] = g.charCodeAt(u);
      return h ? f : l;
    }
    function A(g) {
      return String.fromCharCode.apply(null, new Uint8Array(g));
    }
    function w(g, h, s) {
      var l = new Uint8Array(g.byteLength + h.byteLength);
      return l.set(new Uint8Array(g)), l.set(new Uint8Array(h), g.byteLength), l;
    }
    function E(g) {
      var h = [], s = g.length, l;
      for (l = 0; l < s - 1; l += 2)
        h.push(parseInt(g.substr(l, 2), 16));
      return String.fromCharCode.apply(String, h);
    }
    function S() {
      this.reset();
    }
    return S.prototype.append = function(g) {
      return this.appendBinary(b(g)), this;
    }, S.prototype.appendBinary = function(g) {
      this._buff += g, this._length += g.length;
      var h = this._buff.length, s;
      for (s = 64; s <= h; s += 64)
        o(this._hash, i(this._buff.substring(s - 64, s)));
      return this._buff = this._buff.substring(s - 64), this;
    }, S.prototype.end = function(g) {
      var h = this._buff, s = h.length, l, f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], u;
      for (l = 0; l < s; l += 1)
        f[l >> 2] |= h.charCodeAt(l) << (l % 4 << 3);
      return this._finish(f, s), u = p(this._hash), g && (u = E(u)), this.reset(), u;
    }, S.prototype.reset = function() {
      return this._buff = "", this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this;
    }, S.prototype.getState = function() {
      return {
        buff: this._buff,
        length: this._length,
        hash: this._hash.slice()
      };
    }, S.prototype.setState = function(g) {
      return this._buff = g.buff, this._length = g.length, this._hash = g.hash, this;
    }, S.prototype.destroy = function() {
      delete this._hash, delete this._buff, delete this._length;
    }, S.prototype._finish = function(g, h) {
      var s = h, l, f, u;
      if (g[s >> 2] |= 128 << (s % 4 << 3), s > 55)
        for (o(this._hash, g), s = 0; s < 16; s += 1)
          g[s] = 0;
      l = this._length * 8, l = l.toString(16).match(/(.*?)(.{0,8})$/), f = parseInt(l[2], 16), u = parseInt(l[1], 16) || 0, g[14] = f, g[15] = u, o(this._hash, g);
    }, S.hash = function(g, h) {
      return S.hashBinary(b(g), h);
    }, S.hashBinary = function(g, h) {
      var s = c(g), l = p(s);
      return h ? E(l) : l;
    }, S.ArrayBuffer = function() {
      this.reset();
    }, S.ArrayBuffer.prototype.append = function(g) {
      var h = w(this._buff.buffer, g), s = h.length, l;
      for (this._length += g.byteLength, l = 64; l <= s; l += 64)
        o(this._hash, a(h.subarray(l - 64, l)));
      return this._buff = l - 64 < s ? new Uint8Array(h.buffer.slice(l - 64)) : new Uint8Array(0), this;
    }, S.ArrayBuffer.prototype.end = function(g) {
      var h = this._buff, s = h.length, l = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], f, u;
      for (f = 0; f < s; f += 1)
        l[f >> 2] |= h[f] << (f % 4 << 3);
      return this._finish(l, s), u = p(this._hash), g && (u = E(u)), this.reset(), u;
    }, S.ArrayBuffer.prototype.reset = function() {
      return this._buff = new Uint8Array(0), this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this;
    }, S.ArrayBuffer.prototype.getState = function() {
      var g = S.prototype.getState.call(this);
      return g.buff = A(g.buff), g;
    }, S.ArrayBuffer.prototype.setState = function(g) {
      return g.buff = v(g.buff, !0), S.prototype.setState.call(this, g);
    }, S.ArrayBuffer.prototype.destroy = S.prototype.destroy, S.ArrayBuffer.prototype._finish = S.prototype._finish, S.ArrayBuffer.hash = function(g, h) {
      var s = y(new Uint8Array(g)), l = p(s);
      return h ? E(l) : l;
    }, S;
  });
})(ln);
var as = ln.exports;
const ss = /* @__PURE__ */ qr(as), Ts = async (t, e) => {
  e = e || 1024 * 1024 * 5;
  const r = [], n = new ss.ArrayBuffer();
  let o = 0, i = 0;
  const a = [], c = (y) => {
    for (; o < t.size && y.timeRemaining() > 0; ) {
      const d = o, p = Math.min(o + e, t.size), b = t.slice(d, p);
      a.push(
        ls(b).then((v) => {
          n.append(v);
          const A = n.end(), w = new Blob([b]);
          r.push({
            start: d,
            end: p,
            index: i,
            hash: A,
            blob: w
          }), i++;
        })
      ), o += b.size;
    }
    o < t.size ? window.requestIdleCallback(c) : Promise.all(a);
  };
  return window.requestIdleCallback(c), new Promise((y) => {
    y(r);
  });
};
function ls(t) {
  return new Promise((e, r) => {
    const n = new FileReader();
    n.onload = (o) => {
      var i;
      ((i = o.target) == null ? void 0 : i.result) instanceof ArrayBuffer ? e(o.target.result) : r(new Error("Failed to read blob as ArrayBuffer"));
    }, n.onerror = (o) => {
      var i;
      r(n.error || new Error(`Unknown FileReader error: ${(i = o.target) == null ? void 0 : i.error}`));
    }, n.readAsArrayBuffer(t);
  });
}
export {
  Ps as EventEmitter,
  Ss as checkLocalInfo,
  Rs as concurRequest,
  ds as copyText,
  Ts as cutAndHashFile,
  fs as formatCommas,
  us as formatDate,
  ys as formatFileSize,
  ws as loadLocalInfo,
  As as maskStr,
  ps as openChooseFile,
  Es as removeLocalInfo,
  vs as saveLocalInfo,
  hs as searchKeywordInfo,
  ms as searchKeywordList,
  gs as searchTypeList,
  Os as send,
  bs as sortList
};
