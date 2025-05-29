var un = Object.defineProperty;
var fn = (t, e, r) => e in t ? un(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var Nt = (t, e, r) => fn(t, typeof e != "symbol" ? e + "" : e, r);
const ys = (t, e, r) => {
  try {
    !isNaN(t) && !(t instanceof Date) && (t = new Date(t)), e = e || "yyyy-MM-dd hh:mm:ss:ms";
    let n = t.getFullYear() + "", o = t.getMonth() + 1, a = t.getDate(), i = t.getHours(), s = t.getMinutes(), c = t.getSeconds(), u = t.getMilliseconds();
    return o = o < 10 ? "0" + o : "" + o, a = a < 10 ? "0" + a : "" + a, i = i < 10 ? "0" + i : "" + i, s = s < 10 ? "0" + s : "" + s, c = c < 10 ? "0" + c : "" + c, u = u < 10 ? "0" + u : "" + u, e = e.replace(/yyyy/g, n), e = e.replace(/MM/g, o), e = e.replace(/dd/g, a), e = e.replace(/hh/g, i), e = e.replace(/mm/g, s), e = e.replace(/ss/g, c), e = e.replace(/ms/g, u), e;
  } catch (n) {
    return console.error(n), r || "";
  }
}, ds = (t, e) => {
  const n = t.toString().split(".");
  e = !e || e <= 0 || e >= t.toString().length ? 3 : e;
  const o = new RegExp(`(\\d)(?=(\\d{${e}})+(?!\\d))`, "g"), a = n[0].replace(o, "$1,");
  return n.length > 1 ? a + "." + n[1] : a;
}, hs = (t, e) => {
  let r = document.createElement("input");
  r.setAttribute("type", "file"), e && e === "Multiple" && r.setAttribute("multiple", "true"), e && e === "Directory" && (r.setAttribute("webkitdirectory", "true"), r.setAttribute("mozdirectory", "true"), r.setAttribute("odirectory", "true")), r.addEventListener("change", function() {
    t(r.files);
  }), r.addEventListener("cancel", function() {
    t(null);
  }), r.click();
}, ms = (t) => {
  if (!t || t === "")
    return "0B";
  const e = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let r = 0;
  const n = typeof t == "string" ? parseFloat(t) : t;
  if (Number.isNaN(n)) throw new Error("The size is not a number");
  r = Math.floor(Math.log(n) / Math.log(1024));
  let o = n / Math.pow(1024, r);
  return o = Number(o.toFixed(2)), o + e[r];
}, gs = async (t, e) => navigator.clipboard.writeText(t).then(() => {
  e && e(t);
}).catch((r) => {
  console.error(r);
}), bs = (t, e, r, n, o) => {
  t = String(t);
  const a = t == "null" || t == "";
  if (a || e == "")
    return r = r || "", a ? r : t;
  let i = n ? "g" : "ig";
  const s = new RegExp(e, i);
  if (t && t != "")
    return o = o || "#ff0000", t.replace(s, `<span style="color: ${o};">$&</span>`);
}, vs = (t, e) => {
  if (e == "") return t;
  const r = (o) => typeof o == "object" && o !== null, n = (o, a) => {
    for (let i in o) {
      let s = o[i];
      if (r(s)) {
        if (n(s, a))
          return !0;
      } else if (String(s).toLowerCase().includes(a.toLowerCase()))
        return !0;
    }
    return !1;
  };
  return t.filter((o) => r(o) ? n(o, e) : String(o).toLowerCase().includes(e.toLowerCase()));
}, ws = (t, e, r, n, o) => {
  const a = (i) => {
    for (let s in i)
      i[s] || (i[s] = n);
    return i;
  };
  for (const i of t)
    if (i[e] === r)
      return o ? i[o] : a(i);
  return null;
}, Ss = (t, e, r) => {
  const n = [...t];
  return n.sort((o, a) => {
    const i = o[r], s = a[r];
    if (typeof i > "u" || typeof s > "u")
      return i === s ? 0 : i === void 0 ? 1 : -1;
    if (typeof i == "number" && typeof s == "number")
      return e === "ascending" ? i - s : s - i;
    if (typeof i == "string" && typeof s == "string") {
      const c = i.localeCompare(s);
      return e === "ascending" ? c : -c;
    }
    return 0;
  }), n;
}, Es = (t, e, r) => {
  if (r) {
    const n = {
      info: e,
      expire: Date.now() + r
    };
    localStorage.setItem(t, JSON.stringify(n));
    return;
  }
  localStorage.setItem(t, JSON.stringify({ info: e }));
}, As = (t) => {
  const e = localStorage.getItem(t);
  if (e) {
    const { info: r } = JSON.parse(e);
    return r;
  }
  return null;
}, Os = (t) => {
  const e = localStorage.getItem(t);
  if (e) {
    const { expire: r } = JSON.parse(e);
    Date.now() > r && localStorage.removeItem(t);
  }
}, Rs = (t) => {
  localStorage.removeItem(t);
}, Ps = (t, e, r, n) => {
  if (e < 0 && r < 0)
    throw new Error("preserveStart and preserveEnd cannot be both less than 0");
  e = e < 0 ? 1 : e, r = r < 0 ? 1 : r, n = n || t.length - e - r;
  const o = t.length;
  if (o <= e + r)
    return t;
  const a = t.slice(0, e), i = "*".repeat(n), s = t.slice(o - r);
  return a + i + s;
};
function gr(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: pn } = Object.prototype, { getPrototypeOf: Et } = Object, { iterator: Me, toStringTag: br } = Symbol, ke = /* @__PURE__ */ ((t) => (e) => {
  const r = pn.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), B = (t) => (t = t.toLowerCase(), (e) => ke(e) === t), qe = (t) => (e) => typeof e === t, { isArray: ce } = Array, ve = qe("undefined");
function yn(t) {
  return t !== null && !ve(t) && t.constructor !== null && !ve(t.constructor) && N(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const vr = B("ArrayBuffer");
function dn(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && vr(t.buffer), e;
}
const hn = qe("string"), N = qe("function"), wr = qe("number"), je = (t) => t !== null && typeof t == "object", mn = (t) => t === !0 || t === !1, Te = (t) => {
  if (ke(t) !== "object")
    return !1;
  const e = Et(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(br in t) && !(Me in t);
}, gn = B("Date"), bn = B("File"), vn = B("Blob"), wn = B("FileList"), Sn = (t) => je(t) && N(t.pipe), En = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || N(t.append) && ((e = ke(t)) === "formdata" || // detect form-data instance
  e === "object" && N(t.toString) && t.toString() === "[object FormData]"));
}, An = B("URLSearchParams"), [On, Rn, Pn, xn] = ["ReadableStream", "Request", "Response", "Headers"].map(B), Tn = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function we(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, o;
  if (typeof t != "object" && (t = [t]), ce(t))
    for (n = 0, o = t.length; n < o; n++)
      e.call(null, t[n], n, t);
  else {
    const a = r ? Object.getOwnPropertyNames(t) : Object.keys(t), i = a.length;
    let s;
    for (n = 0; n < i; n++)
      s = a[n], e.call(null, t[s], s, t);
  }
}
function Sr(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], e === o.toLowerCase())
      return o;
  return null;
}
const Q = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Er = (t) => !ve(t) && t !== Q;
function ct() {
  const { caseless: t } = Er(this) && this || {}, e = {}, r = (n, o) => {
    const a = t && Sr(e, o) || o;
    Te(e[a]) && Te(n) ? e[a] = ct(e[a], n) : Te(n) ? e[a] = ct({}, n) : ce(n) ? e[a] = n.slice() : e[a] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && we(arguments[n], r);
  return e;
}
const Fn = (t, e, r, { allOwnKeys: n } = {}) => (we(e, (o, a) => {
  r && N(o) ? t[a] = gr(o, r) : t[a] = o;
}, { allOwnKeys: n }), t), Cn = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Dn = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, $n = (t, e, r, n) => {
  let o, a, i;
  const s = {};
  if (e = e || {}, t == null) return e;
  do {
    for (o = Object.getOwnPropertyNames(t), a = o.length; a-- > 0; )
      i = o[a], (!n || n(i, t, e)) && !s[i] && (e[i] = t[i], s[i] = !0);
    t = r !== !1 && Et(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, Nn = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, In = (t) => {
  if (!t) return null;
  if (ce(t)) return t;
  let e = t.length;
  if (!wr(e)) return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, _n = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Et(Uint8Array)), Bn = (t, e) => {
  const n = (t && t[Me]).call(t);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const a = o.value;
    e.call(t, a[0], a[1]);
  }
}, Ln = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, Un = B("HTMLFormElement"), Mn = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), It = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), kn = B("RegExp"), Ar = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  we(r, (o, a) => {
    let i;
    (i = e(o, a, t)) !== !1 && (n[a] = i || o);
  }), Object.defineProperties(t, n);
}, qn = (t) => {
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
}, jn = (t, e) => {
  const r = {}, n = (o) => {
    o.forEach((a) => {
      r[a] = !0;
    });
  };
  return ce(t) ? n(t) : n(String(t).split(e)), r;
}, Wn = () => {
}, Hn = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function zn(t) {
  return !!(t && N(t.append) && t[br] === "FormData" && t[Me]);
}
const Jn = (t) => {
  const e = new Array(10), r = (n, o) => {
    if (je(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[o] = n;
        const a = ce(n) ? [] : {};
        return we(n, (i, s) => {
          const c = r(i, o + 1);
          !ve(c) && (a[s] = c);
        }), e[o] = void 0, a;
      }
    }
    return n;
  };
  return r(t, 0);
}, Vn = B("AsyncFunction"), Gn = (t) => t && (je(t) || N(t)) && N(t.then) && N(t.catch), Or = ((t, e) => t ? setImmediate : e ? ((r, n) => (Q.addEventListener("message", ({ source: o, data: a }) => {
  o === Q && a === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), Q.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  N(Q.postMessage)
), Kn = typeof queueMicrotask < "u" ? queueMicrotask.bind(Q) : typeof process < "u" && process.nextTick || Or, Qn = (t) => t != null && N(t[Me]), f = {
  isArray: ce,
  isArrayBuffer: vr,
  isBuffer: yn,
  isFormData: En,
  isArrayBufferView: dn,
  isString: hn,
  isNumber: wr,
  isBoolean: mn,
  isObject: je,
  isPlainObject: Te,
  isReadableStream: On,
  isRequest: Rn,
  isResponse: Pn,
  isHeaders: xn,
  isUndefined: ve,
  isDate: gn,
  isFile: bn,
  isBlob: vn,
  isRegExp: kn,
  isFunction: N,
  isStream: Sn,
  isURLSearchParams: An,
  isTypedArray: _n,
  isFileList: wn,
  forEach: we,
  merge: ct,
  extend: Fn,
  trim: Tn,
  stripBOM: Cn,
  inherits: Dn,
  toFlatObject: $n,
  kindOf: ke,
  kindOfTest: B,
  endsWith: Nn,
  toArray: In,
  forEachEntry: Bn,
  matchAll: Ln,
  isHTMLForm: Un,
  hasOwnProperty: It,
  hasOwnProp: It,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ar,
  freezeMethods: qn,
  toObjectSet: jn,
  toCamelCase: Mn,
  noop: Wn,
  toFiniteNumber: Hn,
  findKey: Sr,
  global: Q,
  isContextDefined: Er,
  isSpecCompliantForm: zn,
  toJSONObject: Jn,
  isAsyncFn: Vn,
  isThenable: Gn,
  setImmediate: Or,
  asap: Kn,
  isIterable: Qn
};
function v(t, e, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
}
f.inherits(v, Error, {
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
      config: f.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Rr = v.prototype, Pr = {};
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
Object.defineProperties(v, Pr);
Object.defineProperty(Rr, "isAxiosError", { value: !0 });
v.from = (t, e, r, n, o, a) => {
  const i = Object.create(Rr);
  return f.toFlatObject(t, i, function(c) {
    return c !== Error.prototype;
  }, (s) => s !== "isAxiosError"), v.call(i, t.message, e, r, n, o), i.cause = t, i.name = t.name, a && Object.assign(i, a), i;
};
const Xn = null;
function ut(t) {
  return f.isPlainObject(t) || f.isArray(t);
}
function xr(t) {
  return f.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function _t(t, e, r) {
  return t ? t.concat(e).map(function(o, a) {
    return o = xr(o), !r && a ? "[" + o + "]" : o;
  }).join(r ? "." : "") : e;
}
function Yn(t) {
  return f.isArray(t) && !t.some(ut);
}
const Zn = f.toFlatObject(f, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function We(t, e, r) {
  if (!f.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = f.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, h) {
    return !f.isUndefined(h[m]);
  });
  const n = r.metaTokens, o = r.visitor || l, a = r.dots, i = r.indexes, c = (r.Blob || typeof Blob < "u" && Blob) && f.isSpecCompliantForm(e);
  if (!f.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(d) {
    if (d === null) return "";
    if (f.isDate(d))
      return d.toISOString();
    if (!c && f.isBlob(d))
      throw new v("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(d) || f.isTypedArray(d) ? c && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function l(d, m, h) {
    let S = d;
    if (d && !h && typeof d == "object") {
      if (f.endsWith(m, "{}"))
        m = n ? m : m.slice(0, -2), d = JSON.stringify(d);
      else if (f.isArray(d) && Yn(d) || (f.isFileList(d) || f.endsWith(m, "[]")) && (S = f.toArray(d)))
        return m = xr(m), S.forEach(function(b, x) {
          !(f.isUndefined(b) || b === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? _t([m], x, a) : i === null ? m : m + "[]",
            u(b)
          );
        }), !1;
    }
    return ut(d) ? !0 : (e.append(_t(h, m, a), u(d)), !1);
  }
  const y = [], p = Object.assign(Zn, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: ut
  });
  function g(d, m) {
    if (!f.isUndefined(d)) {
      if (y.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      y.push(d), f.forEach(d, function(S, E) {
        (!(f.isUndefined(S) || S === null) && o.call(
          e,
          S,
          f.isString(E) ? E.trim() : E,
          m,
          p
        )) === !0 && g(S, m ? m.concat(E) : [E]);
      }), y.pop();
    }
  }
  if (!f.isObject(t))
    throw new TypeError("data must be an object");
  return g(t), e;
}
function Bt(t) {
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
function At(t, e) {
  this._pairs = [], t && We(t, this, e);
}
const Tr = At.prototype;
Tr.append = function(e, r) {
  this._pairs.push([e, r]);
};
Tr.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, Bt);
  } : Bt;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function eo(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Fr(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || eo;
  f.isFunction(r) && (r = {
    serialize: r
  });
  const o = r && r.serialize;
  let a;
  if (o ? a = o(e, r) : a = f.isURLSearchParams(e) ? e.toString() : new At(e, r).toString(n), a) {
    const i = t.indexOf("#");
    i !== -1 && (t = t.slice(0, i)), t += (t.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return t;
}
class Lt {
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
    f.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const Cr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, to = typeof URLSearchParams < "u" ? URLSearchParams : At, ro = typeof FormData < "u" ? FormData : null, no = typeof Blob < "u" ? Blob : null, oo = {
  isBrowser: !0,
  classes: {
    URLSearchParams: to,
    FormData: ro,
    Blob: no
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ot = typeof window < "u" && typeof document < "u", ft = typeof navigator == "object" && navigator || void 0, ao = Ot && (!ft || ["ReactNative", "NativeScript", "NS"].indexOf(ft.product) < 0), io = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", so = Ot && window.location.href || "http://localhost", lo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ot,
  hasStandardBrowserEnv: ao,
  hasStandardBrowserWebWorkerEnv: io,
  navigator: ft,
  origin: so
}, Symbol.toStringTag, { value: "Module" })), F = {
  ...lo,
  ...oo
};
function co(t, e) {
  return We(t, new F.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, a) {
      return F.isNode && f.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function uo(t) {
  return f.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function fo(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const o = r.length;
  let a;
  for (n = 0; n < o; n++)
    a = r[n], e[a] = t[a];
  return e;
}
function Dr(t) {
  function e(r, n, o, a) {
    let i = r[a++];
    if (i === "__proto__") return !0;
    const s = Number.isFinite(+i), c = a >= r.length;
    return i = !i && f.isArray(o) ? o.length : i, c ? (f.hasOwnProp(o, i) ? o[i] = [o[i], n] : o[i] = n, !s) : ((!o[i] || !f.isObject(o[i])) && (o[i] = []), e(r, n, o[i], a) && f.isArray(o[i]) && (o[i] = fo(o[i])), !s);
  }
  if (f.isFormData(t) && f.isFunction(t.entries)) {
    const r = {};
    return f.forEachEntry(t, (n, o) => {
      e(uo(n), o, r, 0);
    }), r;
  }
  return null;
}
function po(t, e, r) {
  if (f.isString(t))
    try {
      return (e || JSON.parse)(t), f.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(t);
}
const Se = {
  transitional: Cr,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, a = f.isObject(e);
    if (a && f.isHTMLForm(e) && (e = new FormData(e)), f.isFormData(e))
      return o ? JSON.stringify(Dr(e)) : e;
    if (f.isArrayBuffer(e) || f.isBuffer(e) || f.isStream(e) || f.isFile(e) || f.isBlob(e) || f.isReadableStream(e))
      return e;
    if (f.isArrayBufferView(e))
      return e.buffer;
    if (f.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let s;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return co(e, this.formSerializer).toString();
      if ((s = f.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return We(
          s ? { "files[]": e } : e,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return a || o ? (r.setContentType("application/json", !1), po(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || Se.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (f.isResponse(e) || f.isReadableStream(e))
      return e;
    if (e && f.isString(e) && (n && !this.responseType || o)) {
      const i = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(e);
      } catch (s) {
        if (i)
          throw s.name === "SyntaxError" ? v.from(s, v.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
    FormData: F.classes.FormData,
    Blob: F.classes.Blob
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
f.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Se.headers[t] = {};
});
const yo = f.toObjectSet([
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
]), ho = (t) => {
  const e = {};
  let r, n, o;
  return t && t.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), r = i.substring(0, o).trim().toLowerCase(), n = i.substring(o + 1).trim(), !(!r || e[r] && yo[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, Ut = Symbol("internals");
function de(t) {
  return t && String(t).trim().toLowerCase();
}
function Fe(t) {
  return t === !1 || t == null ? t : f.isArray(t) ? t.map(Fe) : String(t);
}
function mo(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const go = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Ge(t, e, r, n, o) {
  if (f.isFunction(n))
    return n.call(this, e, r);
  if (o && (e = r), !!f.isString(e)) {
    if (f.isString(n))
      return e.indexOf(n) !== -1;
    if (f.isRegExp(n))
      return n.test(e);
  }
}
function bo(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function vo(t, e) {
  const r = f.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(t, n + r, {
      value: function(o, a, i) {
        return this[n].call(this, e, o, a, i);
      },
      configurable: !0
    });
  });
}
let I = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const o = this;
    function a(s, c, u) {
      const l = de(c);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const y = f.findKey(o, l);
      (!y || o[y] === void 0 || u === !0 || u === void 0 && o[y] !== !1) && (o[y || c] = Fe(s));
    }
    const i = (s, c) => f.forEach(s, (u, l) => a(u, l, c));
    if (f.isPlainObject(e) || e instanceof this.constructor)
      i(e, r);
    else if (f.isString(e) && (e = e.trim()) && !go(e))
      i(ho(e), r);
    else if (f.isObject(e) && f.isIterable(e)) {
      let s = {}, c, u;
      for (const l of e) {
        if (!f.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        s[u = l[0]] = (c = s[u]) ? f.isArray(c) ? [...c, l[1]] : [c, l[1]] : l[1];
      }
      i(s, r);
    } else
      e != null && a(r, e, n);
    return this;
  }
  get(e, r) {
    if (e = de(e), e) {
      const n = f.findKey(this, e);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return mo(o);
        if (f.isFunction(r))
          return r.call(this, o, n);
        if (f.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = de(e), e) {
      const n = f.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || Ge(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let o = !1;
    function a(i) {
      if (i = de(i), i) {
        const s = f.findKey(n, i);
        s && (!r || Ge(n, n[s], s, r)) && (delete n[s], o = !0);
      }
    }
    return f.isArray(e) ? e.forEach(a) : a(e), o;
  }
  clear(e) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const a = r[n];
      (!e || Ge(this, this[a], a, e, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(e) {
    const r = this, n = {};
    return f.forEach(this, (o, a) => {
      const i = f.findKey(n, a);
      if (i) {
        r[i] = Fe(o), delete r[a];
        return;
      }
      const s = e ? bo(a) : String(a).trim();
      s !== a && delete r[a], r[s] = Fe(o), n[s] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return f.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = e && f.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, r]) => e + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
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
    const n = (this[Ut] = this[Ut] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(i) {
      const s = de(i);
      n[s] || (vo(o, i), n[s] = !0);
    }
    return f.isArray(e) ? e.forEach(a) : a(e), this;
  }
};
I.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
f.reduceDescriptors(I.prototype, ({ value: t }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(n) {
      this[r] = n;
    }
  };
});
f.freezeMethods(I);
function Ke(t, e) {
  const r = this || Se, n = e || r, o = I.from(n.headers);
  let a = n.data;
  return f.forEach(t, function(s) {
    a = s.call(r, a, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), a;
}
function $r(t) {
  return !!(t && t.__CANCEL__);
}
function ue(t, e, r) {
  v.call(this, t ?? "canceled", v.ERR_CANCELED, e, r), this.name = "CanceledError";
}
f.inherits(ue, v, {
  __CANCEL__: !0
});
function Nr(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new v(
    "Request failed with status code " + r.status,
    [v.ERR_BAD_REQUEST, v.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function wo(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function So(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let o = 0, a = 0, i;
  return e = e !== void 0 ? e : 1e3, function(c) {
    const u = Date.now(), l = n[a];
    i || (i = u), r[o] = c, n[o] = u;
    let y = a, p = 0;
    for (; y !== o; )
      p += r[y++], y = y % t;
    if (o = (o + 1) % t, o === a && (a = (a + 1) % t), u - i < e)
      return;
    const g = l && u - l;
    return g ? Math.round(p * 1e3 / g) : void 0;
  };
}
function Eo(t, e) {
  let r = 0, n = 1e3 / e, o, a;
  const i = (u, l = Date.now()) => {
    r = l, o = null, a && (clearTimeout(a), a = null), t.apply(null, u);
  };
  return [(...u) => {
    const l = Date.now(), y = l - r;
    y >= n ? i(u, l) : (o = u, a || (a = setTimeout(() => {
      a = null, i(o);
    }, n - y)));
  }, () => o && i(o)];
}
const Ne = (t, e, r = 3) => {
  let n = 0;
  const o = So(50, 250);
  return Eo((a) => {
    const i = a.loaded, s = a.lengthComputable ? a.total : void 0, c = i - n, u = o(c), l = i <= s;
    n = i;
    const y = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: c,
      rate: u || void 0,
      estimated: u && s && l ? (s - i) / u : void 0,
      event: a,
      lengthComputable: s != null,
      [e ? "download" : "upload"]: !0
    };
    t(y);
  }, r);
}, Mt = (t, e) => {
  const r = t != null;
  return [(n) => e[0]({
    lengthComputable: r,
    total: t,
    loaded: n
  }), e[1]];
}, kt = (t) => (...e) => f.asap(() => t(...e)), Ao = F.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, e) => (r) => (r = new URL(r, F.origin), t.protocol === r.protocol && t.host === r.host && (e || t.port === r.port)))(
  new URL(F.origin),
  F.navigator && /(msie|trident)/i.test(F.navigator.userAgent)
) : () => !0, Oo = F.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, r, n, o, a) {
      const i = [t + "=" + encodeURIComponent(e)];
      f.isNumber(r) && i.push("expires=" + new Date(r).toGMTString()), f.isString(n) && i.push("path=" + n), f.isString(o) && i.push("domain=" + o), a === !0 && i.push("secure"), document.cookie = i.join("; ");
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
function Ro(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Po(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Ir(t, e, r) {
  let n = !Ro(e);
  return t && (n || r == !1) ? Po(t, e) : e;
}
const qt = (t) => t instanceof I ? { ...t } : t;
function ee(t, e) {
  e = e || {};
  const r = {};
  function n(u, l, y, p) {
    return f.isPlainObject(u) && f.isPlainObject(l) ? f.merge.call({ caseless: p }, u, l) : f.isPlainObject(l) ? f.merge({}, l) : f.isArray(l) ? l.slice() : l;
  }
  function o(u, l, y, p) {
    if (f.isUndefined(l)) {
      if (!f.isUndefined(u))
        return n(void 0, u, y, p);
    } else return n(u, l, y, p);
  }
  function a(u, l) {
    if (!f.isUndefined(l))
      return n(void 0, l);
  }
  function i(u, l) {
    if (f.isUndefined(l)) {
      if (!f.isUndefined(u))
        return n(void 0, u);
    } else return n(void 0, l);
  }
  function s(u, l, y) {
    if (y in e)
      return n(u, l);
    if (y in t)
      return n(void 0, u);
  }
  const c = {
    url: a,
    method: a,
    data: a,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: s,
    headers: (u, l, y) => o(qt(u), qt(l), y, !0)
  };
  return f.forEach(Object.keys(Object.assign({}, t, e)), function(l) {
    const y = c[l] || o, p = y(t[l], e[l], l);
    f.isUndefined(p) && y !== s || (r[l] = p);
  }), r;
}
const _r = (t) => {
  const e = ee({}, t);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: a, headers: i, auth: s } = e;
  e.headers = i = I.from(i), e.url = Fr(Ir(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), s && i.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  );
  let c;
  if (f.isFormData(r)) {
    if (F.hasStandardBrowserEnv || F.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((c = i.getContentType()) !== !1) {
      const [u, ...l] = c ? c.split(";").map((y) => y.trim()).filter(Boolean) : [];
      i.setContentType([u || "multipart/form-data", ...l].join("; "));
    }
  }
  if (F.hasStandardBrowserEnv && (n && f.isFunction(n) && (n = n(e)), n || n !== !1 && Ao(e.url))) {
    const u = o && a && Oo.read(a);
    u && i.set(o, u);
  }
  return e;
}, xo = typeof XMLHttpRequest < "u", To = xo && function(t) {
  return new Promise(function(r, n) {
    const o = _r(t);
    let a = o.data;
    const i = I.from(o.headers).normalize();
    let { responseType: s, onUploadProgress: c, onDownloadProgress: u } = o, l, y, p, g, d;
    function m() {
      g && g(), d && d(), o.cancelToken && o.cancelToken.unsubscribe(l), o.signal && o.signal.removeEventListener("abort", l);
    }
    let h = new XMLHttpRequest();
    h.open(o.method.toUpperCase(), o.url, !0), h.timeout = o.timeout;
    function S() {
      if (!h)
        return;
      const b = I.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), A = {
        data: !s || s === "text" || s === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: b,
        config: t,
        request: h
      };
      Nr(function($) {
        r($), m();
      }, function($) {
        n($), m();
      }, A), h = null;
    }
    "onloadend" in h ? h.onloadend = S : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, h.onabort = function() {
      h && (n(new v("Request aborted", v.ECONNABORTED, t, h)), h = null);
    }, h.onerror = function() {
      n(new v("Network Error", v.ERR_NETWORK, t, h)), h = null;
    }, h.ontimeout = function() {
      let x = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const A = o.transitional || Cr;
      o.timeoutErrorMessage && (x = o.timeoutErrorMessage), n(new v(
        x,
        A.clarifyTimeoutError ? v.ETIMEDOUT : v.ECONNABORTED,
        t,
        h
      )), h = null;
    }, a === void 0 && i.setContentType(null), "setRequestHeader" in h && f.forEach(i.toJSON(), function(x, A) {
      h.setRequestHeader(A, x);
    }), f.isUndefined(o.withCredentials) || (h.withCredentials = !!o.withCredentials), s && s !== "json" && (h.responseType = o.responseType), u && ([p, d] = Ne(u, !0), h.addEventListener("progress", p)), c && h.upload && ([y, g] = Ne(c), h.upload.addEventListener("progress", y), h.upload.addEventListener("loadend", g)), (o.cancelToken || o.signal) && (l = (b) => {
      h && (n(!b || b.type ? new ue(null, t, h) : b), h.abort(), h = null);
    }, o.cancelToken && o.cancelToken.subscribe(l), o.signal && (o.signal.aborted ? l() : o.signal.addEventListener("abort", l)));
    const E = wo(o.url);
    if (E && F.protocols.indexOf(E) === -1) {
      n(new v("Unsupported protocol " + E + ":", v.ERR_BAD_REQUEST, t));
      return;
    }
    h.send(a || null);
  });
}, Fo = (t, e) => {
  const { length: r } = t = t ? t.filter(Boolean) : [];
  if (e || r) {
    let n = new AbortController(), o;
    const a = function(u) {
      if (!o) {
        o = !0, s();
        const l = u instanceof Error ? u : this.reason;
        n.abort(l instanceof v ? l : new ue(l instanceof Error ? l.message : l));
      }
    };
    let i = e && setTimeout(() => {
      i = null, a(new v(`timeout ${e} of ms exceeded`, v.ETIMEDOUT));
    }, e);
    const s = () => {
      t && (i && clearTimeout(i), i = null, t.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(a) : u.removeEventListener("abort", a);
      }), t = null);
    };
    t.forEach((u) => u.addEventListener("abort", a));
    const { signal: c } = n;
    return c.unsubscribe = () => f.asap(s), c;
  }
}, Co = function* (t, e) {
  let r = t.byteLength;
  if (r < e) {
    yield t;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + e, yield t.slice(n, o), n = o;
}, Do = async function* (t, e) {
  for await (const r of $o(t))
    yield* Co(r, e);
}, $o = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await e.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await e.cancel();
  }
}, jt = (t, e, r, n) => {
  const o = Do(t, e);
  let a = 0, i, s = (c) => {
    i || (i = !0, n && n(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: u, value: l } = await o.next();
        if (u) {
          s(), c.close();
          return;
        }
        let y = l.byteLength;
        if (r) {
          let p = a += y;
          r(p);
        }
        c.enqueue(new Uint8Array(l));
      } catch (u) {
        throw s(u), u;
      }
    },
    cancel(c) {
      return s(c), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, He = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Br = He && typeof ReadableStream == "function", No = He && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), Lr = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, Io = Br && Lr(() => {
  let t = !1;
  const e = new Request(F.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), Wt = 64 * 1024, pt = Br && Lr(() => f.isReadableStream(new Response("").body)), Ie = {
  stream: pt && ((t) => t.body)
};
He && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !Ie[e] && (Ie[e] = f.isFunction(t[e]) ? (r) => r[e]() : (r, n) => {
      throw new v(`Response type '${e}' is not supported`, v.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const _o = async (t) => {
  if (t == null)
    return 0;
  if (f.isBlob(t))
    return t.size;
  if (f.isSpecCompliantForm(t))
    return (await new Request(F.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (f.isArrayBufferView(t) || f.isArrayBuffer(t))
    return t.byteLength;
  if (f.isURLSearchParams(t) && (t = t + ""), f.isString(t))
    return (await No(t)).byteLength;
}, Bo = async (t, e) => {
  const r = f.toFiniteNumber(t.getContentLength());
  return r ?? _o(e);
}, Lo = He && (async (t) => {
  let {
    url: e,
    method: r,
    data: n,
    signal: o,
    cancelToken: a,
    timeout: i,
    onDownloadProgress: s,
    onUploadProgress: c,
    responseType: u,
    headers: l,
    withCredentials: y = "same-origin",
    fetchOptions: p
  } = _r(t);
  u = u ? (u + "").toLowerCase() : "text";
  let g = Fo([o, a && a.toAbortSignal()], i), d;
  const m = g && g.unsubscribe && (() => {
    g.unsubscribe();
  });
  let h;
  try {
    if (c && Io && r !== "get" && r !== "head" && (h = await Bo(l, n)) !== 0) {
      let A = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), D;
      if (f.isFormData(n) && (D = A.headers.get("content-type")) && l.setContentType(D), A.body) {
        const [$, j] = Mt(
          h,
          Ne(kt(c))
        );
        n = jt(A.body, Wt, $, j);
      }
    }
    f.isString(y) || (y = y ? "include" : "omit");
    const S = "credentials" in Request.prototype;
    d = new Request(e, {
      ...p,
      signal: g,
      method: r.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: S ? y : void 0
    });
    let E = await fetch(d);
    const b = pt && (u === "stream" || u === "response");
    if (pt && (s || b && m)) {
      const A = {};
      ["status", "statusText", "headers"].forEach((L) => {
        A[L] = E[L];
      });
      const D = f.toFiniteNumber(E.headers.get("content-length")), [$, j] = s && Mt(
        D,
        Ne(kt(s), !0)
      ) || [];
      E = new Response(
        jt(E.body, Wt, $, () => {
          j && j(), m && m();
        }),
        A
      );
    }
    u = u || "text";
    let x = await Ie[f.findKey(Ie, u) || "text"](E, t);
    return !b && m && m(), await new Promise((A, D) => {
      Nr(A, D, {
        data: x,
        headers: I.from(E.headers),
        status: E.status,
        statusText: E.statusText,
        config: t,
        request: d
      });
    });
  } catch (S) {
    throw m && m(), S && S.name === "TypeError" && /Load failed|fetch/i.test(S.message) ? Object.assign(
      new v("Network Error", v.ERR_NETWORK, t, d),
      {
        cause: S.cause || S
      }
    ) : v.from(S, S && S.code, t, d);
  }
}), yt = {
  http: Xn,
  xhr: To,
  fetch: Lo
};
f.forEach(yt, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Ht = (t) => `- ${t}`, Uo = (t) => f.isFunction(t) || t === null || t === !1, Ur = {
  getAdapter: (t) => {
    t = f.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const o = {};
    for (let a = 0; a < e; a++) {
      r = t[a];
      let i;
      if (n = r, !Uo(r) && (n = yt[(i = String(r)).toLowerCase()], n === void 0))
        throw new v(`Unknown adapter '${i}'`);
      if (n)
        break;
      o[i || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(o).map(
        ([s, c]) => `adapter ${s} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = e ? a.length > 1 ? `since :
` + a.map(Ht).join(`
`) : " " + Ht(a[0]) : "as no adapter specified";
      throw new v(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: yt
};
function Qe(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new ue(null, t);
}
function zt(t) {
  return Qe(t), t.headers = I.from(t.headers), t.data = Ke.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Ur.getAdapter(t.adapter || Se.adapter)(t).then(function(n) {
    return Qe(t), n.data = Ke.call(
      t,
      t.transformResponse,
      n
    ), n.headers = I.from(n.headers), n;
  }, function(n) {
    return $r(n) || (Qe(t), n && n.response && (n.response.data = Ke.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = I.from(n.response.headers))), Promise.reject(n);
  });
}
const Mr = "1.9.0", ze = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  ze[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Jt = {};
ze.transitional = function(e, r, n) {
  function o(a, i) {
    return "[Axios v" + Mr + "] Transitional option '" + a + "'" + i + (n ? ". " + n : "");
  }
  return (a, i, s) => {
    if (e === !1)
      throw new v(
        o(i, " has been removed" + (r ? " in " + r : "")),
        v.ERR_DEPRECATED
      );
    return r && !Jt[i] && (Jt[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(a, i, s) : !0;
  };
};
ze.spelling = function(e) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
};
function Mo(t, e, r) {
  if (typeof t != "object")
    throw new v("options must be an object", v.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let o = n.length;
  for (; o-- > 0; ) {
    const a = n[o], i = e[a];
    if (i) {
      const s = t[a], c = s === void 0 || i(s, a, t);
      if (c !== !0)
        throw new v("option " + a + " must be " + c, v.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new v("Unknown option " + a, v.ERR_BAD_OPTION);
  }
}
const Ce = {
  assertOptions: Mo,
  validators: ze
}, U = Ce.validators;
let X = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new Lt(),
      response: new Lt()
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
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const a = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? a && !String(n.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + a) : n.stack = a;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(e, r) {
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = ee(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: a } = r;
    n !== void 0 && Ce.assertOptions(n, {
      silentJSONParsing: U.transitional(U.boolean),
      forcedJSONParsing: U.transitional(U.boolean),
      clarifyTimeoutError: U.transitional(U.boolean)
    }, !1), o != null && (f.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Ce.assertOptions(o, {
      encode: U.function,
      serialize: U.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), Ce.assertOptions(r, {
      baseUrl: U.spelling("baseURL"),
      withXsrfToken: U.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i = a && f.merge(
      a.common,
      a[r.method]
    );
    a && f.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete a[d];
      }
    ), r.headers = I.concat(i, a);
    const s = [];
    let c = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(r) === !1 || (c = c && m.synchronous, s.unshift(m.fulfilled, m.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(m) {
      u.push(m.fulfilled, m.rejected);
    });
    let l, y = 0, p;
    if (!c) {
      const d = [zt.bind(this), void 0];
      for (d.unshift.apply(d, s), d.push.apply(d, u), p = d.length, l = Promise.resolve(r); y < p; )
        l = l.then(d[y++], d[y++]);
      return l;
    }
    p = s.length;
    let g = r;
    for (y = 0; y < p; ) {
      const d = s[y++], m = s[y++];
      try {
        g = d(g);
      } catch (h) {
        m.call(this, h);
        break;
      }
    }
    try {
      l = zt.call(this, g);
    } catch (d) {
      return Promise.reject(d);
    }
    for (y = 0, p = u.length; y < p; )
      l = l.then(u[y++], u[y++]);
    return l;
  }
  getUri(e) {
    e = ee(this.defaults, e);
    const r = Ir(e.baseURL, e.url, e.allowAbsoluteUrls);
    return Fr(r, e.params, e.paramsSerializer);
  }
};
f.forEach(["delete", "get", "head", "options"], function(e) {
  X.prototype[e] = function(r, n) {
    return this.request(ee(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
f.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(a, i, s) {
      return this.request(ee(s || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: i
      }));
    };
  }
  X.prototype[e] = r(), X.prototype[e + "Form"] = r(!0);
});
let ko = class kr {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners) return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let a;
      const i = new Promise((s) => {
        n.subscribe(s), a = s;
      }).then(o);
      return i.cancel = function() {
        n.unsubscribe(a);
      }, i;
    }, e(function(a, i, s) {
      n.reason || (n.reason = new ue(a, i, s), r(n.reason));
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
  toAbortSignal() {
    const e = new AbortController(), r = (n) => {
      e.abort(n);
    };
    return this.subscribe(r), e.signal.unsubscribe = () => this.unsubscribe(r), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new kr(function(o) {
        e = o;
      }),
      cancel: e
    };
  }
};
function qo(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function jo(t) {
  return f.isObject(t) && t.isAxiosError === !0;
}
const dt = {
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
Object.entries(dt).forEach(([t, e]) => {
  dt[e] = t;
});
function qr(t) {
  const e = new X(t), r = gr(X.prototype.request, e);
  return f.extend(r, X.prototype, e, { allOwnKeys: !0 }), f.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(o) {
    return qr(ee(t, o));
  }, r;
}
const R = qr(Se);
R.Axios = X;
R.CanceledError = ue;
R.CancelToken = ko;
R.isCancel = $r;
R.VERSION = Mr;
R.toFormData = We;
R.AxiosError = v;
R.Cancel = R.CanceledError;
R.all = function(e) {
  return Promise.all(e);
};
R.spread = qo;
R.isAxiosError = jo;
R.mergeConfig = ee;
R.AxiosHeaders = I;
R.formToJSON = (t) => Dr(f.isHTMLForm(t) ? new FormData(t) : t);
R.getAdapter = Ur.getAdapter;
R.HttpStatusCode = dt;
R.default = R;
const {
  Axios: Fs,
  AxiosError: Cs,
  CanceledError: Ds,
  isCancel: $s,
  CancelToken: Ns,
  VERSION: Is,
  all: _s,
  Cancel: Bs,
  isAxiosError: Ls,
  spread: Us,
  toFormData: Ms,
  AxiosHeaders: ks,
  HttpStatusCode: qs,
  formToJSON: js,
  getAdapter: Ws,
  mergeConfig: Hs
} = R;
var Vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Wo(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Ho(t) {
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
var zo = Error, Jo = EvalError, Vo = RangeError, Go = ReferenceError, jr = SyntaxError, Ee = TypeError, Ko = URIError, Qo = function() {
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
  var a = Object.getOwnPropertySymbols(e);
  if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var i = Object.getOwnPropertyDescriptor(e, r);
    if (i.value !== o || i.enumerable !== !0)
      return !1;
  }
  return !0;
}, Gt = typeof Symbol < "u" && Symbol, Xo = Qo, Yo = function() {
  return typeof Gt != "function" || typeof Symbol != "function" || typeof Gt("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Xo();
}, Xe = {
  __proto__: null,
  foo: {}
}, Zo = Object, ea = function() {
  return { __proto__: Xe }.foo === Xe.foo && !(Xe instanceof Zo);
}, ta = "Function.prototype.bind called on incompatible ", ra = Object.prototype.toString, na = Math.max, oa = "[object Function]", Kt = function(e, r) {
  for (var n = [], o = 0; o < e.length; o += 1)
    n[o] = e[o];
  for (var a = 0; a < r.length; a += 1)
    n[a + e.length] = r[a];
  return n;
}, aa = function(e, r) {
  for (var n = [], o = r, a = 0; o < e.length; o += 1, a += 1)
    n[a] = e[o];
  return n;
}, ia = function(t, e) {
  for (var r = "", n = 0; n < t.length; n += 1)
    r += t[n], n + 1 < t.length && (r += e);
  return r;
}, sa = function(e) {
  var r = this;
  if (typeof r != "function" || ra.apply(r) !== oa)
    throw new TypeError(ta + r);
  for (var n = aa(arguments, 1), o, a = function() {
    if (this instanceof o) {
      var l = r.apply(
        this,
        Kt(n, arguments)
      );
      return Object(l) === l ? l : this;
    }
    return r.apply(
      e,
      Kt(n, arguments)
    );
  }, i = na(0, r.length - n.length), s = [], c = 0; c < i; c++)
    s[c] = "$" + c;
  if (o = Function("binder", "return function (" + ia(s, ",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
    var u = function() {
    };
    u.prototype = r.prototype, o.prototype = new u(), u.prototype = null;
  }
  return o;
}, la = sa, Rt = Function.prototype.bind || la, ca = Function.prototype.call, ua = Object.prototype.hasOwnProperty, fa = Rt, pa = fa.call(ca, ua), w, ya = zo, da = Jo, ha = Vo, ma = Go, ie = jr, ae = Ee, ga = Ko, Wr = Function, Ye = function(t) {
  try {
    return Wr('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, Y = Object.getOwnPropertyDescriptor;
if (Y)
  try {
    Y({}, "");
  } catch {
    Y = null;
  }
var Ze = function() {
  throw new ae();
}, ba = Y ? function() {
  try {
    return arguments.callee, Ze;
  } catch {
    try {
      return Y(arguments, "callee").get;
    } catch {
      return Ze;
    }
  }
}() : Ze, re = Yo(), va = ea(), T = Object.getPrototypeOf || (va ? function(t) {
  return t.__proto__;
} : null), oe = {}, wa = typeof Uint8Array > "u" || !T ? w : T(Uint8Array), Z = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? w : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? w : ArrayBuffer,
  "%ArrayIteratorPrototype%": re && T ? T([][Symbol.iterator]()) : w,
  "%AsyncFromSyncIteratorPrototype%": w,
  "%AsyncFunction%": oe,
  "%AsyncGenerator%": oe,
  "%AsyncGeneratorFunction%": oe,
  "%AsyncIteratorPrototype%": oe,
  "%Atomics%": typeof Atomics > "u" ? w : Atomics,
  "%BigInt%": typeof BigInt > "u" ? w : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? w : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? w : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? w : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": ya,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": da,
  "%Float32Array%": typeof Float32Array > "u" ? w : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? w : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? w : FinalizationRegistry,
  "%Function%": Wr,
  "%GeneratorFunction%": oe,
  "%Int8Array%": typeof Int8Array > "u" ? w : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? w : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? w : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": re && T ? T(T([][Symbol.iterator]())) : w,
  "%JSON%": typeof JSON == "object" ? JSON : w,
  "%Map%": typeof Map > "u" ? w : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !re || !T ? w : T((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? w : Promise,
  "%Proxy%": typeof Proxy > "u" ? w : Proxy,
  "%RangeError%": ha,
  "%ReferenceError%": ma,
  "%Reflect%": typeof Reflect > "u" ? w : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? w : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !re || !T ? w : T((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? w : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": re && T ? T(""[Symbol.iterator]()) : w,
  "%Symbol%": re ? Symbol : w,
  "%SyntaxError%": ie,
  "%ThrowTypeError%": ba,
  "%TypedArray%": wa,
  "%TypeError%": ae,
  "%Uint8Array%": typeof Uint8Array > "u" ? w : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? w : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? w : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? w : Uint32Array,
  "%URIError%": ga,
  "%WeakMap%": typeof WeakMap > "u" ? w : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? w : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? w : WeakSet
};
if (T)
  try {
    null.error;
  } catch (t) {
    var Sa = T(T(t));
    Z["%Error.prototype%"] = Sa;
  }
var Ea = function t(e) {
  var r;
  if (e === "%AsyncFunction%")
    r = Ye("async function () {}");
  else if (e === "%GeneratorFunction%")
    r = Ye("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    r = Ye("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = t("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var o = t("%AsyncGenerator%");
    o && T && (r = T(o.prototype));
  }
  return Z[e] = r, r;
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
}, Ae = Rt, _e = pa, Aa = Ae.call(Function.call, Array.prototype.concat), Oa = Ae.call(Function.apply, Array.prototype.splice), Xt = Ae.call(Function.call, String.prototype.replace), Be = Ae.call(Function.call, String.prototype.slice), Ra = Ae.call(Function.call, RegExp.prototype.exec), Pa = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, xa = /\\(\\)?/g, Ta = function(e) {
  var r = Be(e, 0, 1), n = Be(e, -1);
  if (r === "%" && n !== "%")
    throw new ie("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new ie("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return Xt(e, Pa, function(a, i, s, c) {
    o[o.length] = s ? Xt(c, xa, "$1") : i || a;
  }), o;
}, Fa = function(e, r) {
  var n = e, o;
  if (_e(Qt, n) && (o = Qt[n], n = "%" + o[0] + "%"), _e(Z, n)) {
    var a = Z[n];
    if (a === oe && (a = Ea(n)), typeof a > "u" && !r)
      throw new ae("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: n,
      value: a
    };
  }
  throw new ie("intrinsic " + e + " does not exist!");
}, fe = function(e, r) {
  if (typeof e != "string" || e.length === 0)
    throw new ae("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new ae('"allowMissing" argument must be a boolean');
  if (Ra(/^%?[^%]*%?$/, e) === null)
    throw new ie("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = Ta(e), o = n.length > 0 ? n[0] : "", a = Fa("%" + o + "%", r), i = a.name, s = a.value, c = !1, u = a.alias;
  u && (o = u[0], Oa(n, Aa([0, 1], u)));
  for (var l = 1, y = !0; l < n.length; l += 1) {
    var p = n[l], g = Be(p, 0, 1), d = Be(p, -1);
    if ((g === '"' || g === "'" || g === "`" || d === '"' || d === "'" || d === "`") && g !== d)
      throw new ie("property names with quotes must have matching quotes");
    if ((p === "constructor" || !y) && (c = !0), o += "." + p, i = "%" + o + "%", _e(Z, i))
      s = Z[i];
    else if (s != null) {
      if (!(p in s)) {
        if (!r)
          throw new ae("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (Y && l + 1 >= n.length) {
        var m = Y(s, p);
        y = !!m, y && "get" in m && !("originalValue" in m.get) ? s = m.get : s = s[p];
      } else
        y = _e(s, p), s = s[p];
      y && !c && (Z[i] = s);
    }
  }
  return s;
}, Hr = { exports: {} }, et, Yt;
function Pt() {
  if (Yt) return et;
  Yt = 1;
  var t = fe, e = t("%Object.defineProperty%", !0) || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return et = e, et;
}
var Ca = fe, De = Ca("%Object.getOwnPropertyDescriptor%", !0);
if (De)
  try {
    De([], "length");
  } catch {
    De = null;
  }
var zr = De, Zt = Pt(), Da = jr, ne = Ee, er = zr, $a = function(e, r, n) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new ne("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new ne("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new ne("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new ne("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new ne("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new ne("`loose`, if provided, must be a boolean");
  var o = arguments.length > 3 ? arguments[3] : null, a = arguments.length > 4 ? arguments[4] : null, i = arguments.length > 5 ? arguments[5] : null, s = arguments.length > 6 ? arguments[6] : !1, c = !!er && er(e, r);
  if (Zt)
    Zt(e, r, {
      configurable: i === null && c ? c.configurable : !i,
      enumerable: o === null && c ? c.enumerable : !o,
      value: n,
      writable: a === null && c ? c.writable : !a
    });
  else if (s || !o && !a && !i)
    e[r] = n;
  else
    throw new Da("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, ht = Pt(), Jr = function() {
  return !!ht;
};
Jr.hasArrayLengthDefineBug = function() {
  if (!ht)
    return null;
  try {
    return ht([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var Na = Jr, Ia = fe, tr = $a, _a = Na(), rr = zr, nr = Ee, Ba = Ia("%Math.floor%"), La = function(e, r) {
  if (typeof e != "function")
    throw new nr("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || Ba(r) !== r)
    throw new nr("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], o = !0, a = !0;
  if ("length" in e && rr) {
    var i = rr(e, "length");
    i && !i.configurable && (o = !1), i && !i.writable && (a = !1);
  }
  return (o || a || !n) && (_a ? tr(
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
  var e = Rt, r = fe, n = La, o = Ee, a = r("%Function.prototype.apply%"), i = r("%Function.prototype.call%"), s = r("%Reflect.apply%", !0) || e.call(i, a), c = Pt(), u = r("%Math.max%");
  t.exports = function(p) {
    if (typeof p != "function")
      throw new o("a function is required");
    var g = s(e, i, arguments);
    return n(
      g,
      1 + u(0, p.length - (arguments.length - 1)),
      !0
    );
  };
  var l = function() {
    return s(e, a, arguments);
  };
  c ? c(t.exports, "apply", { value: l }) : t.exports.apply = l;
})(Hr);
var Ua = Hr.exports, Vr = fe, Gr = Ua, Ma = Gr(Vr("String.prototype.indexOf")), ka = function(e, r) {
  var n = Vr(e, !!r);
  return typeof n == "function" && Ma(e, ".prototype.") > -1 ? Gr(n) : n;
};
const qa = {}, ja = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qa
}, Symbol.toStringTag, { value: "Module" })), Wa = /* @__PURE__ */ Ho(ja);
var xt = typeof Map == "function" && Map.prototype, tt = Object.getOwnPropertyDescriptor && xt ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Le = xt && tt && typeof tt.get == "function" ? tt.get : null, or = xt && Map.prototype.forEach, Tt = typeof Set == "function" && Set.prototype, rt = Object.getOwnPropertyDescriptor && Tt ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Ue = Tt && rt && typeof rt.get == "function" ? rt.get : null, ar = Tt && Set.prototype.forEach, Ha = typeof WeakMap == "function" && WeakMap.prototype, me = Ha ? WeakMap.prototype.has : null, za = typeof WeakSet == "function" && WeakSet.prototype, ge = za ? WeakSet.prototype.has : null, Ja = typeof WeakRef == "function" && WeakRef.prototype, ir = Ja ? WeakRef.prototype.deref : null, Va = Boolean.prototype.valueOf, Ga = Object.prototype.toString, Ka = Function.prototype.toString, Qa = String.prototype.match, Ft = String.prototype.slice, V = String.prototype.replace, Xa = String.prototype.toUpperCase, sr = String.prototype.toLowerCase, Kr = RegExp.prototype.test, lr = Array.prototype.concat, q = Array.prototype.join, Ya = Array.prototype.slice, cr = Math.floor, mt = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, nt = Object.getOwnPropertySymbols, gt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, se = typeof Symbol == "function" && typeof Symbol.iterator == "object", C = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === se || !0) ? Symbol.toStringTag : null, Qr = Object.prototype.propertyIsEnumerable, ur = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function fr(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Kr.call(/e/, e))
    return e;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var n = t < 0 ? -cr(-t) : cr(t);
    if (n !== t) {
      var o = String(n), a = Ft.call(e, o.length + 1);
      return V.call(o, r, "$&_") + "." + V.call(V.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return V.call(e, r, "$&_");
}
var bt = Wa, pr = bt.custom, yr = Yr(pr) ? pr : null, Za = function t(e, r, n, o) {
  var a = r || {};
  if (J(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (J(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var i = J(a, "customInspect") ? a.customInspect : !0;
  if (typeof i != "boolean" && i !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (J(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (J(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var s = a.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return en(e, a);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var c = String(e);
    return s ? fr(e, c) : c;
  }
  if (typeof e == "bigint") {
    var u = String(e) + "n";
    return s ? fr(e, u) : u;
  }
  var l = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof n > "u" && (n = 0), n >= l && l > 0 && typeof e == "object")
    return vt(e) ? "[Array]" : "[Object]";
  var y = gi(a, n);
  if (typeof o > "u")
    o = [];
  else if (Zr(o, e) >= 0)
    return "[Circular]";
  function p(_, H, z) {
    if (H && (o = Ya.call(o), o.push(H)), z) {
      var ye = {
        depth: a.depth
      };
      return J(a, "quoteStyle") && (ye.quoteStyle = a.quoteStyle), t(_, ye, n + 1, o);
    }
    return t(_, a, n + 1, o);
  }
  if (typeof e == "function" && !dr(e)) {
    var g = li(e), d = Re(e, p);
    return "[Function" + (g ? ": " + g : " (anonymous)") + "]" + (d.length > 0 ? " { " + q.call(d, ", ") + " }" : "");
  }
  if (Yr(e)) {
    var m = se ? V.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : gt.call(e);
    return typeof e == "object" && !se ? he(m) : m;
  }
  if (di(e)) {
    for (var h = "<" + sr.call(String(e.nodeName)), S = e.attributes || [], E = 0; E < S.length; E++)
      h += " " + S[E].name + "=" + Xr(ei(S[E].value), "double", a);
    return h += ">", e.childNodes && e.childNodes.length && (h += "..."), h += "</" + sr.call(String(e.nodeName)) + ">", h;
  }
  if (vt(e)) {
    if (e.length === 0)
      return "[]";
    var b = Re(e, p);
    return y && !mi(b) ? "[" + wt(b, y) + "]" : "[ " + q.call(b, ", ") + " ]";
  }
  if (ri(e)) {
    var x = Re(e, p);
    return !("cause" in Error.prototype) && "cause" in e && !Qr.call(e, "cause") ? "{ [" + String(e) + "] " + q.call(lr.call("[cause]: " + p(e.cause), x), ", ") + " }" : x.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + q.call(x, ", ") + " }";
  }
  if (typeof e == "object" && i) {
    if (yr && typeof e[yr] == "function" && bt)
      return bt(e, { depth: l - n });
    if (i !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (ci(e)) {
    var A = [];
    return or && or.call(e, function(_, H) {
      A.push(p(H, e, !0) + " => " + p(_, e));
    }), hr("Map", Le.call(e), A, y);
  }
  if (pi(e)) {
    var D = [];
    return ar && ar.call(e, function(_) {
      D.push(p(_, e));
    }), hr("Set", Ue.call(e), D, y);
  }
  if (ui(e))
    return ot("WeakMap");
  if (yi(e))
    return ot("WeakSet");
  if (fi(e))
    return ot("WeakRef");
  if (oi(e))
    return he(p(Number(e)));
  if (ii(e))
    return he(p(mt.call(e)));
  if (ai(e))
    return he(Va.call(e));
  if (ni(e))
    return he(p(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && e === globalThis || typeof Vt < "u" && e === Vt)
    return "{ [object globalThis] }";
  if (!ti(e) && !dr(e)) {
    var $ = Re(e, p), j = ur ? ur(e) === Object.prototype : e instanceof Object || e.constructor === Object, L = e instanceof Object ? "" : "null prototype", W = !j && C && Object(e) === e && C in e ? Ft.call(G(e), 8, -1) : L ? "Object" : "", Oe = j || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", te = Oe + (W || L ? "[" + q.call(lr.call([], W || [], L || []), ": ") + "] " : "");
    return $.length === 0 ? te + "{}" : y ? te + "{" + wt($, y) + "}" : te + "{ " + q.call($, ", ") + " }";
  }
  return String(e);
};
function Xr(t, e, r) {
  var n = (r.quoteStyle || e) === "double" ? '"' : "'";
  return n + t + n;
}
function ei(t) {
  return V.call(String(t), /"/g, "&quot;");
}
function vt(t) {
  return G(t) === "[object Array]" && (!C || !(typeof t == "object" && C in t));
}
function ti(t) {
  return G(t) === "[object Date]" && (!C || !(typeof t == "object" && C in t));
}
function dr(t) {
  return G(t) === "[object RegExp]" && (!C || !(typeof t == "object" && C in t));
}
function ri(t) {
  return G(t) === "[object Error]" && (!C || !(typeof t == "object" && C in t));
}
function ni(t) {
  return G(t) === "[object String]" && (!C || !(typeof t == "object" && C in t));
}
function oi(t) {
  return G(t) === "[object Number]" && (!C || !(typeof t == "object" && C in t));
}
function ai(t) {
  return G(t) === "[object Boolean]" && (!C || !(typeof t == "object" && C in t));
}
function Yr(t) {
  if (se)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !gt)
    return !1;
  try {
    return gt.call(t), !0;
  } catch {
  }
  return !1;
}
function ii(t) {
  if (!t || typeof t != "object" || !mt)
    return !1;
  try {
    return mt.call(t), !0;
  } catch {
  }
  return !1;
}
var si = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function J(t, e) {
  return si.call(t, e);
}
function G(t) {
  return Ga.call(t);
}
function li(t) {
  if (t.name)
    return t.name;
  var e = Qa.call(Ka.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function Zr(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var r = 0, n = t.length; r < n; r++)
    if (t[r] === e)
      return r;
  return -1;
}
function ci(t) {
  if (!Le || !t || typeof t != "object")
    return !1;
  try {
    Le.call(t);
    try {
      Ue.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function ui(t) {
  if (!me || !t || typeof t != "object")
    return !1;
  try {
    me.call(t, me);
    try {
      ge.call(t, ge);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function fi(t) {
  if (!ir || !t || typeof t != "object")
    return !1;
  try {
    return ir.call(t), !0;
  } catch {
  }
  return !1;
}
function pi(t) {
  if (!Ue || !t || typeof t != "object")
    return !1;
  try {
    Ue.call(t);
    try {
      Le.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function yi(t) {
  if (!ge || !t || typeof t != "object")
    return !1;
  try {
    ge.call(t, ge);
    try {
      me.call(t, me);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {
  }
  return !1;
}
function di(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function en(t, e) {
  if (t.length > e.maxStringLength) {
    var r = t.length - e.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return en(Ft.call(t, 0, e.maxStringLength), e) + n;
  }
  var o = V.call(V.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, hi);
  return Xr(o, "single", e);
}
function hi(t) {
  var e = t.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + Xa.call(e.toString(16));
}
function he(t) {
  return "Object(" + t + ")";
}
function ot(t) {
  return t + " { ? }";
}
function hr(t, e, r, n) {
  var o = n ? wt(r, n) : q.call(r, ", ");
  return t + " (" + e + ") {" + o + "}";
}
function mi(t) {
  for (var e = 0; e < t.length; e++)
    if (Zr(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function gi(t, e) {
  var r;
  if (t.indent === "	")
    r = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    r = q.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: q.call(Array(e + 1), r)
  };
}
function wt(t, e) {
  if (t.length === 0)
    return "";
  var r = `
` + e.prev + e.base;
  return r + q.call(t, "," + r) + `
` + e.prev;
}
function Re(t, e) {
  var r = vt(t), n = [];
  if (r) {
    n.length = t.length;
    for (var o = 0; o < t.length; o++)
      n[o] = J(t, o) ? e(t[o], t) : "";
  }
  var a = typeof nt == "function" ? nt(t) : [], i;
  if (se) {
    i = {};
    for (var s = 0; s < a.length; s++)
      i["$" + a[s]] = a[s];
  }
  for (var c in t)
    J(t, c) && (r && String(Number(c)) === c && c < t.length || se && i["$" + c] instanceof Symbol || (Kr.call(/[^\w$]/, c) ? n.push(e(c, t) + ": " + e(t[c], t)) : n.push(c + ": " + e(t[c], t))));
  if (typeof nt == "function")
    for (var u = 0; u < a.length; u++)
      Qr.call(t, a[u]) && n.push("[" + e(a[u]) + "]: " + e(t[a[u]], t));
  return n;
}
var tn = fe, pe = ka, bi = Za, vi = Ee, Pe = tn("%WeakMap%", !0), xe = tn("%Map%", !0), wi = pe("WeakMap.prototype.get", !0), Si = pe("WeakMap.prototype.set", !0), Ei = pe("WeakMap.prototype.has", !0), Ai = pe("Map.prototype.get", !0), Oi = pe("Map.prototype.set", !0), Ri = pe("Map.prototype.has", !0), Ct = function(t, e) {
  for (var r = t, n; (n = r.next) !== null; r = n)
    if (n.key === e)
      return r.next = n.next, n.next = /** @type {NonNullable<typeof list.next>} */
      t.next, t.next = n, n;
}, Pi = function(t, e) {
  var r = Ct(t, e);
  return r && r.value;
}, xi = function(t, e, r) {
  var n = Ct(t, e);
  n ? n.value = r : t.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: e,
    next: t.next,
    value: r
  };
}, Ti = function(t, e) {
  return !!Ct(t, e);
}, Fi = function() {
  var e, r, n, o = {
    assert: function(a) {
      if (!o.has(a))
        throw new vi("Side channel does not contain " + bi(a));
    },
    get: function(a) {
      if (Pe && a && (typeof a == "object" || typeof a == "function")) {
        if (e)
          return wi(e, a);
      } else if (xe) {
        if (r)
          return Ai(r, a);
      } else if (n)
        return Pi(n, a);
    },
    has: function(a) {
      if (Pe && a && (typeof a == "object" || typeof a == "function")) {
        if (e)
          return Ei(e, a);
      } else if (xe) {
        if (r)
          return Ri(r, a);
      } else if (n)
        return Ti(n, a);
      return !1;
    },
    set: function(a, i) {
      Pe && a && (typeof a == "object" || typeof a == "function") ? (e || (e = new Pe()), Si(e, a, i)) : xe ? (r || (r = new xe()), Oi(r, a, i)) : (n || (n = { key: {}, next: null }), xi(n, a, i));
    }
  };
  return o;
}, Ci = String.prototype.replace, Di = /%20/g, at = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Dt = {
  default: at.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return Ci.call(t, Di, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: at.RFC1738,
  RFC3986: at.RFC3986
}, $i = Dt, it = Object.prototype.hasOwnProperty, K = Array.isArray, M = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), Ni = function(e) {
  for (; e.length > 1; ) {
    var r = e.pop(), n = r.obj[r.prop];
    if (K(n)) {
      for (var o = [], a = 0; a < n.length; ++a)
        typeof n[a] < "u" && o.push(n[a]);
      r.obj[r.prop] = o;
    }
  }
}, rn = function(e, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o = 0; o < e.length; ++o)
    typeof e[o] < "u" && (n[o] = e[o]);
  return n;
}, Ii = function t(e, r, n) {
  if (!r)
    return e;
  if (typeof r != "object") {
    if (K(e))
      e.push(r);
    else if (e && typeof e == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !it.call(Object.prototype, r)) && (e[r] = !0);
    else
      return [e, r];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(r);
  var o = e;
  return K(e) && !K(r) && (o = rn(e, n)), K(e) && K(r) ? (r.forEach(function(a, i) {
    if (it.call(e, i)) {
      var s = e[i];
      s && typeof s == "object" && a && typeof a == "object" ? e[i] = t(s, a, n) : e.push(a);
    } else
      e[i] = a;
  }), e) : Object.keys(r).reduce(function(a, i) {
    var s = r[i];
    return it.call(a, i) ? a[i] = t(a[i], s, n) : a[i] = s, a;
  }, o);
}, _i = function(e, r) {
  return Object.keys(r).reduce(function(n, o) {
    return n[o] = r[o], n;
  }, e);
}, Bi = function(t, e, r) {
  var n = t.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, st = 1024, Li = function(e, r, n, o, a) {
  if (e.length === 0)
    return e;
  var i = e;
  if (typeof e == "symbol" ? i = Symbol.prototype.toString.call(e) : typeof e != "string" && (i = String(e)), n === "iso-8859-1")
    return escape(i).replace(/%u[0-9a-f]{4}/gi, function(g) {
      return "%26%23" + parseInt(g.slice(2), 16) + "%3B";
    });
  for (var s = "", c = 0; c < i.length; c += st) {
    for (var u = i.length >= st ? i.slice(c, c + st) : i, l = [], y = 0; y < u.length; ++y) {
      var p = u.charCodeAt(y);
      if (p === 45 || p === 46 || p === 95 || p === 126 || p >= 48 && p <= 57 || p >= 65 && p <= 90 || p >= 97 && p <= 122 || a === $i.RFC1738 && (p === 40 || p === 41)) {
        l[l.length] = u.charAt(y);
        continue;
      }
      if (p < 128) {
        l[l.length] = M[p];
        continue;
      }
      if (p < 2048) {
        l[l.length] = M[192 | p >> 6] + M[128 | p & 63];
        continue;
      }
      if (p < 55296 || p >= 57344) {
        l[l.length] = M[224 | p >> 12] + M[128 | p >> 6 & 63] + M[128 | p & 63];
        continue;
      }
      y += 1, p = 65536 + ((p & 1023) << 10 | u.charCodeAt(y) & 1023), l[l.length] = M[240 | p >> 18] + M[128 | p >> 12 & 63] + M[128 | p >> 6 & 63] + M[128 | p & 63];
    }
    s += l.join("");
  }
  return s;
}, Ui = function(e) {
  for (var r = [{ obj: { o: e }, prop: "o" }], n = [], o = 0; o < r.length; ++o)
    for (var a = r[o], i = a.obj[a.prop], s = Object.keys(i), c = 0; c < s.length; ++c) {
      var u = s[c], l = i[u];
      typeof l == "object" && l !== null && n.indexOf(l) === -1 && (r.push({ obj: i, prop: u }), n.push(l));
    }
  return Ni(r), e;
}, Mi = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, ki = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, qi = function(e, r) {
  return [].concat(e, r);
}, ji = function(e, r) {
  if (K(e)) {
    for (var n = [], o = 0; o < e.length; o += 1)
      n.push(r(e[o]));
    return n;
  }
  return r(e);
}, nn = {
  arrayToObject: rn,
  assign: _i,
  combine: qi,
  compact: Ui,
  decode: Bi,
  encode: Li,
  isBuffer: ki,
  isRegExp: Mi,
  maybeMap: ji,
  merge: Ii
}, on = Fi, $e = nn, be = Dt, Wi = Object.prototype.hasOwnProperty, an = {
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
}, k = Array.isArray, Hi = Array.prototype.push, sn = function(t, e) {
  Hi.apply(t, k(e) ? e : [e]);
}, zi = Date.prototype.toISOString, mr = be.default, P = {
  addQueryPrefix: !1,
  allowDots: !1,
  allowEmptyArrays: !1,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encodeDotInKeys: !1,
  encoder: $e.encode,
  encodeValuesOnly: !1,
  format: mr,
  formatter: be.formatters[mr],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return zi.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, Ji = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, lt = {}, Vi = function t(e, r, n, o, a, i, s, c, u, l, y, p, g, d, m, h, S, E) {
  for (var b = e, x = E, A = 0, D = !1; (x = x.get(lt)) !== void 0 && !D; ) {
    var $ = x.get(e);
    if (A += 1, typeof $ < "u") {
      if ($ === A)
        throw new RangeError("Cyclic object value");
      D = !0;
    }
    typeof x.get(lt) > "u" && (A = 0);
  }
  if (typeof l == "function" ? b = l(r, b) : b instanceof Date ? b = g(b) : n === "comma" && k(b) && (b = $e.maybeMap(b, function(Ve) {
    return Ve instanceof Date ? g(Ve) : Ve;
  })), b === null) {
    if (i)
      return u && !h ? u(r, P.encoder, S, "key", d) : r;
    b = "";
  }
  if (Ji(b) || $e.isBuffer(b)) {
    if (u) {
      var j = h ? r : u(r, P.encoder, S, "key", d);
      return [m(j) + "=" + m(u(b, P.encoder, S, "value", d))];
    }
    return [m(r) + "=" + m(String(b))];
  }
  var L = [];
  if (typeof b > "u")
    return L;
  var W;
  if (n === "comma" && k(b))
    h && u && (b = $e.maybeMap(b, u)), W = [{ value: b.length > 0 ? b.join(",") || null : void 0 }];
  else if (k(l))
    W = l;
  else {
    var Oe = Object.keys(b);
    W = y ? Oe.sort(y) : Oe;
  }
  var te = c ? r.replace(/\./g, "%2E") : r, _ = o && k(b) && b.length === 1 ? te + "[]" : te;
  if (a && k(b) && b.length === 0)
    return _ + "[]";
  for (var H = 0; H < W.length; ++H) {
    var z = W[H], ye = typeof z == "object" && typeof z.value < "u" ? z.value : b[z];
    if (!(s && ye === null)) {
      var Je = p && c ? z.replace(/\./g, "%2E") : z, cn = k(b) ? typeof n == "function" ? n(_, Je) : _ : _ + (p ? "." + Je : "[" + Je + "]");
      E.set(e, A);
      var $t = on();
      $t.set(lt, E), sn(L, t(
        ye,
        cn,
        n,
        o,
        a,
        i,
        s,
        c,
        n === "comma" && h && k(b) ? null : u,
        l,
        y,
        p,
        g,
        d,
        m,
        h,
        S,
        $t
      ));
    }
  }
  return L;
}, Gi = function(e) {
  if (!e)
    return P;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.encodeDotInKeys < "u" && typeof e.encodeDotInKeys != "boolean")
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = e.charset || P.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = be.default;
  if (typeof e.format < "u") {
    if (!Wi.call(be.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var o = be.formatters[n], a = P.filter;
  (typeof e.filter == "function" || k(e.filter)) && (a = e.filter);
  var i;
  if (e.arrayFormat in an ? i = e.arrayFormat : "indices" in e ? i = e.indices ? "indices" : "repeat" : i = P.arrayFormat, "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var s = typeof e.allowDots > "u" ? e.encodeDotInKeys === !0 ? !0 : P.allowDots : !!e.allowDots;
  return {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : P.addQueryPrefix,
    allowDots: s,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : P.allowEmptyArrays,
    arrayFormat: i,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : P.charsetSentinel,
    commaRoundTrip: e.commaRoundTrip,
    delimiter: typeof e.delimiter > "u" ? P.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : P.encode,
    encodeDotInKeys: typeof e.encodeDotInKeys == "boolean" ? e.encodeDotInKeys : P.encodeDotInKeys,
    encoder: typeof e.encoder == "function" ? e.encoder : P.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : P.encodeValuesOnly,
    filter: a,
    format: n,
    formatter: o,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : P.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : P.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : P.strictNullHandling
  };
}, Ki = function(t, e) {
  var r = t, n = Gi(e), o, a;
  typeof n.filter == "function" ? (a = n.filter, r = a("", r)) : k(n.filter) && (a = n.filter, o = a);
  var i = [];
  if (typeof r != "object" || r === null)
    return "";
  var s = an[n.arrayFormat], c = s === "comma" && n.commaRoundTrip;
  o || (o = Object.keys(r)), n.sort && o.sort(n.sort);
  for (var u = on(), l = 0; l < o.length; ++l) {
    var y = o[l];
    n.skipNulls && r[y] === null || sn(i, Vi(
      r[y],
      y,
      s,
      c,
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
      u
    ));
  }
  var p = i.join(n.delimiter), g = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? g += "utf8=%26%2310003%3B&" : g += "utf8=%E2%9C%93&"), p.length > 0 ? g + p : "";
}, le = nn, St = Object.prototype.hasOwnProperty, Qi = Array.isArray, O = {
  allowDots: !1,
  allowEmptyArrays: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decodeDotInKeys: !1,
  decoder: le.decode,
  delimiter: "&",
  depth: 5,
  duplicates: "combine",
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, Xi = function(t) {
  return t.replace(/&#(\d+);/g, function(e, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, ln = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, Yi = "utf8=%26%2310003%3B", Zi = "utf8=%E2%9C%93", es = function(e, r) {
  var n = { __proto__: null }, o = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, i = o.split(r.delimiter, a), s = -1, c, u = r.charset;
  if (r.charsetSentinel)
    for (c = 0; c < i.length; ++c)
      i[c].indexOf("utf8=") === 0 && (i[c] === Zi ? u = "utf-8" : i[c] === Yi && (u = "iso-8859-1"), s = c, c = i.length);
  for (c = 0; c < i.length; ++c)
    if (c !== s) {
      var l = i[c], y = l.indexOf("]="), p = y === -1 ? l.indexOf("=") : y + 1, g, d;
      p === -1 ? (g = r.decoder(l, O.decoder, u, "key"), d = r.strictNullHandling ? null : "") : (g = r.decoder(l.slice(0, p), O.decoder, u, "key"), d = le.maybeMap(
        ln(l.slice(p + 1), r),
        function(h) {
          return r.decoder(h, O.decoder, u, "value");
        }
      )), d && r.interpretNumericEntities && u === "iso-8859-1" && (d = Xi(d)), l.indexOf("[]=") > -1 && (d = Qi(d) ? [d] : d);
      var m = St.call(n, g);
      m && r.duplicates === "combine" ? n[g] = le.combine(n[g], d) : (!m || r.duplicates === "last") && (n[g] = d);
    }
  return n;
}, ts = function(t, e, r, n) {
  for (var o = n ? e : ln(e, r), a = t.length - 1; a >= 0; --a) {
    var i, s = t[a];
    if (s === "[]" && r.parseArrays)
      i = r.allowEmptyArrays && o === "" ? [] : [].concat(o);
    else {
      i = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var c = s.charAt(0) === "[" && s.charAt(s.length - 1) === "]" ? s.slice(1, -1) : s, u = r.decodeDotInKeys ? c.replace(/%2E/g, ".") : c, l = parseInt(u, 10);
      !r.parseArrays && u === "" ? i = { 0: o } : !isNaN(l) && s !== u && String(l) === u && l >= 0 && r.parseArrays && l <= r.arrayLimit ? (i = [], i[l] = o) : u !== "__proto__" && (i[u] = o);
    }
    o = i;
  }
  return o;
}, rs = function(e, r, n, o) {
  if (e) {
    var a = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, i = /(\[[^[\]]*])/, s = /(\[[^[\]]*])/g, c = n.depth > 0 && i.exec(a), u = c ? a.slice(0, c.index) : a, l = [];
    if (u) {
      if (!n.plainObjects && St.call(Object.prototype, u) && !n.allowPrototypes)
        return;
      l.push(u);
    }
    for (var y = 0; n.depth > 0 && (c = s.exec(a)) !== null && y < n.depth; ) {
      if (y += 1, !n.plainObjects && St.call(Object.prototype, c[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      l.push(c[1]);
    }
    return c && l.push("[" + a.slice(c.index) + "]"), ts(l, r, n, o);
  }
}, ns = function(e) {
  if (!e)
    return O;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.decodeDotInKeys < "u" && typeof e.decodeDotInKeys != "boolean")
    throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.decoder !== null && typeof e.decoder < "u" && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof e.charset > "u" ? O.charset : e.charset, n = typeof e.duplicates > "u" ? O.duplicates : e.duplicates;
  if (n !== "combine" && n !== "first" && n !== "last")
    throw new TypeError("The duplicates option must be either combine, first, or last");
  var o = typeof e.allowDots > "u" ? e.decodeDotInKeys === !0 ? !0 : O.allowDots : !!e.allowDots;
  return {
    allowDots: o,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : O.allowEmptyArrays,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : O.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : O.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : O.arrayLimit,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : O.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : O.comma,
    decodeDotInKeys: typeof e.decodeDotInKeys == "boolean" ? e.decodeDotInKeys : O.decodeDotInKeys,
    decoder: typeof e.decoder == "function" ? e.decoder : O.decoder,
    delimiter: typeof e.delimiter == "string" || le.isRegExp(e.delimiter) ? e.delimiter : O.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : O.depth,
    duplicates: n,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : O.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : O.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : O.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : O.strictNullHandling
  };
}, os = function(t, e) {
  var r = ns(e);
  if (t === "" || t === null || typeof t > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof t == "string" ? es(t, r) : t, o = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = Object.keys(n), i = 0; i < a.length; ++i) {
    var s = a[i], c = rs(s, n[s], r, typeof t == "string");
    o = le.merge(o, c, r);
  }
  return r.allowSparse === !0 ? o : le.compact(o);
}, as = Ki, is = os, ss = Dt, ls = {
  formats: ss,
  parse: is,
  stringify: as
};
const cs = /* @__PURE__ */ Wo(ls), us = R.create({
  timeout: 60 * 1e3
  // 请求超时时间
}), zs = (t) => {
  let {
    baseUrl: e,
    url: r,
    param: n = null,
    method: o = "POST",
    returnPromise: a = !1,
    errorResponse: i,
    callback: s,
    axiosInstance: c,
    qsOptions: u = { allowDots: !0 },
    interceptors: l
  } = t || {};
  if (!e || !r)
    throw new Error("baseUrl and url are required");
  const y = c || us;
  let p = n;
  n instanceof FormData || (p = cs.stringify(n, u)), o.toUpperCase() === "GET" && (r += `?${p}`, p = "");
  const d = Object.assign({
    baseURL: e,
    url: r,
    method: o,
    data: p
  }, y.defaults);
  l && l(y);
  const m = y(d);
  if (a)
    return m;
  m.then((h) => {
    h && h.data && s && s(h.data);
  }).catch((h) => {
    console.error("An error occurred on the request:", h);
    const S = i ? i(h) : { code: 500, data: h, message: `An error occurred on the request: ${h}`, success: !1 };
    s && s(S);
  });
}, Js = (t, e) => t.length === 0 ? Promise.resolve([]) : new Promise((r) => {
  let n = 0;
  const o = [];
  let a = 0;
  async function i() {
    const s = n, c = t[n];
    n++;
    try {
      const u = await c;
      o[s] = u;
    } catch (u) {
      o[s] = u;
    } finally {
      a++, a === t.length && r(o), n < t.length && i();
    }
  }
  for (let s = 0; s < Math.min(t.length, e); s++)
    i();
});
class Vs {
  /**
   * 初始化事件处理器
   *
   * @param {ReadonlyArray<T>} eventNames 事件名数组
   */
  constructor(e) {
    // 存储监听器
    Nt(this, "listeners", {});
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
        } catch (a) {
          console.error(`An error occurred on the listener for event ${e}:`, a);
        }
      })
    );
  }
}
const Gs = async (t, e) => {
  e = e || 5 * 1024 * 1024;
  const r = Math.ceil(t.size / e), n = typeof navigator < "u" && navigator.hardwareConcurrency ? Math.max(2, Math.min(navigator.hardwareConcurrency, 16)) : 8, o = Array.from({ length: r }, (l, y) => {
    const p = y * e, g = Math.min(p + e, t.size), d = t.slice(p, g);
    return { start: p, end: g, index: y, blob: d };
  });
  function a(l) {
    return new Promise((y, p) => {
      const g = new FileReader();
      g.onload = () => y(g.result), g.onerror = () => p(g.error), g.readAsArrayBuffer(l);
    });
  }
  const i = Array.from({ length: n }, fs), s = new Array(r);
  let c = 0;
  async function u(l) {
    for (; c < o.length; ) {
      const y = c++, p = o[y], g = await a(p.blob), d = await new Promise((m) => {
        l.onmessage = (h) => m(h.data.hash), l.postMessage({ index: p.index, buffer: g }, [g]);
      });
      s[y] = { ...p, hash: d };
    }
  }
  return await Promise.all(i.map(u)), i.forEach((l) => l.terminate()), s;
};
function fs() {
  const t = `
    importScripts("https://unpkg.com/spark-md5@3.0.2/spark-md5.min.js");
    
    self.onmessage = function(e) {
      const { index, buffer } = e.data;
      const spark = new self.SparkMD5.ArrayBuffer();
      spark.append(buffer);
      const hash = spark.end();
      self.postMessage({ index, hash });
    };
  `, e = new Blob([t], { type: "application/javascript" });
  return new Worker(URL.createObjectURL(e));
}
export {
  Vs as EventEmitter,
  Os as checkLocalInfo,
  Js as concurRequest,
  gs as copyText,
  Gs as cutAndHashFile,
  ds as formatCommas,
  ys as formatDate,
  ms as formatFileSize,
  As as loadLocalInfo,
  Ps as maskStr,
  hs as openChooseFile,
  Rs as removeLocalInfo,
  Es as saveLocalInfo,
  bs as searchKeywordInfo,
  vs as searchKeywordList,
  ws as searchTypeList,
  zs as send,
  Ss as sortList
};
