(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function (t, e, n) {
      t.exports = n("zUnb");
    },
    "0EUg": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var s = n("bHdf");
      function r() {
        return Object(s.a)(1);
      }
    },
    "2QA8": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (() =>
        "function" == typeof Symbol
          ? Symbol("rxSubscriber")
          : "@@rxSubscriber_" + Math.random())();
    },
    "2Vo4": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n("XNiG"),
        r = n("9ppp");
      class i extends s.a {
        constructor(t) {
          super(), (this._value = t);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(t) {
          const e = super._subscribe(t);
          return e && !e.closed && t.next(this._value), e;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new r.a();
          return this._value;
        }
        next(t) {
          super.next((this._value = t));
        }
      }
    },
    "2fFW": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      let s = !1;
      const r = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(t) {
          if (t) {
            const t = new Error();
            console.warn(
              "DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" +
                t.stack
            );
          } else
            s &&
              console.log(
                "RxJS: Back to a better error behavior. Thank you. <3"
              );
          s = t;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return s;
        },
      };
    },
    "3N8a": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n("quSY");
      class r extends s.a {
        constructor(t, e) {
          super();
        }
        schedule(t, e = 0) {
          return this;
        }
      }
      class i extends r {
        constructor(t, e) {
          super(t, e),
            (this.scheduler = t),
            (this.work = e),
            (this.pending = !1);
        }
        schedule(t, e = 0) {
          if (this.closed) return this;
          this.state = t;
          const n = this.id,
            s = this.scheduler;
          return (
            null != n && (this.id = this.recycleAsyncId(s, n, e)),
            (this.pending = !0),
            (this.delay = e),
            (this.id = this.id || this.requestAsyncId(s, this.id, e)),
            this
          );
        }
        requestAsyncId(t, e, n = 0) {
          return setInterval(t.flush.bind(t, this), n);
        }
        recycleAsyncId(t, e, n = 0) {
          if (null !== n && this.delay === n && !1 === this.pending) return e;
          clearInterval(e);
        }
        execute(t, e) {
          if (this.closed) return new Error("executing a cancelled action");
          this.pending = !1;
          const n = this._execute(t, e);
          if (n) return n;
          !1 === this.pending &&
            null != this.id &&
            (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(t, e) {
          let n = !1,
            s = void 0;
          try {
            this.work(t);
          } catch (r) {
            (n = !0), (s = (!!r && r) || new Error(r));
          }
          if (n) return this.unsubscribe(), s;
        }
        _unsubscribe() {
          const t = this.id,
            e = this.scheduler,
            n = e.actions,
            s = n.indexOf(this);
          (this.work = null),
            (this.state = null),
            (this.pending = !1),
            (this.scheduler = null),
            -1 !== s && n.splice(s, 1),
            null != t && (this.id = this.recycleAsyncId(e, t, null)),
            (this.delay = null);
        }
      }
    },
    "3Pt+": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return p;
      }),
        n.d(e, "b", function () {
          return lt;
        }),
        n.d(e, "c", function () {
          return b;
        }),
        n.d(e, "d", function () {
          return ot;
        });
      var s = n("fXoL"),
        r = n("ofXK"),
        i = n("cp0P"),
        o = n("Cfvw"),
        a = n("lJxs");
      const l = new s.q("NgValueAccessor"),
        c = { provide: l, useExisting: Object(s.T)(() => u), multi: !0 };
      let u = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this.onChange = (t) => {}),
              (this.onTouched = () => {});
          }
          writeValue(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              "checked",
              t
            );
          }
          registerOnChange(t) {
            this.onChange = t;
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              "disabled",
              t
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Kb(s.E), s.Kb(s.l));
          }),
          (t.ɵdir = s.Fb({
            type: t,
            selectors: [
              ["input", "type", "checkbox", "formControlName", ""],
              ["input", "type", "checkbox", "formControl", ""],
              ["input", "type", "checkbox", "ngModel", ""],
            ],
            hostBindings: function (t, e) {
              1 & t &&
                s.Ub("change", function (t) {
                  return e.onChange(t.target.checked);
                })("blur", function () {
                  return e.onTouched();
                });
            },
            features: [s.yb([c])],
          })),
          t
        );
      })();
      const h = { provide: l, useExisting: Object(s.T)(() => p), multi: !0 },
        d = new s.q("CompositionEventMode");
      let p = (() => {
          class t {
            constructor(t, e, n) {
              (this._renderer = t),
                (this._elementRef = e),
                (this._compositionMode = n),
                (this.onChange = (t) => {}),
                (this.onTouched = () => {}),
                (this._composing = !1),
                null == this._compositionMode &&
                  (this._compositionMode = !(function () {
                    const t = Object(r.r)() ? Object(r.r)().getUserAgent() : "";
                    return /android (\d+)/.test(t.toLowerCase());
                  })());
            }
            writeValue(t) {
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                "value",
                null == t ? "" : t
              );
            }
            registerOnChange(t) {
              this.onChange = t;
            }
            registerOnTouched(t) {
              this.onTouched = t;
            }
            setDisabledState(t) {
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                "disabled",
                t
              );
            }
            _handleInput(t) {
              (!this._compositionMode ||
                (this._compositionMode && !this._composing)) &&
                this.onChange(t);
            }
            _compositionStart() {
              this._composing = !0;
            }
            _compositionEnd(t) {
              (this._composing = !1), this._compositionMode && this.onChange(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Kb(s.E), s.Kb(s.l), s.Kb(d, 8));
            }),
            (t.ɵdir = s.Fb({
              type: t,
              selectors: [
                ["input", "formControlName", "", 3, "type", "checkbox"],
                ["textarea", "formControlName", ""],
                ["input", "formControl", "", 3, "type", "checkbox"],
                ["textarea", "formControl", ""],
                ["input", "ngModel", "", 3, "type", "checkbox"],
                ["textarea", "ngModel", ""],
                ["", "ngDefaultControl", ""],
              ],
              hostBindings: function (t, e) {
                1 & t &&
                  s.Ub("input", function (t) {
                    return e._handleInput(t.target.value);
                  })("blur", function () {
                    return e.onTouched();
                  })("compositionstart", function () {
                    return e._compositionStart();
                  })("compositionend", function (t) {
                    return e._compositionEnd(t.target.value);
                  });
              },
              features: [s.yb([h])],
            })),
            t
          );
        })(),
        f = (() => {
          class t {
            get value() {
              return this.control ? this.control.value : null;
            }
            get valid() {
              return this.control ? this.control.valid : null;
            }
            get invalid() {
              return this.control ? this.control.invalid : null;
            }
            get pending() {
              return this.control ? this.control.pending : null;
            }
            get disabled() {
              return this.control ? this.control.disabled : null;
            }
            get enabled() {
              return this.control ? this.control.enabled : null;
            }
            get errors() {
              return this.control ? this.control.errors : null;
            }
            get pristine() {
              return this.control ? this.control.pristine : null;
            }
            get dirty() {
              return this.control ? this.control.dirty : null;
            }
            get touched() {
              return this.control ? this.control.touched : null;
            }
            get status() {
              return this.control ? this.control.status : null;
            }
            get untouched() {
              return this.control ? this.control.untouched : null;
            }
            get statusChanges() {
              return this.control ? this.control.statusChanges : null;
            }
            get valueChanges() {
              return this.control ? this.control.valueChanges : null;
            }
            get path() {
              return null;
            }
            reset(t) {
              this.control && this.control.reset(t);
            }
            hasError(t, e) {
              return !!this.control && this.control.hasError(t, e);
            }
            getError(t, e) {
              return this.control ? this.control.getError(t, e) : null;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵdir = s.Fb({ type: t })),
            t
          );
        })(),
        m = (() => {
          class t extends f {
            get formDirective() {
              return null;
            }
            get path() {
              return null;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return g(e || t);
            }),
            (t.ɵdir = s.Fb({ type: t, features: [s.wb] })),
            t
          );
        })();
      const g = s.Pb(m);
      class _ extends f {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null),
            (this._rawValidators = []),
            (this._rawAsyncValidators = []);
        }
        get validator() {}
        get asyncValidator() {}
      }
      let b = (() => {
        class t extends class {
          constructor(t) {
            this._cd = t;
          }
          get ngClassUntouched() {
            return !!this._cd.control && this._cd.control.untouched;
          }
          get ngClassTouched() {
            return !!this._cd.control && this._cd.control.touched;
          }
          get ngClassPristine() {
            return !!this._cd.control && this._cd.control.pristine;
          }
          get ngClassDirty() {
            return !!this._cd.control && this._cd.control.dirty;
          }
          get ngClassValid() {
            return !!this._cd.control && this._cd.control.valid;
          }
          get ngClassInvalid() {
            return !!this._cd.control && this._cd.control.invalid;
          }
          get ngClassPending() {
            return !!this._cd.control && this._cd.control.pending;
          }
        } {
          constructor(t) {
            super(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Kb(_, 2));
          }),
          (t.ɵdir = s.Fb({
            type: t,
            selectors: [
              ["", "formControlName", ""],
              ["", "ngModel", ""],
              ["", "formControl", ""],
            ],
            hostVars: 14,
            hostBindings: function (t, e) {
              2 & t &&
                s.Cb("ng-untouched", e.ngClassUntouched)(
                  "ng-touched",
                  e.ngClassTouched
                )("ng-pristine", e.ngClassPristine)("ng-dirty", e.ngClassDirty)(
                  "ng-valid",
                  e.ngClassValid
                )("ng-invalid", e.ngClassInvalid)(
                  "ng-pending",
                  e.ngClassPending
                );
            },
            features: [s.wb],
          })),
          t
        );
      })();
      function y(t) {
        return null == t || 0 === t.length;
      }
      function v(t) {
        return null != t && "number" == typeof t.length;
      }
      const w = new s.q("NgValidators"),
        C = new s.q("NgAsyncValidators"),
        S = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class E {
        static min(t) {
          return (e) => {
            if (y(e.value) || y(t)) return null;
            const n = parseFloat(e.value);
            return !isNaN(n) && n < t
              ? { min: { min: t, actual: e.value } }
              : null;
          };
        }
        static max(t) {
          return (e) => {
            if (y(e.value) || y(t)) return null;
            const n = parseFloat(e.value);
            return !isNaN(n) && n > t
              ? { max: { max: t, actual: e.value } }
              : null;
          };
        }
        static required(t) {
          return y(t.value) ? { required: !0 } : null;
        }
        static requiredTrue(t) {
          return !0 === t.value ? null : { required: !0 };
        }
        static email(t) {
          return y(t.value) || S.test(t.value) ? null : { email: !0 };
        }
        static minLength(t) {
          return (e) =>
            y(e.value) || !v(e.value)
              ? null
              : e.value.length < t
              ? {
                  minlength: {
                    requiredLength: t,
                    actualLength: e.value.length,
                  },
                }
              : null;
        }
        static maxLength(t) {
          return (e) =>
            v(e.value) && e.value.length > t
              ? {
                  maxlength: {
                    requiredLength: t,
                    actualLength: e.value.length,
                  },
                }
              : null;
        }
        static pattern(t) {
          if (!t) return E.nullValidator;
          let e, n;
          return (
            "string" == typeof t
              ? ((n = ""),
                "^" !== t.charAt(0) && (n += "^"),
                (n += t),
                "$" !== t.charAt(t.length - 1) && (n += "$"),
                (e = new RegExp(n)))
              : ((n = t.toString()), (e = t)),
            (t) => {
              if (y(t.value)) return null;
              const s = t.value;
              return e.test(s)
                ? null
                : { pattern: { requiredPattern: n, actualValue: s } };
            }
          );
        }
        static nullValidator(t) {
          return null;
        }
        static compose(t) {
          if (!t) return null;
          const e = t.filter(O);
          return 0 == e.length
            ? null
            : function (t) {
                return k(T(t, e));
              };
        }
        static composeAsync(t) {
          if (!t) return null;
          const e = t.filter(O);
          return 0 == e.length
            ? null
            : function (t) {
                const n = T(t, e).map(x);
                return Object(i.a)(n).pipe(Object(a.a)(k));
              };
        }
      }
      function O(t) {
        return null != t;
      }
      function x(t) {
        const e = Object(s.rb)(t) ? Object(o.a)(t) : t;
        return Object(s.qb)(e), e;
      }
      function k(t) {
        let e = {};
        return (
          t.forEach((t) => {
            e = null != t ? Object.assign(Object.assign({}, e), t) : e;
          }),
          0 === Object.keys(e).length ? null : e
        );
      }
      function T(t, e) {
        return e.map((e) => e(t));
      }
      function R(t) {
        return t.map((t) =>
          (function (t) {
            return !t.validate;
          })(t)
            ? t
            : (e) => t.validate(e)
        );
      }
      const A = { provide: l, useExisting: Object(s.T)(() => I), multi: !0 };
      let I = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this.onChange = (t) => {}),
              (this.onTouched = () => {});
          }
          writeValue(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              "value",
              null == t ? "" : t
            );
          }
          registerOnChange(t) {
            this.onChange = (e) => {
              t("" == e ? null : parseFloat(e));
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              "disabled",
              t
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Kb(s.E), s.Kb(s.l));
          }),
          (t.ɵdir = s.Fb({
            type: t,
            selectors: [
              ["input", "type", "number", "formControlName", ""],
              ["input", "type", "number", "formControl", ""],
              ["input", "type", "number", "ngModel", ""],
            ],
            hostBindings: function (t, e) {
              1 & t &&
                s.Ub("input", function (t) {
                  return e.onChange(t.target.value);
                })("blur", function () {
                  return e.onTouched();
                });
            },
            features: [s.yb([A])],
          })),
          t
        );
      })();
      const j = { provide: l, useExisting: Object(s.T)(() => D), multi: !0 };
      let P = (() => {
          class t {
            constructor() {
              this._accessors = [];
            }
            add(t, e) {
              this._accessors.push([t, e]);
            }
            remove(t) {
              for (let e = this._accessors.length - 1; e >= 0; --e)
                if (this._accessors[e][1] === t)
                  return void this._accessors.splice(e, 1);
            }
            select(t) {
              this._accessors.forEach((e) => {
                this._isSameGroup(e, t) &&
                  e[1] !== t &&
                  e[1].fireUncheck(t.value);
              });
            }
            _isSameGroup(t, e) {
              return (
                !!t[0].control &&
                t[0]._parent === e._control._parent &&
                t[1].name === e.name
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        D = (() => {
          class t {
            constructor(t, e, n, s) {
              (this._renderer = t),
                (this._elementRef = e),
                (this._registry = n),
                (this._injector = s),
                (this.onChange = () => {}),
                (this.onTouched = () => {});
            }
            ngOnInit() {
              (this._control = this._injector.get(_)),
                this._checkName(),
                this._registry.add(this._control, this);
            }
            ngOnDestroy() {
              this._registry.remove(this);
            }
            writeValue(t) {
              (this._state = t === this.value),
                this._renderer.setProperty(
                  this._elementRef.nativeElement,
                  "checked",
                  this._state
                );
            }
            registerOnChange(t) {
              (this._fn = t),
                (this.onChange = () => {
                  t(this.value), this._registry.select(this);
                });
            }
            fireUncheck(t) {
              this.writeValue(t);
            }
            registerOnTouched(t) {
              this.onTouched = t;
            }
            setDisabledState(t) {
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                "disabled",
                t
              );
            }
            _checkName() {
              !this.name &&
                this.formControlName &&
                (this.name = this.formControlName);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Kb(s.E), s.Kb(s.l), s.Kb(P), s.Kb(s.r));
            }),
            (t.ɵdir = s.Fb({
              type: t,
              selectors: [
                ["input", "type", "radio", "formControlName", ""],
                ["input", "type", "radio", "formControl", ""],
                ["input", "type", "radio", "ngModel", ""],
              ],
              hostBindings: function (t, e) {
                1 & t &&
                  s.Ub("change", function () {
                    return e.onChange();
                  })("blur", function () {
                    return e.onTouched();
                  });
              },
              inputs: {
                name: "name",
                formControlName: "formControlName",
                value: "value",
              },
              features: [s.yb([j])],
            })),
            t
          );
        })();
      const N = { provide: l, useExisting: Object(s.T)(() => L), multi: !0 };
      let L = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this.onChange = (t) => {}),
              (this.onTouched = () => {});
          }
          writeValue(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              "value",
              parseFloat(t)
            );
          }
          registerOnChange(t) {
            this.onChange = (e) => {
              t("" == e ? null : parseFloat(e));
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              "disabled",
              t
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Kb(s.E), s.Kb(s.l));
          }),
          (t.ɵdir = s.Fb({
            type: t,
            selectors: [
              ["input", "type", "range", "formControlName", ""],
              ["input", "type", "range", "formControl", ""],
              ["input", "type", "range", "ngModel", ""],
            ],
            hostBindings: function (t, e) {
              1 & t &&
                s.Ub("change", function (t) {
                  return e.onChange(t.target.value);
                })("input", function (t) {
                  return e.onChange(t.target.value);
                })("blur", function () {
                  return e.onTouched();
                });
            },
            features: [s.yb([N])],
          })),
          t
        );
      })();
      const M = { provide: l, useExisting: Object(s.T)(() => F), multi: !0 };
      let F = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = (t) => {}),
              (this.onTouched = () => {}),
              (this._compareWith = Object.is);
          }
          set compareWith(t) {
            this._compareWith = t;
          }
          writeValue(t) {
            this.value = t;
            const e = this._getOptionId(t);
            null == e &&
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                "selectedIndex",
                -1
              );
            const n = (function (t, e) {
              return null == t
                ? "" + e
                : (e && "object" == typeof e && (e = "Object"),
                  `${t}: ${e}`.slice(0, 50));
            })(e, t);
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              "value",
              n
            );
          }
          registerOnChange(t) {
            this.onChange = (e) => {
              (this.value = this._getOptionValue(e)), t(this.value);
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              "disabled",
              t
            );
          }
          _registerOption() {
            return (this._idCounter++).toString();
          }
          _getOptionId(t) {
            for (const e of Array.from(this._optionMap.keys()))
              if (this._compareWith(this._optionMap.get(e), t)) return e;
            return null;
          }
          _getOptionValue(t) {
            const e = (function (t) {
              return t.split(":")[0];
            })(t);
            return this._optionMap.has(e) ? this._optionMap.get(e) : t;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Kb(s.E), s.Kb(s.l));
          }),
          (t.ɵdir = s.Fb({
            type: t,
            selectors: [
              ["select", "formControlName", "", 3, "multiple", ""],
              ["select", "formControl", "", 3, "multiple", ""],
              ["select", "ngModel", "", 3, "multiple", ""],
            ],
            hostBindings: function (t, e) {
              1 & t &&
                s.Ub("change", function (t) {
                  return e.onChange(t.target.value);
                })("blur", function () {
                  return e.onTouched();
                });
            },
            inputs: { compareWith: "compareWith" },
            features: [s.yb([M])],
          })),
          t
        );
      })();
      const V = { provide: l, useExisting: Object(s.T)(() => H), multi: !0 };
      let H = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = (t) => {}),
              (this.onTouched = () => {}),
              (this._compareWith = Object.is);
          }
          set compareWith(t) {
            this._compareWith = t;
          }
          writeValue(t) {
            let e;
            if (((this.value = t), Array.isArray(t))) {
              const n = t.map((t) => this._getOptionId(t));
              e = (t, e) => {
                t._setSelected(n.indexOf(e.toString()) > -1);
              };
            } else
              e = (t, e) => {
                t._setSelected(!1);
              };
            this._optionMap.forEach(e);
          }
          registerOnChange(t) {
            this.onChange = (e) => {
              const n = [];
              if (void 0 !== e.selectedOptions) {
                const t = e.selectedOptions;
                for (let e = 0; e < t.length; e++) {
                  const s = t.item(e),
                    r = this._getOptionValue(s.value);
                  n.push(r);
                }
              } else {
                const t = e.options;
                for (let e = 0; e < t.length; e++) {
                  const s = t.item(e);
                  if (s.selected) {
                    const t = this._getOptionValue(s.value);
                    n.push(t);
                  }
                }
              }
              (this.value = n), t(n);
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              "disabled",
              t
            );
          }
          _registerOption(t) {
            const e = (this._idCounter++).toString();
            return this._optionMap.set(e, t), e;
          }
          _getOptionId(t) {
            for (const e of Array.from(this._optionMap.keys()))
              if (this._compareWith(this._optionMap.get(e)._value, t)) return e;
            return null;
          }
          _getOptionValue(t) {
            const e = (function (t) {
              return t.split(":")[0];
            })(t);
            return this._optionMap.has(e) ? this._optionMap.get(e)._value : t;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Kb(s.E), s.Kb(s.l));
          }),
          (t.ɵdir = s.Fb({
            type: t,
            selectors: [
              ["select", "multiple", "", "formControlName", ""],
              ["select", "multiple", "", "formControl", ""],
              ["select", "multiple", "", "ngModel", ""],
            ],
            hostBindings: function (t, e) {
              1 & t &&
                s.Ub("change", function (t) {
                  return e.onChange(t.target);
                })("blur", function () {
                  return e.onTouched();
                });
            },
            inputs: { compareWith: "compareWith" },
            features: [s.yb([V])],
          })),
          t
        );
      })();
      function U(t, e) {
        t._pendingDirty && t.markAsDirty(),
          t.setValue(t._pendingValue, { emitModelToViewChange: !1 }),
          e.viewToModelUpdate(t._pendingValue),
          (t._pendingChange = !1);
      }
      function z(t) {
        return null != t ? E.compose(R(t)) : null;
      }
      function B(t) {
        return null != t ? E.composeAsync(R(t)) : null;
      }
      const q = [u, L, I, F, H, D],
        $ = "VALID",
        K = "INVALID",
        W = "PENDING",
        G = "DISABLED";
      function Q(t) {
        return (J(t) ? t.validators : t) || null;
      }
      function Z(t) {
        return Array.isArray(t) ? z(t) : t || null;
      }
      function Y(t, e) {
        return (J(e) ? e.asyncValidators : t) || null;
      }
      function X(t) {
        return Array.isArray(t) ? B(t) : t || null;
      }
      function J(t) {
        return null != t && !Array.isArray(t) && "object" == typeof t;
      }
      class tt {
        constructor(t, e) {
          (this._hasOwnPendingAsyncValidator = !1),
            (this._onCollectionChange = () => {}),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []),
            (this._rawValidators = t),
            (this._rawAsyncValidators = e),
            (this._composedValidatorFn = Z(this._rawValidators)),
            (this._composedAsyncValidatorFn = X(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(t) {
          this._rawValidators = this._composedValidatorFn = t;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(t) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = t;
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === $;
        }
        get invalid() {
          return this.status === K;
        }
        get pending() {
          return this.status == W;
        }
        get disabled() {
          return this.status === G;
        }
        get enabled() {
          return this.status !== G;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn
            ? this._updateOn
            : this.parent
            ? this.parent.updateOn
            : "change";
        }
        setValidators(t) {
          (this._rawValidators = t), (this._composedValidatorFn = Z(t));
        }
        setAsyncValidators(t) {
          (this._rawAsyncValidators = t),
            (this._composedAsyncValidatorFn = X(t));
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(t = {}) {
          (this.touched = !0),
            this._parent && !t.onlySelf && this._parent.markAsTouched(t);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }),
            this._forEachChild((t) => t.markAllAsTouched());
        }
        markAsUntouched(t = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild((t) => {
              t.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        markAsDirty(t = {}) {
          (this.pristine = !1),
            this._parent && !t.onlySelf && this._parent.markAsDirty(t);
        }
        markAsPristine(t = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild((t) => {
              t.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        markAsPending(t = {}) {
          (this.status = W),
            !1 !== t.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !t.onlySelf && this._parent.markAsPending(t);
        }
        disable(t = {}) {
          const e = this._parentMarkedDirty(t.onlySelf);
          (this.status = G),
            (this.errors = null),
            this._forEachChild((e) => {
              e.disable(Object.assign(Object.assign({}, t), { onlySelf: !0 }));
            }),
            this._updateValue(),
            !1 !== t.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._updateAncestors(
              Object.assign(Object.assign({}, t), { skipPristineCheck: e })
            ),
            this._onDisabledChange.forEach((t) => t(!0));
        }
        enable(t = {}) {
          const e = this._parentMarkedDirty(t.onlySelf);
          (this.status = $),
            this._forEachChild((e) => {
              e.enable(Object.assign(Object.assign({}, t), { onlySelf: !0 }));
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: t.emitEvent,
            }),
            this._updateAncestors(
              Object.assign(Object.assign({}, t), { skipPristineCheck: e })
            ),
            this._onDisabledChange.forEach((t) => t(!1));
        }
        _updateAncestors(t) {
          this._parent &&
            !t.onlySelf &&
            (this._parent.updateValueAndValidity(t),
            t.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(t) {
          this._parent = t;
        }
        updateValueAndValidity(t = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status !== $ && this.status !== W) ||
                this._runAsyncValidator(t.emitEvent)),
            !1 !== t.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._parent &&
              !t.onlySelf &&
              this._parent.updateValueAndValidity(t);
        }
        _updateTreeValidity(t = { emitEvent: !0 }) {
          this._forEachChild((e) => e._updateTreeValidity(t)),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: t.emitEvent,
            });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? G : $;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(t) {
          if (this.asyncValidator) {
            (this.status = W), (this._hasOwnPendingAsyncValidator = !0);
            const e = x(this.asyncValidator(this));
            this._asyncValidationSubscription = e.subscribe((e) => {
              (this._hasOwnPendingAsyncValidator = !1),
                this.setErrors(e, { emitEvent: t });
            });
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            (this._asyncValidationSubscription.unsubscribe(),
            (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(t, e = {}) {
          (this.errors = t), this._updateControlsErrors(!1 !== e.emitEvent);
        }
        get(t) {
          return (function (t, e, n) {
            if (null == e) return null;
            if (
              (Array.isArray(e) || (e = e.split(".")),
              Array.isArray(e) && 0 === e.length)
            )
              return null;
            let s = t;
            return (
              e.forEach((t) => {
                s =
                  s instanceof nt
                    ? s.controls.hasOwnProperty(t)
                      ? s.controls[t]
                      : null
                    : (s instanceof st && s.at(t)) || null;
              }),
              s
            );
          })(this, t);
        }
        getError(t, e) {
          const n = e ? this.get(e) : this;
          return n && n.errors ? n.errors[t] : null;
        }
        hasError(t, e) {
          return !!this.getError(t, e);
        }
        get root() {
          let t = this;
          for (; t._parent; ) t = t._parent;
          return t;
        }
        _updateControlsErrors(t) {
          (this.status = this._calculateStatus()),
            t && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(t);
        }
        _initObservables() {
          (this.valueChanges = new s.n()), (this.statusChanges = new s.n());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? G
            : this.errors
            ? K
            : this._hasOwnPendingAsyncValidator ||
              this._anyControlsHaveStatus(W)
            ? W
            : this._anyControlsHaveStatus(K)
            ? K
            : $;
        }
        _anyControlsHaveStatus(t) {
          return this._anyControls((e) => e.status === t);
        }
        _anyControlsDirty() {
          return this._anyControls((t) => t.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls((t) => t.touched);
        }
        _updatePristine(t = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        _updateTouched(t = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        _isBoxedValue(t) {
          return (
            "object" == typeof t &&
            null !== t &&
            2 === Object.keys(t).length &&
            "value" in t &&
            "disabled" in t
          );
        }
        _registerOnCollectionChange(t) {
          this._onCollectionChange = t;
        }
        _setUpdateStrategy(t) {
          J(t) && null != t.updateOn && (this._updateOn = t.updateOn);
        }
        _parentMarkedDirty(t) {
          return (
            !t &&
            this._parent &&
            this._parent.dirty &&
            !this._parent._anyControlsDirty()
          );
        }
      }
      class et extends tt {
        constructor(t = null, e, n) {
          super(Q(e), Y(n, e)),
            (this._onChange = []),
            this._applyFormState(t),
            this._setUpdateStrategy(e),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
            this._initObservables();
        }
        setValue(t, e = {}) {
          (this.value = this._pendingValue = t),
            this._onChange.length &&
              !1 !== e.emitModelToViewChange &&
              this._onChange.forEach((t) =>
                t(this.value, !1 !== e.emitViewToModelChange)
              ),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          this.setValue(t, e);
        }
        reset(t = null, e = {}) {
          this._applyFormState(t),
            this.markAsPristine(e),
            this.markAsUntouched(e),
            this.setValue(this.value, e),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(t) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(t) {
          this._onChange.push(t);
        }
        _clearChangeFns() {
          (this._onChange = []),
            (this._onDisabledChange = []),
            (this._onCollectionChange = () => {});
        }
        registerOnDisabledChange(t) {
          this._onDisabledChange.push(t);
        }
        _forEachChild(t) {}
        _syncPendingControls() {
          return !(
            "submit" !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, {
              onlySelf: !0,
              emitModelToViewChange: !1,
            }),
            0)
          );
        }
        _applyFormState(t) {
          this._isBoxedValue(t)
            ? ((this.value = this._pendingValue = t.value),
              t.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = t);
        }
      }
      class nt extends tt {
        constructor(t, e, n) {
          super(Q(e), Y(n, e)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 });
        }
        registerControl(t, e) {
          return this.controls[t]
            ? this.controls[t]
            : ((this.controls[t] = e),
              e.setParent(this),
              e._registerOnCollectionChange(this._onCollectionChange),
              e);
        }
        addControl(t, e) {
          this.registerControl(t, e),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        removeControl(t) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        setControl(t, e) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            e && this.registerControl(t, e),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        contains(t) {
          return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
        }
        setValue(t, e = {}) {
          this._checkAllValuesPresent(t),
            Object.keys(t).forEach((n) => {
              this._throwIfControlMissing(n),
                this.controls[n].setValue(t[n], {
                  onlySelf: !0,
                  emitEvent: e.emitEvent,
                });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          Object.keys(t).forEach((n) => {
            this.controls[n] &&
              this.controls[n].patchValue(t[n], {
                onlySelf: !0,
                emitEvent: e.emitEvent,
              });
          }),
            this.updateValueAndValidity(e);
        }
        reset(t = {}, e = {}) {
          this._forEachChild((n, s) => {
            n.reset(t[s], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (t, e, n) => (
              (t[n] = e instanceof et ? e.value : e.getRawValue()), t
            )
          );
        }
        _syncPendingControls() {
          let t = this._reduceChildren(
            !1,
            (t, e) => !!e._syncPendingControls() || t
          );
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _throwIfControlMissing(t) {
          if (!Object.keys(this.controls).length)
            throw new Error(
              "\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.controls[t])
            throw new Error(`Cannot find form control with name: ${t}.`);
        }
        _forEachChild(t) {
          Object.keys(this.controls).forEach((e) => t(this.controls[e], e));
        }
        _setUpControls() {
          this._forEachChild((t) => {
            t.setParent(this),
              t._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(t) {
          for (const e of Object.keys(this.controls)) {
            const n = this.controls[e];
            if (this.contains(e) && t(n)) return !0;
          }
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (t, e, n) => ((e.enabled || this.disabled) && (t[n] = e.value), t)
          );
        }
        _reduceChildren(t, e) {
          let n = t;
          return (
            this._forEachChild((t, s) => {
              n = e(n, t, s);
            }),
            n
          );
        }
        _allControlsDisabled() {
          for (const t of Object.keys(this.controls))
            if (this.controls[t].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _checkAllValuesPresent(t) {
          this._forEachChild((e, n) => {
            if (void 0 === t[n])
              throw new Error(
                `Must supply a value for form control with name: '${n}'.`
              );
          });
        }
      }
      class st extends tt {
        constructor(t, e, n) {
          super(Q(e), Y(n, e)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 });
        }
        at(t) {
          return this.controls[t];
        }
        push(t) {
          this.controls.push(t),
            this._registerControl(t),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        insert(t, e) {
          this.controls.splice(t, 0, e),
            this._registerControl(e),
            this.updateValueAndValidity();
        }
        removeAt(t) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            this.updateValueAndValidity();
        }
        setControl(t, e) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            e && (this.controls.splice(t, 0, e), this._registerControl(e)),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(t, e = {}) {
          this._checkAllValuesPresent(t),
            t.forEach((t, n) => {
              this._throwIfControlMissing(n),
                this.at(n).setValue(t, {
                  onlySelf: !0,
                  emitEvent: e.emitEvent,
                });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          t.forEach((t, n) => {
            this.at(n) &&
              this.at(n).patchValue(t, {
                onlySelf: !0,
                emitEvent: e.emitEvent,
              });
          }),
            this.updateValueAndValidity(e);
        }
        reset(t = [], e = {}) {
          this._forEachChild((n, s) => {
            n.reset(t[s], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this.controls.map((t) =>
            t instanceof et ? t.value : t.getRawValue()
          );
        }
        clear() {
          this.controls.length < 1 ||
            (this._forEachChild((t) => t._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity());
        }
        _syncPendingControls() {
          let t = this.controls.reduce(
            (t, e) => !!e._syncPendingControls() || t,
            !1
          );
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _throwIfControlMissing(t) {
          if (!this.controls.length)
            throw new Error(
              "\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.at(t))
            throw new Error("Cannot find form control at index " + t);
        }
        _forEachChild(t) {
          this.controls.forEach((e, n) => {
            t(e, n);
          });
        }
        _updateValue() {
          this.value = this.controls
            .filter((t) => t.enabled || this.disabled)
            .map((t) => t.value);
        }
        _anyControls(t) {
          return this.controls.some((e) => e.enabled && t(e));
        }
        _setUpControls() {
          this._forEachChild((t) => this._registerControl(t));
        }
        _checkAllValuesPresent(t) {
          this._forEachChild((e, n) => {
            if (void 0 === t[n])
              throw new Error(
                `Must supply a value for form control at index: ${n}.`
              );
          });
        }
        _allControlsDisabled() {
          for (const t of this.controls) if (t.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(t) {
          t.setParent(this),
            t._registerOnCollectionChange(this._onCollectionChange);
        }
      }
      const rt = { provide: _, useExisting: Object(s.T)(() => ot) },
        it = (() => Promise.resolve(null))();
      let ot = (() => {
          class t extends _ {
            constructor(t, e, n, r) {
              super(),
                (this.control = new et()),
                (this._registered = !1),
                (this.update = new s.n()),
                (this._parent = t),
                (this._rawValidators = e || []),
                (this._rawAsyncValidators = n || []),
                (this.valueAccessor = (function (t, e) {
                  if (!e) return null;
                  Array.isArray(e);
                  let n = void 0,
                    s = void 0,
                    r = void 0;
                  return (
                    e.forEach((t) => {
                      var e;
                      t.constructor === p
                        ? (n = t)
                        : ((e = t),
                          q.some((t) => e.constructor === t)
                            ? (s = t)
                            : (r = t));
                    }),
                    r || s || n || null
                  );
                })(0, r));
            }
            ngOnChanges(t) {
              this._checkForErrors(),
                this._registered || this._setUpControl(),
                "isDisabled" in t && this._updateDisabled(t),
                (function (t, e) {
                  if (!t.hasOwnProperty("model")) return !1;
                  const n = t.model;
                  return !!n.isFirstChange() || !Object.is(e, n.currentValue);
                })(t, this.viewModel) &&
                  (this._updateValue(this.model),
                  (this.viewModel = this.model));
            }
            ngOnDestroy() {
              this.formDirective && this.formDirective.removeControl(this);
            }
            get path() {
              return this._parent
                ? [...this._parent.path, this.name]
                : [this.name];
            }
            get formDirective() {
              return this._parent ? this._parent.formDirective : null;
            }
            get validator() {
              return z(this._rawValidators);
            }
            get asyncValidator() {
              return B(this._rawAsyncValidators);
            }
            viewToModelUpdate(t) {
              (this.viewModel = t), this.update.emit(t);
            }
            _setUpControl() {
              this._setUpdateStrategy(),
                this._isStandalone()
                  ? this._setUpStandalone()
                  : this.formDirective.addControl(this),
                (this._registered = !0);
            }
            _setUpdateStrategy() {
              this.options &&
                null != this.options.updateOn &&
                (this.control._updateOn = this.options.updateOn);
            }
            _isStandalone() {
              return (
                !this._parent || !(!this.options || !this.options.standalone)
              );
            }
            _setUpStandalone() {
              var t, e;
              ((t = this.control).validator = E.compose([
                t.validator,
                (e = this).validator,
              ])),
                (t.asyncValidator = E.composeAsync([
                  t.asyncValidator,
                  e.asyncValidator,
                ])),
                e.valueAccessor.writeValue(t.value),
                (function (t, e) {
                  e.valueAccessor.registerOnChange((n) => {
                    (t._pendingValue = n),
                      (t._pendingChange = !0),
                      (t._pendingDirty = !0),
                      "change" === t.updateOn && U(t, e);
                  });
                })(t, e),
                (function (t, e) {
                  t.registerOnChange((t, n) => {
                    e.valueAccessor.writeValue(t), n && e.viewToModelUpdate(t);
                  });
                })(t, e),
                (function (t, e) {
                  e.valueAccessor.registerOnTouched(() => {
                    (t._pendingTouched = !0),
                      "blur" === t.updateOn && t._pendingChange && U(t, e),
                      "submit" !== t.updateOn && t.markAsTouched();
                  });
                })(t, e),
                e.valueAccessor.setDisabledState &&
                  t.registerOnDisabledChange((t) => {
                    e.valueAccessor.setDisabledState(t);
                  }),
                e._rawValidators.forEach((e) => {
                  e.registerOnValidatorChange &&
                    e.registerOnValidatorChange(() =>
                      t.updateValueAndValidity()
                    );
                }),
                e._rawAsyncValidators.forEach((e) => {
                  e.registerOnValidatorChange &&
                    e.registerOnValidatorChange(() =>
                      t.updateValueAndValidity()
                    );
                }),
                this.control.updateValueAndValidity({ emitEvent: !1 });
            }
            _checkForErrors() {
              this._isStandalone() || this._checkParentType(),
                this._checkName();
            }
            _checkParentType() {}
            _checkName() {
              this.options &&
                this.options.name &&
                (this.name = this.options.name),
                this._isStandalone();
            }
            _updateValue(t) {
              it.then(() => {
                this.control.setValue(t, { emitViewToModelChange: !1 });
              });
            }
            _updateDisabled(t) {
              const e = t.isDisabled.currentValue,
                n = "" === e || (e && "false" !== e);
              it.then(() => {
                n && !this.control.disabled
                  ? this.control.disable()
                  : !n && this.control.disabled && this.control.enable();
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                s.Kb(m, 9),
                s.Kb(w, 10),
                s.Kb(C, 10),
                s.Kb(l, 10)
              );
            }),
            (t.ɵdir = s.Fb({
              type: t,
              selectors: [
                [
                  "",
                  "ngModel",
                  "",
                  3,
                  "formControlName",
                  "",
                  3,
                  "formControl",
                  "",
                ],
              ],
              inputs: {
                name: "name",
                isDisabled: ["disabled", "isDisabled"],
                model: ["ngModel", "model"],
                options: ["ngModelOptions", "options"],
              },
              outputs: { update: "ngModelChange" },
              exportAs: ["ngModel"],
              features: [s.yb([rt]), s.wb, s.xb],
            })),
            t
          );
        })(),
        at = (() => {
          class t {}
          return (
            (t.ɵmod = s.Ib({ type: t })),
            (t.ɵinj = s.Hb({
              factory: function (e) {
                return new (e || t)();
              },
            })),
            t
          );
        })(),
        lt = (() => {
          class t {}
          return (
            (t.ɵmod = s.Ib({ type: t })),
            (t.ɵinj = s.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [P],
              imports: [at],
            })),
            t
          );
        })();
    },
    "4I5i": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (() => {
        function t() {
          return (
            Error.call(this),
            (this.message = "argument out of range"),
            (this.name = "ArgumentOutOfRangeError"),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
    },
    "5+tZ": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n("lJxs"),
        r = n("Cfvw"),
        i = n("zx2A");
      function o(t, e, n = Number.POSITIVE_INFINITY) {
        return "function" == typeof e
          ? (i) =>
              i.pipe(
                o(
                  (n, i) =>
                    Object(r.a)(t(n, i)).pipe(
                      Object(s.a)((t, s) => e(n, t, i, s))
                    ),
                  n
                )
              )
          : ("number" == typeof e && (n = e), (e) => e.lift(new a(t, n)));
      }
      class a {
        constructor(t, e = Number.POSITIVE_INFINITY) {
          (this.project = t), (this.concurrent = e);
        }
        call(t, e) {
          return e.subscribe(new l(t, this.project, this.concurrent));
        }
      }
      class l extends i.b {
        constructor(t, e, n = Number.POSITIVE_INFINITY) {
          super(t),
            (this.project = e),
            (this.concurrent = n),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(t) {
          this.active < this.concurrent
            ? this._tryNext(t)
            : this.buffer.push(t);
        }
        _tryNext(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (s) {
            return void this.destination.error(s);
          }
          this.active++, this._innerSub(e);
        }
        _innerSub(t) {
          const e = new i.a(this),
            n = this.destination;
          n.add(e);
          const s = Object(i.c)(t, e);
          s !== e && n.add(s);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active &&
              0 === this.buffer.length &&
              this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(t) {
          this.destination.next(t);
        }
        notifyComplete() {
          const t = this.buffer;
          this.active--,
            t.length > 0
              ? this._next(t.shift())
              : 0 === this.active &&
                this.hasCompleted &&
                this.destination.complete();
        }
      }
    },
    "7+OI": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var s = n("HDdC");
      function r(t) {
        return (
          !!t &&
          (t instanceof s.a ||
            ("function" == typeof t.lift && "function" == typeof t.subscribe))
        );
      }
    },
    "7o/Q": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return c;
      });
      var s = n("n6bG"),
        r = n("gRHU"),
        i = n("quSY"),
        o = n("2QA8"),
        a = n("2fFW"),
        l = n("NJ4a");
      class c extends i.a {
        constructor(t, e, n) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = r.a;
              break;
            case 1:
              if (!t) {
                this.destination = r.a;
                break;
              }
              if ("object" == typeof t) {
                t instanceof c
                  ? ((this.syncErrorThrowable = t.syncErrorThrowable),
                    (this.destination = t),
                    t.add(this))
                  : ((this.syncErrorThrowable = !0),
                    (this.destination = new u(this, t)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0),
                (this.destination = new u(this, t, e, n));
          }
        }
        [o.a]() {
          return this;
        }
        static create(t, e, n) {
          const s = new c(t, e, n);
          return (s.syncErrorThrowable = !1), s;
        }
        next(t) {
          this.isStopped || this._next(t);
        }
        error(t) {
          this.isStopped || ((this.isStopped = !0), this._error(t));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(t) {
          this.destination.next(t);
        }
        _error(t) {
          this.destination.error(t), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parentOrParents: t } = this;
          return (
            (this._parentOrParents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parentOrParents = t),
            this
          );
        }
      }
      class u extends c {
        constructor(t, e, n, i) {
          let o;
          super(), (this._parentSubscriber = t);
          let a = this;
          Object(s.a)(e)
            ? (o = e)
            : e &&
              ((o = e.next),
              (n = e.error),
              (i = e.complete),
              e !== r.a &&
                ((a = Object.create(e)),
                Object(s.a)(a.unsubscribe) && this.add(a.unsubscribe.bind(a)),
                (a.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = a),
            (this._next = o),
            (this._error = n),
            (this._complete = i);
        }
        next(t) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: e } = this;
            a.a.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
              ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, t);
          }
        }
        error(t) {
          if (!this.isStopped) {
            const { _parentSubscriber: e } = this,
              { useDeprecatedSynchronousErrorHandling: n } = a.a;
            if (this._error)
              n && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
            else if (e.syncErrorThrowable)
              n
                ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0))
                : Object(l.a)(t),
                this.unsubscribe();
            else {
              if ((this.unsubscribe(), n)) throw t;
              Object(l.a)(t);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this;
            if (this._complete) {
              const e = () => this._complete.call(this._context);
              a.a.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, e), this.unsubscribe())
                : (this.__tryOrUnsub(e), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(t, e) {
          try {
            t.call(this._context, e);
          } catch (n) {
            if ((this.unsubscribe(), a.a.useDeprecatedSynchronousErrorHandling))
              throw n;
            Object(l.a)(n);
          }
        }
        __tryOrSetError(t, e, n) {
          if (!a.a.useDeprecatedSynchronousErrorHandling)
            throw new Error("bad call");
          try {
            e.call(this._context, n);
          } catch (s) {
            return a.a.useDeprecatedSynchronousErrorHandling
              ? ((t.syncErrorValue = s), (t.syncErrorThrown = !0), !0)
              : (Object(l.a)(s), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: t } = this;
          (this._context = null),
            (this._parentSubscriber = null),
            t.unsubscribe();
        }
      }
    },
    "9ppp": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (() => {
        function t() {
          return (
            Error.call(this),
            (this.message = "object unsubscribed"),
            (this.name = "ObjectUnsubscribedError"),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
    },
    AytR: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = {
        production: !0,
        defaultLanguage: "en",
        languages: ["en", "ta"],
        tictacPattern: [
          "pattern-column1",
          "pattern-column2",
          "pattern-column3",
          "pattern-row1",
          "pattern-row2",
          "pattern-row3",
          "pattern-leftCross",
          "pattern-rightCross",
          "pattern-middle",
        ],
      };
    },
    Cfvw: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return h;
      });
      var s = n("HDdC"),
        r = n("SeVD"),
        i = n("quSY"),
        o = n("kJWO"),
        a = n("jZKg"),
        l = n("Lhse"),
        c = n("c2HN"),
        u = n("I55L");
      function h(t, e) {
        return e
          ? (function (t, e) {
              if (null != t) {
                if (
                  (function (t) {
                    return t && "function" == typeof t[o.a];
                  })(t)
                )
                  return (function (t, e) {
                    return new s.a((n) => {
                      const s = new i.a();
                      return (
                        s.add(
                          e.schedule(() => {
                            const r = t[o.a]();
                            s.add(
                              r.subscribe({
                                next(t) {
                                  s.add(e.schedule(() => n.next(t)));
                                },
                                error(t) {
                                  s.add(e.schedule(() => n.error(t)));
                                },
                                complete() {
                                  s.add(e.schedule(() => n.complete()));
                                },
                              })
                            );
                          })
                        ),
                        s
                      );
                    });
                  })(t, e);
                if (Object(c.a)(t))
                  return (function (t, e) {
                    return new s.a((n) => {
                      const s = new i.a();
                      return (
                        s.add(
                          e.schedule(() =>
                            t.then(
                              (t) => {
                                s.add(
                                  e.schedule(() => {
                                    n.next(t),
                                      s.add(e.schedule(() => n.complete()));
                                  })
                                );
                              },
                              (t) => {
                                s.add(e.schedule(() => n.error(t)));
                              }
                            )
                          )
                        ),
                        s
                      );
                    });
                  })(t, e);
                if (Object(u.a)(t)) return Object(a.a)(t, e);
                if (
                  (function (t) {
                    return t && "function" == typeof t[l.a];
                  })(t) ||
                  "string" == typeof t
                )
                  return (function (t, e) {
                    if (!t) throw new Error("Iterable cannot be null");
                    return new s.a((n) => {
                      const s = new i.a();
                      let r;
                      return (
                        s.add(() => {
                          r && "function" == typeof r.return && r.return();
                        }),
                        s.add(
                          e.schedule(() => {
                            (r = t[l.a]()),
                              s.add(
                                e.schedule(function () {
                                  if (n.closed) return;
                                  let t, e;
                                  try {
                                    const n = r.next();
                                    (t = n.value), (e = n.done);
                                  } catch (s) {
                                    return void n.error(s);
                                  }
                                  e
                                    ? n.complete()
                                    : (n.next(t), this.schedule());
                                })
                              );
                          })
                        ),
                        s
                      );
                    });
                  })(t, e);
              }
              throw new TypeError(
                ((null !== t && typeof t) || t) + " is not observable"
              );
            })(t, e)
          : t instanceof s.a
          ? t
          : new s.a(Object(r.a)(t));
      }
    },
    DH7j: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (() =>
        Array.isArray || ((t) => t && "number" == typeof t.length))();
    },
    EY2u: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return i;
        });
      var s = n("HDdC");
      const r = new s.a((t) => t.complete());
      function i(t) {
        return t
          ? (function (t) {
              return new s.a((e) => t.schedule(() => e.complete()));
            })(t)
          : r;
      }
    },
    GyhO: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n("LRne"),
        r = n("0EUg");
      function i(...t) {
        return Object(r.a)()(Object(s.a)(...t));
      }
    },
    HDdC: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return c;
      });
      var s = n("7o/Q"),
        r = n("2QA8"),
        i = n("gRHU"),
        o = n("kJWO"),
        a = n("SpAZ"),
        l = n("2fFW");
      let c = (() => {
        class t {
          constructor(t) {
            (this._isScalar = !1), t && (this._subscribe = t);
          }
          lift(e) {
            const n = new t();
            return (n.source = this), (n.operator = e), n;
          }
          subscribe(t, e, n) {
            const { operator: o } = this,
              a = (function (t, e, n) {
                if (t) {
                  if (t instanceof s.a) return t;
                  if (t[r.a]) return t[r.a]();
                }
                return t || e || n ? new s.a(t, e, n) : new s.a(i.a);
              })(t, e, n);
            if (
              (a.add(
                o
                  ? o.call(a, this.source)
                  : this.source ||
                    (l.a.useDeprecatedSynchronousErrorHandling &&
                      !a.syncErrorThrowable)
                  ? this._subscribe(a)
                  : this._trySubscribe(a)
              ),
              l.a.useDeprecatedSynchronousErrorHandling &&
                a.syncErrorThrowable &&
                ((a.syncErrorThrowable = !1), a.syncErrorThrown))
            )
              throw a.syncErrorValue;
            return a;
          }
          _trySubscribe(t) {
            try {
              return this._subscribe(t);
            } catch (e) {
              l.a.useDeprecatedSynchronousErrorHandling &&
                ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                (function (t) {
                  for (; t; ) {
                    const { closed: e, destination: n, isStopped: r } = t;
                    if (e || r) return !1;
                    t = n && n instanceof s.a ? n : null;
                  }
                  return !0;
                })(t)
                  ? t.error(e)
                  : console.warn(e);
            }
          }
          forEach(t, e) {
            return new (e = u(e))((e, n) => {
              let s;
              s = this.subscribe(
                (e) => {
                  try {
                    t(e);
                  } catch (r) {
                    n(r), s && s.unsubscribe();
                  }
                },
                n,
                e
              );
            });
          }
          _subscribe(t) {
            const { source: e } = this;
            return e && e.subscribe(t);
          }
          [o.a]() {
            return this;
          }
          pipe(...t) {
            return 0 === t.length
              ? this
              : (0 === (e = t).length
                  ? a.a
                  : 1 === e.length
                  ? e[0]
                  : function (t) {
                      return e.reduce((t, e) => e(t), t);
                    })(this);
            var e;
          }
          toPromise(t) {
            return new (t = u(t))((t, e) => {
              let n;
              this.subscribe(
                (t) => (n = t),
                (t) => e(t),
                () => t(n)
              );
            });
          }
        }
        return (t.create = (e) => new t(e)), t;
      })();
      function u(t) {
        if ((t || (t = l.a.Promise || Promise), !t))
          throw new Error("no Promise impl found");
        return t;
      }
    },
    I55L: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) =>
        t && "number" == typeof t.length && "function" != typeof t;
    },
    IjjT: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      let s = (() => {
        class t {
          constructor(e, n = t.now) {
            (this.SchedulerAction = e), (this.now = n);
          }
          schedule(t, e = 0, n) {
            return new this.SchedulerAction(this, t).schedule(n, e);
          }
        }
        return (t.now = () => Date.now()), t;
      })();
      class r extends s {
        constructor(t, e = s.now) {
          super(t, () =>
            r.delegate && r.delegate !== this ? r.delegate.now() : e()
          ),
            (this.actions = []),
            (this.active = !1),
            (this.scheduled = void 0);
        }
        schedule(t, e = 0, n) {
          return r.delegate && r.delegate !== this
            ? r.delegate.schedule(t, e, n)
            : super.schedule(t, e, n);
        }
        flush(t) {
          const { actions: e } = this;
          if (this.active) return void e.push(t);
          let n;
          this.active = !0;
          do {
            if ((n = t.execute(t.state, t.delay))) break;
          } while ((t = e.shift()));
          if (((this.active = !1), n)) {
            for (; (t = e.shift()); ) t.unsubscribe();
            throw n;
          }
        }
      }
    },
    IzEk: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n("7o/Q"),
        r = n("4I5i"),
        i = n("EY2u");
      function o(t) {
        return (e) => (0 === t ? Object(i.b)() : e.lift(new a(t)));
      }
      class a {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new r.a();
        }
        call(t, e) {
          return e.subscribe(new l(t, this.total));
        }
      }
      class l extends s.a {
        constructor(t, e) {
          super(t), (this.total = e), (this.count = 0);
        }
        _next(t) {
          const e = this.total,
            n = ++this.count;
          n <= e &&
            (this.destination.next(t),
            n === e && (this.destination.complete(), this.unsubscribe()));
        }
      }
    },
    JIr8: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var s = n("zx2A");
      function r(t) {
        return function (e) {
          const n = new i(t),
            s = e.lift(n);
          return (n.caught = s);
        };
      }
      class i {
        constructor(t) {
          this.selector = t;
        }
        call(t, e) {
          return e.subscribe(new o(t, this.selector, this.caught));
        }
      }
      class o extends s.b {
        constructor(t, e, n) {
          super(t), (this.selector = e), (this.caught = n);
        }
        error(t) {
          if (!this.isStopped) {
            let n;
            try {
              n = this.selector(t, this.caught);
            } catch (e) {
              return void super.error(e);
            }
            this._unsubscribeAndRecycle();
            const r = new s.a(this);
            this.add(r);
            const i = Object(s.c)(n, r);
            i !== r && this.add(i);
          }
        }
      }
    },
    JX91: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n("GyhO"),
        r = n("z+Ro");
      function i(...t) {
        const e = t[t.length - 1];
        return Object(r.a)(e)
          ? (t.pop(), (n) => Object(s.a)(t, n, e))
          : (e) => Object(s.a)(t, e);
      }
    },
    KqfI: function (t, e, n) {
      "use strict";
      function s() {}
      n.d(e, "a", function () {
        return s;
      });
    },
    LRne: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n("z+Ro"),
        r = n("yCtX"),
        i = n("jZKg");
      function o(...t) {
        let e = t[t.length - 1];
        return Object(s.a)(e) ? (t.pop(), Object(i.a)(t, e)) : Object(r.a)(t);
      }
    },
    Lhse: function (t, e, n) {
      "use strict";
      function s() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      }
      n.d(e, "a", function () {
        return r;
      });
      const r = s();
    },
    NJ4a: function (t, e, n) {
      "use strict";
      function s(t) {
        setTimeout(() => {
          throw t;
        }, 0);
      }
      n.d(e, "a", function () {
        return s;
      });
    },
    NXyV: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n("HDdC"),
        r = n("Cfvw"),
        i = n("EY2u");
      function o(t) {
        return new s.a((e) => {
          let n;
          try {
            n = t();
          } catch (s) {
            return void e.error(s);
          }
          return (n ? Object(r.a)(n) : Object(i.b)()).subscribe(e);
        });
      }
    },
    SeVD: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return u;
      });
      var s = n("ngJS"),
        r = n("NJ4a"),
        i = n("Lhse"),
        o = n("kJWO"),
        a = n("I55L"),
        l = n("c2HN"),
        c = n("XoHu");
      const u = (t) => {
        if (t && "function" == typeof t[o.a])
          return (
            (u = t),
            (t) => {
              const e = u[o.a]();
              if ("function" != typeof e.subscribe)
                throw new TypeError(
                  "Provided object does not correctly implement Symbol.observable"
                );
              return e.subscribe(t);
            }
          );
        if (Object(a.a)(t)) return Object(s.a)(t);
        if (Object(l.a)(t))
          return (
            (n = t),
            (t) => (
              n
                .then(
                  (e) => {
                    t.closed || (t.next(e), t.complete());
                  },
                  (e) => t.error(e)
                )
                .then(null, r.a),
              t
            )
          );
        if (t && "function" == typeof t[i.a])
          return (
            (e = t),
            (t) => {
              const n = e[i.a]();
              for (;;) {
                let e;
                try {
                  e = n.next();
                } catch (s) {
                  return t.error(s), t;
                }
                if (e.done) {
                  t.complete();
                  break;
                }
                if ((t.next(e.value), t.closed)) break;
              }
              return (
                "function" == typeof n.return &&
                  t.add(() => {
                    n.return && n.return();
                  }),
                t
              );
            }
          );
        {
          const e = Object(c.a)(t) ? "an invalid object" : `'${t}'`;
          throw new TypeError(
            `You provided ${e} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`
          );
        }
        var e, n, u;
      };
    },
    SpAZ: function (t, e, n) {
      "use strict";
      function s(t) {
        return t;
      }
      n.d(e, "a", function () {
        return s;
      });
    },
    UXun: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return b;
      });
      var s = n("XNiG"),
        r = n("3N8a");
      class i extends r.a {
        constructor(t, e) {
          super(t, e), (this.scheduler = t), (this.work = e);
        }
        schedule(t, e = 0) {
          return e > 0
            ? super.schedule(t, e)
            : ((this.delay = e),
              (this.state = t),
              this.scheduler.flush(this),
              this);
        }
        execute(t, e) {
          return e > 0 || this.closed
            ? super.execute(t, e)
            : this._execute(t, e);
        }
        requestAsyncId(t, e, n = 0) {
          return (null !== n && n > 0) || (null === n && this.delay > 0)
            ? super.requestAsyncId(t, e, n)
            : t.flush(this);
        }
      }
      var o = n("IjjT");
      class a extends o.a {}
      const l = new a(i);
      var c = n("quSY"),
        u = n("7o/Q"),
        h = n("WMd4");
      class d extends u.a {
        constructor(t, e, n = 0) {
          super(t), (this.scheduler = e), (this.delay = n);
        }
        static dispatch(t) {
          const { notification: e, destination: n } = t;
          e.observe(n), this.unsubscribe();
        }
        scheduleMessage(t) {
          this.destination.add(
            this.scheduler.schedule(
              d.dispatch,
              this.delay,
              new p(t, this.destination)
            )
          );
        }
        _next(t) {
          this.scheduleMessage(h.a.createNext(t));
        }
        _error(t) {
          this.scheduleMessage(h.a.createError(t)), this.unsubscribe();
        }
        _complete() {
          this.scheduleMessage(h.a.createComplete()), this.unsubscribe();
        }
      }
      class p {
        constructor(t, e) {
          (this.notification = t), (this.destination = e);
        }
      }
      var f = n("9ppp"),
        m = n("Ylt2");
      class g extends s.a {
        constructor(
          t = Number.POSITIVE_INFINITY,
          e = Number.POSITIVE_INFINITY,
          n
        ) {
          super(),
            (this.scheduler = n),
            (this._events = []),
            (this._infiniteTimeWindow = !1),
            (this._bufferSize = t < 1 ? 1 : t),
            (this._windowTime = e < 1 ? 1 : e),
            e === Number.POSITIVE_INFINITY
              ? ((this._infiniteTimeWindow = !0),
                (this.next = this.nextInfiniteTimeWindow))
              : (this.next = this.nextTimeWindow);
        }
        nextInfiniteTimeWindow(t) {
          if (!this.isStopped) {
            const e = this._events;
            e.push(t), e.length > this._bufferSize && e.shift();
          }
          super.next(t);
        }
        nextTimeWindow(t) {
          this.isStopped ||
            (this._events.push(new _(this._getNow(), t)),
            this._trimBufferThenGetEvents()),
            super.next(t);
        }
        _subscribe(t) {
          const e = this._infiniteTimeWindow,
            n = e ? this._events : this._trimBufferThenGetEvents(),
            s = this.scheduler,
            r = n.length;
          let i;
          if (this.closed) throw new f.a();
          if (
            (this.isStopped || this.hasError
              ? (i = c.a.EMPTY)
              : (this.observers.push(t), (i = new m.a(this, t))),
            s && t.add((t = new d(t, s))),
            e)
          )
            for (let o = 0; o < r && !t.closed; o++) t.next(n[o]);
          else for (let o = 0; o < r && !t.closed; o++) t.next(n[o].value);
          return (
            this.hasError
              ? t.error(this.thrownError)
              : this.isStopped && t.complete(),
            i
          );
        }
        _getNow() {
          return (this.scheduler || l).now();
        }
        _trimBufferThenGetEvents() {
          const t = this._getNow(),
            e = this._bufferSize,
            n = this._windowTime,
            s = this._events,
            r = s.length;
          let i = 0;
          for (; i < r && !(t - s[i].time < n); ) i++;
          return r > e && (i = Math.max(i, r - e)), i > 0 && s.splice(0, i), s;
        }
      }
      class _ {
        constructor(t, e) {
          (this.time = t), (this.value = e);
        }
      }
      function b(t, e, n) {
        let s;
        return (
          (s =
            t && "object" == typeof t
              ? t
              : { bufferSize: t, windowTime: e, refCount: !1, scheduler: n }),
          (t) =>
            t.lift(
              (function ({
                bufferSize: t = Number.POSITIVE_INFINITY,
                windowTime: e = Number.POSITIVE_INFINITY,
                refCount: n,
                scheduler: s,
              }) {
                let r,
                  i,
                  o = 0,
                  a = !1,
                  l = !1;
                return function (c) {
                  let u;
                  o++,
                    !r || a
                      ? ((a = !1),
                        (r = new g(t, e, s)),
                        (u = r.subscribe(this)),
                        (i = c.subscribe({
                          next(t) {
                            r.next(t);
                          },
                          error(t) {
                            (a = !0), r.error(t);
                          },
                          complete() {
                            (l = !0), (i = void 0), r.complete();
                          },
                        })),
                        l && (i = void 0))
                      : (u = r.subscribe(this)),
                    this.add(() => {
                      o--,
                        u.unsubscribe(),
                        (u = void 0),
                        i &&
                          !l &&
                          n &&
                          0 === o &&
                          (i.unsubscribe(), (i = void 0), (r = void 0));
                    });
                };
              })(s)
            )
        );
      }
    },
    VRyK: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      });
      var s = n("HDdC"),
        r = n("z+Ro"),
        i = n("bHdf"),
        o = n("yCtX");
      function a(...t) {
        let e = Number.POSITIVE_INFINITY,
          n = null,
          a = t[t.length - 1];
        return (
          Object(r.a)(a)
            ? ((n = t.pop()),
              t.length > 1 &&
                "number" == typeof t[t.length - 1] &&
                (e = t.pop()))
            : "number" == typeof a && (e = t.pop()),
          null === n && 1 === t.length && t[0] instanceof s.a
            ? t[0]
            : Object(i.a)(e)(Object(o.a)(t, n))
        );
      }
    },
    WMd4: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n("EY2u"),
        r = n("LRne"),
        i = n("z6cu");
      let o = (() => {
        class t {
          constructor(t, e, n) {
            (this.kind = t),
              (this.value = e),
              (this.error = n),
              (this.hasValue = "N" === t);
          }
          observe(t) {
            switch (this.kind) {
              case "N":
                return t.next && t.next(this.value);
              case "E":
                return t.error && t.error(this.error);
              case "C":
                return t.complete && t.complete();
            }
          }
          do(t, e, n) {
            switch (this.kind) {
              case "N":
                return t && t(this.value);
              case "E":
                return e && e(this.error);
              case "C":
                return n && n();
            }
          }
          accept(t, e, n) {
            return t && "function" == typeof t.next
              ? this.observe(t)
              : this.do(t, e, n);
          }
          toObservable() {
            switch (this.kind) {
              case "N":
                return Object(r.a)(this.value);
              case "E":
                return Object(i.a)(this.error);
              case "C":
                return Object(s.b)();
            }
            throw new Error("unexpected notification kind value");
          }
          static createNext(e) {
            return void 0 !== e ? new t("N", e) : t.undefinedValueNotification;
          }
          static createError(e) {
            return new t("E", void 0, e);
          }
          static createComplete() {
            return t.completeNotification;
          }
        }
        return (
          (t.completeNotification = new t("C")),
          (t.undefinedValueNotification = new t("N", void 0)),
          t
        );
      })();
    },
    XNiG: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return c;
      }),
        n.d(e, "a", function () {
          return u;
        });
      var s = n("HDdC"),
        r = n("7o/Q"),
        i = n("quSY"),
        o = n("9ppp"),
        a = n("Ylt2"),
        l = n("2QA8");
      class c extends r.a {
        constructor(t) {
          super(t), (this.destination = t);
        }
      }
      let u = (() => {
        class t extends s.a {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [l.a]() {
            return new c(this);
          }
          lift(t) {
            const e = new h(this, this);
            return (e.operator = t), e;
          }
          next(t) {
            if (this.closed) throw new o.a();
            if (!this.isStopped) {
              const { observers: e } = this,
                n = e.length,
                s = e.slice();
              for (let r = 0; r < n; r++) s[r].next(t);
            }
          }
          error(t) {
            if (this.closed) throw new o.a();
            (this.hasError = !0), (this.thrownError = t), (this.isStopped = !0);
            const { observers: e } = this,
              n = e.length,
              s = e.slice();
            for (let r = 0; r < n; r++) s[r].error(t);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new o.a();
            this.isStopped = !0;
            const { observers: t } = this,
              e = t.length,
              n = t.slice();
            for (let s = 0; s < e; s++) n[s].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(t) {
            if (this.closed) throw new o.a();
            return super._trySubscribe(t);
          }
          _subscribe(t) {
            if (this.closed) throw new o.a();
            return this.hasError
              ? (t.error(this.thrownError), i.a.EMPTY)
              : this.isStopped
              ? (t.complete(), i.a.EMPTY)
              : (this.observers.push(t), new a.a(this, t));
          }
          asObservable() {
            const t = new s.a();
            return (t.source = this), t;
          }
        }
        return (t.create = (t, e) => new h(t, e)), t;
      })();
      class h extends u {
        constructor(t, e) {
          super(), (this.destination = t), (this.source = e);
        }
        next(t) {
          const { destination: e } = this;
          e && e.next && e.next(t);
        }
        error(t) {
          const { destination: e } = this;
          e && e.error && this.destination.error(t);
        }
        complete() {
          const { destination: t } = this;
          t && t.complete && this.destination.complete();
        }
        _subscribe(t) {
          const { source: e } = this;
          return e ? this.source.subscribe(t) : i.a.EMPTY;
        }
      }
    },
    XoHu: function (t, e, n) {
      "use strict";
      function s(t) {
        return null !== t && "object" == typeof t;
      }
      n.d(e, "a", function () {
        return s;
      });
    },
    Ylt2: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var s = n("quSY");
      class r extends s.a {
        constructor(t, e) {
          super(),
            (this.subject = t),
            (this.subscriber = e),
            (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const t = this.subject,
            e = t.observers;
          if (
            ((this.subject = null),
            !e || 0 === e.length || t.isStopped || t.closed)
          )
            return;
          const n = e.indexOf(this.subscriber);
          -1 !== n && e.splice(n, 1);
        }
      }
    },
    bHdf: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n("5+tZ"),
        r = n("SpAZ");
      function i(t = Number.POSITIVE_INFINITY) {
        return Object(s.a)(r.a, t);
      }
    },
    bOdf: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var s = n("5+tZ");
      function r(t, e) {
        return Object(s.a)(t, e, 1);
      }
    },
    c2HN: function (t, e, n) {
      "use strict";
      function s(t) {
        return (
          !!t && "function" != typeof t.subscribe && "function" == typeof t.then
        );
      }
      n.d(e, "a", function () {
        return s;
      });
    },
    cp0P: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return l;
      });
      var s = n("HDdC"),
        r = n("DH7j"),
        i = n("lJxs"),
        o = n("XoHu"),
        a = n("Cfvw");
      function l(...t) {
        if (1 === t.length) {
          const e = t[0];
          if (Object(r.a)(e)) return c(e, null);
          if (Object(o.a)(e) && Object.getPrototypeOf(e) === Object.prototype) {
            const t = Object.keys(e);
            return c(
              t.map((t) => e[t]),
              t
            );
          }
        }
        if ("function" == typeof t[t.length - 1]) {
          const e = t.pop();
          return c(
            (t = 1 === t.length && Object(r.a)(t[0]) ? t[0] : t),
            null
          ).pipe(Object(i.a)((t) => e(...t)));
        }
        return c(t, null);
      }
      function c(t, e) {
        return new s.a((n) => {
          const s = t.length;
          if (0 === s) return void n.complete();
          const r = new Array(s);
          let i = 0,
            o = 0;
          for (let l = 0; l < s; l++) {
            const c = Object(a.a)(t[l]);
            let u = !1;
            n.add(
              c.subscribe({
                next: (t) => {
                  u || ((u = !0), o++), (r[l] = t);
                },
                error: (t) => n.error(t),
                complete: () => {
                  i++,
                    (i !== s && u) ||
                      (o === s &&
                        n.next(
                          e ? e.reduce((t, e, n) => ((t[e] = r[n]), t), {}) : r
                        ),
                      n.complete());
                },
              })
            );
          }
        });
      }
    },
    eIep: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n("lJxs"),
        r = n("Cfvw"),
        i = n("zx2A");
      function o(t, e) {
        return "function" == typeof e
          ? (n) =>
              n.pipe(
                o((n, i) =>
                  Object(r.a)(t(n, i)).pipe(
                    Object(s.a)((t, s) => e(n, t, i, s))
                  )
                )
              )
          : (e) => e.lift(new a(t));
      }
      class a {
        constructor(t) {
          this.project = t;
        }
        call(t, e) {
          return e.subscribe(new l(t, this.project));
        }
      }
      class l extends i.b {
        constructor(t, e) {
          super(t), (this.project = e), (this.index = 0);
        }
        _next(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (s) {
            return void this.destination.error(s);
          }
          this._innerSub(e);
        }
        _innerSub(t) {
          const e = this.innerSubscription;
          e && e.unsubscribe();
          const n = new i.a(this),
            s = this.destination;
          s.add(n),
            (this.innerSubscription = Object(i.c)(t, n)),
            this.innerSubscription !== n && s.add(this.innerSubscription);
        }
        _complete() {
          const { innerSubscription: t } = this;
          (t && !t.closed) || super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = void 0;
        }
        notifyComplete() {
          (this.innerSubscription = void 0),
            this.isStopped && super._complete();
        }
        notifyNext(t) {
          this.destination.next(t);
        }
      }
    },
    fXoL: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return yi;
      }),
        n.d(e, "b", function () {
          return _l;
        }),
        n.d(e, "c", function () {
          return dl;
        }),
        n.d(e, "d", function () {
          return ul;
        }),
        n.d(e, "e", function () {
          return hl;
        }),
        n.d(e, "f", function () {
          return ac;
        }),
        n.d(e, "g", function () {
          return Yl;
        }),
        n.d(e, "h", function () {
          return ei;
        }),
        n.d(e, "i", function () {
          return Tl;
        }),
        n.d(e, "j", function () {
          return Zo;
        }),
        n.d(e, "k", function () {
          return vl;
        }),
        n.d(e, "l", function () {
          return Yo;
        }),
        n.d(e, "m", function () {
          return Tn;
        }),
        n.d(e, "n", function () {
          return Ba;
        }),
        n.d(e, "o", function () {
          return W;
        }),
        n.d(e, "p", function () {
          return h;
        }),
        n.d(e, "q", function () {
          return K;
        }),
        n.d(e, "r", function () {
          return bi;
        }),
        n.d(e, "s", function () {
          return ga;
        }),
        n.d(e, "t", function () {
          return _a;
        }),
        n.d(e, "u", function () {
          return yl;
        }),
        n.d(e, "v", function () {
          return ct;
        }),
        n.d(e, "w", function () {
          return Jl;
        }),
        n.d(e, "x", function () {
          return lt;
        }),
        n.d(e, "y", function () {
          return Kl;
        }),
        n.d(e, "z", function () {
          return Il;
        }),
        n.d(e, "A", function () {
          return d;
        }),
        n.d(e, "B", function () {
          return gl;
        }),
        n.d(e, "C", function () {
          return ml;
        }),
        n.d(e, "D", function () {
          return $a;
        }),
        n.d(e, "E", function () {
          return ea;
        }),
        n.d(e, "F", function () {
          return Jo;
        }),
        n.d(e, "G", function () {
          return ta;
        }),
        n.d(e, "H", function () {
          return sa;
        }),
        n.d(e, "I", function () {
          return gs;
        }),
        n.d(e, "J", function () {
          return f;
        }),
        n.d(e, "K", function () {
          return nc;
        }),
        n.d(e, "L", function () {
          return wa;
        }),
        n.d(e, "M", function () {
          return Vl;
        }),
        n.d(e, "N", function () {
          return si;
        }),
        n.d(e, "O", function () {
          return ra;
        }),
        n.d(e, "P", function () {
          return Sa;
        }),
        n.d(e, "Q", function () {
          return bt;
        }),
        n.d(e, "R", function () {
          return Wl;
        }),
        n.d(e, "S", function () {
          return Kn;
        }),
        n.d(e, "T", function () {
          return I;
        }),
        n.d(e, "U", function () {
          return rt;
        }),
        n.d(e, "V", function () {
          return $n;
        }),
        n.d(e, "W", function () {
          return ic;
        }),
        n.d(e, "X", function () {
          return zl;
        }),
        n.d(e, "Y", function () {
          return bl;
        }),
        n.d(e, "Z", function () {
          return ri;
        }),
        n.d(e, "ab", function () {
          return Lo;
        }),
        n.d(e, "bb", function () {
          return fs;
        }),
        n.d(e, "cb", function () {
          return Yn;
        }),
        n.d(e, "db", function () {
          return Ln;
        }),
        n.d(e, "eb", function () {
          return Fn;
        }),
        n.d(e, "fb", function () {
          return zn;
        }),
        n.d(e, "gb", function () {
          return Hn;
        }),
        n.d(e, "hb", function () {
          return Vn;
        }),
        n.d(e, "ib", function () {
          return Un;
        }),
        n.d(e, "jb", function () {
          return jo;
        }),
        n.d(e, "kb", function () {
          return rc;
        }),
        n.d(e, "lb", function () {
          return Po;
        }),
        n.d(e, "mb", function () {
          return Do;
        }),
        n.d(e, "nb", function () {
          return Mn;
        }),
        n.d(e, "ob", function () {
          return F;
        }),
        n.d(e, "pb", function () {
          return Ai;
        }),
        n.d(e, "qb", function () {
          return Wi;
        }),
        n.d(e, "rb", function () {
          return Ki;
        }),
        n.d(e, "sb", function () {
          return Io;
        }),
        n.d(e, "tb", function () {
          return ee;
        }),
        n.d(e, "ub", function () {
          return T;
        }),
        n.d(e, "vb", function () {
          return Nn;
        }),
        n.d(e, "wb", function () {
          return Ci;
        }),
        n.d(e, "xb", function () {
          return Qt;
        }),
        n.d(e, "yb", function () {
          return Wo;
        }),
        n.d(e, "zb", function () {
          return Ls;
        }),
        n.d(e, "Ab", function () {
          return Di;
        }),
        n.d(e, "Bb", function () {
          return xo;
        }),
        n.d(e, "Cb", function () {
          return ho;
        }),
        n.d(e, "Db", function () {
          return rl;
        }),
        n.d(e, "Eb", function () {
          return Ct;
        }),
        n.d(e, "Fb", function () {
          return Rt;
        }),
        n.d(e, "Gb", function () {
          return b;
        }),
        n.d(e, "Hb", function () {
          return y;
        }),
        n.d(e, "Ib", function () {
          return xt;
        }),
        n.d(e, "Jb", function () {
          return At;
        }),
        n.d(e, "Kb", function () {
          return Fi;
        }),
        n.d(e, "Lb", function () {
          return qi;
        }),
        n.d(e, "Mb", function () {
          return Bi;
        }),
        n.d(e, "Nb", function () {
          return zi;
        }),
        n.d(e, "Ob", function () {
          return $i;
        }),
        n.d(e, "Pb", function () {
          return En;
        }),
        n.d(e, "Qb", function () {
          return ko;
        }),
        n.d(e, "Rb", function () {
          return st;
        }),
        n.d(e, "Sb", function () {
          return Vi;
        }),
        n.d(e, "Tb", function () {
          return cl;
        }),
        n.d(e, "Ub", function () {
          return Gi;
        }),
        n.d(e, "Vb", function () {
          return il;
        }),
        n.d(e, "Wb", function () {
          return Yi;
        }),
        n.d(e, "Xb", function () {
          return Fa;
        }),
        n.d(e, "Yb", function () {
          return Va;
        }),
        n.d(e, "Zb", function () {
          return Ha;
        }),
        n.d(e, "ac", function () {
          return to;
        }),
        n.d(e, "bc", function () {
          return Ji;
        }),
        n.d(e, "cc", function () {
          return Hi;
        }),
        n.d(e, "dc", function () {
          return eo;
        }),
        n.d(e, "ec", function () {
          return Da;
        }),
        n.d(e, "fc", function () {
          return Na;
        }),
        n.d(e, "gc", function () {
          return tl;
        }),
        n.d(e, "hc", function () {
          return Mi;
        }),
        n.d(e, "ic", function () {
          return ve;
        }),
        n.d(e, "jc", function () {
          return _s;
        }),
        n.d(e, "kc", function () {
          return kt;
        }),
        n.d(e, "lc", function () {
          return el;
        }),
        n.d(e, "mc", function () {
          return uo;
        }),
        n.d(e, "nc", function () {
          return Li;
        }),
        n.d(e, "oc", function () {
          return So;
        }),
        n.d(e, "pc", function () {
          return Eo;
        }),
        n.d(e, "qc", function () {
          return Oo;
        }),
        n.d(e, "rc", function () {
          return nl;
        });
      var s = n("XNiG"),
        r = n("quSY"),
        i = n("HDdC"),
        o = n("VRyK"),
        a = n("w1tV");
      function l(t) {
        return { toString: t }.toString();
      }
      const c = "__parameters__";
      function u(t, e, n) {
        return l(() => {
          const s = (function (t) {
            return function (...e) {
              if (t) {
                const n = t(...e);
                for (const t in n) this[t] = n[t];
              }
            };
          })(e);
          function r(...t) {
            if (this instanceof r) return s.apply(this, t), this;
            const e = new r(...t);
            return (n.annotation = e), n;
            function n(t, n, s) {
              const r = t.hasOwnProperty(c)
                ? t[c]
                : Object.defineProperty(t, c, { value: [] })[c];
              for (; r.length <= s; ) r.push(null);
              return (r[s] = r[s] || []).push(e), t;
            }
          }
          return (
            n && (r.prototype = Object.create(n.prototype)),
            (r.prototype.ngMetadataName = t),
            (r.annotationCls = r),
            r
          );
        });
      }
      const h = u("Inject", (t) => ({ token: t })),
        d = u("Optional"),
        p = u("Self"),
        f = u("SkipSelf");
      var m = (function (t) {
        return (
          (t[(t.Default = 0)] = "Default"),
          (t[(t.Host = 1)] = "Host"),
          (t[(t.Self = 2)] = "Self"),
          (t[(t.SkipSelf = 4)] = "SkipSelf"),
          (t[(t.Optional = 8)] = "Optional"),
          t
        );
      })({});
      function g(t) {
        for (let e in t) if (t[e] === g) return e;
        throw Error("Could not find renamed property on target object.");
      }
      function _(t, e) {
        for (const n in e)
          e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n]);
      }
      function b(t) {
        return {
          token: t.token,
          providedIn: t.providedIn || null,
          factory: t.factory,
          value: void 0,
        };
      }
      function y(t) {
        return {
          factory: t.factory,
          providers: t.providers || [],
          imports: t.imports || [],
        };
      }
      function v(t) {
        return w(t, t[S]) || w(t, t[x]);
      }
      function w(t, e) {
        return e && e.token === t ? e : null;
      }
      function C(t) {
        return t && (t.hasOwnProperty(E) || t.hasOwnProperty(k)) ? t[E] : null;
      }
      const S = g({ "\u0275prov": g }),
        E = g({ "\u0275inj": g }),
        O = g({ "\u0275provFallback": g }),
        x = g({ ngInjectableDef: g }),
        k = g({ ngInjectorDef: g });
      function T(t) {
        if ("string" == typeof t) return t;
        if (Array.isArray(t)) return "[" + t.map(T).join(", ") + "]";
        if (null == t) return "" + t;
        if (t.overriddenName) return "" + t.overriddenName;
        if (t.name) return "" + t.name;
        const e = t.toString();
        if (null == e) return "" + e;
        const n = e.indexOf("\n");
        return -1 === n ? e : e.substring(0, n);
      }
      function R(t, e) {
        return null == t || "" === t
          ? null === e
            ? ""
            : e
          : null == e || "" === e
          ? t
          : t + " " + e;
      }
      const A = g({ __forward_ref__: g });
      function I(t) {
        return (
          (t.__forward_ref__ = I),
          (t.toString = function () {
            return T(this());
          }),
          t
        );
      }
      function j(t) {
        return P(t) ? t() : t;
      }
      function P(t) {
        return (
          "function" == typeof t &&
          t.hasOwnProperty(A) &&
          t.__forward_ref__ === I
        );
      }
      const D = "undefined" != typeof globalThis && globalThis,
        N = "undefined" != typeof window && window,
        L =
          "undefined" != typeof self &&
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        M = "undefined" != typeof global && global,
        F = D || M || N || L,
        V = g({ "\u0275cmp": g }),
        H = g({ "\u0275dir": g }),
        U = g({ "\u0275pipe": g }),
        z = g({ "\u0275mod": g }),
        B = g({ "\u0275loc": g }),
        q = g({ "\u0275fac": g }),
        $ = g({ __NG_ELEMENT_ID__: g });
      class K {
        constructor(t, e) {
          (this._desc = t),
            (this.ngMetadataName = "InjectionToken"),
            (this.ɵprov = void 0),
            "number" == typeof e
              ? (this.__NG_ELEMENT_ID__ = e)
              : void 0 !== e &&
                (this.ɵprov = b({
                  token: this,
                  providedIn: e.providedIn || "root",
                  factory: e.factory,
                }));
        }
        toString() {
          return "InjectionToken " + this._desc;
        }
      }
      const W = new K("INJECTOR", -1),
        G = {},
        Q = /\n/gm,
        Z = "__source",
        Y = g({ provide: String, useValue: g });
      let X,
        J = void 0;
      function tt(t) {
        const e = J;
        return (J = t), e;
      }
      function et(t) {
        const e = X;
        return (X = t), e;
      }
      function nt(t, e = m.Default) {
        if (void 0 === J)
          throw new Error("inject() must be called from an injection context");
        return null === J
          ? it(t, void 0, e)
          : J.get(t, e & m.Optional ? null : void 0, e);
      }
      function st(t, e = m.Default) {
        return (X || nt)(j(t), e);
      }
      const rt = st;
      function it(t, e, n) {
        const s = v(t);
        if (s && "root" == s.providedIn)
          return void 0 === s.value ? (s.value = s.factory()) : s.value;
        if (n & m.Optional) return null;
        if (void 0 !== e) return e;
        throw new Error(`Injector: NOT_FOUND [${T(t)}]`);
      }
      function ot(t) {
        const e = [];
        for (let n = 0; n < t.length; n++) {
          const s = j(t[n]);
          if (Array.isArray(s)) {
            if (0 === s.length)
              throw new Error("Arguments array must have arguments.");
            let t = void 0,
              n = m.Default;
            for (let e = 0; e < s.length; e++) {
              const r = s[e];
              r instanceof d || "Optional" === r.ngMetadataName || r === d
                ? (n |= m.Optional)
                : r instanceof f || "SkipSelf" === r.ngMetadataName || r === f
                ? (n |= m.SkipSelf)
                : r instanceof p || "Self" === r.ngMetadataName || r === p
                ? (n |= m.Self)
                : (t = r instanceof h || r === h ? r.token : r);
            }
            e.push(st(t, n));
          } else e.push(st(s));
        }
        return e;
      }
      class at {
        get(t, e = G) {
          if (e === G) {
            const e = new Error(`NullInjectorError: No provider for ${T(t)}!`);
            throw ((e.name = "NullInjectorError"), e);
          }
          return e;
        }
      }
      class lt {}
      class ct {}
      function ut(t, e) {
        t.forEach((t) => (Array.isArray(t) ? ut(t, e) : e(t)));
      }
      function ht(t, e, n) {
        e >= t.length ? t.push(n) : t.splice(e, 0, n);
      }
      function dt(t, e) {
        return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0];
      }
      function pt(t, e) {
        const n = [];
        for (let s = 0; s < t; s++) n.push(e);
        return n;
      }
      function ft(t, e, n) {
        let s = gt(t, e);
        return (
          s >= 0
            ? (t[1 | s] = n)
            : ((s = ~s),
              (function (t, e, n, s) {
                let r = t.length;
                if (r == e) t.push(n, s);
                else if (1 === r) t.push(s, t[0]), (t[0] = n);
                else {
                  for (r--, t.push(t[r - 1], t[r]); r > e; )
                    (t[r] = t[r - 2]), r--;
                  (t[e] = n), (t[e + 1] = s);
                }
              })(t, s, e, n)),
          s
        );
      }
      function mt(t, e) {
        const n = gt(t, e);
        if (n >= 0) return t[1 | n];
      }
      function gt(t, e) {
        return (function (t, e, n) {
          let s = 0,
            r = t.length >> 1;
          for (; r !== s; ) {
            const n = s + ((r - s) >> 1),
              i = t[n << 1];
            if (e === i) return n << 1;
            i > e ? (r = n) : (s = n + 1);
          }
          return ~(r << 1);
        })(t, e);
      }
      var _t = (function (t) {
          return (
            (t[(t.OnPush = 0)] = "OnPush"), (t[(t.Default = 1)] = "Default"), t
          );
        })({}),
        bt = (function (t) {
          return (
            (t[(t.Emulated = 0)] = "Emulated"),
            (t[(t.Native = 1)] = "Native"),
            (t[(t.None = 2)] = "None"),
            (t[(t.ShadowDom = 3)] = "ShadowDom"),
            t
          );
        })({});
      const yt = {},
        vt = [];
      let wt = 0;
      function Ct(t) {
        return l(() => {
          const e = {},
            n = {
              type: t.type,
              providersResolver: null,
              decls: t.decls,
              vars: t.vars,
              factory: null,
              template: t.template || null,
              consts: t.consts || null,
              ngContentSelectors: t.ngContentSelectors,
              hostBindings: t.hostBindings || null,
              hostVars: t.hostVars || 0,
              hostAttrs: t.hostAttrs || null,
              contentQueries: t.contentQueries || null,
              declaredInputs: e,
              inputs: null,
              outputs: null,
              exportAs: t.exportAs || null,
              onPush: t.changeDetection === _t.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              selectors: t.selectors || vt,
              viewQuery: t.viewQuery || null,
              features: t.features || null,
              data: t.data || {},
              encapsulation: t.encapsulation || bt.Emulated,
              id: "c",
              styles: t.styles || vt,
              _: null,
              setInput: null,
              schemas: t.schemas || null,
              tView: null,
            },
            s = t.directives,
            r = t.features,
            i = t.pipes;
          return (
            (n.id += wt++),
            (n.inputs = Tt(t.inputs, e)),
            (n.outputs = Tt(t.outputs)),
            r && r.forEach((t) => t(n)),
            (n.directiveDefs = s
              ? () => ("function" == typeof s ? s() : s).map(St)
              : null),
            (n.pipeDefs = i
              ? () => ("function" == typeof i ? i() : i).map(Et)
              : null),
            n
          );
        });
      }
      function St(t) {
        return (
          It(t) ||
          (function (t) {
            return t[H] || null;
          })(t)
        );
      }
      function Et(t) {
        return (function (t) {
          return t[U] || null;
        })(t);
      }
      const Ot = {};
      function xt(t) {
        const e = {
          type: t.type,
          bootstrap: t.bootstrap || vt,
          declarations: t.declarations || vt,
          imports: t.imports || vt,
          exports: t.exports || vt,
          transitiveCompileScopes: null,
          schemas: t.schemas || null,
          id: t.id || null,
        };
        return (
          null != t.id &&
            l(() => {
              Ot[t.id] = t.type;
            }),
          e
        );
      }
      function kt(t, e) {
        return l(() => {
          const n = Pt(t, !0);
          (n.declarations = e.declarations || vt),
            (n.imports = e.imports || vt),
            (n.exports = e.exports || vt);
        });
      }
      function Tt(t, e) {
        if (null == t) return yt;
        const n = {};
        for (const s in t)
          if (t.hasOwnProperty(s)) {
            let r = t[s],
              i = r;
            Array.isArray(r) && ((i = r[1]), (r = r[0])),
              (n[r] = s),
              e && (e[r] = i);
          }
        return n;
      }
      const Rt = Ct;
      function At(t) {
        return {
          type: t.type,
          name: t.name,
          factory: null,
          pure: !1 !== t.pure,
          onDestroy: t.type.prototype.ngOnDestroy || null,
        };
      }
      function It(t) {
        return t[V] || null;
      }
      function jt(t, e) {
        return t.hasOwnProperty(q) ? t[q] : null;
      }
      function Pt(t, e) {
        const n = t[z] || null;
        if (!n && !0 === e)
          throw new Error(`Type ${T(t)} does not have '\u0275mod' property.`);
        return n;
      }
      const Dt = 20,
        Nt = 10;
      function Lt(t) {
        return Array.isArray(t) && "object" == typeof t[1];
      }
      function Mt(t) {
        return Array.isArray(t) && !0 === t[1];
      }
      function Ft(t) {
        return 0 != (8 & t.flags);
      }
      function Vt(t) {
        return 2 == (2 & t.flags);
      }
      function Ht(t) {
        return 1 == (1 & t.flags);
      }
      function Ut(t) {
        return null !== t.template;
      }
      function zt(t) {
        return 0 != (512 & t[2]);
      }
      function Bt(t) {
        return "string" == typeof t ? t : null == t ? "" : "" + t;
      }
      function qt(t) {
        return "function" == typeof t
          ? t.name || t.toString()
          : "object" == typeof t && null != t && "function" == typeof t.type
          ? t.type.name || t.type.toString()
          : Bt(t);
      }
      const $t = (() =>
        (
          ("undefined" != typeof requestAnimationFrame &&
            requestAnimationFrame) ||
          setTimeout
        ).bind(F))();
      function Kt(t) {
        return t instanceof Function ? t() : t;
      }
      function Wt(t, e) {
        const n = e ? " in " + e : "";
        throw new Error(`No provider for ${qt(t)} found${n}`);
      }
      class Gt {
        constructor(t, e, n) {
          (this.previousValue = t),
            (this.currentValue = e),
            (this.firstChange = n);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function Qt() {
        return Zt;
      }
      function Zt(t) {
        return t.type.prototype.ngOnChanges && (t.setInput = Xt), Yt;
      }
      function Yt() {
        const t = Jt(this),
          e = null == t ? void 0 : t.current;
        if (e) {
          const n = t.previous;
          if (n === yt) t.previous = e;
          else for (let t in e) n[t] = e[t];
          (t.current = null), this.ngOnChanges(e);
        }
      }
      function Xt(t, e, n, s) {
        const r =
            Jt(t) ||
            (function (t, e) {
              return (t.__ngSimpleChanges__ = e);
            })(t, { previous: yt, current: null }),
          i = r.current || (r.current = {}),
          o = r.previous,
          a = this.declaredInputs[n],
          l = o[a];
        (i[a] = new Gt(l && l.currentValue, e, o === yt)), (t[s] = e);
      }
      function Jt(t) {
        return t.__ngSimpleChanges__ || null;
      }
      Qt.ngInherit = !0;
      let te = void 0;
      function ee(t) {
        te = t;
      }
      function ne(t) {
        return !!t.listen;
      }
      const se = {
        createRenderer: (t, e) =>
          void 0 !== te
            ? te
            : "undefined" != typeof document
            ? document
            : void 0,
      };
      function re(t) {
        for (; Array.isArray(t); ) t = t[0];
        return t;
      }
      function ie(t, e) {
        return re(e[t + Dt]);
      }
      function oe(t, e) {
        return re(e[t.index]);
      }
      function ae(t, e) {
        return t.data[e + Dt];
      }
      function le(t, e) {
        return t[e + Dt];
      }
      function ce(t, e) {
        const n = e[t];
        return Lt(n) ? n : n[0];
      }
      function ue(t) {
        const e = (function (t) {
          return t.__ngContext__ || null;
        })(t);
        return e ? (Array.isArray(e) ? e : e.lView) : null;
      }
      function he(t) {
        return 4 == (4 & t[2]);
      }
      function de(t) {
        return 128 == (128 & t[2]);
      }
      function pe(t, e) {
        return null === t || null == e ? null : t[e];
      }
      function fe(t) {
        t[18] = 0;
      }
      function me(t, e) {
        t[5] += e;
        let n = t,
          s = t[3];
        for (
          ;
          null !== s && ((1 === e && 1 === n[5]) || (-1 === e && 0 === n[5]));

        )
          (s[5] += e), (n = s), (s = s[3]);
      }
      const ge = {
        lFrame: Me(null),
        bindingsEnabled: !0,
        isInCheckNoChangesMode: !1,
      };
      function _e() {
        return ge.bindingsEnabled;
      }
      function be() {
        return ge.lFrame.lView;
      }
      function ye() {
        return ge.lFrame.tView;
      }
      function ve(t) {
        ge.lFrame.contextLView = t;
      }
      function we() {
        return ge.lFrame.currentTNode;
      }
      function Ce(t, e) {
        (ge.lFrame.currentTNode = t), (ge.lFrame.isParent = e);
      }
      function Se() {
        return ge.lFrame.isParent;
      }
      function Ee() {
        ge.lFrame.isParent = !1;
      }
      function Oe() {
        return ge.isInCheckNoChangesMode;
      }
      function xe(t) {
        ge.isInCheckNoChangesMode = t;
      }
      function ke() {
        const t = ge.lFrame;
        let e = t.bindingRootIndex;
        return (
          -1 === e && (e = t.bindingRootIndex = t.tView.bindingStartIndex), e
        );
      }
      function Te() {
        return ge.lFrame.bindingIndex++;
      }
      function Re(t) {
        const e = ge.lFrame,
          n = e.bindingIndex;
        return (e.bindingIndex = e.bindingIndex + t), n;
      }
      function Ae(t, e) {
        const n = ge.lFrame;
        (n.bindingIndex = n.bindingRootIndex = t), Ie(e);
      }
      function Ie(t) {
        ge.lFrame.currentDirectiveIndex = t;
      }
      function je() {
        return ge.lFrame.currentQueryIndex;
      }
      function Pe(t) {
        ge.lFrame.currentQueryIndex = t;
      }
      function De(t, e) {
        const n = Le();
        (ge.lFrame = n), (n.currentTNode = e), (n.lView = t);
      }
      function Ne(t) {
        const e = Le(),
          n = t[1];
        (ge.lFrame = e),
          (e.currentTNode = n.firstChild),
          (e.lView = t),
          (e.tView = n),
          (e.contextLView = t),
          (e.bindingIndex = n.bindingStartIndex);
      }
      function Le() {
        const t = ge.lFrame,
          e = null === t ? null : t.child;
        return null === e ? Me(t) : e;
      }
      function Me(t) {
        const e = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: 0,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: t,
          child: null,
        };
        return null !== t && (t.child = e), e;
      }
      function Fe() {
        const t = ge.lFrame;
        return (
          (ge.lFrame = t.parent), (t.currentTNode = null), (t.lView = null), t
        );
      }
      const Ve = Fe;
      function He() {
        const t = Fe();
        (t.isParent = !0),
          (t.tView = null),
          (t.selectedIndex = 0),
          (t.contextLView = null),
          (t.elementDepthCount = 0),
          (t.currentDirectiveIndex = -1),
          (t.currentNamespace = null),
          (t.bindingRootIndex = -1),
          (t.bindingIndex = -1),
          (t.currentQueryIndex = 0);
      }
      function Ue() {
        return ge.lFrame.selectedIndex;
      }
      function ze(t) {
        ge.lFrame.selectedIndex = t;
      }
      function Be() {
        const t = ge.lFrame;
        return ae(t.tView, t.selectedIndex);
      }
      function qe(t, e) {
        for (let n = e.directiveStart, s = e.directiveEnd; n < s; n++) {
          const e = t.data[n].type.prototype,
            {
              ngAfterContentInit: s,
              ngAfterContentChecked: r,
              ngAfterViewInit: i,
              ngAfterViewChecked: o,
              ngOnDestroy: a,
            } = e;
          s && (t.contentHooks || (t.contentHooks = [])).push(-n, s),
            r &&
              ((t.contentHooks || (t.contentHooks = [])).push(n, r),
              (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, r)),
            i && (t.viewHooks || (t.viewHooks = [])).push(-n, i),
            o &&
              ((t.viewHooks || (t.viewHooks = [])).push(n, o),
              (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, o)),
            null != a && (t.destroyHooks || (t.destroyHooks = [])).push(n, a);
        }
      }
      function $e(t, e, n) {
        Ge(t, e, 3, n);
      }
      function Ke(t, e, n, s) {
        (3 & t[2]) === n && Ge(t, e, n, s);
      }
      function We(t, e) {
        let n = t[2];
        (3 & n) === e && ((n &= 2047), (n += 1), (t[2] = n));
      }
      function Ge(t, e, n, s) {
        const r = null != s ? s : -1;
        let i = 0;
        for (let o = void 0 !== s ? 65535 & t[18] : 0; o < e.length; o++)
          if ("number" == typeof e[o + 1]) {
            if (((i = e[o]), null != s && i >= s)) break;
          } else
            e[o] < 0 && (t[18] += 65536),
              (i < r || -1 == r) &&
                (Qe(t, n, e, o), (t[18] = (4294901760 & t[18]) + o + 2)),
              o++;
      }
      function Qe(t, e, n, s) {
        const r = n[s] < 0,
          i = n[s + 1],
          o = t[r ? -n[s] : n[s]];
        r
          ? t[2] >> 11 < t[18] >> 16 &&
            (3 & t[2]) === e &&
            ((t[2] += 2048), i.call(o))
          : i.call(o);
      }
      const Ze = -1;
      class Ye {
        constructor(t, e, n) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = e),
            (this.injectImpl = n);
        }
      }
      function Xe(t, e, n) {
        const s = ne(t);
        let r = 0;
        for (; r < n.length; ) {
          const i = n[r];
          if ("number" == typeof i) {
            if (0 !== i) break;
            r++;
            const o = n[r++],
              a = n[r++],
              l = n[r++];
            s ? t.setAttribute(e, a, l, o) : e.setAttributeNS(o, a, l);
          } else {
            const o = i,
              a = n[++r];
            tn(o)
              ? s && t.setProperty(e, o, a)
              : s
              ? t.setAttribute(e, o, a)
              : e.setAttribute(o, a),
              r++;
          }
        }
        return r;
      }
      function Je(t) {
        return 3 === t || 4 === t || 6 === t;
      }
      function tn(t) {
        return 64 === t.charCodeAt(0);
      }
      function en(t, e) {
        if (null === e || 0 === e.length);
        else if (null === t || 0 === t.length) t = e.slice();
        else {
          let n = -1;
          for (let s = 0; s < e.length; s++) {
            const r = e[s];
            "number" == typeof r
              ? (n = r)
              : 0 === n ||
                nn(t, n, r, null, -1 === n || 2 === n ? e[++s] : null);
          }
        }
        return t;
      }
      function nn(t, e, n, s, r) {
        let i = 0,
          o = t.length;
        if (-1 === e) o = -1;
        else
          for (; i < t.length; ) {
            const n = t[i++];
            if ("number" == typeof n) {
              if (n === e) {
                o = -1;
                break;
              }
              if (n > e) {
                o = i - 1;
                break;
              }
            }
          }
        for (; i < t.length; ) {
          const e = t[i];
          if ("number" == typeof e) break;
          if (e === n) {
            if (null === s) return void (null !== r && (t[i + 1] = r));
            if (s === t[i + 1]) return void (t[i + 2] = r);
          }
          i++, null !== s && i++, null !== r && i++;
        }
        -1 !== o && (t.splice(o, 0, e), (i = o + 1)),
          t.splice(i++, 0, n),
          null !== s && t.splice(i++, 0, s),
          null !== r && t.splice(i++, 0, r);
      }
      function sn(t) {
        return t !== Ze;
      }
      function rn(t) {
        return 32767 & t;
      }
      function on(t, e) {
        let n = t >> 16,
          s = e;
        for (; n > 0; ) (s = s[15]), n--;
        return s;
      }
      let an = !0;
      function ln(t) {
        const e = an;
        return (an = t), e;
      }
      let cn = 0;
      function un(t, e) {
        const n = dn(t, e);
        if (-1 !== n) return n;
        const s = e[1];
        s.firstCreatePass &&
          ((t.injectorIndex = e.length),
          hn(s.data, t),
          hn(e, null),
          hn(s.blueprint, null));
        const r = pn(t, e),
          i = t.injectorIndex;
        if (sn(r)) {
          const t = rn(r),
            n = on(r, e),
            s = n[1].data;
          for (let r = 0; r < 8; r++) e[i + r] = n[t + r] | s[t + r];
        }
        return (e[i + 8] = r), i;
      }
      function hn(t, e) {
        t.push(0, 0, 0, 0, 0, 0, 0, 0, e);
      }
      function dn(t, e) {
        return -1 === t.injectorIndex ||
          (t.parent && t.parent.injectorIndex === t.injectorIndex) ||
          null === e[t.injectorIndex + 8]
          ? -1
          : t.injectorIndex;
      }
      function pn(t, e) {
        if (t.parent && -1 !== t.parent.injectorIndex)
          return t.parent.injectorIndex;
        let n = 0,
          s = null,
          r = e;
        for (; null !== r; ) {
          const t = r[1],
            e = t.type;
          if (((s = 2 === e ? t.declTNode : 1 === e ? r[6] : null), null === s))
            return Ze;
          if ((n++, (r = r[15]), -1 !== s.injectorIndex))
            return s.injectorIndex | (n << 16);
        }
        return Ze;
      }
      function fn(t, e, n) {
        !(function (t, e, n) {
          let s;
          "string" == typeof n
            ? (s = n.charCodeAt(0) || 0)
            : n.hasOwnProperty($) && (s = n[$]),
            null == s && (s = n[$] = cn++);
          const r = 255 & s,
            i = 1 << r,
            o = 64 & r,
            a = 32 & r,
            l = e.data;
          128 & r
            ? o
              ? a
                ? (l[t + 7] |= i)
                : (l[t + 6] |= i)
              : a
              ? (l[t + 5] |= i)
              : (l[t + 4] |= i)
            : o
            ? a
              ? (l[t + 3] |= i)
              : (l[t + 2] |= i)
            : a
            ? (l[t + 1] |= i)
            : (l[t] |= i);
        })(t, e, n);
      }
      function mn(t, e, n, s = m.Default, r) {
        if (null !== t) {
          const r = (function (t) {
            if ("string" == typeof t) return t.charCodeAt(0) || 0;
            const e = t.hasOwnProperty($) ? t[$] : void 0;
            return "number" == typeof e && e > 0 ? 255 & e : e;
          })(n);
          if ("function" == typeof r) {
            De(e, t);
            try {
              const t = r();
              if (null != t || s & m.Optional) return t;
              Wt(n);
            } finally {
              Ve();
            }
          } else if ("number" == typeof r) {
            if (-1 === r) return new Cn(t, e);
            let i = null,
              o = dn(t, e),
              a = Ze,
              l = s & m.Host ? e[16][6] : null;
            for (
              (-1 === o || s & m.SkipSelf) &&
              ((a = -1 === o ? pn(t, e) : e[o + 8]),
              a !== Ze && wn(s, !1)
                ? ((i = e[1]), (o = rn(a)), (e = on(a, e)))
                : (o = -1));
              -1 !== o;

            ) {
              const t = e[1];
              if (vn(r, o, t.data)) {
                const t = _n(o, e, n, i, s, l);
                if (t !== gn) return t;
              }
              (a = e[o + 8]),
                a !== Ze && wn(s, e[1].data[o + 8] === l) && vn(r, o, e)
                  ? ((i = t), (o = rn(a)), (e = on(a, e)))
                  : (o = -1);
            }
          }
        }
        if (
          (s & m.Optional && void 0 === r && (r = null),
          0 == (s & (m.Self | m.Host)))
        ) {
          const t = e[9],
            i = et(void 0);
          try {
            return t ? t.get(n, r, s & m.Optional) : it(n, r, s & m.Optional);
          } finally {
            et(i);
          }
        }
        if (s & m.Optional) return r;
        Wt(n, "NodeInjector");
      }
      const gn = {};
      function _n(t, e, n, s, r, i) {
        const o = e[1],
          a = o.data[t + 8],
          l = bn(
            a,
            o,
            n,
            null == s ? Vt(a) && an : s != o && 2 === a.type,
            r & m.Host && i === a
          );
        return null !== l ? yn(e, o, l, a) : gn;
      }
      function bn(t, e, n, s, r) {
        const i = t.providerIndexes,
          o = e.data,
          a = 1048575 & i,
          l = t.directiveStart,
          c = i >> 20,
          u = r ? a + c : t.directiveEnd;
        for (let h = s ? a : a + c; h < u; h++) {
          const t = o[h];
          if ((h < l && n === t) || (h >= l && t.type === n)) return h;
        }
        if (r) {
          const t = o[l];
          if (t && Ut(t) && t.type === n) return l;
        }
        return null;
      }
      function yn(t, e, n, s) {
        let r = t[n];
        const i = e.data;
        if (r instanceof Ye) {
          const o = r;
          o.resolving &&
            (function (t, e) {
              throw new Error("Circular dependency in DI detected for " + t);
            })(qt(i[n]));
          const a = ln(o.canSeeViewProviders);
          o.resolving = !0;
          const l = o.injectImpl ? et(o.injectImpl) : null;
          De(t, s);
          try {
            (r = t[n] = o.factory(void 0, i, t, s)),
              e.firstCreatePass &&
                n >= s.directiveStart &&
                (function (t, e, n) {
                  const {
                    ngOnChanges: s,
                    ngOnInit: r,
                    ngDoCheck: i,
                  } = e.type.prototype;
                  if (s) {
                    const s = Zt(e);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(t, s),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(t, s);
                  }
                  r &&
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - t, r),
                    i &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, i),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(t, i));
                })(n, i[n], e);
          } finally {
            null !== l && et(l), ln(a), (o.resolving = !1), Ve();
          }
        }
        return r;
      }
      function vn(t, e, n) {
        const s = 64 & t,
          r = 32 & t;
        let i;
        return (
          (i =
            128 & t
              ? s
                ? r
                  ? n[e + 7]
                  : n[e + 6]
                : r
                ? n[e + 5]
                : n[e + 4]
              : s
              ? r
                ? n[e + 3]
                : n[e + 2]
              : r
              ? n[e + 1]
              : n[e]),
          !!(i & (1 << t))
        );
      }
      function wn(t, e) {
        return !(t & m.Self || (t & m.Host && e));
      }
      class Cn {
        constructor(t, e) {
          (this._tNode = t), (this._lView = e);
        }
        get(t, e) {
          return mn(this._tNode, this._lView, t, void 0, e);
        }
      }
      function Sn(t) {
        const e = t;
        if (P(t))
          return () => {
            const t = Sn(j(e));
            return t ? t() : null;
          };
        let n = jt(e);
        if (null === n) {
          const t = C(e);
          n = t && t.factory;
        }
        return n || null;
      }
      function En(t) {
        return l(() => {
          const e = t.prototype.constructor,
            n = e[q] || Sn(e),
            s = Object.prototype;
          let r = Object.getPrototypeOf(t.prototype).constructor;
          for (; r && r !== s; ) {
            const t = r[q] || Sn(r);
            if (t && t !== n) return t;
            r = Object.getPrototypeOf(r);
          }
          return (t) => new t();
        });
      }
      function On(t) {
        return t.ngDebugContext;
      }
      function xn(t) {
        return t.ngOriginalError;
      }
      function kn(t, ...e) {
        t.error(...e);
      }
      class Tn {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const e = this._findOriginalError(t),
            n = this._findContext(t),
            s = (function (t) {
              return t.ngErrorLogger || kn;
            })(t);
          s(this._console, "ERROR", t),
            e && s(this._console, "ORIGINAL ERROR", e),
            n && s(this._console, "ERROR CONTEXT", n);
        }
        _findContext(t) {
          return t ? (On(t) ? On(t) : this._findContext(xn(t))) : null;
        }
        _findOriginalError(t) {
          let e = xn(t);
          for (; e && xn(e); ) e = xn(e);
          return e;
        }
      }
      class Rn {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return (
            "SafeValue must use [property]=binding: " +
            this.changingThisBreaksApplicationSecurity +
            " (see http://g.co/ng/security#xss)"
          );
        }
      }
      class An extends Rn {
        getTypeName() {
          return "HTML";
        }
      }
      class In extends Rn {
        getTypeName() {
          return "Style";
        }
      }
      class jn extends Rn {
        getTypeName() {
          return "Script";
        }
      }
      class Pn extends Rn {
        getTypeName() {
          return "URL";
        }
      }
      class Dn extends Rn {
        getTypeName() {
          return "ResourceURL";
        }
      }
      function Nn(t) {
        return t instanceof Rn ? t.changingThisBreaksApplicationSecurity : t;
      }
      function Ln(t, e) {
        const n = Mn(t);
        if (null != n && n !== e) {
          if ("ResourceURL" === n && "URL" === e) return !0;
          throw new Error(
            `Required a safe ${e}, got a ${n} (see http://g.co/ng/security#xss)`
          );
        }
        return n === e;
      }
      function Mn(t) {
        return (t instanceof Rn && t.getTypeName()) || null;
      }
      function Fn(t) {
        return new An(t);
      }
      function Vn(t) {
        return new In(t);
      }
      function Hn(t) {
        return new jn(t);
      }
      function Un(t) {
        return new Pn(t);
      }
      function zn(t) {
        return new Dn(t);
      }
      let Bn = !0,
        qn = !1;
      function $n() {
        return (qn = !0), Bn;
      }
      function Kn() {
        if (qn)
          throw new Error("Cannot enable prod mode after platform setup.");
        Bn = !1;
      }
      class Wn {
        getInertBodyElement(t) {
          t = "<body><remove></remove>" + t;
          try {
            const e = new window.DOMParser().parseFromString(t, "text/html")
              .body;
            return e.removeChild(e.firstChild), e;
          } catch (e) {
            return null;
          }
        }
      }
      class Gn {
        constructor(t) {
          if (
            ((this.defaultDoc = t),
            (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument(
              "sanitization-inert"
            )),
            null == this.inertDocument.body)
          ) {
            const t = this.inertDocument.createElement("html");
            this.inertDocument.appendChild(t);
            const e = this.inertDocument.createElement("body");
            t.appendChild(e);
          }
        }
        getInertBodyElement(t) {
          const e = this.inertDocument.createElement("template");
          if ("content" in e) return (e.innerHTML = t), e;
          const n = this.inertDocument.createElement("body");
          return (
            (n.innerHTML = t),
            this.defaultDoc.documentMode && this.stripCustomNsAttrs(n),
            n
          );
        }
        stripCustomNsAttrs(t) {
          const e = t.attributes;
          for (let s = e.length - 1; 0 < s; s--) {
            const n = e.item(s).name;
            ("xmlns:ns1" !== n && 0 !== n.indexOf("ns1:")) ||
              t.removeAttribute(n);
          }
          let n = t.firstChild;
          for (; n; )
            n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n),
              (n = n.nextSibling);
        }
      }
      const Qn = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
        Zn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function Yn(t) {
        return (t = String(t)).match(Qn) || t.match(Zn)
          ? t
          : ($n() &&
              console.warn(
                `WARNING: sanitizing unsafe URL value ${t} (see http://g.co/ng/security#xss)`
              ),
            "unsafe:" + t);
      }
      function Xn(t) {
        const e = {};
        for (const n of t.split(",")) e[n] = !0;
        return e;
      }
      function Jn(...t) {
        const e = {};
        for (const n of t)
          for (const t in n) n.hasOwnProperty(t) && (e[t] = !0);
        return e;
      }
      const ts = Xn("area,br,col,hr,img,wbr"),
        es = Xn("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
        ns = Xn("rp,rt"),
        ss = Jn(ns, es),
        rs = Jn(
          ts,
          Jn(
            es,
            Xn(
              "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul"
            )
          ),
          Jn(
            ns,
            Xn(
              "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video"
            )
          ),
          ss
        ),
        is = Xn("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
        os = Xn("srcset"),
        as = Jn(
          is,
          os,
          Xn(
            "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"
          ),
          Xn(
            "aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"
          )
        ),
        ls = Xn("script,style,template");
      class cs {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(t) {
          let e = t.firstChild,
            n = !0;
          for (; e; )
            if (
              (e.nodeType === Node.ELEMENT_NODE
                ? (n = this.startElement(e))
                : e.nodeType === Node.TEXT_NODE
                ? this.chars(e.nodeValue)
                : (this.sanitizedSomething = !0),
              n && e.firstChild)
            )
              e = e.firstChild;
            else
              for (; e; ) {
                e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
                let t = this.checkClobberedElement(e, e.nextSibling);
                if (t) {
                  e = t;
                  break;
                }
                e = this.checkClobberedElement(e, e.parentNode);
              }
          return this.buf.join("");
        }
        startElement(t) {
          const e = t.nodeName.toLowerCase();
          if (!rs.hasOwnProperty(e))
            return (this.sanitizedSomething = !0), !ls.hasOwnProperty(e);
          this.buf.push("<"), this.buf.push(e);
          const n = t.attributes;
          for (let r = 0; r < n.length; r++) {
            const t = n.item(r),
              e = t.name,
              i = e.toLowerCase();
            if (!as.hasOwnProperty(i)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let o = t.value;
            is[i] && (o = Yn(o)),
              os[i] &&
                ((s = o),
                (o = (s = String(s))
                  .split(",")
                  .map((t) => Yn(t.trim()))
                  .join(", "))),
              this.buf.push(" ", e, '="', ds(o), '"');
          }
          var s;
          return this.buf.push(">"), !0;
        }
        endElement(t) {
          const e = t.nodeName.toLowerCase();
          rs.hasOwnProperty(e) &&
            !ts.hasOwnProperty(e) &&
            (this.buf.push("</"), this.buf.push(e), this.buf.push(">"));
        }
        chars(t) {
          this.buf.push(ds(t));
        }
        checkClobberedElement(t, e) {
          if (
            e &&
            (t.compareDocumentPosition(e) &
              Node.DOCUMENT_POSITION_CONTAINED_BY) ===
              Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(
              "Failed to sanitize html because the element is clobbered: " +
                t.outerHTML
            );
          return e;
        }
      }
      const us = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        hs = /([^\#-~ |!])/g;
      function ds(t) {
        return t
          .replace(/&/g, "&amp;")
          .replace(us, function (t) {
            return (
              "&#" +
              (1024 * (t.charCodeAt(0) - 55296) +
                (t.charCodeAt(1) - 56320) +
                65536) +
              ";"
            );
          })
          .replace(hs, function (t) {
            return "&#" + t.charCodeAt(0) + ";";
          })
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      let ps;
      function fs(t, e) {
        let n = null;
        try {
          ps =
            ps ||
            (function (t) {
              return (function () {
                try {
                  return !!new window.DOMParser().parseFromString(
                    "",
                    "text/html"
                  );
                } catch (t) {
                  return !1;
                }
              })()
                ? new Wn()
                : new Gn(t);
            })(t);
          let s = e ? String(e) : "";
          n = ps.getInertBodyElement(s);
          let r = 5,
            i = s;
          do {
            if (0 === r)
              throw new Error(
                "Failed to sanitize html because the input is unstable"
              );
            r--, (s = i), (i = n.innerHTML), (n = ps.getInertBodyElement(s));
          } while (s !== i);
          const o = new cs(),
            a = o.sanitizeChildren(ms(n) || n);
          return (
            $n() &&
              o.sanitizedSomething &&
              console.warn(
                "WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss"
              ),
            a
          );
        } finally {
          if (n) {
            const t = ms(n) || n;
            for (; t.firstChild; ) t.removeChild(t.firstChild);
          }
        }
      }
      function ms(t) {
        return "content" in t &&
          (function (t) {
            return (
              t.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === t.nodeName
            );
          })(t)
          ? t.content
          : null;
      }
      var gs = (function (t) {
        return (
          (t[(t.NONE = 0)] = "NONE"),
          (t[(t.HTML = 1)] = "HTML"),
          (t[(t.STYLE = 2)] = "STYLE"),
          (t[(t.SCRIPT = 3)] = "SCRIPT"),
          (t[(t.URL = 4)] = "URL"),
          (t[(t.RESOURCE_URL = 5)] = "RESOURCE_URL"),
          t
        );
      })({});
      function _s(t) {
        const e = (function () {
          const t = be();
          return t && t[12];
        })();
        return e
          ? e.sanitize(gs.URL, t) || ""
          : Ln(t, "URL")
          ? Nn(t)
          : Yn(Bt(t));
      }
      function bs(t, e) {
        t.__ngContext__ = e;
      }
      function ys(t, e, n) {
        let s = t.length;
        for (;;) {
          const r = t.indexOf(e, n);
          if (-1 === r) return r;
          if (0 === r || t.charCodeAt(r - 1) <= 32) {
            const n = e.length;
            if (r + n === s || t.charCodeAt(r + n) <= 32) return r;
          }
          n = r + 1;
        }
      }
      const vs = "ng-template";
      function ws(t, e, n) {
        let s = 0;
        for (; s < t.length; ) {
          let r = t[s++];
          if (n && "class" === r) {
            if (((r = t[s]), -1 !== ys(r.toLowerCase(), e, 0))) return !0;
          } else if (1 === r) {
            for (; s < t.length && "string" == typeof (r = t[s++]); )
              if (r.toLowerCase() === e) return !0;
            return !1;
          }
        }
        return !1;
      }
      function Cs(t) {
        return 0 === t.type && t.tagName !== vs;
      }
      function Ss(t, e, n) {
        return e === (0 !== t.type || n ? t.tagName : vs);
      }
      function Es(t, e, n) {
        let s = 4;
        const r = t.attrs || [],
          i = (function (t) {
            for (let e = 0; e < t.length; e++) if (Je(t[e])) return e;
            return t.length;
          })(r);
        let o = !1;
        for (let a = 0; a < e.length; a++) {
          const l = e[a];
          if ("number" != typeof l) {
            if (!o)
              if (4 & s) {
                if (
                  ((s = 2 | (1 & s)),
                  ("" !== l && !Ss(t, l, n)) || ("" === l && 1 === e.length))
                ) {
                  if (Os(s)) return !1;
                  o = !0;
                }
              } else {
                const c = 8 & s ? l : e[++a];
                if (8 & s && null !== t.attrs) {
                  if (!ws(t.attrs, c, n)) {
                    if (Os(s)) return !1;
                    o = !0;
                  }
                  continue;
                }
                const u = xs(8 & s ? "class" : l, r, Cs(t), n);
                if (-1 === u) {
                  if (Os(s)) return !1;
                  o = !0;
                  continue;
                }
                if ("" !== c) {
                  let t;
                  t = u > i ? "" : r[u + 1].toLowerCase();
                  const e = 8 & s ? t : null;
                  if ((e && -1 !== ys(e, c, 0)) || (2 & s && c !== t)) {
                    if (Os(s)) return !1;
                    o = !0;
                  }
                }
              }
          } else {
            if (!o && !Os(s) && !Os(l)) return !1;
            if (o && Os(l)) continue;
            (o = !1), (s = l | (1 & s));
          }
        }
        return Os(s) || o;
      }
      function Os(t) {
        return 0 == (1 & t);
      }
      function xs(t, e, n, s) {
        if (null === e) return -1;
        let r = 0;
        if (s || !n) {
          let n = !1;
          for (; r < e.length; ) {
            const s = e[r];
            if (s === t) return r;
            if (3 === s || 6 === s) n = !0;
            else {
              if (1 === s || 2 === s) {
                let t = e[++r];
                for (; "string" == typeof t; ) t = e[++r];
                continue;
              }
              if (4 === s) break;
              if (0 === s) {
                r += 4;
                continue;
              }
            }
            r += n ? 1 : 2;
          }
          return -1;
        }
        return (function (t, e) {
          let n = t.indexOf(4);
          if (n > -1)
            for (n++; n < t.length; ) {
              const s = t[n];
              if ("number" == typeof s) return -1;
              if (s === e) return n;
              n++;
            }
          return -1;
        })(e, t);
      }
      function ks(t, e, n = !1) {
        for (let s = 0; s < e.length; s++) if (Es(t, e[s], n)) return !0;
        return !1;
      }
      function Ts(t, e) {
        t: for (let n = 0; n < e.length; n++) {
          const s = e[n];
          if (t.length === s.length) {
            for (let e = 0; e < t.length; e++) if (t[e] !== s[e]) continue t;
            return !0;
          }
        }
        return !1;
      }
      function Rs(t, e) {
        return t ? ":not(" + e.trim() + ")" : e;
      }
      function As(t) {
        let e = t[0],
          n = 1,
          s = 2,
          r = "",
          i = !1;
        for (; n < t.length; ) {
          let o = t[n];
          if ("string" == typeof o)
            if (2 & s) {
              const e = t[++n];
              r += "[" + o + (e.length > 0 ? '="' + e + '"' : "") + "]";
            } else 8 & s ? (r += "." + o) : 4 & s && (r += " " + o);
          else
            "" === r || Os(o) || ((e += Rs(i, r)), (r = "")),
              (s = o),
              (i = i || !Os(s));
          n++;
        }
        return "" !== r && (e += Rs(i, r)), e;
      }
      const Is = {};
      function js(t) {
        const e = t[3];
        return Mt(e) ? e[3] : e;
      }
      function Ps(t) {
        return Ns(t[13]);
      }
      function Ds(t) {
        return Ns(t[4]);
      }
      function Ns(t) {
        for (; null !== t && !Mt(t); ) t = t[4];
        return t;
      }
      function Ls(t) {
        Ms(ye(), be(), Ue() + t, Oe());
      }
      function Ms(t, e, n, s) {
        if (!s)
          if (3 == (3 & e[2])) {
            const s = t.preOrderCheckHooks;
            null !== s && $e(e, s, n);
          } else {
            const s = t.preOrderHooks;
            null !== s && Ke(e, s, 0, n);
          }
        ze(n);
      }
      function Fs(t, e) {
        return (t << 17) | (e << 2);
      }
      function Vs(t) {
        return (t >> 17) & 32767;
      }
      function Hs(t) {
        return 2 | t;
      }
      function Us(t) {
        return (131068 & t) >> 2;
      }
      function zs(t, e) {
        return (-131069 & t) | (e << 2);
      }
      function Bs(t) {
        return 1 | t;
      }
      function qs(t, e) {
        const n = t.contentQueries;
        if (null !== n)
          for (let s = 0; s < n.length; s += 2) {
            const r = n[s],
              i = n[s + 1];
            if (-1 !== i) {
              const n = t.data[i];
              Pe(r), n.contentQueries(2, e[i], i);
            }
          }
      }
      function $s(t, e, n) {
        return ne(e)
          ? e.createElement(t, n)
          : null === n
          ? e.createElement(t)
          : e.createElementNS(n, t);
      }
      function Ks(t, e, n, s, r, i, o, a, l, c) {
        const u = e.blueprint.slice();
        return (
          (u[0] = r),
          (u[2] = 140 | s),
          fe(u),
          (u[3] = u[15] = t),
          (u[8] = n),
          (u[10] = o || (t && t[10])),
          (u[11] = a || (t && t[11])),
          (u[12] = l || (t && t[12]) || null),
          (u[9] = c || (t && t[9]) || null),
          (u[6] = i),
          (u[16] = 2 == e.type ? t[16] : u),
          u
        );
      }
      function Ws(t, e, n, s, r) {
        const i = e + Dt,
          o =
            t.data[i] ||
            (function (t, e, n, s, r) {
              const i = we(),
                o = Se(),
                a = (t.data[e] = (function (t, e, n, s, r, i) {
                  return {
                    type: n,
                    index: s,
                    injectorIndex: e ? e.injectorIndex : -1,
                    directiveStart: -1,
                    directiveEnd: -1,
                    directiveStylingLast: -1,
                    propertyBindings: null,
                    flags: 0,
                    providerIndexes: 0,
                    tagName: r,
                    attrs: i,
                    mergedAttrs: null,
                    localNames: null,
                    initialInputs: void 0,
                    inputs: null,
                    outputs: null,
                    tViews: null,
                    next: null,
                    projectionNext: null,
                    child: null,
                    parent: e,
                    projection: null,
                    styles: null,
                    stylesWithoutHost: null,
                    residualStyles: void 0,
                    classes: null,
                    classesWithoutHost: null,
                    residualClasses: void 0,
                    classBindings: 0,
                    styleBindings: 0,
                  };
                })(0, o ? i : i && i.parent, n, e, s, r));
              return (
                null === t.firstChild && (t.firstChild = a),
                null !== i &&
                  (o && null == i.child && null !== a.parent
                    ? (i.child = a)
                    : o || (i.next = a)),
                a
              );
            })(t, i, n, s, r);
        return Ce(o, !0), o;
      }
      function Gs(t, e, n) {
        Ne(e);
        try {
          const s = t.viewQuery;
          null !== s && Er(1, s, n);
          const r = t.template;
          null !== r && Ys(t, e, r, 1, n),
            t.firstCreatePass && (t.firstCreatePass = !1),
            t.staticContentQueries && qs(t, e),
            t.staticViewQueries && Er(2, t.viewQuery, n);
          const i = t.components;
          null !== i &&
            (function (t, e) {
              for (let n = 0; n < e.length; n++) yr(t, e[n]);
            })(e, i);
        } catch (s) {
          throw (t.firstCreatePass && (t.incompleteFirstPass = !0), s);
        } finally {
          (e[2] &= -5), He();
        }
      }
      function Qs(t, e, n, s) {
        const r = e[2];
        if (256 == (256 & r)) return;
        Ne(e);
        const i = Oe();
        try {
          fe(e),
            (ge.lFrame.bindingIndex = t.bindingStartIndex),
            null !== n && Ys(t, e, n, 2, s);
          const o = 3 == (3 & r);
          if (!i)
            if (o) {
              const n = t.preOrderCheckHooks;
              null !== n && $e(e, n, null);
            } else {
              const n = t.preOrderHooks;
              null !== n && Ke(e, n, 0, null), We(e, 0);
            }
          if (
            ((function (t) {
              for (let e = Ps(t); null !== e; e = Ds(e)) {
                if (!e[2]) continue;
                const t = e[9];
                for (let e = 0; e < t.length; e++) {
                  const n = t[e],
                    s = n[3];
                  0 == (1024 & n[2]) && me(s, 1), (n[2] |= 1024);
                }
              }
            })(e),
            (function (t) {
              for (let e = Ps(t); null !== e; e = Ds(e))
                for (let t = Nt; t < e.length; t++) {
                  const n = e[t],
                    s = n[1];
                  de(n) && Qs(s, n, s.template, n[8]);
                }
            })(e),
            null !== t.contentQueries && qs(t, e),
            !i)
          )
            if (o) {
              const n = t.contentCheckHooks;
              null !== n && $e(e, n);
            } else {
              const n = t.contentHooks;
              null !== n && Ke(e, n, 1), We(e, 1);
            }
          !(function (t, e) {
            try {
              const n = t.expandoInstructions;
              if (null !== n) {
                let s = t.expandoStartIndex,
                  r = -1,
                  i = -1;
                for (let t = 0; t < n.length; t++) {
                  const o = n[t];
                  "number" == typeof o
                    ? o <= 0
                      ? ((i = 0 - o), ze(i), (s += 9 + n[++t]), (r = s))
                      : (s += o)
                    : (null !== o && (Ae(s, r), o(2, e[r])), r++);
                }
              }
            } finally {
              ze(-1);
            }
          })(t, e);
          const a = t.components;
          null !== a &&
            (function (t, e) {
              for (let n = 0; n < e.length; n++) br(t, e[n]);
            })(e, a);
          const l = t.viewQuery;
          if ((null !== l && Er(2, l, s), !i))
            if (o) {
              const n = t.viewCheckHooks;
              null !== n && $e(e, n);
            } else {
              const n = t.viewHooks;
              null !== n && Ke(e, n, 2), We(e, 2);
            }
          !0 === t.firstUpdatePass && (t.firstUpdatePass = !1),
            i || (e[2] &= -73),
            1024 & e[2] && ((e[2] &= -1025), me(e[3], -1));
        } finally {
          He();
        }
      }
      function Zs(t, e, n, s) {
        const r = e[10],
          i = !Oe(),
          o = he(e);
        try {
          i && !o && r.begin && r.begin(), o && Gs(t, e, s), Qs(t, e, n, s);
        } finally {
          i && !o && r.end && r.end();
        }
      }
      function Ys(t, e, n, s, r) {
        const i = Ue();
        try {
          ze(-1), 2 & s && e.length > Dt && Ms(t, e, 0, Oe()), n(s, r);
        } finally {
          ze(i);
        }
      }
      function Xs(t, e, n) {
        _e() &&
          ((function (t, e, n, s) {
            const r = n.directiveStart,
              i = n.directiveEnd;
            t.firstCreatePass || un(n, e), bs(s, e);
            const o = n.initialInputs;
            for (let a = r; a < i; a++) {
              const s = t.data[a],
                i = Ut(s);
              i && fr(e, n, s);
              const l = yn(e, t, a, n);
              bs(l, e),
                null !== o && mr(0, a - r, l, s, 0, o),
                i && (ce(n.index, e)[8] = l);
            }
          })(t, e, n, oe(n, e)),
          128 == (128 & n.flags) &&
            (function (t, e, n) {
              const s = n.directiveStart,
                r = n.directiveEnd,
                i = t.expandoInstructions,
                o = t.firstCreatePass,
                a = n.index - Dt,
                l = ge.lFrame.currentDirectiveIndex;
              try {
                ze(a);
                for (let n = s; n < r; n++) {
                  const s = t.data[n],
                    r = e[n];
                  Ie(n),
                    null !== s.hostBindings ||
                    0 !== s.hostVars ||
                    null !== s.hostAttrs
                      ? lr(s, r)
                      : o && i.push(null);
                }
              } finally {
                ze(-1), Ie(l);
              }
            })(t, e, n));
      }
      function Js(t, e, n = oe) {
        const s = e.localNames;
        if (null !== s) {
          let r = e.index + 1;
          for (let i = 0; i < s.length; i += 2) {
            const o = s[i + 1],
              a = -1 === o ? n(e, t) : t[o];
            t[r++] = a;
          }
        }
      }
      function tr(t) {
        const e = t.tView;
        return null === e || e.incompleteFirstPass
          ? (t.tView = er(
              1,
              null,
              t.template,
              t.decls,
              t.vars,
              t.directiveDefs,
              t.pipeDefs,
              t.viewQuery,
              t.schemas,
              t.consts
            ))
          : e;
      }
      function er(t, e, n, s, r, i, o, a, l, c) {
        const u = Dt + s,
          h = u + r,
          d = (function (t, e) {
            const n = [];
            for (let s = 0; s < e; s++) n.push(s < t ? null : Is);
            return n;
          })(u, h),
          p = "function" == typeof c ? c() : c;
        return (d[1] = {
          type: t,
          blueprint: d,
          template: n,
          queries: null,
          viewQuery: a,
          declTNode: e,
          data: d.slice().fill(null, u),
          bindingStartIndex: u,
          expandoStartIndex: h,
          expandoInstructions: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof i ? i() : i,
          pipeRegistry: "function" == typeof o ? o() : o,
          firstChild: null,
          schemas: l,
          consts: p,
          incompleteFirstPass: !1,
        });
      }
      function nr(t, e, n, s) {
        const r = xr(e);
        r.push(n),
          t.firstCreatePass &&
            (function (t) {
              return t.cleanup || (t.cleanup = []);
            })(t).push(s, r.length - 1);
      }
      function sr(t, e, n) {
        for (let s in t)
          if (t.hasOwnProperty(s)) {
            const r = t[s];
            (n = null === n ? {} : n).hasOwnProperty(s)
              ? n[s].push(e, r)
              : (n[s] = [e, r]);
          }
        return n;
      }
      function rr(t, e, n, s, r, i, o, a) {
        const l = oe(e, n);
        let c,
          u = e.inputs;
        var h;
        !a && null != u && (c = u[s])
          ? (Tr(t, n, c, s, r),
            Vt(e) &&
              (function (t, e) {
                const n = ce(e, t);
                16 & n[2] || (n[2] |= 64);
              })(n, e.index))
          : 2 === e.type &&
            ((s =
              "class" === (h = s)
                ? "className"
                : "for" === h
                ? "htmlFor"
                : "formaction" === h
                ? "formAction"
                : "innerHtml" === h
                ? "innerHTML"
                : "readonly" === h
                ? "readOnly"
                : "tabindex" === h
                ? "tabIndex"
                : h),
            (r = null != o ? o(r, e.tagName || "", s) : r),
            ne(i)
              ? i.setProperty(l, s, r)
              : tn(s) || (l.setProperty ? l.setProperty(s, r) : (l[s] = r)));
      }
      function ir(t, e, n, s) {
        let r = !1;
        if (_e()) {
          const i = (function (t, e, n) {
              const s = t.directiveRegistry;
              let r = null;
              if (s)
                for (let i = 0; i < s.length; i++) {
                  const o = s[i];
                  ks(n, o.selectors, !1) &&
                    (r || (r = []),
                    fn(un(n, e), t, o.type),
                    Ut(o) ? (ur(t, n), r.unshift(o)) : r.push(o));
                }
              return r;
            })(t, e, n),
            o = null === s ? null : { "": -1 };
          if (null !== i) {
            let s = 0;
            (r = !0), dr(n, t.data.length, i.length);
            for (let t = 0; t < i.length; t++) {
              const e = i[t];
              e.providersResolver && e.providersResolver(e);
            }
            cr(t, n, i.length);
            let a = !1,
              l = !1;
            for (let r = 0; r < i.length; r++) {
              const c = i[r];
              (n.mergedAttrs = en(n.mergedAttrs, c.hostAttrs)),
                pr(t, e, c),
                hr(t.data.length - 1, c, o),
                null !== c.contentQueries && (n.flags |= 8),
                (null === c.hostBindings &&
                  null === c.hostAttrs &&
                  0 === c.hostVars) ||
                  (n.flags |= 128);
              const u = c.type.prototype;
              !a &&
                (u.ngOnChanges || u.ngOnInit || u.ngDoCheck) &&
                ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index - Dt),
                (a = !0)),
                l ||
                  (!u.ngOnChanges && !u.ngDoCheck) ||
                  ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(
                    n.index - Dt
                  ),
                  (l = !0)),
                or(t, c),
                (s += c.hostVars);
            }
            !(function (t, e) {
              const n = e.directiveEnd,
                s = t.data,
                r = e.attrs,
                i = [];
              let o = null,
                a = null;
              for (let l = e.directiveStart; l < n; l++) {
                const t = s[l],
                  n = t.inputs,
                  c = null === r || Cs(e) ? null : gr(n, r);
                i.push(c), (o = sr(n, l, o)), (a = sr(t.outputs, l, a));
              }
              null !== o &&
                (o.hasOwnProperty("class") && (e.flags |= 16),
                o.hasOwnProperty("style") && (e.flags |= 32)),
                (e.initialInputs = i),
                (e.inputs = o),
                (e.outputs = a);
            })(t, n),
              ar(t, e, s);
          }
          o &&
            (function (t, e, n) {
              if (e) {
                const s = (t.localNames = []);
                for (let t = 0; t < e.length; t += 2) {
                  const r = n[e[t + 1]];
                  if (null == r)
                    throw new Error(`Export of name '${e[t + 1]}' not found!`);
                  s.push(e[t], r);
                }
              }
            })(n, s, o);
        }
        return (n.mergedAttrs = en(n.mergedAttrs, n.attrs)), r;
      }
      function or(t, e) {
        const n = t.expandoInstructions;
        n.push(e.hostBindings), 0 !== e.hostVars && n.push(e.hostVars);
      }
      function ar(t, e, n) {
        for (let s = 0; s < n; s++)
          e.push(Is), t.blueprint.push(Is), t.data.push(null);
      }
      function lr(t, e) {
        null !== t.hostBindings && t.hostBindings(1, e);
      }
      function cr(t, e, n) {
        const s = Dt - e.index,
          r = t.data.length - (1048575 & e.providerIndexes);
        (t.expandoInstructions || (t.expandoInstructions = [])).push(s, r, n);
      }
      function ur(t, e) {
        (e.flags |= 2), (t.components || (t.components = [])).push(e.index);
      }
      function hr(t, e, n) {
        if (n) {
          if (e.exportAs)
            for (let s = 0; s < e.exportAs.length; s++) n[e.exportAs[s]] = t;
          Ut(e) && (n[""] = t);
        }
      }
      function dr(t, e, n) {
        (t.flags |= 1),
          (t.directiveStart = e),
          (t.directiveEnd = e + n),
          (t.providerIndexes = e);
      }
      function pr(t, e, n) {
        t.data.push(n);
        const s = n.factory || (n.factory = jt(n.type)),
          r = new Ye(s, Ut(n), null);
        t.blueprint.push(r), e.push(r);
      }
      function fr(t, e, n) {
        const s = oe(e, t),
          r = tr(n),
          i = t[10],
          o = vr(
            t,
            Ks(
              t,
              r,
              null,
              n.onPush ? 64 : 16,
              s,
              e,
              i,
              i.createRenderer(s, n),
              null,
              null
            )
          );
        t[e.index] = o;
      }
      function mr(t, e, n, s, r, i) {
        const o = i[e];
        if (null !== o) {
          const t = s.setInput;
          for (let e = 0; e < o.length; ) {
            const r = o[e++],
              i = o[e++],
              a = o[e++];
            null !== t ? s.setInput(n, a, r, i) : (n[i] = a);
          }
        }
      }
      function gr(t, e) {
        let n = null,
          s = 0;
        for (; s < e.length; ) {
          const r = e[s];
          if (0 !== r)
            if (5 !== r) {
              if ("number" == typeof r) break;
              t.hasOwnProperty(r) &&
                (null === n && (n = []), n.push(r, t[r], e[s + 1])),
                (s += 2);
            } else s += 2;
          else s += 4;
        }
        return n;
      }
      function _r(t, e, n, s) {
        return new Array(t, !0, !1, e, null, 0, s, n, null, null);
      }
      function br(t, e) {
        const n = ce(e, t);
        if (de(n)) {
          const t = n[1];
          80 & n[2]
            ? Qs(t, n, t.template, n[8])
            : n[5] > 0 &&
              (function t(e) {
                for (let s = Ps(e); null !== s; s = Ds(s))
                  for (let e = Nt; e < s.length; e++) {
                    const n = s[e];
                    if (1024 & n[2]) {
                      const t = n[1];
                      Qs(t, n, t.template, n[8]);
                    } else n[5] > 0 && t(n);
                  }
                const n = e[1].components;
                if (null !== n)
                  for (let s = 0; s < n.length; s++) {
                    const r = ce(n[s], e);
                    de(r) && r[5] > 0 && t(r);
                  }
              })(n);
        }
      }
      function yr(t, e) {
        const n = ce(e, t),
          s = n[1];
        !(function (t, e) {
          for (let n = e.length; n < t.blueprint.length; n++)
            e.push(t.blueprint[n]);
        })(s, n),
          Gs(s, n, n[8]);
      }
      function vr(t, e) {
        return t[13] ? (t[14][4] = e) : (t[13] = e), (t[14] = e), e;
      }
      function wr(t) {
        for (; t; ) {
          t[2] |= 64;
          const e = js(t);
          if (zt(t) && !e) return t;
          t = e;
        }
        return null;
      }
      function Cr(t, e, n) {
        const s = e[10];
        s.begin && s.begin();
        try {
          Qs(t, e, t.template, n);
        } catch (r) {
          throw (kr(e, r), r);
        } finally {
          s.end && s.end();
        }
      }
      function Sr(t) {
        !(function (t) {
          for (let e = 0; e < t.components.length; e++) {
            const n = t.components[e],
              s = ue(n),
              r = s[1];
            Zs(r, s, r.template, n);
          }
        })(t[8]);
      }
      function Er(t, e, n) {
        Pe(0), e(t, n);
      }
      const Or = (() => Promise.resolve(null))();
      function xr(t) {
        return t[7] || (t[7] = []);
      }
      function kr(t, e) {
        const n = t[9],
          s = n ? n.get(Tn, null) : null;
        s && s.handleError(e);
      }
      function Tr(t, e, n, s, r) {
        for (let i = 0; i < n.length; ) {
          const o = n[i++],
            a = n[i++],
            l = e[o],
            c = t.data[o];
          null !== c.setInput ? c.setInput(l, r, s, a) : (l[a] = r);
        }
      }
      function Rr(t, e, n, s, r) {
        if (null != s) {
          let i,
            o = !1;
          Mt(s) ? (i = s) : Lt(s) && ((o = !0), (s = s[0]));
          const a = re(s);
          0 === t && null !== n
            ? null == r
              ? Lr(e, n, a)
              : Nr(e, n, a, r || null)
            : 1 === t && null !== n
            ? Nr(e, n, a, r || null)
            : 2 === t
            ? (function (t, e, n) {
                const s = Fr(t, e);
                s &&
                  (function (t, e, n, s) {
                    ne(t) ? t.removeChild(e, n, s) : e.removeChild(n);
                  })(t, s, e, n);
              })(e, a, o)
            : 3 === t && e.destroyNode(a),
            null != i &&
              (function (t, e, n, s, r) {
                const i = n[7];
                i !== re(n) && Rr(e, t, s, i, r);
                for (let o = Nt; o < n.length; o++) {
                  const r = n[o];
                  zr(r[1], r, t, e, s, i);
                }
              })(e, t, i, n, r);
        }
      }
      function Ar(t, e) {
        const n = t[9],
          s = n.indexOf(e),
          r = e[3];
        1024 & e[2] && ((e[2] &= -1025), me(r, -1)), n.splice(s, 1);
      }
      function Ir(t, e) {
        if (t.length <= Nt) return;
        const n = Nt + e,
          s = t[n];
        if (s) {
          const i = s[17];
          null !== i && i !== t && Ar(i, s), e > 0 && (t[n - 1][4] = s[4]);
          const o = dt(t, Nt + e);
          zr(s[1], (r = s), r[11], 2, null, null), (r[0] = null), (r[6] = null);
          const a = o[19];
          null !== a && a.detachView(o[1]),
            (s[3] = null),
            (s[4] = null),
            (s[2] &= -129);
        }
        var r;
        return s;
      }
      function jr(t, e) {
        if (!(256 & e[2])) {
          const n = e[11];
          ne(n) && n.destroyNode && zr(t, e, n, 3, null, null),
            (function (t) {
              let e = t[13];
              if (!e) return Pr(t[1], t);
              for (; e; ) {
                let n = null;
                if (Lt(e)) n = e[13];
                else {
                  const t = e[10];
                  t && (n = t);
                }
                if (!n) {
                  for (; e && !e[4] && e !== t; )
                    Lt(e) && Pr(e[1], e), (e = e[3]);
                  null === e && (e = t), Lt(e) && Pr(e[1], e), (n = e && e[4]);
                }
                e = n;
              }
            })(e);
        }
      }
      function Pr(t, e) {
        if (!(256 & e[2])) {
          (e[2] &= -129),
            (e[2] |= 256),
            (function (t, e) {
              let n;
              if (null != t && null != (n = t.destroyHooks))
                for (let s = 0; s < n.length; s += 2) {
                  const t = e[n[s]];
                  if (!(t instanceof Ye)) {
                    const e = n[s + 1];
                    if (Array.isArray(e))
                      for (let n = 0; n < e.length; n += 2)
                        e[n + 1].call(t[e[n]]);
                    else e.call(t);
                  }
                }
            })(t, e),
            (function (t, e) {
              const n = t.cleanup;
              if (null !== n) {
                const t = e[7];
                for (let s = 0; s < n.length - 1; s += 2)
                  if ("string" == typeof n[s]) {
                    const r = n[s + 1],
                      i = "function" == typeof r ? r(e) : re(e[r]),
                      o = t[n[s + 2]],
                      a = n[s + 3];
                    "boolean" == typeof a
                      ? i.removeEventListener(n[s], o, a)
                      : a >= 0
                      ? t[a]()
                      : t[-a].unsubscribe(),
                      (s += 2);
                  } else n[s].call(t[n[s + 1]]);
                e[7] = null;
              }
            })(t, e),
            1 === e[1].type && ne(e[11]) && e[11].destroy();
          const n = e[17];
          if (null !== n && Mt(e[3])) {
            n !== e[3] && Ar(n, e);
            const s = e[19];
            null !== s && s.detachView(t);
          }
        }
      }
      function Dr(t, e, n) {
        let s = e.parent;
        for (; null != s && (3 === s.type || 4 === s.type); )
          s = (e = s).parent;
        if (null === s) return n[0];
        if (e && 4 === e.type && 4 & e.flags) return oe(e, n).parentNode;
        if (2 & s.flags) {
          const e = t.data,
            n = e[e[s.index].directiveStart].encapsulation;
          if (n !== bt.ShadowDom && n !== bt.Native) return null;
        }
        return oe(s, n);
      }
      function Nr(t, e, n, s) {
        ne(t) ? t.insertBefore(e, n, s) : e.insertBefore(n, s, !0);
      }
      function Lr(t, e, n) {
        ne(t) ? t.appendChild(e, n) : e.appendChild(n);
      }
      function Mr(t, e, n, s) {
        null !== s ? Nr(t, e, n, s) : Lr(t, e, n);
      }
      function Fr(t, e) {
        return ne(t) ? t.parentNode(e) : e.parentNode;
      }
      function Vr(t, e) {
        return 3 === t.type || 4 === t.type ? oe(t, e) : null;
      }
      function Hr(t, e, n, s) {
        const r = Dr(t, s, e);
        if (null != r) {
          const t = e[11],
            i = Vr(s.parent || e[6], e);
          if (Array.isArray(n))
            for (let e = 0; e < n.length; e++) Mr(t, r, n[e], i);
          else Mr(t, r, n, i);
        }
      }
      function Ur(t, e, n, s, r, i, o) {
        for (; null != n; ) {
          const a = s[n.index],
            l = n.type;
          o && 0 === e && (a && bs(re(a), s), (n.flags |= 4)),
            64 != (64 & n.flags) &&
              (3 === l || 4 === l
                ? (Ur(t, e, n.child, s, r, i, !1), Rr(e, t, r, a, i))
                : 1 === l
                ? Br(t, e, s, n, r, i)
                : Rr(e, t, r, a, i)),
            (n = o ? n.projectionNext : n.next);
        }
      }
      function zr(t, e, n, s, r, i) {
        Ur(n, s, t.firstChild, e, r, i, !1);
      }
      function Br(t, e, n, s, r, i) {
        const o = n[16],
          a = o[6].projection[s.projection];
        if (Array.isArray(a))
          for (let l = 0; l < a.length; l++) Rr(e, t, r, a[l], i);
        else Ur(t, e, a, o[3], r, i, !0);
      }
      function qr(t, e, n) {
        ne(t) ? t.setAttribute(e, "style", n) : (e.style.cssText = n);
      }
      function $r(t, e, n) {
        ne(t)
          ? "" === n
            ? t.removeAttribute(e, "class")
            : t.setAttribute(e, "class", n)
          : (e.className = n);
      }
      class Kr {
        constructor(t, e) {
          (this._lView = t),
            (this._cdRefInjectingView = e),
            (this._appRef = null),
            (this._viewContainerRef = null);
        }
        get rootNodes() {
          const t = this._lView,
            e = t[1];
          return (function t(e, n, s, r, i = !1) {
            for (; null !== s; ) {
              const o = n[s.index];
              if ((null !== o && r.push(re(o)), Mt(o)))
                for (let e = Nt; e < o.length; e++) {
                  const n = o[e],
                    s = n[1].firstChild;
                  null !== s && t(n[1], n, s, r);
                }
              const a = s.type;
              if (3 === a || 4 === a) t(e, n, s.child, r);
              else if (1 === a) {
                const e = n[16],
                  i = e[6].projection[s.projection];
                if (Array.isArray(i)) r.push(...i);
                else {
                  const n = js(e);
                  t(n[1], n, i, r, !0);
                }
              }
              s = i ? s.projectionNext : s.next;
            }
            return r;
          })(e, t, e.firstChild, []);
        }
        get context() {
          return this._lView[8];
        }
        get destroyed() {
          return 256 == (256 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._viewContainerRef) {
            const t = this._viewContainerRef.indexOf(this);
            t > -1 && this._viewContainerRef.detach(t),
              (this._viewContainerRef = null);
          }
          jr(this._lView[1], this._lView);
        }
        onDestroy(t) {
          nr(this._lView[1], this._lView, null, t);
        }
        markForCheck() {
          wr(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -129;
        }
        reattach() {
          this._lView[2] |= 128;
        }
        detectChanges() {
          Cr(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {
          !(function (t, e, n) {
            xe(!0);
            try {
              Cr(t, e, n);
            } finally {
              xe(!1);
            }
          })(this._lView[1], this._lView, this.context);
        }
        attachToViewContainerRef(t) {
          if (this._appRef)
            throw new Error(
              "This view is already attached directly to the ApplicationRef!"
            );
          this._viewContainerRef = t;
        }
        detachFromAppRef() {
          var t;
          (this._appRef = null),
            zr(this._lView[1], (t = this._lView), t[11], 2, null, null);
        }
        attachToAppRef(t) {
          if (this._viewContainerRef)
            throw new Error(
              "This view is already attached to a ViewContainer!"
            );
          this._appRef = t;
        }
      }
      class Wr extends Kr {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          Sr(this._view);
        }
        checkNoChanges() {
          !(function (t) {
            xe(!0);
            try {
              Sr(t);
            } finally {
              xe(!1);
            }
          })(this._view);
        }
        get context() {
          return null;
        }
      }
      let Gr, Qr, Zr;
      function Yr(t, e, n) {
        return Gr || (Gr = class extends t {}), new Gr(oe(e, n));
      }
      function Xr(t, e, n, s) {
        return (
          Qr ||
            (Qr = class extends t {
              constructor(t, e, n) {
                super(),
                  (this._declarationView = t),
                  (this._declarationTContainer = e),
                  (this.elementRef = n);
              }
              createEmbeddedView(t) {
                const e = this._declarationTContainer.tViews,
                  n = Ks(
                    this._declarationView,
                    e,
                    t,
                    16,
                    null,
                    e.declTNode,
                    null,
                    null,
                    null,
                    null
                  );
                n[17] = this._declarationView[
                  this._declarationTContainer.index
                ];
                const s = this._declarationView[19];
                return (
                  null !== s && (n[19] = s.createEmbeddedView(e)),
                  Gs(e, n, t),
                  new Kr(n)
                );
              }
            }),
          0 === n.type ? new Qr(s, n, Yr(e, n, s)) : null
        );
      }
      function Jr(t, e, n, s) {
        let r;
        Zr ||
          (Zr = class extends t {
            constructor(t, e, n) {
              super(),
                (this._lContainer = t),
                (this._hostTNode = e),
                (this._hostView = n);
            }
            get element() {
              return Yr(e, this._hostTNode, this._hostView);
            }
            get injector() {
              return new Cn(this._hostTNode, this._hostView);
            }
            get parentInjector() {
              const t = pn(this._hostTNode, this._hostView);
              if (sn(t)) {
                const e = on(t, this._hostView),
                  n = rn(t);
                return new Cn(e[1].data[n + 8], e);
              }
              return new Cn(null, this._hostView);
            }
            clear() {
              for (; this.length > 0; ) this.remove(this.length - 1);
            }
            get(t) {
              return (
                (null !== this._lContainer[8] && this._lContainer[8][t]) || null
              );
            }
            get length() {
              return this._lContainer.length - Nt;
            }
            createEmbeddedView(t, e, n) {
              const s = t.createEmbeddedView(e || {});
              return this.insert(s, n), s;
            }
            createComponent(t, e, n, s, r) {
              const i = n || this.parentInjector;
              if (!r && null == t.ngModule && i) {
                const t = i.get(lt, null);
                t && (r = t);
              }
              const o = t.create(i, s, void 0, r);
              return this.insert(o.hostView, e), o;
            }
            insert(t, e) {
              const n = t._lView,
                s = n[1];
              if (t.destroyed)
                throw new Error(
                  "Cannot insert a destroyed View in a ViewContainer!"
                );
              if ((this.allocateContainerIfNeeded(), Mt(n[3]))) {
                const e = this.indexOf(t);
                if (-1 !== e) this.detach(e);
                else {
                  const e = n[3],
                    s = new Zr(e, e[6], e[3]);
                  s.detach(s.indexOf(t));
                }
              }
              const r = this._adjustIndex(e),
                i = this._lContainer;
              !(function (t, e, n, s) {
                const r = Nt + s,
                  i = n.length;
                s > 0 && (n[r - 1][4] = e),
                  s < i - Nt
                    ? ((e[4] = n[r]), ht(n, Nt + s, e))
                    : (n.push(e), (e[4] = null)),
                  (e[3] = n);
                const o = e[17];
                null !== o &&
                  n !== o &&
                  (function (t, e) {
                    const n = t[9];
                    e[16] !== e[3][3][16] && (t[2] = !0),
                      null === n ? (t[9] = [e]) : n.push(e);
                  })(o, e);
                const a = e[19];
                null !== a && a.insertView(t), (e[2] |= 128);
              })(s, n, i, r);
              const o = (function t(e, n) {
                  const s = Nt + e + 1;
                  if (s < n.length) {
                    const e = n[s],
                      r = e[1].firstChild;
                    if (null !== r)
                      return (function e(n, s) {
                        if (null !== s) {
                          const r = s.type;
                          if (2 === r) return oe(s, n);
                          if (0 === r) return t(-1, n[s.index]);
                          if (3 === r || 4 === r) {
                            const r = s.child;
                            if (null !== r) return e(n, r);
                            {
                              const e = n[s.index];
                              return Mt(e) ? t(-1, e) : re(e);
                            }
                          }
                          {
                            const t = n[16],
                              r = t[6],
                              i = js(t),
                              o = r.projection[s.projection];
                            return null != o ? e(i, o) : e(n, s.next);
                          }
                        }
                        return null;
                      })(e, r);
                  }
                  return n[7];
                })(r, i),
                a = n[11],
                l = Fr(a, i[7]);
              return (
                null !== l &&
                  (function (t, e, n, s, r, i) {
                    (s[0] = r), (s[6] = e), zr(t, s, n, 1, r, i);
                  })(s, i[6], a, n, l, o),
                t.attachToViewContainerRef(this),
                ht(i[8], r, t),
                t
              );
            }
            move(t, e) {
              if (t.destroyed)
                throw new Error(
                  "Cannot move a destroyed View in a ViewContainer!"
                );
              return this.insert(t, e);
            }
            indexOf(t) {
              const e = this._lContainer[8];
              return null !== e ? e.indexOf(t) : -1;
            }
            remove(t) {
              this.allocateContainerIfNeeded();
              const e = this._adjustIndex(t, -1),
                n = Ir(this._lContainer, e);
              n && (dt(this._lContainer[8], e), jr(n[1], n));
            }
            detach(t) {
              this.allocateContainerIfNeeded();
              const e = this._adjustIndex(t, -1),
                n = Ir(this._lContainer, e);
              return n && null != dt(this._lContainer[8], e) ? new Kr(n) : null;
            }
            _adjustIndex(t, e = 0) {
              return null == t ? this.length + e : t;
            }
            allocateContainerIfNeeded() {
              null === this._lContainer[8] && (this._lContainer[8] = []);
            }
          });
        const i = s[n.index];
        if (Mt(i)) r = i;
        else {
          let t;
          if (3 === n.type) t = re(i);
          else if (((t = s[11].createComment("")), zt(s))) {
            const e = s[11],
              r = oe(n, s);
            Nr(
              e,
              Fr(e, r),
              t,
              (function (t, e) {
                return ne(t) ? t.nextSibling(e) : e.nextSibling;
              })(e, r)
            );
          } else Hr(s[1], s, t, n);
          (s[n.index] = r = _r(i, s, t, n)), vr(s, r);
        }
        return new Zr(r, n, s);
      }
      function ti(t = !1) {
        return (function (t, e, n) {
          if (!n && Vt(t)) {
            const n = ce(t.index, e);
            return new Kr(n, n);
          }
          return 2 === t.type || 0 === t.type || 3 === t.type || 4 === t.type
            ? new Kr(e[16], e)
            : null;
        })(we(), be(), t);
      }
      let ei = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => ni()), t;
      })();
      const ni = ti,
        si = Function,
        ri = new K("Set Injector scope."),
        ii = {},
        oi = {},
        ai = [];
      let li = void 0;
      function ci() {
        return void 0 === li && (li = new at()), li;
      }
      function ui(t, e = null, n = null, s) {
        return new hi(t, n, e || ci(), s);
      }
      class hi {
        constructor(t, e, n, s = null) {
          (this.parent = n),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1);
          const r = [];
          e && ut(e, (n) => this.processProvider(n, t, e)),
            ut([t], (t) => this.processInjectorType(t, [], r)),
            this.records.set(W, fi(void 0, this));
          const i = this.records.get(ri);
          (this.scope = null != i ? i.value : null),
            (this.source = s || ("object" == typeof t ? null : T(t)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            this.onDestroy.forEach((t) => t.ngOnDestroy());
          } finally {
            this.records.clear(),
              this.onDestroy.clear(),
              this.injectorDefTypes.clear();
          }
        }
        get(t, e = G, n = m.Default) {
          this.assertNotDestroyed();
          const s = tt(this);
          try {
            if (!(n & m.SkipSelf)) {
              let e = this.records.get(t);
              if (void 0 === e) {
                const n =
                  ("function" == typeof (r = t) ||
                    ("object" == typeof r && r instanceof K)) &&
                  v(t);
                (e = n && this.injectableDefInScope(n) ? fi(di(t), ii) : null),
                  this.records.set(t, e);
              }
              if (null != e) return this.hydrate(t, e);
            }
            return (n & m.Self ? ci() : this.parent).get(
              t,
              (e = n & m.Optional && e === G ? null : e)
            );
          } catch (i) {
            if ("NullInjectorError" === i.name) {
              if (
                ((i.ngTempTokenPath = i.ngTempTokenPath || []).unshift(T(t)), s)
              )
                throw i;
              return (function (t, e, n, s) {
                const r = t.ngTempTokenPath;
                throw (
                  (e[Z] && r.unshift(e[Z]),
                  (t.message = (function (t, e, n, s = null) {
                    t =
                      t && "\n" === t.charAt(0) && "\u0275" == t.charAt(1)
                        ? t.substr(2)
                        : t;
                    let r = T(e);
                    if (Array.isArray(e)) r = e.map(T).join(" -> ");
                    else if ("object" == typeof e) {
                      let t = [];
                      for (let n in e)
                        if (e.hasOwnProperty(n)) {
                          let s = e[n];
                          t.push(
                            n +
                              ":" +
                              ("string" == typeof s ? JSON.stringify(s) : T(s))
                          );
                        }
                      r = `{${t.join(", ")}}`;
                    }
                    return `${n}${s ? "(" + s + ")" : ""}[${r}]: ${t.replace(
                      Q,
                      "\n  "
                    )}`;
                  })("\n" + t.message, r, n, s)),
                  (t.ngTokenPath = r),
                  (t.ngTempTokenPath = null),
                  t)
                );
              })(i, t, "R3InjectorError", this.source);
            }
            throw i;
          } finally {
            tt(s);
          }
          var r;
        }
        _resolveInjectorDefTypes() {
          this.injectorDefTypes.forEach((t) => this.get(t));
        }
        toString() {
          const t = [];
          return (
            this.records.forEach((e, n) => t.push(T(n))),
            `R3Injector[${t.join(", ")}]`
          );
        }
        assertNotDestroyed() {
          if (this._destroyed)
            throw new Error("Injector has already been destroyed.");
        }
        processInjectorType(t, e, n) {
          if (!(t = j(t))) return !1;
          let s = C(t);
          const r = (null == s && t.ngModule) || void 0,
            i = void 0 === r ? t : r,
            o = -1 !== n.indexOf(i);
          if ((void 0 !== r && (s = C(r)), null == s)) return !1;
          if (null != s.imports && !o) {
            let t;
            n.push(i);
            try {
              ut(s.imports, (s) => {
                this.processInjectorType(s, e, n) &&
                  (void 0 === t && (t = []), t.push(s));
              });
            } finally {
            }
            if (void 0 !== t)
              for (let e = 0; e < t.length; e++) {
                const { ngModule: n, providers: s } = t[e];
                ut(s, (t) => this.processProvider(t, n, s || ai));
              }
          }
          this.injectorDefTypes.add(i), this.records.set(i, fi(s.factory, ii));
          const a = s.providers;
          if (null != a && !o) {
            const e = t;
            ut(a, (t) => this.processProvider(t, e, a));
          }
          return void 0 !== r && void 0 !== t.providers;
        }
        processProvider(t, e, n) {
          let s = gi((t = j(t))) ? t : j(t && t.provide);
          const r = (function (t, e, n) {
            return mi(t) ? fi(void 0, t.useValue) : fi(pi(t), ii);
          })(t);
          if (gi(t) || !0 !== t.multi) this.records.get(s);
          else {
            let e = this.records.get(s);
            e ||
              ((e = fi(void 0, ii, !0)),
              (e.factory = () => ot(e.multi)),
              this.records.set(s, e)),
              (s = t),
              e.multi.push(t);
          }
          this.records.set(s, r);
        }
        hydrate(t, e) {
          var n;
          return (
            e.value === ii && ((e.value = oi), (e.value = e.factory())),
            "object" == typeof e.value &&
              e.value &&
              null !== (n = e.value) &&
              "object" == typeof n &&
              "function" == typeof n.ngOnDestroy &&
              this.onDestroy.add(e.value),
            e.value
          );
        }
        injectableDefInScope(t) {
          return (
            !!t.providedIn &&
            ("string" == typeof t.providedIn
              ? "any" === t.providedIn || t.providedIn === this.scope
              : this.injectorDefTypes.has(t.providedIn))
          );
        }
      }
      function di(t) {
        const e = v(t),
          n = null !== e ? e.factory : jt(t);
        if (null !== n) return n;
        const s = C(t);
        if (null !== s) return s.factory;
        if (t instanceof K)
          throw new Error(`Token ${T(t)} is missing a \u0275prov definition.`);
        if (t instanceof Function)
          return (function (t) {
            const e = t.length;
            if (e > 0) {
              const n = pt(e, "?");
              throw new Error(
                `Can't resolve all parameters for ${T(t)}: (${n.join(", ")}).`
              );
            }
            const n = (function (t) {
              const e = t && (t[S] || t[x] || (t[O] && t[O]()));
              if (e) {
                const n = (function (t) {
                  if (t.hasOwnProperty("name")) return t.name;
                  const e = ("" + t).match(/^function\s*([^\s(]+)/);
                  return null === e ? "" : e[1];
                })(t);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`
                  ),
                  e
                );
              }
              return null;
            })(t);
            return null !== n ? () => n.factory(t) : () => new t();
          })(t);
        throw new Error("unreachable");
      }
      function pi(t, e, n) {
        let s = void 0;
        if (gi(t)) {
          const e = j(t);
          return jt(e) || di(e);
        }
        if (mi(t)) s = () => j(t.useValue);
        else if ((r = t) && r.useFactory)
          s = () => t.useFactory(...ot(t.deps || []));
        else if (
          (function (t) {
            return !(!t || !t.useExisting);
          })(t)
        )
          s = () => st(j(t.useExisting));
        else {
          const e = j(t && (t.useClass || t.provide));
          if (
            !(function (t) {
              return !!t.deps;
            })(t)
          )
            return jt(e) || di(e);
          s = () => new e(...ot(t.deps));
        }
        var r;
        return s;
      }
      function fi(t, e, n = !1) {
        return { factory: t, value: e, multi: n ? [] : void 0 };
      }
      function mi(t) {
        return null !== t && "object" == typeof t && Y in t;
      }
      function gi(t) {
        return "function" == typeof t;
      }
      const _i = function (t, e, n) {
        return (function (t, e = null, n = null, s) {
          const r = ui(t, e, n, s);
          return r._resolveInjectorDefTypes(), r;
        })({ name: n }, e, t, n);
      };
      let bi = (() => {
        class t {
          static create(t, e) {
            return Array.isArray(t)
              ? _i(t, e, "")
              : _i(t.providers, t.parent, t.name || "");
          }
        }
        return (
          (t.THROW_IF_NOT_FOUND = G),
          (t.NULL = new at()),
          (t.ɵprov = b({ token: t, providedIn: "any", factory: () => st(W) })),
          (t.__NG_ELEMENT_ID__ = -1),
          t
        );
      })();
      const yi = new K("AnalyzeForEntryComponents");
      function vi(t, e, n) {
        let s = n ? t.styles : null,
          r = n ? t.classes : null,
          i = 0;
        if (null !== e)
          for (let o = 0; o < e.length; o++) {
            const t = e[o];
            "number" == typeof t
              ? (i = t)
              : 1 == i
              ? (r = R(r, t))
              : 2 == i && (s = R(s, t + ": " + e[++o] + ";"));
          }
        n ? (t.styles = s) : (t.stylesWithoutHost = s),
          n ? (t.classes = r) : (t.classesWithoutHost = r);
      }
      function wi(t, e) {
        const n = ue(t)[1],
          s = n.data.length - 1;
        qe(n, { directiveStart: s, directiveEnd: s + 1 });
      }
      function Ci(t) {
        let e = Object.getPrototypeOf(t.type.prototype).constructor,
          n = !0;
        const s = [t];
        for (; e; ) {
          let r = void 0;
          if (Ut(t)) r = e.ɵcmp || e.ɵdir;
          else {
            if (e.ɵcmp) throw new Error("Directives cannot inherit Components");
            r = e.ɵdir;
          }
          if (r) {
            if (n) {
              s.push(r);
              const e = t;
              (e.inputs = Si(t.inputs)),
                (e.declaredInputs = Si(t.declaredInputs)),
                (e.outputs = Si(t.outputs));
              const n = r.hostBindings;
              n && xi(t, n);
              const i = r.viewQuery,
                o = r.contentQueries;
              if (
                (i && Ei(t, i),
                o && Oi(t, o),
                _(t.inputs, r.inputs),
                _(t.declaredInputs, r.declaredInputs),
                _(t.outputs, r.outputs),
                Ut(r) && r.data.animation)
              ) {
                const e = t.data;
                e.animation = (e.animation || []).concat(r.data.animation);
              }
            }
            const e = r.features;
            if (e)
              for (let s = 0; s < e.length; s++) {
                const r = e[s];
                r && r.ngInherit && r(t), r === Ci && (n = !1);
              }
          }
          e = Object.getPrototypeOf(e);
        }
        !(function (t) {
          let e = 0,
            n = null;
          for (let s = t.length - 1; s >= 0; s--) {
            const r = t[s];
            (r.hostVars = e += r.hostVars),
              (r.hostAttrs = en(r.hostAttrs, (n = en(n, r.hostAttrs))));
          }
        })(s);
      }
      function Si(t) {
        return t === yt ? {} : t === vt ? [] : t;
      }
      function Ei(t, e) {
        const n = t.viewQuery;
        t.viewQuery = n
          ? (t, s) => {
              e(t, s), n(t, s);
            }
          : e;
      }
      function Oi(t, e) {
        const n = t.contentQueries;
        t.contentQueries = n
          ? (t, s, r) => {
              e(t, s, r), n(t, s, r);
            }
          : e;
      }
      function xi(t, e) {
        const n = t.hostBindings;
        t.hostBindings = n
          ? (t, s) => {
              e(t, s), n(t, s);
            }
          : e;
      }
      let ki = null;
      function Ti() {
        if (!ki) {
          const t = F.Symbol;
          if (t && t.iterator) ki = t.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let e = 0; e < t.length; ++e) {
              const n = t[e];
              "entries" !== n &&
                "size" !== n &&
                Map.prototype[n] === Map.prototype.entries &&
                (ki = n);
            }
          }
        }
        return ki;
      }
      class Ri {
        constructor(t) {
          this.wrapped = t;
        }
        static wrap(t) {
          return new Ri(t);
        }
        static unwrap(t) {
          return Ri.isWrapped(t) ? t.wrapped : t;
        }
        static isWrapped(t) {
          return t instanceof Ri;
        }
      }
      function Ai(t) {
        return (
          !!Ii(t) && (Array.isArray(t) || (!(t instanceof Map) && Ti() in t))
        );
      }
      function Ii(t) {
        return null !== t && ("function" == typeof t || "object" == typeof t);
      }
      function ji(t, e, n) {
        return (t[e] = n);
      }
      function Pi(t, e, n) {
        return !Object.is(t[e], n) && ((t[e] = n), !0);
      }
      function Di(t, e, n, s) {
        const r = be();
        return (
          Pi(r, Te(), e) &&
            (ye(),
            (function (t, e, n, s, r, i) {
              const o = oe(t, e),
                a = e[11];
              if (null == s)
                ne(a) ? a.removeAttribute(o, n, i) : o.removeAttribute(n);
              else {
                const e = null == r ? Bt(s) : r(s, t.tagName || "", n);
                ne(a)
                  ? a.setAttribute(o, n, e, i)
                  : i
                  ? o.setAttributeNS(i, n, e)
                  : o.setAttribute(n, e);
              }
            })(Be(), r, t, e, n, s)),
          Di
        );
      }
      function Ni(t, e, n, s) {
        return Pi(t, Te(), n) ? e + Bt(n) + s : Is;
      }
      function Li(t, e, n, s, r, i, o, a) {
        const l = be(),
          c = ye(),
          u = t + Dt,
          h = c.firstCreatePass
            ? (function (t, e, n, s, r, i, o, a, l) {
                const c = e.consts,
                  u = Ws(e, t, 0, o || null, pe(c, a));
                ir(e, n, u, pe(c, l)), qe(e, u);
                const h = (u.tViews = er(
                  2,
                  u,
                  s,
                  r,
                  i,
                  e.directiveRegistry,
                  e.pipeRegistry,
                  null,
                  e.schemas,
                  c
                ));
                return (
                  null !== e.queries &&
                    (e.queries.template(e, u),
                    (h.queries = e.queries.embeddedTView(u))),
                  u
                );
              })(t, c, l, e, n, s, r, i, o)
            : c.data[u];
        Ce(h, !1);
        const d = l[11].createComment("");
        Hr(c, l, d, h),
          bs(d, l),
          vr(l, (l[u] = _r(d, l, d, h))),
          Ht(h) && Xs(c, l, h),
          null != o && Js(l, h, a);
      }
      function Mi(t) {
        return le(ge.lFrame.contextLView, t);
      }
      function Fi(t, e = m.Default) {
        const n = be();
        return null === n ? st(t, e) : mn(we(), n, j(t), e);
      }
      function Vi(t) {
        return (function (t, e) {
          if ("class" === e) return t.classes;
          if ("style" === e) return t.styles;
          const n = t.attrs;
          if (n) {
            const t = n.length;
            let s = 0;
            for (; s < t; ) {
              const r = n[s];
              if (Je(r)) break;
              if (0 === r) s += 2;
              else if ("number" == typeof r)
                for (s++; s < t && "string" == typeof n[s]; ) s++;
              else {
                if (r === e) return n[s + 1];
                s += 2;
              }
            }
          }
          return null;
        })(we(), t);
      }
      function Hi(t, e, n) {
        const s = be();
        return Pi(s, Te(), e) && rr(ye(), Be(), s, t, e, s[11], n, !1), Hi;
      }
      function Ui(t, e, n, s, r) {
        const i = r ? "class" : "style";
        Tr(t, n, e.inputs[i], i, s);
      }
      function zi(t, e, n, s) {
        const r = be(),
          i = ye(),
          o = Dt + t,
          a = r[11],
          l = (r[o] = $s(e, a, ge.lFrame.currentNamespace)),
          c = i.firstCreatePass
            ? (function (t, e, n, s, r, i, o) {
                const a = e.consts,
                  l = Ws(e, t, 2, r, pe(a, i));
                return (
                  ir(e, n, l, pe(a, o)),
                  null !== l.attrs && vi(l, l.attrs, !1),
                  null !== l.mergedAttrs && vi(l, l.mergedAttrs, !0),
                  null !== e.queries && e.queries.elementStart(e, l),
                  l
                );
              })(t, i, r, 0, e, n, s)
            : i.data[o];
        Ce(c, !0);
        const u = c.mergedAttrs;
        null !== u && Xe(a, l, u);
        const h = c.classes;
        null !== h && $r(a, l, h);
        const d = c.styles;
        null !== d && qr(a, l, d),
          Hr(i, r, l, c),
          0 === ge.lFrame.elementDepthCount && bs(l, r),
          ge.lFrame.elementDepthCount++,
          Ht(c) &&
            (Xs(i, r, c),
            (function (t, e, n) {
              if (Ft(e)) {
                const s = e.directiveEnd;
                for (let r = e.directiveStart; r < s; r++) {
                  const e = t.data[r];
                  e.contentQueries && e.contentQueries(1, n[r], r);
                }
              }
            })(i, c, r)),
          null !== s && Js(r, c);
      }
      function Bi() {
        let t = we();
        Se() ? Ee() : ((t = t.parent), Ce(t, !1));
        const e = t;
        ge.lFrame.elementDepthCount--;
        const n = ye();
        n.firstCreatePass && (qe(n, t), Ft(t) && n.queries.elementEnd(t)),
          null != e.classesWithoutHost &&
            (function (t) {
              return 0 != (16 & t.flags);
            })(e) &&
            Ui(n, e, be(), e.classesWithoutHost, !0),
          null != e.stylesWithoutHost &&
            (function (t) {
              return 0 != (32 & t.flags);
            })(e) &&
            Ui(n, e, be(), e.stylesWithoutHost, !1);
      }
      function qi(t, e, n, s) {
        zi(t, e, n, s), Bi();
      }
      function $i() {
        return be();
      }
      function Ki(t) {
        return !!t && "function" == typeof t.then;
      }
      function Wi(t) {
        return !!t && "function" == typeof t.subscribe;
      }
      function Gi(t, e, n = !1, s) {
        const r = be(),
          i = ye(),
          o = we();
        return (
          (function (t, e, n, s, r, i, o = !1, a) {
            const l = Ht(s),
              c = t.firstCreatePass && (t.cleanup || (t.cleanup = [])),
              u = xr(e);
            let h = !0;
            if (2 === s.type) {
              const d = oe(s, e),
                p = a ? a(d) : yt,
                f = p.target || d,
                m = u.length,
                g = a ? (t) => a(re(t[s.index])).target : s.index;
              if (ne(n)) {
                let o = null;
                if (
                  (!a &&
                    l &&
                    (o = (function (t, e, n, s) {
                      const r = t.cleanup;
                      if (null != r)
                        for (let i = 0; i < r.length - 1; i += 2) {
                          const t = r[i];
                          if (t === n && r[i + 1] === s) {
                            const t = e[7],
                              n = r[i + 2];
                            return t.length > n ? t[n] : null;
                          }
                          "string" == typeof t && (i += 2);
                        }
                      return null;
                    })(t, e, r, s.index)),
                  null !== o)
                )
                  ((o.__ngLastListenerFn__ || o).__ngNextListenerFn__ = i),
                    (o.__ngLastListenerFn__ = i),
                    (h = !1);
                else {
                  i = Zi(s, e, i, !1);
                  const t = n.listen(p.name || f, r, i);
                  u.push(i, t), c && c.push(r, g, m, m + 1);
                }
              } else
                (i = Zi(s, e, i, !0)),
                  f.addEventListener(r, i, o),
                  u.push(i),
                  c && c.push(r, g, m, o);
            }
            const d = s.outputs;
            let p;
            if (h && null !== d && (p = d[r])) {
              const t = p.length;
              if (t)
                for (let n = 0; n < t; n += 2) {
                  const t = e[p[n]][p[n + 1]].subscribe(i),
                    o = u.length;
                  u.push(i, t), c && c.push(r, s.index, o, -(o + 1));
                }
            }
          })(i, r, r[11], o, t, e, n, s),
          Gi
        );
      }
      function Qi(t, e, n) {
        try {
          return !1 !== e(n);
        } catch (s) {
          return kr(t, s), !1;
        }
      }
      function Zi(t, e, n, s) {
        return function r(i) {
          if (i === Function) return n;
          const o = 2 & t.flags ? ce(t.index, e) : e;
          0 == (32 & e[2]) && wr(o);
          let a = Qi(e, n, i),
            l = r.__ngNextListenerFn__;
          for (; l; ) (a = Qi(e, l, i) && a), (l = l.__ngNextListenerFn__);
          return s && !1 === a && (i.preventDefault(), (i.returnValue = !1)), a;
        };
      }
      function Yi(t = 1) {
        return (function (t) {
          return (ge.lFrame.contextLView = (function (t, e) {
            for (; t > 0; ) (e = e[15]), t--;
            return e;
          })(t, ge.lFrame.contextLView))[8];
        })(t);
      }
      function Xi(t, e) {
        let n = null;
        const s = (function (t) {
          const e = t.attrs;
          if (null != e) {
            const t = e.indexOf(5);
            if (0 == (1 & t)) return e[t + 1];
          }
          return null;
        })(t);
        for (let r = 0; r < e.length; r++) {
          const i = e[r];
          if ("*" !== i) {
            if (null === s ? ks(t, i, !0) : Ts(s, i)) return r;
          } else n = r;
        }
        return n;
      }
      function Ji(t) {
        const e = be()[16][6];
        if (!e.projection) {
          const n = (e.projection = pt(t ? t.length : 1, null)),
            s = n.slice();
          let r = e.child;
          for (; null !== r; ) {
            const e = t ? Xi(r, t) : 0;
            null !== e &&
              (s[e] ? (s[e].projectionNext = r) : (n[e] = r), (s[e] = r)),
              (r = r.next);
          }
        }
      }
      function to(t, e = 0, n) {
        const s = be(),
          r = ye(),
          i = Ws(r, t, 1, null, n || null);
        null === i.projection && (i.projection = e),
          Ee(),
          (function (t, e, n) {
            Br(e[11], 0, e, n, Dr(t, n, e), Vr(n.parent || e[6], e));
          })(r, s, i);
      }
      function eo(t, e, n) {
        return no(t, "", e, "", n), eo;
      }
      function no(t, e, n, s, r) {
        const i = be(),
          o = Ni(i, e, n, s);
        return o !== Is && rr(ye(), Be(), i, t, o, i[11], r, !1), no;
      }
      const so = [];
      function ro(t, e, n, s, r) {
        const i = t[n + 1],
          o = null === e;
        let a = s ? Vs(i) : Us(i),
          l = !1;
        for (; 0 !== a && (!1 === l || o); ) {
          const n = t[a + 1];
          io(t[a], e) && ((l = !0), (t[a + 1] = s ? Bs(n) : Hs(n))),
            (a = s ? Vs(n) : Us(n));
        }
        l && (t[n + 1] = s ? Hs(i) : Bs(i));
      }
      function io(t, e) {
        return (
          null === t ||
          null == e ||
          (Array.isArray(t) ? t[1] : t) === e ||
          (!(!Array.isArray(t) || "string" != typeof e) && gt(t, e) >= 0)
        );
      }
      const oo = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
      function ao(t) {
        return t.substring(oo.key, oo.keyEnd);
      }
      function lo(t, e) {
        const n = oo.textEnd;
        return n === e
          ? -1
          : ((e = oo.keyEnd = (function (t, e, n) {
              for (; e < n && t.charCodeAt(e) > 32; ) e++;
              return e;
            })(t, (oo.key = e), n)),
            co(t, e, n));
      }
      function co(t, e, n) {
        for (; e < n && t.charCodeAt(e) <= 32; ) e++;
        return e;
      }
      function uo(t, e, n) {
        return fo(t, e, n, !1), uo;
      }
      function ho(t, e) {
        return fo(t, e, null, !0), ho;
      }
      function po(t, e) {
        for (
          let n = (function (t) {
            return (
              (function (t) {
                (oo.key = 0),
                  (oo.keyEnd = 0),
                  (oo.value = 0),
                  (oo.valueEnd = 0),
                  (oo.textEnd = t.length);
              })(t),
              lo(t, co(t, 0, oo.textEnd))
            );
          })(e);
          n >= 0;
          n = lo(e, n)
        )
          ft(t, ao(e), !0);
      }
      function fo(t, e, n, s) {
        const r = be(),
          i = ye(),
          o = Re(2);
        i.firstUpdatePass && go(i, t, o, s),
          e !== Is &&
            Pi(r, o, e) &&
            yo(
              i,
              i.data[Ue() + Dt],
              r,
              r[11],
              t,
              (r[o + 1] = (function (t, e) {
                return (
                  null == t ||
                    ("string" == typeof e
                      ? (t += e)
                      : "object" == typeof t && (t = T(Nn(t)))),
                  t
                );
              })(e, n)),
              s,
              o
            );
      }
      function mo(t, e) {
        return e >= t.expandoStartIndex;
      }
      function go(t, e, n, s) {
        const r = t.data;
        if (null === r[n + 1]) {
          const i = r[Ue() + Dt],
            o = mo(t, n);
          Co(i, s) && null === e && !o && (e = !1),
            (e = (function (t, e, n, s) {
              const r = (function (t) {
                const e = ge.lFrame.currentDirectiveIndex;
                return -1 === e ? null : t[e];
              })(t);
              let i = s ? e.residualClasses : e.residualStyles;
              if (null === r)
                0 === (s ? e.classBindings : e.styleBindings) &&
                  ((n = bo((n = _o(null, t, e, n, s)), e.attrs, s)),
                  (i = null));
              else {
                const o = e.directiveStylingLast;
                if (-1 === o || t[o] !== r)
                  if (((n = _o(r, t, e, n, s)), null === i)) {
                    let n = (function (t, e, n) {
                      const s = n ? e.classBindings : e.styleBindings;
                      if (0 !== Us(s)) return t[Vs(s)];
                    })(t, e, s);
                    void 0 !== n &&
                      Array.isArray(n) &&
                      ((n = _o(null, t, e, n[1], s)),
                      (n = bo(n, e.attrs, s)),
                      (function (t, e, n, s) {
                        t[Vs(n ? e.classBindings : e.styleBindings)] = s;
                      })(t, e, s, n));
                  } else
                    i = (function (t, e, n) {
                      let s = void 0;
                      const r = e.directiveEnd;
                      for (let i = 1 + e.directiveStylingLast; i < r; i++)
                        s = bo(s, t[i].hostAttrs, n);
                      return bo(s, e.attrs, n);
                    })(t, e, s);
              }
              return (
                void 0 !== i &&
                  (s ? (e.residualClasses = i) : (e.residualStyles = i)),
                n
              );
            })(r, i, e, s)),
            (function (t, e, n, s, r, i) {
              let o = i ? e.classBindings : e.styleBindings,
                a = Vs(o),
                l = Us(o);
              t[s] = n;
              let c,
                u = !1;
              if (Array.isArray(n)) {
                const t = n;
                (c = t[1]), (null === c || gt(t, c) > 0) && (u = !0);
              } else c = n;
              if (r)
                if (0 !== l) {
                  const e = Vs(t[a + 1]);
                  (t[s + 1] = Fs(e, a)),
                    0 !== e && (t[e + 1] = zs(t[e + 1], s)),
                    (t[a + 1] = (131071 & t[a + 1]) | (s << 17));
                } else
                  (t[s + 1] = Fs(a, 0)),
                    0 !== a && (t[a + 1] = zs(t[a + 1], s)),
                    (a = s);
              else
                (t[s + 1] = Fs(l, 0)),
                  0 === a ? (a = s) : (t[l + 1] = zs(t[l + 1], s)),
                  (l = s);
              u && (t[s + 1] = Hs(t[s + 1])),
                ro(t, c, s, !0),
                ro(t, c, s, !1),
                (function (t, e, n, s, r) {
                  const i = r ? t.residualClasses : t.residualStyles;
                  null != i &&
                    "string" == typeof e &&
                    gt(i, e) >= 0 &&
                    (n[s + 1] = Bs(n[s + 1]));
                })(e, c, t, s, i),
                (o = Fs(a, l)),
                i ? (e.classBindings = o) : (e.styleBindings = o);
            })(r, i, e, n, o, s);
        }
      }
      function _o(t, e, n, s, r) {
        let i = null;
        const o = n.directiveEnd;
        let a = n.directiveStylingLast;
        for (
          -1 === a ? (a = n.directiveStart) : a++;
          a < o && ((i = e[a]), (s = bo(s, i.hostAttrs, r)), i !== t);

        )
          a++;
        return null !== t && (n.directiveStylingLast = a), s;
      }
      function bo(t, e, n) {
        const s = n ? 1 : 2;
        let r = -1;
        if (null !== e)
          for (let i = 0; i < e.length; i++) {
            const o = e[i];
            "number" == typeof o
              ? (r = o)
              : r === s &&
                (Array.isArray(t) || (t = void 0 === t ? [] : ["", t]),
                ft(t, o, !!n || e[++i]));
          }
        return void 0 === t ? null : t;
      }
      function yo(t, e, n, s, r, i, o, a) {
        if (2 !== e.type) return;
        const l = t.data,
          c = l[a + 1];
        wo(1 == (1 & c) ? vo(l, e, n, r, Us(c), o) : void 0) ||
          (wo(i) || (2 == (2 & c) && (i = vo(l, null, n, r, a, o))),
          (function (t, e, n, s, r) {
            const i = ne(t);
            if (e)
              r
                ? i
                  ? t.addClass(n, s)
                  : n.classList.add(s)
                : i
                ? t.removeClass(n, s)
                : n.classList.remove(s);
            else {
              const e = -1 == s.indexOf("-") ? void 0 : 2;
              null == r
                ? i
                  ? t.removeStyle(n, s, e)
                  : n.style.removeProperty(s)
                : i
                ? t.setStyle(n, s, r, e)
                : n.style.setProperty(s, r);
            }
          })(s, o, ie(Ue(), n), r, i));
      }
      function vo(t, e, n, s, r, i) {
        const o = null === e;
        let a = void 0;
        for (; r > 0; ) {
          const e = t[r],
            i = Array.isArray(e),
            l = i ? e[1] : e,
            c = null === l;
          let u = n[r + 1];
          u === Is && (u = c ? so : void 0);
          let h = c ? mt(u, s) : l === s ? u : void 0;
          if ((i && !wo(h) && (h = mt(e, s)), wo(h) && ((a = h), o))) return a;
          const d = t[r + 1];
          r = o ? Vs(d) : Us(d);
        }
        if (null !== e) {
          let t = i ? e.residualClasses : e.residualStyles;
          null != t && (a = mt(t, s));
        }
        return a;
      }
      function wo(t) {
        return void 0 !== t;
      }
      function Co(t, e) {
        return 0 != (t.flags & (e ? 16 : 32));
      }
      function So(t, e = "") {
        const n = be(),
          s = ye(),
          r = t + Dt,
          i = s.firstCreatePass ? Ws(s, t, 2, null, null) : s.data[r],
          o = (n[r] = (function (t, e) {
            return ne(e) ? e.createText(t) : e.createTextNode(t);
          })(e, n[11]));
        Hr(s, n, o, i), Ce(i, !1);
      }
      function Eo(t) {
        return Oo("", t, ""), Eo;
      }
      function Oo(t, e, n) {
        const s = be(),
          r = Ni(s, t, e, n);
        return (
          r !== Is &&
            (function (t, e, n) {
              const s = ie(e, t),
                r = t[11];
              ne(r) ? r.setValue(s, n) : (s.textContent = n);
            })(s, Ue(), r),
          Oo
        );
      }
      function xo(t, e, n) {
        !(function (t, e, n, s) {
          const r = ye(),
            i = Re(2);
          r.firstUpdatePass && go(r, null, i, s);
          const o = be();
          if (n !== Is && Pi(o, i, n)) {
            const a = r.data[Ue() + Dt];
            if (Co(a, s) && !mo(r, i)) {
              let t = a.classesWithoutHost;
              null !== t && (n = R(t, n || "")), Ui(r, a, o, n, s);
            } else
              !(function (t, e, n, s, r, i, o, a) {
                r === Is && (r = so);
                let l = 0,
                  c = 0,
                  u = 0 < r.length ? r[0] : null,
                  h = 0 < i.length ? i[0] : null;
                for (; null !== u || null !== h; ) {
                  const o = l < r.length ? r[l + 1] : void 0,
                    d = c < i.length ? i[c + 1] : void 0;
                  let p = null,
                    f = void 0;
                  u === h
                    ? ((l += 2), (c += 2), o !== d && ((p = h), (f = d)))
                    : null === h || (null !== u && u < h)
                    ? ((l += 2), (p = u))
                    : ((c += 2), (p = h), (f = d)),
                    null !== p && yo(t, e, n, s, p, f, true, a),
                    (u = l < r.length ? r[l] : null),
                    (h = c < i.length ? i[c] : null);
                }
              })(
                r,
                a,
                o,
                o[11],
                o[i + 1],
                (o[i + 1] = (function (t, e, n) {
                  if (null == n || "" === n) return so;
                  const s = [],
                    r = Nn(n);
                  if (Array.isArray(r))
                    for (let i = 0; i < r.length; i++) t(s, r[i], !0);
                  else if ("object" == typeof r)
                    for (const i in r) r.hasOwnProperty(i) && t(s, i, r[i]);
                  else "string" == typeof r && e(s, r);
                  return s;
                })(t, e, n)),
                0,
                i
              );
          }
        })(ft, po, Ni(be(), t, e, n), !0);
      }
      function ko(t, e, n) {
        const s = be();
        return Pi(s, Te(), e) && rr(ye(), Be(), s, t, e, s[11], n, !0), ko;
      }
      const To = void 0;
      var Ro = [
        "en",
        [["a", "p"], ["AM", "PM"], To],
        [["AM", "PM"], To, To],
        [
          ["S", "M", "T", "W", "T", "F", "S"],
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        ],
        To,
        [
          ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        ],
        To,
        [
          ["B", "A"],
          ["BC", "AD"],
          ["Before Christ", "Anno Domini"],
        ],
        0,
        [6, 0],
        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
        ["{1}, {0}", To, "{1} 'at' {0}", To],
        [
          ".",
          ",",
          ";",
          "%",
          "+",
          "-",
          "E",
          "\xd7",
          "\u2030",
          "\u221e",
          "NaN",
          ":",
        ],
        ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
        "USD",
        "$",
        "US Dollar",
        {},
        "ltr",
        function (t) {
          let e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return 1 === e && 0 === n ? 1 : 5;
        },
      ];
      let Ao = {};
      function Io(t, e, n) {
        "string" != typeof e && ((n = e), (e = t[Lo.LocaleId])),
          (e = e.toLowerCase().replace(/_/g, "-")),
          (Ao[e] = t),
          n && (Ao[e][Lo.ExtraData] = n);
      }
      function jo(t) {
        const e = (function (t) {
          return t.toLowerCase().replace(/_/g, "-");
        })(t);
        let n = No(e);
        if (n) return n;
        const s = e.split("-")[0];
        if (((n = No(s)), n)) return n;
        if ("en" === s) return Ro;
        throw new Error(`Missing locale data for the locale "${t}".`);
      }
      function Po(t) {
        return jo(t)[Lo.CurrencyCode] || null;
      }
      function Do(t) {
        return jo(t)[Lo.PluralCase];
      }
      function No(t) {
        return (
          t in Ao ||
            (Ao[t] =
              F.ng &&
              F.ng.common &&
              F.ng.common.locales &&
              F.ng.common.locales[t]),
          Ao[t]
        );
      }
      var Lo = (function (t) {
        return (
          (t[(t.LocaleId = 0)] = "LocaleId"),
          (t[(t.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
          (t[(t.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
          (t[(t.DaysFormat = 3)] = "DaysFormat"),
          (t[(t.DaysStandalone = 4)] = "DaysStandalone"),
          (t[(t.MonthsFormat = 5)] = "MonthsFormat"),
          (t[(t.MonthsStandalone = 6)] = "MonthsStandalone"),
          (t[(t.Eras = 7)] = "Eras"),
          (t[(t.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
          (t[(t.WeekendRange = 9)] = "WeekendRange"),
          (t[(t.DateFormat = 10)] = "DateFormat"),
          (t[(t.TimeFormat = 11)] = "TimeFormat"),
          (t[(t.DateTimeFormat = 12)] = "DateTimeFormat"),
          (t[(t.NumberSymbols = 13)] = "NumberSymbols"),
          (t[(t.NumberFormats = 14)] = "NumberFormats"),
          (t[(t.CurrencyCode = 15)] = "CurrencyCode"),
          (t[(t.CurrencySymbol = 16)] = "CurrencySymbol"),
          (t[(t.CurrencyName = 17)] = "CurrencyName"),
          (t[(t.Currencies = 18)] = "Currencies"),
          (t[(t.Directionality = 19)] = "Directionality"),
          (t[(t.PluralCase = 20)] = "PluralCase"),
          (t[(t.ExtraData = 21)] = "ExtraData"),
          t
        );
      })({});
      const Mo = "en-US";
      let Fo = Mo;
      function Vo(t) {
        var e, n;
        (n = "Expected localeId to be defined"),
          null == (e = t) &&
            (function (t, e, n, s) {
              throw new Error(
                "ASSERTION ERROR: " + t + ` [Expected=> null != ${e} <=Actual]`
              );
            })(n, e),
          "string" == typeof t && (Fo = t.toLowerCase().replace(/_/g, "-"));
      }
      function Ho(t, e, n, s, r) {
        if (((t = j(t)), Array.isArray(t)))
          for (let i = 0; i < t.length; i++) Ho(t[i], e, n, s, r);
        else {
          const i = ye(),
            o = be();
          let a = gi(t) ? t : j(t.provide),
            l = pi(t);
          const c = we(),
            u = 1048575 & c.providerIndexes,
            h = c.directiveStart,
            d = c.providerIndexes >> 20;
          if (gi(t) || !t.multi) {
            const s = new Ye(l, r, Fi),
              p = Bo(a, e, r ? u : u + d, h);
            -1 === p
              ? (fn(un(c, o), i, a),
                Uo(i, t, e.length),
                e.push(a),
                c.directiveStart++,
                c.directiveEnd++,
                r && (c.providerIndexes += 1048576),
                n.push(s),
                o.push(s))
              : ((n[p] = s), (o[p] = s));
          } else {
            const p = Bo(a, e, u + d, h),
              f = Bo(a, e, u, u + d),
              m = p >= 0 && n[p],
              g = f >= 0 && n[f];
            if ((r && !g) || (!r && !m)) {
              fn(un(c, o), i, a);
              const u = (function (t, e, n, s, r) {
                const i = new Ye(t, n, Fi);
                return (
                  (i.multi = []),
                  (i.index = e),
                  (i.componentProviders = 0),
                  zo(i, r, s && !n),
                  i
                );
              })(r ? $o : qo, n.length, r, s, l);
              !r && g && (n[f].providerFactory = u),
                Uo(i, t, e.length, 0),
                e.push(a),
                c.directiveStart++,
                c.directiveEnd++,
                r && (c.providerIndexes += 1048576),
                n.push(u),
                o.push(u);
            } else Uo(i, t, p > -1 ? p : f, zo(n[r ? f : p], l, !r && s));
            !r && s && g && n[f].componentProviders++;
          }
        }
      }
      function Uo(t, e, n, s) {
        const r = gi(e);
        if (r || e.useClass) {
          const i = (e.useClass || e).prototype.ngOnDestroy;
          if (i) {
            const o = t.destroyHooks || (t.destroyHooks = []);
            if (!r && e.multi) {
              const t = o.indexOf(n);
              -1 === t ? o.push(n, [s, i]) : o[t + 1].push(s, i);
            } else o.push(n, i);
          }
        }
      }
      function zo(t, e, n) {
        return n && t.componentProviders++, t.multi.push(e) - 1;
      }
      function Bo(t, e, n, s) {
        for (let r = n; r < s; r++) if (e[r] === t) return r;
        return -1;
      }
      function qo(t, e, n, s) {
        return Ko(this.multi, []);
      }
      function $o(t, e, n, s) {
        const r = this.multi;
        let i;
        if (this.providerFactory) {
          const t = this.providerFactory.componentProviders,
            e = yn(n, n[1], this.providerFactory.index, s);
          (i = e.slice(0, t)), Ko(r, i);
          for (let n = t; n < e.length; n++) i.push(e[n]);
        } else (i = []), Ko(r, i);
        return i;
      }
      function Ko(t, e) {
        for (let n = 0; n < t.length; n++) e.push((0, t[n])());
        return e;
      }
      function Wo(t, e = []) {
        return (n) => {
          n.providersResolver = (n, s) =>
            (function (t, e, n) {
              const s = ye();
              if (s.firstCreatePass) {
                const r = Ut(t);
                Ho(n, s.data, s.blueprint, r, !0),
                  Ho(e, s.data, s.blueprint, r, !1);
              }
            })(n, s ? s(t) : t, e);
        };
      }
      class Go {}
      class Qo {
        resolveComponentFactory(t) {
          throw (function (t) {
            const e = Error(
              `No component factory found for ${T(
                t
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (e.ngComponent = t), e;
          })(t);
        }
      }
      let Zo = (() => {
          class t {}
          return (t.NULL = new Qo()), t;
        })(),
        Yo = (() => {
          class t {
            constructor(t) {
              this.nativeElement = t;
            }
          }
          return (t.__NG_ELEMENT_ID__ = () => Xo(t)), t;
        })();
      const Xo = function (t) {
        return Yr(t, we(), be());
      };
      class Jo {}
      var ta = (function (t) {
        return (
          (t[(t.Important = 1)] = "Important"),
          (t[(t.DashCase = 2)] = "DashCase"),
          t
        );
      })({});
      let ea = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => na()), t;
      })();
      const na = function () {
        const t = be(),
          e = ce(we().index, t);
        return (function (t) {
          const e = t[11];
          if (ne(e)) return e;
          throw new Error(
            "Cannot inject Renderer2 when the application uses Renderer3!"
          );
        })(Lt(e) ? e : t);
      };
      let sa = (() => {
        class t {}
        return (
          (t.ɵprov = b({ token: t, providedIn: "root", factory: () => null })),
          t
        );
      })();
      class ra {
        constructor(t) {
          (this.full = t),
            (this.major = t.split(".")[0]),
            (this.minor = t.split(".")[1]),
            (this.patch = t.split(".").slice(2).join("."));
        }
      }
      const ia = new ra("10.2.4");
      class oa {
        constructor() {}
        supports(t) {
          return Ai(t);
        }
        create(t) {
          return new la(t);
        }
      }
      const aa = (t, e) => e;
      class la {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || aa);
        }
        forEachItem(t) {
          let e;
          for (e = this._itHead; null !== e; e = e._next) t(e);
        }
        forEachOperation(t) {
          let e = this._itHead,
            n = this._removalsHead,
            s = 0,
            r = null;
          for (; e || n; ) {
            const i = !n || (e && e.currentIndex < da(n, s, r)) ? e : n,
              o = da(i, s, r),
              a = i.currentIndex;
            if (i === n) s--, (n = n._nextRemoved);
            else if (((e = e._next), null == i.previousIndex)) s++;
            else {
              r || (r = []);
              const t = o - s,
                e = a - s;
              if (t != e) {
                for (let n = 0; n < t; n++) {
                  const s = n < r.length ? r[n] : (r[n] = 0),
                    i = s + n;
                  e <= i && i < t && (r[n] = s + 1);
                }
                r[i.previousIndex] = e - t;
              }
            }
            o !== a && t(i, o, a);
          }
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachMovedItem(t) {
          let e;
          for (e = this._movesHead; null !== e; e = e._nextMoved) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        forEachIdentityChange(t) {
          let e;
          for (
            e = this._identityChangesHead;
            null !== e;
            e = e._nextIdentityChange
          )
            t(e);
        }
        diff(t) {
          if ((null == t && (t = []), !Ai(t)))
            throw new Error(
              `Error trying to diff '${T(
                t
              )}'. Only arrays and iterables are allowed`
            );
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e,
            n,
            s,
            r = this._itHead,
            i = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let e = 0; e < this.length; e++)
              (n = t[e]),
                (s = this._trackByFn(e, n)),
                null !== r && Object.is(r.trackById, s)
                  ? (i && (r = this._verifyReinsertion(r, n, s, e)),
                    Object.is(r.item, n) || this._addIdentityChange(r, n))
                  : ((r = this._mismatch(r, n, s, e)), (i = !0)),
                (r = r._next);
          } else
            (e = 0),
              (function (t, e) {
                if (Array.isArray(t))
                  for (let n = 0; n < t.length; n++) e(t[n]);
                else {
                  const n = t[Ti()]();
                  let s;
                  for (; !(s = n.next()).done; ) e(s.value);
                }
              })(t, (t) => {
                (s = this._trackByFn(e, t)),
                  null !== r && Object.is(r.trackById, s)
                    ? (i && (r = this._verifyReinsertion(r, t, s, e)),
                      Object.is(r.item, t) || this._addIdentityChange(r, t))
                    : ((r = this._mismatch(r, t, s, e)), (i = !0)),
                  (r = r._next),
                  e++;
              }),
              (this.length = e);
          return this._truncate(r), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, e, n, s) {
          let r;
          return (
            null === t ? (r = this._itTail) : ((r = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._linkedRecords
                ? null
                : this._linkedRecords.get(n, s))
              ? (Object.is(t.item, e) || this._addIdentityChange(t, e),
                this._moveAfter(t, r, s))
              : null !==
                (t =
                  null === this._unlinkedRecords
                    ? null
                    : this._unlinkedRecords.get(n, null))
              ? (Object.is(t.item, e) || this._addIdentityChange(t, e),
                this._reinsertAfter(t, r, s))
              : (t = this._addAfter(new ca(e, n), r, s)),
            t
          );
        }
        _verifyReinsertion(t, e, n, s) {
          let r =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(n, null);
          return (
            null !== r
              ? (t = this._reinsertAfter(r, t._prev, s))
              : t.currentIndex != s &&
                ((t.currentIndex = s), this._addToMoves(t, s)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const e = t._next;
            this._addToRemovals(this._unlink(t)), (t = e);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, e, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const s = t._prevRemoved,
            r = t._nextRemoved;
          return (
            null === s ? (this._removalsHead = r) : (s._nextRemoved = r),
            null === r ? (this._removalsTail = s) : (r._prevRemoved = s),
            this._insertAfter(t, e, n),
            this._addToMoves(t, n),
            t
          );
        }
        _moveAfter(t, e, n) {
          return (
            this._unlink(t),
            this._insertAfter(t, e, n),
            this._addToMoves(t, n),
            t
          );
        }
        _addAfter(t, e, n) {
          return (
            this._insertAfter(t, e, n),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, e, n) {
          const s = null === e ? this._itHead : e._next;
          return (
            (t._next = s),
            (t._prev = e),
            null === s ? (this._itTail = t) : (s._prev = t),
            null === e ? (this._itHead = t) : (e._next = t),
            null === this._linkedRecords && (this._linkedRecords = new ha()),
            this._linkedRecords.put(t),
            (t.currentIndex = n),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const e = t._prev,
            n = t._next;
          return (
            null === e ? (this._itHead = n) : (e._next = n),
            null === n ? (this._itTail = e) : (n._prev = e),
            t
          );
        }
        _addToMoves(t, e) {
          return (
            t.previousIndex === e ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new ha()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, e) {
          return (
            (t.item = e),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class ca {
        constructor(t, e) {
          (this.item = t),
            (this.trackById = e),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class ua {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, e) {
          let n;
          for (n = this._head; null !== n; n = n._nextDup)
            if (
              (null === e || e <= n.currentIndex) &&
              Object.is(n.trackById, t)
            )
              return n;
          return null;
        }
        remove(t) {
          const e = t._prevDup,
            n = t._nextDup;
          return (
            null === e ? (this._head = n) : (e._nextDup = n),
            null === n ? (this._tail = e) : (n._prevDup = e),
            null === this._head
          );
        }
      }
      class ha {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const e = t.trackById;
          let n = this.map.get(e);
          n || ((n = new ua()), this.map.set(e, n)), n.add(t);
        }
        get(t, e) {
          const n = this.map.get(t);
          return n ? n.get(t, e) : null;
        }
        remove(t) {
          const e = t.trackById;
          return this.map.get(e).remove(t) && this.map.delete(e), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function da(t, e, n) {
        const s = t.previousIndex;
        if (null === s) return s;
        let r = 0;
        return n && s < n.length && (r = n[s]), s + e + r;
      }
      class pa {
        constructor() {}
        supports(t) {
          return t instanceof Map || Ii(t);
        }
        create() {
          return new fa();
        }
      }
      class fa {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let e;
          for (e = this._mapHead; null !== e; e = e._next) t(e);
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachChangedItem(t) {
          let e;
          for (e = this._changesHead; null !== e; e = e._nextChanged) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || Ii(t)))
              throw new Error(
                `Error trying to diff '${T(
                  t
                )}'. Only maps and objects are allowed`
              );
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (t, n) => {
              if (e && e.key === n)
                this._maybeAddToChanges(e, t),
                  (this._appendAfter = e),
                  (e = e._next);
              else {
                const s = this._getOrCreateRecordForKey(n, t);
                e = this._insertBeforeOrAppend(e, s);
              }
            }),
            e)
          ) {
            e._prev && (e._prev._next = null), (this._removalsHead = e);
            for (let t = e; null !== t; t = t._nextRemoved)
              t === this._mapHead && (this._mapHead = null),
                this._records.delete(t.key),
                (t._nextRemoved = t._next),
                (t.previousValue = t.currentValue),
                (t.currentValue = null),
                (t._prev = null),
                (t._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, e) {
          if (t) {
            const n = t._prev;
            return (
              (e._next = t),
              (e._prev = n),
              (t._prev = e),
              n && (n._next = e),
              t === this._mapHead && (this._mapHead = e),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = e), (e._prev = this._appendAfter))
              : (this._mapHead = e),
            (this._appendAfter = e),
            null
          );
        }
        _getOrCreateRecordForKey(t, e) {
          if (this._records.has(t)) {
            const n = this._records.get(t);
            this._maybeAddToChanges(n, e);
            const s = n._prev,
              r = n._next;
            return (
              s && (s._next = r),
              r && (r._prev = s),
              (n._next = null),
              (n._prev = null),
              n
            );
          }
          const n = new ma(t);
          return (
            this._records.set(t, n),
            (n.currentValue = e),
            this._addToAdditions(n),
            n
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, e) {
          Object.is(e, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = e),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, e) {
          t instanceof Map
            ? t.forEach(e)
            : Object.keys(t).forEach((n) => e(t[n], n));
        }
      }
      class ma {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      let ga = (() => {
          class t {
            constructor(t) {
              this.factories = t;
            }
            static create(e, n) {
              if (null != n) {
                const t = n.factories.slice();
                e = e.concat(t);
              }
              return new t(e);
            }
            static extend(e) {
              return {
                provide: t,
                useFactory: (n) => {
                  if (!n)
                    throw new Error(
                      "Cannot extend IterableDiffers without a parent injector"
                    );
                  return t.create(e, n);
                },
                deps: [[t, new f(), new d()]],
              };
            }
            find(t) {
              const e = this.factories.find((e) => e.supports(t));
              if (null != e) return e;
              throw new Error(
                `Cannot find a differ supporting object '${t}' of type '${
                  ((n = t), n.name || typeof n)
                }'`
              );
              var n;
            }
          }
          return (
            (t.ɵprov = b({
              token: t,
              providedIn: "root",
              factory: () => new t([new oa()]),
            })),
            t
          );
        })(),
        _a = (() => {
          class t {
            constructor(t) {
              this.factories = t;
            }
            static create(e, n) {
              if (n) {
                const t = n.factories.slice();
                e = e.concat(t);
              }
              return new t(e);
            }
            static extend(e) {
              return {
                provide: t,
                useFactory: (n) => {
                  if (!n)
                    throw new Error(
                      "Cannot extend KeyValueDiffers without a parent injector"
                    );
                  return t.create(e, n);
                },
                deps: [[t, new f(), new d()]],
              };
            }
            find(t) {
              const e = this.factories.find((e) => e.supports(t));
              if (e) return e;
              throw new Error(`Cannot find a differ supporting object '${t}'`);
            }
          }
          return (
            (t.ɵprov = b({
              token: t,
              providedIn: "root",
              factory: () => new t([new pa()]),
            })),
            t
          );
        })();
      const ba = [new pa()],
        ya = new ga([new oa()]),
        va = new _a(ba);
      let wa = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => Ca(t, Yo)), t;
      })();
      const Ca = function (t, e) {
        return Xr(t, e, we(), be());
      };
      let Sa = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => Ea(t, Yo)), t;
      })();
      const Ea = function (t, e) {
          return Jr(t, e, we(), be());
        },
        Oa = {};
      class xa extends Zo {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const e = It(t);
          return new Ra(e, this.ngModule);
        }
      }
      function ka(t) {
        const e = [];
        for (let n in t)
          t.hasOwnProperty(n) && e.push({ propName: t[n], templateName: n });
        return e;
      }
      const Ta = new K("SCHEDULER_TOKEN", {
        providedIn: "root",
        factory: () => $t,
      });
      class Ra extends Go {
        constructor(t, e) {
          super(),
            (this.componentDef = t),
            (this.ngModule = e),
            (this.componentType = t.type),
            (this.selector = t.selectors.map(As).join(",")),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!e);
        }
        get inputs() {
          return ka(this.componentDef.inputs);
        }
        get outputs() {
          return ka(this.componentDef.outputs);
        }
        create(t, e, n, s) {
          const r = (s = s || this.ngModule)
              ? (function (t, e) {
                  return {
                    get: (n, s, r) => {
                      const i = t.get(n, Oa, r);
                      return i !== Oa || s === Oa ? i : e.get(n, s, r);
                    },
                  };
                })(t, s.injector)
              : t,
            i = r.get(Jo, se),
            o = r.get(sa, null),
            a = i.createRenderer(null, this.componentDef),
            l = this.componentDef.selectors[0][0] || "div",
            c = n
              ? (function (t, e, n) {
                  if (ne(t)) return t.selectRootElement(e, n === bt.ShadowDom);
                  let s = "string" == typeof e ? t.querySelector(e) : e;
                  return (s.textContent = ""), s;
                })(a, n, this.componentDef.encapsulation)
              : $s(
                  l,
                  i.createRenderer(null, this.componentDef),
                  (function (t) {
                    const e = t.toLowerCase();
                    return "svg" === e
                      ? "http://www.w3.org/2000/svg"
                      : "math" === e
                      ? "http://www.w3.org/1998/MathML/"
                      : null;
                  })(l)
                ),
            u = this.componentDef.onPush ? 576 : 528,
            h = {
              components: [],
              scheduler: $t,
              clean: Or,
              playerHandler: null,
              flags: 0,
            },
            d = er(0, null, null, 1, 0, null, null, null, null, null),
            p = Ks(null, d, h, u, null, null, i, a, o, r);
          let f, m;
          Ne(p);
          try {
            const t = (function (t, e, n, s, r, i) {
              const o = n[1];
              n[20] = t;
              const a = Ws(o, 0, 2, null, null),
                l = (a.mergedAttrs = e.hostAttrs);
              null !== l &&
                (vi(a, l, !0),
                null !== t &&
                  (Xe(r, t, l),
                  null !== a.classes && $r(r, t, a.classes),
                  null !== a.styles && qr(r, t, a.styles)));
              const c = s.createRenderer(t, e),
                u = Ks(
                  n,
                  tr(e),
                  null,
                  e.onPush ? 64 : 16,
                  n[20],
                  a,
                  s,
                  c,
                  null,
                  null
                );
              return (
                o.firstCreatePass &&
                  (fn(un(a, n), o, e.type), ur(o, a), dr(a, n.length, 1)),
                vr(n, u),
                (n[20] = u)
              );
            })(c, this.componentDef, p, i, a);
            if (c)
              if (n) Xe(a, c, ["ng-version", ia.full]);
              else {
                const { attrs: t, classes: e } = (function (t) {
                  const e = [],
                    n = [];
                  let s = 1,
                    r = 2;
                  for (; s < t.length; ) {
                    let i = t[s];
                    if ("string" == typeof i)
                      2 === r
                        ? "" !== i && e.push(i, t[++s])
                        : 8 === r && n.push(i);
                    else {
                      if (!Os(r)) break;
                      r = i;
                    }
                    s++;
                  }
                  return { attrs: e, classes: n };
                })(this.componentDef.selectors[0]);
                t && Xe(a, c, t), e && e.length > 0 && $r(a, c, e.join(" "));
              }
            if (((m = ae(d, 0)), void 0 !== e)) {
              const t = (m.projection = []);
              for (let n = 0; n < this.ngContentSelectors.length; n++) {
                const s = e[n];
                t.push(null != s ? Array.from(s) : null);
              }
            }
            (f = (function (t, e, n, s, r) {
              const i = n[1],
                o = (function (t, e, n) {
                  const s = we();
                  t.firstCreatePass &&
                    (n.providersResolver && n.providersResolver(n),
                    cr(t, s, 1),
                    pr(t, e, n));
                  const r = yn(e, t, e.length - 1, s);
                  bs(r, e);
                  const i = oe(s, e);
                  return i && bs(i, e), r;
                })(i, n, e);
              s.components.push(o),
                (t[8] = o),
                r && r.forEach((t) => t(o, e)),
                e.contentQueries && e.contentQueries(1, o, n.length - 1);
              const a = we();
              if (
                i.firstCreatePass &&
                (null !== e.hostBindings || null !== e.hostAttrs)
              ) {
                ze(a.index - Dt);
                const t = n[1];
                or(t, e), ar(t, n, e.hostVars), lr(e, o);
              }
              return o;
            })(t, this.componentDef, p, h, [wi])),
              Gs(d, p, null);
          } finally {
            He();
          }
          return new Aa(this.componentType, f, Yr(Yo, m, p), p, m);
        }
      }
      class Aa extends class {} {
        constructor(t, e, n, s, r) {
          super(),
            (this.location = n),
            (this._rootLView = s),
            (this._tNode = r),
            (this.destroyCbs = []),
            (this.instance = e),
            (this.hostView = this.changeDetectorRef = new Wr(s)),
            (this.componentType = t);
        }
        get injector() {
          return new Cn(this._tNode, this._rootLView);
        }
        destroy() {
          this.destroyCbs &&
            (this.destroyCbs.forEach((t) => t()),
            (this.destroyCbs = null),
            !this.hostView.destroyed && this.hostView.destroy());
        }
        onDestroy(t) {
          this.destroyCbs && this.destroyCbs.push(t);
        }
      }
      const Ia = new Map();
      class ja extends lt {
        constructor(t, e) {
          super(),
            (this._parent = e),
            (this._bootstrapComponents = []),
            (this.injector = this),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new xa(this));
          const n = Pt(t),
            s = t[B] || null;
          s && Vo(s),
            (this._bootstrapComponents = Kt(n.bootstrap)),
            (this._r3Injector = ui(
              t,
              e,
              [
                { provide: lt, useValue: this },
                { provide: Zo, useValue: this.componentFactoryResolver },
              ],
              T(t)
            )),
            this._r3Injector._resolveInjectorDefTypes(),
            (this.instance = this.get(t));
        }
        get(t, e = bi.THROW_IF_NOT_FOUND, n = m.Default) {
          return t === bi || t === lt || t === W
            ? this
            : this._r3Injector.get(t, e, n);
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach((t) => t()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class Pa extends ct {
        constructor(t) {
          super(),
            (this.moduleType = t),
            null !== Pt(t) &&
              (function (t) {
                const e = new Set();
                !(function t(n) {
                  const s = Pt(n, !0),
                    r = s.id;
                  null !== r &&
                    ((function (t, e, n) {
                      if (e && e !== n)
                        throw new Error(
                          `Duplicate module registered for ${t} - ${T(
                            e
                          )} vs ${T(e.name)}`
                        );
                    })(r, Ia.get(r), n),
                    Ia.set(r, n));
                  const i = Kt(s.imports);
                  for (const o of i) e.has(o) || (e.add(o), t(o));
                })(t);
              })(t);
        }
        create(t) {
          return new ja(this.moduleType, t);
        }
      }
      function Da(t, e, n) {
        const s = ke() + t,
          r = be();
        return r[s] === Is
          ? ji(r, s, n ? e.call(n) : e())
          : (function (t, e) {
              return t[e];
            })(r, s);
      }
      function Na(t, e, n, s) {
        return Ma(be(), ke(), t, e, n, s);
      }
      function La(t, e) {
        const n = t[e];
        return n === Is ? void 0 : n;
      }
      function Ma(t, e, n, s, r, i) {
        const o = e + n;
        return Pi(t, o, r)
          ? ji(t, o + 1, i ? s.call(i, r) : s(r))
          : La(t, o + 1);
      }
      function Fa(t, e) {
        const n = ye();
        let s;
        const r = t + Dt;
        n.firstCreatePass
          ? ((s = (function (t, e) {
              if (e)
                for (let n = e.length - 1; n >= 0; n--) {
                  const s = e[n];
                  if (t === s.name) return s;
                }
              throw new Error(`The pipe '${t}' could not be found!`);
            })(e, n.pipeRegistry)),
            (n.data[r] = s),
            s.onDestroy &&
              (n.destroyHooks || (n.destroyHooks = [])).push(r, s.onDestroy))
          : (s = n.data[r]);
        const i = s.factory || (s.factory = jt(s.type)),
          o = et(Fi);
        try {
          const e = ln(!1),
            s = i();
          return (
            ln(e),
            (function (t, e, n, s) {
              const r = n + Dt;
              r >= t.data.length &&
                ((t.data[r] = null), (t.blueprint[r] = null)),
                (e[r] = s);
            })(n, be(), t, s),
            s
          );
        } finally {
          et(o);
        }
      }
      function Va(t, e, n) {
        const s = be(),
          r = le(s, t);
        return za(
          s,
          Ua(s, t) ? Ma(s, ke(), e, r.transform, n, r) : r.transform(n)
        );
      }
      function Ha(t, e, n, s) {
        const r = be(),
          i = le(r, t);
        return za(
          r,
          Ua(r, t)
            ? (function (t, e, n, s, r, i, o) {
                const a = e + n;
                return (function (t, e, n, s) {
                  const r = Pi(t, e, n);
                  return Pi(t, e + 1, s) || r;
                })(t, a, r, i)
                  ? ji(t, a + 2, o ? s.call(o, r, i) : s(r, i))
                  : La(t, a + 2);
              })(r, ke(), e, i.transform, n, s, i)
            : i.transform(n, s)
        );
      }
      function Ua(t, e) {
        return t[1].data[e + Dt].pure;
      }
      function za(t, e) {
        return (
          Ri.isWrapped(e) &&
            ((e = Ri.unwrap(e)), (t[ge.lFrame.bindingIndex] = Is)),
          e
        );
      }
      const Ba = class extends s.a {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, e, n) {
          let s,
            i = (t) => null,
            o = () => null;
          t && "object" == typeof t
            ? ((s = this.__isAsync
                ? (e) => {
                    setTimeout(() => t.next(e));
                  }
                : (e) => {
                    t.next(e);
                  }),
              t.error &&
                (i = this.__isAsync
                  ? (e) => {
                      setTimeout(() => t.error(e));
                    }
                  : (e) => {
                      t.error(e);
                    }),
              t.complete &&
                (o = this.__isAsync
                  ? () => {
                      setTimeout(() => t.complete());
                    }
                  : () => {
                      t.complete();
                    }))
            : ((s = this.__isAsync
                ? (e) => {
                    setTimeout(() => t(e));
                  }
                : (e) => {
                    t(e);
                  }),
              e &&
                (i = this.__isAsync
                  ? (t) => {
                      setTimeout(() => e(t));
                    }
                  : (t) => {
                      e(t);
                    }),
              n &&
                (o = this.__isAsync
                  ? () => {
                      setTimeout(() => n());
                    }
                  : () => {
                      n();
                    }));
          const a = super.subscribe(s, i, o);
          return t instanceof r.a && t.add(a), a;
        }
      };
      function qa() {
        return this._results[Ti()]();
      }
      class $a {
        constructor() {
          (this.dirty = !0),
            (this._results = []),
            (this.changes = new Ba()),
            (this.length = 0);
          const t = Ti(),
            e = $a.prototype;
          e[t] || (e[t] = qa);
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, e) {
          return this._results.reduce(t, e);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t) {
          (this._results = (function t(e, n) {
            void 0 === n && (n = e);
            for (let s = 0; s < e.length; s++) {
              let r = e[s];
              Array.isArray(r)
                ? (n === e && (n = e.slice(0, s)), t(r, n))
                : n !== e && n.push(r);
            }
            return n;
          })(t)),
            (this.dirty = !1),
            (this.length = this._results.length),
            (this.last = this._results[this.length - 1]),
            (this.first = this._results[0]);
        }
        notifyOnChanges() {
          this.changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      class Ka {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new Ka(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class Wa {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const e = t.queries;
          if (null !== e) {
            const n =
                null !== t.contentQueries ? t.contentQueries[0] : e.length,
              s = [];
            for (let t = 0; t < n; t++) {
              const n = e.getByIndex(t);
              s.push(this.queries[n.indexInDeclarationView].clone());
            }
            return new Wa(s);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let e = 0; e < this.queries.length; e++)
            null !== ll(t, e).matches && this.queries[e].setDirty();
        }
      }
      class Ga {
        constructor(t, e, n, s = null) {
          (this.predicate = t),
            (this.descendants = e),
            (this.isStatic = n),
            (this.read = s);
        }
      }
      class Qa {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, e) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementStart(t, e);
        }
        elementEnd(t) {
          for (let e = 0; e < this.queries.length; e++)
            this.queries[e].elementEnd(t);
        }
        embeddedTView(t) {
          let e = null;
          for (let n = 0; n < this.length; n++) {
            const s = null !== e ? e.length : 0,
              r = this.getByIndex(n).embeddedTView(t, s);
            r &&
              ((r.indexInDeclarationView = n),
              null !== e ? e.push(r) : (e = [r]));
          }
          return null !== e ? new Qa(e) : null;
        }
        template(t, e) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].template(t, e);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class Za {
        constructor(t, e = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = e);
        }
        elementStart(t, e) {
          this.isApplyingToNode(e) && this.matchTNode(t, e);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index &&
            (this._appliesToNextNode = !1);
        }
        template(t, e) {
          this.elementStart(t, e);
        }
        embeddedTView(t, e) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-t.index, e),
              new Za(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && !1 === this.metadata.descendants) {
            const e = this._declarationNodeIndex;
            let n = t.parent;
            for (; null !== n && 3 === n.type && n.index !== e; ) n = n.parent;
            return e === (null !== n ? n.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, e) {
          const n = this.metadata.predicate;
          if (Array.isArray(n))
            for (let s = 0; s < n.length; s++) {
              const r = n[s];
              this.matchTNodeWithReadOption(t, e, Ya(e, r)),
                this.matchTNodeWithReadOption(t, e, bn(e, t, r, !1, !1));
            }
          else
            n === wa
              ? 0 === e.type && this.matchTNodeWithReadOption(t, e, -1)
              : this.matchTNodeWithReadOption(t, e, bn(e, t, n, !1, !1));
        }
        matchTNodeWithReadOption(t, e, n) {
          if (null !== n) {
            const s = this.metadata.read;
            if (null !== s)
              if (s === Yo || s === Sa || (s === wa && 0 === e.type))
                this.addMatch(e.index, -2);
              else {
                const n = bn(e, t, s, !1, !1);
                null !== n && this.addMatch(e.index, n);
              }
            else this.addMatch(e.index, n);
          }
        }
        addMatch(t, e) {
          null === this.matches
            ? (this.matches = [t, e])
            : this.matches.push(t, e);
        }
      }
      function Ya(t, e) {
        const n = t.localNames;
        if (null !== n)
          for (let s = 0; s < n.length; s += 2) if (n[s] === e) return n[s + 1];
        return null;
      }
      function Xa(t, e, n, s) {
        return -1 === n
          ? (function (t, e) {
              return 2 === t.type || 3 === t.type
                ? Yr(Yo, t, e)
                : 0 === t.type
                ? Xr(wa, Yo, t, e)
                : null;
            })(e, t)
          : -2 === n
          ? (function (t, e, n) {
              return n === Yo
                ? Yr(Yo, e, t)
                : n === wa
                ? Xr(wa, Yo, e, t)
                : n === Sa
                ? Jr(Sa, Yo, e, t)
                : void 0;
            })(t, e, s)
          : yn(t, t[1], n, e);
      }
      function Ja(t, e, n, s) {
        const r = e[19].queries[s];
        if (null === r.matches) {
          const s = t.data,
            i = n.matches,
            o = [];
          for (let t = 0; t < i.length; t += 2) {
            const r = i[t];
            o.push(r < 0 ? null : Xa(e, s[r], i[t + 1], n.metadata.read));
          }
          r.matches = o;
        }
        return r.matches;
      }
      function tl(t) {
        const e = be(),
          n = ye(),
          s = je();
        Pe(s + 1);
        const r = ll(n, s);
        if (t.dirty && he(e) === r.metadata.isStatic) {
          if (null === r.matches) t.reset([]);
          else {
            const i = r.crossesNgTemplate
              ? (function t(e, n, s, r) {
                  const i = e.queries.getByIndex(s),
                    o = i.matches;
                  if (null !== o) {
                    const a = Ja(e, n, i, s);
                    for (let e = 0; e < o.length; e += 2) {
                      const s = o[e];
                      if (s > 0) r.push(a[e / 2]);
                      else {
                        const i = o[e + 1],
                          a = n[-s];
                        for (let e = Nt; e < a.length; e++) {
                          const n = a[e];
                          n[17] === n[3] && t(n[1], n, i, r);
                        }
                        if (null !== a[9]) {
                          const e = a[9];
                          for (let n = 0; n < e.length; n++) {
                            const s = e[n];
                            t(s[1], s, i, r);
                          }
                        }
                      }
                    }
                  }
                  return r;
                })(n, e, s, [])
              : Ja(n, e, r, s);
            t.reset(i), t.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function el(t, e, n) {
        sl(ye(), be(), t, e, n, !0);
      }
      function nl(t, e, n) {
        sl(ye(), be(), t, e, n, !1);
      }
      function sl(t, e, n, s, r, i) {
        t.firstCreatePass &&
          (al(t, new Ga(n, s, i, r), -1), i && (t.staticViewQueries = !0)),
          ol(t, e);
      }
      function rl(t, e, n, s) {
        !(function (t, e, n, s, r, i, o, a) {
          t.firstCreatePass &&
            (al(t, new Ga(n, s, false, r), o.index),
            (function (t, e) {
              const n = t.contentQueries || (t.contentQueries = []);
              e !== (t.contentQueries.length ? n[n.length - 1] : -1) &&
                n.push(t.queries.length - 1, e);
            })(t, a)),
            ol(t, e);
        })(ye(), be(), e, n, s, 0, we(), t);
      }
      function il() {
        return (t = be()), (e = je()), t[19].queries[e].queryList;
        var t, e;
      }
      function ol(t, e) {
        const n = new $a();
        nr(t, e, n, n.destroy),
          null === e[19] && (e[19] = new Wa()),
          e[19].queries.push(new Ka(n));
      }
      function al(t, e, n) {
        null === t.queries && (t.queries = new Qa()),
          t.queries.track(new Za(e, n));
      }
      function ll(t, e) {
        return t.queries.getByIndex(e);
      }
      function cl(t = m.Default) {
        const e = ti(!0);
        if (null != e || t & m.Optional) return e;
        Wt("ChangeDetectorRef");
      }
      const ul = new K("Application Initializer");
      let hl = (() => {
        class t {
          constructor(t) {
            (this.appInits = t),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((t, e) => {
                (this.resolve = t), (this.reject = e);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const t = [],
              e = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let n = 0; n < this.appInits.length; n++) {
                const e = this.appInits[n]();
                Ki(e) && t.push(e);
              }
            Promise.all(t)
              .then(() => {
                e();
              })
              .catch((t) => {
                this.reject(t);
              }),
              0 === t.length && e(),
              (this.initialized = !0);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(st(ul, 8));
          }),
          (t.ɵprov = b({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const dl = new K("AppId"),
        pl = {
          provide: dl,
          useFactory: function () {
            return `${fl()}${fl()}${fl()}`;
          },
          deps: [],
        };
      function fl() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const ml = new K("Platform Initializer"),
        gl = new K("Platform ID"),
        _l = new K("appBootstrapListener");
      let bl = (() => {
        class t {
          log(t) {
            console.log(t);
          }
          warn(t) {
            console.warn(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = b({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const yl = new K("LocaleId"),
        vl = new K("DefaultCurrencyCode");
      class wl {
        constructor(t, e) {
          (this.ngModuleFactory = t), (this.componentFactories = e);
        }
      }
      const Cl = function (t) {
          return new Pa(t);
        },
        Sl = Cl,
        El = function (t) {
          return Promise.resolve(Cl(t));
        },
        Ol = function (t) {
          const e = Cl(t),
            n = Kt(Pt(t).declarations).reduce((t, e) => {
              const n = It(e);
              return n && t.push(new Ra(n)), t;
            }, []);
          return new wl(e, n);
        },
        xl = Ol,
        kl = function (t) {
          return Promise.resolve(Ol(t));
        };
      let Tl = (() => {
        class t {
          constructor() {
            (this.compileModuleSync = Sl),
              (this.compileModuleAsync = El),
              (this.compileModuleAndAllComponentsSync = xl),
              (this.compileModuleAndAllComponentsAsync = kl);
          }
          clearCache() {}
          clearCacheFor(t) {}
          getModuleId(t) {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = b({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const Rl = (() => Promise.resolve(0))();
      function Al(t) {
        "undefined" == typeof Zone
          ? Rl.then(() => {
              t && t.apply(null, null);
            })
          : Zone.current.scheduleMicroTask("scheduleMicrotask", t);
      }
      class Il {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: e = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Ba(!1)),
            (this.onMicrotaskEmpty = new Ba(!1)),
            (this.onStable = new Ba(!1)),
            (this.onError = new Ba(!1)),
            "undefined" == typeof Zone)
          )
            throw new Error("In this configuration Angular requires Zone.js");
          Zone.assertZonePatched();
          const n = this;
          (n._nesting = 0),
            (n._outer = n._inner = Zone.current),
            Zone.wtfZoneSpec && (n._inner = n._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec &&
              (n._inner = n._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (n._inner = n._inner.fork(Zone.longStackTraceZoneSpec)),
            (n.shouldCoalesceEventChangeDetection = e),
            (n.lastRequestAnimationFrameId = -1),
            (n.nativeRequestAnimationFrame = (function () {
              let t = F.requestAnimationFrame,
                e = F.cancelAnimationFrame;
              if ("undefined" != typeof Zone && t && e) {
                const n = t[Zone.__symbol__("OriginalDelegate")];
                n && (t = n);
                const s = e[Zone.__symbol__("OriginalDelegate")];
                s && (e = s);
              }
              return {
                nativeRequestAnimationFrame: t,
                nativeCancelAnimationFrame: e,
              };
            })().nativeRequestAnimationFrame),
            (function (t) {
              const e =
                !!t.shouldCoalesceEventChangeDetection &&
                t.nativeRequestAnimationFrame &&
                (() => {
                  !(function (t) {
                    -1 === t.lastRequestAnimationFrameId &&
                      ((t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(
                        F,
                        () => {
                          t.fakeTopEventTask ||
                            (t.fakeTopEventTask = Zone.root.scheduleEventTask(
                              "fakeTopEventTask",
                              () => {
                                (t.lastRequestAnimationFrameId = -1),
                                  Nl(t),
                                  Dl(t);
                              },
                              void 0,
                              () => {},
                              () => {}
                            )),
                            t.fakeTopEventTask.invoke();
                        }
                      )),
                      Nl(t));
                  })(t);
                });
              t._inner = t._inner.fork({
                name: "angular",
                properties: { isAngularZone: !0, maybeDelayChangeDetection: e },
                onInvokeTask: (n, s, r, i, o, a) => {
                  try {
                    return Ll(t), n.invokeTask(r, i, o, a);
                  } finally {
                    e && "eventTask" === i.type && e(), Ml(t);
                  }
                },
                onInvoke: (e, n, s, r, i, o, a) => {
                  try {
                    return Ll(t), e.invoke(s, r, i, o, a);
                  } finally {
                    Ml(t);
                  }
                },
                onHasTask: (e, n, s, r) => {
                  e.hasTask(s, r),
                    n === s &&
                      ("microTask" == r.change
                        ? ((t._hasPendingMicrotasks = r.microTask),
                          Nl(t),
                          Dl(t))
                        : "macroTask" == r.change &&
                          (t.hasPendingMacrotasks = r.macroTask));
                },
                onHandleError: (e, n, s, r) => (
                  e.handleError(s, r),
                  t.runOutsideAngular(() => t.onError.emit(r)),
                  !1
                ),
              });
            })(n);
        }
        static isInAngularZone() {
          return !0 === Zone.current.get("isAngularZone");
        }
        static assertInAngularZone() {
          if (!Il.isInAngularZone())
            throw new Error("Expected to be in Angular Zone, but it is not!");
        }
        static assertNotInAngularZone() {
          if (Il.isInAngularZone())
            throw new Error("Expected to not be in Angular Zone, but it is!");
        }
        run(t, e, n) {
          return this._inner.run(t, e, n);
        }
        runTask(t, e, n, s) {
          const r = this._inner,
            i = r.scheduleEventTask("NgZoneEvent: " + s, t, Pl, jl, jl);
          try {
            return r.runTask(i, e, n);
          } finally {
            r.cancelTask(i);
          }
        }
        runGuarded(t, e, n) {
          return this._inner.runGuarded(t, e, n);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      function jl() {}
      const Pl = {};
      function Dl(t) {
        if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
          try {
            t._nesting++, t.onMicrotaskEmpty.emit(null);
          } finally {
            if ((t._nesting--, !t.hasPendingMicrotasks))
              try {
                t.runOutsideAngular(() => t.onStable.emit(null));
              } finally {
                t.isStable = !0;
              }
          }
      }
      function Nl(t) {
        t.hasPendingMicrotasks = !!(
          t._hasPendingMicrotasks ||
          (t.shouldCoalesceEventChangeDetection &&
            -1 !== t.lastRequestAnimationFrameId)
        );
      }
      function Ll(t) {
        t._nesting++,
          t.isStable && ((t.isStable = !1), t.onUnstable.emit(null));
      }
      function Ml(t) {
        t._nesting--, Dl(t);
      }
      class Fl {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Ba()),
            (this.onMicrotaskEmpty = new Ba()),
            (this.onStable = new Ba()),
            (this.onError = new Ba());
        }
        run(t, e, n) {
          return t.apply(e, n);
        }
        runGuarded(t, e, n) {
          return t.apply(e, n);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, e, n, s) {
          return t.apply(e, n);
        }
      }
      let Vl = (() => {
          class t {
            constructor(t) {
              (this._ngZone = t),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                t.run(() => {
                  this.taskTrackingZone =
                    "undefined" == typeof Zone
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      Il.assertNotInAngularZone(),
                        Al(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                Al(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let t = this._callbacks.pop();
                    clearTimeout(t.timeoutId), t.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let t = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (e) =>
                    !e.updateCb ||
                    !e.updateCb(t) ||
                    (clearTimeout(e.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((t) => ({
                    source: t.source,
                    creationLocation: t.creationLocation,
                    data: t.data,
                  }))
                : [];
            }
            addCallback(t, e, n) {
              let s = -1;
              e &&
                e > 0 &&
                (s = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (t) => t.timeoutId !== s
                  )),
                    t(this._didWork, this.getPendingTasks());
                }, e)),
                this._callbacks.push({ doneCb: t, timeoutId: s, updateCb: n });
            }
            whenStable(t, e, n) {
              if (n && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
                );
              this.addCallback(t, e, n), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            findProviders(t, e, n) {
              return [];
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(st(Il));
            }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Hl = (() => {
          class t {
            constructor() {
              (this._applications = new Map()), ql.addToWindow(this);
            }
            registerApplication(t, e) {
              this._applications.set(t, e);
            }
            unregisterApplication(t) {
              this._applications.delete(t);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(t) {
              return this._applications.get(t) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(t, e = !0) {
              return ql.findTestabilityInTree(this, t, e);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = b({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      class Ul {
        addToWindow(t) {}
        findTestabilityInTree(t, e, n) {
          return null;
        }
      }
      function zl(t) {
        ql = t;
      }
      let Bl,
        ql = new Ul();
      const $l = new K("AllowMultipleToken");
      class Kl {
        constructor(t, e) {
          (this.name = t), (this.token = e);
        }
      }
      function Wl(t, e, n = []) {
        const s = "Platform: " + e,
          r = new K(s);
        return (e = []) => {
          let i = Gl();
          if (!i || i.injector.get($l, !1))
            if (t) t(n.concat(e).concat({ provide: r, useValue: !0 }));
            else {
              const t = n
                .concat(e)
                .concat(
                  { provide: r, useValue: !0 },
                  { provide: ri, useValue: "platform" }
                );
              !(function (t) {
                if (Bl && !Bl.destroyed && !Bl.injector.get($l, !1))
                  throw new Error(
                    "There can be only one platform. Destroy the previous one to create a new one."
                  );
                Bl = t.get(Ql);
                const e = t.get(ml, null);
                e && e.forEach((t) => t());
              })(bi.create({ providers: t, name: s }));
            }
          return (function (t) {
            const e = Gl();
            if (!e) throw new Error("No platform exists!");
            if (!e.injector.get(t, null))
              throw new Error(
                "A platform with a different configuration has been created. Please destroy it first."
              );
            return e;
          })(r);
        };
      }
      function Gl() {
        return Bl && !Bl.destroyed ? Bl : null;
      }
      let Ql = (() => {
        class t {
          constructor(t) {
            (this._injector = t),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(t, e) {
            const n = (function (t, e) {
                let n;
                return (
                  (n =
                    "noop" === t
                      ? new Fl()
                      : ("zone.js" === t ? void 0 : t) ||
                        new Il({
                          enableLongStackTrace: $n(),
                          shouldCoalesceEventChangeDetection: e,
                        })),
                  n
                );
              })(e ? e.ngZone : void 0, (e && e.ngZoneEventCoalescing) || !1),
              s = [{ provide: Il, useValue: n }];
            return n.run(() => {
              const e = bi.create({
                  providers: s,
                  parent: this.injector,
                  name: t.moduleType.name,
                }),
                r = t.create(e),
                i = r.injector.get(Tn, null);
              if (!i)
                throw new Error(
                  "No ErrorHandler. Is platform module (BrowserModule) included?"
                );
              return (
                r.onDestroy(() => Xl(this._modules, r)),
                n.runOutsideAngular(() =>
                  n.onError.subscribe({
                    next: (t) => {
                      i.handleError(t);
                    },
                  })
                ),
                (function (t, e, n) {
                  try {
                    const s = n();
                    return Ki(s)
                      ? s.catch((n) => {
                          throw (
                            (e.runOutsideAngular(() => t.handleError(n)), n)
                          );
                        })
                      : s;
                  } catch (s) {
                    throw (e.runOutsideAngular(() => t.handleError(s)), s);
                  }
                })(i, n, () => {
                  const t = r.injector.get(hl);
                  return (
                    t.runInitializers(),
                    t.donePromise.then(
                      () => (
                        Vo(r.injector.get(yl, Mo) || Mo),
                        this._moduleDoBootstrap(r),
                        r
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(t, e = []) {
            const n = Zl({}, e);
            return (function (t, e, n) {
              const s = new Pa(n);
              return Promise.resolve(s);
            })(0, 0, t).then((t) => this.bootstrapModuleFactory(t, n));
          }
          _moduleDoBootstrap(t) {
            const e = t.injector.get(Yl);
            if (t._bootstrapComponents.length > 0)
              t._bootstrapComponents.forEach((t) => e.bootstrap(t));
            else {
              if (!t.instance.ngDoBootstrap)
                throw new Error(
                  `The module ${T(
                    t.instance.constructor
                  )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`
                );
              t.instance.ngDoBootstrap(e);
            }
            this._modules.push(t);
          }
          onDestroy(t) {
            this._destroyListeners.push(t);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed)
              throw new Error("The platform has already been destroyed!");
            this._modules.slice().forEach((t) => t.destroy()),
              this._destroyListeners.forEach((t) => t()),
              (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(st(bi));
          }),
          (t.ɵprov = b({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function Zl(t, e) {
        return Array.isArray(e)
          ? e.reduce(Zl, t)
          : Object.assign(Object.assign({}, t), e);
      }
      let Yl = (() => {
        class t {
          constructor(t, e, n, s, r, l) {
            (this._zone = t),
              (this._console = e),
              (this._injector = n),
              (this._exceptionHandler = s),
              (this._componentFactoryResolver = r),
              (this._initStatus = l),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._enforceNoNewChanges = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._enforceNoNewChanges = $n()),
              this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick();
                  });
                },
              });
            const c = new i.a((t) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    t.next(this._stable), t.complete();
                  });
              }),
              u = new i.a((t) => {
                let e;
                this._zone.runOutsideAngular(() => {
                  e = this._zone.onStable.subscribe(() => {
                    Il.assertNotInAngularZone(),
                      Al(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), t.next(!0));
                      });
                  });
                });
                const n = this._zone.onUnstable.subscribe(() => {
                  Il.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        t.next(!1);
                      }));
                });
                return () => {
                  e.unsubscribe(), n.unsubscribe();
                };
              });
            this.isStable = Object(o.a)(c, u.pipe(Object(a.a)()));
          }
          bootstrap(t, e) {
            if (!this._initStatus.done)
              throw new Error(
                "Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module."
              );
            let n;
            (n =
              t instanceof Go
                ? t
                : this._componentFactoryResolver.resolveComponentFactory(t)),
              this.componentTypes.push(n.componentType);
            const s = n.isBoundToModule ? void 0 : this._injector.get(lt),
              r = n.create(bi.NULL, [], e || n.selector, s);
            r.onDestroy(() => {
              this._unloadComponent(r);
            });
            const i = r.injector.get(Vl, null);
            return (
              i &&
                r.injector
                  .get(Hl)
                  .registerApplication(r.location.nativeElement, i),
              this._loadComponent(r),
              $n() &&
                this._console.log(
                  "Angular is running in development mode. Call enableProdMode() to enable production mode."
                ),
              r
            );
          }
          tick() {
            if (this._runningTick)
              throw new Error("ApplicationRef.tick is called recursively");
            try {
              this._runningTick = !0;
              for (let t of this._views) t.detectChanges();
              if (this._enforceNoNewChanges)
                for (let t of this._views) t.checkNoChanges();
            } catch (t) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(t)
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(t) {
            const e = t;
            this._views.push(e), e.attachToAppRef(this);
          }
          detachView(t) {
            const e = t;
            Xl(this._views, e), e.detachFromAppRef();
          }
          _loadComponent(t) {
            this.attachView(t.hostView),
              this.tick(),
              this.components.push(t),
              this._injector
                .get(_l, [])
                .concat(this._bootstrapListeners)
                .forEach((e) => e(t));
          }
          _unloadComponent(t) {
            this.detachView(t.hostView), Xl(this.components, t);
          }
          ngOnDestroy() {
            this._views.slice().forEach((t) => t.destroy());
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(st(Il), st(bl), st(bi), st(Tn), st(Zo), st(hl));
          }),
          (t.ɵprov = b({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function Xl(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      class Jl {}
      class tc {}
      const ec = { factoryPathPrefix: "", factoryPathSuffix: ".ngfactory" };
      let nc = (() => {
        class t {
          constructor(t, e) {
            (this._compiler = t), (this._config = e || ec);
          }
          load(t) {
            return this.loadAndCompile(t);
          }
          loadAndCompile(t) {
            let [e, s] = t.split("#");
            return (
              void 0 === s && (s = "default"),
              n("zn8P")(e)
                .then((t) => t[s])
                .then((t) => sc(t, e, s))
                .then((t) => this._compiler.compileModuleAsync(t))
            );
          }
          loadFactory(t) {
            let [e, s] = t.split("#"),
              r = "NgFactory";
            return (
              void 0 === s && ((s = "default"), (r = "")),
              n("zn8P")(
                this._config.factoryPathPrefix +
                  e +
                  this._config.factoryPathSuffix
              )
                .then((t) => t[s + r])
                .then((t) => sc(t, e, s))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(st(Tl), st(tc, 8));
          }),
          (t.ɵprov = b({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function sc(t, e, n) {
        if (!t) throw new Error(`Cannot find '${n}' in '${e}'`);
        return t;
      }
      const rc = function (t) {
          return null;
        },
        ic = Wl(null, "core", [
          { provide: gl, useValue: "unknown" },
          { provide: Ql, deps: [bi] },
          { provide: Hl, deps: [] },
          { provide: bl, deps: [] },
        ]),
        oc = [
          { provide: Yl, useClass: Yl, deps: [Il, bl, bi, Tn, Zo, hl] },
          {
            provide: Ta,
            deps: [Il],
            useFactory: function (t) {
              let e = [];
              return (
                t.onStable.subscribe(() => {
                  for (; e.length; ) e.pop()();
                }),
                function (t) {
                  e.push(t);
                }
              );
            },
          },
          { provide: hl, useClass: hl, deps: [[new d(), ul]] },
          { provide: Tl, useClass: Tl, deps: [] },
          pl,
          {
            provide: ga,
            useFactory: function () {
              return ya;
            },
            deps: [],
          },
          {
            provide: _a,
            useFactory: function () {
              return va;
            },
            deps: [],
          },
          {
            provide: yl,
            useFactory: function (t) {
              return (
                Vo(
                  (t =
                    t ||
                    ("undefined" != typeof $localize && $localize.locale) ||
                    Mo)
                ),
                t
              );
            },
            deps: [[new h(yl), new d(), new f()]],
          },
          { provide: vl, useValue: "USD" },
        ];
      let ac = (() => {
        class t {
          constructor(t) {}
        }
        return (
          (t.ɵmod = xt({ type: t })),
          (t.ɵinj = y({
            factory: function (e) {
              return new (e || t)(st(Yl));
            },
            providers: oc,
          })),
          t
        );
      })();
    },
    gRHU: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n("2fFW"),
        r = n("NJ4a");
      const i = {
        closed: !0,
        next(t) {},
        error(t) {
          if (s.a.useDeprecatedSynchronousErrorHandling) throw t;
          Object(r.a)(t);
        },
        complete() {},
      };
    },
    jZKg: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n("HDdC"),
        r = n("quSY");
      function i(t, e) {
        return new s.a((n) => {
          const s = new r.a();
          let i = 0;
          return (
            s.add(
              e.schedule(function () {
                i !== t.length
                  ? (n.next(t[i++]), n.closed || s.add(this.schedule()))
                  : n.complete();
              })
            ),
            s
          );
        });
      }
    },
    kJWO: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (() =>
        ("function" == typeof Symbol && Symbol.observable) || "@@observable")();
    },
    lJxs: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var s = n("7o/Q");
      function r(t, e) {
        return function (n) {
          if ("function" != typeof t)
            throw new TypeError(
              "argument is not a function. Are you looking for `mapTo()`?"
            );
          return n.lift(new i(t, e));
        };
      }
      class i {
        constructor(t, e) {
          (this.project = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new o(t, this.project, this.thisArg));
        }
      }
      class o extends s.a {
        constructor(t, e, n) {
          super(t),
            (this.project = e),
            (this.count = 0),
            (this.thisArg = n || this);
        }
        _next(t) {
          let e;
          try {
            e = this.project.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
    },
    n6bG: function (t, e, n) {
      "use strict";
      function s(t) {
        return "function" == typeof t;
      }
      n.d(e, "a", function () {
        return s;
      });
    },
    nYR2: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var s = n("7o/Q"),
        r = n("quSY");
      function i(t) {
        return (e) => e.lift(new o(t));
      }
      class o {
        constructor(t) {
          this.callback = t;
        }
        call(t, e) {
          return e.subscribe(new a(t, this.callback));
        }
      }
      class a extends s.a {
        constructor(t, e) {
          super(t), this.add(new r.a(e));
        }
      }
    },
    ngJS: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      const s = (t) => (e) => {
        for (let n = 0, s = t.length; n < s && !e.closed; n++) e.next(t[n]);
        e.complete();
      };
    },
    oB13: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return u;
      });
      var s = n("XNiG"),
        r = n("HDdC"),
        i = (n("7o/Q"), n("quSY")),
        o = n("x+ZX");
      class a extends r.a {
        constructor(t, e) {
          super(),
            (this.source = t),
            (this.subjectFactory = e),
            (this._refCount = 0),
            (this._isComplete = !1);
        }
        _subscribe(t) {
          return this.getSubject().subscribe(t);
        }
        getSubject() {
          const t = this._subject;
          return (
            (t && !t.isStopped) || (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        connect() {
          let t = this._connection;
          return (
            t ||
              ((this._isComplete = !1),
              (t = this._connection = new i.a()),
              t.add(this.source.subscribe(new c(this.getSubject(), this))),
              t.closed && ((this._connection = null), (t = i.a.EMPTY))),
            t
          );
        }
        refCount() {
          return Object(o.a)()(this);
        }
      }
      const l = (() => {
        const t = a.prototype;
        return {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: t._subscribe },
          _isComplete: { value: t._isComplete, writable: !0 },
          getSubject: { value: t.getSubject },
          connect: { value: t.connect },
          refCount: { value: t.refCount },
        };
      })();
      class c extends s.b {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _error(t) {
          this._unsubscribe(), super._error(t);
        }
        _complete() {
          (this.connectable._isComplete = !0),
            this._unsubscribe(),
            super._complete();
        }
        _unsubscribe() {
          const t = this.connectable;
          if (t) {
            this.connectable = null;
            const e = t._connection;
            (t._refCount = 0),
              (t._subject = null),
              (t._connection = null),
              e && e.unsubscribe();
          }
        }
      }
      function u(t, e) {
        return function (n) {
          let s;
          if (
            ((s =
              "function" == typeof t
                ? t
                : function () {
                    return t;
                  }),
            "function" == typeof e)
          )
            return n.lift(new h(s, e));
          const r = Object.create(n, l);
          return (r.source = n), (r.subjectFactory = s), r;
        };
      }
      class h {
        constructor(t, e) {
          (this.subjectFactory = t), (this.selector = e);
        }
        call(t, e) {
          const { selector: n } = this,
            s = this.subjectFactory(),
            r = n(s).subscribe(t);
          return r.add(e.subscribe(s)), r;
        }
      }
    },
    ofXK: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return v;
      }),
        n.d(e, "b", function () {
          return V;
        }),
        n.d(e, "c", function () {
          return l;
        }),
        n.d(e, "d", function () {
          return C;
        }),
        n.d(e, "e", function () {
          return h;
        }),
        n.d(e, "f", function () {
          return S;
        }),
        n.d(e, "g", function () {
          return b;
        }),
        n.d(e, "h", function () {
          return I;
        }),
        n.d(e, "i", function () {
          return P;
        }),
        n.d(e, "j", function () {
          return N;
        }),
        n.d(e, "k", function () {
          return w;
        }),
        n.d(e, "l", function () {
          return c;
        }),
        n.d(e, "m", function () {
          return F;
        }),
        n.d(e, "n", function () {
          return z;
        }),
        n.d(e, "o", function () {
          return U;
        }),
        n.d(e, "p", function () {
          return a;
        }),
        n.d(e, "q", function () {
          return H;
        }),
        n.d(e, "r", function () {
          return i;
        }),
        n.d(e, "s", function () {
          return A;
        }),
        n.d(e, "t", function () {
          return o;
        });
      var s = n("fXoL");
      let r = null;
      function i() {
        return r;
      }
      function o(t) {
        r || (r = t);
      }
      class a {}
      const l = new s.q("DocumentToken");
      let c = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = Object(s.Gb)({
            factory: u,
            token: t,
            providedIn: "platform",
          })),
          t
        );
      })();
      function u() {
        return Object(s.Rb)(d);
      }
      const h = new s.q("Location Initialized");
      let d = (() => {
        class t extends c {
          constructor(t) {
            super(), (this._doc = t), this._init();
          }
          _init() {
            (this.location = i().getLocation()),
              (this._history = i().getHistory());
          }
          getBaseHrefFromDOM() {
            return i().getBaseHref(this._doc);
          }
          onPopState(t) {
            i()
              .getGlobalEventTarget(this._doc, "window")
              .addEventListener("popstate", t, !1);
          }
          onHashChange(t) {
            i()
              .getGlobalEventTarget(this._doc, "window")
              .addEventListener("hashchange", t, !1);
          }
          get href() {
            return this.location.href;
          }
          get protocol() {
            return this.location.protocol;
          }
          get hostname() {
            return this.location.hostname;
          }
          get port() {
            return this.location.port;
          }
          get pathname() {
            return this.location.pathname;
          }
          get search() {
            return this.location.search;
          }
          get hash() {
            return this.location.hash;
          }
          set pathname(t) {
            this.location.pathname = t;
          }
          pushState(t, e, n) {
            p() ? this._history.pushState(t, e, n) : (this.location.hash = n);
          }
          replaceState(t, e, n) {
            p()
              ? this._history.replaceState(t, e, n)
              : (this.location.hash = n);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Rb(l));
          }),
          (t.ɵprov = Object(s.Gb)({
            factory: f,
            token: t,
            providedIn: "platform",
          })),
          t
        );
      })();
      function p() {
        return !!window.history.pushState;
      }
      function f() {
        return new d(Object(s.Rb)(l));
      }
      function m(t, e) {
        if (0 == t.length) return e;
        if (0 == e.length) return t;
        let n = 0;
        return (
          t.endsWith("/") && n++,
          e.startsWith("/") && n++,
          2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e
        );
      }
      function g(t) {
        const e = t.match(/#|\?|$/),
          n = (e && e.index) || t.length;
        return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n);
      }
      function _(t) {
        return t && "?" !== t[0] ? "?" + t : t;
      }
      let b = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = Object(s.Gb)({
            factory: y,
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
      function y(t) {
        const e = Object(s.Rb)(l).location;
        return new w(Object(s.Rb)(c), (e && e.origin) || "");
      }
      const v = new s.q("appBaseHref");
      let w = (() => {
          class t extends b {
            constructor(t, e) {
              if (
                (super(),
                (this._platformLocation = t),
                null == e && (e = this._platformLocation.getBaseHrefFromDOM()),
                null == e)
              )
                throw new Error(
                  "No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document."
                );
              this._baseHref = e;
            }
            onPopState(t) {
              this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t);
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(t) {
              return m(this._baseHref, t);
            }
            path(t = !1) {
              const e =
                  this._platformLocation.pathname +
                  _(this._platformLocation.search),
                n = this._platformLocation.hash;
              return n && t ? `${e}${n}` : e;
            }
            pushState(t, e, n, s) {
              const r = this.prepareExternalUrl(n + _(s));
              this._platformLocation.pushState(t, e, r);
            }
            replaceState(t, e, n, s) {
              const r = this.prepareExternalUrl(n + _(s));
              this._platformLocation.replaceState(t, e, r);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Rb(c), s.Rb(v, 8));
            }),
            (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        C = (() => {
          class t extends b {
            constructor(t, e) {
              super(),
                (this._platformLocation = t),
                (this._baseHref = ""),
                null != e && (this._baseHref = e);
            }
            onPopState(t) {
              this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t);
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(t = !1) {
              let e = this._platformLocation.hash;
              return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e;
            }
            prepareExternalUrl(t) {
              const e = m(this._baseHref, t);
              return e.length > 0 ? "#" + e : e;
            }
            pushState(t, e, n, s) {
              let r = this.prepareExternalUrl(n + _(s));
              0 == r.length && (r = this._platformLocation.pathname),
                this._platformLocation.pushState(t, e, r);
            }
            replaceState(t, e, n, s) {
              let r = this.prepareExternalUrl(n + _(s));
              0 == r.length && (r = this._platformLocation.pathname),
                this._platformLocation.replaceState(t, e, r);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Rb(c), s.Rb(v, 8));
            }),
            (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        S = (() => {
          class t {
            constructor(t, e) {
              (this._subject = new s.n()),
                (this._urlChangeListeners = []),
                (this._platformStrategy = t);
              const n = this._platformStrategy.getBaseHref();
              (this._platformLocation = e),
                (this._baseHref = g(O(n))),
                this._platformStrategy.onPopState((t) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: t.state,
                    type: t.type,
                  });
                });
            }
            path(t = !1) {
              return this.normalize(this._platformStrategy.path(t));
            }
            getState() {
              return this._platformLocation.getState();
            }
            isCurrentPathEqualTo(t, e = "") {
              return this.path() == this.normalize(t + _(e));
            }
            normalize(e) {
              return t.stripTrailingSlash(
                (function (t, e) {
                  return t && e.startsWith(t) ? e.substring(t.length) : e;
                })(this._baseHref, O(e))
              );
            }
            prepareExternalUrl(t) {
              return (
                t && "/" !== t[0] && (t = "/" + t),
                this._platformStrategy.prepareExternalUrl(t)
              );
            }
            go(t, e = "", n = null) {
              this._platformStrategy.pushState(n, "", t, e),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(t + _(e)),
                  n
                );
            }
            replaceState(t, e = "", n = null) {
              this._platformStrategy.replaceState(n, "", t, e),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(t + _(e)),
                  n
                );
            }
            forward() {
              this._platformStrategy.forward();
            }
            back() {
              this._platformStrategy.back();
            }
            onUrlChange(t) {
              this._urlChangeListeners.push(t),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((t) => {
                    this._notifyUrlChangeListeners(t.url, t.state);
                  }));
            }
            _notifyUrlChangeListeners(t = "", e) {
              this._urlChangeListeners.forEach((n) => n(t, e));
            }
            subscribe(t, e, n) {
              return this._subject.subscribe({
                next: t,
                error: e,
                complete: n,
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Rb(b), s.Rb(c));
            }),
            (t.normalizeQueryParams = _),
            (t.joinWithSlash = m),
            (t.stripTrailingSlash = g),
            (t.ɵprov = Object(s.Gb)({
              factory: E,
              token: t,
              providedIn: "root",
            })),
            t
          );
        })();
      function E() {
        return new S(Object(s.Rb)(b), Object(s.Rb)(c));
      }
      function O(t) {
        return t.replace(/\/index.html$/, "");
      }
      var x = (function (t) {
        return (
          (t[(t.Zero = 0)] = "Zero"),
          (t[(t.One = 1)] = "One"),
          (t[(t.Two = 2)] = "Two"),
          (t[(t.Few = 3)] = "Few"),
          (t[(t.Many = 4)] = "Many"),
          (t[(t.Other = 5)] = "Other"),
          t
        );
      })({});
      const k = s.mb;
      class T {}
      let R = (() => {
        class t extends T {
          constructor(t) {
            super(), (this.locale = t);
          }
          getPluralCategory(t, e) {
            switch (k(e || this.locale)(t)) {
              case x.Zero:
                return "zero";
              case x.One:
                return "one";
              case x.Two:
                return "two";
              case x.Few:
                return "few";
              case x.Many:
                return "many";
              default:
                return "other";
            }
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Rb(s.u));
          }),
          (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function A(t, e) {
        e = encodeURIComponent(e);
        for (const n of t.split(";")) {
          const t = n.indexOf("="),
            [s, r] = -1 == t ? [n, ""] : [n.slice(0, t), n.slice(t + 1)];
          if (s.trim() === e) return decodeURIComponent(r);
        }
        return null;
      }
      let I = (() => {
        class t {
          constructor(t, e, n, s) {
            (this._iterableDiffers = t),
              (this._keyValueDiffers = e),
              (this._ngEl = n),
              (this._renderer = s),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._initialClasses = []),
              (this._rawClass = null);
          }
          set klass(t) {
            this._removeClasses(this._initialClasses),
              (this._initialClasses =
                "string" == typeof t ? t.split(/\s+/) : []),
              this._applyClasses(this._initialClasses),
              this._applyClasses(this._rawClass);
          }
          set ngClass(t) {
            this._removeClasses(this._rawClass),
              this._applyClasses(this._initialClasses),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._rawClass = "string" == typeof t ? t.split(/\s+/) : t),
              this._rawClass &&
                (Object(s.pb)(this._rawClass)
                  ? (this._iterableDiffer = this._iterableDiffers
                      .find(this._rawClass)
                      .create())
                  : (this._keyValueDiffer = this._keyValueDiffers
                      .find(this._rawClass)
                      .create()));
          }
          ngDoCheck() {
            if (this._iterableDiffer) {
              const t = this._iterableDiffer.diff(this._rawClass);
              t && this._applyIterableChanges(t);
            } else if (this._keyValueDiffer) {
              const t = this._keyValueDiffer.diff(this._rawClass);
              t && this._applyKeyValueChanges(t);
            }
          }
          _applyKeyValueChanges(t) {
            t.forEachAddedItem((t) => this._toggleClass(t.key, t.currentValue)),
              t.forEachChangedItem((t) =>
                this._toggleClass(t.key, t.currentValue)
              ),
              t.forEachRemovedItem((t) => {
                t.previousValue && this._toggleClass(t.key, !1);
              });
          }
          _applyIterableChanges(t) {
            t.forEachAddedItem((t) => {
              if ("string" != typeof t.item)
                throw new Error(
                  "NgClass can only toggle CSS classes expressed as strings, got " +
                    Object(s.ub)(t.item)
                );
              this._toggleClass(t.item, !0);
            }),
              t.forEachRemovedItem((t) => this._toggleClass(t.item, !1));
          }
          _applyClasses(t) {
            t &&
              (Array.isArray(t) || t instanceof Set
                ? t.forEach((t) => this._toggleClass(t, !0))
                : Object.keys(t).forEach((e) => this._toggleClass(e, !!t[e])));
          }
          _removeClasses(t) {
            t &&
              (Array.isArray(t) || t instanceof Set
                ? t.forEach((t) => this._toggleClass(t, !1))
                : Object.keys(t).forEach((t) => this._toggleClass(t, !1)));
          }
          _toggleClass(t, e) {
            (t = t.trim()) &&
              t.split(/\s+/g).forEach((t) => {
                e
                  ? this._renderer.addClass(this._ngEl.nativeElement, t)
                  : this._renderer.removeClass(this._ngEl.nativeElement, t);
              });
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Kb(s.s), s.Kb(s.t), s.Kb(s.l), s.Kb(s.E));
          }),
          (t.ɵdir = s.Fb({
            type: t,
            selectors: [["", "ngClass", ""]],
            inputs: { klass: ["class", "klass"], ngClass: "ngClass" },
          })),
          t
        );
      })();
      class j {
        constructor(t, e, n, s) {
          (this.$implicit = t),
            (this.ngForOf = e),
            (this.index = n),
            (this.count = s);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let P = (() => {
        class t {
          constructor(t, e, n) {
            (this._viewContainer = t),
              (this._template = e),
              (this._differs = n),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(t) {
            (this._ngForOf = t), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(t) {
            Object(s.V)() &&
              null != t &&
              "function" != typeof t &&
              console &&
              console.warn &&
              console.warn(
                `trackBy must be a function, but received ${JSON.stringify(
                  t
                )}. See https://angular.io/api/common/NgForOf#change-propagation for more information.`
              ),
              (this._trackByFn = t);
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(t) {
            t && (this._template = t);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const n = this._ngForOf;
              if (!this._differ && n)
                try {
                  this._differ = this._differs
                    .find(n)
                    .create(this.ngForTrackBy);
                } catch (e) {
                  throw new Error(
                    `Cannot find a differ supporting object '${n}' of type '${
                      ((t = n), t.name || typeof t)
                    }'. NgFor only supports binding to Iterables such as Arrays.`
                  );
                }
            }
            var t;
            if (this._differ) {
              const t = this._differ.diff(this._ngForOf);
              t && this._applyChanges(t);
            }
          }
          _applyChanges(t) {
            const e = [];
            t.forEachOperation((t, n, s) => {
              if (null == t.previousIndex) {
                const n = this._viewContainer.createEmbeddedView(
                    this._template,
                    new j(null, this._ngForOf, -1, -1),
                    null === s ? void 0 : s
                  ),
                  r = new D(t, n);
                e.push(r);
              } else if (null == s)
                this._viewContainer.remove(null === n ? void 0 : n);
              else if (null !== n) {
                const r = this._viewContainer.get(n);
                this._viewContainer.move(r, s);
                const i = new D(t, r);
                e.push(i);
              }
            });
            for (let n = 0; n < e.length; n++)
              this._perViewChange(e[n].view, e[n].record);
            for (let n = 0, s = this._viewContainer.length; n < s; n++) {
              const t = this._viewContainer.get(n);
              (t.context.index = n),
                (t.context.count = s),
                (t.context.ngForOf = this._ngForOf);
            }
            t.forEachIdentityChange((t) => {
              this._viewContainer.get(t.currentIndex).context.$implicit =
                t.item;
            });
          }
          _perViewChange(t, e) {
            t.context.$implicit = e.item;
          }
          static ngTemplateContextGuard(t, e) {
            return !0;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Kb(s.P), s.Kb(s.L), s.Kb(s.s));
          }),
          (t.ɵdir = s.Fb({
            type: t,
            selectors: [["", "ngFor", "", "ngForOf", ""]],
            inputs: {
              ngForOf: "ngForOf",
              ngForTrackBy: "ngForTrackBy",
              ngForTemplate: "ngForTemplate",
            },
          })),
          t
        );
      })();
      class D {
        constructor(t, e) {
          (this.record = t), (this.view = e);
        }
      }
      let N = (() => {
        class t {
          constructor(t, e) {
            (this._viewContainer = t),
              (this._context = new L()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = e);
          }
          set ngIf(t) {
            (this._context.$implicit = this._context.ngIf = t),
              this._updateView();
          }
          set ngIfThen(t) {
            M("ngIfThen", t),
              (this._thenTemplateRef = t),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(t) {
            M("ngIfElse", t),
              (this._elseTemplateRef = t),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )));
          }
          static ngTemplateContextGuard(t, e) {
            return !0;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Kb(s.P), s.Kb(s.L));
          }),
          (t.ɵdir = s.Fb({
            type: t,
            selectors: [["", "ngIf", ""]],
            inputs: {
              ngIf: "ngIf",
              ngIfThen: "ngIfThen",
              ngIfElse: "ngIfElse",
            },
          })),
          t
        );
      })();
      class L {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function M(t, e) {
        if (e && !e.createEmbeddedView)
          throw new Error(
            `${t} must be a TemplateRef, but received '${Object(s.ub)(e)}'.`
          );
      }
      let F = (() => {
          class t {
            transform(e) {
              if (!e) return e;
              if ("string" != typeof e)
                throw (function (t, e) {
                  return Error(
                    `InvalidPipeArgument: '${e}' for pipe '${Object(s.ub)(t)}'`
                  );
                })(t, e);
              return e.toUpperCase();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵpipe = s.Jb({ name: "uppercase", type: t, pure: !0 })),
            t
          );
        })(),
        V = (() => {
          class t {}
          return (
            (t.ɵmod = s.Ib({ type: t })),
            (t.ɵinj = s.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [{ provide: T, useClass: R }],
            })),
            t
          );
        })();
      const H = "browser";
      function U(t) {
        return t === H;
      }
      let z = (() => {
        class t {}
        return (
          (t.ɵprov = Object(s.Gb)({
            token: t,
            providedIn: "root",
            factory: () => new B(Object(s.Rb)(l), window, Object(s.Rb)(s.m)),
          })),
          t
        );
      })();
      class B {
        constructor(t, e, n) {
          (this.document = t),
            (this.window = e),
            (this.errorHandler = n),
            (this.offset = () => [0, 0]);
        }
        setOffset(t) {
          this.offset = Array.isArray(t) ? () => t : t;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.scrollX, this.window.scrollY]
            : [0, 0];
        }
        scrollToPosition(t) {
          this.supportsScrolling() && this.window.scrollTo(t[0], t[1]);
        }
        scrollToAnchor(t) {
          if (this.supportsScrolling()) {
            const e =
              this.document.getElementById(t) ||
              this.document.getElementsByName(t)[0];
            e && this.scrollToElement(e);
          }
        }
        setHistoryScrollRestoration(t) {
          if (this.supportScrollRestoration()) {
            const e = this.window.history;
            e && e.scrollRestoration && (e.scrollRestoration = t);
          }
        }
        scrollToElement(t) {
          const e = t.getBoundingClientRect(),
            n = e.left + this.window.pageXOffset,
            s = e.top + this.window.pageYOffset,
            r = this.offset();
          this.window.scrollTo(n - r[0], s - r[1]);
        }
        supportScrollRestoration() {
          try {
            if (!this.window || !this.window.scrollTo) return !1;
            const t =
              q(this.window.history) ||
              q(Object.getPrototypeOf(this.window.history));
            return !(!t || (!t.writable && !t.set));
          } catch (t) {
            return !1;
          }
        }
        supportsScrolling() {
          try {
            return !!this.window.scrollTo;
          } catch (t) {
            return !1;
          }
        }
      }
      function q(t) {
        return Object.getOwnPropertyDescriptor(t, "scrollRestoration");
      }
    },
    pLZG: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var s = n("7o/Q");
      function r(t, e) {
        return function (n) {
          return n.lift(new i(t, e));
        };
      }
      class i {
        constructor(t, e) {
          (this.predicate = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new o(t, this.predicate, this.thisArg));
        }
      }
      class o extends s.a {
        constructor(t, e, n) {
          super(t), (this.predicate = e), (this.thisArg = n), (this.count = 0);
        }
        _next(t) {
          let e;
          try {
            e = this.predicate.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          e && this.destination.next(t);
        }
      }
    },
    quSY: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      });
      var s = n("DH7j"),
        r = n("XoHu"),
        i = n("n6bG");
      const o = (() => {
        function t(t) {
          return (
            Error.call(this),
            (this.message = t
              ? `${t.length} errors occurred during unsubscription:\n${t
                  .map((t, e) => `${e + 1}) ${t.toString()}`)
                  .join("\n  ")}`
              : ""),
            (this.name = "UnsubscriptionError"),
            (this.errors = t),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      let a = (() => {
        class t {
          constructor(t) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              t && ((this._ctorUnsubscribe = !0), (this._unsubscribe = t));
          }
          unsubscribe() {
            let e;
            if (this.closed) return;
            let {
              _parentOrParents: n,
              _ctorUnsubscribe: a,
              _unsubscribe: c,
              _subscriptions: u,
            } = this;
            if (
              ((this.closed = !0),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              n instanceof t)
            )
              n.remove(this);
            else if (null !== n)
              for (let t = 0; t < n.length; ++t) n[t].remove(this);
            if (Object(i.a)(c)) {
              a && (this._unsubscribe = void 0);
              try {
                c.call(this);
              } catch (h) {
                e = h instanceof o ? l(h.errors) : [h];
              }
            }
            if (Object(s.a)(u)) {
              let t = -1,
                n = u.length;
              for (; ++t < n; ) {
                const n = u[t];
                if (Object(r.a)(n))
                  try {
                    n.unsubscribe();
                  } catch (h) {
                    (e = e || []),
                      h instanceof o ? (e = e.concat(l(h.errors))) : e.push(h);
                  }
              }
            }
            if (e) throw new o(e);
          }
          add(e) {
            let n = e;
            if (!e) return t.EMPTY;
            switch (typeof e) {
              case "function":
                n = new t(e);
              case "object":
                if (
                  n === this ||
                  n.closed ||
                  "function" != typeof n.unsubscribe
                )
                  return n;
                if (this.closed) return n.unsubscribe(), n;
                if (!(n instanceof t)) {
                  const e = n;
                  (n = new t()), (n._subscriptions = [e]);
                }
                break;
              default:
                throw new Error(
                  "unrecognized teardown " + e + " added to Subscription."
                );
            }
            let { _parentOrParents: s } = n;
            if (null === s) n._parentOrParents = this;
            else if (s instanceof t) {
              if (s === this) return n;
              n._parentOrParents = [s, this];
            } else {
              if (-1 !== s.indexOf(this)) return n;
              s.push(this);
            }
            const r = this._subscriptions;
            return null === r ? (this._subscriptions = [n]) : r.push(n), n;
          }
          remove(t) {
            const e = this._subscriptions;
            if (e) {
              const n = e.indexOf(t);
              -1 !== n && e.splice(n, 1);
            }
          }
        }
        var e;
        return (t.EMPTY = (((e = new t()).closed = !0), e)), t;
      })();
      function l(t) {
        return t.reduce((t, e) => t.concat(e instanceof o ? e.errors : e), []);
      }
    },
    sYmb: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return D;
      }),
        n.d(e, "b", function () {
          return f;
        }),
        n.d(e, "c", function () {
          return L;
        }),
        n.d(e, "d", function () {
          return N;
        }),
        n.d(e, "e", function () {
          return P;
        });
      var s = n("fXoL"),
        r = n("LRne"),
        i = n("7+OI"),
        o = n("cp0P"),
        a = n("GyhO"),
        l = n("NXyV"),
        c = n("IzEk"),
        u = n("UXun"),
        h = n("lJxs"),
        d = n("bOdf"),
        p = n("eIep");
      class f {}
      let m = (() => {
        class t extends f {
          getTranslation(t) {
            return Object(r.a)({});
          }
        }
        return (
          (t.ɵfac = function (e) {
            return g(e || t);
          }),
          (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const g = s.Pb(m);
      class _ {}
      let b = (() => {
        class t {
          handle(t) {
            return t.key;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function y(t, e) {
        if (t === e) return !0;
        if (null === t || null === e) return !1;
        if (t != t && e != e) return !0;
        let n,
          s,
          r,
          i = typeof t;
        if (i == typeof e && "object" == i) {
          if (!Array.isArray(t)) {
            if (Array.isArray(e)) return !1;
            for (s in ((r = Object.create(null)), t)) {
              if (!y(t[s], e[s])) return !1;
              r[s] = !0;
            }
            for (s in e) if (!(s in r) && void 0 !== e[s]) return !1;
            return !0;
          }
          if (!Array.isArray(e)) return !1;
          if ((n = t.length) == e.length) {
            for (s = 0; s < n; s++) if (!y(t[s], e[s])) return !1;
            return !0;
          }
        }
        return !1;
      }
      function v(t) {
        return null != t;
      }
      function w(t) {
        return t && "object" == typeof t && !Array.isArray(t);
      }
      class C {}
      let S = (() => {
        class t extends C {
          constructor() {
            super(...arguments),
              (this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g);
          }
          interpolate(t, e) {
            let n;
            return (
              (n =
                "string" == typeof t
                  ? this.interpolateString(t, e)
                  : "function" == typeof t
                  ? this.interpolateFunction(t, e)
                  : t),
              n
            );
          }
          getValue(t, e) {
            let n = "string" == typeof e ? e.split(".") : [e];
            e = "";
            do {
              (e += n.shift()),
                !v(t) || !v(t[e]) || ("object" != typeof t[e] && n.length)
                  ? n.length
                    ? (e += ".")
                    : (t = void 0)
                  : ((t = t[e]), (e = ""));
            } while (n.length);
            return t;
          }
          interpolateFunction(t, e) {
            return t(e);
          }
          interpolateString(t, e) {
            return e
              ? t.replace(this.templateMatcher, (t, n) => {
                  let s = this.getValue(e, n);
                  return v(s) ? s : t;
                })
              : t;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return E(e || t);
          }),
          (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const E = s.Pb(S);
      class O {}
      let x = (() => {
        class t extends O {
          compile(t, e) {
            return t;
          }
          compileTranslations(t, e) {
            return t;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return k(e || t);
          }),
          (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const k = s.Pb(x);
      class T {
        constructor() {
          (this.currentLang = this.defaultLang),
            (this.translations = {}),
            (this.langs = []),
            (this.onTranslationChange = new s.n()),
            (this.onLangChange = new s.n()),
            (this.onDefaultLangChange = new s.n());
        }
      }
      const R = new s.q("USE_STORE"),
        A = new s.q("USE_DEFAULT_LANG"),
        I = new s.q("DEFAULT_LANGUAGE"),
        j = new s.q("USE_EXTEND");
      let P = (() => {
          class t {
            constructor(t, e, n, r, i, o = !0, a = !1, l = !1, c) {
              (this.store = t),
                (this.currentLoader = e),
                (this.compiler = n),
                (this.parser = r),
                (this.missingTranslationHandler = i),
                (this.useDefaultLang = o),
                (this.isolate = a),
                (this.extend = l),
                (this.pending = !1),
                (this._onTranslationChange = new s.n()),
                (this._onLangChange = new s.n()),
                (this._onDefaultLangChange = new s.n()),
                (this._langs = []),
                (this._translations = {}),
                (this._translationRequests = {}),
                c && this.setDefaultLang(c);
            }
            get onTranslationChange() {
              return this.isolate
                ? this._onTranslationChange
                : this.store.onTranslationChange;
            }
            get onLangChange() {
              return this.isolate
                ? this._onLangChange
                : this.store.onLangChange;
            }
            get onDefaultLangChange() {
              return this.isolate
                ? this._onDefaultLangChange
                : this.store.onDefaultLangChange;
            }
            get defaultLang() {
              return this.isolate ? this._defaultLang : this.store.defaultLang;
            }
            set defaultLang(t) {
              this.isolate
                ? (this._defaultLang = t)
                : (this.store.defaultLang = t);
            }
            get currentLang() {
              return this.isolate ? this._currentLang : this.store.currentLang;
            }
            set currentLang(t) {
              this.isolate
                ? (this._currentLang = t)
                : (this.store.currentLang = t);
            }
            get langs() {
              return this.isolate ? this._langs : this.store.langs;
            }
            set langs(t) {
              this.isolate ? (this._langs = t) : (this.store.langs = t);
            }
            get translations() {
              return this.isolate
                ? this._translations
                : this.store.translations;
            }
            set translations(t) {
              this.isolate
                ? (this._translations = t)
                : (this.store.translations = t);
            }
            setDefaultLang(t) {
              if (t === this.defaultLang) return;
              let e = this.retrieveTranslations(t);
              void 0 !== e
                ? (null == this.defaultLang && (this.defaultLang = t),
                  e.pipe(Object(c.a)(1)).subscribe((e) => {
                    this.changeDefaultLang(t);
                  }))
                : this.changeDefaultLang(t);
            }
            getDefaultLang() {
              return this.defaultLang;
            }
            use(t) {
              if (t === this.currentLang)
                return Object(r.a)(this.translations[t]);
              let e = this.retrieveTranslations(t);
              return void 0 !== e
                ? (this.currentLang || (this.currentLang = t),
                  e.pipe(Object(c.a)(1)).subscribe((e) => {
                    this.changeLang(t);
                  }),
                  e)
                : (this.changeLang(t), Object(r.a)(this.translations[t]));
            }
            retrieveTranslations(t) {
              let e;
              return (
                (void 0 === this.translations[t] || this.extend) &&
                  ((this._translationRequests[t] =
                    this._translationRequests[t] || this.getTranslation(t)),
                  (e = this._translationRequests[t])),
                e
              );
            }
            getTranslation(t) {
              this.pending = !0;
              const e = this.currentLoader
                .getTranslation(t)
                .pipe(Object(u.a)(1), Object(c.a)(1));
              return (
                (this.loadingTranslations = e.pipe(
                  Object(h.a)((e) => this.compiler.compileTranslations(e, t)),
                  Object(u.a)(1),
                  Object(c.a)(1)
                )),
                this.loadingTranslations.subscribe({
                  next: (e) => {
                    (this.translations[t] =
                      this.extend && this.translations[t]
                        ? Object.assign(
                            Object.assign({}, e),
                            this.translations[t]
                          )
                        : e),
                      this.updateLangs(),
                      (this.pending = !1);
                  },
                  error: (t) => {
                    this.pending = !1;
                  },
                }),
                e
              );
            }
            setTranslation(t, e, n = !1) {
              (e = this.compiler.compileTranslations(e, t)),
                (this.translations[t] =
                  (n || this.extend) && this.translations[t]
                    ? (function t(e, n) {
                        let s = Object.assign({}, e);
                        return (
                          w(e) &&
                            w(n) &&
                            Object.keys(n).forEach((r) => {
                              w(n[r])
                                ? r in e
                                  ? (s[r] = t(e[r], n[r]))
                                  : Object.assign(s, { [r]: n[r] })
                                : Object.assign(s, { [r]: n[r] });
                            }),
                          s
                        );
                      })(this.translations[t], e)
                    : e),
                this.updateLangs(),
                this.onTranslationChange.emit({
                  lang: t,
                  translations: this.translations[t],
                });
            }
            getLangs() {
              return this.langs;
            }
            addLangs(t) {
              t.forEach((t) => {
                -1 === this.langs.indexOf(t) && this.langs.push(t);
              });
            }
            updateLangs() {
              this.addLangs(Object.keys(this.translations));
            }
            getParsedResult(t, e, n) {
              let s;
              if (e instanceof Array) {
                let s = {},
                  a = !1;
                for (let r of e)
                  (s[r] = this.getParsedResult(t, r, n)),
                    Object(i.a)(s[r]) && (a = !0);
                if (a) {
                  const t = e.map((t) =>
                    Object(i.a)(s[t]) ? s[t] : Object(r.a)(s[t])
                  );
                  return Object(o.a)(t).pipe(
                    Object(h.a)((t) => {
                      let n = {};
                      return (
                        t.forEach((t, s) => {
                          n[e[s]] = t;
                        }),
                        n
                      );
                    })
                  );
                }
                return s;
              }
              if (
                (t &&
                  (s = this.parser.interpolate(this.parser.getValue(t, e), n)),
                void 0 === s &&
                  null != this.defaultLang &&
                  this.defaultLang !== this.currentLang &&
                  this.useDefaultLang &&
                  (s = this.parser.interpolate(
                    this.parser.getValue(
                      this.translations[this.defaultLang],
                      e
                    ),
                    n
                  )),
                void 0 === s)
              ) {
                let t = { key: e, translateService: this };
                void 0 !== n && (t.interpolateParams = n),
                  (s = this.missingTranslationHandler.handle(t));
              }
              return void 0 !== s ? s : e;
            }
            get(t, e) {
              if (!v(t) || !t.length)
                throw new Error('Parameter "key" required');
              if (this.pending)
                return this.loadingTranslations.pipe(
                  Object(d.a)(
                    (n) => (
                      (n = this.getParsedResult(n, t, e)),
                      Object(i.a)(n) ? n : Object(r.a)(n)
                    )
                  )
                );
              {
                let n = this.getParsedResult(
                  this.translations[this.currentLang],
                  t,
                  e
                );
                return Object(i.a)(n) ? n : Object(r.a)(n);
              }
            }
            getStreamOnTranslationChange(t, e) {
              if (!v(t) || !t.length)
                throw new Error('Parameter "key" required');
              return Object(a.a)(
                Object(l.a)(() => this.get(t, e)),
                this.onTranslationChange.pipe(
                  Object(p.a)((n) => {
                    const s = this.getParsedResult(n.translations, t, e);
                    return "function" == typeof s.subscribe
                      ? s
                      : Object(r.a)(s);
                  })
                )
              );
            }
            stream(t, e) {
              if (!v(t) || !t.length)
                throw new Error('Parameter "key" required');
              return Object(a.a)(
                Object(l.a)(() => this.get(t, e)),
                this.onLangChange.pipe(
                  Object(p.a)((n) => {
                    const s = this.getParsedResult(n.translations, t, e);
                    return Object(i.a)(s) ? s : Object(r.a)(s);
                  })
                )
              );
            }
            instant(t, e) {
              if (!v(t) || !t.length)
                throw new Error('Parameter "key" required');
              let n = this.getParsedResult(
                this.translations[this.currentLang],
                t,
                e
              );
              if (Object(i.a)(n)) {
                if (t instanceof Array) {
                  let e = {};
                  return (
                    t.forEach((n, s) => {
                      e[t[s]] = t[s];
                    }),
                    e
                  );
                }
                return t;
              }
              return n;
            }
            set(t, e, n = this.currentLang) {
              (this.translations[n][t] = this.compiler.compile(e, n)),
                this.updateLangs(),
                this.onTranslationChange.emit({
                  lang: n,
                  translations: this.translations[n],
                });
            }
            changeLang(t) {
              (this.currentLang = t),
                this.onLangChange.emit({
                  lang: t,
                  translations: this.translations[t],
                }),
                null == this.defaultLang && this.changeDefaultLang(t);
            }
            changeDefaultLang(t) {
              (this.defaultLang = t),
                this.onDefaultLangChange.emit({
                  lang: t,
                  translations: this.translations[t],
                });
            }
            reloadLang(t) {
              return this.resetLang(t), this.getTranslation(t);
            }
            resetLang(t) {
              (this._translationRequests[t] = void 0),
                (this.translations[t] = void 0);
            }
            getBrowserLang() {
              if ("undefined" == typeof window || void 0 === window.navigator)
                return;
              let t = window.navigator.languages
                ? window.navigator.languages[0]
                : null;
              return (
                (t =
                  t ||
                  window.navigator.language ||
                  window.navigator.browserLanguage ||
                  window.navigator.userLanguage),
                void 0 !== t
                  ? (-1 !== t.indexOf("-") && (t = t.split("-")[0]),
                    -1 !== t.indexOf("_") && (t = t.split("_")[0]),
                    t)
                  : void 0
              );
            }
            getBrowserCultureLang() {
              if ("undefined" == typeof window || void 0 === window.navigator)
                return;
              let t = window.navigator.languages
                ? window.navigator.languages[0]
                : null;
              return (
                (t =
                  t ||
                  window.navigator.language ||
                  window.navigator.browserLanguage ||
                  window.navigator.userLanguage),
                t
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                s.Rb(T),
                s.Rb(f),
                s.Rb(O),
                s.Rb(C),
                s.Rb(_),
                s.Rb(A),
                s.Rb(R),
                s.Rb(j),
                s.Rb(I)
              );
            }),
            (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        D = (() => {
          class t {
            constructor(t, e, n) {
              (this.translateService = t),
                (this.element = e),
                (this._ref = n),
                this.onTranslationChangeSub ||
                  (this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe(
                    (t) => {
                      t.lang === this.translateService.currentLang &&
                        this.checkNodes(!0, t.translations);
                    }
                  )),
                this.onLangChangeSub ||
                  (this.onLangChangeSub = this.translateService.onLangChange.subscribe(
                    (t) => {
                      this.checkNodes(!0, t.translations);
                    }
                  )),
                this.onDefaultLangChangeSub ||
                  (this.onDefaultLangChangeSub = this.translateService.onDefaultLangChange.subscribe(
                    (t) => {
                      this.checkNodes(!0);
                    }
                  ));
            }
            set translate(t) {
              t && ((this.key = t), this.checkNodes());
            }
            set translateParams(t) {
              y(this.currentParams, t) ||
                ((this.currentParams = t), this.checkNodes(!0));
            }
            ngAfterViewChecked() {
              this.checkNodes();
            }
            checkNodes(t = !1, e) {
              let n = this.element.nativeElement.childNodes;
              n.length ||
                (this.setContent(this.element.nativeElement, this.key),
                (n = this.element.nativeElement.childNodes));
              for (let s = 0; s < n.length; ++s) {
                let r = n[s];
                if (3 === r.nodeType) {
                  let n;
                  if ((t && (r.lastKey = null), v(r.lookupKey)))
                    n = r.lookupKey;
                  else if (this.key) n = this.key;
                  else {
                    let t = this.getContent(r),
                      e = t.trim();
                    e.length &&
                      ((r.lookupKey = e),
                      t !== r.currentValue
                        ? ((n = e),
                          (r.originalContent = t || r.originalContent))
                        : r.originalContent
                        ? (n = r.originalContent.trim())
                        : t !== r.currentValue &&
                          ((n = e),
                          (r.originalContent = t || r.originalContent)));
                  }
                  this.updateValue(n, r, e);
                }
              }
            }
            updateValue(t, e, n) {
              if (t) {
                if (e.lastKey === t && this.lastParams === this.currentParams)
                  return;
                this.lastParams = this.currentParams;
                let s = (n) => {
                  n !== t && (e.lastKey = t),
                    e.originalContent ||
                      (e.originalContent = this.getContent(e)),
                    (e.currentValue = v(n) ? n : e.originalContent || t),
                    this.setContent(
                      e,
                      this.key
                        ? e.currentValue
                        : e.originalContent.replace(t, e.currentValue)
                    ),
                    this._ref.markForCheck();
                };
                if (v(n)) {
                  let e = this.translateService.getParsedResult(
                    n,
                    t,
                    this.currentParams
                  );
                  Object(i.a)(e) ? e.subscribe(s) : s(e);
                } else
                  this.translateService.get(t, this.currentParams).subscribe(s);
              }
            }
            getContent(t) {
              return v(t.textContent) ? t.textContent : t.data;
            }
            setContent(t, e) {
              v(t.textContent) ? (t.textContent = e) : (t.data = e);
            }
            ngOnDestroy() {
              this.onLangChangeSub && this.onLangChangeSub.unsubscribe(),
                this.onDefaultLangChangeSub &&
                  this.onDefaultLangChangeSub.unsubscribe(),
                this.onTranslationChangeSub &&
                  this.onTranslationChangeSub.unsubscribe();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Kb(P), s.Kb(s.l), s.Kb(s.h));
            }),
            (t.ɵdir = s.Fb({
              type: t,
              selectors: [
                ["", "translate", ""],
                ["", "ngx-translate", ""],
              ],
              inputs: {
                translate: "translate",
                translateParams: "translateParams",
              },
            })),
            t
          );
        })(),
        N = (() => {
          class t {
            constructor(t, e) {
              (this.translate = t), (this._ref = e), (this.value = "");
            }
            updateValue(t, e, n) {
              let s = (e) => {
                (this.value = void 0 !== e ? e : t),
                  (this.lastKey = t),
                  this._ref.markForCheck();
              };
              if (n) {
                let r = this.translate.getParsedResult(n, t, e);
                Object(i.a)(r.subscribe) ? r.subscribe(s) : s(r);
              }
              this.translate.get(t, e).subscribe(s);
            }
            transform(t, ...e) {
              if (!t || !t.length) return t;
              if (y(t, this.lastKey) && y(e, this.lastParams))
                return this.value;
              let n;
              if (v(e[0]) && e.length)
                if ("string" == typeof e[0] && e[0].length) {
                  let t = e[0]
                    .replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g, '"$2":')
                    .replace(/:(\s)?(\')(.*?)(\')/g, ':"$3"');
                  try {
                    n = JSON.parse(t);
                  } catch (s) {
                    throw new SyntaxError(
                      "Wrong parameter in TranslatePipe. Expected a valid Object, received: " +
                        e[0]
                    );
                  }
                } else
                  "object" != typeof e[0] || Array.isArray(e[0]) || (n = e[0]);
              return (
                (this.lastKey = t),
                (this.lastParams = e),
                this.updateValue(t, n),
                this._dispose(),
                this.onTranslationChange ||
                  (this.onTranslationChange = this.translate.onTranslationChange.subscribe(
                    (e) => {
                      this.lastKey &&
                        e.lang === this.translate.currentLang &&
                        ((this.lastKey = null),
                        this.updateValue(t, n, e.translations));
                    }
                  )),
                this.onLangChange ||
                  (this.onLangChange = this.translate.onLangChange.subscribe(
                    (e) => {
                      this.lastKey &&
                        ((this.lastKey = null),
                        this.updateValue(t, n, e.translations));
                    }
                  )),
                this.onDefaultLangChange ||
                  (this.onDefaultLangChange = this.translate.onDefaultLangChange.subscribe(
                    () => {
                      this.lastKey &&
                        ((this.lastKey = null), this.updateValue(t, n));
                    }
                  )),
                this.value
              );
            }
            _dispose() {
              void 0 !== this.onTranslationChange &&
                (this.onTranslationChange.unsubscribe(),
                (this.onTranslationChange = void 0)),
                void 0 !== this.onLangChange &&
                  (this.onLangChange.unsubscribe(),
                  (this.onLangChange = void 0)),
                void 0 !== this.onDefaultLangChange &&
                  (this.onDefaultLangChange.unsubscribe(),
                  (this.onDefaultLangChange = void 0));
            }
            ngOnDestroy() {
              this._dispose();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Kb(P), s.Tb());
            }),
            (t.ɵpipe = s.Jb({ name: "translate", type: t, pure: !1 })),
            (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        L = (() => {
          class t {
            static forRoot(e = {}) {
              return {
                ngModule: t,
                providers: [
                  e.loader || { provide: f, useClass: m },
                  e.compiler || { provide: O, useClass: x },
                  e.parser || { provide: C, useClass: S },
                  e.missingTranslationHandler || { provide: _, useClass: b },
                  T,
                  { provide: R, useValue: e.isolate },
                  { provide: A, useValue: e.useDefaultLang },
                  { provide: j, useValue: e.extend },
                  { provide: I, useValue: e.defaultLanguage },
                  P,
                ],
              };
            }
            static forChild(e = {}) {
              return {
                ngModule: t,
                providers: [
                  e.loader || { provide: f, useClass: m },
                  e.compiler || { provide: O, useClass: x },
                  e.parser || { provide: C, useClass: S },
                  e.missingTranslationHandler || { provide: _, useClass: b },
                  { provide: R, useValue: e.isolate },
                  { provide: A, useValue: e.useDefaultLang },
                  { provide: j, useValue: e.extend },
                  { provide: I, useValue: e.defaultLanguage },
                  P,
                ],
              };
            }
          }
          return (
            (t.ɵmod = s.Ib({ type: t })),
            (t.ɵinj = s.Hb({
              factory: function (e) {
                return new (e || t)();
              },
            })),
            t
          );
        })();
    },
    tyNb: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return gn;
      }),
        n.d(e, "b", function () {
          return yn;
        }),
        n.d(e, "c", function () {
          return An;
        }),
        n.d(e, "d", function () {
          return vn;
        });
      var s = n("ofXK"),
        r = n("fXoL"),
        i = n("LRne"),
        o = n("Cfvw"),
        a = n("2Vo4"),
        l = n("z+Ro"),
        c = n("DH7j"),
        u = n("7o/Q");
      class h extends u.a {
        notifyNext(t, e, n, s, r) {
          this.destination.next(e);
        }
        notifyError(t, e) {
          this.destination.error(t);
        }
        notifyComplete(t) {
          this.destination.complete();
        }
      }
      class d extends u.a {
        constructor(t, e, n) {
          super(),
            (this.parent = t),
            (this.outerValue = e),
            (this.outerIndex = n),
            (this.index = 0);
        }
        _next(t) {
          this.parent.notifyNext(
            this.outerValue,
            t,
            this.outerIndex,
            this.index++,
            this
          );
        }
        _error(t) {
          this.parent.notifyError(t, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
      var p = n("SeVD"),
        f = n("HDdC");
      function m(t, e, n, s, r = new d(t, n, s)) {
        if (!r.closed)
          return e instanceof f.a ? e.subscribe(r) : Object(p.a)(e)(r);
      }
      var g = n("yCtX");
      const _ = {};
      class b {
        constructor(t) {
          this.resultSelector = t;
        }
        call(t, e) {
          return e.subscribe(new y(t, this.resultSelector));
        }
      }
      class y extends h {
        constructor(t, e) {
          super(t),
            (this.resultSelector = e),
            (this.active = 0),
            (this.values = []),
            (this.observables = []);
        }
        _next(t) {
          this.values.push(_), this.observables.push(t);
        }
        _complete() {
          const t = this.observables,
            e = t.length;
          if (0 === e) this.destination.complete();
          else {
            (this.active = e), (this.toRespond = e);
            for (let n = 0; n < e; n++) this.add(m(this, t[n], void 0, n));
          }
        }
        notifyComplete(t) {
          0 == (this.active -= 1) && this.destination.complete();
        }
        notifyNext(t, e, n) {
          const s = this.values,
            r = this.toRespond
              ? s[n] === _
                ? --this.toRespond
                : this.toRespond
              : 0;
          (s[n] = e),
            0 === r &&
              (this.resultSelector
                ? this._tryResultSelector(s)
                : this.destination.next(s.slice()));
        }
        _tryResultSelector(t) {
          let e;
          try {
            e = this.resultSelector.apply(this, t);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
      const v = (() => {
        function t() {
          return (
            Error.call(this),
            (this.message = "no elements in sequence"),
            (this.name = "EmptyError"),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      var w = n("NXyV"),
        C = n("EY2u"),
        S = n("XNiG"),
        E = n("lJxs"),
        O = n("0EUg"),
        x = n("pLZG"),
        k = n("4I5i");
      function T(t) {
        return function (e) {
          return 0 === t ? Object(C.b)() : e.lift(new R(t));
        };
      }
      class R {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new k.a();
        }
        call(t, e) {
          return e.subscribe(new A(t, this.total));
        }
      }
      class A extends u.a {
        constructor(t, e) {
          super(t),
            (this.total = e),
            (this.ring = new Array()),
            (this.count = 0);
        }
        _next(t) {
          const e = this.ring,
            n = this.total,
            s = this.count++;
          e.length < n ? e.push(t) : (e[s % n] = t);
        }
        _complete() {
          const t = this.destination;
          let e = this.count;
          if (e > 0) {
            const n = this.count >= this.total ? this.total : this.count,
              s = this.ring;
            for (let r = 0; r < n; r++) {
              const r = e++ % n;
              t.next(s[r]);
            }
          }
          t.complete();
        }
      }
      function I(t = D) {
        return (e) => e.lift(new j(t));
      }
      class j {
        constructor(t) {
          this.errorFactory = t;
        }
        call(t, e) {
          return e.subscribe(new P(t, this.errorFactory));
        }
      }
      class P extends u.a {
        constructor(t, e) {
          super(t), (this.errorFactory = e), (this.hasValue = !1);
        }
        _next(t) {
          (this.hasValue = !0), this.destination.next(t);
        }
        _complete() {
          if (this.hasValue) return this.destination.complete();
          {
            let e;
            try {
              e = this.errorFactory();
            } catch (t) {
              e = t;
            }
            this.destination.error(e);
          }
        }
      }
      function D() {
        return new v();
      }
      function N(t = null) {
        return (e) => e.lift(new L(t));
      }
      class L {
        constructor(t) {
          this.defaultValue = t;
        }
        call(t, e) {
          return e.subscribe(new M(t, this.defaultValue));
        }
      }
      class M extends u.a {
        constructor(t, e) {
          super(t), (this.defaultValue = e), (this.isEmpty = !0);
        }
        _next(t) {
          (this.isEmpty = !1), this.destination.next(t);
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue),
            this.destination.complete();
        }
      }
      var F = n("SpAZ"),
        V = n("eIep"),
        H = n("IzEk"),
        U = n("JX91");
      class z {
        constructor(t, e, n = !1) {
          (this.accumulator = t), (this.seed = e), (this.hasSeed = n);
        }
        call(t, e) {
          return e.subscribe(
            new B(t, this.accumulator, this.seed, this.hasSeed)
          );
        }
      }
      class B extends u.a {
        constructor(t, e, n, s) {
          super(t),
            (this.accumulator = e),
            (this._seed = n),
            (this.hasSeed = s),
            (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(t) {
          (this.hasSeed = !0), (this._seed = t);
        }
        _next(t) {
          if (this.hasSeed) return this._tryNext(t);
          (this.seed = t), this.destination.next(t);
        }
        _tryNext(t) {
          const e = this.index++;
          let n;
          try {
            n = this.accumulator(this.seed, t, e);
          } catch (s) {
            this.destination.error(s);
          }
          (this.seed = n), this.destination.next(n);
        }
      }
      var q = n("JIr8"),
        $ = n("bOdf");
      function K(t, e) {
        const n = arguments.length >= 2;
        return (s) =>
          s.pipe(
            t ? Object(x.a)((e, n) => t(e, n, s)) : F.a,
            Object(H.a)(1),
            n ? N(e) : I(() => new v())
          );
      }
      var W = n("5+tZ"),
        G = n("vkgz"),
        Q = n("nYR2"),
        Z = n("bHdf");
      class Y {
        constructor(t, e) {
          (this.id = t), (this.url = e);
        }
      }
      class X extends Y {
        constructor(t, e, n = "imperative", s = null) {
          super(t, e), (this.navigationTrigger = n), (this.restoredState = s);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class J extends Y {
        constructor(t, e, n) {
          super(t, e), (this.urlAfterRedirects = n);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class tt extends Y {
        constructor(t, e, n) {
          super(t, e), (this.reason = n);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class et extends Y {
        constructor(t, e, n) {
          super(t, e), (this.error = n);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class nt extends Y {
        constructor(t, e, n, s) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = s);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class st extends Y {
        constructor(t, e, n, s) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = s);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class rt extends Y {
        constructor(t, e, n, s, r) {
          super(t, e),
            (this.urlAfterRedirects = n),
            (this.state = s),
            (this.shouldActivate = r);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class it extends Y {
        constructor(t, e, n, s) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = s);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class ot extends Y {
        constructor(t, e, n, s) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = s);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class at {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class lt {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class ct {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class ut {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class ht {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class dt {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class pt {
        constructor(t, e, n) {
          (this.routerEvent = t), (this.position = e), (this.anchor = n);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      const ft = "primary";
      class mt {
        constructor(t) {
          this.params = t || {};
        }
        has(t) {
          return Object.prototype.hasOwnProperty.call(this.params, t);
        }
        get(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e[0] : e;
          }
          return null;
        }
        getAll(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e : [e];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function gt(t) {
        return new mt(t);
      }
      function _t(t) {
        const e = Error("NavigationCancelingError: " + t);
        return (e.ngNavigationCancelingError = !0), e;
      }
      function bt(t, e, n) {
        const s = n.path.split("/");
        if (s.length > t.length) return null;
        if ("full" === n.pathMatch && (e.hasChildren() || s.length < t.length))
          return null;
        const r = {};
        for (let i = 0; i < s.length; i++) {
          const e = s[i],
            n = t[i];
          if (e.startsWith(":")) r[e.substring(1)] = n;
          else if (e !== n.path) return null;
        }
        return { consumed: t.slice(0, s.length), posParams: r };
      }
      function yt(t, e) {
        const n = Object.keys(t),
          s = Object.keys(e);
        if (!n || !s || n.length != s.length) return !1;
        let r;
        for (let i = 0; i < n.length; i++)
          if (((r = n[i]), !vt(t[r], e[r]))) return !1;
        return !0;
      }
      function vt(t, e) {
        if (Array.isArray(t) && Array.isArray(e)) {
          if (t.length !== e.length) return !1;
          const n = [...t].sort(),
            s = [...e].sort();
          return n.every((t, e) => s[e] === t);
        }
        return t === e;
      }
      function wt(t) {
        return Array.prototype.concat.apply([], t);
      }
      function Ct(t) {
        return t.length > 0 ? t[t.length - 1] : null;
      }
      function St(t, e) {
        for (const n in t) t.hasOwnProperty(n) && e(t[n], n);
      }
      function Et(t) {
        return Object(r.qb)(t)
          ? t
          : Object(r.rb)(t)
          ? Object(o.a)(Promise.resolve(t))
          : Object(i.a)(t);
      }
      function Ot(t, e, n) {
        return n
          ? (function (t, e) {
              return yt(t, e);
            })(t.queryParams, e.queryParams) &&
              (function t(e, n) {
                if (!Rt(e.segments, n.segments)) return !1;
                if (e.numberOfChildren !== n.numberOfChildren) return !1;
                for (const s in n.children) {
                  if (!e.children[s]) return !1;
                  if (!t(e.children[s], n.children[s])) return !1;
                }
                return !0;
              })(t.root, e.root)
          : (function (t, e) {
              return (
                Object.keys(e).length <= Object.keys(t).length &&
                Object.keys(e).every((n) => vt(t[n], e[n]))
              );
            })(t.queryParams, e.queryParams) &&
              (function t(e, n) {
                return (function e(n, s, r) {
                  if (n.segments.length > r.length)
                    return (
                      !!Rt(n.segments.slice(0, r.length), r) && !s.hasChildren()
                    );
                  if (n.segments.length === r.length) {
                    if (!Rt(n.segments, r)) return !1;
                    for (const e in s.children) {
                      if (!n.children[e]) return !1;
                      if (!t(n.children[e], s.children[e])) return !1;
                    }
                    return !0;
                  }
                  {
                    const t = r.slice(0, n.segments.length),
                      i = r.slice(n.segments.length);
                    return (
                      !!Rt(n.segments, t) &&
                      !!n.children.primary &&
                      e(n.children.primary, s, i)
                    );
                  }
                })(e, n, n.segments);
              })(t.root, e.root);
      }
      class xt {
        constructor(t, e, n) {
          (this.root = t), (this.queryParams = e), (this.fragment = n);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = gt(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return Pt.serialize(this);
        }
      }
      class kt {
        constructor(t, e) {
          (this.segments = t),
            (this.children = e),
            (this.parent = null),
            St(e, (t, e) => (t.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return Dt(this);
        }
      }
      class Tt {
        constructor(t, e) {
          (this.path = t), (this.parameters = e);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = gt(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return Ht(this);
        }
      }
      function Rt(t, e) {
        return t.length === e.length && t.every((t, n) => t.path === e[n].path);
      }
      function At(t, e) {
        let n = [];
        return (
          St(t.children, (t, s) => {
            s === ft && (n = n.concat(e(t, s)));
          }),
          St(t.children, (t, s) => {
            s !== ft && (n = n.concat(e(t, s)));
          }),
          n
        );
      }
      class It {}
      class jt {
        parse(t) {
          const e = new $t(t);
          return new xt(
            e.parseRootSegment(),
            e.parseQueryParams(),
            e.parseFragment()
          );
        }
        serialize(t) {
          return `${
            "/" +
            (function t(e, n) {
              if (!e.hasChildren()) return Dt(e);
              if (n) {
                const n = e.children.primary ? t(e.children.primary, !1) : "",
                  s = [];
                return (
                  St(e.children, (e, n) => {
                    n !== ft && s.push(`${n}:${t(e, !1)}`);
                  }),
                  s.length > 0 ? `${n}(${s.join("//")})` : n
                );
              }
              {
                const n = At(e, (n, s) =>
                  s === ft ? [t(e.children.primary, !1)] : [`${s}:${t(n, !1)}`]
                );
                return 1 === Object.keys(e.children).length &&
                  null != e.children.primary
                  ? `${Dt(e)}/${n[0]}`
                  : `${Dt(e)}/(${n.join("//")})`;
              }
            })(t.root, !0)
          }${(function (t) {
            const e = Object.keys(t).map((e) => {
              const n = t[e];
              return Array.isArray(n)
                ? n.map((t) => `${Lt(e)}=${Lt(t)}`).join("&")
                : `${Lt(e)}=${Lt(n)}`;
            });
            return e.length ? "?" + e.join("&") : "";
          })(t.queryParams)}${
            "string" == typeof t.fragment ? "#" + encodeURI(t.fragment) : ""
          }`;
        }
      }
      const Pt = new jt();
      function Dt(t) {
        return t.segments.map((t) => Ht(t)).join("/");
      }
      function Nt(t) {
        return encodeURIComponent(t)
          .replace(/%40/g, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",");
      }
      function Lt(t) {
        return Nt(t).replace(/%3B/gi, ";");
      }
      function Mt(t) {
        return Nt(t)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29")
          .replace(/%26/gi, "&");
      }
      function Ft(t) {
        return decodeURIComponent(t);
      }
      function Vt(t) {
        return Ft(t.replace(/\+/g, "%20"));
      }
      function Ht(t) {
        return `${Mt(t.path)}${
          ((e = t.parameters),
          Object.keys(e)
            .map((t) => `;${Mt(t)}=${Mt(e[t])}`)
            .join(""))
        }`;
        var e;
      }
      const Ut = /^[^\/()?;=#]+/;
      function zt(t) {
        const e = t.match(Ut);
        return e ? e[0] : "";
      }
      const Bt = /^[^=?&#]+/,
        qt = /^[^?&#]+/;
      class $t {
        constructor(t) {
          (this.url = t), (this.remaining = t);
        }
        parseRootSegment() {
          return (
            this.consumeOptional("/"),
            "" === this.remaining ||
            this.peekStartsWith("?") ||
            this.peekStartsWith("#")
              ? new kt([], {})
              : new kt([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const t = {};
          if (this.consumeOptional("?"))
            do {
              this.parseQueryParam(t);
            } while (this.consumeOptional("&"));
          return t;
        }
        parseFragment() {
          return this.consumeOptional("#")
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ("" === this.remaining) return {};
          this.consumeOptional("/");
          const t = [];
          for (
            this.peekStartsWith("(") || t.push(this.parseSegment());
            this.peekStartsWith("/") &&
            !this.peekStartsWith("//") &&
            !this.peekStartsWith("/(");

          )
            this.capture("/"), t.push(this.parseSegment());
          let e = {};
          this.peekStartsWith("/(") &&
            (this.capture("/"), (e = this.parseParens(!0)));
          let n = {};
          return (
            this.peekStartsWith("(") && (n = this.parseParens(!1)),
            (t.length > 0 || Object.keys(e).length > 0) &&
              (n.primary = new kt(t, e)),
            n
          );
        }
        parseSegment() {
          const t = zt(this.remaining);
          if ("" === t && this.peekStartsWith(";"))
            throw new Error(
              `Empty path url segment cannot have parameters: '${this.remaining}'.`
            );
          return this.capture(t), new Tt(Ft(t), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const t = {};
          for (; this.consumeOptional(";"); ) this.parseParam(t);
          return t;
        }
        parseParam(t) {
          const e = zt(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = "";
          if (this.consumeOptional("=")) {
            const t = zt(this.remaining);
            t && ((n = t), this.capture(n));
          }
          t[Ft(e)] = Ft(n);
        }
        parseQueryParam(t) {
          const e = (function (t) {
            const e = t.match(Bt);
            return e ? e[0] : "";
          })(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = "";
          if (this.consumeOptional("=")) {
            const t = (function (t) {
              const e = t.match(qt);
              return e ? e[0] : "";
            })(this.remaining);
            t && ((n = t), this.capture(n));
          }
          const s = Vt(e),
            r = Vt(n);
          if (t.hasOwnProperty(s)) {
            let e = t[s];
            Array.isArray(e) || ((e = [e]), (t[s] = e)), e.push(r);
          } else t[s] = r;
        }
        parseParens(t) {
          const e = {};
          for (
            this.capture("(");
            !this.consumeOptional(")") && this.remaining.length > 0;

          ) {
            const n = zt(this.remaining),
              s = this.remaining[n.length];
            if ("/" !== s && ")" !== s && ";" !== s)
              throw new Error(`Cannot parse url '${this.url}'`);
            let r = void 0;
            n.indexOf(":") > -1
              ? ((r = n.substr(0, n.indexOf(":"))),
                this.capture(r),
                this.capture(":"))
              : t && (r = ft);
            const i = this.parseChildren();
            (e[r] = 1 === Object.keys(i).length ? i.primary : new kt([], i)),
              this.consumeOptional("//");
          }
          return e;
        }
        peekStartsWith(t) {
          return this.remaining.startsWith(t);
        }
        consumeOptional(t) {
          return (
            !!this.peekStartsWith(t) &&
            ((this.remaining = this.remaining.substring(t.length)), !0)
          );
        }
        capture(t) {
          if (!this.consumeOptional(t)) throw new Error(`Expected "${t}".`);
        }
      }
      class Kt {
        constructor(t) {
          this._root = t;
        }
        get root() {
          return this._root.value;
        }
        parent(t) {
          const e = this.pathFromRoot(t);
          return e.length > 1 ? e[e.length - 2] : null;
        }
        children(t) {
          const e = Wt(t, this._root);
          return e ? e.children.map((t) => t.value) : [];
        }
        firstChild(t) {
          const e = Wt(t, this._root);
          return e && e.children.length > 0 ? e.children[0].value : null;
        }
        siblings(t) {
          const e = Gt(t, this._root);
          return e.length < 2
            ? []
            : e[e.length - 2].children
                .map((t) => t.value)
                .filter((e) => e !== t);
        }
        pathFromRoot(t) {
          return Gt(t, this._root).map((t) => t.value);
        }
      }
      function Wt(t, e) {
        if (t === e.value) return e;
        for (const n of e.children) {
          const e = Wt(t, n);
          if (e) return e;
        }
        return null;
      }
      function Gt(t, e) {
        if (t === e.value) return [e];
        for (const n of e.children) {
          const s = Gt(t, n);
          if (s.length) return s.unshift(e), s;
        }
        return [];
      }
      class Qt {
        constructor(t, e) {
          (this.value = t), (this.children = e);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function Zt(t) {
        const e = {};
        return t && t.children.forEach((t) => (e[t.value.outlet] = t)), e;
      }
      class Yt extends Kt {
        constructor(t, e) {
          super(t), (this.snapshot = e), se(this, t);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function Xt(t, e) {
        const n = (function (t, e) {
            const n = new ee([], {}, {}, "", {}, ft, e, null, t.root, -1, {});
            return new ne("", new Qt(n, []));
          })(t, e),
          s = new a.a([new Tt("", {})]),
          r = new a.a({}),
          i = new a.a({}),
          o = new a.a({}),
          l = new a.a(""),
          c = new Jt(s, r, o, l, i, ft, e, n.root);
        return (c.snapshot = n.root), new Yt(new Qt(c, []), n);
      }
      class Jt {
        constructor(t, e, n, s, r, i, o, a) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = s),
            (this.data = r),
            (this.outlet = i),
            (this.component = o),
            (this._futureSnapshot = a);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe(Object(E.a)((t) => gt(t)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(
                Object(E.a)((t) => gt(t))
              )),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function te(t, e = "emptyOnly") {
        const n = t.pathFromRoot;
        let s = 0;
        if ("always" !== e)
          for (s = n.length - 1; s >= 1; ) {
            const t = n[s],
              e = n[s - 1];
            if (t.routeConfig && "" === t.routeConfig.path) s--;
            else {
              if (e.component) break;
              s--;
            }
          }
        return (function (t) {
          return t.reduce(
            (t, e) => ({
              params: Object.assign(Object.assign({}, t.params), e.params),
              data: Object.assign(Object.assign({}, t.data), e.data),
              resolve: Object.assign(
                Object.assign({}, t.resolve),
                e._resolvedData
              ),
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(n.slice(s));
      }
      class ee {
        constructor(t, e, n, s, r, i, o, a, l, c, u) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = s),
            (this.data = r),
            (this.outlet = i),
            (this.component = o),
            (this.routeConfig = a),
            (this._urlSegment = l),
            (this._lastPathIndex = c),
            (this._resolve = u);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = gt(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = gt(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map((t) => t.toString())
            .join("/")}', path:'${
            this.routeConfig ? this.routeConfig.path : ""
          }')`;
        }
      }
      class ne extends Kt {
        constructor(t, e) {
          super(e), (this.url = t), se(this, e);
        }
        toString() {
          return re(this._root);
        }
      }
      function se(t, e) {
        (e.value._routerState = t), e.children.forEach((e) => se(t, e));
      }
      function re(t) {
        const e =
          t.children.length > 0 ? ` { ${t.children.map(re).join(", ")} } ` : "";
        return `${t.value}${e}`;
      }
      function ie(t) {
        if (t.snapshot) {
          const e = t.snapshot,
            n = t._futureSnapshot;
          (t.snapshot = n),
            yt(e.queryParams, n.queryParams) ||
              t.queryParams.next(n.queryParams),
            e.fragment !== n.fragment && t.fragment.next(n.fragment),
            yt(e.params, n.params) || t.params.next(n.params),
            (function (t, e) {
              if (t.length !== e.length) return !1;
              for (let n = 0; n < t.length; ++n) if (!yt(t[n], e[n])) return !1;
              return !0;
            })(e.url, n.url) || t.url.next(n.url),
            yt(e.data, n.data) || t.data.next(n.data);
        } else
          (t.snapshot = t._futureSnapshot), t.data.next(t._futureSnapshot.data);
      }
      function oe(t, e) {
        var n, s;
        return (
          yt(t.params, e.params) &&
          Rt((n = t.url), (s = e.url)) &&
          n.every((t, e) => yt(t.parameters, s[e].parameters)) &&
          !(!t.parent != !e.parent) &&
          (!t.parent || oe(t.parent, e.parent))
        );
      }
      function ae(t) {
        return (
          "object" == typeof t && null != t && !t.outlets && !t.segmentPath
        );
      }
      function le(t) {
        return "object" == typeof t && null != t && t.outlets;
      }
      function ce(t, e, n, s, r) {
        let i = {};
        return (
          s &&
            St(s, (t, e) => {
              i[e] = Array.isArray(t) ? t.map((t) => "" + t) : "" + t;
            }),
          new xt(
            n.root === t
              ? e
              : (function t(e, n, s) {
                  const r = {};
                  return (
                    St(e.children, (e, i) => {
                      r[i] = e === n ? s : t(e, n, s);
                    }),
                    new kt(e.segments, r)
                  );
                })(n.root, t, e),
            i,
            r
          )
        );
      }
      class ue {
        constructor(t, e, n) {
          if (
            ((this.isAbsolute = t),
            (this.numberOfDoubleDots = e),
            (this.commands = n),
            t && n.length > 0 && ae(n[0]))
          )
            throw new Error("Root segment cannot have matrix parameters");
          const s = n.find(le);
          if (s && s !== Ct(n))
            throw new Error("{outlets:{}} has to be the last command");
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            "/" == this.commands[0]
          );
        }
      }
      class he {
        constructor(t, e, n) {
          (this.segmentGroup = t), (this.processChildren = e), (this.index = n);
        }
      }
      function de(t, e, n) {
        if (
          (t || (t = new kt([], {})),
          0 === t.segments.length && t.hasChildren())
        )
          return pe(t, e, n);
        const s = (function (t, e, n) {
            let s = 0,
              r = e;
            const i = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; r < t.segments.length; ) {
              if (s >= n.length) return i;
              const e = t.segments[r],
                o = n[s];
              if (le(o)) break;
              const a = "" + o,
                l = s < n.length - 1 ? n[s + 1] : null;
              if (r > 0 && void 0 === a) break;
              if (a && l && "object" == typeof l && void 0 === l.outlets) {
                if (!_e(a, l, e)) return i;
                s += 2;
              } else {
                if (!_e(a, {}, e)) return i;
                s++;
              }
              r++;
            }
            return { match: !0, pathIndex: r, commandIndex: s };
          })(t, e, n),
          r = n.slice(s.commandIndex);
        if (s.match && s.pathIndex < t.segments.length) {
          const e = new kt(t.segments.slice(0, s.pathIndex), {});
          return (
            (e.children.primary = new kt(
              t.segments.slice(s.pathIndex),
              t.children
            )),
            pe(e, 0, r)
          );
        }
        return s.match && 0 === r.length
          ? new kt(t.segments, {})
          : s.match && !t.hasChildren()
          ? fe(t, e, n)
          : s.match
          ? pe(t, 0, r)
          : fe(t, e, n);
      }
      function pe(t, e, n) {
        if (0 === n.length) return new kt(t.segments, {});
        {
          const s = (function (t) {
              return le(t[0]) ? t[0].outlets : { [ft]: t };
            })(n),
            r = {};
          return (
            St(s, (n, s) => {
              null !== n && (r[s] = de(t.children[s], e, n));
            }),
            St(t.children, (t, e) => {
              void 0 === s[e] && (r[e] = t);
            }),
            new kt(t.segments, r)
          );
        }
      }
      function fe(t, e, n) {
        const s = t.segments.slice(0, e);
        let r = 0;
        for (; r < n.length; ) {
          const i = n[r];
          if (le(i)) {
            const t = me(i.outlets);
            return new kt(s, t);
          }
          if (0 === r && ae(n[0])) {
            s.push(new Tt(t.segments[e].path, n[0])), r++;
            continue;
          }
          const o = le(i) ? i.outlets.primary : "" + i,
            a = r < n.length - 1 ? n[r + 1] : null;
          o && a && ae(a)
            ? (s.push(new Tt(o, ge(a))), (r += 2))
            : (s.push(new Tt(o, {})), r++);
        }
        return new kt(s, {});
      }
      function me(t) {
        const e = {};
        return (
          St(t, (t, n) => {
            null !== t && (e[n] = fe(new kt([], {}), 0, t));
          }),
          e
        );
      }
      function ge(t) {
        const e = {};
        return St(t, (t, n) => (e[n] = "" + t)), e;
      }
      function _e(t, e, n) {
        return t == n.path && yt(e, n.parameters);
      }
      class be {
        constructor(t, e, n, s) {
          (this.routeReuseStrategy = t),
            (this.futureState = e),
            (this.currState = n),
            (this.forwardEvent = s);
        }
        activate(t) {
          const e = this.futureState._root,
            n = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(e, n, t),
            ie(this.futureState.root),
            this.activateChildRoutes(e, n, t);
        }
        deactivateChildRoutes(t, e, n) {
          const s = Zt(e);
          t.children.forEach((t) => {
            const e = t.value.outlet;
            this.deactivateRoutes(t, s[e], n), delete s[e];
          }),
            St(s, (t, e) => {
              this.deactivateRouteAndItsChildren(t, n);
            });
        }
        deactivateRoutes(t, e, n) {
          const s = t.value,
            r = e ? e.value : null;
          if (s === r)
            if (s.component) {
              const r = n.getContext(s.outlet);
              r && this.deactivateChildRoutes(t, e, r.children);
            } else this.deactivateChildRoutes(t, e, n);
          else r && this.deactivateRouteAndItsChildren(e, n);
        }
        deactivateRouteAndItsChildren(t, e) {
          this.routeReuseStrategy.shouldDetach(t.value.snapshot)
            ? this.detachAndStoreRouteSubtree(t, e)
            : this.deactivateRouteAndOutlet(t, e);
        }
        detachAndStoreRouteSubtree(t, e) {
          const n = e.getContext(t.value.outlet);
          if (n && n.outlet) {
            const e = n.outlet.detach(),
              s = n.children.onOutletDeactivated();
            this.routeReuseStrategy.store(t.value.snapshot, {
              componentRef: e,
              route: t,
              contexts: s,
            });
          }
        }
        deactivateRouteAndOutlet(t, e) {
          const n = e.getContext(t.value.outlet);
          if (n) {
            const s = Zt(t),
              r = t.value.component ? n.children : e;
            St(s, (t, e) => this.deactivateRouteAndItsChildren(t, r)),
              n.outlet &&
                (n.outlet.deactivate(), n.children.onOutletDeactivated());
          }
        }
        activateChildRoutes(t, e, n) {
          const s = Zt(e);
          t.children.forEach((t) => {
            this.activateRoutes(t, s[t.value.outlet], n),
              this.forwardEvent(new dt(t.value.snapshot));
          }),
            t.children.length && this.forwardEvent(new ut(t.value.snapshot));
        }
        activateRoutes(t, e, n) {
          const s = t.value,
            r = e ? e.value : null;
          if ((ie(s), s === r))
            if (s.component) {
              const r = n.getOrCreateContext(s.outlet);
              this.activateChildRoutes(t, e, r.children);
            } else this.activateChildRoutes(t, e, n);
          else if (s.component) {
            const e = n.getOrCreateContext(s.outlet);
            if (this.routeReuseStrategy.shouldAttach(s.snapshot)) {
              const t = this.routeReuseStrategy.retrieve(s.snapshot);
              this.routeReuseStrategy.store(s.snapshot, null),
                e.children.onOutletReAttached(t.contexts),
                (e.attachRef = t.componentRef),
                (e.route = t.route.value),
                e.outlet && e.outlet.attach(t.componentRef, t.route.value),
                ye(t.route);
            } else {
              const n = (function (t) {
                  for (let e = t.parent; e; e = e.parent) {
                    const t = e.routeConfig;
                    if (t && t._loadedConfig) return t._loadedConfig;
                    if (t && t.component) return null;
                  }
                  return null;
                })(s.snapshot),
                r = n ? n.module.componentFactoryResolver : null;
              (e.attachRef = null),
                (e.route = s),
                (e.resolver = r),
                e.outlet && e.outlet.activateWith(s, r),
                this.activateChildRoutes(t, null, e.children);
            }
          } else this.activateChildRoutes(t, null, n);
        }
      }
      function ye(t) {
        ie(t.value), t.children.forEach(ye);
      }
      class ve {
        constructor(t, e) {
          (this.routes = t), (this.module = e);
        }
      }
      function we(t) {
        return "function" == typeof t;
      }
      function Ce(t) {
        return t instanceof xt;
      }
      const Se = Symbol("INITIAL_VALUE");
      function Ee() {
        return Object(V.a)((t) =>
          (function (...t) {
            let e = void 0,
              n = void 0;
            return (
              Object(l.a)(t[t.length - 1]) && (n = t.pop()),
              "function" == typeof t[t.length - 1] && (e = t.pop()),
              1 === t.length && Object(c.a)(t[0]) && (t = t[0]),
              Object(g.a)(t, n).lift(new b(e))
            );
          })(...t.map((t) => t.pipe(Object(H.a)(1), Object(U.a)(Se)))).pipe(
            (function (t, e) {
              let n = !1;
              return (
                arguments.length >= 2 && (n = !0),
                function (s) {
                  return s.lift(new z(t, e, n));
                }
              );
            })((t, e) => {
              let n = !1;
              return e.reduce((t, s, r) => {
                if (t !== Se) return t;
                if ((s === Se && (n = !0), !n)) {
                  if (!1 === s) return s;
                  if (r === e.length - 1 || Ce(s)) return s;
                }
                return t;
              }, t);
            }, Se),
            Object(x.a)((t) => t !== Se),
            Object(E.a)((t) => (Ce(t) ? t : !0 === t)),
            Object(H.a)(1)
          )
        );
      }
      class Oe {
        constructor(t) {
          this.segmentGroup = t || null;
        }
      }
      class xe {
        constructor(t) {
          this.urlTree = t;
        }
      }
      function ke(t) {
        return new f.a((e) => e.error(new Oe(t)));
      }
      function Te(t) {
        return new f.a((e) => e.error(new xe(t)));
      }
      function Re(t) {
        return new f.a((e) =>
          e.error(
            new Error(
              `Only absolute redirects can have named outlets. redirectTo: '${t}'`
            )
          )
        );
      }
      class Ae {
        constructor(t, e, n, s, i) {
          (this.configLoader = e),
            (this.urlSerializer = n),
            (this.urlTree = s),
            (this.config = i),
            (this.allowRedirects = !0),
            (this.ngModule = t.get(r.x));
        }
        apply() {
          return this.expandSegmentGroup(
            this.ngModule,
            this.config,
            this.urlTree.root,
            ft
          )
            .pipe(
              Object(E.a)((t) =>
                this.createUrlTree(
                  t,
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              Object(q.a)((t) => {
                if (t instanceof xe)
                  return (this.allowRedirects = !1), this.match(t.urlTree);
                if (t instanceof Oe) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        match(t) {
          return this.expandSegmentGroup(this.ngModule, this.config, t.root, ft)
            .pipe(
              Object(E.a)((e) =>
                this.createUrlTree(e, t.queryParams, t.fragment)
              )
            )
            .pipe(
              Object(q.a)((t) => {
                if (t instanceof Oe) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        noMatchError(t) {
          return new Error(
            `Cannot match any routes. URL Segment: '${t.segmentGroup}'`
          );
        }
        createUrlTree(t, e, n) {
          const s = t.segments.length > 0 ? new kt([], { [ft]: t }) : t;
          return new xt(s, e, n);
        }
        expandSegmentGroup(t, e, n, s) {
          return 0 === n.segments.length && n.hasChildren()
            ? this.expandChildren(t, e, n).pipe(
                Object(E.a)((t) => new kt([], t))
              )
            : this.expandSegment(t, n, e, n.segments, s, !0);
        }
        expandChildren(t, e, n) {
          return (function (t, e) {
            if (0 === Object.keys(t).length) return Object(i.a)({});
            const n = [],
              s = [],
              r = {};
            return (
              St(t, (t, i) => {
                const o = e(i, t).pipe(Object(E.a)((t) => (r[i] = t)));
                i === ft ? n.push(o) : s.push(o);
              }),
              i.a.apply(null, n.concat(s)).pipe(
                Object(O.a)(),
                (function (t, e) {
                  const n = arguments.length >= 2;
                  return (s) =>
                    s.pipe(
                      t ? Object(x.a)((e, n) => t(e, n, s)) : F.a,
                      T(1),
                      n ? N(e) : I(() => new v())
                    );
                })(),
                Object(E.a)(() => r)
              )
            );
          })(n.children, (n, s) => this.expandSegmentGroup(t, e, s, n));
        }
        expandSegment(t, e, n, s, r, o) {
          return Object(i.a)(...n).pipe(
            Object($.a)((a) =>
              this.expandSegmentAgainstRoute(t, e, n, a, s, r, o).pipe(
                Object(q.a)((t) => {
                  if (t instanceof Oe) return Object(i.a)(null);
                  throw t;
                })
              )
            ),
            K((t) => !!t),
            Object(q.a)((t, n) => {
              if (t instanceof v || "EmptyError" === t.name) {
                if (this.noLeftoversInUrl(e, s, r))
                  return Object(i.a)(new kt([], {}));
                throw new Oe(e);
              }
              throw t;
            })
          );
        }
        noLeftoversInUrl(t, e, n) {
          return 0 === e.length && !t.children[n];
        }
        expandSegmentAgainstRoute(t, e, n, s, r, i, o) {
          return De(s) !== i
            ? ke(e)
            : void 0 === s.redirectTo
            ? this.matchSegmentAgainstRoute(t, e, s, r)
            : o && this.allowRedirects
            ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, s, r, i)
            : ke(e);
        }
        expandSegmentAgainstRouteUsingRedirect(t, e, n, s, r, i) {
          return "**" === s.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, s, i)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                t,
                e,
                n,
                s,
                r,
                i
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(t, e, n, s) {
          const r = this.applyRedirectCommands([], n.redirectTo, {});
          return n.redirectTo.startsWith("/")
            ? Te(r)
            : this.lineralizeSegments(n, r).pipe(
                Object(W.a)((n) => {
                  const r = new kt(n, {});
                  return this.expandSegment(t, r, e, n, s, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, s, r, i) {
          const {
            matched: o,
            consumedSegments: a,
            lastChild: l,
            positionalParamSegments: c,
          } = Ie(e, s, r);
          if (!o) return ke(e);
          const u = this.applyRedirectCommands(a, s.redirectTo, c);
          return s.redirectTo.startsWith("/")
            ? Te(u)
            : this.lineralizeSegments(s, u).pipe(
                Object(W.a)((s) =>
                  this.expandSegment(t, e, n, s.concat(r.slice(l)), i, !1)
                )
              );
        }
        matchSegmentAgainstRoute(t, e, n, s) {
          if ("**" === n.path)
            return n.loadChildren
              ? this.configLoader
                  .load(t.injector, n)
                  .pipe(
                    Object(E.a)((t) => ((n._loadedConfig = t), new kt(s, {})))
                  )
              : Object(i.a)(new kt(s, {}));
          const { matched: r, consumedSegments: o, lastChild: a } = Ie(e, n, s);
          if (!r) return ke(e);
          const l = s.slice(a);
          return this.getChildConfig(t, n, s).pipe(
            Object(W.a)((t) => {
              const n = t.module,
                s = t.routes,
                { segmentGroup: r, slicedSegments: a } = (function (
                  t,
                  e,
                  n,
                  s
                ) {
                  return n.length > 0 &&
                    (function (t, e, n) {
                      return n.some((n) => Pe(t, e, n) && De(n) !== ft);
                    })(t, n, s)
                    ? {
                        segmentGroup: je(
                          new kt(
                            e,
                            (function (t, e) {
                              const n = {};
                              n.primary = e;
                              for (const s of t)
                                "" === s.path &&
                                  De(s) !== ft &&
                                  (n[De(s)] = new kt([], {}));
                              return n;
                            })(s, new kt(n, t.children))
                          )
                        ),
                        slicedSegments: [],
                      }
                    : 0 === n.length &&
                      (function (t, e, n) {
                        return n.some((n) => Pe(t, e, n));
                      })(t, n, s)
                    ? {
                        segmentGroup: je(
                          new kt(
                            t.segments,
                            (function (t, e, n, s) {
                              const r = {};
                              for (const i of n)
                                Pe(t, e, i) &&
                                  !s[De(i)] &&
                                  (r[De(i)] = new kt([], {}));
                              return Object.assign(Object.assign({}, s), r);
                            })(t, n, s, t.children)
                          )
                        ),
                        slicedSegments: n,
                      }
                    : { segmentGroup: t, slicedSegments: n };
                })(e, o, l, s);
              return 0 === a.length && r.hasChildren()
                ? this.expandChildren(n, s, r).pipe(
                    Object(E.a)((t) => new kt(o, t))
                  )
                : 0 === s.length && 0 === a.length
                ? Object(i.a)(new kt(o, {}))
                : this.expandSegment(n, r, s, a, ft, !0).pipe(
                    Object(E.a)((t) => new kt(o.concat(t.segments), t.children))
                  );
            })
          );
        }
        getChildConfig(t, e, n) {
          return e.children
            ? Object(i.a)(new ve(e.children, t))
            : e.loadChildren
            ? void 0 !== e._loadedConfig
              ? Object(i.a)(e._loadedConfig)
              : this.runCanLoadGuards(t.injector, e, n).pipe(
                  Object(W.a)((n) =>
                    n
                      ? this.configLoader
                          .load(t.injector, e)
                          .pipe(Object(E.a)((t) => ((e._loadedConfig = t), t)))
                      : (function (t) {
                          return new f.a((e) =>
                            e.error(
                              _t(
                                `Cannot load children because the guard of the route "path: '${t.path}'" returned false`
                              )
                            )
                          );
                        })(e)
                  )
                )
            : Object(i.a)(new ve([], t));
        }
        runCanLoadGuards(t, e, n) {
          const s = e.canLoad;
          if (!s || 0 === s.length) return Object(i.a)(!0);
          const r = s.map((s) => {
            const r = t.get(s);
            let i;
            if (
              (function (t) {
                return t && we(t.canLoad);
              })(r)
            )
              i = r.canLoad(e, n);
            else {
              if (!we(r)) throw new Error("Invalid CanLoad guard");
              i = r(e, n);
            }
            return Et(i);
          });
          return Object(i.a)(r).pipe(
            Ee(),
            Object(G.a)((t) => {
              if (!Ce(t)) return;
              const e = _t(
                `Redirecting to "${this.urlSerializer.serialize(t)}"`
              );
              throw ((e.url = t), e);
            }),
            Object(E.a)((t) => !0 === t)
          );
        }
        lineralizeSegments(t, e) {
          let n = [],
            s = e.root;
          for (;;) {
            if (((n = n.concat(s.segments)), 0 === s.numberOfChildren))
              return Object(i.a)(n);
            if (s.numberOfChildren > 1 || !s.children.primary)
              return Re(t.redirectTo);
            s = s.children.primary;
          }
        }
        applyRedirectCommands(t, e, n) {
          return this.applyRedirectCreatreUrlTree(
            e,
            this.urlSerializer.parse(e),
            t,
            n
          );
        }
        applyRedirectCreatreUrlTree(t, e, n, s) {
          const r = this.createSegmentGroup(t, e.root, n, s);
          return new xt(
            r,
            this.createQueryParams(e.queryParams, this.urlTree.queryParams),
            e.fragment
          );
        }
        createQueryParams(t, e) {
          const n = {};
          return (
            St(t, (t, s) => {
              if ("string" == typeof t && t.startsWith(":")) {
                const r = t.substring(1);
                n[s] = e[r];
              } else n[s] = t;
            }),
            n
          );
        }
        createSegmentGroup(t, e, n, s) {
          const r = this.createSegments(t, e.segments, n, s);
          let i = {};
          return (
            St(e.children, (e, r) => {
              i[r] = this.createSegmentGroup(t, e, n, s);
            }),
            new kt(r, i)
          );
        }
        createSegments(t, e, n, s) {
          return e.map((e) =>
            e.path.startsWith(":")
              ? this.findPosParam(t, e, s)
              : this.findOrReturn(e, n)
          );
        }
        findPosParam(t, e, n) {
          const s = n[e.path.substring(1)];
          if (!s)
            throw new Error(
              `Cannot redirect to '${t}'. Cannot find '${e.path}'.`
            );
          return s;
        }
        findOrReturn(t, e) {
          let n = 0;
          for (const s of e) {
            if (s.path === t.path) return e.splice(n), s;
            n++;
          }
          return t;
        }
      }
      function Ie(t, e, n) {
        if ("" === e.path)
          return "full" === e.pathMatch && (t.hasChildren() || n.length > 0)
            ? {
                matched: !1,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {},
              }
            : {
                matched: !0,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {},
              };
        const s = (e.matcher || bt)(n, t, e);
        return s
          ? {
              matched: !0,
              consumedSegments: s.consumed,
              lastChild: s.consumed.length,
              positionalParamSegments: s.posParams,
            }
          : {
              matched: !1,
              consumedSegments: [],
              lastChild: 0,
              positionalParamSegments: {},
            };
      }
      function je(t) {
        if (1 === t.numberOfChildren && t.children.primary) {
          const e = t.children.primary;
          return new kt(t.segments.concat(e.segments), e.children);
        }
        return t;
      }
      function Pe(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) &&
          "" === n.path &&
          void 0 !== n.redirectTo
        );
      }
      function De(t) {
        return t.outlet || ft;
      }
      class Ne {
        constructor(t) {
          (this.path = t), (this.route = this.path[this.path.length - 1]);
        }
      }
      class Le {
        constructor(t, e) {
          (this.component = t), (this.route = e);
        }
      }
      function Me(t, e, n) {
        const s = t._root;
        return (function t(
          e,
          n,
          s,
          r,
          i = { canDeactivateChecks: [], canActivateChecks: [] }
        ) {
          const o = Zt(n);
          return (
            e.children.forEach((e) => {
              !(function (
                e,
                n,
                s,
                r,
                i = { canDeactivateChecks: [], canActivateChecks: [] }
              ) {
                const o = e.value,
                  a = n ? n.value : null,
                  l = s ? s.getContext(e.value.outlet) : null;
                if (a && o.routeConfig === a.routeConfig) {
                  const c = (function (t, e, n) {
                    if ("function" == typeof n) return n(t, e);
                    switch (n) {
                      case "pathParamsChange":
                        return !Rt(t.url, e.url);
                      case "pathParamsOrQueryParamsChange":
                        return (
                          !Rt(t.url, e.url) || !yt(t.queryParams, e.queryParams)
                        );
                      case "always":
                        return !0;
                      case "paramsOrQueryParamsChange":
                        return !oe(t, e) || !yt(t.queryParams, e.queryParams);
                      case "paramsChange":
                      default:
                        return !oe(t, e);
                    }
                  })(a, o, o.routeConfig.runGuardsAndResolvers);
                  c
                    ? i.canActivateChecks.push(new Ne(r))
                    : ((o.data = a.data), (o._resolvedData = a._resolvedData)),
                    t(e, n, o.component ? (l ? l.children : null) : s, r, i),
                    c &&
                      l &&
                      l.outlet &&
                      l.outlet.isActivated &&
                      i.canDeactivateChecks.push(new Le(l.outlet.component, a));
                } else
                  a && Ve(n, l, i),
                    i.canActivateChecks.push(new Ne(r)),
                    t(e, null, o.component ? (l ? l.children : null) : s, r, i);
              })(e, o[e.value.outlet], s, r.concat([e.value]), i),
                delete o[e.value.outlet];
            }),
            St(o, (t, e) => Ve(t, s.getContext(e), i)),
            i
          );
        })(s, e ? e._root : null, n, [s.value]);
      }
      function Fe(t, e, n) {
        const s = (function (t) {
          if (!t) return null;
          for (let e = t.parent; e; e = e.parent) {
            const t = e.routeConfig;
            if (t && t._loadedConfig) return t._loadedConfig;
          }
          return null;
        })(e);
        return (s ? s.module.injector : n).get(t);
      }
      function Ve(t, e, n) {
        const s = Zt(t),
          r = t.value;
        St(s, (t, s) => {
          Ve(t, r.component ? (e ? e.children.getContext(s) : null) : e, n);
        }),
          n.canDeactivateChecks.push(
            new Le(
              r.component && e && e.outlet && e.outlet.isActivated
                ? e.outlet.component
                : null,
              r
            )
          );
      }
      function He(t, e) {
        return null !== t && e && e(new ht(t)), Object(i.a)(!0);
      }
      function Ue(t, e) {
        return null !== t && e && e(new ct(t)), Object(i.a)(!0);
      }
      function ze(t, e, n) {
        const s = e.routeConfig ? e.routeConfig.canActivate : null;
        if (!s || 0 === s.length) return Object(i.a)(!0);
        const r = s.map((s) =>
          Object(w.a)(() => {
            const r = Fe(s, e, n);
            let i;
            if (
              (function (t) {
                return t && we(t.canActivate);
              })(r)
            )
              i = Et(r.canActivate(e, t));
            else {
              if (!we(r)) throw new Error("Invalid CanActivate guard");
              i = Et(r(e, t));
            }
            return i.pipe(K());
          })
        );
        return Object(i.a)(r).pipe(Ee());
      }
      function Be(t, e, n) {
        const s = e[e.length - 1],
          r = e
            .slice(0, e.length - 1)
            .reverse()
            .map((t) =>
              (function (t) {
                const e = t.routeConfig ? t.routeConfig.canActivateChild : null;
                return e && 0 !== e.length ? { node: t, guards: e } : null;
              })(t)
            )
            .filter((t) => null !== t)
            .map((e) =>
              Object(w.a)(() => {
                const r = e.guards.map((r) => {
                  const i = Fe(r, e.node, n);
                  let o;
                  if (
                    (function (t) {
                      return t && we(t.canActivateChild);
                    })(i)
                  )
                    o = Et(i.canActivateChild(s, t));
                  else {
                    if (!we(i))
                      throw new Error("Invalid CanActivateChild guard");
                    o = Et(i(s, t));
                  }
                  return o.pipe(K());
                });
                return Object(i.a)(r).pipe(Ee());
              })
            );
        return Object(i.a)(r).pipe(Ee());
      }
      class qe {}
      class $e {
        constructor(t, e, n, s, r, i) {
          (this.rootComponentType = t),
            (this.config = e),
            (this.urlTree = n),
            (this.url = s),
            (this.paramsInheritanceStrategy = r),
            (this.relativeLinkResolution = i);
        }
        recognize() {
          try {
            const t = Ge(
                this.urlTree.root,
                [],
                [],
                this.config,
                this.relativeLinkResolution
              ).segmentGroup,
              e = this.processSegmentGroup(this.config, t, ft),
              n = new ee(
                [],
                Object.freeze({}),
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                {},
                ft,
                this.rootComponentType,
                null,
                this.urlTree.root,
                -1,
                {}
              ),
              s = new Qt(n, e),
              r = new ne(this.url, s);
            return this.inheritParamsAndData(r._root), Object(i.a)(r);
          } catch (t) {
            return new f.a((e) => e.error(t));
          }
        }
        inheritParamsAndData(t) {
          const e = t.value,
            n = te(e, this.paramsInheritanceStrategy);
          (e.params = Object.freeze(n.params)),
            (e.data = Object.freeze(n.data)),
            t.children.forEach((t) => this.inheritParamsAndData(t));
        }
        processSegmentGroup(t, e, n) {
          return 0 === e.segments.length && e.hasChildren()
            ? this.processChildren(t, e)
            : this.processSegment(t, e, e.segments, n);
        }
        processChildren(t, e) {
          const n = At(e, (e, n) => this.processSegmentGroup(t, e, n));
          return (
            (function (t) {
              const e = {};
              t.forEach((t) => {
                const n = e[t.value.outlet];
                if (n) {
                  const e = n.url.map((t) => t.toString()).join("/"),
                    s = t.value.url.map((t) => t.toString()).join("/");
                  throw new Error(
                    `Two segments cannot have the same outlet name: '${e}' and '${s}'.`
                  );
                }
                e[t.value.outlet] = t.value;
              });
            })(n),
            n.sort((t, e) =>
              t.value.outlet === ft
                ? -1
                : e.value.outlet === ft
                ? 1
                : t.value.outlet.localeCompare(e.value.outlet)
            ),
            n
          );
        }
        processSegment(t, e, n, s) {
          for (const i of t)
            try {
              return this.processSegmentAgainstRoute(i, e, n, s);
            } catch (r) {
              if (!(r instanceof qe)) throw r;
            }
          if (this.noLeftoversInUrl(e, n, s)) return [];
          throw new qe();
        }
        noLeftoversInUrl(t, e, n) {
          return 0 === e.length && !t.children[n];
        }
        processSegmentAgainstRoute(t, e, n, s) {
          if (t.redirectTo) throw new qe();
          if ((t.outlet || ft) !== s) throw new qe();
          let r,
            i = [],
            o = [];
          if ("**" === t.path) {
            const i = n.length > 0 ? Ct(n).parameters : {};
            r = new ee(
              n,
              i,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              Ye(t),
              s,
              t.component,
              t,
              Ke(e),
              We(e) + n.length,
              Xe(t)
            );
          } else {
            const a = (function (t, e, n) {
              if ("" === e.path) {
                if ("full" === e.pathMatch && (t.hasChildren() || n.length > 0))
                  throw new qe();
                return { consumedSegments: [], lastChild: 0, parameters: {} };
              }
              const s = (e.matcher || bt)(n, t, e);
              if (!s) throw new qe();
              const r = {};
              St(s.posParams, (t, e) => {
                r[e] = t.path;
              });
              const i =
                s.consumed.length > 0
                  ? Object.assign(
                      Object.assign({}, r),
                      s.consumed[s.consumed.length - 1].parameters
                    )
                  : r;
              return {
                consumedSegments: s.consumed,
                lastChild: s.consumed.length,
                parameters: i,
              };
            })(e, t, n);
            (i = a.consumedSegments),
              (o = n.slice(a.lastChild)),
              (r = new ee(
                i,
                a.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                Ye(t),
                s,
                t.component,
                t,
                Ke(e),
                We(e) + i.length,
                Xe(t)
              ));
          }
          const a = (function (t) {
              return t.children
                ? t.children
                : t.loadChildren
                ? t._loadedConfig.routes
                : [];
            })(t),
            { segmentGroup: l, slicedSegments: c } = Ge(
              e,
              i,
              o,
              a,
              this.relativeLinkResolution
            );
          if (0 === c.length && l.hasChildren()) {
            const t = this.processChildren(a, l);
            return [new Qt(r, t)];
          }
          if (0 === a.length && 0 === c.length) return [new Qt(r, [])];
          const u = this.processSegment(a, l, c, ft);
          return [new Qt(r, u)];
        }
      }
      function Ke(t) {
        let e = t;
        for (; e._sourceSegment; ) e = e._sourceSegment;
        return e;
      }
      function We(t) {
        let e = t,
          n = e._segmentIndexShift ? e._segmentIndexShift : 0;
        for (; e._sourceSegment; )
          (e = e._sourceSegment),
            (n += e._segmentIndexShift ? e._segmentIndexShift : 0);
        return n - 1;
      }
      function Ge(t, e, n, s, r) {
        if (
          n.length > 0 &&
          (function (t, e, n) {
            return n.some((n) => Qe(t, e, n) && Ze(n) !== ft);
          })(t, n, s)
        ) {
          const r = new kt(
            e,
            (function (t, e, n, s) {
              const r = {};
              (r.primary = s),
                (s._sourceSegment = t),
                (s._segmentIndexShift = e.length);
              for (const i of n)
                if ("" === i.path && Ze(i) !== ft) {
                  const n = new kt([], {});
                  (n._sourceSegment = t),
                    (n._segmentIndexShift = e.length),
                    (r[Ze(i)] = n);
                }
              return r;
            })(t, e, s, new kt(n, t.children))
          );
          return (
            (r._sourceSegment = t),
            (r._segmentIndexShift = e.length),
            { segmentGroup: r, slicedSegments: [] }
          );
        }
        if (
          0 === n.length &&
          (function (t, e, n) {
            return n.some((n) => Qe(t, e, n));
          })(t, n, s)
        ) {
          const i = new kt(
            t.segments,
            (function (t, e, n, s, r, i) {
              const o = {};
              for (const a of s)
                if (Qe(t, n, a) && !r[Ze(a)]) {
                  const n = new kt([], {});
                  (n._sourceSegment = t),
                    (n._segmentIndexShift =
                      "legacy" === i ? t.segments.length : e.length),
                    (o[Ze(a)] = n);
                }
              return Object.assign(Object.assign({}, r), o);
            })(t, e, n, s, t.children, r)
          );
          return (
            (i._sourceSegment = t),
            (i._segmentIndexShift = e.length),
            { segmentGroup: i, slicedSegments: n }
          );
        }
        const i = new kt(t.segments, t.children);
        return (
          (i._sourceSegment = t),
          (i._segmentIndexShift = e.length),
          { segmentGroup: i, slicedSegments: n }
        );
      }
      function Qe(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) &&
          "" === n.path &&
          void 0 === n.redirectTo
        );
      }
      function Ze(t) {
        return t.outlet || ft;
      }
      function Ye(t) {
        return t.data || {};
      }
      function Xe(t) {
        return t.resolve || {};
      }
      function Je(t) {
        return function (e) {
          return e.pipe(
            Object(V.a)((e) => {
              const n = t(e);
              return n
                ? Object(o.a)(n).pipe(Object(E.a)(() => e))
                : Object(o.a)([e]);
            })
          );
        };
      }
      class tn extends class {
        shouldDetach(t) {
          return !1;
        }
        store(t, e) {}
        shouldAttach(t) {
          return !1;
        }
        retrieve(t) {
          return null;
        }
        shouldReuseRoute(t, e) {
          return t.routeConfig === e.routeConfig;
        }
      } {}
      let en = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵcmp = r.Eb({
            type: t,
            selectors: [["ng-component"]],
            decls: 1,
            vars: 0,
            template: function (t, e) {
              1 & t && r.Lb(0, "router-outlet");
            },
            directives: function () {
              return [vn];
            },
            encapsulation: 2,
          })),
          t
        );
      })();
      function nn(t, e = "") {
        for (let n = 0; n < t.length; n++) {
          const s = t[n];
          sn(s, rn(e, s));
        }
      }
      function sn(t, e) {
        if (!t)
          throw new Error(
            `\n      Invalid configuration of route '${e}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `
          );
        if (Array.isArray(t))
          throw new Error(
            `Invalid configuration of route '${e}': Array cannot be specified`
          );
        if (
          !t.component &&
          !t.children &&
          !t.loadChildren &&
          t.outlet &&
          t.outlet !== ft
        )
          throw new Error(
            `Invalid configuration of route '${e}': a componentless route without children or loadChildren cannot have a named outlet set`
          );
        if (t.redirectTo && t.children)
          throw new Error(
            `Invalid configuration of route '${e}': redirectTo and children cannot be used together`
          );
        if (t.redirectTo && t.loadChildren)
          throw new Error(
            `Invalid configuration of route '${e}': redirectTo and loadChildren cannot be used together`
          );
        if (t.children && t.loadChildren)
          throw new Error(
            `Invalid configuration of route '${e}': children and loadChildren cannot be used together`
          );
        if (t.redirectTo && t.component)
          throw new Error(
            `Invalid configuration of route '${e}': redirectTo and component cannot be used together`
          );
        if (t.path && t.matcher)
          throw new Error(
            `Invalid configuration of route '${e}': path and matcher cannot be used together`
          );
        if (
          void 0 === t.redirectTo &&
          !t.component &&
          !t.children &&
          !t.loadChildren
        )
          throw new Error(
            `Invalid configuration of route '${e}'. One of the following must be provided: component, redirectTo, children or loadChildren`
          );
        if (void 0 === t.path && void 0 === t.matcher)
          throw new Error(
            `Invalid configuration of route '${e}': routes must have either a path or a matcher specified`
          );
        if ("string" == typeof t.path && "/" === t.path.charAt(0))
          throw new Error(
            `Invalid configuration of route '${e}': path cannot start with a slash`
          );
        if ("" === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch)
          throw new Error(
            `Invalid configuration of route '{path: "${e}", redirectTo: "${t.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`
          );
        if (
          void 0 !== t.pathMatch &&
          "full" !== t.pathMatch &&
          "prefix" !== t.pathMatch
        )
          throw new Error(
            `Invalid configuration of route '${e}': pathMatch can only be set to 'prefix' or 'full'`
          );
        t.children && nn(t.children, e);
      }
      function rn(t, e) {
        return e
          ? t || e.path
            ? t && !e.path
              ? t + "/"
              : !t && e.path
              ? e.path
              : `${t}/${e.path}`
            : ""
          : t;
      }
      function on(t) {
        const e = t.children && t.children.map(on),
          n = e
            ? Object.assign(Object.assign({}, t), { children: e })
            : Object.assign({}, t);
        return (
          !n.component &&
            (e || n.loadChildren) &&
            n.outlet &&
            n.outlet !== ft &&
            (n.component = en),
          n
        );
      }
      const an = new r.q("ROUTES");
      class ln {
        constructor(t, e, n, s) {
          (this.loader = t),
            (this.compiler = e),
            (this.onLoadStartListener = n),
            (this.onLoadEndListener = s);
        }
        load(t, e) {
          return (
            this.onLoadStartListener && this.onLoadStartListener(e),
            this.loadModuleFactory(e.loadChildren).pipe(
              Object(E.a)((n) => {
                this.onLoadEndListener && this.onLoadEndListener(e);
                const s = n.create(t);
                return new ve(wt(s.injector.get(an)).map(on), s);
              })
            )
          );
        }
        loadModuleFactory(t) {
          return "string" == typeof t
            ? Object(o.a)(this.loader.load(t))
            : Et(t()).pipe(
                Object(W.a)((t) =>
                  t instanceof r.v
                    ? Object(i.a)(t)
                    : Object(o.a)(this.compiler.compileModuleAsync(t))
                )
              );
        }
      }
      class cn {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new un()),
            (this.attachRef = null);
        }
      }
      class un {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(t, e) {
          const n = this.getOrCreateContext(t);
          (n.outlet = e), this.contexts.set(t, n);
        }
        onChildOutletDestroyed(t) {
          const e = this.getContext(t);
          e && (e.outlet = null);
        }
        onOutletDeactivated() {
          const t = this.contexts;
          return (this.contexts = new Map()), t;
        }
        onOutletReAttached(t) {
          this.contexts = t;
        }
        getOrCreateContext(t) {
          let e = this.getContext(t);
          return e || ((e = new cn()), this.contexts.set(t, e)), e;
        }
        getContext(t) {
          return this.contexts.get(t) || null;
        }
      }
      class hn {
        shouldProcessUrl(t) {
          return !0;
        }
        extract(t) {
          return t;
        }
        merge(t, e) {
          return t;
        }
      }
      function dn(t) {
        throw t;
      }
      function pn(t, e, n) {
        return e.parse("/");
      }
      function fn(t, e) {
        return Object(i.a)(null);
      }
      let mn = (() => {
          class t {
            constructor(t, e, n, s, i, o, l, c) {
              (this.rootComponentType = t),
                (this.urlSerializer = e),
                (this.rootContexts = n),
                (this.location = s),
                (this.config = c),
                (this.lastSuccessfulNavigation = null),
                (this.currentNavigation = null),
                (this.lastLocationChangeInfo = null),
                (this.navigationId = 0),
                (this.isNgZoneEnabled = !1),
                (this.events = new S.a()),
                (this.errorHandler = dn),
                (this.malformedUriErrorHandler = pn),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1),
                (this.hooks = {
                  beforePreactivation: fn,
                  afterPreactivation: fn,
                }),
                (this.urlHandlingStrategy = new hn()),
                (this.routeReuseStrategy = new tn()),
                (this.onSameUrlNavigation = "ignore"),
                (this.paramsInheritanceStrategy = "emptyOnly"),
                (this.urlUpdateStrategy = "deferred"),
                (this.relativeLinkResolution = "legacy"),
                (this.ngModule = i.get(r.x)),
                (this.console = i.get(r.Y));
              const u = i.get(r.z);
              (this.isNgZoneEnabled = u instanceof r.z),
                this.resetConfig(c),
                (this.currentUrlTree = new xt(new kt([], {}), {}, null)),
                (this.rawUrlTree = this.currentUrlTree),
                (this.browserUrlTree = this.currentUrlTree),
                (this.configLoader = new ln(
                  o,
                  l,
                  (t) => this.triggerEvent(new at(t)),
                  (t) => this.triggerEvent(new lt(t))
                )),
                (this.routerState = Xt(
                  this.currentUrlTree,
                  this.rootComponentType
                )),
                (this.transitions = new a.a({
                  id: 0,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.currentUrlTree,
                  extractedUrl: this.urlHandlingStrategy.extract(
                    this.currentUrlTree
                  ),
                  urlAfterRedirects: this.urlHandlingStrategy.extract(
                    this.currentUrlTree
                  ),
                  rawUrl: this.currentUrlTree,
                  extras: {},
                  resolve: null,
                  reject: null,
                  promise: Promise.resolve(!0),
                  source: "imperative",
                  restoredState: null,
                  currentSnapshot: this.routerState.snapshot,
                  targetSnapshot: null,
                  currentRouterState: this.routerState,
                  targetRouterState: null,
                  guards: { canActivateChecks: [], canDeactivateChecks: [] },
                  guardsResult: null,
                })),
                (this.navigations = this.setupNavigations(this.transitions)),
                this.processNavigations();
            }
            setupNavigations(t) {
              const e = this.events;
              return t.pipe(
                Object(x.a)((t) => 0 !== t.id),
                Object(E.a)((t) =>
                  Object.assign(Object.assign({}, t), {
                    extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl),
                  })
                ),
                Object(V.a)((t) => {
                  let n = !1,
                    s = !1;
                  return Object(i.a)(t).pipe(
                    Object(G.a)((t) => {
                      this.currentNavigation = {
                        id: t.id,
                        initialUrl: t.currentRawUrl,
                        extractedUrl: t.extractedUrl,
                        trigger: t.source,
                        extras: t.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? Object.assign(
                              Object.assign({}, this.lastSuccessfulNavigation),
                              { previousNavigation: null }
                            )
                          : null,
                      };
                    }),
                    Object(V.a)((t) => {
                      const n =
                        !this.navigated ||
                        t.extractedUrl.toString() !==
                          this.browserUrlTree.toString();
                      if (
                        ("reload" === this.onSameUrlNavigation || n) &&
                        this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)
                      )
                        return Object(i.a)(t).pipe(
                          Object(V.a)((t) => {
                            const n = this.transitions.getValue();
                            return (
                              e.next(
                                new X(
                                  t.id,
                                  this.serializeUrl(t.extractedUrl),
                                  t.source,
                                  t.restoredState
                                )
                              ),
                              n !== this.transitions.getValue() ? C.a : [t]
                            );
                          }),
                          Object(V.a)((t) => Promise.resolve(t)),
                          ((s = this.ngModule.injector),
                          (r = this.configLoader),
                          (o = this.urlSerializer),
                          (a = this.config),
                          function (t) {
                            return t.pipe(
                              Object(V.a)((t) =>
                                (function (t, e, n, s, r) {
                                  return new Ae(t, e, n, s, r).apply();
                                })(s, r, o, t.extractedUrl, a).pipe(
                                  Object(E.a)((e) =>
                                    Object.assign(Object.assign({}, t), {
                                      urlAfterRedirects: e,
                                    })
                                  )
                                )
                              )
                            );
                          }),
                          Object(G.a)((t) => {
                            this.currentNavigation = Object.assign(
                              Object.assign({}, this.currentNavigation),
                              { finalUrl: t.urlAfterRedirects }
                            );
                          }),
                          (function (t, e, n, s, r) {
                            return function (i) {
                              return i.pipe(
                                Object(W.a)((i) =>
                                  (function (
                                    t,
                                    e,
                                    n,
                                    s,
                                    r = "emptyOnly",
                                    i = "legacy"
                                  ) {
                                    return new $e(t, e, n, s, r, i).recognize();
                                  })(
                                    t,
                                    e,
                                    i.urlAfterRedirects,
                                    n(i.urlAfterRedirects),
                                    s,
                                    r
                                  ).pipe(
                                    Object(E.a)((t) =>
                                      Object.assign(Object.assign({}, i), {
                                        targetSnapshot: t,
                                      })
                                    )
                                  )
                                )
                              );
                            };
                          })(
                            this.rootComponentType,
                            this.config,
                            (t) => this.serializeUrl(t),
                            this.paramsInheritanceStrategy,
                            this.relativeLinkResolution
                          ),
                          Object(G.a)((t) => {
                            "eager" === this.urlUpdateStrategy &&
                              (t.extras.skipLocationChange ||
                                this.setBrowserUrl(
                                  t.urlAfterRedirects,
                                  !!t.extras.replaceUrl,
                                  t.id,
                                  t.extras.state
                                ),
                              (this.browserUrlTree = t.urlAfterRedirects));
                          }),
                          Object(G.a)((t) => {
                            const n = new nt(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            e.next(n);
                          })
                        );
                      var s, r, o, a;
                      if (
                        n &&
                        this.rawUrlTree &&
                        this.urlHandlingStrategy.shouldProcessUrl(
                          this.rawUrlTree
                        )
                      ) {
                        const {
                            id: n,
                            extractedUrl: s,
                            source: r,
                            restoredState: o,
                            extras: a,
                          } = t,
                          l = new X(n, this.serializeUrl(s), r, o);
                        e.next(l);
                        const c = Xt(s, this.rootComponentType).snapshot;
                        return Object(i.a)(
                          Object.assign(Object.assign({}, t), {
                            targetSnapshot: c,
                            urlAfterRedirects: s,
                            extras: Object.assign(Object.assign({}, a), {
                              skipLocationChange: !1,
                              replaceUrl: !1,
                            }),
                          })
                        );
                      }
                      return (
                        (this.rawUrlTree = t.rawUrl),
                        (this.browserUrlTree = t.urlAfterRedirects),
                        t.resolve(null),
                        C.a
                      );
                    }),
                    Je((t) => {
                      const {
                        targetSnapshot: e,
                        id: n,
                        extractedUrl: s,
                        rawUrl: r,
                        extras: { skipLocationChange: i, replaceUrl: o },
                      } = t;
                      return this.hooks.beforePreactivation(e, {
                        navigationId: n,
                        appliedUrlTree: s,
                        rawUrlTree: r,
                        skipLocationChange: !!i,
                        replaceUrl: !!o,
                      });
                    }),
                    Object(G.a)((t) => {
                      const e = new st(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot
                      );
                      this.triggerEvent(e);
                    }),
                    Object(E.a)((t) =>
                      Object.assign(Object.assign({}, t), {
                        guards: Me(
                          t.targetSnapshot,
                          t.currentSnapshot,
                          this.rootContexts
                        ),
                      })
                    ),
                    (function (t, e) {
                      return function (n) {
                        return n.pipe(
                          Object(W.a)((n) => {
                            const {
                              targetSnapshot: s,
                              currentSnapshot: r,
                              guards: {
                                canActivateChecks: a,
                                canDeactivateChecks: l,
                              },
                            } = n;
                            return 0 === l.length && 0 === a.length
                              ? Object(i.a)(
                                  Object.assign(Object.assign({}, n), {
                                    guardsResult: !0,
                                  })
                                )
                              : (function (t, e, n, s) {
                                  return Object(o.a)(t).pipe(
                                    Object(W.a)((t) =>
                                      (function (t, e, n, s, r) {
                                        const o =
                                          e && e.routeConfig
                                            ? e.routeConfig.canDeactivate
                                            : null;
                                        if (!o || 0 === o.length)
                                          return Object(i.a)(!0);
                                        const a = o.map((i) => {
                                          const o = Fe(i, e, r);
                                          let a;
                                          if (
                                            (function (t) {
                                              return t && we(t.canDeactivate);
                                            })(o)
                                          )
                                            a = Et(o.canDeactivate(t, e, n, s));
                                          else {
                                            if (!we(o))
                                              throw new Error(
                                                "Invalid CanDeactivate guard"
                                              );
                                            a = Et(o(t, e, n, s));
                                          }
                                          return a.pipe(K());
                                        });
                                        return Object(i.a)(a).pipe(Ee());
                                      })(t.component, t.route, n, e, s)
                                    ),
                                    K((t) => !0 !== t, !0)
                                  );
                                })(l, s, r, t).pipe(
                                  Object(W.a)((n) =>
                                    n && "boolean" == typeof n
                                      ? (function (t, e, n, s) {
                                          return Object(o.a)(e).pipe(
                                            Object($.a)((e) =>
                                              Object(o.a)([
                                                Ue(e.route.parent, s),
                                                He(e.route, s),
                                                Be(t, e.path, n),
                                                ze(t, e.route, n),
                                              ]).pipe(
                                                Object(O.a)(),
                                                K((t) => !0 !== t, !0)
                                              )
                                            ),
                                            K((t) => !0 !== t, !0)
                                          );
                                        })(s, a, t, e)
                                      : Object(i.a)(n)
                                  ),
                                  Object(E.a)((t) =>
                                    Object.assign(Object.assign({}, n), {
                                      guardsResult: t,
                                    })
                                  )
                                );
                          })
                        );
                      };
                    })(this.ngModule.injector, (t) => this.triggerEvent(t)),
                    Object(G.a)((t) => {
                      if (Ce(t.guardsResult)) {
                        const e = _t(
                          `Redirecting to "${this.serializeUrl(
                            t.guardsResult
                          )}"`
                        );
                        throw ((e.url = t.guardsResult), e);
                      }
                    }),
                    Object(G.a)((t) => {
                      const e = new rt(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot,
                        !!t.guardsResult
                      );
                      this.triggerEvent(e);
                    }),
                    Object(x.a)((t) => {
                      if (!t.guardsResult) {
                        this.resetUrlToCurrentUrlTree();
                        const n = new tt(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          ""
                        );
                        return e.next(n), t.resolve(!1), !1;
                      }
                      return !0;
                    }),
                    Je((t) => {
                      if (t.guards.canActivateChecks.length)
                        return Object(i.a)(t).pipe(
                          Object(G.a)((t) => {
                            const e = new it(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            this.triggerEvent(e);
                          }),
                          Object(V.a)((t) => {
                            let n = !1;
                            return Object(i.a)(t).pipe(
                              ((s = this.paramsInheritanceStrategy),
                              (r = this.ngModule.injector),
                              function (t) {
                                return t.pipe(
                                  Object(W.a)((t) => {
                                    const {
                                      targetSnapshot: e,
                                      guards: { canActivateChecks: n },
                                    } = t;
                                    if (!n.length) return Object(i.a)(t);
                                    let a = 0;
                                    return Object(o.a)(n).pipe(
                                      Object($.a)((t) =>
                                        (function (t, e, n, s) {
                                          return (function (t, e, n, s) {
                                            const r = Object.keys(t);
                                            if (0 === r.length)
                                              return Object(i.a)({});
                                            const a = {};
                                            return Object(o.a)(r).pipe(
                                              Object(W.a)((r) =>
                                                (function (t, e, n, s) {
                                                  const r = Fe(t, e, s);
                                                  return Et(
                                                    r.resolve
                                                      ? r.resolve(e, n)
                                                      : r(e, n)
                                                  );
                                                })(t[r], e, n, s).pipe(
                                                  Object(G.a)((t) => {
                                                    a[r] = t;
                                                  })
                                                )
                                              ),
                                              T(1),
                                              Object(W.a)(() =>
                                                Object.keys(a).length ===
                                                r.length
                                                  ? Object(i.a)(a)
                                                  : C.a
                                              )
                                            );
                                          })(t._resolve, t, e, s).pipe(
                                            Object(E.a)(
                                              (e) => (
                                                (t._resolvedData = e),
                                                (t.data = Object.assign(
                                                  Object.assign({}, t.data),
                                                  te(t, n).resolve
                                                )),
                                                null
                                              )
                                            )
                                          );
                                        })(t.route, e, s, r)
                                      ),
                                      Object(G.a)(() => a++),
                                      T(1),
                                      Object(W.a)((e) =>
                                        a === n.length ? Object(i.a)(t) : C.a
                                      )
                                    );
                                  })
                                );
                              }),
                              Object(G.a)({
                                next: () => (n = !0),
                                complete: () => {
                                  if (!n) {
                                    const n = new tt(
                                      t.id,
                                      this.serializeUrl(t.extractedUrl),
                                      "At least one route resolver didn't emit any value."
                                    );
                                    e.next(n), t.resolve(!1);
                                  }
                                },
                              })
                            );
                            var s, r;
                          }),
                          Object(G.a)((t) => {
                            const e = new ot(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            this.triggerEvent(e);
                          })
                        );
                    }),
                    Je((t) => {
                      const {
                        targetSnapshot: e,
                        id: n,
                        extractedUrl: s,
                        rawUrl: r,
                        extras: { skipLocationChange: i, replaceUrl: o },
                      } = t;
                      return this.hooks.afterPreactivation(e, {
                        navigationId: n,
                        appliedUrlTree: s,
                        rawUrlTree: r,
                        skipLocationChange: !!i,
                        replaceUrl: !!o,
                      });
                    }),
                    Object(E.a)((t) => {
                      const e = (function (t, e, n) {
                        const s = (function t(e, n, s) {
                          if (
                            s &&
                            e.shouldReuseRoute(n.value, s.value.snapshot)
                          ) {
                            const r = s.value;
                            r._futureSnapshot = n.value;
                            const i = (function (e, n, s) {
                              return n.children.map((n) => {
                                for (const r of s.children)
                                  if (
                                    e.shouldReuseRoute(
                                      r.value.snapshot,
                                      n.value
                                    )
                                  )
                                    return t(e, n, r);
                                return t(e, n);
                              });
                            })(e, n, s);
                            return new Qt(r, i);
                          }
                          {
                            const s = e.retrieve(n.value);
                            if (s) {
                              const t = s.route;
                              return (
                                (function t(e, n) {
                                  if (
                                    e.value.routeConfig !== n.value.routeConfig
                                  )
                                    throw new Error(
                                      "Cannot reattach ActivatedRouteSnapshot created from a different route"
                                    );
                                  if (e.children.length !== n.children.length)
                                    throw new Error(
                                      "Cannot reattach ActivatedRouteSnapshot with a different number of children"
                                    );
                                  n.value._futureSnapshot = e.value;
                                  for (let s = 0; s < e.children.length; ++s)
                                    t(e.children[s], n.children[s]);
                                })(n, t),
                                t
                              );
                            }
                            {
                              const s = new Jt(
                                  new a.a((r = n.value).url),
                                  new a.a(r.params),
                                  new a.a(r.queryParams),
                                  new a.a(r.fragment),
                                  new a.a(r.data),
                                  r.outlet,
                                  r.component,
                                  r
                                ),
                                i = n.children.map((n) => t(e, n));
                              return new Qt(s, i);
                            }
                          }
                          var r;
                        })(t, e._root, n ? n._root : void 0);
                        return new Yt(s, e);
                      })(
                        this.routeReuseStrategy,
                        t.targetSnapshot,
                        t.currentRouterState
                      );
                      return Object.assign(Object.assign({}, t), {
                        targetRouterState: e,
                      });
                    }),
                    Object(G.a)((t) => {
                      (this.currentUrlTree = t.urlAfterRedirects),
                        (this.rawUrlTree = this.urlHandlingStrategy.merge(
                          this.currentUrlTree,
                          t.rawUrl
                        )),
                        (this.routerState = t.targetRouterState),
                        "deferred" === this.urlUpdateStrategy &&
                          (t.extras.skipLocationChange ||
                            this.setBrowserUrl(
                              this.rawUrlTree,
                              !!t.extras.replaceUrl,
                              t.id,
                              t.extras.state
                            ),
                          (this.browserUrlTree = t.urlAfterRedirects));
                    }),
                    ((r = this.rootContexts),
                    (l = this.routeReuseStrategy),
                    (c = (t) => this.triggerEvent(t)),
                    Object(E.a)(
                      (t) => (
                        new be(
                          l,
                          t.targetRouterState,
                          t.currentRouterState,
                          c
                        ).activate(r),
                        t
                      )
                    )),
                    Object(G.a)({
                      next() {
                        n = !0;
                      },
                      complete() {
                        n = !0;
                      },
                    }),
                    Object(Q.a)(() => {
                      if (!n && !s) {
                        this.resetUrlToCurrentUrlTree();
                        const n = new tt(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          `Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`
                        );
                        e.next(n), t.resolve(!1);
                      }
                      this.currentNavigation = null;
                    }),
                    Object(q.a)((n) => {
                      if (((s = !0), (r = n) && r.ngNavigationCancelingError)) {
                        const s = Ce(n.url);
                        s ||
                          ((this.navigated = !0),
                          this.resetStateAndUrl(
                            t.currentRouterState,
                            t.currentUrlTree,
                            t.rawUrl
                          ));
                        const r = new tt(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          n.message
                        );
                        e.next(r),
                          s
                            ? setTimeout(() => {
                                const e = this.urlHandlingStrategy.merge(
                                  n.url,
                                  this.rawUrlTree
                                );
                                return this.scheduleNavigation(
                                  e,
                                  "imperative",
                                  null,
                                  {
                                    skipLocationChange:
                                      t.extras.skipLocationChange,
                                    replaceUrl:
                                      "eager" === this.urlUpdateStrategy,
                                  },
                                  {
                                    resolve: t.resolve,
                                    reject: t.reject,
                                    promise: t.promise,
                                  }
                                );
                              }, 0)
                            : t.resolve(!1);
                      } else {
                        this.resetStateAndUrl(
                          t.currentRouterState,
                          t.currentUrlTree,
                          t.rawUrl
                        );
                        const s = new et(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          n
                        );
                        e.next(s);
                        try {
                          t.resolve(this.errorHandler(n));
                        } catch (i) {
                          t.reject(i);
                        }
                      }
                      var r;
                      return C.a;
                    })
                  );
                  var r, l, c;
                })
              );
            }
            resetRootComponentType(t) {
              (this.rootComponentType = t),
                (this.routerState.root.component = this.rootComponentType);
            }
            getTransition() {
              const t = this.transitions.value;
              return (t.urlAfterRedirects = this.browserUrlTree), t;
            }
            setTransition(t) {
              this.transitions.next(
                Object.assign(Object.assign({}, this.getTransition()), t)
              );
            }
            initialNavigation() {
              this.setUpLocationChangeListener(),
                0 === this.navigationId &&
                  this.navigateByUrl(this.location.path(!0), {
                    replaceUrl: !0,
                  });
            }
            setUpLocationChangeListener() {
              this.locationSubscription ||
                (this.locationSubscription = this.location.subscribe((t) => {
                  const e = this.extractLocationChangeInfoFromEvent(t);
                  this.shouldScheduleNavigation(
                    this.lastLocationChangeInfo,
                    e
                  ) &&
                    setTimeout(() => {
                      const { source: t, state: n, urlTree: s } = e,
                        r = { replaceUrl: !0 };
                      if (n) {
                        const t = Object.assign({}, n);
                        delete t.navigationId,
                          0 !== Object.keys(t).length && (r.state = t);
                      }
                      this.scheduleNavigation(s, t, n, r);
                    }, 0),
                    (this.lastLocationChangeInfo = e);
                }));
            }
            extractLocationChangeInfoFromEvent(t) {
              var e;
              return {
                source: "popstate" === t.type ? "popstate" : "hashchange",
                urlTree: this.parseUrl(t.url),
                state: (
                  null === (e = t.state) || void 0 === e
                    ? void 0
                    : e.navigationId
                )
                  ? t.state
                  : null,
                transitionId: this.getTransition().id,
              };
            }
            shouldScheduleNavigation(t, e) {
              if (!t) return !0;
              const n = e.urlTree.toString() === t.urlTree.toString();
              return !(
                e.transitionId === t.transitionId &&
                n &&
                (("hashchange" === e.source && "popstate" === t.source) ||
                  ("popstate" === e.source && "hashchange" === t.source))
              );
            }
            get url() {
              return this.serializeUrl(this.currentUrlTree);
            }
            getCurrentNavigation() {
              return this.currentNavigation;
            }
            triggerEvent(t) {
              this.events.next(t);
            }
            resetConfig(t) {
              nn(t),
                (this.config = t.map(on)),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1);
            }
            ngOnDestroy() {
              this.dispose();
            }
            dispose() {
              this.locationSubscription &&
                (this.locationSubscription.unsubscribe(),
                (this.locationSubscription = void 0));
            }
            createUrlTree(t, e = {}) {
              const {
                relativeTo: n,
                queryParams: s,
                fragment: i,
                preserveQueryParams: o,
                queryParamsHandling: a,
                preserveFragment: l,
              } = e;
              Object(r.V)() &&
                o &&
                console &&
                console.warn &&
                console.warn(
                  "preserveQueryParams is deprecated, use queryParamsHandling instead."
                );
              const c = n || this.routerState.root,
                u = l ? this.currentUrlTree.fragment : i;
              let h = null;
              if (a)
                switch (a) {
                  case "merge":
                    h = Object.assign(
                      Object.assign({}, this.currentUrlTree.queryParams),
                      s
                    );
                    break;
                  case "preserve":
                    h = this.currentUrlTree.queryParams;
                    break;
                  default:
                    h = s || null;
                }
              else h = o ? this.currentUrlTree.queryParams : s || null;
              return (
                null !== h && (h = this.removeEmptyProps(h)),
                (function (t, e, n, s, r) {
                  if (0 === n.length) return ce(e.root, e.root, e, s, r);
                  const i = (function (t) {
                    if (
                      "string" == typeof t[0] &&
                      1 === t.length &&
                      "/" === t[0]
                    )
                      return new ue(!0, 0, t);
                    let e = 0,
                      n = !1;
                    const s = t.reduce((t, s, r) => {
                      if ("object" == typeof s && null != s) {
                        if (s.outlets) {
                          const e = {};
                          return (
                            St(s.outlets, (t, n) => {
                              e[n] = "string" == typeof t ? t.split("/") : t;
                            }),
                            [...t, { outlets: e }]
                          );
                        }
                        if (s.segmentPath) return [...t, s.segmentPath];
                      }
                      return "string" != typeof s
                        ? [...t, s]
                        : 0 === r
                        ? (s.split("/").forEach((s, r) => {
                            (0 == r && "." === s) ||
                              (0 == r && "" === s
                                ? (n = !0)
                                : ".." === s
                                ? e++
                                : "" != s && t.push(s));
                          }),
                          t)
                        : [...t, s];
                    }, []);
                    return new ue(n, e, s);
                  })(n);
                  if (i.toRoot()) return ce(e.root, new kt([], {}), e, s, r);
                  const o = (function (t, e, n) {
                      if (t.isAbsolute) return new he(e.root, !0, 0);
                      if (-1 === n.snapshot._lastPathIndex) {
                        const t = n.snapshot._urlSegment;
                        return new he(t, t === e.root, 0);
                      }
                      const s = ae(t.commands[0]) ? 0 : 1;
                      return (function (t, e, n) {
                        let s = t,
                          r = e,
                          i = n;
                        for (; i > r; ) {
                          if (((i -= r), (s = s.parent), !s))
                            throw new Error("Invalid number of '../'");
                          r = s.segments.length;
                        }
                        return new he(s, !1, r - i);
                      })(
                        n.snapshot._urlSegment,
                        n.snapshot._lastPathIndex + s,
                        t.numberOfDoubleDots
                      );
                    })(i, e, t),
                    a = o.processChildren
                      ? pe(o.segmentGroup, o.index, i.commands)
                      : de(o.segmentGroup, o.index, i.commands);
                  return ce(o.segmentGroup, a, e, s, r);
                })(c, this.currentUrlTree, t, h, u)
              );
            }
            navigateByUrl(t, e = { skipLocationChange: !1 }) {
              Object(r.V)() &&
                this.isNgZoneEnabled &&
                !r.z.isInAngularZone() &&
                this.console.warn(
                  "Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?"
                );
              const n = Ce(t) ? t : this.parseUrl(t),
                s = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
              return this.scheduleNavigation(s, "imperative", null, e);
            }
            navigate(t, e = { skipLocationChange: !1 }) {
              return (
                (function (t) {
                  for (let e = 0; e < t.length; e++) {
                    const n = t[e];
                    if (null == n)
                      throw new Error(
                        `The requested path contains ${n} segment at index ${e}`
                      );
                  }
                })(t),
                this.navigateByUrl(this.createUrlTree(t, e), e)
              );
            }
            serializeUrl(t) {
              return this.urlSerializer.serialize(t);
            }
            parseUrl(t) {
              let e;
              try {
                e = this.urlSerializer.parse(t);
              } catch (n) {
                e = this.malformedUriErrorHandler(n, this.urlSerializer, t);
              }
              return e;
            }
            isActive(t, e) {
              if (Ce(t)) return Ot(this.currentUrlTree, t, e);
              const n = this.parseUrl(t);
              return Ot(this.currentUrlTree, n, e);
            }
            removeEmptyProps(t) {
              return Object.keys(t).reduce((e, n) => {
                const s = t[n];
                return null != s && (e[n] = s), e;
              }, {});
            }
            processNavigations() {
              this.navigations.subscribe(
                (t) => {
                  (this.navigated = !0),
                    (this.lastSuccessfulId = t.id),
                    this.events.next(
                      new J(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(this.currentUrlTree)
                      )
                    ),
                    (this.lastSuccessfulNavigation = this.currentNavigation),
                    (this.currentNavigation = null),
                    t.resolve(!0);
                },
                (t) => {
                  this.console.warn("Unhandled Navigation Error: ");
                }
              );
            }
            scheduleNavigation(t, e, n, s, r) {
              const i = this.getTransition(),
                o =
                  "imperative" !== e &&
                  "imperative" === (null == i ? void 0 : i.source),
                a =
                  (this.lastSuccessfulId === i.id || this.currentNavigation
                    ? i.rawUrl
                    : i.urlAfterRedirects
                  ).toString() === t.toString();
              if (o && a) return Promise.resolve(!0);
              let l, c, u;
              r
                ? ((l = r.resolve), (c = r.reject), (u = r.promise))
                : (u = new Promise((t, e) => {
                    (l = t), (c = e);
                  }));
              const h = ++this.navigationId;
              return (
                this.setTransition({
                  id: h,
                  source: e,
                  restoredState: n,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.rawUrlTree,
                  rawUrl: t,
                  extras: s,
                  resolve: l,
                  reject: c,
                  promise: u,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState,
                }),
                u.catch((t) => Promise.reject(t))
              );
            }
            setBrowserUrl(t, e, n, s) {
              const r = this.urlSerializer.serialize(t);
              (s = s || {}),
                this.location.isCurrentPathEqualTo(r) || e
                  ? this.location.replaceState(
                      r,
                      "",
                      Object.assign(Object.assign({}, s), { navigationId: n })
                    )
                  : this.location.go(
                      r,
                      "",
                      Object.assign(Object.assign({}, s), { navigationId: n })
                    );
            }
            resetStateAndUrl(t, e, n) {
              (this.routerState = t),
                (this.currentUrlTree = e),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(
                  this.currentUrlTree,
                  n
                )),
                this.resetUrlToCurrentUrlTree();
            }
            resetUrlToCurrentUrlTree() {
              this.location.replaceState(
                this.urlSerializer.serialize(this.rawUrlTree),
                "",
                { navigationId: this.lastSuccessfulId }
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                r.Rb(r.N),
                r.Rb(It),
                r.Rb(un),
                r.Rb(s.f),
                r.Rb(r.r),
                r.Rb(r.w),
                r.Rb(r.i),
                r.Rb(void 0)
              );
            }),
            (t.ɵprov = r.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        gn = (() => {
          class t {
            constructor(t, e, n, s, r) {
              (this.router = t),
                (this.route = e),
                (this.commands = []),
                (this.onChanges = new S.a()),
                null == n && s.setAttribute(r.nativeElement, "tabindex", "0");
            }
            ngOnChanges(t) {
              this.onChanges.next(this);
            }
            set routerLink(t) {
              this.commands = null != t ? (Array.isArray(t) ? t : [t]) : [];
            }
            set preserveQueryParams(t) {
              Object(r.V)() &&
                console &&
                console.warn &&
                console.warn(
                  "preserveQueryParams is deprecated!, use queryParamsHandling instead."
                ),
                (this.preserve = t);
            }
            onClick() {
              const t = {
                skipLocationChange: bn(this.skipLocationChange),
                replaceUrl: bn(this.replaceUrl),
                state: this.state,
              };
              return this.router.navigateByUrl(this.urlTree, t), !0;
            }
            get urlTree() {
              return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: bn(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: bn(this.preserveFragment),
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                r.Kb(mn),
                r.Kb(Jt),
                r.Sb("tabindex"),
                r.Kb(r.E),
                r.Kb(r.l)
              );
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
              hostBindings: function (t, e) {
                1 & t &&
                  r.Ub("click", function () {
                    return e.onClick();
                  });
              },
              inputs: {
                routerLink: "routerLink",
                preserveQueryParams: "preserveQueryParams",
                queryParams: "queryParams",
                fragment: "fragment",
                queryParamsHandling: "queryParamsHandling",
                preserveFragment: "preserveFragment",
                skipLocationChange: "skipLocationChange",
                replaceUrl: "replaceUrl",
                state: "state",
              },
              features: [r.xb],
            })),
            t
          );
        })(),
        _n = (() => {
          class t {
            constructor(t, e, n) {
              (this.router = t),
                (this.route = e),
                (this.locationStrategy = n),
                (this.commands = []),
                (this.onChanges = new S.a()),
                (this.subscription = t.events.subscribe((t) => {
                  t instanceof J && this.updateTargetUrlAndHref();
                }));
            }
            set routerLink(t) {
              this.commands = null != t ? (Array.isArray(t) ? t : [t]) : [];
            }
            set preserveQueryParams(t) {
              Object(r.V)() &&
                console &&
                console.warn &&
                console.warn(
                  "preserveQueryParams is deprecated, use queryParamsHandling instead."
                ),
                (this.preserve = t);
            }
            ngOnChanges(t) {
              this.updateTargetUrlAndHref(), this.onChanges.next(this);
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
            onClick(t, e, n, s, r) {
              if (0 !== t || e || n || s || r) return !0;
              if ("string" == typeof this.target && "_self" != this.target)
                return !0;
              const i = {
                skipLocationChange: bn(this.skipLocationChange),
                replaceUrl: bn(this.replaceUrl),
                state: this.state,
              };
              return this.router.navigateByUrl(this.urlTree, i), !1;
            }
            updateTargetUrlAndHref() {
              this.href = this.locationStrategy.prepareExternalUrl(
                this.router.serializeUrl(this.urlTree)
              );
            }
            get urlTree() {
              return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: bn(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: bn(this.preserveFragment),
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Kb(mn), r.Kb(Jt), r.Kb(s.g));
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [
                ["a", "routerLink", ""],
                ["area", "routerLink", ""],
              ],
              hostVars: 2,
              hostBindings: function (t, e) {
                1 & t &&
                  r.Ub("click", function (t) {
                    return e.onClick(
                      t.button,
                      t.ctrlKey,
                      t.shiftKey,
                      t.altKey,
                      t.metaKey
                    );
                  }),
                  2 & t &&
                    (r.Qb("href", e.href, r.jc), r.Ab("target", e.target));
              },
              inputs: {
                routerLink: "routerLink",
                preserveQueryParams: "preserveQueryParams",
                target: "target",
                queryParams: "queryParams",
                fragment: "fragment",
                queryParamsHandling: "queryParamsHandling",
                preserveFragment: "preserveFragment",
                skipLocationChange: "skipLocationChange",
                replaceUrl: "replaceUrl",
                state: "state",
              },
              features: [r.xb],
            })),
            t
          );
        })();
      function bn(t) {
        return "" === t || !!t;
      }
      let yn = (() => {
          class t {
            constructor(t, e, n, s, r, i) {
              (this.router = t),
                (this.element = e),
                (this.renderer = n),
                (this.cdr = s),
                (this.link = r),
                (this.linkWithHref = i),
                (this.classes = []),
                (this.isActive = !1),
                (this.routerLinkActiveOptions = { exact: !1 }),
                (this.routerEventsSubscription = t.events.subscribe((t) => {
                  t instanceof J && this.update();
                }));
            }
            ngAfterContentInit() {
              Object(o.a)([
                this.links.changes,
                this.linksWithHrefs.changes,
                Object(i.a)(null),
              ])
                .pipe(Object(Z.a)())
                .subscribe((t) => {
                  this.update(), this.subscribeToEachLinkOnChanges();
                });
            }
            subscribeToEachLinkOnChanges() {
              var t;
              null === (t = this.linkInputChangesSubscription) ||
                void 0 === t ||
                t.unsubscribe();
              const e = [
                ...this.links.toArray(),
                ...this.linksWithHrefs.toArray(),
                this.link,
                this.linkWithHref,
              ]
                .filter((t) => !!t)
                .map((t) => t.onChanges);
              this.linkInputChangesSubscription = Object(o.a)(e)
                .pipe(Object(Z.a)())
                .subscribe((t) => {
                  this.isActive !== this.isLinkActive(this.router)(t) &&
                    this.update();
                });
            }
            set routerLinkActive(t) {
              const e = Array.isArray(t) ? t : t.split(" ");
              this.classes = e.filter((t) => !!t);
            }
            ngOnChanges(t) {
              this.update();
            }
            ngOnDestroy() {
              var t;
              this.routerEventsSubscription.unsubscribe(),
                null === (t = this.linkInputChangesSubscription) ||
                  void 0 === t ||
                  t.unsubscribe();
            }
            update() {
              this.links &&
                this.linksWithHrefs &&
                this.router.navigated &&
                Promise.resolve().then(() => {
                  const t = this.hasActiveLinks();
                  this.isActive !== t &&
                    ((this.isActive = t),
                    this.cdr.markForCheck(),
                    this.classes.forEach((e) => {
                      t
                        ? this.renderer.addClass(this.element.nativeElement, e)
                        : this.renderer.removeClass(
                            this.element.nativeElement,
                            e
                          );
                    }));
                });
            }
            isLinkActive(t) {
              return (e) =>
                t.isActive(e.urlTree, this.routerLinkActiveOptions.exact);
            }
            hasActiveLinks() {
              const t = this.isLinkActive(this.router);
              return (
                (this.link && t(this.link)) ||
                (this.linkWithHref && t(this.linkWithHref)) ||
                this.links.some(t) ||
                this.linksWithHrefs.some(t)
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                r.Kb(mn),
                r.Kb(r.l),
                r.Kb(r.E),
                r.Kb(r.h),
                r.Kb(gn, 8),
                r.Kb(_n, 8)
              );
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [["", "routerLinkActive", ""]],
              contentQueries: function (t, e, n) {
                var s;
                1 & t && (r.Db(n, gn, !0), r.Db(n, _n, !0)),
                  2 & t &&
                    (r.gc((s = r.Vb())) && (e.links = s),
                    r.gc((s = r.Vb())) && (e.linksWithHrefs = s));
              },
              inputs: {
                routerLinkActiveOptions: "routerLinkActiveOptions",
                routerLinkActive: "routerLinkActive",
              },
              exportAs: ["routerLinkActive"],
              features: [r.xb],
            })),
            t
          );
        })(),
        vn = (() => {
          class t {
            constructor(t, e, n, s, i) {
              (this.parentContexts = t),
                (this.location = e),
                (this.resolver = n),
                (this.changeDetector = i),
                (this.activated = null),
                (this._activatedRoute = null),
                (this.activateEvents = new r.n()),
                (this.deactivateEvents = new r.n()),
                (this.name = s || ft),
                t.onChildOutletCreated(this.name, this);
            }
            ngOnDestroy() {
              this.parentContexts.onChildOutletDestroyed(this.name);
            }
            ngOnInit() {
              if (!this.activated) {
                const t = this.parentContexts.getContext(this.name);
                t &&
                  t.route &&
                  (t.attachRef
                    ? this.attach(t.attachRef, t.route)
                    : this.activateWith(t.route, t.resolver || null));
              }
            }
            get isActivated() {
              return !!this.activated;
            }
            get component() {
              if (!this.activated) throw new Error("Outlet is not activated");
              return this.activated.instance;
            }
            get activatedRoute() {
              if (!this.activated) throw new Error("Outlet is not activated");
              return this._activatedRoute;
            }
            get activatedRouteData() {
              return this._activatedRoute
                ? this._activatedRoute.snapshot.data
                : {};
            }
            detach() {
              if (!this.activated) throw new Error("Outlet is not activated");
              this.location.detach();
              const t = this.activated;
              return (this.activated = null), (this._activatedRoute = null), t;
            }
            attach(t, e) {
              (this.activated = t),
                (this._activatedRoute = e),
                this.location.insert(t.hostView);
            }
            deactivate() {
              if (this.activated) {
                const t = this.component;
                this.activated.destroy(),
                  (this.activated = null),
                  (this._activatedRoute = null),
                  this.deactivateEvents.emit(t);
              }
            }
            activateWith(t, e) {
              if (this.isActivated)
                throw new Error("Cannot activate an already activated outlet");
              this._activatedRoute = t;
              const n = (e = e || this.resolver).resolveComponentFactory(
                  t._futureSnapshot.routeConfig.component
                ),
                s = this.parentContexts.getOrCreateContext(this.name).children,
                r = new wn(t, s, this.location.injector);
              (this.activated = this.location.createComponent(
                n,
                this.location.length,
                r
              )),
                this.changeDetector.markForCheck(),
                this.activateEvents.emit(this.activated.instance);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                r.Kb(un),
                r.Kb(r.P),
                r.Kb(r.j),
                r.Sb("name"),
                r.Kb(r.h)
              );
            }),
            (t.ɵdir = r.Fb({
              type: t,
              selectors: [["router-outlet"]],
              outputs: {
                activateEvents: "activate",
                deactivateEvents: "deactivate",
              },
              exportAs: ["outlet"],
            })),
            t
          );
        })();
      class wn {
        constructor(t, e, n) {
          (this.route = t), (this.childContexts = e), (this.parent = n);
        }
        get(t, e) {
          return t === Jt
            ? this.route
            : t === un
            ? this.childContexts
            : this.parent.get(t, e);
        }
      }
      class Cn {}
      class Sn {
        preload(t, e) {
          return Object(i.a)(null);
        }
      }
      let En = (() => {
          class t {
            constructor(t, e, n, s, r) {
              (this.router = t),
                (this.injector = s),
                (this.preloadingStrategy = r),
                (this.loader = new ln(
                  e,
                  n,
                  (e) => t.triggerEvent(new at(e)),
                  (e) => t.triggerEvent(new lt(e))
                ));
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  Object(x.a)((t) => t instanceof J),
                  Object($.a)(() => this.preload())
                )
                .subscribe(() => {});
            }
            preload() {
              const t = this.injector.get(r.x);
              return this.processRoutes(t, this.router.config);
            }
            ngOnDestroy() {
              this.subscription && this.subscription.unsubscribe();
            }
            processRoutes(t, e) {
              const n = [];
              for (const s of e)
                if (s.loadChildren && !s.canLoad && s._loadedConfig) {
                  const t = s._loadedConfig;
                  n.push(this.processRoutes(t.module, t.routes));
                } else
                  s.loadChildren && !s.canLoad
                    ? n.push(this.preloadConfig(t, s))
                    : s.children && n.push(this.processRoutes(t, s.children));
              return Object(o.a)(n).pipe(
                Object(Z.a)(),
                Object(E.a)((t) => {})
              );
            }
            preloadConfig(t, e) {
              return this.preloadingStrategy.preload(e, () =>
                this.loader
                  .load(t.injector, e)
                  .pipe(
                    Object(W.a)(
                      (t) => (
                        (e._loadedConfig = t),
                        this.processRoutes(t.module, t.routes)
                      )
                    )
                  )
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                r.Rb(mn),
                r.Rb(r.w),
                r.Rb(r.i),
                r.Rb(r.r),
                r.Rb(Cn)
              );
            }),
            (t.ɵprov = r.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        On = (() => {
          class t {
            constructor(t, e, n = {}) {
              (this.router = t),
                (this.viewportScroller = e),
                (this.options = n),
                (this.lastId = 0),
                (this.lastSource = "imperative"),
                (this.restoredId = 0),
                (this.store = {}),
                (n.scrollPositionRestoration =
                  n.scrollPositionRestoration || "disabled"),
                (n.anchorScrolling = n.anchorScrolling || "disabled");
            }
            init() {
              "disabled" !== this.options.scrollPositionRestoration &&
                this.viewportScroller.setHistoryScrollRestoration("manual"),
                (this.routerEventsSubscription = this.createScrollEvents()),
                (this.scrollEventsSubscription = this.consumeScrollEvents());
            }
            createScrollEvents() {
              return this.router.events.subscribe((t) => {
                t instanceof X
                  ? ((this.store[
                      this.lastId
                    ] = this.viewportScroller.getScrollPosition()),
                    (this.lastSource = t.navigationTrigger),
                    (this.restoredId = t.restoredState
                      ? t.restoredState.navigationId
                      : 0))
                  : t instanceof J &&
                    ((this.lastId = t.id),
                    this.scheduleScrollEvent(
                      t,
                      this.router.parseUrl(t.urlAfterRedirects).fragment
                    ));
              });
            }
            consumeScrollEvents() {
              return this.router.events.subscribe((t) => {
                t instanceof pt &&
                  (t.position
                    ? "top" === this.options.scrollPositionRestoration
                      ? this.viewportScroller.scrollToPosition([0, 0])
                      : "enabled" === this.options.scrollPositionRestoration &&
                        this.viewportScroller.scrollToPosition(t.position)
                    : t.anchor && "enabled" === this.options.anchorScrolling
                    ? this.viewportScroller.scrollToAnchor(t.anchor)
                    : "disabled" !== this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition([0, 0]));
              });
            }
            scheduleScrollEvent(t, e) {
              this.router.triggerEvent(
                new pt(
                  t,
                  "popstate" === this.lastSource
                    ? this.store[this.restoredId]
                    : null,
                  e
                )
              );
            }
            ngOnDestroy() {
              this.routerEventsSubscription &&
                this.routerEventsSubscription.unsubscribe(),
                this.scrollEventsSubscription &&
                  this.scrollEventsSubscription.unsubscribe();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r.Rb(mn), r.Rb(s.n), r.Rb(void 0));
            }),
            (t.ɵprov = r.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      const xn = new r.q("ROUTER_CONFIGURATION"),
        kn = new r.q("ROUTER_FORROOT_GUARD"),
        Tn = [
          s.f,
          { provide: It, useClass: jt },
          {
            provide: mn,
            useFactory: function (t, e, n, r, i, o, a, l = {}, c, u) {
              const h = new mn(null, t, e, n, r, i, o, wt(a));
              if (
                (c && (h.urlHandlingStrategy = c),
                u && (h.routeReuseStrategy = u),
                l.errorHandler && (h.errorHandler = l.errorHandler),
                l.malformedUriErrorHandler &&
                  (h.malformedUriErrorHandler = l.malformedUriErrorHandler),
                l.enableTracing)
              ) {
                const t = Object(s.r)();
                h.events.subscribe((e) => {
                  t.logGroup("Router Event: " + e.constructor.name),
                    t.log(e.toString()),
                    t.log(e),
                    t.logGroupEnd();
                });
              }
              return (
                l.onSameUrlNavigation &&
                  (h.onSameUrlNavigation = l.onSameUrlNavigation),
                l.paramsInheritanceStrategy &&
                  (h.paramsInheritanceStrategy = l.paramsInheritanceStrategy),
                l.urlUpdateStrategy &&
                  (h.urlUpdateStrategy = l.urlUpdateStrategy),
                l.relativeLinkResolution &&
                  (h.relativeLinkResolution = l.relativeLinkResolution),
                h
              );
            },
            deps: [
              It,
              un,
              s.f,
              r.r,
              r.w,
              r.i,
              an,
              xn,
              [class {}, new r.A()],
              [class {}, new r.A()],
            ],
          },
          un,
          {
            provide: Jt,
            useFactory: function (t) {
              return t.routerState.root;
            },
            deps: [mn],
          },
          { provide: r.w, useClass: r.K },
          En,
          Sn,
          class {
            preload(t, e) {
              return e().pipe(Object(q.a)(() => Object(i.a)(null)));
            }
          },
          { provide: xn, useValue: { enableTracing: !1 } },
        ];
      function Rn() {
        return new r.y("Router", mn);
      }
      let An = (() => {
        class t {
          constructor(t, e) {}
          static forRoot(e, n) {
            return {
              ngModule: t,
              providers: [
                Tn,
                Dn(e),
                {
                  provide: kn,
                  useFactory: Pn,
                  deps: [[mn, new r.A(), new r.J()]],
                },
                { provide: xn, useValue: n || {} },
                {
                  provide: s.g,
                  useFactory: jn,
                  deps: [s.l, [new r.p(s.a), new r.A()], xn],
                },
                { provide: On, useFactory: In, deps: [mn, s.n, xn] },
                {
                  provide: Cn,
                  useExisting:
                    n && n.preloadingStrategy ? n.preloadingStrategy : Sn,
                },
                { provide: r.y, multi: !0, useFactory: Rn },
                [
                  Nn,
                  { provide: r.d, multi: !0, useFactory: Ln, deps: [Nn] },
                  { provide: Fn, useFactory: Mn, deps: [Nn] },
                  { provide: r.b, multi: !0, useExisting: Fn },
                ],
              ],
            };
          }
          static forChild(e) {
            return { ngModule: t, providers: [Dn(e)] };
          }
        }
        return (
          (t.ɵmod = r.Ib({ type: t })),
          (t.ɵinj = r.Hb({
            factory: function (e) {
              return new (e || t)(r.Rb(kn, 8), r.Rb(mn, 8));
            },
          })),
          t
        );
      })();
      function In(t, e, n) {
        return n.scrollOffset && e.setOffset(n.scrollOffset), new On(t, e, n);
      }
      function jn(t, e, n = {}) {
        return n.useHash ? new s.d(t, e) : new s.k(t, e);
      }
      function Pn(t) {
        if (t)
          throw new Error(
            "RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead."
          );
        return "guarded";
      }
      function Dn(t) {
        return [
          { provide: r.a, multi: !0, useValue: t },
          { provide: an, multi: !0, useValue: t },
        ];
      }
      let Nn = (() => {
        class t {
          constructor(t) {
            (this.injector = t),
              (this.initNavigation = !1),
              (this.resultOfPreactivationDone = new S.a());
          }
          appInitializer() {
            return this.injector.get(s.e, Promise.resolve(null)).then(() => {
              let t = null;
              const e = new Promise((e) => (t = e)),
                n = this.injector.get(mn),
                s = this.injector.get(xn);
              if (this.isLegacyDisabled(s) || this.isLegacyEnabled(s)) t(!0);
              else if ("disabled" === s.initialNavigation)
                n.setUpLocationChangeListener(), t(!0);
              else {
                if ("enabled" !== s.initialNavigation)
                  throw new Error(
                    `Invalid initialNavigation options: '${s.initialNavigation}'`
                  );
                (n.hooks.afterPreactivation = () =>
                  this.initNavigation
                    ? Object(i.a)(null)
                    : ((this.initNavigation = !0),
                      t(!0),
                      this.resultOfPreactivationDone)),
                  n.initialNavigation();
              }
              return e;
            });
          }
          bootstrapListener(t) {
            const e = this.injector.get(xn),
              n = this.injector.get(En),
              s = this.injector.get(On),
              i = this.injector.get(mn),
              o = this.injector.get(r.g);
            t === o.components[0] &&
              (this.isLegacyEnabled(e)
                ? i.initialNavigation()
                : this.isLegacyDisabled(e) && i.setUpLocationChangeListener(),
              n.setUpPreloading(),
              s.init(),
              i.resetRootComponentType(o.componentTypes[0]),
              this.resultOfPreactivationDone.next(null),
              this.resultOfPreactivationDone.complete());
          }
          isLegacyEnabled(t) {
            return (
              "legacy_enabled" === t.initialNavigation ||
              !0 === t.initialNavigation ||
              void 0 === t.initialNavigation
            );
          }
          isLegacyDisabled(t) {
            return (
              "legacy_disabled" === t.initialNavigation ||
              !1 === t.initialNavigation
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r.Rb(r.r));
          }),
          (t.ɵprov = r.Gb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function Ln(t) {
        return t.appInitializer.bind(t);
      }
      function Mn(t) {
        return t.bootstrapListener.bind(t);
      }
      const Fn = new r.q("Router Initializer");
    },
    vkgz: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n("7o/Q"),
        r = n("KqfI"),
        i = n("n6bG");
      function o(t, e, n) {
        return function (s) {
          return s.lift(new a(t, e, n));
        };
      }
      class a {
        constructor(t, e, n) {
          (this.nextOrObserver = t), (this.error = e), (this.complete = n);
        }
        call(t, e) {
          return e.subscribe(
            new l(t, this.nextOrObserver, this.error, this.complete)
          );
        }
      }
      class l extends s.a {
        constructor(t, e, n, s) {
          super(t),
            (this._tapNext = r.a),
            (this._tapError = r.a),
            (this._tapComplete = r.a),
            (this._tapError = n || r.a),
            (this._tapComplete = s || r.a),
            Object(i.a)(e)
              ? ((this._context = this), (this._tapNext = e))
              : e &&
                ((this._context = e),
                (this._tapNext = e.next || r.a),
                (this._tapError = e.error || r.a),
                (this._tapComplete = e.complete || r.a));
        }
        _next(t) {
          try {
            this._tapNext.call(this._context, t);
          } catch (e) {
            return void this.destination.error(e);
          }
          this.destination.next(t);
        }
        _error(t) {
          try {
            this._tapError.call(this._context, t);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.error(t);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (t) {
            return void this.destination.error(t);
          }
          return this.destination.complete();
        }
      }
    },
    w1tV: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      });
      var s = n("oB13"),
        r = n("x+ZX"),
        i = n("XNiG");
      function o() {
        return new i.a();
      }
      function a() {
        return (t) => Object(r.a)()(Object(s.a)(o)(t));
      }
    },
    "x+ZX": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var s = n("7o/Q");
      function r() {
        return function (t) {
          return t.lift(new i(t));
        };
      }
      class i {
        constructor(t) {
          this.connectable = t;
        }
        call(t, e) {
          const { connectable: n } = this;
          n._refCount++;
          const s = new o(t, n),
            r = e.subscribe(s);
          return s.closed || (s.connection = n.connect()), r;
        }
      }
      class o extends s.a {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _unsubscribe() {
          const { connectable: t } = this;
          if (!t) return void (this.connection = null);
          this.connectable = null;
          const e = t._refCount;
          if (e <= 0) return void (this.connection = null);
          if (((t._refCount = e - 1), e > 1))
            return void (this.connection = null);
          const { connection: n } = this,
            s = t._connection;
          (this.connection = null), !s || (n && s !== n) || s.unsubscribe();
        }
      }
    },
    yCtX: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var s = n("HDdC"),
        r = n("ngJS"),
        i = n("jZKg");
      function o(t, e) {
        return e ? Object(i.a)(t, e) : new s.a(Object(r.a)(t));
      }
    },
    "z+Ro": function (t, e, n) {
      "use strict";
      function s(t) {
        return t && "function" == typeof t.schedule;
      }
      n.d(e, "a", function () {
        return s;
      });
    },
    z6cu: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var s = n("HDdC");
      function r(t, e) {
        return new s.a(
          e
            ? (n) => e.schedule(i, 0, { error: t, subscriber: n })
            : (e) => e.error(t)
        );
      }
      function i({ error: t, subscriber: e }) {
        e.error(t);
      }
    },
    zUnb: function (t, e, n) {
      "use strict";
      n.r(e);
      var s = n("fXoL"),
        r = n("AytR"),
        i = n("ofXK");
      class o extends i.p {
        constructor() {
          super();
        }
        supportsDOMEvents() {
          return !0;
        }
      }
      class a extends o {
        static makeCurrent() {
          Object(i.t)(new a());
        }
        getProperty(t, e) {
          return t[e];
        }
        log(t) {
          window.console && window.console.log && window.console.log(t);
        }
        logGroup(t) {
          window.console && window.console.group && window.console.group(t);
        }
        logGroupEnd() {
          window.console &&
            window.console.groupEnd &&
            window.console.groupEnd();
        }
        onAndCancel(t, e, n) {
          return (
            t.addEventListener(e, n, !1),
            () => {
              t.removeEventListener(e, n, !1);
            }
          );
        }
        dispatchEvent(t, e) {
          t.dispatchEvent(e);
        }
        remove(t) {
          return t.parentNode && t.parentNode.removeChild(t), t;
        }
        getValue(t) {
          return t.value;
        }
        createElement(t, e) {
          return (e = e || this.getDefaultDocument()).createElement(t);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(t) {
          return t.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(t) {
          return t instanceof DocumentFragment;
        }
        getGlobalEventTarget(t, e) {
          return "window" === e
            ? window
            : "document" === e
            ? t
            : "body" === e
            ? t.body
            : null;
        }
        getHistory() {
          return window.history;
        }
        getLocation() {
          return window.location;
        }
        getBaseHref(t) {
          const e =
            c || ((c = document.querySelector("base")), c)
              ? c.getAttribute("href")
              : null;
          return null == e
            ? null
            : ((n = e),
              l || (l = document.createElement("a")),
              l.setAttribute("href", n),
              "/" === l.pathname.charAt(0) ? l.pathname : "/" + l.pathname);
          var n;
        }
        resetBaseElement() {
          c = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        performanceNow() {
          return window.performance && window.performance.now
            ? window.performance.now()
            : new Date().getTime();
        }
        supportsCookies() {
          return !0;
        }
        getCookie(t) {
          return Object(i.s)(document.cookie, t);
        }
      }
      let l,
        c = null;
      const u = new s.q("TRANSITION_ID"),
        h = [
          {
            provide: s.d,
            useFactory: function (t, e, n) {
              return () => {
                n.get(s.e).donePromise.then(() => {
                  const n = Object(i.r)();
                  Array.prototype.slice
                    .apply(e.querySelectorAll("style[ng-transition]"))
                    .filter((e) => e.getAttribute("ng-transition") === t)
                    .forEach((t) => n.remove(t));
                });
              };
            },
            deps: [u, i.c, s.r],
            multi: !0,
          },
        ];
      class d {
        static init() {
          Object(s.X)(new d());
        }
        addToWindow(t) {
          (s.ob.getAngularTestability = (e, n = !0) => {
            const s = t.findTestabilityInTree(e, n);
            if (null == s)
              throw new Error("Could not find testability for element.");
            return s;
          }),
            (s.ob.getAllAngularTestabilities = () => t.getAllTestabilities()),
            (s.ob.getAllAngularRootElements = () => t.getAllRootElements()),
            s.ob.frameworkStabilizers || (s.ob.frameworkStabilizers = []),
            s.ob.frameworkStabilizers.push((t) => {
              const e = s.ob.getAllAngularTestabilities();
              let n = e.length,
                r = !1;
              const i = function (e) {
                (r = r || e), n--, 0 == n && t(r);
              };
              e.forEach(function (t) {
                t.whenStable(i);
              });
            });
        }
        findTestabilityInTree(t, e, n) {
          if (null == e) return null;
          const s = t.getTestability(e);
          return null != s
            ? s
            : n
            ? Object(i.r)().isShadowRoot(e)
              ? this.findTestabilityInTree(t, e.host, !0)
              : this.findTestabilityInTree(t, e.parentElement, !0)
            : null;
        }
      }
      const p = new s.q("EventManagerPlugins");
      let f = (() => {
        class t {
          constructor(t, e) {
            (this._zone = e),
              (this._eventNameToPlugin = new Map()),
              t.forEach((t) => (t.manager = this)),
              (this._plugins = t.slice().reverse());
          }
          addEventListener(t, e, n) {
            return this._findPluginFor(e).addEventListener(t, e, n);
          }
          addGlobalEventListener(t, e, n) {
            return this._findPluginFor(e).addGlobalEventListener(t, e, n);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(t) {
            const e = this._eventNameToPlugin.get(t);
            if (e) return e;
            const n = this._plugins;
            for (let s = 0; s < n.length; s++) {
              const e = n[s];
              if (e.supports(t)) return this._eventNameToPlugin.set(t, e), e;
            }
            throw new Error("No event manager plugin found for event " + t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Rb(p), s.Rb(s.z));
          }),
          (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class m {
        constructor(t) {
          this._doc = t;
        }
        addGlobalEventListener(t, e, n) {
          const s = Object(i.r)().getGlobalEventTarget(this._doc, t);
          if (!s)
            throw new Error(`Unsupported event target ${s} for event ${e}`);
          return this.addEventListener(s, e, n);
        }
      }
      let g = (() => {
          class t {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(t) {
              const e = new Set();
              t.forEach((t) => {
                this._stylesSet.has(t) || (this._stylesSet.add(t), e.add(t));
              }),
                this.onStylesAdded(e);
            }
            onStylesAdded(t) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        _ = (() => {
          class t extends g {
            constructor(t) {
              super(),
                (this._doc = t),
                (this._hostNodes = new Set()),
                (this._styleNodes = new Set()),
                this._hostNodes.add(t.head);
            }
            _addStylesToHost(t, e) {
              t.forEach((t) => {
                const n = this._doc.createElement("style");
                (n.textContent = t), this._styleNodes.add(e.appendChild(n));
              });
            }
            addHost(t) {
              this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t);
            }
            removeHost(t) {
              this._hostNodes.delete(t);
            }
            onStylesAdded(t) {
              this._hostNodes.forEach((e) => this._addStylesToHost(t, e));
            }
            ngOnDestroy() {
              this._styleNodes.forEach((t) => Object(i.r)().remove(t));
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Rb(i.c));
            }),
            (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      const b = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        y = /%COMP%/g;
      function v(t, e, n) {
        for (let s = 0; s < e.length; s++) {
          let r = e[s];
          Array.isArray(r) ? v(t, r, n) : ((r = r.replace(y, t)), n.push(r));
        }
        return n;
      }
      function w(t) {
        return (e) => {
          if ("__ngUnwrap__" === e) return t;
          !1 === t(e) && (e.preventDefault(), (e.returnValue = !1));
        };
      }
      let C = (() => {
        class t {
          constructor(t, e, n) {
            (this.eventManager = t),
              (this.sharedStylesHost = e),
              (this.appId = n),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new S(t));
          }
          createRenderer(t, e) {
            if (!t || !e) return this.defaultRenderer;
            switch (e.encapsulation) {
              case s.Q.Emulated: {
                let n = this.rendererByCompId.get(e.id);
                return (
                  n ||
                    ((n = new E(
                      this.eventManager,
                      this.sharedStylesHost,
                      e,
                      this.appId
                    )),
                    this.rendererByCompId.set(e.id, n)),
                  n.applyToHost(t),
                  n
                );
              }
              case s.Q.Native:
              case s.Q.ShadowDom:
                return new O(this.eventManager, this.sharedStylesHost, t, e);
              default:
                if (!this.rendererByCompId.has(e.id)) {
                  const t = v(e.id, e.styles, []);
                  this.sharedStylesHost.addStyles(t),
                    this.rendererByCompId.set(e.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Rb(f), s.Rb(_), s.Rb(s.c));
          }),
          (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class S {
        constructor(t) {
          (this.eventManager = t), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(t, e) {
          return e
            ? document.createElementNS(b[e] || e, t)
            : document.createElement(t);
        }
        createComment(t) {
          return document.createComment(t);
        }
        createText(t) {
          return document.createTextNode(t);
        }
        appendChild(t, e) {
          t.appendChild(e);
        }
        insertBefore(t, e, n) {
          t && t.insertBefore(e, n);
        }
        removeChild(t, e) {
          t && t.removeChild(e);
        }
        selectRootElement(t, e) {
          let n = "string" == typeof t ? document.querySelector(t) : t;
          if (!n)
            throw new Error(`The selector "${t}" did not match any elements`);
          return e || (n.textContent = ""), n;
        }
        parentNode(t) {
          return t.parentNode;
        }
        nextSibling(t) {
          return t.nextSibling;
        }
        setAttribute(t, e, n, s) {
          if (s) {
            e = s + ":" + e;
            const r = b[s];
            r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n);
          } else t.setAttribute(e, n);
        }
        removeAttribute(t, e, n) {
          if (n) {
            const s = b[n];
            s ? t.removeAttributeNS(s, e) : t.removeAttribute(`${n}:${e}`);
          } else t.removeAttribute(e);
        }
        addClass(t, e) {
          t.classList.add(e);
        }
        removeClass(t, e) {
          t.classList.remove(e);
        }
        setStyle(t, e, n, r) {
          r & s.G.DashCase
            ? t.style.setProperty(e, n, r & s.G.Important ? "important" : "")
            : (t.style[e] = n);
        }
        removeStyle(t, e, n) {
          n & s.G.DashCase ? t.style.removeProperty(e) : (t.style[e] = "");
        }
        setProperty(t, e, n) {
          t[e] = n;
        }
        setValue(t, e) {
          t.nodeValue = e;
        }
        listen(t, e, n) {
          return "string" == typeof t
            ? this.eventManager.addGlobalEventListener(t, e, w(n))
            : this.eventManager.addEventListener(t, e, w(n));
        }
      }
      class E extends S {
        constructor(t, e, n, s) {
          super(t), (this.component = n);
          const r = v(s + "-" + n.id, n.styles, []);
          e.addStyles(r),
            (this.contentAttr = "_ngcontent-%COMP%".replace(y, s + "-" + n.id)),
            (this.hostAttr = "_nghost-%COMP%".replace(y, s + "-" + n.id));
        }
        applyToHost(t) {
          super.setAttribute(t, this.hostAttr, "");
        }
        createElement(t, e) {
          const n = super.createElement(t, e);
          return super.setAttribute(n, this.contentAttr, ""), n;
        }
      }
      class O extends S {
        constructor(t, e, n, r) {
          super(t),
            (this.sharedStylesHost = e),
            (this.hostEl = n),
            (this.component = r),
            (this.shadowRoot =
              r.encapsulation === s.Q.ShadowDom
                ? n.attachShadow({ mode: "open" })
                : n.createShadowRoot()),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const i = v(r.id, r.styles, []);
          for (let s = 0; s < i.length; s++) {
            const t = document.createElement("style");
            (t.textContent = i[s]), this.shadowRoot.appendChild(t);
          }
        }
        nodeOrShadowRoot(t) {
          return t === this.hostEl ? this.shadowRoot : t;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(t, e) {
          return super.appendChild(this.nodeOrShadowRoot(t), e);
        }
        insertBefore(t, e, n) {
          return super.insertBefore(this.nodeOrShadowRoot(t), e, n);
        }
        removeChild(t, e) {
          return super.removeChild(this.nodeOrShadowRoot(t), e);
        }
        parentNode(t) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(t))
          );
        }
      }
      let x = (() => {
        class t extends m {
          constructor(t) {
            super(t);
          }
          supports(t) {
            return !0;
          }
          addEventListener(t, e, n) {
            return (
              t.addEventListener(e, n, !1),
              () => this.removeEventListener(t, e, n)
            );
          }
          removeEventListener(t, e, n) {
            return t.removeEventListener(e, n);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Rb(i.c));
          }),
          (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const k = ["alt", "control", "meta", "shift"],
        T = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS",
        },
        R = {
          A: "1",
          B: "2",
          C: "3",
          D: "4",
          E: "5",
          F: "6",
          G: "7",
          H: "8",
          I: "9",
          J: "*",
          K: "+",
          M: "-",
          N: ".",
          O: "/",
          "`": "0",
          "\x90": "NumLock",
        },
        A = {
          alt: (t) => t.altKey,
          control: (t) => t.ctrlKey,
          meta: (t) => t.metaKey,
          shift: (t) => t.shiftKey,
        };
      let I = (() => {
          class t extends m {
            constructor(t) {
              super(t);
            }
            supports(e) {
              return null != t.parseEventName(e);
            }
            addEventListener(e, n, s) {
              const r = t.parseEventName(n),
                o = t.eventCallback(r.fullKey, s, this.manager.getZone());
              return this.manager
                .getZone()
                .runOutsideAngular(() =>
                  Object(i.r)().onAndCancel(e, r.domEventName, o)
                );
            }
            static parseEventName(e) {
              const n = e.toLowerCase().split("."),
                s = n.shift();
              if (0 === n.length || ("keydown" !== s && "keyup" !== s))
                return null;
              const r = t._normalizeKey(n.pop());
              let i = "";
              if (
                (k.forEach((t) => {
                  const e = n.indexOf(t);
                  e > -1 && (n.splice(e, 1), (i += t + "."));
                }),
                (i += r),
                0 != n.length || 0 === r.length)
              )
                return null;
              const o = {};
              return (o.domEventName = s), (o.fullKey = i), o;
            }
            static getEventFullKey(t) {
              let e = "",
                n = (function (t) {
                  let e = t.key;
                  if (null == e) {
                    if (((e = t.keyIdentifier), null == e))
                      return "Unidentified";
                    e.startsWith("U+") &&
                      ((e = String.fromCharCode(parseInt(e.substring(2), 16))),
                      3 === t.location && R.hasOwnProperty(e) && (e = R[e]));
                  }
                  return T[e] || e;
                })(t);
              return (
                (n = n.toLowerCase()),
                " " === n ? (n = "space") : "." === n && (n = "dot"),
                k.forEach((s) => {
                  s != n && (0, A[s])(t) && (e += s + ".");
                }),
                (e += n),
                e
              );
            }
            static eventCallback(e, n, s) {
              return (r) => {
                t.getEventFullKey(r) === e && s.runGuarded(() => n(r));
              };
            }
            static _normalizeKey(t) {
              switch (t) {
                case "esc":
                  return "escape";
                default:
                  return t;
              }
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Rb(i.c));
            }),
            (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        j = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = Object(s.Gb)({
              factory: function () {
                return Object(s.Rb)(P);
              },
              token: t,
              providedIn: "root",
            })),
            t
          );
        })(),
        P = (() => {
          class t extends j {
            constructor(t) {
              super(), (this._doc = t);
            }
            sanitize(t, e) {
              if (null == e) return null;
              switch (t) {
                case s.I.NONE:
                  return e;
                case s.I.HTML:
                  return Object(s.db)(e, "HTML")
                    ? Object(s.vb)(e)
                    : Object(s.bb)(this._doc, String(e));
                case s.I.STYLE:
                  return Object(s.db)(e, "Style") ? Object(s.vb)(e) : e;
                case s.I.SCRIPT:
                  if (Object(s.db)(e, "Script")) return Object(s.vb)(e);
                  throw new Error("unsafe value used in a script context");
                case s.I.URL:
                  return (
                    Object(s.nb)(e),
                    Object(s.db)(e, "URL")
                      ? Object(s.vb)(e)
                      : Object(s.cb)(String(e))
                  );
                case s.I.RESOURCE_URL:
                  if (Object(s.db)(e, "ResourceURL")) return Object(s.vb)(e);
                  throw new Error(
                    "unsafe value used in a resource URL context (see http://g.co/ng/security#xss)"
                  );
                default:
                  throw new Error(
                    `Unexpected SecurityContext ${t} (see http://g.co/ng/security#xss)`
                  );
              }
            }
            bypassSecurityTrustHtml(t) {
              return Object(s.eb)(t);
            }
            bypassSecurityTrustStyle(t) {
              return Object(s.hb)(t);
            }
            bypassSecurityTrustScript(t) {
              return Object(s.gb)(t);
            }
            bypassSecurityTrustUrl(t) {
              return Object(s.ib)(t);
            }
            bypassSecurityTrustResourceUrl(t) {
              return Object(s.fb)(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Rb(i.c));
            }),
            (t.ɵprov = Object(s.Gb)({
              factory: function () {
                return (t = Object(s.Rb)(s.o)), new P(t.get(i.c));
                var t;
              },
              token: t,
              providedIn: "root",
            })),
            t
          );
        })();
      const D = [
          { provide: s.B, useValue: i.q },
          {
            provide: s.C,
            useValue: function () {
              a.makeCurrent(), d.init();
            },
            multi: !0,
          },
          {
            provide: i.c,
            useFactory: function () {
              return Object(s.tb)(document), document;
            },
            deps: [],
          },
        ],
        N = Object(s.R)(s.W, "browser", D),
        L = [
          [],
          { provide: s.Z, useValue: "root" },
          {
            provide: s.m,
            useFactory: function () {
              return new s.m();
            },
            deps: [],
          },
          { provide: p, useClass: x, multi: !0, deps: [i.c, s.z, s.B] },
          { provide: p, useClass: I, multi: !0, deps: [i.c] },
          [],
          { provide: C, useClass: C, deps: [f, _, s.c] },
          { provide: s.F, useExisting: C },
          { provide: g, useExisting: _ },
          { provide: _, useClass: _, deps: [i.c] },
          { provide: s.M, useClass: s.M, deps: [s.z] },
          { provide: f, useClass: f, deps: [p, s.z] },
          [],
        ];
      let M = (() => {
        class t {
          constructor(t) {
            if (t)
              throw new Error(
                "BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead."
              );
          }
          static withServerTransition(e) {
            return {
              ngModule: t,
              providers: [
                { provide: s.c, useValue: e.appId },
                { provide: u, useExisting: s.c },
                h,
              ],
            };
          }
        }
        return (
          (t.ɵmod = s.Ib({ type: t })),
          (t.ɵinj = s.Hb({
            factory: function (e) {
              return new (e || t)(s.Rb(t, 12));
            },
            providers: L,
            imports: [i.b, s.f],
          })),
          t
        );
      })();
      "undefined" != typeof window && window;
      var F = n("LRne"),
        V = n("HDdC"),
        H = n("bOdf"),
        U = n("pLZG"),
        z = n("lJxs");
      class B {}
      class q {}
      class $ {
        constructor(t) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            t
              ? (this.lazyInit =
                  "string" == typeof t
                    ? () => {
                        (this.headers = new Map()),
                          t.split("\n").forEach((t) => {
                            const e = t.indexOf(":");
                            if (e > 0) {
                              const n = t.slice(0, e),
                                s = n.toLowerCase(),
                                r = t.slice(e + 1).trim();
                              this.maybeSetNormalizedName(n, s),
                                this.headers.has(s)
                                  ? this.headers.get(s).push(r)
                                  : this.headers.set(s, [r]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(t).forEach((e) => {
                            let n = t[e];
                            const s = e.toLowerCase();
                            "string" == typeof n && (n = [n]),
                              n.length > 0 &&
                                (this.headers.set(s, n),
                                this.maybeSetNormalizedName(e, s));
                          });
                      })
              : (this.headers = new Map());
        }
        has(t) {
          return this.init(), this.headers.has(t.toLowerCase());
        }
        get(t) {
          this.init();
          const e = this.headers.get(t.toLowerCase());
          return e && e.length > 0 ? e[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(t) {
          return this.init(), this.headers.get(t.toLowerCase()) || null;
        }
        append(t, e) {
          return this.clone({ name: t, value: e, op: "a" });
        }
        set(t, e) {
          return this.clone({ name: t, value: e, op: "s" });
        }
        delete(t, e) {
          return this.clone({ name: t, value: e, op: "d" });
        }
        maybeSetNormalizedName(t, e) {
          this.normalizedNames.has(e) || this.normalizedNames.set(e, t);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof $
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach((t) => this.applyUpdate(t)),
              (this.lazyUpdate = null)));
        }
        copyFrom(t) {
          t.init(),
            Array.from(t.headers.keys()).forEach((e) => {
              this.headers.set(e, t.headers.get(e)),
                this.normalizedNames.set(e, t.normalizedNames.get(e));
            });
        }
        clone(t) {
          const e = new $();
          return (
            (e.lazyInit =
              this.lazyInit && this.lazyInit instanceof $
                ? this.lazyInit
                : this),
            (e.lazyUpdate = (this.lazyUpdate || []).concat([t])),
            e
          );
        }
        applyUpdate(t) {
          const e = t.name.toLowerCase();
          switch (t.op) {
            case "a":
            case "s":
              let n = t.value;
              if (("string" == typeof n && (n = [n]), 0 === n.length)) return;
              this.maybeSetNormalizedName(t.name, e);
              const s = ("a" === t.op ? this.headers.get(e) : void 0) || [];
              s.push(...n), this.headers.set(e, s);
              break;
            case "d":
              const r = t.value;
              if (r) {
                let t = this.headers.get(e);
                if (!t) return;
                (t = t.filter((t) => -1 === r.indexOf(t))),
                  0 === t.length
                    ? (this.headers.delete(e), this.normalizedNames.delete(e))
                    : this.headers.set(e, t);
              } else this.headers.delete(e), this.normalizedNames.delete(e);
          }
        }
        forEach(t) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((e) =>
              t(this.normalizedNames.get(e), this.headers.get(e))
            );
        }
      }
      class K {
        encodeKey(t) {
          return W(t);
        }
        encodeValue(t) {
          return W(t);
        }
        decodeKey(t) {
          return decodeURIComponent(t);
        }
        decodeValue(t) {
          return decodeURIComponent(t);
        }
      }
      function W(t) {
        return encodeURIComponent(t)
          .replace(/%40/gi, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/gi, "$")
          .replace(/%2C/gi, ",")
          .replace(/%3B/gi, ";")
          .replace(/%2B/gi, "+")
          .replace(/%3D/gi, "=")
          .replace(/%3F/gi, "?")
          .replace(/%2F/gi, "/");
      }
      class G {
        constructor(t = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = t.encoder || new K()),
            t.fromString)
          ) {
            if (t.fromObject)
              throw new Error("Cannot specify both fromString and fromObject.");
            this.map = (function (t, e) {
              const n = new Map();
              return (
                t.length > 0 &&
                  t.split("&").forEach((t) => {
                    const s = t.indexOf("="),
                      [r, i] =
                        -1 == s
                          ? [e.decodeKey(t), ""]
                          : [
                              e.decodeKey(t.slice(0, s)),
                              e.decodeValue(t.slice(s + 1)),
                            ],
                      o = n.get(r) || [];
                    o.push(i), n.set(r, o);
                  }),
                n
              );
            })(t.fromString, this.encoder);
          } else
            t.fromObject
              ? ((this.map = new Map()),
                Object.keys(t.fromObject).forEach((e) => {
                  const n = t.fromObject[e];
                  this.map.set(e, Array.isArray(n) ? n : [n]);
                }))
              : (this.map = null);
        }
        has(t) {
          return this.init(), this.map.has(t);
        }
        get(t) {
          this.init();
          const e = this.map.get(t);
          return e ? e[0] : null;
        }
        getAll(t) {
          return this.init(), this.map.get(t) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(t, e) {
          return this.clone({ param: t, value: e, op: "a" });
        }
        set(t, e) {
          return this.clone({ param: t, value: e, op: "s" });
        }
        delete(t, e) {
          return this.clone({ param: t, value: e, op: "d" });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((t) => {
                const e = this.encoder.encodeKey(t);
                return this.map
                  .get(t)
                  .map((t) => e + "=" + this.encoder.encodeValue(t))
                  .join("&");
              })
              .filter((t) => "" !== t)
              .join("&")
          );
        }
        clone(t) {
          const e = new G({ encoder: this.encoder });
          return (
            (e.cloneFrom = this.cloneFrom || this),
            (e.updates = (this.updates || []).concat([t])),
            e
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach((t) => this.map.set(t, this.cloneFrom.map.get(t))),
              this.updates.forEach((t) => {
                switch (t.op) {
                  case "a":
                  case "s":
                    const e =
                      ("a" === t.op ? this.map.get(t.param) : void 0) || [];
                    e.push(t.value), this.map.set(t.param, e);
                    break;
                  case "d":
                    if (void 0 === t.value) {
                      this.map.delete(t.param);
                      break;
                    }
                    {
                      let e = this.map.get(t.param) || [];
                      const n = e.indexOf(t.value);
                      -1 !== n && e.splice(n, 1),
                        e.length > 0
                          ? this.map.set(t.param, e)
                          : this.map.delete(t.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      function Q(t) {
        return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer;
      }
      function Z(t) {
        return "undefined" != typeof Blob && t instanceof Blob;
      }
      function Y(t) {
        return "undefined" != typeof FormData && t instanceof FormData;
      }
      class X {
        constructor(t, e, n, s) {
          let r;
          if (
            ((this.url = e),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = "json"),
            (this.method = t.toUpperCase()),
            (function (t) {
              switch (t) {
                case "DELETE":
                case "GET":
                case "HEAD":
                case "OPTIONS":
                case "JSONP":
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || s
              ? ((this.body = void 0 !== n ? n : null), (r = s))
              : (r = n),
            r &&
              ((this.reportProgress = !!r.reportProgress),
              (this.withCredentials = !!r.withCredentials),
              r.responseType && (this.responseType = r.responseType),
              r.headers && (this.headers = r.headers),
              r.params && (this.params = r.params)),
            this.headers || (this.headers = new $()),
            this.params)
          ) {
            const t = this.params.toString();
            if (0 === t.length) this.urlWithParams = e;
            else {
              const n = e.indexOf("?");
              this.urlWithParams =
                e + (-1 === n ? "?" : n < e.length - 1 ? "&" : "") + t;
            }
          } else (this.params = new G()), (this.urlWithParams = e);
        }
        serializeBody() {
          return null === this.body
            ? null
            : Q(this.body) ||
              Z(this.body) ||
              Y(this.body) ||
              "string" == typeof this.body
            ? this.body
            : this.body instanceof G
            ? this.body.toString()
            : "object" == typeof this.body ||
              "boolean" == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || Y(this.body)
            ? null
            : Z(this.body)
            ? this.body.type || null
            : Q(this.body)
            ? null
            : "string" == typeof this.body
            ? "text/plain"
            : this.body instanceof G
            ? "application/x-www-form-urlencoded;charset=UTF-8"
            : "object" == typeof this.body ||
              "number" == typeof this.body ||
              Array.isArray(this.body)
            ? "application/json"
            : null;
        }
        clone(t = {}) {
          const e = t.method || this.method,
            n = t.url || this.url,
            s = t.responseType || this.responseType,
            r = void 0 !== t.body ? t.body : this.body,
            i =
              void 0 !== t.withCredentials
                ? t.withCredentials
                : this.withCredentials,
            o =
              void 0 !== t.reportProgress
                ? t.reportProgress
                : this.reportProgress;
          let a = t.headers || this.headers,
            l = t.params || this.params;
          return (
            void 0 !== t.setHeaders &&
              (a = Object.keys(t.setHeaders).reduce(
                (e, n) => e.set(n, t.setHeaders[n]),
                a
              )),
            t.setParams &&
              (l = Object.keys(t.setParams).reduce(
                (e, n) => e.set(n, t.setParams[n]),
                l
              )),
            new X(e, n, r, {
              params: l,
              headers: a,
              reportProgress: o,
              responseType: s,
              withCredentials: i,
            })
          );
        }
      }
      var J = (function (t) {
        return (
          (t[(t.Sent = 0)] = "Sent"),
          (t[(t.UploadProgress = 1)] = "UploadProgress"),
          (t[(t.ResponseHeader = 2)] = "ResponseHeader"),
          (t[(t.DownloadProgress = 3)] = "DownloadProgress"),
          (t[(t.Response = 4)] = "Response"),
          (t[(t.User = 5)] = "User"),
          t
        );
      })({});
      class tt {
        constructor(t, e = 200, n = "OK") {
          (this.headers = t.headers || new $()),
            (this.status = void 0 !== t.status ? t.status : e),
            (this.statusText = t.statusText || n),
            (this.url = t.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class et extends tt {
        constructor(t = {}) {
          super(t), (this.type = J.ResponseHeader);
        }
        clone(t = {}) {
          return new et({
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0,
          });
        }
      }
      class nt extends tt {
        constructor(t = {}) {
          super(t),
            (this.type = J.Response),
            (this.body = void 0 !== t.body ? t.body : null);
        }
        clone(t = {}) {
          return new nt({
            body: void 0 !== t.body ? t.body : this.body,
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0,
          });
        }
      }
      class st extends tt {
        constructor(t) {
          super(t, 0, "Unknown Error"),
            (this.name = "HttpErrorResponse"),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? "Http failure during parsing for " +
                  (t.url || "(unknown url)")
                : `Http failure response for ${t.url || "(unknown url)"}: ${
                    t.status
                  } ${t.statusText}`),
            (this.error = t.error || null);
        }
      }
      function rt(t, e) {
        return {
          body: e,
          headers: t.headers,
          observe: t.observe,
          params: t.params,
          reportProgress: t.reportProgress,
          responseType: t.responseType,
          withCredentials: t.withCredentials,
        };
      }
      let it = (() => {
        class t {
          constructor(t) {
            this.handler = t;
          }
          request(t, e, n = {}) {
            let s;
            if (t instanceof X) s = t;
            else {
              let r = void 0;
              r = n.headers instanceof $ ? n.headers : new $(n.headers);
              let i = void 0;
              n.params &&
                (i =
                  n.params instanceof G
                    ? n.params
                    : new G({ fromObject: n.params })),
                (s = new X(t, e, void 0 !== n.body ? n.body : null, {
                  headers: r,
                  params: i,
                  reportProgress: n.reportProgress,
                  responseType: n.responseType || "json",
                  withCredentials: n.withCredentials,
                }));
            }
            const r = Object(F.a)(s).pipe(
              Object(H.a)((t) => this.handler.handle(t))
            );
            if (t instanceof X || "events" === n.observe) return r;
            const i = r.pipe(Object(U.a)((t) => t instanceof nt));
            switch (n.observe || "body") {
              case "body":
                switch (s.responseType) {
                  case "arraybuffer":
                    return i.pipe(
                      Object(z.a)((t) => {
                        if (null !== t.body && !(t.body instanceof ArrayBuffer))
                          throw new Error("Response is not an ArrayBuffer.");
                        return t.body;
                      })
                    );
                  case "blob":
                    return i.pipe(
                      Object(z.a)((t) => {
                        if (null !== t.body && !(t.body instanceof Blob))
                          throw new Error("Response is not a Blob.");
                        return t.body;
                      })
                    );
                  case "text":
                    return i.pipe(
                      Object(z.a)((t) => {
                        if (null !== t.body && "string" != typeof t.body)
                          throw new Error("Response is not a string.");
                        return t.body;
                      })
                    );
                  case "json":
                  default:
                    return i.pipe(Object(z.a)((t) => t.body));
                }
              case "response":
                return i;
              default:
                throw new Error(
                  `Unreachable: unhandled observe type ${n.observe}}`
                );
            }
          }
          delete(t, e = {}) {
            return this.request("DELETE", t, e);
          }
          get(t, e = {}) {
            return this.request("GET", t, e);
          }
          head(t, e = {}) {
            return this.request("HEAD", t, e);
          }
          jsonp(t, e) {
            return this.request("JSONP", t, {
              params: new G().append(e, "JSONP_CALLBACK"),
              observe: "body",
              responseType: "json",
            });
          }
          options(t, e = {}) {
            return this.request("OPTIONS", t, e);
          }
          patch(t, e, n = {}) {
            return this.request("PATCH", t, rt(n, e));
          }
          post(t, e, n = {}) {
            return this.request("POST", t, rt(n, e));
          }
          put(t, e, n = {}) {
            return this.request("PUT", t, rt(n, e));
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Rb(B));
          }),
          (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class ot {
        constructor(t, e) {
          (this.next = t), (this.interceptor = e);
        }
        handle(t) {
          return this.interceptor.intercept(t, this.next);
        }
      }
      const at = new s.q("HTTP_INTERCEPTORS");
      let lt = (() => {
        class t {
          intercept(t, e) {
            return e.handle(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const ct = /^\)\]\}',?\n/;
      class ut {}
      let ht = (() => {
          class t {
            constructor() {}
            build() {
              return new XMLHttpRequest();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        dt = (() => {
          class t {
            constructor(t) {
              this.xhrFactory = t;
            }
            handle(t) {
              if ("JSONP" === t.method)
                throw new Error(
                  "Attempted to construct Jsonp request without HttpClientJsonpModule installed."
                );
              return new V.a((e) => {
                const n = this.xhrFactory.build();
                if (
                  (n.open(t.method, t.urlWithParams),
                  t.withCredentials && (n.withCredentials = !0),
                  t.headers.forEach((t, e) =>
                    n.setRequestHeader(t, e.join(","))
                  ),
                  t.headers.has("Accept") ||
                    n.setRequestHeader(
                      "Accept",
                      "application/json, text/plain, */*"
                    ),
                  !t.headers.has("Content-Type"))
                ) {
                  const e = t.detectContentTypeHeader();
                  null !== e && n.setRequestHeader("Content-Type", e);
                }
                if (t.responseType) {
                  const e = t.responseType.toLowerCase();
                  n.responseType = "json" !== e ? e : "text";
                }
                const s = t.serializeBody();
                let r = null;
                const i = () => {
                    if (null !== r) return r;
                    const e = 1223 === n.status ? 204 : n.status,
                      s = n.statusText || "OK",
                      i = new $(n.getAllResponseHeaders()),
                      o =
                        (function (t) {
                          return "responseURL" in t && t.responseURL
                            ? t.responseURL
                            : /^X-Request-URL:/m.test(t.getAllResponseHeaders())
                            ? t.getResponseHeader("X-Request-URL")
                            : null;
                        })(n) || t.url;
                    return (
                      (r = new et({
                        headers: i,
                        status: e,
                        statusText: s,
                        url: o,
                      })),
                      r
                    );
                  },
                  o = () => {
                    let { headers: s, status: r, statusText: o, url: a } = i(),
                      l = null;
                    204 !== r &&
                      (l = void 0 === n.response ? n.responseText : n.response),
                      0 === r && (r = l ? 200 : 0);
                    let c = r >= 200 && r < 300;
                    if ("json" === t.responseType && "string" == typeof l) {
                      const t = l;
                      l = l.replace(ct, "");
                      try {
                        l = "" !== l ? JSON.parse(l) : null;
                      } catch (u) {
                        (l = t), c && ((c = !1), (l = { error: u, text: l }));
                      }
                    }
                    c
                      ? (e.next(
                          new nt({
                            body: l,
                            headers: s,
                            status: r,
                            statusText: o,
                            url: a || void 0,
                          })
                        ),
                        e.complete())
                      : e.error(
                          new st({
                            error: l,
                            headers: s,
                            status: r,
                            statusText: o,
                            url: a || void 0,
                          })
                        );
                  },
                  a = (t) => {
                    const { url: s } = i(),
                      r = new st({
                        error: t,
                        status: n.status || 0,
                        statusText: n.statusText || "Unknown Error",
                        url: s || void 0,
                      });
                    e.error(r);
                  };
                let l = !1;
                const c = (s) => {
                    l || (e.next(i()), (l = !0));
                    let r = { type: J.DownloadProgress, loaded: s.loaded };
                    s.lengthComputable && (r.total = s.total),
                      "text" === t.responseType &&
                        n.responseText &&
                        (r.partialText = n.responseText),
                      e.next(r);
                  },
                  u = (t) => {
                    let n = { type: J.UploadProgress, loaded: t.loaded };
                    t.lengthComputable && (n.total = t.total), e.next(n);
                  };
                return (
                  n.addEventListener("load", o),
                  n.addEventListener("error", a),
                  t.reportProgress &&
                    (n.addEventListener("progress", c),
                    null !== s &&
                      n.upload &&
                      n.upload.addEventListener("progress", u)),
                  n.send(s),
                  e.next({ type: J.Sent }),
                  () => {
                    n.removeEventListener("error", a),
                      n.removeEventListener("load", o),
                      t.reportProgress &&
                        (n.removeEventListener("progress", c),
                        null !== s &&
                          n.upload &&
                          n.upload.removeEventListener("progress", u)),
                      n.readyState !== n.DONE && n.abort();
                  }
                );
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Rb(ut));
            }),
            (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      const pt = new s.q("XSRF_COOKIE_NAME"),
        ft = new s.q("XSRF_HEADER_NAME");
      class mt {}
      let gt = (() => {
          class t {
            constructor(t, e, n) {
              (this.doc = t),
                (this.platform = e),
                (this.cookieName = n),
                (this.lastCookieString = ""),
                (this.lastToken = null),
                (this.parseCount = 0);
            }
            getToken() {
              if ("server" === this.platform) return null;
              const t = this.doc.cookie || "";
              return (
                t !== this.lastCookieString &&
                  (this.parseCount++,
                  (this.lastToken = Object(i.s)(t, this.cookieName)),
                  (this.lastCookieString = t)),
                this.lastToken
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Rb(i.c), s.Rb(s.B), s.Rb(pt));
            }),
            (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        _t = (() => {
          class t {
            constructor(t, e) {
              (this.tokenService = t), (this.headerName = e);
            }
            intercept(t, e) {
              const n = t.url.toLowerCase();
              if (
                "GET" === t.method ||
                "HEAD" === t.method ||
                n.startsWith("http://") ||
                n.startsWith("https://")
              )
                return e.handle(t);
              const s = this.tokenService.getToken();
              return (
                null === s ||
                  t.headers.has(this.headerName) ||
                  (t = t.clone({ headers: t.headers.set(this.headerName, s) })),
                e.handle(t)
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Rb(mt), s.Rb(ft));
            }),
            (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        bt = (() => {
          class t {
            constructor(t, e) {
              (this.backend = t), (this.injector = e), (this.chain = null);
            }
            handle(t) {
              if (null === this.chain) {
                const t = this.injector.get(at, []);
                this.chain = t.reduceRight(
                  (t, e) => new ot(t, e),
                  this.backend
                );
              }
              return this.chain.handle(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Rb(q), s.Rb(s.r));
            }),
            (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        yt = (() => {
          class t {
            static disable() {
              return {
                ngModule: t,
                providers: [{ provide: _t, useClass: lt }],
              };
            }
            static withOptions(e = {}) {
              return {
                ngModule: t,
                providers: [
                  e.cookieName ? { provide: pt, useValue: e.cookieName } : [],
                  e.headerName ? { provide: ft, useValue: e.headerName } : [],
                ],
              };
            }
          }
          return (
            (t.ɵmod = s.Ib({ type: t })),
            (t.ɵinj = s.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [
                _t,
                { provide: at, useExisting: _t, multi: !0 },
                { provide: mt, useClass: gt },
                { provide: pt, useValue: "XSRF-TOKEN" },
                { provide: ft, useValue: "X-XSRF-TOKEN" },
              ],
            })),
            t
          );
        })(),
        vt = (() => {
          class t {}
          return (
            (t.ɵmod = s.Ib({ type: t })),
            (t.ɵinj = s.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [
                it,
                { provide: B, useClass: bt },
                dt,
                { provide: q, useExisting: dt },
                ht,
                { provide: ut, useExisting: ht },
              ],
              imports: [
                [
                  yt.withOptions({
                    cookieName: "XSRF-TOKEN",
                    headerName: "X-XSRF-TOKEN",
                  }),
                ],
              ],
            })),
            t
          );
        })();
      var wt = n("3Pt+"),
        Ct = n("tyNb");
      const St = function () {
        return ["/tictac"];
      };
      let Et = (() => {
        class t {
          constructor() {}
          ngOnInit() {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵcmp = s.Eb({
            type: t,
            selectors: [["app-landing"]],
            decls: 14,
            vars: 2,
            consts: [
              [1, "container"],
              [1, "game-list"],
              [
                "routerLinkActive",
                "router-link-active",
                1,
                "panel",
                3,
                "routerLink",
              ],
              [1, "game-name"],
              [1, "panel"],
            ],
            template: function (t, e) {
              1 & t &&
                (s.Nb(0, "div", 0),
                s.Nb(1, "div", 1),
                s.Nb(2, "div", 2),
                s.Nb(3, "a", 3),
                s.oc(4, "Tic Tac Toe"),
                s.Mb(),
                s.Mb(),
                s.Nb(5, "div", 4),
                s.Nb(6, "div", 3),
                s.oc(7, "Rock Papper Scissor"),
                s.Mb(),
                s.Mb(),
                s.Nb(8, "div", 4),
                s.Nb(9, "div", 3),
                s.oc(10, "Game 3"),
                s.Mb(),
                s.Mb(),
                s.Nb(11, "div", 4),
                s.Nb(12, "div", 3),
                s.oc(13, "Game 4"),
                s.Mb(),
                s.Mb(),
                s.Mb(),
                s.Mb()),
                2 & t && (s.zb(2), s.cc("routerLink", s.ec(1, St)));
            },
            directives: [Ct.b, Ct.a],
            styles: [
              ".game-list[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;flex-wrap:wrap}.game-list[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{flex:0 0 calc(33% - 20px);border-radius:10px;background-color:#212121;height:200px;margin:10px;box-shadow:inset 0 0 6px 3px #272727;display:flex;align-items:center;justify-content:center;padding:20px;box-sizing:border-box;cursor:pointer}.game-list[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   .game-name[_ngcontent-%COMP%]{font-size:36px;font-weight:600;line-height:1.5}.game-list[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]:hover{box-shadow:0 0 6px 3px #272727}.default-theme[_ngcontent-%COMP%]{color:#121212;background-color:#e7e7e7}.dark-theme[_ngcontent-%COMP%]{background-color:#121212;color:#e7e7e7}",
            ],
          })),
          t
        );
      })();
      var Ot = n("sYmb");
      let xt,
        kt = (() => {
          class t {
            constructor(t) {
              this.translate = t;
            }
            setDefaultLanguage() {
              const t = localStorage.getItem("defaultLanguage");
              t
                ? (this.translate.setDefaultLang(t),
                  (this.selectedLanguage = t))
                : (localStorage.setItem("defaultLanguage", r.a.defaultLanguage),
                  this.translate.setDefaultLang(r.a.defaultLanguage),
                  (this.selectedLanguage = r.a.defaultLanguage));
            }
            changeLanguage(t) {
              localStorage.setItem("defaultLanguage", t), this.translate.use(t);
            }
            getSelectedLanguage() {
              return this.selectedLanguage;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Rb(Ot.e));
            }),
            (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac, providedIn: "root" })),
            t
          );
        })();
      try {
        xt = "undefined" != typeof Intl && Intl.v8BreakIterator;
      } catch (na) {
        xt = !1;
      }
      let Tt,
        Rt,
        At = (() => {
          class t {
            constructor(t) {
              (this._platformId = t),
                (this.isBrowser = this._platformId
                  ? Object(i.o)(this._platformId)
                  : "object" == typeof document && !!document),
                (this.EDGE =
                  this.isBrowser && /(edge)/i.test(navigator.userAgent)),
                (this.TRIDENT =
                  this.isBrowser &&
                  /(msie|trident)/i.test(navigator.userAgent)),
                (this.BLINK =
                  this.isBrowser &&
                  !(!window.chrome && !xt) &&
                  "undefined" != typeof CSS &&
                  !this.EDGE &&
                  !this.TRIDENT),
                (this.WEBKIT =
                  this.isBrowser &&
                  /AppleWebKit/i.test(navigator.userAgent) &&
                  !this.BLINK &&
                  !this.EDGE &&
                  !this.TRIDENT),
                (this.IOS =
                  this.isBrowser &&
                  /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                  !("MSStream" in window)),
                (this.FIREFOX =
                  this.isBrowser &&
                  /(firefox|minefield)/i.test(navigator.userAgent)),
                (this.ANDROID =
                  this.isBrowser &&
                  /android/i.test(navigator.userAgent) &&
                  !this.TRIDENT),
                (this.SAFARI =
                  this.isBrowser &&
                  /safari/i.test(navigator.userAgent) &&
                  this.WEBKIT);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Rb(s.B));
            }),
            (t.ɵprov = Object(s.Gb)({
              factory: function () {
                return new t(Object(s.Rb)(s.B));
              },
              token: t,
              providedIn: "root",
            })),
            t
          );
        })(),
        It = (() => {
          class t {}
          return (
            (t.ɵmod = s.Ib({ type: t })),
            (t.ɵinj = s.Hb({
              factory: function (e) {
                return new (e || t)();
              },
            })),
            t
          );
        })();
      function jt(t) {
        return (function () {
          if (null == Tt && "undefined" != typeof window)
            try {
              window.addEventListener(
                "test",
                null,
                Object.defineProperty({}, "passive", { get: () => (Tt = !0) })
              );
            } finally {
              Tt = Tt || !1;
            }
          return Tt;
        })()
          ? t
          : !!t.capture;
      }
      var Pt = n("XNiG"),
        Dt = n("quSY");
      function Nt(t, ...e) {
        return e.length
          ? e.some((e) => t[e])
          : t.altKey || t.shiftKey || t.ctrlKey || t.metaKey;
      }
      var Lt = n("vkgz"),
        Mt = n("7o/Q"),
        Ft = n("3N8a"),
        Vt = n("IjjT");
      const Ht = new Vt.a(Ft.a);
      class Ut {
        constructor(t, e) {
          (this.dueTime = t), (this.scheduler = e);
        }
        call(t, e) {
          return e.subscribe(new zt(t, this.dueTime, this.scheduler));
        }
      }
      class zt extends Mt.a {
        constructor(t, e, n) {
          super(t),
            (this.dueTime = e),
            (this.scheduler = n),
            (this.debouncedSubscription = null),
            (this.lastValue = null),
            (this.hasValue = !1);
        }
        _next(t) {
          this.clearDebounce(),
            (this.lastValue = t),
            (this.hasValue = !0),
            this.add(
              (this.debouncedSubscription = this.scheduler.schedule(
                Bt,
                this.dueTime,
                this
              ))
            );
        }
        _complete() {
          this.debouncedNext(), this.destination.complete();
        }
        debouncedNext() {
          if ((this.clearDebounce(), this.hasValue)) {
            const { lastValue: t } = this;
            (this.lastValue = null),
              (this.hasValue = !1),
              this.destination.next(t);
          }
        }
        clearDebounce() {
          const t = this.debouncedSubscription;
          null !== t &&
            (this.remove(t),
            t.unsubscribe(),
            (this.debouncedSubscription = null));
        }
      }
      function Bt(t) {
        t.debouncedNext();
      }
      var qt = n("IzEk");
      function $t(t) {
        return null != t && "" + t != "false";
      }
      function Kt(t) {
        return Array.isArray(t) ? t : [t];
      }
      function Wt(t) {
        return null == t ? "" : "string" == typeof t ? t : t + "px";
      }
      function Gt(t) {
        return t instanceof s.l ? t.nativeElement : t;
      }
      class Qt extends class {
        constructor(t) {
          (this._items = t),
            (this._activeItemIndex = -1),
            (this._activeItem = null),
            (this._wrap = !1),
            (this._letterKeyStream = new Pt.a()),
            (this._typeaheadSubscription = Dt.a.EMPTY),
            (this._vertical = !0),
            (this._allowedModifierKeys = []),
            (this._homeAndEnd = !1),
            (this._skipPredicateFn = (t) => t.disabled),
            (this._pressedLetters = []),
            (this.tabOut = new Pt.a()),
            (this.change = new Pt.a()),
            t instanceof s.D &&
              t.changes.subscribe((t) => {
                if (this._activeItem) {
                  const e = t.toArray().indexOf(this._activeItem);
                  e > -1 &&
                    e !== this._activeItemIndex &&
                    (this._activeItemIndex = e);
                }
              });
        }
        skipPredicate(t) {
          return (this._skipPredicateFn = t), this;
        }
        withWrap(t = !0) {
          return (this._wrap = t), this;
        }
        withVerticalOrientation(t = !0) {
          return (this._vertical = t), this;
        }
        withHorizontalOrientation(t) {
          return (this._horizontal = t), this;
        }
        withAllowedModifierKeys(t) {
          return (this._allowedModifierKeys = t), this;
        }
        withTypeAhead(t = 200) {
          return (
            this._typeaheadSubscription.unsubscribe(),
            (this._typeaheadSubscription = this._letterKeyStream
              .pipe(
                Object(Lt.a)((t) => this._pressedLetters.push(t)),
                (function (t, e = Ht) {
                  return (n) => n.lift(new Ut(t, e));
                })(t),
                Object(U.a)(() => this._pressedLetters.length > 0),
                Object(z.a)(() => this._pressedLetters.join(""))
              )
              .subscribe((t) => {
                const e = this._getItemsArray();
                for (let n = 1; n < e.length + 1; n++) {
                  const s = (this._activeItemIndex + n) % e.length,
                    r = e[s];
                  if (
                    !this._skipPredicateFn(r) &&
                    0 === r.getLabel().toUpperCase().trim().indexOf(t)
                  ) {
                    this.setActiveItem(s);
                    break;
                  }
                }
                this._pressedLetters = [];
              })),
            this
          );
        }
        withHomeAndEnd(t = !0) {
          return (this._homeAndEnd = t), this;
        }
        setActiveItem(t) {
          const e = this._activeItem;
          this.updateActiveItem(t),
            this._activeItem !== e && this.change.next(this._activeItemIndex);
        }
        onKeydown(t) {
          const e = t.keyCode,
            n = ["altKey", "ctrlKey", "metaKey", "shiftKey"].every(
              (e) => !t[e] || this._allowedModifierKeys.indexOf(e) > -1
            );
          switch (e) {
            case 9:
              return void this.tabOut.next();
            case 40:
              if (this._vertical && n) {
                this.setNextItemActive();
                break;
              }
              return;
            case 38:
              if (this._vertical && n) {
                this.setPreviousItemActive();
                break;
              }
              return;
            case 39:
              if (this._horizontal && n) {
                "rtl" === this._horizontal
                  ? this.setPreviousItemActive()
                  : this.setNextItemActive();
                break;
              }
              return;
            case 37:
              if (this._horizontal && n) {
                "rtl" === this._horizontal
                  ? this.setNextItemActive()
                  : this.setPreviousItemActive();
                break;
              }
              return;
            case 36:
              if (this._homeAndEnd && n) {
                this.setFirstItemActive();
                break;
              }
              return;
            case 35:
              if (this._homeAndEnd && n) {
                this.setLastItemActive();
                break;
              }
              return;
            default:
              return void (
                (n || Nt(t, "shiftKey")) &&
                (t.key && 1 === t.key.length
                  ? this._letterKeyStream.next(t.key.toLocaleUpperCase())
                  : ((e >= 65 && e <= 90) || (e >= 48 && e <= 57)) &&
                    this._letterKeyStream.next(String.fromCharCode(e)))
              );
          }
          (this._pressedLetters = []), t.preventDefault();
        }
        get activeItemIndex() {
          return this._activeItemIndex;
        }
        get activeItem() {
          return this._activeItem;
        }
        isTyping() {
          return this._pressedLetters.length > 0;
        }
        setFirstItemActive() {
          this._setActiveItemByIndex(0, 1);
        }
        setLastItemActive() {
          this._setActiveItemByIndex(this._items.length - 1, -1);
        }
        setNextItemActive() {
          this._activeItemIndex < 0
            ? this.setFirstItemActive()
            : this._setActiveItemByDelta(1);
        }
        setPreviousItemActive() {
          this._activeItemIndex < 0 && this._wrap
            ? this.setLastItemActive()
            : this._setActiveItemByDelta(-1);
        }
        updateActiveItem(t) {
          const e = this._getItemsArray(),
            n = "number" == typeof t ? t : e.indexOf(t),
            s = e[n];
          (this._activeItem = null == s ? null : s),
            (this._activeItemIndex = n);
        }
        _setActiveItemByDelta(t) {
          this._wrap
            ? this._setActiveInWrapMode(t)
            : this._setActiveInDefaultMode(t);
        }
        _setActiveInWrapMode(t) {
          const e = this._getItemsArray();
          for (let n = 1; n <= e.length; n++) {
            const s = (this._activeItemIndex + t * n + e.length) % e.length;
            if (!this._skipPredicateFn(e[s])) return void this.setActiveItem(s);
          }
        }
        _setActiveInDefaultMode(t) {
          this._setActiveItemByIndex(this._activeItemIndex + t, t);
        }
        _setActiveItemByIndex(t, e) {
          const n = this._getItemsArray();
          if (n[t]) {
            for (; this._skipPredicateFn(n[t]); ) if (!n[(t += e)]) return;
            this.setActiveItem(t);
          }
        }
        _getItemsArray() {
          return this._items instanceof s.D
            ? this._items.toArray()
            : this._items;
        }
      } {
        constructor() {
          super(...arguments), (this._origin = "program");
        }
        setFocusOrigin(t) {
          return (this._origin = t), this;
        }
        setActiveItem(t) {
          super.setActiveItem(t),
            this.activeItem && this.activeItem.focus(this._origin);
        }
      }
      function Zt(t) {
        return 0 === t.buttons;
      }
      "undefined" != typeof Element && Element;
      const Yt = new s.q("cdk-focus-monitor-default-options"),
        Xt = jt({ passive: !0, capture: !0 });
      let Jt = (() => {
        class t {
          constructor(t, e, n, s) {
            (this._ngZone = t),
              (this._platform = e),
              (this._origin = null),
              (this._windowFocused = !1),
              (this._elementInfo = new Map()),
              (this._monitoredElementCount = 0),
              (this._rootNodeFocusListenerCount = new Map()),
              (this._documentKeydownListener = () => {
                (this._lastTouchTarget = null),
                  this._setOriginForCurrentEventQueue("keyboard");
              }),
              (this._documentMousedownListener = (t) => {
                if (!this._lastTouchTarget) {
                  const e = Zt(t) ? "keyboard" : "mouse";
                  this._setOriginForCurrentEventQueue(e);
                }
              }),
              (this._documentTouchstartListener = (t) => {
                null != this._touchTimeoutId &&
                  clearTimeout(this._touchTimeoutId),
                  (this._lastTouchTarget = te(t)),
                  (this._touchTimeoutId = setTimeout(
                    () => (this._lastTouchTarget = null),
                    650
                  ));
              }),
              (this._windowFocusListener = () => {
                (this._windowFocused = !0),
                  (this._windowFocusTimeoutId = setTimeout(
                    () => (this._windowFocused = !1)
                  ));
              }),
              (this._rootNodeFocusAndBlurListener = (t) => {
                const e = te(t),
                  n = "focus" === t.type ? this._onFocus : this._onBlur;
                for (let s = e; s; s = s.parentElement) n.call(this, t, s);
              }),
              (this._document = n),
              (this._detectionMode =
                (null == s ? void 0 : s.detectionMode) || 0);
          }
          monitor(t, e = !1) {
            const n = Gt(t);
            if (!this._platform.isBrowser || 1 !== n.nodeType)
              return Object(F.a)(null);
            const s =
                (function (t) {
                  if (
                    (function () {
                      if (null == Rt) {
                        const t =
                          "undefined" != typeof document ? document.head : null;
                        Rt = !(!t || (!t.createShadowRoot && !t.attachShadow));
                      }
                      return Rt;
                    })()
                  ) {
                    const e = t.getRootNode ? t.getRootNode() : null;
                    if (
                      "undefined" != typeof ShadowRoot &&
                      ShadowRoot &&
                      e instanceof ShadowRoot
                    )
                      return e;
                  }
                  return null;
                })(n) || this._getDocument(),
              r = this._elementInfo.get(n);
            if (r) return e && (r.checkChildren = !0), r.subject;
            const i = { checkChildren: e, subject: new Pt.a(), rootNode: s };
            return (
              this._elementInfo.set(n, i),
              this._registerGlobalListeners(i),
              i.subject
            );
          }
          stopMonitoring(t) {
            const e = Gt(t),
              n = this._elementInfo.get(e);
            n &&
              (n.subject.complete(),
              this._setClasses(e),
              this._elementInfo.delete(e),
              this._removeGlobalListeners(n));
          }
          focusVia(t, e, n) {
            const s = Gt(t);
            this._setOriginForCurrentEventQueue(e),
              "function" == typeof s.focus && s.focus(n);
          }
          ngOnDestroy() {
            this._elementInfo.forEach((t, e) => this.stopMonitoring(e));
          }
          _getDocument() {
            return this._document || document;
          }
          _getWindow() {
            return this._getDocument().defaultView || window;
          }
          _toggleClass(t, e, n) {
            n ? t.classList.add(e) : t.classList.remove(e);
          }
          _getFocusOrigin(t) {
            return this._origin
              ? this._origin
              : this._windowFocused && this._lastFocusOrigin
              ? this._lastFocusOrigin
              : this._wasCausedByTouch(t)
              ? "touch"
              : "program";
          }
          _setClasses(t, e) {
            this._toggleClass(t, "cdk-focused", !!e),
              this._toggleClass(t, "cdk-touch-focused", "touch" === e),
              this._toggleClass(t, "cdk-keyboard-focused", "keyboard" === e),
              this._toggleClass(t, "cdk-mouse-focused", "mouse" === e),
              this._toggleClass(t, "cdk-program-focused", "program" === e);
          }
          _setOriginForCurrentEventQueue(t) {
            this._ngZone.runOutsideAngular(() => {
              (this._origin = t),
                0 === this._detectionMode &&
                  (this._originTimeoutId = setTimeout(
                    () => (this._origin = null),
                    1
                  ));
            });
          }
          _wasCausedByTouch(t) {
            const e = te(t);
            return (
              this._lastTouchTarget instanceof Node &&
              e instanceof Node &&
              (e === this._lastTouchTarget || e.contains(this._lastTouchTarget))
            );
          }
          _onFocus(t, e) {
            const n = this._elementInfo.get(e);
            if (!n || (!n.checkChildren && e !== te(t))) return;
            const s = this._getFocusOrigin(t);
            this._setClasses(e, s),
              this._emitOrigin(n.subject, s),
              (this._lastFocusOrigin = s);
          }
          _onBlur(t, e) {
            const n = this._elementInfo.get(e);
            !n ||
              (n.checkChildren &&
                t.relatedTarget instanceof Node &&
                e.contains(t.relatedTarget)) ||
              (this._setClasses(e), this._emitOrigin(n.subject, null));
          }
          _emitOrigin(t, e) {
            this._ngZone.run(() => t.next(e));
          }
          _registerGlobalListeners(t) {
            if (!this._platform.isBrowser) return;
            const e = t.rootNode,
              n = this._rootNodeFocusListenerCount.get(e) || 0;
            n ||
              this._ngZone.runOutsideAngular(() => {
                e.addEventListener(
                  "focus",
                  this._rootNodeFocusAndBlurListener,
                  Xt
                ),
                  e.addEventListener(
                    "blur",
                    this._rootNodeFocusAndBlurListener,
                    Xt
                  );
              }),
              this._rootNodeFocusListenerCount.set(e, n + 1),
              1 == ++this._monitoredElementCount &&
                this._ngZone.runOutsideAngular(() => {
                  const t = this._getDocument(),
                    e = this._getWindow();
                  t.addEventListener(
                    "keydown",
                    this._documentKeydownListener,
                    Xt
                  ),
                    t.addEventListener(
                      "mousedown",
                      this._documentMousedownListener,
                      Xt
                    ),
                    t.addEventListener(
                      "touchstart",
                      this._documentTouchstartListener,
                      Xt
                    ),
                    e.addEventListener("focus", this._windowFocusListener);
                });
          }
          _removeGlobalListeners(t) {
            const e = t.rootNode;
            if (this._rootNodeFocusListenerCount.has(e)) {
              const t = this._rootNodeFocusListenerCount.get(e);
              t > 1
                ? this._rootNodeFocusListenerCount.set(e, t - 1)
                : (e.removeEventListener(
                    "focus",
                    this._rootNodeFocusAndBlurListener,
                    Xt
                  ),
                  e.removeEventListener(
                    "blur",
                    this._rootNodeFocusAndBlurListener,
                    Xt
                  ),
                  this._rootNodeFocusListenerCount.delete(e));
            }
            if (!--this._monitoredElementCount) {
              const t = this._getDocument(),
                e = this._getWindow();
              t.removeEventListener(
                "keydown",
                this._documentKeydownListener,
                Xt
              ),
                t.removeEventListener(
                  "mousedown",
                  this._documentMousedownListener,
                  Xt
                ),
                t.removeEventListener(
                  "touchstart",
                  this._documentTouchstartListener,
                  Xt
                ),
                e.removeEventListener("focus", this._windowFocusListener),
                clearTimeout(this._windowFocusTimeoutId),
                clearTimeout(this._touchTimeoutId),
                clearTimeout(this._originTimeoutId);
            }
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Rb(s.z), s.Rb(At), s.Rb(i.c, 8), s.Rb(Yt, 8));
          }),
          (t.ɵprov = Object(s.Gb)({
            factory: function () {
              return new t(
                Object(s.Rb)(s.z),
                Object(s.Rb)(At),
                Object(s.Rb)(i.c, 8),
                Object(s.Rb)(Yt, 8)
              );
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
      function te(t) {
        return t.composedPath ? t.composedPath()[0] : t.target;
      }
      const ee = "cdk-high-contrast-black-on-white",
        ne = "cdk-high-contrast-white-on-black",
        se = "cdk-high-contrast-active";
      let re = (() => {
        class t {
          constructor(t, e) {
            (this._platform = t), (this._document = e);
          }
          getHighContrastMode() {
            if (!this._platform.isBrowser) return 0;
            const t = this._document.createElement("div");
            (t.style.backgroundColor = "rgb(1,2,3)"),
              (t.style.position = "absolute"),
              this._document.body.appendChild(t);
            const e = this._document.defaultView || window,
              n = e && e.getComputedStyle ? e.getComputedStyle(t) : null,
              s = ((n && n.backgroundColor) || "").replace(/ /g, "");
            switch ((this._document.body.removeChild(t), s)) {
              case "rgb(0,0,0)":
                return 2;
              case "rgb(255,255,255)":
                return 1;
            }
            return 0;
          }
          _applyBodyHighContrastModeCssClasses() {
            if (this._platform.isBrowser && this._document.body) {
              const t = this._document.body.classList;
              t.remove(se), t.remove(ee), t.remove(ne);
              const e = this.getHighContrastMode();
              1 === e
                ? (t.add(se), t.add(ee))
                : 2 === e && (t.add(se), t.add(ne));
            }
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Rb(At), s.Rb(i.c));
          }),
          (t.ɵprov = Object(s.Gb)({
            factory: function () {
              return new t(Object(s.Rb)(At), Object(s.Rb)(i.c));
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
      const ie = new s.q("cdk-dir-doc", {
        providedIn: "root",
        factory: function () {
          return Object(s.U)(i.c);
        },
      });
      let oe = (() => {
          class t {
            constructor(t) {
              if (((this.value = "ltr"), (this.change = new s.n()), t)) {
                const e = t.documentElement ? t.documentElement.dir : null,
                  n = (t.body ? t.body.dir : null) || e;
                this.value = "ltr" === n || "rtl" === n ? n : "ltr";
              }
            }
            ngOnDestroy() {
              this.change.complete();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Rb(ie, 8));
            }),
            (t.ɵprov = Object(s.Gb)({
              factory: function () {
                return new t(Object(s.Rb)(ie, 8));
              },
              token: t,
              providedIn: "root",
            })),
            t
          );
        })(),
        ae = (() => {
          class t {}
          return (
            (t.ɵmod = s.Ib({ type: t })),
            (t.ɵinj = s.Hb({
              factory: function (e) {
                return new (e || t)();
              },
            })),
            t
          );
        })();
      const le = new s.O("10.2.7");
      var ce = n("JX91");
      class ue {}
      const he = "*";
      function de(t, e) {
        return { type: 7, name: t, definitions: e, options: {} };
      }
      function pe(t, e = null) {
        return { type: 4, styles: e, timings: t };
      }
      function fe(t, e = null) {
        return { type: 3, steps: t, options: e };
      }
      function me(t, e = null) {
        return { type: 2, steps: t, options: e };
      }
      function ge(t) {
        return { type: 6, styles: t, offset: null };
      }
      function _e(t, e, n) {
        return { type: 0, name: t, styles: e, options: n };
      }
      function be(t, e, n = null) {
        return { type: 1, expr: t, animation: e, options: n };
      }
      function ye(t, e, n = null) {
        return { type: 11, selector: t, animation: e, options: n };
      }
      function ve(t) {
        Promise.resolve(null).then(t);
      }
      class we {
        constructor(t = 0, e = 0) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._started = !1),
            (this._destroyed = !1),
            (this._finished = !1),
            (this.parentPlayer = null),
            (this.totalTime = t + e);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((t) => t()),
            (this._onDoneFns = []));
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        hasStarted() {
          return this._started;
        }
        init() {}
        play() {
          this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
            (this._started = !0);
        }
        triggerMicrotask() {
          ve(() => this._onFinish());
        }
        _onStart() {
          this._onStartFns.forEach((t) => t()), (this._onStartFns = []);
        }
        pause() {}
        restart() {}
        finish() {
          this._onFinish();
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.hasStarted() || this._onStart(),
            this.finish(),
            this._onDestroyFns.forEach((t) => t()),
            (this._onDestroyFns = []));
        }
        reset() {}
        setPosition(t) {}
        getPosition() {
          return 0;
        }
        triggerCallback(t) {
          const e = "start" == t ? this._onStartFns : this._onDoneFns;
          e.forEach((t) => t()), (e.length = 0);
        }
      }
      class Ce {
        constructor(t) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this._onDestroyFns = []),
            (this.parentPlayer = null),
            (this.totalTime = 0),
            (this.players = t);
          let e = 0,
            n = 0,
            s = 0;
          const r = this.players.length;
          0 == r
            ? ve(() => this._onFinish())
            : this.players.forEach((t) => {
                t.onDone(() => {
                  ++e == r && this._onFinish();
                }),
                  t.onDestroy(() => {
                    ++n == r && this._onDestroy();
                  }),
                  t.onStart(() => {
                    ++s == r && this._onStart();
                  });
              }),
            (this.totalTime = this.players.reduce(
              (t, e) => Math.max(t, e.totalTime),
              0
            ));
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((t) => t()),
            (this._onDoneFns = []));
        }
        init() {
          this.players.forEach((t) => t.init());
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        _onStart() {
          this.hasStarted() ||
            ((this._started = !0),
            this._onStartFns.forEach((t) => t()),
            (this._onStartFns = []));
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this.parentPlayer || this.init(),
            this._onStart(),
            this.players.forEach((t) => t.play());
        }
        pause() {
          this.players.forEach((t) => t.pause());
        }
        restart() {
          this.players.forEach((t) => t.restart());
        }
        finish() {
          this._onFinish(), this.players.forEach((t) => t.finish());
        }
        destroy() {
          this._onDestroy();
        }
        _onDestroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._onFinish(),
            this.players.forEach((t) => t.destroy()),
            this._onDestroyFns.forEach((t) => t()),
            (this._onDestroyFns = []));
        }
        reset() {
          this.players.forEach((t) => t.reset()),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        setPosition(t) {
          const e = t * this.totalTime;
          this.players.forEach((t) => {
            const n = t.totalTime ? Math.min(1, e / t.totalTime) : 1;
            t.setPosition(n);
          });
        }
        getPosition() {
          let t = 0;
          return (
            this.players.forEach((e) => {
              const n = e.getPosition();
              t = Math.min(n, t);
            }),
            t
          );
        }
        beforeDestroy() {
          this.players.forEach((t) => {
            t.beforeDestroy && t.beforeDestroy();
          });
        }
        triggerCallback(t) {
          const e = "start" == t ? this._onStartFns : this._onDoneFns;
          e.forEach((t) => t()), (e.length = 0);
        }
      }
      function Se() {
        return (
          "undefined" != typeof process &&
          "[object process]" === {}.toString.call(process)
        );
      }
      function Ee(t) {
        switch (t.length) {
          case 0:
            return new we();
          case 1:
            return t[0];
          default:
            return new Ce(t);
        }
      }
      function Oe(t, e, n, s, r = {}, i = {}) {
        const o = [],
          a = [];
        let l = -1,
          c = null;
        if (
          (s.forEach((t) => {
            const n = t.offset,
              s = n == l,
              u = (s && c) || {};
            Object.keys(t).forEach((n) => {
              let s = n,
                a = t[n];
              if ("offset" !== n)
                switch (((s = e.normalizePropertyName(s, o)), a)) {
                  case "!":
                    a = r[n];
                    break;
                  case he:
                    a = i[n];
                    break;
                  default:
                    a = e.normalizeStyleValue(n, s, a, o);
                }
              u[s] = a;
            }),
              s || a.push(u),
              (c = u),
              (l = n);
          }),
          o.length)
        ) {
          const t = "\n - ";
          throw new Error(
            `Unable to animate due to the following errors:${t}${o.join(t)}`
          );
        }
        return a;
      }
      function xe(t, e, n, s) {
        switch (e) {
          case "start":
            t.onStart(() => s(n && ke(n, "start", t)));
            break;
          case "done":
            t.onDone(() => s(n && ke(n, "done", t)));
            break;
          case "destroy":
            t.onDestroy(() => s(n && ke(n, "destroy", t)));
        }
      }
      function ke(t, e, n) {
        const s = n.totalTime,
          r = Te(
            t.element,
            t.triggerName,
            t.fromState,
            t.toState,
            e || t.phaseName,
            null == s ? t.totalTime : s,
            !!n.disabled
          ),
          i = t._data;
        return null != i && (r._data = i), r;
      }
      function Te(t, e, n, s, r = "", i = 0, o) {
        return {
          element: t,
          triggerName: e,
          fromState: n,
          toState: s,
          phaseName: r,
          totalTime: i,
          disabled: !!o,
        };
      }
      function Re(t, e, n) {
        let s;
        return (
          t instanceof Map
            ? ((s = t.get(e)), s || t.set(e, (s = n)))
            : ((s = t[e]), s || (s = t[e] = n)),
          s
        );
      }
      function Ae(t) {
        const e = t.indexOf(":");
        return [t.substring(1, e), t.substr(e + 1)];
      }
      let Ie = (t, e) => !1,
        je = (t, e) => !1,
        Pe = (t, e, n) => [];
      const De = Se();
      (De || "undefined" != typeof Element) &&
        ((Ie = (t, e) => t.contains(e)),
        (je = (() => {
          if (De || Element.prototype.matches) return (t, e) => t.matches(e);
          {
            const t = Element.prototype,
              e =
                t.matchesSelector ||
                t.mozMatchesSelector ||
                t.msMatchesSelector ||
                t.oMatchesSelector ||
                t.webkitMatchesSelector;
            return e ? (t, n) => e.apply(t, [n]) : je;
          }
        })()),
        (Pe = (t, e, n) => {
          let s = [];
          if (n) s.push(...t.querySelectorAll(e));
          else {
            const n = t.querySelector(e);
            n && s.push(n);
          }
          return s;
        }));
      let Ne = null,
        Le = !1;
      function Me(t) {
        Ne ||
          ((Ne = ("undefined" != typeof document ? document.body : null) || {}),
          (Le = !!Ne.style && "WebkitAppearance" in Ne.style));
        let e = !0;
        return (
          Ne.style &&
            !(function (t) {
              return "ebkit" == t.substring(1, 6);
            })(t) &&
            ((e = t in Ne.style), !e && Le) &&
            (e =
              "Webkit" + t.charAt(0).toUpperCase() + t.substr(1) in Ne.style),
          e
        );
      }
      const Fe = je,
        Ve = Ie,
        He = Pe;
      function Ue(t) {
        const e = {};
        return (
          Object.keys(t).forEach((n) => {
            const s = n.replace(/([a-z])([A-Z])/g, "$1-$2");
            e[s] = t[n];
          }),
          e
        );
      }
      let ze = (() => {
          class t {
            validateStyleProperty(t) {
              return Me(t);
            }
            matchesElement(t, e) {
              return Fe(t, e);
            }
            containsElement(t, e) {
              return Ve(t, e);
            }
            query(t, e, n) {
              return He(t, e, n);
            }
            computeStyle(t, e, n) {
              return n || "";
            }
            animate(t, e, n, s, r, i = [], o) {
              return new we(n, s);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Be = (() => {
          class t {}
          return (t.NOOP = new ze()), t;
        })();
      const qe = "ng-enter",
        $e = "ng-leave",
        Ke = "ng-trigger",
        We = ".ng-trigger",
        Ge = "ng-animating",
        Qe = ".ng-animating";
      function Ze(t) {
        if ("number" == typeof t) return t;
        const e = t.match(/^(-?[\.\d]+)(m?s)/);
        return !e || e.length < 2 ? 0 : Ye(parseFloat(e[1]), e[2]);
      }
      function Ye(t, e) {
        switch (e) {
          case "s":
            return 1e3 * t;
          default:
            return t;
        }
      }
      function Xe(t, e, n) {
        return t.hasOwnProperty("duration")
          ? t
          : (function (t, e, n) {
              let s,
                r = 0,
                i = "";
              if ("string" == typeof t) {
                const n = t.match(
                  /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i
                );
                if (null === n)
                  return (
                    e.push(`The provided timing value "${t}" is invalid.`),
                    { duration: 0, delay: 0, easing: "" }
                  );
                s = Ye(parseFloat(n[1]), n[2]);
                const o = n[3];
                null != o && (r = Ye(parseFloat(o), n[4]));
                const a = n[5];
                a && (i = a);
              } else s = t;
              if (!n) {
                let n = !1,
                  i = e.length;
                s < 0 &&
                  (e.push(
                    "Duration values below 0 are not allowed for this animation step."
                  ),
                  (n = !0)),
                  r < 0 &&
                    (e.push(
                      "Delay values below 0 are not allowed for this animation step."
                    ),
                    (n = !0)),
                  n &&
                    e.splice(
                      i,
                      0,
                      `The provided timing value "${t}" is invalid.`
                    );
              }
              return { duration: s, delay: r, easing: i };
            })(t, e, n);
      }
      function Je(t, e = {}) {
        return (
          Object.keys(t).forEach((n) => {
            e[n] = t[n];
          }),
          e
        );
      }
      function tn(t, e, n = {}) {
        if (e) for (let s in t) n[s] = t[s];
        else Je(t, n);
        return n;
      }
      function en(t, e, n) {
        return n ? e + ":" + n + ";" : "";
      }
      function nn(t) {
        let e = "";
        for (let n = 0; n < t.style.length; n++) {
          const s = t.style.item(n);
          e += en(0, s, t.style.getPropertyValue(s));
        }
        for (const n in t.style)
          t.style.hasOwnProperty(n) &&
            !n.startsWith("_") &&
            (e += en(
              0,
              n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
              t.style[n]
            ));
        t.setAttribute("style", e);
      }
      function sn(t, e, n) {
        t.style &&
          (Object.keys(e).forEach((s) => {
            const r = dn(s);
            n && !n.hasOwnProperty(s) && (n[s] = t.style[r]),
              (t.style[r] = e[s]);
          }),
          Se() && nn(t));
      }
      function rn(t, e) {
        t.style &&
          (Object.keys(e).forEach((e) => {
            const n = dn(e);
            t.style[n] = "";
          }),
          Se() && nn(t));
      }
      function on(t) {
        return Array.isArray(t) ? (1 == t.length ? t[0] : me(t)) : t;
      }
      const an = new RegExp("{{\\s*(.+?)\\s*}}", "g");
      function ln(t) {
        let e = [];
        if ("string" == typeof t) {
          let n;
          for (; (n = an.exec(t)); ) e.push(n[1]);
          an.lastIndex = 0;
        }
        return e;
      }
      function cn(t, e, n) {
        const s = t.toString(),
          r = s.replace(an, (t, s) => {
            let r = e[s];
            return (
              e.hasOwnProperty(s) ||
                (n.push("Please provide a value for the animation param " + s),
                (r = "")),
              r.toString()
            );
          });
        return r == s ? t : r;
      }
      function un(t) {
        const e = [];
        let n = t.next();
        for (; !n.done; ) e.push(n.value), (n = t.next());
        return e;
      }
      const hn = /-+([a-z0-9])/g;
      function dn(t) {
        return t.replace(hn, (...t) => t[1].toUpperCase());
      }
      function pn(t, e) {
        return 0 === t || 0 === e;
      }
      function fn(t, e, n) {
        const s = Object.keys(n);
        if (s.length && e.length) {
          let i = e[0],
            o = [];
          if (
            (s.forEach((t) => {
              i.hasOwnProperty(t) || o.push(t), (i[t] = n[t]);
            }),
            o.length)
          )
            for (var r = 1; r < e.length; r++) {
              let n = e[r];
              o.forEach(function (e) {
                n[e] = gn(t, e);
              });
            }
        }
        return e;
      }
      function mn(t, e, n) {
        switch (e.type) {
          case 7:
            return t.visitTrigger(e, n);
          case 0:
            return t.visitState(e, n);
          case 1:
            return t.visitTransition(e, n);
          case 2:
            return t.visitSequence(e, n);
          case 3:
            return t.visitGroup(e, n);
          case 4:
            return t.visitAnimate(e, n);
          case 5:
            return t.visitKeyframes(e, n);
          case 6:
            return t.visitStyle(e, n);
          case 8:
            return t.visitReference(e, n);
          case 9:
            return t.visitAnimateChild(e, n);
          case 10:
            return t.visitAnimateRef(e, n);
          case 11:
            return t.visitQuery(e, n);
          case 12:
            return t.visitStagger(e, n);
          default:
            throw new Error(
              "Unable to resolve animation metadata node #" + e.type
            );
        }
      }
      function gn(t, e) {
        return window.getComputedStyle(t)[e];
      }
      const _n = "*";
      function bn(t, e) {
        const n = [];
        return (
          "string" == typeof t
            ? t.split(/\s*,\s*/).forEach((t) =>
                (function (t, e, n) {
                  if (":" == t[0]) {
                    const s = (function (t, e) {
                      switch (t) {
                        case ":enter":
                          return "void => *";
                        case ":leave":
                          return "* => void";
                        case ":increment":
                          return (t, e) => parseFloat(e) > parseFloat(t);
                        case ":decrement":
                          return (t, e) => parseFloat(e) < parseFloat(t);
                        default:
                          return (
                            e.push(
                              `The transition alias value "${t}" is not supported`
                            ),
                            "* => *"
                          );
                      }
                    })(t, n);
                    if ("function" == typeof s) return void e.push(s);
                    t = s;
                  }
                  const s = t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                  if (null == s || s.length < 4)
                    return (
                      n.push(
                        `The provided transition expression "${t}" is not supported`
                      ),
                      e
                    );
                  const r = s[1],
                    i = s[2],
                    o = s[3];
                  e.push(wn(r, o)),
                    "<" != i[0] || (r == _n && o == _n) || e.push(wn(o, r));
                })(t, n, e)
              )
            : n.push(t),
          n
        );
      }
      const yn = new Set(["true", "1"]),
        vn = new Set(["false", "0"]);
      function wn(t, e) {
        const n = yn.has(t) || vn.has(t),
          s = yn.has(e) || vn.has(e);
        return (r, i) => {
          let o = t == _n || t == r,
            a = e == _n || e == i;
          return (
            !o && n && "boolean" == typeof r && (o = r ? yn.has(t) : vn.has(t)),
            !a && s && "boolean" == typeof i && (a = i ? yn.has(e) : vn.has(e)),
            o && a
          );
        };
      }
      const Cn = new RegExp("s*:selfs*,?", "g");
      function Sn(t, e, n) {
        return new En(t).build(e, n);
      }
      class En {
        constructor(t) {
          this._driver = t;
        }
        build(t, e) {
          const n = new On(e);
          return this._resetContextStyleTimingState(n), mn(this, on(t), n);
        }
        _resetContextStyleTimingState(t) {
          (t.currentQuerySelector = ""),
            (t.collectedStyles = {}),
            (t.collectedStyles[""] = {}),
            (t.currentTime = 0);
        }
        visitTrigger(t, e) {
          let n = (e.queryCount = 0),
            s = (e.depCount = 0);
          const r = [],
            i = [];
          return (
            "@" == t.name.charAt(0) &&
              e.errors.push(
                "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"
              ),
            t.definitions.forEach((t) => {
              if ((this._resetContextStyleTimingState(e), 0 == t.type)) {
                const n = t,
                  s = n.name;
                s
                  .toString()
                  .split(/\s*,\s*/)
                  .forEach((t) => {
                    (n.name = t), r.push(this.visitState(n, e));
                  }),
                  (n.name = s);
              } else if (1 == t.type) {
                const r = this.visitTransition(t, e);
                (n += r.queryCount), (s += r.depCount), i.push(r);
              } else
                e.errors.push(
                  "only state() and transition() definitions can sit inside of a trigger()"
                );
            }),
            {
              type: 7,
              name: t.name,
              states: r,
              transitions: i,
              queryCount: n,
              depCount: s,
              options: null,
            }
          );
        }
        visitState(t, e) {
          const n = this.visitStyle(t.styles, e),
            s = (t.options && t.options.params) || null;
          if (n.containsDynamicStyles) {
            const r = new Set(),
              i = s || {};
            if (
              (n.styles.forEach((t) => {
                if (xn(t)) {
                  const e = t;
                  Object.keys(e).forEach((t) => {
                    ln(e[t]).forEach((t) => {
                      i.hasOwnProperty(t) || r.add(t);
                    });
                  });
                }
              }),
              r.size)
            ) {
              const n = un(r.values());
              e.errors.push(
                `state("${
                  t.name
                }", ...) must define default values for all the following style substitutions: ${n.join(
                  ", "
                )}`
              );
            }
          }
          return {
            type: 0,
            name: t.name,
            style: n,
            options: s ? { params: s } : null,
          };
        }
        visitTransition(t, e) {
          (e.queryCount = 0), (e.depCount = 0);
          const n = mn(this, on(t.animation), e);
          return {
            type: 1,
            matchers: bn(t.expr, e.errors),
            animation: n,
            queryCount: e.queryCount,
            depCount: e.depCount,
            options: kn(t.options),
          };
        }
        visitSequence(t, e) {
          return {
            type: 2,
            steps: t.steps.map((t) => mn(this, t, e)),
            options: kn(t.options),
          };
        }
        visitGroup(t, e) {
          const n = e.currentTime;
          let s = 0;
          const r = t.steps.map((t) => {
            e.currentTime = n;
            const r = mn(this, t, e);
            return (s = Math.max(s, e.currentTime)), r;
          });
          return (
            (e.currentTime = s), { type: 3, steps: r, options: kn(t.options) }
          );
        }
        visitAnimate(t, e) {
          const n = (function (t, e) {
            let n = null;
            if (t.hasOwnProperty("duration")) n = t;
            else if ("number" == typeof t) return Tn(Xe(t, e).duration, 0, "");
            const s = t;
            if (
              s
                .split(/\s+/)
                .some((t) => "{" == t.charAt(0) && "{" == t.charAt(1))
            ) {
              const t = Tn(0, 0, "");
              return (t.dynamic = !0), (t.strValue = s), t;
            }
            return (n = n || Xe(s, e)), Tn(n.duration, n.delay, n.easing);
          })(t.timings, e.errors);
          let s;
          e.currentAnimateTimings = n;
          let r = t.styles ? t.styles : ge({});
          if (5 == r.type) s = this.visitKeyframes(r, e);
          else {
            let r = t.styles,
              i = !1;
            if (!r) {
              i = !0;
              const t = {};
              n.easing && (t.easing = n.easing), (r = ge(t));
            }
            e.currentTime += n.duration + n.delay;
            const o = this.visitStyle(r, e);
            (o.isEmptyStep = i), (s = o);
          }
          return (
            (e.currentAnimateTimings = null),
            { type: 4, timings: n, style: s, options: null }
          );
        }
        visitStyle(t, e) {
          const n = this._makeStyleAst(t, e);
          return this._validateStyleAst(n, e), n;
        }
        _makeStyleAst(t, e) {
          const n = [];
          Array.isArray(t.styles)
            ? t.styles.forEach((t) => {
                "string" == typeof t
                  ? t == he
                    ? n.push(t)
                    : e.errors.push(
                        `The provided style string value ${t} is not allowed.`
                      )
                  : n.push(t);
              })
            : n.push(t.styles);
          let s = !1,
            r = null;
          return (
            n.forEach((t) => {
              if (xn(t)) {
                const e = t,
                  n = e.easing;
                if ((n && ((r = n), delete e.easing), !s))
                  for (let t in e)
                    if (e[t].toString().indexOf("{{") >= 0) {
                      s = !0;
                      break;
                    }
              }
            }),
            {
              type: 6,
              styles: n,
              easing: r,
              offset: t.offset,
              containsDynamicStyles: s,
              options: null,
            }
          );
        }
        _validateStyleAst(t, e) {
          const n = e.currentAnimateTimings;
          let s = e.currentTime,
            r = e.currentTime;
          n && r > 0 && (r -= n.duration + n.delay),
            t.styles.forEach((t) => {
              "string" != typeof t &&
                Object.keys(t).forEach((n) => {
                  if (!this._driver.validateStyleProperty(n))
                    return void e.errors.push(
                      `The provided animation property "${n}" is not a supported CSS property for animations`
                    );
                  const i = e.collectedStyles[e.currentQuerySelector],
                    o = i[n];
                  let a = !0;
                  o &&
                    (r != s &&
                      r >= o.startTime &&
                      s <= o.endTime &&
                      (e.errors.push(
                        `The CSS property "${n}" that exists between the times of "${o.startTime}ms" and "${o.endTime}ms" is also being animated in a parallel animation between the times of "${r}ms" and "${s}ms"`
                      ),
                      (a = !1)),
                    (r = o.startTime)),
                    a && (i[n] = { startTime: r, endTime: s }),
                    e.options &&
                      (function (t, e, n) {
                        const s = e.params || {},
                          r = ln(t);
                        r.length &&
                          r.forEach((t) => {
                            s.hasOwnProperty(t) ||
                              n.push(
                                `Unable to resolve the local animation param ${t} in the given list of values`
                              );
                          });
                      })(t[n], e.options, e.errors);
                });
            });
        }
        visitKeyframes(t, e) {
          const n = { type: 5, styles: [], options: null };
          if (!e.currentAnimateTimings)
            return (
              e.errors.push(
                "keyframes() must be placed inside of a call to animate()"
              ),
              n
            );
          let s = 0;
          const r = [];
          let i = !1,
            o = !1,
            a = 0;
          const l = t.steps.map((t) => {
            const n = this._makeStyleAst(t, e);
            let l =
                null != n.offset
                  ? n.offset
                  : (function (t) {
                      if ("string" == typeof t) return null;
                      let e = null;
                      if (Array.isArray(t))
                        t.forEach((t) => {
                          if (xn(t) && t.hasOwnProperty("offset")) {
                            const n = t;
                            (e = parseFloat(n.offset)), delete n.offset;
                          }
                        });
                      else if (xn(t) && t.hasOwnProperty("offset")) {
                        const n = t;
                        (e = parseFloat(n.offset)), delete n.offset;
                      }
                      return e;
                    })(n.styles),
              c = 0;
            return (
              null != l && (s++, (c = n.offset = l)),
              (o = o || c < 0 || c > 1),
              (i = i || c < a),
              (a = c),
              r.push(c),
              n
            );
          });
          o &&
            e.errors.push(
              "Please ensure that all keyframe offsets are between 0 and 1"
            ),
            i &&
              e.errors.push(
                "Please ensure that all keyframe offsets are in order"
              );
          const c = t.steps.length;
          let u = 0;
          s > 0 && s < c
            ? e.errors.push(
                "Not all style() steps within the declared keyframes() contain offsets"
              )
            : 0 == s && (u = 1 / (c - 1));
          const h = c - 1,
            d = e.currentTime,
            p = e.currentAnimateTimings,
            f = p.duration;
          return (
            l.forEach((t, s) => {
              const i = u > 0 ? (s == h ? 1 : u * s) : r[s],
                o = i * f;
              (e.currentTime = d + p.delay + o),
                (p.duration = o),
                this._validateStyleAst(t, e),
                (t.offset = i),
                n.styles.push(t);
            }),
            n
          );
        }
        visitReference(t, e) {
          return {
            type: 8,
            animation: mn(this, on(t.animation), e),
            options: kn(t.options),
          };
        }
        visitAnimateChild(t, e) {
          return e.depCount++, { type: 9, options: kn(t.options) };
        }
        visitAnimateRef(t, e) {
          return {
            type: 10,
            animation: this.visitReference(t.animation, e),
            options: kn(t.options),
          };
        }
        visitQuery(t, e) {
          const n = e.currentQuerySelector,
            s = t.options || {};
          e.queryCount++, (e.currentQuery = t);
          const [r, i] = (function (t) {
            const e = !!t.split(/\s*,\s*/).find((t) => ":self" == t);
            return (
              e && (t = t.replace(Cn, "")),
              [
                (t = t
                  .replace(/@\*/g, We)
                  .replace(/@\w+/g, (t) => ".ng-trigger-" + t.substr(1))
                  .replace(/:animating/g, Qe)),
                e,
              ]
            );
          })(t.selector);
          (e.currentQuerySelector = n.length ? n + " " + r : r),
            Re(e.collectedStyles, e.currentQuerySelector, {});
          const o = mn(this, on(t.animation), e);
          return (
            (e.currentQuery = null),
            (e.currentQuerySelector = n),
            {
              type: 11,
              selector: r,
              limit: s.limit || 0,
              optional: !!s.optional,
              includeSelf: i,
              animation: o,
              originalSelector: t.selector,
              options: kn(t.options),
            }
          );
        }
        visitStagger(t, e) {
          e.currentQuery ||
            e.errors.push("stagger() can only be used inside of query()");
          const n =
            "full" === t.timings
              ? { duration: 0, delay: 0, easing: "full" }
              : Xe(t.timings, e.errors, !0);
          return {
            type: 12,
            animation: mn(this, on(t.animation), e),
            timings: n,
            options: null,
          };
        }
      }
      class On {
        constructor(t) {
          (this.errors = t),
            (this.queryCount = 0),
            (this.depCount = 0),
            (this.currentTransition = null),
            (this.currentQuery = null),
            (this.currentQuerySelector = null),
            (this.currentAnimateTimings = null),
            (this.currentTime = 0),
            (this.collectedStyles = {}),
            (this.options = null);
        }
      }
      function xn(t) {
        return !Array.isArray(t) && "object" == typeof t;
      }
      function kn(t) {
        var e;
        return (
          t
            ? (t = Je(t)).params && (t.params = (e = t.params) ? Je(e) : null)
            : (t = {}),
          t
        );
      }
      function Tn(t, e, n) {
        return { duration: t, delay: e, easing: n };
      }
      function Rn(t, e, n, s, r, i, o = null, a = !1) {
        return {
          type: 1,
          element: t,
          keyframes: e,
          preStyleProps: n,
          postStyleProps: s,
          duration: r,
          delay: i,
          totalTime: r + i,
          easing: o,
          subTimeline: a,
        };
      }
      class An {
        constructor() {
          this._map = new Map();
        }
        consume(t) {
          let e = this._map.get(t);
          return e ? this._map.delete(t) : (e = []), e;
        }
        append(t, e) {
          let n = this._map.get(t);
          n || this._map.set(t, (n = [])), n.push(...e);
        }
        has(t) {
          return this._map.has(t);
        }
        clear() {
          this._map.clear();
        }
      }
      const In = new RegExp(":enter", "g"),
        jn = new RegExp(":leave", "g");
      function Pn(t, e, n, s, r, i = {}, o = {}, a, l, c = []) {
        return new Dn().buildKeyframes(t, e, n, s, r, i, o, a, l, c);
      }
      class Dn {
        buildKeyframes(t, e, n, s, r, i, o, a, l, c = []) {
          l = l || new An();
          const u = new Ln(t, e, l, s, r, c, []);
          (u.options = a),
            u.currentTimeline.setStyles([i], null, u.errors, a),
            mn(this, n, u);
          const h = u.timelines.filter((t) => t.containsAnimation());
          if (h.length && Object.keys(o).length) {
            const t = h[h.length - 1];
            t.allowOnlyTimelineStyles() || t.setStyles([o], null, u.errors, a);
          }
          return h.length
            ? h.map((t) => t.buildKeyframes())
            : [Rn(e, [], [], [], 0, 0, "", !1)];
        }
        visitTrigger(t, e) {}
        visitState(t, e) {}
        visitTransition(t, e) {}
        visitAnimateChild(t, e) {
          const n = e.subInstructions.consume(e.element);
          if (n) {
            const s = e.createSubContext(t.options),
              r = e.currentTimeline.currentTime,
              i = this._visitSubInstructions(n, s, s.options);
            r != i && e.transformIntoNewTimeline(i);
          }
          e.previousNode = t;
        }
        visitAnimateRef(t, e) {
          const n = e.createSubContext(t.options);
          n.transformIntoNewTimeline(),
            this.visitReference(t.animation, n),
            e.transformIntoNewTimeline(n.currentTimeline.currentTime),
            (e.previousNode = t);
        }
        _visitSubInstructions(t, e, n) {
          let s = e.currentTimeline.currentTime;
          const r = null != n.duration ? Ze(n.duration) : null,
            i = null != n.delay ? Ze(n.delay) : null;
          return (
            0 !== r &&
              t.forEach((t) => {
                const n = e.appendInstructionToTimeline(t, r, i);
                s = Math.max(s, n.duration + n.delay);
              }),
            s
          );
        }
        visitReference(t, e) {
          e.updateOptions(t.options, !0),
            mn(this, t.animation, e),
            (e.previousNode = t);
        }
        visitSequence(t, e) {
          const n = e.subContextCount;
          let s = e;
          const r = t.options;
          if (
            r &&
            (r.params || r.delay) &&
            ((s = e.createSubContext(r)),
            s.transformIntoNewTimeline(),
            null != r.delay)
          ) {
            6 == s.previousNode.type &&
              (s.currentTimeline.snapshotCurrentStyles(),
              (s.previousNode = Nn));
            const t = Ze(r.delay);
            s.delayNextStep(t);
          }
          t.steps.length &&
            (t.steps.forEach((t) => mn(this, t, s)),
            s.currentTimeline.applyStylesToKeyframe(),
            s.subContextCount > n && s.transformIntoNewTimeline()),
            (e.previousNode = t);
        }
        visitGroup(t, e) {
          const n = [];
          let s = e.currentTimeline.currentTime;
          const r = t.options && t.options.delay ? Ze(t.options.delay) : 0;
          t.steps.forEach((i) => {
            const o = e.createSubContext(t.options);
            r && o.delayNextStep(r),
              mn(this, i, o),
              (s = Math.max(s, o.currentTimeline.currentTime)),
              n.push(o.currentTimeline);
          }),
            n.forEach((t) => e.currentTimeline.mergeTimelineCollectedStyles(t)),
            e.transformIntoNewTimeline(s),
            (e.previousNode = t);
        }
        _visitTiming(t, e) {
          if (t.dynamic) {
            const n = t.strValue;
            return Xe(e.params ? cn(n, e.params, e.errors) : n, e.errors);
          }
          return { duration: t.duration, delay: t.delay, easing: t.easing };
        }
        visitAnimate(t, e) {
          const n = (e.currentAnimateTimings = this._visitTiming(t.timings, e)),
            s = e.currentTimeline;
          n.delay && (e.incrementTime(n.delay), s.snapshotCurrentStyles());
          const r = t.style;
          5 == r.type
            ? this.visitKeyframes(r, e)
            : (e.incrementTime(n.duration),
              this.visitStyle(r, e),
              s.applyStylesToKeyframe()),
            (e.currentAnimateTimings = null),
            (e.previousNode = t);
        }
        visitStyle(t, e) {
          const n = e.currentTimeline,
            s = e.currentAnimateTimings;
          !s && n.getCurrentStyleProperties().length && n.forwardFrame();
          const r = (s && s.easing) || t.easing;
          t.isEmptyStep
            ? n.applyEmptyStep(r)
            : n.setStyles(t.styles, r, e.errors, e.options),
            (e.previousNode = t);
        }
        visitKeyframes(t, e) {
          const n = e.currentAnimateTimings,
            s = e.currentTimeline.duration,
            r = n.duration,
            i = e.createSubContext().currentTimeline;
          (i.easing = n.easing),
            t.styles.forEach((t) => {
              i.forwardTime((t.offset || 0) * r),
                i.setStyles(t.styles, t.easing, e.errors, e.options),
                i.applyStylesToKeyframe();
            }),
            e.currentTimeline.mergeTimelineCollectedStyles(i),
            e.transformIntoNewTimeline(s + r),
            (e.previousNode = t);
        }
        visitQuery(t, e) {
          const n = e.currentTimeline.currentTime,
            s = t.options || {},
            r = s.delay ? Ze(s.delay) : 0;
          r &&
            (6 === e.previousNode.type ||
              (0 == n &&
                e.currentTimeline.getCurrentStyleProperties().length)) &&
            (e.currentTimeline.snapshotCurrentStyles(), (e.previousNode = Nn));
          let i = n;
          const o = e.invokeQuery(
            t.selector,
            t.originalSelector,
            t.limit,
            t.includeSelf,
            !!s.optional,
            e.errors
          );
          e.currentQueryTotal = o.length;
          let a = null;
          o.forEach((n, s) => {
            e.currentQueryIndex = s;
            const o = e.createSubContext(t.options, n);
            r && o.delayNextStep(r),
              n === e.element && (a = o.currentTimeline),
              mn(this, t.animation, o),
              o.currentTimeline.applyStylesToKeyframe(),
              (i = Math.max(i, o.currentTimeline.currentTime));
          }),
            (e.currentQueryIndex = 0),
            (e.currentQueryTotal = 0),
            e.transformIntoNewTimeline(i),
            a &&
              (e.currentTimeline.mergeTimelineCollectedStyles(a),
              e.currentTimeline.snapshotCurrentStyles()),
            (e.previousNode = t);
        }
        visitStagger(t, e) {
          const n = e.parentContext,
            s = e.currentTimeline,
            r = t.timings,
            i = Math.abs(r.duration),
            o = i * (e.currentQueryTotal - 1);
          let a = i * e.currentQueryIndex;
          switch (r.duration < 0 ? "reverse" : r.easing) {
            case "reverse":
              a = o - a;
              break;
            case "full":
              a = n.currentStaggerTime;
          }
          const l = e.currentTimeline;
          a && l.delayNextStep(a);
          const c = l.currentTime;
          mn(this, t.animation, e),
            (e.previousNode = t),
            (n.currentStaggerTime =
              s.currentTime - c + (s.startTime - n.currentTimeline.startTime));
        }
      }
      const Nn = {};
      class Ln {
        constructor(t, e, n, s, r, i, o, a) {
          (this._driver = t),
            (this.element = e),
            (this.subInstructions = n),
            (this._enterClassName = s),
            (this._leaveClassName = r),
            (this.errors = i),
            (this.timelines = o),
            (this.parentContext = null),
            (this.currentAnimateTimings = null),
            (this.previousNode = Nn),
            (this.subContextCount = 0),
            (this.options = {}),
            (this.currentQueryIndex = 0),
            (this.currentQueryTotal = 0),
            (this.currentStaggerTime = 0),
            (this.currentTimeline = a || new Mn(this._driver, e, 0)),
            o.push(this.currentTimeline);
        }
        get params() {
          return this.options.params;
        }
        updateOptions(t, e) {
          if (!t) return;
          const n = t;
          let s = this.options;
          null != n.duration && (s.duration = Ze(n.duration)),
            null != n.delay && (s.delay = Ze(n.delay));
          const r = n.params;
          if (r) {
            let t = s.params;
            t || (t = this.options.params = {}),
              Object.keys(r).forEach((n) => {
                (e && t.hasOwnProperty(n)) || (t[n] = cn(r[n], t, this.errors));
              });
          }
        }
        _copyOptions() {
          const t = {};
          if (this.options) {
            const e = this.options.params;
            if (e) {
              const n = (t.params = {});
              Object.keys(e).forEach((t) => {
                n[t] = e[t];
              });
            }
          }
          return t;
        }
        createSubContext(t = null, e, n) {
          const s = e || this.element,
            r = new Ln(
              this._driver,
              s,
              this.subInstructions,
              this._enterClassName,
              this._leaveClassName,
              this.errors,
              this.timelines,
              this.currentTimeline.fork(s, n || 0)
            );
          return (
            (r.previousNode = this.previousNode),
            (r.currentAnimateTimings = this.currentAnimateTimings),
            (r.options = this._copyOptions()),
            r.updateOptions(t),
            (r.currentQueryIndex = this.currentQueryIndex),
            (r.currentQueryTotal = this.currentQueryTotal),
            (r.parentContext = this),
            this.subContextCount++,
            r
          );
        }
        transformIntoNewTimeline(t) {
          return (
            (this.previousNode = Nn),
            (this.currentTimeline = this.currentTimeline.fork(this.element, t)),
            this.timelines.push(this.currentTimeline),
            this.currentTimeline
          );
        }
        appendInstructionToTimeline(t, e, n) {
          const s = {
              duration: null != e ? e : t.duration,
              delay:
                this.currentTimeline.currentTime +
                (null != n ? n : 0) +
                t.delay,
              easing: "",
            },
            r = new Fn(
              this._driver,
              t.element,
              t.keyframes,
              t.preStyleProps,
              t.postStyleProps,
              s,
              t.stretchStartingKeyframe
            );
          return this.timelines.push(r), s;
        }
        incrementTime(t) {
          this.currentTimeline.forwardTime(this.currentTimeline.duration + t);
        }
        delayNextStep(t) {
          t > 0 && this.currentTimeline.delayNextStep(t);
        }
        invokeQuery(t, e, n, s, r, i) {
          let o = [];
          if ((s && o.push(this.element), t.length > 0)) {
            t = (t = t.replace(In, "." + this._enterClassName)).replace(
              jn,
              "." + this._leaveClassName
            );
            let e = this._driver.query(this.element, t, 1 != n);
            0 !== n &&
              (e = n < 0 ? e.slice(e.length + n, e.length) : e.slice(0, n)),
              o.push(...e);
          }
          return (
            r ||
              0 != o.length ||
              i.push(
                `\`query("${e}")\` returned zero elements. (Use \`query("${e}", { optional: true })\` if you wish to allow this.)`
              ),
            o
          );
        }
      }
      class Mn {
        constructor(t, e, n, s) {
          (this._driver = t),
            (this.element = e),
            (this.startTime = n),
            (this._elementTimelineStylesLookup = s),
            (this.duration = 0),
            (this._previousKeyframe = {}),
            (this._currentKeyframe = {}),
            (this._keyframes = new Map()),
            (this._styleSummary = {}),
            (this._pendingStyles = {}),
            (this._backFill = {}),
            (this._currentEmptyStepKeyframe = null),
            this._elementTimelineStylesLookup ||
              (this._elementTimelineStylesLookup = new Map()),
            (this._localTimelineStyles = Object.create(this._backFill, {})),
            (this._globalTimelineStyles = this._elementTimelineStylesLookup.get(
              e
            )),
            this._globalTimelineStyles ||
              ((this._globalTimelineStyles = this._localTimelineStyles),
              this._elementTimelineStylesLookup.set(
                e,
                this._localTimelineStyles
              )),
            this._loadKeyframe();
        }
        containsAnimation() {
          switch (this._keyframes.size) {
            case 0:
              return !1;
            case 1:
              return this.getCurrentStyleProperties().length > 0;
            default:
              return !0;
          }
        }
        getCurrentStyleProperties() {
          return Object.keys(this._currentKeyframe);
        }
        get currentTime() {
          return this.startTime + this.duration;
        }
        delayNextStep(t) {
          const e =
            1 == this._keyframes.size &&
            Object.keys(this._pendingStyles).length;
          this.duration || e
            ? (this.forwardTime(this.currentTime + t),
              e && this.snapshotCurrentStyles())
            : (this.startTime += t);
        }
        fork(t, e) {
          return (
            this.applyStylesToKeyframe(),
            new Mn(
              this._driver,
              t,
              e || this.currentTime,
              this._elementTimelineStylesLookup
            )
          );
        }
        _loadKeyframe() {
          this._currentKeyframe &&
            (this._previousKeyframe = this._currentKeyframe),
            (this._currentKeyframe = this._keyframes.get(this.duration)),
            this._currentKeyframe ||
              ((this._currentKeyframe = Object.create(this._backFill, {})),
              this._keyframes.set(this.duration, this._currentKeyframe));
        }
        forwardFrame() {
          (this.duration += 1), this._loadKeyframe();
        }
        forwardTime(t) {
          this.applyStylesToKeyframe(),
            (this.duration = t),
            this._loadKeyframe();
        }
        _updateStyle(t, e) {
          (this._localTimelineStyles[t] = e),
            (this._globalTimelineStyles[t] = e),
            (this._styleSummary[t] = { time: this.currentTime, value: e });
        }
        allowOnlyTimelineStyles() {
          return this._currentEmptyStepKeyframe !== this._currentKeyframe;
        }
        applyEmptyStep(t) {
          t && (this._previousKeyframe.easing = t),
            Object.keys(this._globalTimelineStyles).forEach((t) => {
              (this._backFill[t] = this._globalTimelineStyles[t] || he),
                (this._currentKeyframe[t] = he);
            }),
            (this._currentEmptyStepKeyframe = this._currentKeyframe);
        }
        setStyles(t, e, n, s) {
          e && (this._previousKeyframe.easing = e);
          const r = (s && s.params) || {},
            i = (function (t, e) {
              const n = {};
              let s;
              return (
                t.forEach((t) => {
                  "*" === t
                    ? ((s = s || Object.keys(e)),
                      s.forEach((t) => {
                        n[t] = he;
                      }))
                    : tn(t, !1, n);
                }),
                n
              );
            })(t, this._globalTimelineStyles);
          Object.keys(i).forEach((t) => {
            const e = cn(i[t], r, n);
            (this._pendingStyles[t] = e),
              this._localTimelineStyles.hasOwnProperty(t) ||
                (this._backFill[t] = this._globalTimelineStyles.hasOwnProperty(
                  t
                )
                  ? this._globalTimelineStyles[t]
                  : he),
              this._updateStyle(t, e);
          });
        }
        applyStylesToKeyframe() {
          const t = this._pendingStyles,
            e = Object.keys(t);
          0 != e.length &&
            ((this._pendingStyles = {}),
            e.forEach((e) => {
              this._currentKeyframe[e] = t[e];
            }),
            Object.keys(this._localTimelineStyles).forEach((t) => {
              this._currentKeyframe.hasOwnProperty(t) ||
                (this._currentKeyframe[t] = this._localTimelineStyles[t]);
            }));
        }
        snapshotCurrentStyles() {
          Object.keys(this._localTimelineStyles).forEach((t) => {
            const e = this._localTimelineStyles[t];
            (this._pendingStyles[t] = e), this._updateStyle(t, e);
          });
        }
        getFinalKeyframe() {
          return this._keyframes.get(this.duration);
        }
        get properties() {
          const t = [];
          for (let e in this._currentKeyframe) t.push(e);
          return t;
        }
        mergeTimelineCollectedStyles(t) {
          Object.keys(t._styleSummary).forEach((e) => {
            const n = this._styleSummary[e],
              s = t._styleSummary[e];
            (!n || s.time > n.time) && this._updateStyle(e, s.value);
          });
        }
        buildKeyframes() {
          this.applyStylesToKeyframe();
          const t = new Set(),
            e = new Set(),
            n = 1 === this._keyframes.size && 0 === this.duration;
          let s = [];
          this._keyframes.forEach((r, i) => {
            const o = tn(r, !0);
            Object.keys(o).forEach((n) => {
              const s = o[n];
              "!" == s ? t.add(n) : s == he && e.add(n);
            }),
              n || (o.offset = i / this.duration),
              s.push(o);
          });
          const r = t.size ? un(t.values()) : [],
            i = e.size ? un(e.values()) : [];
          if (n) {
            const t = s[0],
              e = Je(t);
            (t.offset = 0), (e.offset = 1), (s = [t, e]);
          }
          return Rn(
            this.element,
            s,
            r,
            i,
            this.duration,
            this.startTime,
            this.easing,
            !1
          );
        }
      }
      class Fn extends Mn {
        constructor(t, e, n, s, r, i, o = !1) {
          super(t, e, i.delay),
            (this.element = e),
            (this.keyframes = n),
            (this.preStyleProps = s),
            (this.postStyleProps = r),
            (this._stretchStartingKeyframe = o),
            (this.timings = {
              duration: i.duration,
              delay: i.delay,
              easing: i.easing,
            });
        }
        containsAnimation() {
          return this.keyframes.length > 1;
        }
        buildKeyframes() {
          let t = this.keyframes,
            { delay: e, duration: n, easing: s } = this.timings;
          if (this._stretchStartingKeyframe && e) {
            const r = [],
              i = n + e,
              o = e / i,
              a = tn(t[0], !1);
            (a.offset = 0), r.push(a);
            const l = tn(t[0], !1);
            (l.offset = Vn(o)), r.push(l);
            const c = t.length - 1;
            for (let s = 1; s <= c; s++) {
              let o = tn(t[s], !1);
              (o.offset = Vn((e + o.offset * n) / i)), r.push(o);
            }
            (n = i), (e = 0), (s = ""), (t = r);
          }
          return Rn(
            this.element,
            t,
            this.preStyleProps,
            this.postStyleProps,
            n,
            e,
            s,
            !0
          );
        }
      }
      function Vn(t, e = 3) {
        const n = Math.pow(10, e - 1);
        return Math.round(t * n) / n;
      }
      class Hn {}
      class Un extends Hn {
        normalizePropertyName(t, e) {
          return dn(t);
        }
        normalizeStyleValue(t, e, n, s) {
          let r = "";
          const i = n.toString().trim();
          if (zn[e] && 0 !== n && "0" !== n)
            if ("number" == typeof n) r = "px";
            else {
              const e = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
              e &&
                0 == e[1].length &&
                s.push(`Please provide a CSS unit value for ${t}:${n}`);
            }
          return i + r;
        }
      }
      const zn = (() =>
        (function (t) {
          const e = {};
          return t.forEach((t) => (e[t] = !0)), e;
        })(
          "width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(
            ","
          )
        ))();
      function Bn(t, e, n, s, r, i, o, a, l, c, u, h, d) {
        return {
          type: 0,
          element: t,
          triggerName: e,
          isRemovalTransition: r,
          fromState: n,
          fromStyles: i,
          toState: s,
          toStyles: o,
          timelines: a,
          queriedElements: l,
          preStyleProps: c,
          postStyleProps: u,
          totalTime: h,
          errors: d,
        };
      }
      const qn = {};
      class $n {
        constructor(t, e, n) {
          (this._triggerName = t), (this.ast = e), (this._stateStyles = n);
        }
        match(t, e, n, s) {
          return (function (t, e, n, s, r) {
            return t.some((t) => t(e, n, s, r));
          })(this.ast.matchers, t, e, n, s);
        }
        buildStyles(t, e, n) {
          const s = this._stateStyles["*"],
            r = this._stateStyles[t],
            i = s ? s.buildStyles(e, n) : {};
          return r ? r.buildStyles(e, n) : i;
        }
        build(t, e, n, s, r, i, o, a, l, c) {
          const u = [],
            h = (this.ast.options && this.ast.options.params) || qn,
            d = this.buildStyles(n, (o && o.params) || qn, u),
            p = (a && a.params) || qn,
            f = this.buildStyles(s, p, u),
            m = new Set(),
            g = new Map(),
            _ = new Map(),
            b = "void" === s,
            y = { params: Object.assign(Object.assign({}, h), p) },
            v = c ? [] : Pn(t, e, this.ast.animation, r, i, d, f, y, l, u);
          let w = 0;
          if (
            (v.forEach((t) => {
              w = Math.max(t.duration + t.delay, w);
            }),
            u.length)
          )
            return Bn(e, this._triggerName, n, s, b, d, f, [], [], g, _, w, u);
          v.forEach((t) => {
            const n = t.element,
              s = Re(g, n, {});
            t.preStyleProps.forEach((t) => (s[t] = !0));
            const r = Re(_, n, {});
            t.postStyleProps.forEach((t) => (r[t] = !0)), n !== e && m.add(n);
          });
          const C = un(m.values());
          return Bn(e, this._triggerName, n, s, b, d, f, v, C, g, _, w);
        }
      }
      class Kn {
        constructor(t, e) {
          (this.styles = t), (this.defaultParams = e);
        }
        buildStyles(t, e) {
          const n = {},
            s = Je(this.defaultParams);
          return (
            Object.keys(t).forEach((e) => {
              const n = t[e];
              null != n && (s[e] = n);
            }),
            this.styles.styles.forEach((t) => {
              if ("string" != typeof t) {
                const r = t;
                Object.keys(r).forEach((t) => {
                  let i = r[t];
                  i.length > 1 && (i = cn(i, s, e)), (n[t] = i);
                });
              }
            }),
            n
          );
        }
      }
      class Wn {
        constructor(t, e) {
          (this.name = t),
            (this.ast = e),
            (this.transitionFactories = []),
            (this.states = {}),
            e.states.forEach((t) => {
              this.states[t.name] = new Kn(
                t.style,
                (t.options && t.options.params) || {}
              );
            }),
            Gn(this.states, "true", "1"),
            Gn(this.states, "false", "0"),
            e.transitions.forEach((e) => {
              this.transitionFactories.push(new $n(t, e, this.states));
            }),
            (this.fallbackTransition = new $n(
              t,
              {
                type: 1,
                animation: { type: 2, steps: [], options: null },
                matchers: [(t, e) => !0],
                options: null,
                queryCount: 0,
                depCount: 0,
              },
              this.states
            ));
        }
        get containsQueries() {
          return this.ast.queryCount > 0;
        }
        matchTransition(t, e, n, s) {
          return (
            this.transitionFactories.find((r) => r.match(t, e, n, s)) || null
          );
        }
        matchStyles(t, e, n) {
          return this.fallbackTransition.buildStyles(t, e, n);
        }
      }
      function Gn(t, e, n) {
        t.hasOwnProperty(e)
          ? t.hasOwnProperty(n) || (t[n] = t[e])
          : t.hasOwnProperty(n) && (t[e] = t[n]);
      }
      const Qn = new An();
      class Zn {
        constructor(t, e, n) {
          (this.bodyNode = t),
            (this._driver = e),
            (this._normalizer = n),
            (this._animations = {}),
            (this._playersById = {}),
            (this.players = []);
        }
        register(t, e) {
          const n = [],
            s = Sn(this._driver, e, n);
          if (n.length)
            throw new Error(
              "Unable to build the animation due to the following errors: " +
                n.join("\n")
            );
          this._animations[t] = s;
        }
        _buildPlayer(t, e, n) {
          const s = t.element,
            r = Oe(0, this._normalizer, 0, t.keyframes, e, n);
          return this._driver.animate(
            s,
            r,
            t.duration,
            t.delay,
            t.easing,
            [],
            !0
          );
        }
        create(t, e, n = {}) {
          const s = [],
            r = this._animations[t];
          let i;
          const o = new Map();
          if (
            (r
              ? ((i = Pn(this._driver, e, r, qe, $e, {}, {}, n, Qn, s)),
                i.forEach((t) => {
                  const e = Re(o, t.element, {});
                  t.postStyleProps.forEach((t) => (e[t] = null));
                }))
              : (s.push(
                  "The requested animation doesn't exist or has already been destroyed"
                ),
                (i = [])),
            s.length)
          )
            throw new Error(
              "Unable to create the animation due to the following errors: " +
                s.join("\n")
            );
          o.forEach((t, e) => {
            Object.keys(t).forEach((n) => {
              t[n] = this._driver.computeStyle(e, n, he);
            });
          });
          const a = Ee(
            i.map((t) => {
              const e = o.get(t.element);
              return this._buildPlayer(t, {}, e);
            })
          );
          return (
            (this._playersById[t] = a),
            a.onDestroy(() => this.destroy(t)),
            this.players.push(a),
            a
          );
        }
        destroy(t) {
          const e = this._getPlayer(t);
          e.destroy(), delete this._playersById[t];
          const n = this.players.indexOf(e);
          n >= 0 && this.players.splice(n, 1);
        }
        _getPlayer(t) {
          const e = this._playersById[t];
          if (!e)
            throw new Error(
              "Unable to find the timeline player referenced by " + t
            );
          return e;
        }
        listen(t, e, n, s) {
          const r = Te(e, "", "", "");
          return xe(this._getPlayer(t), n, r, s), () => {};
        }
        command(t, e, n, s) {
          if ("register" == n) return void this.register(t, s[0]);
          if ("create" == n) return void this.create(t, e, s[0] || {});
          const r = this._getPlayer(t);
          switch (n) {
            case "play":
              r.play();
              break;
            case "pause":
              r.pause();
              break;
            case "reset":
              r.reset();
              break;
            case "restart":
              r.restart();
              break;
            case "finish":
              r.finish();
              break;
            case "init":
              r.init();
              break;
            case "setPosition":
              r.setPosition(parseFloat(s[0]));
              break;
            case "destroy":
              this.destroy(t);
          }
        }
      }
      const Yn = "ng-animate-queued",
        Xn = "ng-animate-disabled",
        Jn = ".ng-animate-disabled",
        ts = [],
        es = {
          namespaceId: "",
          setForRemoval: !1,
          setForMove: !1,
          hasAnimation: !1,
          removedBeforeQueried: !1,
        },
        ns = {
          namespaceId: "",
          setForMove: !1,
          setForRemoval: !1,
          hasAnimation: !1,
          removedBeforeQueried: !0,
        };
      class ss {
        constructor(t, e = "") {
          this.namespaceId = e;
          const n = t && t.hasOwnProperty("value");
          if (((this.value = null != (s = n ? t.value : t) ? s : null), n)) {
            const e = Je(t);
            delete e.value, (this.options = e);
          } else this.options = {};
          var s;
          this.options.params || (this.options.params = {});
        }
        get params() {
          return this.options.params;
        }
        absorbOptions(t) {
          const e = t.params;
          if (e) {
            const t = this.options.params;
            Object.keys(e).forEach((n) => {
              null == t[n] && (t[n] = e[n]);
            });
          }
        }
      }
      const rs = "void",
        is = new ss(rs);
      class os {
        constructor(t, e, n) {
          (this.id = t),
            (this.hostElement = e),
            (this._engine = n),
            (this.players = []),
            (this._triggers = {}),
            (this._queue = []),
            (this._elementListeners = new Map()),
            (this._hostClassName = "ng-tns-" + t),
            ps(e, this._hostClassName);
        }
        listen(t, e, n, s) {
          if (!this._triggers.hasOwnProperty(e))
            throw new Error(
              `Unable to listen on the animation trigger event "${n}" because the animation trigger "${e}" doesn't exist!`
            );
          if (null == n || 0 == n.length)
            throw new Error(
              `Unable to listen on the animation trigger "${e}" because the provided event is undefined!`
            );
          if ("start" != (r = n) && "done" != r)
            throw new Error(
              `The provided animation trigger event "${n}" for the animation trigger "${e}" is not supported!`
            );
          var r;
          const i = Re(this._elementListeners, t, []),
            o = { name: e, phase: n, callback: s };
          i.push(o);
          const a = Re(this._engine.statesByElement, t, {});
          return (
            a.hasOwnProperty(e) ||
              (ps(t, Ke), ps(t, "ng-trigger-" + e), (a[e] = is)),
            () => {
              this._engine.afterFlush(() => {
                const t = i.indexOf(o);
                t >= 0 && i.splice(t, 1), this._triggers[e] || delete a[e];
              });
            }
          );
        }
        register(t, e) {
          return !this._triggers[t] && ((this._triggers[t] = e), !0);
        }
        _getTrigger(t) {
          const e = this._triggers[t];
          if (!e)
            throw new Error(
              `The provided animation trigger "${t}" has not been registered!`
            );
          return e;
        }
        trigger(t, e, n, s = !0) {
          const r = this._getTrigger(e),
            i = new ls(this.id, e, t);
          let o = this._engine.statesByElement.get(t);
          o ||
            (ps(t, Ke),
            ps(t, "ng-trigger-" + e),
            this._engine.statesByElement.set(t, (o = {})));
          let a = o[e];
          const l = new ss(n, this.id);
          if (
            (!(n && n.hasOwnProperty("value")) &&
              a &&
              l.absorbOptions(a.options),
            (o[e] = l),
            a || (a = is),
            l.value !== rs && a.value === l.value)
          ) {
            if (
              !(function (t, e) {
                const n = Object.keys(t),
                  s = Object.keys(e);
                if (n.length != s.length) return !1;
                for (let r = 0; r < n.length; r++) {
                  const s = n[r];
                  if (!e.hasOwnProperty(s) || t[s] !== e[s]) return !1;
                }
                return !0;
              })(a.params, l.params)
            ) {
              const e = [],
                n = r.matchStyles(a.value, a.params, e),
                s = r.matchStyles(l.value, l.params, e);
              e.length
                ? this._engine.reportError(e)
                : this._engine.afterFlush(() => {
                    rn(t, n), sn(t, s);
                  });
            }
            return;
          }
          const c = Re(this._engine.playersByElement, t, []);
          c.forEach((t) => {
            t.namespaceId == this.id &&
              t.triggerName == e &&
              t.queued &&
              t.destroy();
          });
          let u = r.matchTransition(a.value, l.value, t, l.params),
            h = !1;
          if (!u) {
            if (!s) return;
            (u = r.fallbackTransition), (h = !0);
          }
          return (
            this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: t,
              triggerName: e,
              transition: u,
              fromState: a,
              toState: l,
              player: i,
              isFallbackTransition: h,
            }),
            h ||
              (ps(t, Yn),
              i.onStart(() => {
                fs(t, Yn);
              })),
            i.onDone(() => {
              let e = this.players.indexOf(i);
              e >= 0 && this.players.splice(e, 1);
              const n = this._engine.playersByElement.get(t);
              if (n) {
                let t = n.indexOf(i);
                t >= 0 && n.splice(t, 1);
              }
            }),
            this.players.push(i),
            c.push(i),
            i
          );
        }
        deregister(t) {
          delete this._triggers[t],
            this._engine.statesByElement.forEach((e, n) => {
              delete e[t];
            }),
            this._elementListeners.forEach((e, n) => {
              this._elementListeners.set(
                n,
                e.filter((e) => e.name != t)
              );
            });
        }
        clearElementCache(t) {
          this._engine.statesByElement.delete(t),
            this._elementListeners.delete(t);
          const e = this._engine.playersByElement.get(t);
          e &&
            (e.forEach((t) => t.destroy()),
            this._engine.playersByElement.delete(t));
        }
        _signalRemovalForInnerTriggers(t, e) {
          const n = this._engine.driver.query(t, We, !0);
          n.forEach((t) => {
            if (t.__ng_removed) return;
            const n = this._engine.fetchNamespacesByElement(t);
            n.size
              ? n.forEach((n) => n.triggerLeaveAnimation(t, e, !1, !0))
              : this.clearElementCache(t);
          }),
            this._engine.afterFlushAnimationsDone(() =>
              n.forEach((t) => this.clearElementCache(t))
            );
        }
        triggerLeaveAnimation(t, e, n, s) {
          const r = this._engine.statesByElement.get(t);
          if (r) {
            const i = [];
            if (
              (Object.keys(r).forEach((e) => {
                if (this._triggers[e]) {
                  const n = this.trigger(t, e, rs, s);
                  n && i.push(n);
                }
              }),
              i.length)
            )
              return (
                this._engine.markElementAsRemoved(this.id, t, !0, e),
                n && Ee(i).onDone(() => this._engine.processLeaveNode(t)),
                !0
              );
          }
          return !1;
        }
        prepareLeaveAnimationListeners(t) {
          const e = this._elementListeners.get(t);
          if (e) {
            const n = new Set();
            e.forEach((e) => {
              const s = e.name;
              if (n.has(s)) return;
              n.add(s);
              const r = this._triggers[s].fallbackTransition,
                i = this._engine.statesByElement.get(t)[s] || is,
                o = new ss(rs),
                a = new ls(this.id, s, t);
              this._engine.totalQueuedPlayers++,
                this._queue.push({
                  element: t,
                  triggerName: s,
                  transition: r,
                  fromState: i,
                  toState: o,
                  player: a,
                  isFallbackTransition: !0,
                });
            });
          }
        }
        removeNode(t, e) {
          const n = this._engine;
          if (
            (t.childElementCount && this._signalRemovalForInnerTriggers(t, e),
            this.triggerLeaveAnimation(t, e, !0))
          )
            return;
          let s = !1;
          if (n.totalAnimations) {
            const e = n.players.length ? n.playersByQueriedElement.get(t) : [];
            if (e && e.length) s = !0;
            else {
              let e = t;
              for (; (e = e.parentNode); )
                if (n.statesByElement.get(e)) {
                  s = !0;
                  break;
                }
            }
          }
          if ((this.prepareLeaveAnimationListeners(t), s))
            n.markElementAsRemoved(this.id, t, !1, e);
          else {
            const s = t.__ng_removed;
            (s && s !== es) ||
              (n.afterFlush(() => this.clearElementCache(t)),
              n.destroyInnerAnimations(t),
              n._onRemovalComplete(t, e));
          }
        }
        insertNode(t, e) {
          ps(t, this._hostClassName);
        }
        drainQueuedTransitions(t) {
          const e = [];
          return (
            this._queue.forEach((n) => {
              const s = n.player;
              if (s.destroyed) return;
              const r = n.element,
                i = this._elementListeners.get(r);
              i &&
                i.forEach((e) => {
                  if (e.name == n.triggerName) {
                    const s = Te(
                      r,
                      n.triggerName,
                      n.fromState.value,
                      n.toState.value
                    );
                    (s._data = t), xe(n.player, e.phase, s, e.callback);
                  }
                }),
                s.markedForDestroy
                  ? this._engine.afterFlush(() => {
                      s.destroy();
                    })
                  : e.push(n);
            }),
            (this._queue = []),
            e.sort((t, e) => {
              const n = t.transition.ast.depCount,
                s = e.transition.ast.depCount;
              return 0 == n || 0 == s
                ? n - s
                : this._engine.driver.containsElement(t.element, e.element)
                ? 1
                : -1;
            })
          );
        }
        destroy(t) {
          this.players.forEach((t) => t.destroy()),
            this._signalRemovalForInnerTriggers(this.hostElement, t);
        }
        elementContainsData(t) {
          let e = !1;
          return (
            this._elementListeners.has(t) && (e = !0),
            (e = !!this._queue.find((e) => e.element === t) || e),
            e
          );
        }
      }
      class as {
        constructor(t, e, n) {
          (this.bodyNode = t),
            (this.driver = e),
            (this._normalizer = n),
            (this.players = []),
            (this.newHostElements = new Map()),
            (this.playersByElement = new Map()),
            (this.playersByQueriedElement = new Map()),
            (this.statesByElement = new Map()),
            (this.disabledNodes = new Set()),
            (this.totalAnimations = 0),
            (this.totalQueuedPlayers = 0),
            (this._namespaceLookup = {}),
            (this._namespaceList = []),
            (this._flushFns = []),
            (this._whenQuietFns = []),
            (this.namespacesByHostElement = new Map()),
            (this.collectedEnterElements = []),
            (this.collectedLeaveElements = []),
            (this.onRemovalComplete = (t, e) => {});
        }
        _onRemovalComplete(t, e) {
          this.onRemovalComplete(t, e);
        }
        get queuedPlayers() {
          const t = [];
          return (
            this._namespaceList.forEach((e) => {
              e.players.forEach((e) => {
                e.queued && t.push(e);
              });
            }),
            t
          );
        }
        createNamespace(t, e) {
          const n = new os(t, e, this);
          return (
            e.parentNode
              ? this._balanceNamespaceList(n, e)
              : (this.newHostElements.set(e, n), this.collectEnterElement(e)),
            (this._namespaceLookup[t] = n)
          );
        }
        _balanceNamespaceList(t, e) {
          const n = this._namespaceList.length - 1;
          if (n >= 0) {
            let s = !1;
            for (let r = n; r >= 0; r--)
              if (
                this.driver.containsElement(
                  this._namespaceList[r].hostElement,
                  e
                )
              ) {
                this._namespaceList.splice(r + 1, 0, t), (s = !0);
                break;
              }
            s || this._namespaceList.splice(0, 0, t);
          } else this._namespaceList.push(t);
          return this.namespacesByHostElement.set(e, t), t;
        }
        register(t, e) {
          let n = this._namespaceLookup[t];
          return n || (n = this.createNamespace(t, e)), n;
        }
        registerTrigger(t, e, n) {
          let s = this._namespaceLookup[t];
          s && s.register(e, n) && this.totalAnimations++;
        }
        destroy(t, e) {
          if (!t) return;
          const n = this._fetchNamespace(t);
          this.afterFlush(() => {
            this.namespacesByHostElement.delete(n.hostElement),
              delete this._namespaceLookup[t];
            const e = this._namespaceList.indexOf(n);
            e >= 0 && this._namespaceList.splice(e, 1);
          }),
            this.afterFlushAnimationsDone(() => n.destroy(e));
        }
        _fetchNamespace(t) {
          return this._namespaceLookup[t];
        }
        fetchNamespacesByElement(t) {
          const e = new Set(),
            n = this.statesByElement.get(t);
          if (n) {
            const t = Object.keys(n);
            for (let s = 0; s < t.length; s++) {
              const r = n[t[s]].namespaceId;
              if (r) {
                const t = this._fetchNamespace(r);
                t && e.add(t);
              }
            }
          }
          return e;
        }
        trigger(t, e, n, s) {
          if (cs(e)) {
            const r = this._fetchNamespace(t);
            if (r) return r.trigger(e, n, s), !0;
          }
          return !1;
        }
        insertNode(t, e, n, s) {
          if (!cs(e)) return;
          const r = e.__ng_removed;
          if (r && r.setForRemoval) {
            (r.setForRemoval = !1), (r.setForMove = !0);
            const t = this.collectedLeaveElements.indexOf(e);
            t >= 0 && this.collectedLeaveElements.splice(t, 1);
          }
          if (t) {
            const s = this._fetchNamespace(t);
            s && s.insertNode(e, n);
          }
          s && this.collectEnterElement(e);
        }
        collectEnterElement(t) {
          this.collectedEnterElements.push(t);
        }
        markElementAsDisabled(t, e) {
          e
            ? this.disabledNodes.has(t) ||
              (this.disabledNodes.add(t), ps(t, Xn))
            : this.disabledNodes.has(t) &&
              (this.disabledNodes.delete(t), fs(t, Xn));
        }
        removeNode(t, e, n, s) {
          if (cs(e)) {
            const r = t ? this._fetchNamespace(t) : null;
            if (
              (r ? r.removeNode(e, s) : this.markElementAsRemoved(t, e, !1, s),
              n)
            ) {
              const n = this.namespacesByHostElement.get(e);
              n && n.id !== t && n.removeNode(e, s);
            }
          } else this._onRemovalComplete(e, s);
        }
        markElementAsRemoved(t, e, n, s) {
          this.collectedLeaveElements.push(e),
            (e.__ng_removed = {
              namespaceId: t,
              setForRemoval: s,
              hasAnimation: n,
              removedBeforeQueried: !1,
            });
        }
        listen(t, e, n, s, r) {
          return cs(e) ? this._fetchNamespace(t).listen(e, n, s, r) : () => {};
        }
        _buildInstruction(t, e, n, s, r) {
          return t.transition.build(
            this.driver,
            t.element,
            t.fromState.value,
            t.toState.value,
            n,
            s,
            t.fromState.options,
            t.toState.options,
            e,
            r
          );
        }
        destroyInnerAnimations(t) {
          let e = this.driver.query(t, We, !0);
          e.forEach((t) => this.destroyActiveAnimationsForElement(t)),
            0 != this.playersByQueriedElement.size &&
              ((e = this.driver.query(t, Qe, !0)),
              e.forEach((t) => this.finishActiveQueriedAnimationOnElement(t)));
        }
        destroyActiveAnimationsForElement(t) {
          const e = this.playersByElement.get(t);
          e &&
            e.forEach((t) => {
              t.queued ? (t.markedForDestroy = !0) : t.destroy();
            });
        }
        finishActiveQueriedAnimationOnElement(t) {
          const e = this.playersByQueriedElement.get(t);
          e && e.forEach((t) => t.finish());
        }
        whenRenderingDone() {
          return new Promise((t) => {
            if (this.players.length) return Ee(this.players).onDone(() => t());
            t();
          });
        }
        processLeaveNode(t) {
          const e = t.__ng_removed;
          if (e && e.setForRemoval) {
            if (((t.__ng_removed = es), e.namespaceId)) {
              this.destroyInnerAnimations(t);
              const n = this._fetchNamespace(e.namespaceId);
              n && n.clearElementCache(t);
            }
            this._onRemovalComplete(t, e.setForRemoval);
          }
          this.driver.matchesElement(t, Jn) &&
            this.markElementAsDisabled(t, !1),
            this.driver.query(t, Jn, !0).forEach((t) => {
              this.markElementAsDisabled(t, !1);
            });
        }
        flush(t = -1) {
          let e = [];
          if (
            (this.newHostElements.size &&
              (this.newHostElements.forEach((t, e) =>
                this._balanceNamespaceList(t, e)
              ),
              this.newHostElements.clear()),
            this.totalAnimations && this.collectedEnterElements.length)
          )
            for (let n = 0; n < this.collectedEnterElements.length; n++)
              ps(this.collectedEnterElements[n], "ng-star-inserted");
          if (
            this._namespaceList.length &&
            (this.totalQueuedPlayers || this.collectedLeaveElements.length)
          ) {
            const n = [];
            try {
              e = this._flushAnimations(n, t);
            } finally {
              for (let t = 0; t < n.length; t++) n[t]();
            }
          } else
            for (let n = 0; n < this.collectedLeaveElements.length; n++)
              this.processLeaveNode(this.collectedLeaveElements[n]);
          if (
            ((this.totalQueuedPlayers = 0),
            (this.collectedEnterElements.length = 0),
            (this.collectedLeaveElements.length = 0),
            this._flushFns.forEach((t) => t()),
            (this._flushFns = []),
            this._whenQuietFns.length)
          ) {
            const t = this._whenQuietFns;
            (this._whenQuietFns = []),
              e.length
                ? Ee(e).onDone(() => {
                    t.forEach((t) => t());
                  })
                : t.forEach((t) => t());
          }
        }
        reportError(t) {
          throw new Error(
            "Unable to process animations due to the following failed trigger transitions\n " +
              t.join("\n")
          );
        }
        _flushAnimations(t, e) {
          const n = new An(),
            s = [],
            r = new Map(),
            i = [],
            o = new Map(),
            a = new Map(),
            l = new Map(),
            c = new Set();
          this.disabledNodes.forEach((t) => {
            c.add(t);
            const e = this.driver.query(t, ".ng-animate-queued", !0);
            for (let n = 0; n < e.length; n++) c.add(e[n]);
          });
          const u = this.bodyNode,
            h = Array.from(this.statesByElement.keys()),
            d = ds(h, this.collectedEnterElements),
            p = new Map();
          let f = 0;
          d.forEach((t, e) => {
            const n = qe + f++;
            p.set(e, n), t.forEach((t) => ps(t, n));
          });
          const m = [],
            g = new Set(),
            _ = new Set();
          for (let A = 0; A < this.collectedLeaveElements.length; A++) {
            const t = this.collectedLeaveElements[A],
              e = t.__ng_removed;
            e &&
              e.setForRemoval &&
              (m.push(t),
              g.add(t),
              e.hasAnimation
                ? this.driver
                    .query(t, ".ng-star-inserted", !0)
                    .forEach((t) => g.add(t))
                : _.add(t));
          }
          const b = new Map(),
            y = ds(h, Array.from(g));
          y.forEach((t, e) => {
            const n = $e + f++;
            b.set(e, n), t.forEach((t) => ps(t, n));
          }),
            t.push(() => {
              d.forEach((t, e) => {
                const n = p.get(e);
                t.forEach((t) => fs(t, n));
              }),
                y.forEach((t, e) => {
                  const n = b.get(e);
                  t.forEach((t) => fs(t, n));
                }),
                m.forEach((t) => {
                  this.processLeaveNode(t);
                });
            });
          const v = [],
            w = [];
          for (let A = this._namespaceList.length - 1; A >= 0; A--)
            this._namespaceList[A].drainQueuedTransitions(e).forEach((t) => {
              const e = t.player,
                r = t.element;
              if ((v.push(e), this.collectedEnterElements.length)) {
                const t = r.__ng_removed;
                if (t && t.setForMove) return void e.destroy();
              }
              const c = !u || !this.driver.containsElement(u, r),
                h = b.get(r),
                d = p.get(r),
                f = this._buildInstruction(t, n, d, h, c);
              if (f.errors && f.errors.length) w.push(f);
              else {
                if (c)
                  return (
                    e.onStart(() => rn(r, f.fromStyles)),
                    e.onDestroy(() => sn(r, f.toStyles)),
                    void s.push(e)
                  );
                if (t.isFallbackTransition)
                  return (
                    e.onStart(() => rn(r, f.fromStyles)),
                    e.onDestroy(() => sn(r, f.toStyles)),
                    void s.push(e)
                  );
                f.timelines.forEach((t) => (t.stretchStartingKeyframe = !0)),
                  n.append(r, f.timelines),
                  i.push({ instruction: f, player: e, element: r }),
                  f.queriedElements.forEach((t) => Re(o, t, []).push(e)),
                  f.preStyleProps.forEach((t, e) => {
                    const n = Object.keys(t);
                    if (n.length) {
                      let t = a.get(e);
                      t || a.set(e, (t = new Set())),
                        n.forEach((e) => t.add(e));
                    }
                  }),
                  f.postStyleProps.forEach((t, e) => {
                    const n = Object.keys(t);
                    let s = l.get(e);
                    s || l.set(e, (s = new Set())), n.forEach((t) => s.add(t));
                  });
              }
            });
          if (w.length) {
            const t = [];
            w.forEach((e) => {
              t.push(`@${e.triggerName} has failed due to:\n`),
                e.errors.forEach((e) => t.push(`- ${e}\n`));
            }),
              v.forEach((t) => t.destroy()),
              this.reportError(t);
          }
          const C = new Map(),
            S = new Map();
          i.forEach((t) => {
            const e = t.element;
            n.has(e) &&
              (S.set(e, e),
              this._beforeAnimationBuild(
                t.player.namespaceId,
                t.instruction,
                C
              ));
          }),
            s.forEach((t) => {
              const e = t.element;
              this._getPreviousPlayers(
                e,
                !1,
                t.namespaceId,
                t.triggerName,
                null
              ).forEach((t) => {
                Re(C, e, []).push(t), t.destroy();
              });
            });
          const E = m.filter((t) => gs(t, a, l)),
            O = new Map();
          hs(O, this.driver, _, l, he).forEach((t) => {
            gs(t, a, l) && E.push(t);
          });
          const x = new Map();
          d.forEach((t, e) => {
            hs(x, this.driver, new Set(t), a, "!");
          }),
            E.forEach((t) => {
              const e = O.get(t),
                n = x.get(t);
              O.set(t, Object.assign(Object.assign({}, e), n));
            });
          const k = [],
            T = [],
            R = {};
          i.forEach((t) => {
            const { element: e, player: i, instruction: o } = t;
            if (n.has(e)) {
              if (c.has(e))
                return (
                  i.onDestroy(() => sn(e, o.toStyles)),
                  (i.disabled = !0),
                  i.overrideTotalTime(o.totalTime),
                  void s.push(i)
                );
              let t = R;
              if (S.size > 1) {
                let n = e;
                const s = [];
                for (; (n = n.parentNode); ) {
                  const e = S.get(n);
                  if (e) {
                    t = e;
                    break;
                  }
                  s.push(n);
                }
                s.forEach((e) => S.set(e, t));
              }
              const n = this._buildAnimation(i.namespaceId, o, C, r, x, O);
              if ((i.setRealPlayer(n), t === R)) k.push(i);
              else {
                const e = this.playersByElement.get(t);
                e && e.length && (i.parentPlayer = Ee(e)), s.push(i);
              }
            } else
              rn(e, o.fromStyles),
                i.onDestroy(() => sn(e, o.toStyles)),
                T.push(i),
                c.has(e) && s.push(i);
          }),
            T.forEach((t) => {
              const e = r.get(t.element);
              if (e && e.length) {
                const n = Ee(e);
                t.setRealPlayer(n);
              }
            }),
            s.forEach((t) => {
              t.parentPlayer ? t.syncPlayerEvents(t.parentPlayer) : t.destroy();
            });
          for (let A = 0; A < m.length; A++) {
            const t = m[A],
              e = t.__ng_removed;
            if ((fs(t, $e), e && e.hasAnimation)) continue;
            let n = [];
            if (o.size) {
              let e = o.get(t);
              e && e.length && n.push(...e);
              let s = this.driver.query(t, Qe, !0);
              for (let t = 0; t < s.length; t++) {
                let e = o.get(s[t]);
                e && e.length && n.push(...e);
              }
            }
            const s = n.filter((t) => !t.destroyed);
            s.length ? ms(this, t, s) : this.processLeaveNode(t);
          }
          return (
            (m.length = 0),
            k.forEach((t) => {
              this.players.push(t),
                t.onDone(() => {
                  t.destroy();
                  const e = this.players.indexOf(t);
                  this.players.splice(e, 1);
                }),
                t.play();
            }),
            k
          );
        }
        elementContainsData(t, e) {
          let n = !1;
          const s = e.__ng_removed;
          return (
            s && s.setForRemoval && (n = !0),
            this.playersByElement.has(e) && (n = !0),
            this.playersByQueriedElement.has(e) && (n = !0),
            this.statesByElement.has(e) && (n = !0),
            this._fetchNamespace(t).elementContainsData(e) || n
          );
        }
        afterFlush(t) {
          this._flushFns.push(t);
        }
        afterFlushAnimationsDone(t) {
          this._whenQuietFns.push(t);
        }
        _getPreviousPlayers(t, e, n, s, r) {
          let i = [];
          if (e) {
            const e = this.playersByQueriedElement.get(t);
            e && (i = e);
          } else {
            const e = this.playersByElement.get(t);
            if (e) {
              const t = !r || r == rs;
              e.forEach((e) => {
                e.queued || ((t || e.triggerName == s) && i.push(e));
              });
            }
          }
          return (
            (n || s) &&
              (i = i.filter(
                (t) => !((n && n != t.namespaceId) || (s && s != t.triggerName))
              )),
            i
          );
        }
        _beforeAnimationBuild(t, e, n) {
          const s = e.element,
            r = e.isRemovalTransition ? void 0 : t,
            i = e.isRemovalTransition ? void 0 : e.triggerName;
          for (const o of e.timelines) {
            const t = o.element,
              a = t !== s,
              l = Re(n, t, []);
            this._getPreviousPlayers(t, a, r, i, e.toState).forEach((t) => {
              const e = t.getRealPlayer();
              e.beforeDestroy && e.beforeDestroy(), t.destroy(), l.push(t);
            });
          }
          rn(s, e.fromStyles);
        }
        _buildAnimation(t, e, n, s, r, i) {
          const o = e.triggerName,
            a = e.element,
            l = [],
            c = new Set(),
            u = new Set(),
            h = e.timelines.map((e) => {
              const h = e.element;
              c.add(h);
              const d = h.__ng_removed;
              if (d && d.removedBeforeQueried)
                return new we(e.duration, e.delay);
              const p = h !== a,
                f = (function (t) {
                  const e = [];
                  return (
                    (function t(e, n) {
                      for (let s = 0; s < e.length; s++) {
                        const r = e[s];
                        r instanceof Ce ? t(r.players, n) : n.push(r);
                      }
                    })(t, e),
                    e
                  );
                })((n.get(h) || ts).map((t) => t.getRealPlayer())).filter(
                  (t) => !!t.element && t.element === h
                ),
                m = r.get(h),
                g = i.get(h),
                _ = Oe(0, this._normalizer, 0, e.keyframes, m, g),
                b = this._buildPlayer(e, _, f);
              if ((e.subTimeline && s && u.add(h), p)) {
                const e = new ls(t, o, h);
                e.setRealPlayer(b), l.push(e);
              }
              return b;
            });
          l.forEach((t) => {
            Re(this.playersByQueriedElement, t.element, []).push(t),
              t.onDone(() =>
                (function (t, e, n) {
                  let s;
                  if (t instanceof Map) {
                    if (((s = t.get(e)), s)) {
                      if (s.length) {
                        const t = s.indexOf(n);
                        s.splice(t, 1);
                      }
                      0 == s.length && t.delete(e);
                    }
                  } else if (((s = t[e]), s)) {
                    if (s.length) {
                      const t = s.indexOf(n);
                      s.splice(t, 1);
                    }
                    0 == s.length && delete t[e];
                  }
                  return s;
                })(this.playersByQueriedElement, t.element, t)
              );
          }),
            c.forEach((t) => ps(t, Ge));
          const d = Ee(h);
          return (
            d.onDestroy(() => {
              c.forEach((t) => fs(t, Ge)), sn(a, e.toStyles);
            }),
            u.forEach((t) => {
              Re(s, t, []).push(d);
            }),
            d
          );
        }
        _buildPlayer(t, e, n) {
          return e.length > 0
            ? this.driver.animate(
                t.element,
                e,
                t.duration,
                t.delay,
                t.easing,
                n
              )
            : new we(t.duration, t.delay);
        }
      }
      class ls {
        constructor(t, e, n) {
          (this.namespaceId = t),
            (this.triggerName = e),
            (this.element = n),
            (this._player = new we()),
            (this._containsRealPlayer = !1),
            (this._queuedCallbacks = {}),
            (this.destroyed = !1),
            (this.markedForDestroy = !1),
            (this.disabled = !1),
            (this.queued = !0),
            (this.totalTime = 0);
        }
        setRealPlayer(t) {
          this._containsRealPlayer ||
            ((this._player = t),
            Object.keys(this._queuedCallbacks).forEach((e) => {
              this._queuedCallbacks[e].forEach((n) => xe(t, e, void 0, n));
            }),
            (this._queuedCallbacks = {}),
            (this._containsRealPlayer = !0),
            this.overrideTotalTime(t.totalTime),
            (this.queued = !1));
        }
        getRealPlayer() {
          return this._player;
        }
        overrideTotalTime(t) {
          this.totalTime = t;
        }
        syncPlayerEvents(t) {
          const e = this._player;
          e.triggerCallback && t.onStart(() => e.triggerCallback("start")),
            t.onDone(() => this.finish()),
            t.onDestroy(() => this.destroy());
        }
        _queueEvent(t, e) {
          Re(this._queuedCallbacks, t, []).push(e);
        }
        onDone(t) {
          this.queued && this._queueEvent("done", t), this._player.onDone(t);
        }
        onStart(t) {
          this.queued && this._queueEvent("start", t), this._player.onStart(t);
        }
        onDestroy(t) {
          this.queued && this._queueEvent("destroy", t),
            this._player.onDestroy(t);
        }
        init() {
          this._player.init();
        }
        hasStarted() {
          return !this.queued && this._player.hasStarted();
        }
        play() {
          !this.queued && this._player.play();
        }
        pause() {
          !this.queued && this._player.pause();
        }
        restart() {
          !this.queued && this._player.restart();
        }
        finish() {
          this._player.finish();
        }
        destroy() {
          (this.destroyed = !0), this._player.destroy();
        }
        reset() {
          !this.queued && this._player.reset();
        }
        setPosition(t) {
          this.queued || this._player.setPosition(t);
        }
        getPosition() {
          return this.queued ? 0 : this._player.getPosition();
        }
        triggerCallback(t) {
          const e = this._player;
          e.triggerCallback && e.triggerCallback(t);
        }
      }
      function cs(t) {
        return t && 1 === t.nodeType;
      }
      function us(t, e) {
        const n = t.style.display;
        return (t.style.display = null != e ? e : "none"), n;
      }
      function hs(t, e, n, s, r) {
        const i = [];
        n.forEach((t) => i.push(us(t)));
        const o = [];
        s.forEach((n, s) => {
          const i = {};
          n.forEach((t) => {
            const n = (i[t] = e.computeStyle(s, t, r));
            (n && 0 != n.length) || ((s.__ng_removed = ns), o.push(s));
          }),
            t.set(s, i);
        });
        let a = 0;
        return n.forEach((t) => us(t, i[a++])), o;
      }
      function ds(t, e) {
        const n = new Map();
        if ((t.forEach((t) => n.set(t, [])), 0 == e.length)) return n;
        const s = new Set(e),
          r = new Map();
        return (
          e.forEach((t) => {
            const e = (function t(e) {
              if (!e) return 1;
              let i = r.get(e);
              if (i) return i;
              const o = e.parentNode;
              return (i = n.has(o) ? o : s.has(o) ? 1 : t(o)), r.set(e, i), i;
            })(t);
            1 !== e && n.get(e).push(t);
          }),
          n
        );
      }
      function ps(t, e) {
        if (t.classList) t.classList.add(e);
        else {
          let n = t.$$classes;
          n || (n = t.$$classes = {}), (n[e] = !0);
        }
      }
      function fs(t, e) {
        if (t.classList) t.classList.remove(e);
        else {
          let n = t.$$classes;
          n && delete n[e];
        }
      }
      function ms(t, e, n) {
        Ee(n).onDone(() => t.processLeaveNode(e));
      }
      function gs(t, e, n) {
        const s = n.get(t);
        if (!s) return !1;
        let r = e.get(t);
        return r ? s.forEach((t) => r.add(t)) : e.set(t, s), n.delete(t), !0;
      }
      class _s {
        constructor(t, e, n) {
          (this.bodyNode = t),
            (this._driver = e),
            (this._triggerCache = {}),
            (this.onRemovalComplete = (t, e) => {}),
            (this._transitionEngine = new as(t, e, n)),
            (this._timelineEngine = new Zn(t, e, n)),
            (this._transitionEngine.onRemovalComplete = (t, e) =>
              this.onRemovalComplete(t, e));
        }
        registerTrigger(t, e, n, s, r) {
          const i = t + "-" + s;
          let o = this._triggerCache[i];
          if (!o) {
            const t = [],
              e = Sn(this._driver, r, t);
            if (t.length)
              throw new Error(
                `The animation trigger "${s}" has failed to build due to the following errors:\n - ${t.join(
                  "\n - "
                )}`
              );
            (o = (function (t, e) {
              return new Wn(t, e);
            })(s, e)),
              (this._triggerCache[i] = o);
          }
          this._transitionEngine.registerTrigger(e, s, o);
        }
        register(t, e) {
          this._transitionEngine.register(t, e);
        }
        destroy(t, e) {
          this._transitionEngine.destroy(t, e);
        }
        onInsert(t, e, n, s) {
          this._transitionEngine.insertNode(t, e, n, s);
        }
        onRemove(t, e, n, s) {
          this._transitionEngine.removeNode(t, e, s || !1, n);
        }
        disableAnimations(t, e) {
          this._transitionEngine.markElementAsDisabled(t, e);
        }
        process(t, e, n, s) {
          if ("@" == n.charAt(0)) {
            const [t, r] = Ae(n);
            this._timelineEngine.command(t, e, r, s);
          } else this._transitionEngine.trigger(t, e, n, s);
        }
        listen(t, e, n, s, r) {
          if ("@" == n.charAt(0)) {
            const [t, s] = Ae(n);
            return this._timelineEngine.listen(t, e, s, r);
          }
          return this._transitionEngine.listen(t, e, n, s, r);
        }
        flush(t = -1) {
          this._transitionEngine.flush(t);
        }
        get players() {
          return this._transitionEngine.players.concat(
            this._timelineEngine.players
          );
        }
        whenRenderingDone() {
          return this._transitionEngine.whenRenderingDone();
        }
      }
      function bs(t, e) {
        let n = null,
          s = null;
        return (
          Array.isArray(e) && e.length
            ? ((n = vs(e[0])), e.length > 1 && (s = vs(e[e.length - 1])))
            : e && (n = vs(e)),
          n || s ? new ys(t, n, s) : null
        );
      }
      let ys = (() => {
        class t {
          constructor(e, n, s) {
            (this._element = e),
              (this._startStyles = n),
              (this._endStyles = s),
              (this._state = 0);
            let r = t.initialStylesByElement.get(e);
            r || t.initialStylesByElement.set(e, (r = {})),
              (this._initialStyles = r);
          }
          start() {
            this._state < 1 &&
              (this._startStyles &&
                sn(this._element, this._startStyles, this._initialStyles),
              (this._state = 1));
          }
          finish() {
            this.start(),
              this._state < 2 &&
                (sn(this._element, this._initialStyles),
                this._endStyles &&
                  (sn(this._element, this._endStyles),
                  (this._endStyles = null)),
                (this._state = 1));
          }
          destroy() {
            this.finish(),
              this._state < 3 &&
                (t.initialStylesByElement.delete(this._element),
                this._startStyles &&
                  (rn(this._element, this._startStyles),
                  (this._endStyles = null)),
                this._endStyles &&
                  (rn(this._element, this._endStyles),
                  (this._endStyles = null)),
                sn(this._element, this._initialStyles),
                (this._state = 3));
          }
        }
        return (t.initialStylesByElement = new WeakMap()), t;
      })();
      function vs(t) {
        let e = null;
        const n = Object.keys(t);
        for (let s = 0; s < n.length; s++) {
          const r = n[s];
          ws(r) && ((e = e || {}), (e[r] = t[r]));
        }
        return e;
      }
      function ws(t) {
        return "display" === t || "position" === t;
      }
      const Cs = "animation",
        Ss = "animationend";
      class Es {
        constructor(t, e, n, s, r, i, o) {
          (this._element = t),
            (this._name = e),
            (this._duration = n),
            (this._delay = s),
            (this._easing = r),
            (this._fillMode = i),
            (this._onDoneFn = o),
            (this._finished = !1),
            (this._destroyed = !1),
            (this._startTime = 0),
            (this._position = 0),
            (this._eventFn = (t) => this._handleCallback(t));
        }
        apply() {
          !(function (t, e) {
            const n = As(t, "").trim();
            n.length &&
              ((function (t, e) {
                let n = 0;
                for (let s = 0; s < t.length; s++) "," === t.charAt(s) && n++;
              })(n),
              (e = `${n}, ${e}`)),
              Rs(t, "", e);
          })(
            this._element,
            `${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`
          ),
            Ts(this._element, this._eventFn, !1),
            (this._startTime = Date.now());
        }
        pause() {
          Os(this._element, this._name, "paused");
        }
        resume() {
          Os(this._element, this._name, "running");
        }
        setPosition(t) {
          const e = xs(this._element, this._name);
          (this._position = t * this._duration),
            Rs(this._element, "Delay", `-${this._position}ms`, e);
        }
        getPosition() {
          return this._position;
        }
        _handleCallback(t) {
          const e = t._ngTestManualTimestamp || Date.now(),
            n = 1e3 * parseFloat(t.elapsedTime.toFixed(3));
          t.animationName == this._name &&
            Math.max(e - this._startTime, 0) >= this._delay &&
            n >= this._duration &&
            this.finish();
        }
        finish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFn(),
            Ts(this._element, this._eventFn, !0));
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.finish(),
            (function (t, e) {
              const n = As(t, "").split(","),
                s = ks(n, e);
              s >= 0 && (n.splice(s, 1), Rs(t, "", n.join(",")));
            })(this._element, this._name));
        }
      }
      function Os(t, e, n) {
        Rs(t, "PlayState", n, xs(t, e));
      }
      function xs(t, e) {
        const n = As(t, "");
        return n.indexOf(",") > 0 ? ks(n.split(","), e) : ks([n], e);
      }
      function ks(t, e) {
        for (let n = 0; n < t.length; n++) if (t[n].indexOf(e) >= 0) return n;
        return -1;
      }
      function Ts(t, e, n) {
        n ? t.removeEventListener(Ss, e) : t.addEventListener(Ss, e);
      }
      function Rs(t, e, n, s) {
        const r = Cs + e;
        if (null != s) {
          const e = t.style[r];
          if (e.length) {
            const t = e.split(",");
            (t[s] = n), (n = t.join(","));
          }
        }
        t.style[r] = n;
      }
      function As(t, e) {
        return t.style[Cs + e];
      }
      class Is {
        constructor(t, e, n, s, r, i, o, a) {
          (this.element = t),
            (this.keyframes = e),
            (this.animationName = n),
            (this._duration = s),
            (this._delay = r),
            (this._finalStyles = o),
            (this._specialStyles = a),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._started = !1),
            (this.currentSnapshot = {}),
            (this._state = 0),
            (this.easing = i || "linear"),
            (this.totalTime = s + r),
            this._buildStyler();
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        destroy() {
          this.init(),
            this._state >= 4 ||
              ((this._state = 4),
              this._styler.destroy(),
              this._flushStartFns(),
              this._flushDoneFns(),
              this._specialStyles && this._specialStyles.destroy(),
              this._onDestroyFns.forEach((t) => t()),
              (this._onDestroyFns = []));
        }
        _flushDoneFns() {
          this._onDoneFns.forEach((t) => t()), (this._onDoneFns = []);
        }
        _flushStartFns() {
          this._onStartFns.forEach((t) => t()), (this._onStartFns = []);
        }
        finish() {
          this.init(),
            this._state >= 3 ||
              ((this._state = 3),
              this._styler.finish(),
              this._flushStartFns(),
              this._specialStyles && this._specialStyles.finish(),
              this._flushDoneFns());
        }
        setPosition(t) {
          this._styler.setPosition(t);
        }
        getPosition() {
          return this._styler.getPosition();
        }
        hasStarted() {
          return this._state >= 2;
        }
        init() {
          this._state >= 1 ||
            ((this._state = 1),
            this._styler.apply(),
            this._delay && this._styler.pause());
        }
        play() {
          this.init(),
            this.hasStarted() ||
              (this._flushStartFns(),
              (this._state = 2),
              this._specialStyles && this._specialStyles.start()),
            this._styler.resume();
        }
        pause() {
          this.init(), this._styler.pause();
        }
        restart() {
          this.reset(), this.play();
        }
        reset() {
          this._styler.destroy(), this._buildStyler(), this._styler.apply();
        }
        _buildStyler() {
          this._styler = new Es(
            this.element,
            this.animationName,
            this._duration,
            this._delay,
            this.easing,
            "forwards",
            () => this.finish()
          );
        }
        triggerCallback(t) {
          const e = "start" == t ? this._onStartFns : this._onDoneFns;
          e.forEach((t) => t()), (e.length = 0);
        }
        beforeDestroy() {
          this.init();
          const t = {};
          if (this.hasStarted()) {
            const e = this._state >= 3;
            Object.keys(this._finalStyles).forEach((n) => {
              "offset" != n &&
                (t[n] = e ? this._finalStyles[n] : gn(this.element, n));
            });
          }
          this.currentSnapshot = t;
        }
      }
      class js extends we {
        constructor(t, e) {
          super(),
            (this.element = t),
            (this._startingStyles = {}),
            (this.__initialized = !1),
            (this._styles = Ue(e));
        }
        init() {
          !this.__initialized &&
            this._startingStyles &&
            ((this.__initialized = !0),
            Object.keys(this._styles).forEach((t) => {
              this._startingStyles[t] = this.element.style[t];
            }),
            super.init());
        }
        play() {
          this._startingStyles &&
            (this.init(),
            Object.keys(this._styles).forEach((t) =>
              this.element.style.setProperty(t, this._styles[t])
            ),
            super.play());
        }
        destroy() {
          this._startingStyles &&
            (Object.keys(this._startingStyles).forEach((t) => {
              const e = this._startingStyles[t];
              e
                ? this.element.style.setProperty(t, e)
                : this.element.style.removeProperty(t);
            }),
            (this._startingStyles = null),
            super.destroy());
        }
      }
      class Ps {
        constructor() {
          (this._count = 0),
            (this._head = document.querySelector("head")),
            (this._warningIssued = !1);
        }
        validateStyleProperty(t) {
          return Me(t);
        }
        matchesElement(t, e) {
          return Fe(t, e);
        }
        containsElement(t, e) {
          return Ve(t, e);
        }
        query(t, e, n) {
          return He(t, e, n);
        }
        computeStyle(t, e, n) {
          return window.getComputedStyle(t)[e];
        }
        buildKeyframeElement(t, e, n) {
          n = n.map((t) => Ue(t));
          let s = `@keyframes ${e} {\n`,
            r = "";
          n.forEach((t) => {
            r = " ";
            const e = parseFloat(t.offset);
            (s += `${r}${100 * e}% {\n`),
              (r += " "),
              Object.keys(t).forEach((e) => {
                const n = t[e];
                switch (e) {
                  case "offset":
                    return;
                  case "easing":
                    return void (
                      n && (s += `${r}animation-timing-function: ${n};\n`)
                    );
                  default:
                    return void (s += `${r}${e}: ${n};\n`);
                }
              }),
              (s += r + "}\n");
          }),
            (s += "}\n");
          const i = document.createElement("style");
          return (i.textContent = s), i;
        }
        animate(t, e, n, s, r, i = [], o) {
          o && this._notifyFaultyScrubber();
          const a = i.filter((t) => t instanceof Is),
            l = {};
          pn(n, s) &&
            a.forEach((t) => {
              let e = t.currentSnapshot;
              Object.keys(e).forEach((t) => (l[t] = e[t]));
            });
          const c = (function (t) {
            let e = {};
            return (
              t &&
                (Array.isArray(t) ? t : [t]).forEach((t) => {
                  Object.keys(t).forEach((n) => {
                    "offset" != n && "easing" != n && (e[n] = t[n]);
                  });
                }),
              e
            );
          })((e = fn(t, e, l)));
          if (0 == n) return new js(t, c);
          const u = "gen_css_kf_" + this._count++,
            h = this.buildKeyframeElement(t, u, e);
          document.querySelector("head").appendChild(h);
          const d = bs(t, e),
            p = new Is(t, e, u, n, s, r, c, d);
          return (
            p.onDestroy(() => {
              var t;
              (t = h).parentNode.removeChild(t);
            }),
            p
          );
        }
        _notifyFaultyScrubber() {
          this._warningIssued ||
            (console.warn(
              "@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n",
              "  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill."
            ),
            (this._warningIssued = !0));
        }
      }
      class Ds {
        constructor(t, e, n, s) {
          (this.element = t),
            (this.keyframes = e),
            (this.options = n),
            (this._specialStyles = s),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._initialized = !1),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this.time = 0),
            (this.parentPlayer = null),
            (this.currentSnapshot = {}),
            (this._duration = n.duration),
            (this._delay = n.delay || 0),
            (this.time = this._duration + this._delay);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((t) => t()),
            (this._onDoneFns = []));
        }
        init() {
          this._buildPlayer(), this._preparePlayerBeforeStart();
        }
        _buildPlayer() {
          if (this._initialized) return;
          this._initialized = !0;
          const t = this.keyframes;
          (this.domPlayer = this._triggerWebAnimation(
            this.element,
            t,
            this.options
          )),
            (this._finalKeyframe = t.length ? t[t.length - 1] : {}),
            this.domPlayer.addEventListener("finish", () => this._onFinish());
        }
        _preparePlayerBeforeStart() {
          this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
        }
        _triggerWebAnimation(t, e, n) {
          return t.animate(e, n);
        }
        onStart(t) {
          this._onStartFns.push(t);
        }
        onDone(t) {
          this._onDoneFns.push(t);
        }
        onDestroy(t) {
          this._onDestroyFns.push(t);
        }
        play() {
          this._buildPlayer(),
            this.hasStarted() ||
              (this._onStartFns.forEach((t) => t()),
              (this._onStartFns = []),
              (this._started = !0),
              this._specialStyles && this._specialStyles.start()),
            this.domPlayer.play();
        }
        pause() {
          this.init(), this.domPlayer.pause();
        }
        finish() {
          this.init(),
            this._specialStyles && this._specialStyles.finish(),
            this._onFinish(),
            this.domPlayer.finish();
        }
        reset() {
          this._resetDomPlayerState(),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        _resetDomPlayerState() {
          this.domPlayer && this.domPlayer.cancel();
        }
        restart() {
          this.reset(), this.play();
        }
        hasStarted() {
          return this._started;
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._resetDomPlayerState(),
            this._onFinish(),
            this._specialStyles && this._specialStyles.destroy(),
            this._onDestroyFns.forEach((t) => t()),
            (this._onDestroyFns = []));
        }
        setPosition(t) {
          this.domPlayer.currentTime = t * this.time;
        }
        getPosition() {
          return this.domPlayer.currentTime / this.time;
        }
        get totalTime() {
          return this._delay + this._duration;
        }
        beforeDestroy() {
          const t = {};
          this.hasStarted() &&
            Object.keys(this._finalKeyframe).forEach((e) => {
              "offset" != e &&
                (t[e] = this._finished
                  ? this._finalKeyframe[e]
                  : gn(this.element, e));
            }),
            (this.currentSnapshot = t);
        }
        triggerCallback(t) {
          const e = "start" == t ? this._onStartFns : this._onDoneFns;
          e.forEach((t) => t()), (e.length = 0);
        }
      }
      class Ns {
        constructor() {
          (this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(
            Ls().toString()
          )),
            (this._cssKeyframesDriver = new Ps());
        }
        validateStyleProperty(t) {
          return Me(t);
        }
        matchesElement(t, e) {
          return Fe(t, e);
        }
        containsElement(t, e) {
          return Ve(t, e);
        }
        query(t, e, n) {
          return He(t, e, n);
        }
        computeStyle(t, e, n) {
          return window.getComputedStyle(t)[e];
        }
        overrideWebAnimationsSupport(t) {
          this._isNativeImpl = t;
        }
        animate(t, e, n, s, r, i = [], o) {
          if (!o && !this._isNativeImpl)
            return this._cssKeyframesDriver.animate(t, e, n, s, r, i);
          const a = {
            duration: n,
            delay: s,
            fill: 0 == s ? "both" : "forwards",
          };
          r && (a.easing = r);
          const l = {},
            c = i.filter((t) => t instanceof Ds);
          pn(n, s) &&
            c.forEach((t) => {
              let e = t.currentSnapshot;
              Object.keys(e).forEach((t) => (l[t] = e[t]));
            });
          const u = bs(t, (e = fn(t, (e = e.map((t) => tn(t, !1))), l)));
          return new Ds(t, e, a, u);
        }
      }
      function Ls() {
        return (
          ("undefined" != typeof window &&
            void 0 !== window.document &&
            Element.prototype.animate) ||
          {}
        );
      }
      let Ms = (() => {
        class t extends ue {
          constructor(t, e) {
            super(),
              (this._nextAnimationId = 0),
              (this._renderer = t.createRenderer(e.body, {
                id: "0",
                encapsulation: s.Q.None,
                styles: [],
                data: { animation: [] },
              }));
          }
          build(t) {
            const e = this._nextAnimationId.toString();
            this._nextAnimationId++;
            const n = Array.isArray(t) ? me(t) : t;
            return (
              Hs(this._renderer, null, e, "register", [n]),
              new Fs(e, this._renderer)
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Rb(s.F), s.Rb(i.c));
          }),
          (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class Fs extends class {} {
        constructor(t, e) {
          super(), (this._id = t), (this._renderer = e);
        }
        create(t, e) {
          return new Vs(this._id, t, e || {}, this._renderer);
        }
      }
      class Vs {
        constructor(t, e, n, s) {
          (this.id = t),
            (this.element = e),
            (this._renderer = s),
            (this.parentPlayer = null),
            (this._started = !1),
            (this.totalTime = 0),
            this._command("create", n);
        }
        _listen(t, e) {
          return this._renderer.listen(this.element, `@@${this.id}:${t}`, e);
        }
        _command(t, ...e) {
          return Hs(this._renderer, this.element, this.id, t, e);
        }
        onDone(t) {
          this._listen("done", t);
        }
        onStart(t) {
          this._listen("start", t);
        }
        onDestroy(t) {
          this._listen("destroy", t);
        }
        init() {
          this._command("init");
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this._command("play"), (this._started = !0);
        }
        pause() {
          this._command("pause");
        }
        restart() {
          this._command("restart");
        }
        finish() {
          this._command("finish");
        }
        destroy() {
          this._command("destroy");
        }
        reset() {
          this._command("reset");
        }
        setPosition(t) {
          this._command("setPosition", t);
        }
        getPosition() {
          return 0;
        }
      }
      function Hs(t, e, n, s, r) {
        return t.setProperty(e, `@@${n}:${s}`, r);
      }
      const Us = "@",
        zs = "@.disabled";
      let Bs = (() => {
        class t {
          constructor(t, e, n) {
            (this.delegate = t),
              (this.engine = e),
              (this._zone = n),
              (this._currentId = 0),
              (this._microtaskId = 1),
              (this._animationCallbacksBuffer = []),
              (this._rendererCache = new Map()),
              (this._cdRecurDepth = 0),
              (this.promise = Promise.resolve(0)),
              (e.onRemovalComplete = (t, e) => {
                e && e.parentNode(t) && e.removeChild(t.parentNode, t);
              });
          }
          createRenderer(t, e) {
            const n = this.delegate.createRenderer(t, e);
            if (!(t && e && e.data && e.data.animation)) {
              let t = this._rendererCache.get(n);
              return (
                t ||
                  ((t = new qs("", n, this.engine)),
                  this._rendererCache.set(n, t)),
                t
              );
            }
            const s = e.id,
              r = e.id + "-" + this._currentId;
            this._currentId++, this.engine.register(r, t);
            const i = (e) => {
              Array.isArray(e)
                ? e.forEach(i)
                : this.engine.registerTrigger(s, r, t, e.name, e);
            };
            return e.data.animation.forEach(i), new $s(this, r, n, this.engine);
          }
          begin() {
            this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
          }
          _scheduleCountTask() {
            this.promise.then(() => {
              this._microtaskId++;
            });
          }
          scheduleListenerCallback(t, e, n) {
            t >= 0 && t < this._microtaskId
              ? this._zone.run(() => e(n))
              : (0 == this._animationCallbacksBuffer.length &&
                  Promise.resolve(null).then(() => {
                    this._zone.run(() => {
                      this._animationCallbacksBuffer.forEach((t) => {
                        const [e, n] = t;
                        e(n);
                      }),
                        (this._animationCallbacksBuffer = []);
                    });
                  }),
                this._animationCallbacksBuffer.push([e, n]));
          }
          end() {
            this._cdRecurDepth--,
              0 == this._cdRecurDepth &&
                this._zone.runOutsideAngular(() => {
                  this._scheduleCountTask(),
                    this.engine.flush(this._microtaskId);
                }),
              this.delegate.end && this.delegate.end();
          }
          whenRenderingDone() {
            return this.engine.whenRenderingDone();
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Rb(s.F), s.Rb(_s), s.Rb(s.z));
          }),
          (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class qs {
        constructor(t, e, n) {
          (this.namespaceId = t),
            (this.delegate = e),
            (this.engine = n),
            (this.destroyNode = this.delegate.destroyNode
              ? (t) => e.destroyNode(t)
              : null);
        }
        get data() {
          return this.delegate.data;
        }
        destroy() {
          this.engine.destroy(this.namespaceId, this.delegate),
            this.delegate.destroy();
        }
        createElement(t, e) {
          return this.delegate.createElement(t, e);
        }
        createComment(t) {
          return this.delegate.createComment(t);
        }
        createText(t) {
          return this.delegate.createText(t);
        }
        appendChild(t, e) {
          this.delegate.appendChild(t, e),
            this.engine.onInsert(this.namespaceId, e, t, !1);
        }
        insertBefore(t, e, n) {
          this.delegate.insertBefore(t, e, n),
            this.engine.onInsert(this.namespaceId, e, t, !0);
        }
        removeChild(t, e, n) {
          this.engine.onRemove(this.namespaceId, e, this.delegate, n);
        }
        selectRootElement(t, e) {
          return this.delegate.selectRootElement(t, e);
        }
        parentNode(t) {
          return this.delegate.parentNode(t);
        }
        nextSibling(t) {
          return this.delegate.nextSibling(t);
        }
        setAttribute(t, e, n, s) {
          this.delegate.setAttribute(t, e, n, s);
        }
        removeAttribute(t, e, n) {
          this.delegate.removeAttribute(t, e, n);
        }
        addClass(t, e) {
          this.delegate.addClass(t, e);
        }
        removeClass(t, e) {
          this.delegate.removeClass(t, e);
        }
        setStyle(t, e, n, s) {
          this.delegate.setStyle(t, e, n, s);
        }
        removeStyle(t, e, n) {
          this.delegate.removeStyle(t, e, n);
        }
        setProperty(t, e, n) {
          e.charAt(0) == Us && e == zs
            ? this.disableAnimations(t, !!n)
            : this.delegate.setProperty(t, e, n);
        }
        setValue(t, e) {
          this.delegate.setValue(t, e);
        }
        listen(t, e, n) {
          return this.delegate.listen(t, e, n);
        }
        disableAnimations(t, e) {
          this.engine.disableAnimations(t, e);
        }
      }
      class $s extends qs {
        constructor(t, e, n, s) {
          super(e, n, s), (this.factory = t), (this.namespaceId = e);
        }
        setProperty(t, e, n) {
          e.charAt(0) == Us
            ? "." == e.charAt(1) && e == zs
              ? this.disableAnimations(t, (n = void 0 === n || !!n))
              : this.engine.process(this.namespaceId, t, e.substr(1), n)
            : this.delegate.setProperty(t, e, n);
        }
        listen(t, e, n) {
          if (e.charAt(0) == Us) {
            const s = (function (t) {
              switch (t) {
                case "body":
                  return document.body;
                case "document":
                  return document;
                case "window":
                  return window;
                default:
                  return t;
              }
            })(t);
            let r = e.substr(1),
              i = "";
            return (
              r.charAt(0) != Us &&
                ([r, i] = (function (t) {
                  const e = t.indexOf(".");
                  return [t.substring(0, e), t.substr(e + 1)];
                })(r)),
              this.engine.listen(this.namespaceId, s, r, i, (t) => {
                this.factory.scheduleListenerCallback(t._data || -1, n, t);
              })
            );
          }
          return this.delegate.listen(t, e, n);
        }
      }
      let Ks = (() => {
        class t extends _s {
          constructor(t, e, n) {
            super(t.body, e, n);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Rb(i.c), s.Rb(Be), s.Rb(Hn));
          }),
          (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const Ws = new s.q("AnimationModuleType"),
        Gs = [
          {
            provide: Be,
            useFactory: function () {
              return "function" == typeof Ls() ? new Ns() : new Ps();
            },
          },
          { provide: Ws, useValue: "BrowserAnimations" },
          { provide: ue, useClass: Ms },
          {
            provide: Hn,
            useFactory: function () {
              return new Un();
            },
          },
          { provide: _s, useClass: Ks },
          {
            provide: s.F,
            useFactory: function (t, e, n) {
              return new Bs(t, e, n);
            },
            deps: [C, _s, s.z],
          },
        ];
      let Qs = (() => {
        class t {}
        return (
          (t.ɵmod = s.Ib({ type: t })),
          (t.ɵinj = s.Hb({
            factory: function (e) {
              return new (e || t)();
            },
            providers: Gs,
            imports: [M],
          })),
          t
        );
      })();
      const Zs = new s.O("10.2.7"),
        Ys = new s.q("mat-sanity-checks", {
          providedIn: "root",
          factory: function () {
            return !0;
          },
        });
      let Xs,
        Js = (() => {
          class t {
            constructor(t, e, n) {
              (this._hasDoneGlobalChecks = !1),
                (this._document = n),
                t._applyBodyHighContrastModeCssClasses(),
                (this._sanityChecks = e),
                this._hasDoneGlobalChecks ||
                  (this._checkDoctypeIsDefined(),
                  this._checkThemeIsPresent(),
                  this._checkCdkVersionMatch(),
                  (this._hasDoneGlobalChecks = !0));
            }
            _getDocument() {
              const t = this._document || document;
              return "object" == typeof t && t ? t : null;
            }
            _getWindow() {
              const t = this._getDocument(),
                e = (null == t ? void 0 : t.defaultView) || window;
              return "object" == typeof e && e ? e : null;
            }
            _checksAreEnabled() {
              return Object(s.V)() && !this._isTestEnv();
            }
            _isTestEnv() {
              const t = this._getWindow();
              return t && (t.__karma__ || t.jasmine);
            }
            _checkDoctypeIsDefined() {
              const t =
                  this._checksAreEnabled() &&
                  (!0 === this._sanityChecks || this._sanityChecks.doctype),
                e = this._getDocument();
              t &&
                e &&
                !e.doctype &&
                console.warn(
                  "Current document does not have a doctype. This may cause some Angular Material components not to behave as expected."
                );
            }
            _checkThemeIsPresent() {
              const t =
                  !this._checksAreEnabled() ||
                  !1 === this._sanityChecks ||
                  !this._sanityChecks.theme,
                e = this._getDocument();
              if (t || !e || !e.body || "function" != typeof getComputedStyle)
                return;
              const n = e.createElement("div");
              n.classList.add("mat-theme-loaded-marker"), e.body.appendChild(n);
              const s = getComputedStyle(n);
              s &&
                "none" !== s.display &&
                console.warn(
                  "Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"
                ),
                e.body.removeChild(n);
            }
            _checkCdkVersionMatch() {
              this._checksAreEnabled() &&
                (!0 === this._sanityChecks || this._sanityChecks.version) &&
                Zs.full !== le.full &&
                console.warn(
                  "The Angular Material version (" +
                    Zs.full +
                    ") does not match the Angular CDK version (" +
                    le.full +
                    ").\nPlease ensure the versions of these two packages exactly match."
                );
            }
          }
          return (
            (t.ɵmod = s.Ib({ type: t })),
            (t.ɵinj = s.Hb({
              factory: function (e) {
                return new (e || t)(s.Rb(re), s.Rb(Ys, 8), s.Rb(i.c, 8));
              },
              imports: [[ae], ae],
            })),
            t
          );
        })();
      function tr(t) {
        return class extends t {
          constructor(...t) {
            super(...t), (this._disabled = !1);
          }
          get disabled() {
            return this._disabled;
          }
          set disabled(t) {
            this._disabled = $t(t);
          }
        };
      }
      function er(t, e) {
        return class extends t {
          constructor(...t) {
            super(...t), (this.defaultColor = e), (this.color = e);
          }
          get color() {
            return this._color;
          }
          set color(t) {
            const e = t || this.defaultColor;
            e !== this._color &&
              (this._color &&
                this._elementRef.nativeElement.classList.remove(
                  "mat-" + this._color
                ),
              e && this._elementRef.nativeElement.classList.add("mat-" + e),
              (this._color = e));
          }
        };
      }
      function nr(t) {
        return class extends t {
          constructor(...t) {
            super(...t), (this._disableRipple = !1);
          }
          get disableRipple() {
            return this._disableRipple;
          }
          set disableRipple(t) {
            this._disableRipple = $t(t);
          }
        };
      }
      try {
        Xs = "undefined" != typeof Intl;
      } catch (na) {
        Xs = !1;
      }
      class sr {
        constructor(t, e, n) {
          (this._renderer = t),
            (this.element = e),
            (this.config = n),
            (this.state = 3);
        }
        fadeOut() {
          this._renderer.fadeOutRipple(this);
        }
      }
      const rr = { enterDuration: 450, exitDuration: 400 },
        ir = jt({ passive: !0 }),
        or = ["mousedown", "touchstart"],
        ar = ["mouseup", "mouseleave", "touchend", "touchcancel"];
      class lr {
        constructor(t, e, n, s) {
          (this._target = t),
            (this._ngZone = e),
            (this._isPointerDown = !1),
            (this._activeRipples = new Set()),
            (this._pointerUpEventsRegistered = !1),
            s.isBrowser && (this._containerElement = Gt(n));
        }
        fadeInRipple(t, e, n = {}) {
          const s = (this._containerRect =
              this._containerRect ||
              this._containerElement.getBoundingClientRect()),
            r = Object.assign(Object.assign({}, rr), n.animation);
          n.centered &&
            ((t = s.left + s.width / 2), (e = s.top + s.height / 2));
          const i =
              n.radius ||
              (function (t, e, n) {
                const s = Math.max(Math.abs(t - n.left), Math.abs(t - n.right)),
                  r = Math.max(Math.abs(e - n.top), Math.abs(e - n.bottom));
                return Math.sqrt(s * s + r * r);
              })(t, e, s),
            o = t - s.left,
            a = e - s.top,
            l = r.enterDuration,
            c = document.createElement("div");
          c.classList.add("mat-ripple-element"),
            (c.style.left = o - i + "px"),
            (c.style.top = a - i + "px"),
            (c.style.height = 2 * i + "px"),
            (c.style.width = 2 * i + "px"),
            null != n.color && (c.style.backgroundColor = n.color),
            (c.style.transitionDuration = l + "ms"),
            this._containerElement.appendChild(c),
            window.getComputedStyle(c).getPropertyValue("opacity"),
            (c.style.transform = "scale(1)");
          const u = new sr(this, c, n);
          return (
            (u.state = 0),
            this._activeRipples.add(u),
            n.persistent || (this._mostRecentTransientRipple = u),
            this._runTimeoutOutsideZone(() => {
              const t = u === this._mostRecentTransientRipple;
              (u.state = 1),
                n.persistent || (t && this._isPointerDown) || u.fadeOut();
            }, l),
            u
          );
        }
        fadeOutRipple(t) {
          const e = this._activeRipples.delete(t);
          if (
            (t === this._mostRecentTransientRipple &&
              (this._mostRecentTransientRipple = null),
            this._activeRipples.size || (this._containerRect = null),
            !e)
          )
            return;
          const n = t.element,
            s = Object.assign(Object.assign({}, rr), t.config.animation);
          (n.style.transitionDuration = s.exitDuration + "ms"),
            (n.style.opacity = "0"),
            (t.state = 2),
            this._runTimeoutOutsideZone(() => {
              (t.state = 3), n.parentNode.removeChild(n);
            }, s.exitDuration);
        }
        fadeOutAll() {
          this._activeRipples.forEach((t) => t.fadeOut());
        }
        setupTriggerEvents(t) {
          const e = Gt(t);
          e &&
            e !== this._triggerElement &&
            (this._removeTriggerEvents(),
            (this._triggerElement = e),
            this._registerEvents(or));
        }
        handleEvent(t) {
          "mousedown" === t.type
            ? this._onMousedown(t)
            : "touchstart" === t.type
            ? this._onTouchStart(t)
            : this._onPointerUp(),
            this._pointerUpEventsRegistered ||
              (this._registerEvents(ar),
              (this._pointerUpEventsRegistered = !0));
        }
        _onMousedown(t) {
          const e = Zt(t),
            n =
              this._lastTouchStartEvent &&
              Date.now() < this._lastTouchStartEvent + 800;
          this._target.rippleDisabled ||
            e ||
            n ||
            ((this._isPointerDown = !0),
            this.fadeInRipple(t.clientX, t.clientY, this._target.rippleConfig));
        }
        _onTouchStart(t) {
          if (!this._target.rippleDisabled) {
            (this._lastTouchStartEvent = Date.now()),
              (this._isPointerDown = !0);
            const e = t.changedTouches;
            for (let t = 0; t < e.length; t++)
              this.fadeInRipple(
                e[t].clientX,
                e[t].clientY,
                this._target.rippleConfig
              );
          }
        }
        _onPointerUp() {
          this._isPointerDown &&
            ((this._isPointerDown = !1),
            this._activeRipples.forEach((t) => {
              !t.config.persistent &&
                (1 === t.state ||
                  (t.config.terminateOnPointerUp && 0 === t.state)) &&
                t.fadeOut();
            }));
        }
        _runTimeoutOutsideZone(t, e = 0) {
          this._ngZone.runOutsideAngular(() => setTimeout(t, e));
        }
        _registerEvents(t) {
          this._ngZone.runOutsideAngular(() => {
            t.forEach((t) => {
              this._triggerElement.addEventListener(t, this, ir);
            });
          });
        }
        _removeTriggerEvents() {
          this._triggerElement &&
            (or.forEach((t) => {
              this._triggerElement.removeEventListener(t, this, ir);
            }),
            this._pointerUpEventsRegistered &&
              ar.forEach((t) => {
                this._triggerElement.removeEventListener(t, this, ir);
              }));
        }
      }
      const cr = new s.q("mat-ripple-global-options");
      let ur = (() => {
          class t {
            constructor(t, e, n, s, r) {
              (this._elementRef = t),
                (this._animationMode = r),
                (this.radius = 0),
                (this._disabled = !1),
                (this._isInitialized = !1),
                (this._globalOptions = s || {}),
                (this._rippleRenderer = new lr(this, e, t, n));
            }
            get disabled() {
              return this._disabled;
            }
            set disabled(t) {
              (this._disabled = t), this._setupTriggerEventsIfEnabled();
            }
            get trigger() {
              return this._trigger || this._elementRef.nativeElement;
            }
            set trigger(t) {
              (this._trigger = t), this._setupTriggerEventsIfEnabled();
            }
            ngOnInit() {
              (this._isInitialized = !0), this._setupTriggerEventsIfEnabled();
            }
            ngOnDestroy() {
              this._rippleRenderer._removeTriggerEvents();
            }
            fadeOutAll() {
              this._rippleRenderer.fadeOutAll();
            }
            get rippleConfig() {
              return {
                centered: this.centered,
                radius: this.radius,
                color: this.color,
                animation: Object.assign(
                  Object.assign(
                    Object.assign({}, this._globalOptions.animation),
                    "NoopAnimations" === this._animationMode
                      ? { enterDuration: 0, exitDuration: 0 }
                      : {}
                  ),
                  this.animation
                ),
                terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
              };
            }
            get rippleDisabled() {
              return this.disabled || !!this._globalOptions.disabled;
            }
            _setupTriggerEventsIfEnabled() {
              !this.disabled &&
                this._isInitialized &&
                this._rippleRenderer.setupTriggerEvents(this.trigger);
            }
            launch(t, e = 0, n) {
              return "number" == typeof t
                ? this._rippleRenderer.fadeInRipple(
                    t,
                    e,
                    Object.assign(Object.assign({}, this.rippleConfig), n)
                  )
                : this._rippleRenderer.fadeInRipple(
                    0,
                    0,
                    Object.assign(Object.assign({}, this.rippleConfig), t)
                  );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                s.Kb(s.l),
                s.Kb(s.z),
                s.Kb(At),
                s.Kb(cr, 8),
                s.Kb(Ws, 8)
              );
            }),
            (t.ɵdir = s.Fb({
              type: t,
              selectors: [
                ["", "mat-ripple", ""],
                ["", "matRipple", ""],
              ],
              hostAttrs: [1, "mat-ripple"],
              hostVars: 2,
              hostBindings: function (t, e) {
                2 & t && s.Cb("mat-ripple-unbounded", e.unbounded);
              },
              inputs: {
                radius: ["matRippleRadius", "radius"],
                disabled: ["matRippleDisabled", "disabled"],
                trigger: ["matRippleTrigger", "trigger"],
                color: ["matRippleColor", "color"],
                unbounded: ["matRippleUnbounded", "unbounded"],
                centered: ["matRippleCentered", "centered"],
                animation: ["matRippleAnimation", "animation"],
              },
              exportAs: ["matRipple"],
            })),
            t
          );
        })(),
        hr = (() => {
          class t {}
          return (
            (t.ɵmod = s.Ib({ type: t })),
            (t.ɵinj = s.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[Js, It], Js],
            })),
            t
          );
        })();
      const dr = ["*", [["mat-toolbar-row"]]],
        pr = ["*", "mat-toolbar-row"];
      class fr {
        constructor(t) {
          this._elementRef = t;
        }
      }
      const mr = er(fr);
      let gr = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵdir = s.Fb({
              type: t,
              selectors: [["mat-toolbar-row"]],
              hostAttrs: [1, "mat-toolbar-row"],
              exportAs: ["matToolbarRow"],
            })),
            t
          );
        })(),
        _r = (() => {
          class t extends mr {
            constructor(t, e, n) {
              super(t), (this._platform = e), (this._document = n);
            }
            ngAfterViewInit() {
              this._platform.isBrowser &&
                (this._checkToolbarMixedModes(),
                this._toolbarRows.changes.subscribe(() =>
                  this._checkToolbarMixedModes()
                ));
            }
            _checkToolbarMixedModes() {}
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Kb(s.l), s.Kb(At), s.Kb(i.c));
            }),
            (t.ɵcmp = s.Eb({
              type: t,
              selectors: [["mat-toolbar"]],
              contentQueries: function (t, e, n) {
                var r;
                1 & t && s.Db(n, gr, !0),
                  2 & t && s.gc((r = s.Vb())) && (e._toolbarRows = r);
              },
              hostAttrs: [1, "mat-toolbar"],
              hostVars: 4,
              hostBindings: function (t, e) {
                2 & t &&
                  s.Cb("mat-toolbar-multiple-rows", e._toolbarRows.length > 0)(
                    "mat-toolbar-single-row",
                    0 === e._toolbarRows.length
                  );
              },
              inputs: { color: "color" },
              exportAs: ["matToolbar"],
              features: [s.wb],
              ngContentSelectors: pr,
              decls: 2,
              vars: 0,
              template: function (t, e) {
                1 & t && (s.bc(dr), s.ac(0), s.ac(1, 1));
              },
              styles: [
                ".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n",
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })(),
        br = (() => {
          class t {}
          return (
            (t.ɵmod = s.Ib({ type: t })),
            (t.ɵinj = s.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[Js], Js],
            })),
            t
          );
        })();
      const yr = ["mat-button", ""],
        vr = ["*"],
        wr = [
          "mat-button",
          "mat-flat-button",
          "mat-icon-button",
          "mat-raised-button",
          "mat-stroked-button",
          "mat-mini-fab",
          "mat-fab",
        ];
      class Cr {
        constructor(t) {
          this._elementRef = t;
        }
      }
      const Sr = er(tr(nr(Cr)));
      let Er = (() => {
          class t extends Sr {
            constructor(t, e, n) {
              super(t),
                (this._focusMonitor = e),
                (this._animationMode = n),
                (this.isRoundButton = this._hasHostAttributes(
                  "mat-fab",
                  "mat-mini-fab"
                )),
                (this.isIconButton = this._hasHostAttributes(
                  "mat-icon-button"
                ));
              for (const s of wr)
                this._hasHostAttributes(s) &&
                  this._getHostElement().classList.add(s);
              t.nativeElement.classList.add("mat-button-base"),
                this.isRoundButton && (this.color = "accent");
            }
            ngAfterViewInit() {
              this._focusMonitor.monitor(this._elementRef, !0);
            }
            ngOnDestroy() {
              this._focusMonitor.stopMonitoring(this._elementRef);
            }
            focus(t = "program", e) {
              this._focusMonitor.focusVia(this._getHostElement(), t, e);
            }
            _getHostElement() {
              return this._elementRef.nativeElement;
            }
            _isRippleDisabled() {
              return this.disableRipple || this.disabled;
            }
            _hasHostAttributes(...t) {
              return t.some((t) => this._getHostElement().hasAttribute(t));
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Kb(s.l), s.Kb(Jt), s.Kb(Ws, 8));
            }),
            (t.ɵcmp = s.Eb({
              type: t,
              selectors: [
                ["button", "mat-button", ""],
                ["button", "mat-raised-button", ""],
                ["button", "mat-icon-button", ""],
                ["button", "mat-fab", ""],
                ["button", "mat-mini-fab", ""],
                ["button", "mat-stroked-button", ""],
                ["button", "mat-flat-button", ""],
              ],
              viewQuery: function (t, e) {
                var n;
                1 & t && s.rc(ur, !0),
                  2 & t && s.gc((n = s.Vb())) && (e.ripple = n.first);
              },
              hostAttrs: [1, "mat-focus-indicator"],
              hostVars: 5,
              hostBindings: function (t, e) {
                2 & t &&
                  (s.Ab("disabled", e.disabled || null),
                  s.Cb(
                    "_mat-animation-noopable",
                    "NoopAnimations" === e._animationMode
                  )("mat-button-disabled", e.disabled));
              },
              inputs: {
                disabled: "disabled",
                disableRipple: "disableRipple",
                color: "color",
              },
              exportAs: ["matButton"],
              features: [s.wb],
              attrs: yr,
              ngContentSelectors: vr,
              decls: 4,
              vars: 5,
              consts: [
                [1, "mat-button-wrapper"],
                [
                  "matRipple",
                  "",
                  1,
                  "mat-button-ripple",
                  3,
                  "matRippleDisabled",
                  "matRippleCentered",
                  "matRippleTrigger",
                ],
                [1, "mat-button-focus-overlay"],
              ],
              template: function (t, e) {
                1 & t &&
                  (s.bc(),
                  s.Nb(0, "span", 0),
                  s.ac(1),
                  s.Mb(),
                  s.Lb(2, "span", 1),
                  s.Lb(3, "span", 2)),
                  2 & t &&
                    (s.zb(2),
                    s.Cb(
                      "mat-button-ripple-round",
                      e.isRoundButton || e.isIconButton
                    ),
                    s.cc("matRippleDisabled", e._isRippleDisabled())(
                      "matRippleCentered",
                      e.isIconButton
                    )("matRippleTrigger", e._getHostElement()));
              },
              directives: [ur],
              styles: [
                ".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n",
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })(),
        Or = (() => {
          class t {}
          return (
            (t.ɵmod = s.Ib({ type: t })),
            (t.ɵinj = s.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[hr, Js], Js],
            })),
            t
          );
        })();
      var xr = n("VRyK");
      let kr = 1;
      const Tr = (() => Promise.resolve())(),
        Rr = {};
      function Ar(t) {
        return t in Rr && (delete Rr[t], !0);
      }
      const Ir = {
        setImmediate(t) {
          const e = kr++;
          return (Rr[e] = !0), Tr.then(() => Ar(e) && t()), e;
        },
        clearImmediate(t) {
          Ar(t);
        },
      };
      class jr extends Ft.a {
        constructor(t, e) {
          super(t, e), (this.scheduler = t), (this.work = e);
        }
        requestAsyncId(t, e, n = 0) {
          return null !== n && n > 0
            ? super.requestAsyncId(t, e, n)
            : (t.actions.push(this),
              t.scheduled ||
                (t.scheduled = Ir.setImmediate(t.flush.bind(t, null))));
        }
        recycleAsyncId(t, e, n = 0) {
          if ((null !== n && n > 0) || (null === n && this.delay > 0))
            return super.recycleAsyncId(t, e, n);
          0 === t.actions.length &&
            (Ir.clearImmediate(e), (t.scheduled = void 0));
        }
      }
      class Pr extends Vt.a {
        flush(t) {
          (this.active = !0), (this.scheduled = void 0);
          const { actions: e } = this;
          let n,
            s = -1,
            r = e.length;
          t = t || e.shift();
          do {
            if ((n = t.execute(t.state, t.delay))) break;
          } while (++s < r && (t = e.shift()));
          if (((this.active = !1), n)) {
            for (; ++s < r && (t = e.shift()); ) t.unsubscribe();
            throw n;
          }
        }
      }
      const Dr = new Pr(jr);
      var Nr = n("eIep"),
        Lr = n("zx2A");
      function Mr(t) {
        return (e) => e.lift(new Fr(t));
      }
      class Fr {
        constructor(t) {
          this.notifier = t;
        }
        call(t, e) {
          const n = new Vr(t),
            s = Object(Lr.c)(this.notifier, new Lr.a(n));
          return s && !n.seenValue ? (n.add(s), e.subscribe(n)) : n;
        }
      }
      class Vr extends Lr.b {
        constructor(t) {
          super(t), (this.seenValue = !1);
        }
        notifyNext() {
          (this.seenValue = !0), this.complete();
        }
        notifyComplete() {}
      }
      var Hr = n("WMd4");
      function Ur(t, e = Ht) {
        var n;
        const s =
          (n = t) instanceof Date && !isNaN(+n) ? +t - e.now() : Math.abs(t);
        return (t) => t.lift(new zr(s, e));
      }
      class zr {
        constructor(t, e) {
          (this.delay = t), (this.scheduler = e);
        }
        call(t, e) {
          return e.subscribe(new Br(t, this.delay, this.scheduler));
        }
      }
      class Br extends Mt.a {
        constructor(t, e, n) {
          super(t),
            (this.delay = e),
            (this.scheduler = n),
            (this.queue = []),
            (this.active = !1),
            (this.errored = !1);
        }
        static dispatch(t) {
          const e = t.source,
            n = e.queue,
            s = t.scheduler,
            r = t.destination;
          for (; n.length > 0 && n[0].time - s.now() <= 0; )
            n.shift().notification.observe(r);
          if (n.length > 0) {
            const e = Math.max(0, n[0].time - s.now());
            this.schedule(t, e);
          } else this.unsubscribe(), (e.active = !1);
        }
        _schedule(t) {
          (this.active = !0),
            this.destination.add(
              t.schedule(Br.dispatch, this.delay, {
                source: this,
                destination: this.destination,
                scheduler: t,
              })
            );
        }
        scheduleNotification(t) {
          if (!0 === this.errored) return;
          const e = this.scheduler,
            n = new qr(e.now() + this.delay, t);
          this.queue.push(n), !1 === this.active && this._schedule(e);
        }
        _next(t) {
          this.scheduleNotification(Hr.a.createNext(t));
        }
        _error(t) {
          (this.errored = !0),
            (this.queue = []),
            this.destination.error(t),
            this.unsubscribe();
        }
        _complete() {
          this.scheduleNotification(Hr.a.createComplete()), this.unsubscribe();
        }
      }
      class qr {
        constructor(t, e) {
          (this.time = t), (this.notification = e);
        }
      }
      class $r {
        attach(t) {
          return (this._attachedHost = t), t.attach(this);
        }
        detach() {
          let t = this._attachedHost;
          null != t && ((this._attachedHost = null), t.detach());
        }
        get isAttached() {
          return null != this._attachedHost;
        }
        setAttachedHost(t) {
          this._attachedHost = t;
        }
      }
      class Kr extends $r {
        constructor(t, e, n, s) {
          super(),
            (this.component = t),
            (this.viewContainerRef = e),
            (this.injector = n),
            (this.componentFactoryResolver = s);
        }
      }
      class Wr extends $r {
        constructor(t, e, n) {
          super(),
            (this.templateRef = t),
            (this.viewContainerRef = e),
            (this.context = n);
        }
        get origin() {
          return this.templateRef.elementRef;
        }
        attach(t, e = this.context) {
          return (this.context = e), super.attach(t);
        }
        detach() {
          return (this.context = void 0), super.detach();
        }
      }
      class Gr extends $r {
        constructor(t) {
          super(), (this.element = t instanceof s.l ? t.nativeElement : t);
        }
      }
      class Qr extends class {
        constructor() {
          (this._isDisposed = !1), (this.attachDomPortal = null);
        }
        hasAttached() {
          return !!this._attachedPortal;
        }
        attach(t) {
          return t instanceof Kr
            ? ((this._attachedPortal = t), this.attachComponentPortal(t))
            : t instanceof Wr
            ? ((this._attachedPortal = t), this.attachTemplatePortal(t))
            : this.attachDomPortal && t instanceof Gr
            ? ((this._attachedPortal = t), this.attachDomPortal(t))
            : void 0;
        }
        detach() {
          this._attachedPortal &&
            (this._attachedPortal.setAttachedHost(null),
            (this._attachedPortal = null)),
            this._invokeDisposeFn();
        }
        dispose() {
          this.hasAttached() && this.detach(),
            this._invokeDisposeFn(),
            (this._isDisposed = !0);
        }
        setDisposeFn(t) {
          this._disposeFn = t;
        }
        _invokeDisposeFn() {
          this._disposeFn && (this._disposeFn(), (this._disposeFn = null));
        }
      } {
        constructor(t, e, n, s, r) {
          super(),
            (this.outletElement = t),
            (this._componentFactoryResolver = e),
            (this._appRef = n),
            (this._defaultInjector = s),
            (this.attachDomPortal = (t) => {
              const e = t.element,
                n = this._document.createComment("dom-portal");
              e.parentNode.insertBefore(n, e),
                this.outletElement.appendChild(e),
                super.setDisposeFn(() => {
                  n.parentNode && n.parentNode.replaceChild(e, n);
                });
            }),
            (this._document = r);
        }
        attachComponentPortal(t) {
          const e = (
            t.componentFactoryResolver || this._componentFactoryResolver
          ).resolveComponentFactory(t.component);
          let n;
          return (
            t.viewContainerRef
              ? ((n = t.viewContainerRef.createComponent(
                  e,
                  t.viewContainerRef.length,
                  t.injector || t.viewContainerRef.injector
                )),
                this.setDisposeFn(() => n.destroy()))
              : ((n = e.create(t.injector || this._defaultInjector)),
                this._appRef.attachView(n.hostView),
                this.setDisposeFn(() => {
                  this._appRef.detachView(n.hostView), n.destroy();
                })),
            this.outletElement.appendChild(this._getComponentRootNode(n)),
            n
          );
        }
        attachTemplatePortal(t) {
          let e = t.viewContainerRef,
            n = e.createEmbeddedView(t.templateRef, t.context);
          return (
            n.rootNodes.forEach((t) => this.outletElement.appendChild(t)),
            n.detectChanges(),
            this.setDisposeFn(() => {
              let t = e.indexOf(n);
              -1 !== t && e.remove(t);
            }),
            n
          );
        }
        dispose() {
          super.dispose(),
            null != this.outletElement.parentNode &&
              this.outletElement.parentNode.removeChild(this.outletElement);
        }
        _getComponentRootNode(t) {
          return t.hostView.rootNodes[0];
        }
      }
      let Zr = (() => {
        class t {}
        return (
          (t.ɵmod = s.Ib({ type: t })),
          (t.ɵinj = s.Hb({
            factory: function (e) {
              return new (e || t)();
            },
          })),
          t
        );
      })();
      var Yr = n("DH7j"),
        Xr = n("n6bG");
      function Jr(t, e, n, s) {
        return (
          Object(Xr.a)(n) && ((s = n), (n = void 0)),
          s
            ? Jr(t, e, n).pipe(
                Object(z.a)((t) => (Object(Yr.a)(t) ? s(...t) : s(t)))
              )
            : new V.a((s) => {
                !(function t(e, n, s, r, i) {
                  let o;
                  if (
                    (function (t) {
                      return (
                        t &&
                        "function" == typeof t.addEventListener &&
                        "function" == typeof t.removeEventListener
                      );
                    })(e)
                  ) {
                    const t = e;
                    e.addEventListener(n, s, i),
                      (o = () => t.removeEventListener(n, s, i));
                  } else if (
                    (function (t) {
                      return (
                        t &&
                        "function" == typeof t.on &&
                        "function" == typeof t.off
                      );
                    })(e)
                  ) {
                    const t = e;
                    e.on(n, s), (o = () => t.off(n, s));
                  } else if (
                    (function (t) {
                      return (
                        t &&
                        "function" == typeof t.addListener &&
                        "function" == typeof t.removeListener
                      );
                    })(e)
                  ) {
                    const t = e;
                    e.addListener(n, s), (o = () => t.removeListener(n, s));
                  } else {
                    if (!e || !e.length)
                      throw new TypeError("Invalid event target");
                    for (let o = 0, a = e.length; o < a; o++)
                      t(e[o], n, s, r, i);
                  }
                  r.add(o);
                })(
                  t,
                  e,
                  function (t) {
                    s.next(
                      arguments.length > 1
                        ? Array.prototype.slice.call(arguments)
                        : t
                    );
                  },
                  s,
                  n
                );
              })
        );
      }
      n("7+OI");
      class ti {
        constructor(t) {
          this.durationSelector = t;
        }
        call(t, e) {
          return e.subscribe(new ei(t, this.durationSelector));
        }
      }
      class ei extends Lr.b {
        constructor(t, e) {
          super(t), (this.durationSelector = e), (this.hasValue = !1);
        }
        _next(t) {
          if (((this.value = t), (this.hasValue = !0), !this.throttled)) {
            let n;
            try {
              const { durationSelector: e } = this;
              n = e(t);
            } catch (e) {
              return this.destination.error(e);
            }
            const s = Object(Lr.c)(n, new Lr.a(this));
            !s || s.closed
              ? this.clearThrottle()
              : this.add((this.throttled = s));
          }
        }
        clearThrottle() {
          const { value: t, hasValue: e, throttled: n } = this;
          n && (this.remove(n), (this.throttled = void 0), n.unsubscribe()),
            e &&
              ((this.value = void 0),
              (this.hasValue = !1),
              this.destination.next(t));
        }
        notifyNext() {
          this.clearThrottle();
        }
        notifyComplete() {
          this.clearThrottle();
        }
      }
      function ni(t) {
        return !Object(Yr.a)(t) && t - parseFloat(t) + 1 >= 0;
      }
      var si = n("z+Ro");
      function ri(t) {
        const { index: e, period: n, subscriber: s } = t;
        if ((s.next(e), !s.closed)) {
          if (-1 === n) return s.complete();
          (t.index = e + 1), this.schedule(t, n);
        }
      }
      function ii(t, e = Ht) {
        return (
          (n = () =>
            (function (t = 0, e, n) {
              let s = -1;
              return (
                ni(e)
                  ? (s = Number(e) < 1 ? 1 : Number(e))
                  : Object(si.a)(e) && (n = e),
                Object(si.a)(n) || (n = Ht),
                new V.a((e) => {
                  const r = ni(t) ? t : +t - n.now();
                  return n.schedule(ri, r, {
                    index: 0,
                    period: s,
                    subscriber: e,
                  });
                })
              );
            })(t, e)),
          function (t) {
            return t.lift(new ti(n));
          }
        );
        var n;
      }
      n("UXun");
      let oi = (() => {
          class t {
            constructor(t, e, n) {
              (this._ngZone = t),
                (this._platform = e),
                (this._scrolled = new Pt.a()),
                (this._globalSubscription = null),
                (this._scrolledCount = 0),
                (this.scrollContainers = new Map()),
                (this._document = n);
            }
            register(t) {
              this.scrollContainers.has(t) ||
                this.scrollContainers.set(
                  t,
                  t.elementScrolled().subscribe(() => this._scrolled.next(t))
                );
            }
            deregister(t) {
              const e = this.scrollContainers.get(t);
              e && (e.unsubscribe(), this.scrollContainers.delete(t));
            }
            scrolled(t = 20) {
              return this._platform.isBrowser
                ? new V.a((e) => {
                    this._globalSubscription || this._addGlobalListener();
                    const n =
                      t > 0
                        ? this._scrolled.pipe(ii(t)).subscribe(e)
                        : this._scrolled.subscribe(e);
                    return (
                      this._scrolledCount++,
                      () => {
                        n.unsubscribe(),
                          this._scrolledCount--,
                          this._scrolledCount || this._removeGlobalListener();
                      }
                    );
                  })
                : Object(F.a)();
            }
            ngOnDestroy() {
              this._removeGlobalListener(),
                this.scrollContainers.forEach((t, e) => this.deregister(e)),
                this._scrolled.complete();
            }
            ancestorScrolled(t, e) {
              const n = this.getAncestorScrollContainers(t);
              return this.scrolled(e).pipe(
                Object(U.a)((t) => !t || n.indexOf(t) > -1)
              );
            }
            getAncestorScrollContainers(t) {
              const e = [];
              return (
                this.scrollContainers.forEach((n, s) => {
                  this._scrollableContainsElement(s, t) && e.push(s);
                }),
                e
              );
            }
            _getDocument() {
              return this._document || document;
            }
            _getWindow() {
              return this._getDocument().defaultView || window;
            }
            _scrollableContainsElement(t, e) {
              let n = e.nativeElement,
                s = t.getElementRef().nativeElement;
              do {
                if (n == s) return !0;
              } while ((n = n.parentElement));
              return !1;
            }
            _addGlobalListener() {
              this._globalSubscription = this._ngZone.runOutsideAngular(() =>
                Jr(this._getWindow().document, "scroll").subscribe(() =>
                  this._scrolled.next()
                )
              );
            }
            _removeGlobalListener() {
              this._globalSubscription &&
                (this._globalSubscription.unsubscribe(),
                (this._globalSubscription = null));
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Rb(s.z), s.Rb(At), s.Rb(i.c, 8));
            }),
            (t.ɵprov = Object(s.Gb)({
              factory: function () {
                return new t(
                  Object(s.Rb)(s.z),
                  Object(s.Rb)(At),
                  Object(s.Rb)(i.c, 8)
                );
              },
              token: t,
              providedIn: "root",
            })),
            t
          );
        })(),
        ai = (() => {
          class t {
            constructor(t, e, n) {
              (this._platform = t),
                (this._change = new Pt.a()),
                (this._changeListener = (t) => {
                  this._change.next(t);
                }),
                (this._document = n),
                e.runOutsideAngular(() => {
                  if (t.isBrowser) {
                    const t = this._getWindow();
                    t.addEventListener("resize", this._changeListener),
                      t.addEventListener(
                        "orientationchange",
                        this._changeListener
                      );
                  }
                  this.change().subscribe(() => this._updateViewportSize());
                });
            }
            ngOnDestroy() {
              if (this._platform.isBrowser) {
                const t = this._getWindow();
                t.removeEventListener("resize", this._changeListener),
                  t.removeEventListener(
                    "orientationchange",
                    this._changeListener
                  );
              }
              this._change.complete();
            }
            getViewportSize() {
              this._viewportSize || this._updateViewportSize();
              const t = {
                width: this._viewportSize.width,
                height: this._viewportSize.height,
              };
              return this._platform.isBrowser || (this._viewportSize = null), t;
            }
            getViewportRect() {
              const t = this.getViewportScrollPosition(),
                { width: e, height: n } = this.getViewportSize();
              return {
                top: t.top,
                left: t.left,
                bottom: t.top + n,
                right: t.left + e,
                height: n,
                width: e,
              };
            }
            getViewportScrollPosition() {
              if (!this._platform.isBrowser) return { top: 0, left: 0 };
              const t = this._getDocument(),
                e = this._getWindow(),
                n = t.documentElement,
                s = n.getBoundingClientRect();
              return {
                top:
                  -s.top || t.body.scrollTop || e.scrollY || n.scrollTop || 0,
                left:
                  -s.left ||
                  t.body.scrollLeft ||
                  e.scrollX ||
                  n.scrollLeft ||
                  0,
              };
            }
            change(t = 20) {
              return t > 0 ? this._change.pipe(ii(t)) : this._change;
            }
            _getDocument() {
              return this._document || document;
            }
            _getWindow() {
              return this._getDocument().defaultView || window;
            }
            _updateViewportSize() {
              const t = this._getWindow();
              this._viewportSize = this._platform.isBrowser
                ? { width: t.innerWidth, height: t.innerHeight }
                : { width: 0, height: 0 };
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Rb(At), s.Rb(s.z), s.Rb(i.c, 8));
            }),
            (t.ɵprov = Object(s.Gb)({
              factory: function () {
                return new t(
                  Object(s.Rb)(At),
                  Object(s.Rb)(s.z),
                  Object(s.Rb)(i.c, 8)
                );
              },
              token: t,
              providedIn: "root",
            })),
            t
          );
        })(),
        li = (() => {
          class t {}
          return (
            (t.ɵmod = s.Ib({ type: t })),
            (t.ɵinj = s.Hb({
              factory: function (e) {
                return new (e || t)();
              },
            })),
            t
          );
        })(),
        ci = (() => {
          class t {}
          return (
            (t.ɵmod = s.Ib({ type: t })),
            (t.ɵinj = s.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[ae, It, li], ae, li],
            })),
            t
          );
        })();
      class ui {
        constructor(t, e) {
          (this._viewportRuler = t),
            (this._previousHTMLStyles = { top: "", left: "" }),
            (this._isEnabled = !1),
            (this._document = e);
        }
        attach() {}
        enable() {
          if (this._canBeEnabled()) {
            const t = this._document.documentElement;
            (this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition()),
              (this._previousHTMLStyles.left = t.style.left || ""),
              (this._previousHTMLStyles.top = t.style.top || ""),
              (t.style.left = Wt(-this._previousScrollPosition.left)),
              (t.style.top = Wt(-this._previousScrollPosition.top)),
              t.classList.add("cdk-global-scrollblock"),
              (this._isEnabled = !0);
          }
        }
        disable() {
          if (this._isEnabled) {
            const t = this._document.documentElement,
              e = t.style,
              n = this._document.body.style,
              s = e.scrollBehavior || "",
              r = n.scrollBehavior || "";
            (this._isEnabled = !1),
              (e.left = this._previousHTMLStyles.left),
              (e.top = this._previousHTMLStyles.top),
              t.classList.remove("cdk-global-scrollblock"),
              (e.scrollBehavior = n.scrollBehavior = "auto"),
              window.scroll(
                this._previousScrollPosition.left,
                this._previousScrollPosition.top
              ),
              (e.scrollBehavior = s),
              (n.scrollBehavior = r);
          }
        }
        _canBeEnabled() {
          if (
            this._document.documentElement.classList.contains(
              "cdk-global-scrollblock"
            ) ||
            this._isEnabled
          )
            return !1;
          const t = this._document.body,
            e = this._viewportRuler.getViewportSize();
          return t.scrollHeight > e.height || t.scrollWidth > e.width;
        }
      }
      class hi {
        constructor(t, e, n, s) {
          (this._scrollDispatcher = t),
            (this._ngZone = e),
            (this._viewportRuler = n),
            (this._config = s),
            (this._scrollSubscription = null),
            (this._detach = () => {
              this.disable(),
                this._overlayRef.hasAttached() &&
                  this._ngZone.run(() => this._overlayRef.detach());
            });
        }
        attach(t) {
          this._overlayRef = t;
        }
        enable() {
          if (this._scrollSubscription) return;
          const t = this._scrollDispatcher.scrolled(0);
          this._config && this._config.threshold && this._config.threshold > 1
            ? ((this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top),
              (this._scrollSubscription = t.subscribe(() => {
                const t = this._viewportRuler.getViewportScrollPosition().top;
                Math.abs(t - this._initialScrollPosition) >
                this._config.threshold
                  ? this._detach()
                  : this._overlayRef.updatePosition();
              })))
            : (this._scrollSubscription = t.subscribe(this._detach));
        }
        disable() {
          this._scrollSubscription &&
            (this._scrollSubscription.unsubscribe(),
            (this._scrollSubscription = null));
        }
        detach() {
          this.disable(), (this._overlayRef = null);
        }
      }
      class di {
        enable() {}
        disable() {}
        attach() {}
      }
      function pi(t, e) {
        return e.some(
          (e) =>
            t.bottom < e.top ||
            t.top > e.bottom ||
            t.right < e.left ||
            t.left > e.right
        );
      }
      function fi(t, e) {
        return e.some(
          (e) =>
            t.top < e.top ||
            t.bottom > e.bottom ||
            t.left < e.left ||
            t.right > e.right
        );
      }
      class mi {
        constructor(t, e, n, s) {
          (this._scrollDispatcher = t),
            (this._viewportRuler = e),
            (this._ngZone = n),
            (this._config = s),
            (this._scrollSubscription = null);
        }
        attach(t) {
          this._overlayRef = t;
        }
        enable() {
          this._scrollSubscription ||
            (this._scrollSubscription = this._scrollDispatcher
              .scrolled(this._config ? this._config.scrollThrottle : 0)
              .subscribe(() => {
                if (
                  (this._overlayRef.updatePosition(),
                  this._config && this._config.autoClose)
                ) {
                  const t = this._overlayRef.overlayElement.getBoundingClientRect(),
                    {
                      width: e,
                      height: n,
                    } = this._viewportRuler.getViewportSize();
                  pi(t, [
                    {
                      width: e,
                      height: n,
                      bottom: n,
                      right: e,
                      top: 0,
                      left: 0,
                    },
                  ]) &&
                    (this.disable(),
                    this._ngZone.run(() => this._overlayRef.detach()));
                }
              }));
        }
        disable() {
          this._scrollSubscription &&
            (this._scrollSubscription.unsubscribe(),
            (this._scrollSubscription = null));
        }
        detach() {
          this.disable(), (this._overlayRef = null);
        }
      }
      let gi = (() => {
        class t {
          constructor(t, e, n, s) {
            (this._scrollDispatcher = t),
              (this._viewportRuler = e),
              (this._ngZone = n),
              (this.noop = () => new di()),
              (this.close = (t) =>
                new hi(
                  this._scrollDispatcher,
                  this._ngZone,
                  this._viewportRuler,
                  t
                )),
              (this.block = () => new ui(this._viewportRuler, this._document)),
              (this.reposition = (t) =>
                new mi(
                  this._scrollDispatcher,
                  this._viewportRuler,
                  this._ngZone,
                  t
                )),
              (this._document = s);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Rb(oi), s.Rb(ai), s.Rb(s.z), s.Rb(i.c));
          }),
          (t.ɵprov = Object(s.Gb)({
            factory: function () {
              return new t(
                Object(s.Rb)(oi),
                Object(s.Rb)(ai),
                Object(s.Rb)(s.z),
                Object(s.Rb)(i.c)
              );
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
      class _i {
        constructor(t) {
          if (
            ((this.scrollStrategy = new di()),
            (this.panelClass = ""),
            (this.hasBackdrop = !1),
            (this.backdropClass = "cdk-overlay-dark-backdrop"),
            (this.disposeOnNavigation = !1),
            t)
          ) {
            const e = Object.keys(t);
            for (const n of e) void 0 !== t[n] && (this[n] = t[n]);
          }
        }
      }
      class bi {
        constructor(t, e, n, s, r) {
          (this.offsetX = n),
            (this.offsetY = s),
            (this.panelClass = r),
            (this.originX = t.originX),
            (this.originY = t.originY),
            (this.overlayX = e.overlayX),
            (this.overlayY = e.overlayY);
        }
      }
      class yi {
        constructor(t, e) {
          (this.connectionPair = t), (this.scrollableViewProperties = e);
        }
      }
      let vi = (() => {
          class t {
            constructor(t) {
              (this._attachedOverlays = []), (this._document = t);
            }
            ngOnDestroy() {
              this.detach();
            }
            add(t) {
              this.remove(t), this._attachedOverlays.push(t);
            }
            remove(t) {
              const e = this._attachedOverlays.indexOf(t);
              e > -1 && this._attachedOverlays.splice(e, 1),
                0 === this._attachedOverlays.length && this.detach();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Rb(i.c));
            }),
            (t.ɵprov = Object(s.Gb)({
              factory: function () {
                return new t(Object(s.Rb)(i.c));
              },
              token: t,
              providedIn: "root",
            })),
            t
          );
        })(),
        wi = (() => {
          class t extends vi {
            constructor(t) {
              super(t),
                (this._keydownListener = (t) => {
                  const e = this._attachedOverlays;
                  for (let n = e.length - 1; n > -1; n--)
                    if (e[n]._keydownEvents.observers.length > 0) {
                      e[n]._keydownEvents.next(t);
                      break;
                    }
                });
            }
            add(t) {
              super.add(t),
                this._isAttached ||
                  (this._document.body.addEventListener(
                    "keydown",
                    this._keydownListener
                  ),
                  (this._isAttached = !0));
            }
            detach() {
              this._isAttached &&
                (this._document.body.removeEventListener(
                  "keydown",
                  this._keydownListener
                ),
                (this._isAttached = !1));
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Rb(i.c));
            }),
            (t.ɵprov = Object(s.Gb)({
              factory: function () {
                return new t(Object(s.Rb)(i.c));
              },
              token: t,
              providedIn: "root",
            })),
            t
          );
        })(),
        Ci = (() => {
          class t extends vi {
            constructor(t, e) {
              super(t),
                (this._platform = e),
                (this._cursorStyleIsSet = !1),
                (this._clickListener = (t) => {
                  const e = t.composedPath ? t.composedPath()[0] : t.target,
                    n = this._attachedOverlays.slice();
                  for (let s = n.length - 1; s > -1; s--) {
                    const r = n[s];
                    if (
                      !(r._outsidePointerEvents.observers.length < 1) &&
                      r.hasAttached()
                    ) {
                      if (r.overlayElement.contains(e)) break;
                      r._outsidePointerEvents.next(t);
                    }
                  }
                });
            }
            add(t) {
              super.add(t),
                this._isAttached ||
                  (this._document.body.addEventListener(
                    "click",
                    this._clickListener,
                    !0
                  ),
                  this._document.body.addEventListener(
                    "contextmenu",
                    this._clickListener,
                    !0
                  ),
                  this._platform.IOS &&
                    !this._cursorStyleIsSet &&
                    ((this._cursorOriginalValue = this._document.body.style.cursor),
                    (this._document.body.style.cursor = "pointer"),
                    (this._cursorStyleIsSet = !0)),
                  (this._isAttached = !0));
            }
            detach() {
              this._isAttached &&
                (this._document.body.removeEventListener(
                  "click",
                  this._clickListener,
                  !0
                ),
                this._document.body.removeEventListener(
                  "contextmenu",
                  this._clickListener,
                  !0
                ),
                this._platform.IOS &&
                  this._cursorStyleIsSet &&
                  ((this._document.body.style.cursor = this._cursorOriginalValue),
                  (this._cursorStyleIsSet = !1)),
                (this._isAttached = !1));
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Rb(i.c), s.Rb(At));
            }),
            (t.ɵprov = Object(s.Gb)({
              factory: function () {
                return new t(Object(s.Rb)(i.c), Object(s.Rb)(At));
              },
              token: t,
              providedIn: "root",
            })),
            t
          );
        })();
      const Si = !(
        "undefined" == typeof window ||
        !window ||
        (!window.__karma__ && !window.jasmine)
      );
      let Ei = (() => {
        class t {
          constructor(t, e) {
            (this._platform = e), (this._document = t);
          }
          ngOnDestroy() {
            const t = this._containerElement;
            t && t.parentNode && t.parentNode.removeChild(t);
          }
          getContainerElement() {
            return (
              this._containerElement || this._createContainer(),
              this._containerElement
            );
          }
          _createContainer() {
            const t = this._platform
                ? this._platform.isBrowser
                : "undefined" != typeof window,
              e = "cdk-overlay-container";
            if (t || Si) {
              const t = this._document.querySelectorAll(
                `.${e}[platform="server"], .${e}[platform="test"]`
              );
              for (let e = 0; e < t.length; e++)
                t[e].parentNode.removeChild(t[e]);
            }
            const n = this._document.createElement("div");
            n.classList.add(e),
              Si
                ? n.setAttribute("platform", "test")
                : t || n.setAttribute("platform", "server"),
              this._document.body.appendChild(n),
              (this._containerElement = n);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Rb(i.c), s.Rb(At));
          }),
          (t.ɵprov = Object(s.Gb)({
            factory: function () {
              return new t(Object(s.Rb)(i.c), Object(s.Rb)(At));
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
      class Oi {
        constructor(t, e, n, s, r, i, o, a, l) {
          (this._portalOutlet = t),
            (this._host = e),
            (this._pane = n),
            (this._config = s),
            (this._ngZone = r),
            (this._keyboardDispatcher = i),
            (this._document = o),
            (this._location = a),
            (this._outsideClickDispatcher = l),
            (this._backdropElement = null),
            (this._backdropClick = new Pt.a()),
            (this._attachments = new Pt.a()),
            (this._detachments = new Pt.a()),
            (this._locationChanges = Dt.a.EMPTY),
            (this._backdropClickHandler = (t) => this._backdropClick.next(t)),
            (this._keydownEvents = new Pt.a()),
            (this._outsidePointerEvents = new Pt.a()),
            s.scrollStrategy &&
              ((this._scrollStrategy = s.scrollStrategy),
              this._scrollStrategy.attach(this)),
            (this._positionStrategy = s.positionStrategy);
        }
        get overlayElement() {
          return this._pane;
        }
        get backdropElement() {
          return this._backdropElement;
        }
        get hostElement() {
          return this._host;
        }
        attach(t) {
          let e = this._portalOutlet.attach(t);
          return (
            !this._host.parentElement &&
              this._previousHostParent &&
              this._previousHostParent.appendChild(this._host),
            this._positionStrategy && this._positionStrategy.attach(this),
            this._updateStackingOrder(),
            this._updateElementSize(),
            this._updateElementDirection(),
            this._scrollStrategy && this._scrollStrategy.enable(),
            this._ngZone.onStable.pipe(Object(qt.a)(1)).subscribe(() => {
              this.hasAttached() && this.updatePosition();
            }),
            this._togglePointerEvents(!0),
            this._config.hasBackdrop && this._attachBackdrop(),
            this._config.panelClass &&
              this._toggleClasses(this._pane, this._config.panelClass, !0),
            this._attachments.next(),
            this._keyboardDispatcher.add(this),
            this._config.disposeOnNavigation &&
              this._location &&
              (this._locationChanges = this._location.subscribe(() =>
                this.dispose()
              )),
            this._outsideClickDispatcher &&
              this._outsideClickDispatcher.add(this),
            e
          );
        }
        detach() {
          if (!this.hasAttached()) return;
          this.detachBackdrop(),
            this._togglePointerEvents(!1),
            this._positionStrategy &&
              this._positionStrategy.detach &&
              this._positionStrategy.detach(),
            this._scrollStrategy && this._scrollStrategy.disable();
          const t = this._portalOutlet.detach();
          return (
            this._detachments.next(),
            this._keyboardDispatcher.remove(this),
            this._detachContentWhenStable(),
            this._locationChanges.unsubscribe(),
            this._outsideClickDispatcher &&
              this._outsideClickDispatcher.remove(this),
            t
          );
        }
        dispose() {
          const t = this.hasAttached();
          this._positionStrategy && this._positionStrategy.dispose(),
            this._disposeScrollStrategy(),
            this.detachBackdrop(),
            this._locationChanges.unsubscribe(),
            this._keyboardDispatcher.remove(this),
            this._portalOutlet.dispose(),
            this._attachments.complete(),
            this._backdropClick.complete(),
            this._keydownEvents.complete(),
            this._outsidePointerEvents.complete(),
            this._outsideClickDispatcher &&
              this._outsideClickDispatcher.remove(this),
            this._host &&
              this._host.parentNode &&
              (this._host.parentNode.removeChild(this._host),
              (this._host = null)),
            (this._previousHostParent = this._pane = null),
            t && this._detachments.next(),
            this._detachments.complete();
        }
        hasAttached() {
          return this._portalOutlet.hasAttached();
        }
        backdropClick() {
          return this._backdropClick;
        }
        attachments() {
          return this._attachments;
        }
        detachments() {
          return this._detachments;
        }
        keydownEvents() {
          return this._keydownEvents;
        }
        outsidePointerEvents() {
          return this._outsidePointerEvents;
        }
        getConfig() {
          return this._config;
        }
        updatePosition() {
          this._positionStrategy && this._positionStrategy.apply();
        }
        updatePositionStrategy(t) {
          t !== this._positionStrategy &&
            (this._positionStrategy && this._positionStrategy.dispose(),
            (this._positionStrategy = t),
            this.hasAttached() && (t.attach(this), this.updatePosition()));
        }
        updateSize(t) {
          (this._config = Object.assign(Object.assign({}, this._config), t)),
            this._updateElementSize();
        }
        setDirection(t) {
          (this._config = Object.assign(Object.assign({}, this._config), {
            direction: t,
          })),
            this._updateElementDirection();
        }
        addPanelClass(t) {
          this._pane && this._toggleClasses(this._pane, t, !0);
        }
        removePanelClass(t) {
          this._pane && this._toggleClasses(this._pane, t, !1);
        }
        getDirection() {
          const t = this._config.direction;
          return t ? ("string" == typeof t ? t : t.value) : "ltr";
        }
        updateScrollStrategy(t) {
          t !== this._scrollStrategy &&
            (this._disposeScrollStrategy(),
            (this._scrollStrategy = t),
            this.hasAttached() && (t.attach(this), t.enable()));
        }
        _updateElementDirection() {
          this._host.setAttribute("dir", this.getDirection());
        }
        _updateElementSize() {
          if (!this._pane) return;
          const t = this._pane.style;
          (t.width = Wt(this._config.width)),
            (t.height = Wt(this._config.height)),
            (t.minWidth = Wt(this._config.minWidth)),
            (t.minHeight = Wt(this._config.minHeight)),
            (t.maxWidth = Wt(this._config.maxWidth)),
            (t.maxHeight = Wt(this._config.maxHeight));
        }
        _togglePointerEvents(t) {
          this._pane.style.pointerEvents = t ? "auto" : "none";
        }
        _attachBackdrop() {
          const t = "cdk-overlay-backdrop-showing";
          (this._backdropElement = this._document.createElement("div")),
            this._backdropElement.classList.add("cdk-overlay-backdrop"),
            this._config.backdropClass &&
              this._toggleClasses(
                this._backdropElement,
                this._config.backdropClass,
                !0
              ),
            this._host.parentElement.insertBefore(
              this._backdropElement,
              this._host
            ),
            this._backdropElement.addEventListener(
              "click",
              this._backdropClickHandler
            ),
            "undefined" != typeof requestAnimationFrame
              ? this._ngZone.runOutsideAngular(() => {
                  requestAnimationFrame(() => {
                    this._backdropElement &&
                      this._backdropElement.classList.add(t);
                  });
                })
              : this._backdropElement.classList.add(t);
        }
        _updateStackingOrder() {
          this._host.nextSibling &&
            this._host.parentNode.appendChild(this._host);
        }
        detachBackdrop() {
          let t,
            e = this._backdropElement;
          if (!e) return;
          let n = () => {
            e &&
              (e.removeEventListener("click", this._backdropClickHandler),
              e.removeEventListener("transitionend", n),
              e.parentNode && e.parentNode.removeChild(e)),
              this._backdropElement == e && (this._backdropElement = null),
              this._config.backdropClass &&
                this._toggleClasses(e, this._config.backdropClass, !1),
              clearTimeout(t);
          };
          e.classList.remove("cdk-overlay-backdrop-showing"),
            this._ngZone.runOutsideAngular(() => {
              e.addEventListener("transitionend", n);
            }),
            (e.style.pointerEvents = "none"),
            (t = this._ngZone.runOutsideAngular(() => setTimeout(n, 500)));
        }
        _toggleClasses(t, e, n) {
          const s = t.classList;
          Kt(e).forEach((t) => {
            t && (n ? s.add(t) : s.remove(t));
          });
        }
        _detachContentWhenStable() {
          this._ngZone.runOutsideAngular(() => {
            const t = this._ngZone.onStable
              .pipe(Mr(Object(xr.a)(this._attachments, this._detachments)))
              .subscribe(() => {
                (this._pane &&
                  this._host &&
                  0 !== this._pane.children.length) ||
                  (this._pane &&
                    this._config.panelClass &&
                    this._toggleClasses(
                      this._pane,
                      this._config.panelClass,
                      !1
                    ),
                  this._host &&
                    this._host.parentElement &&
                    ((this._previousHostParent = this._host.parentElement),
                    this._previousHostParent.removeChild(this._host)),
                  t.unsubscribe());
              });
          });
        }
        _disposeScrollStrategy() {
          const t = this._scrollStrategy;
          t && (t.disable(), t.detach && t.detach());
        }
      }
      const xi = "cdk-overlay-connected-position-bounding-box",
        ki = /([A-Za-z%]+)$/;
      class Ti {
        constructor(t, e, n, s, r) {
          (this._viewportRuler = e),
            (this._document = n),
            (this._platform = s),
            (this._overlayContainer = r),
            (this._lastBoundingBoxSize = { width: 0, height: 0 }),
            (this._isPushed = !1),
            (this._canPush = !0),
            (this._growAfterOpen = !1),
            (this._hasFlexibleDimensions = !0),
            (this._positionLocked = !1),
            (this._viewportMargin = 0),
            (this._scrollables = []),
            (this._preferredPositions = []),
            (this._positionChanges = new Pt.a()),
            (this._resizeSubscription = Dt.a.EMPTY),
            (this._offsetX = 0),
            (this._offsetY = 0),
            (this._appliedPanelClasses = []),
            (this.positionChanges = this._positionChanges),
            this.setOrigin(t);
        }
        get positions() {
          return this._preferredPositions;
        }
        attach(t) {
          this._validatePositions(),
            t.hostElement.classList.add(xi),
            (this._overlayRef = t),
            (this._boundingBox = t.hostElement),
            (this._pane = t.overlayElement),
            (this._isDisposed = !1),
            (this._isInitialRender = !0),
            (this._lastPosition = null),
            this._resizeSubscription.unsubscribe(),
            (this._resizeSubscription = this._viewportRuler
              .change()
              .subscribe(() => {
                (this._isInitialRender = !0), this.apply();
              }));
        }
        apply() {
          if (this._isDisposed || !this._platform.isBrowser) return;
          if (
            !this._isInitialRender &&
            this._positionLocked &&
            this._lastPosition
          )
            return void this.reapplyLastPosition();
          this._clearPanelClasses(),
            this._resetOverlayElementStyles(),
            this._resetBoundingBoxStyles(),
            (this._viewportRect = this._getNarrowedViewportRect()),
            (this._originRect = this._getOriginRect()),
            (this._overlayRect = this._pane.getBoundingClientRect());
          const t = this._originRect,
            e = this._overlayRect,
            n = this._viewportRect,
            s = [];
          let r;
          for (let i of this._preferredPositions) {
            let o = this._getOriginPoint(t, i),
              a = this._getOverlayPoint(o, e, i),
              l = this._getOverlayFit(a, e, n, i);
            if (l.isCompletelyWithinViewport)
              return (this._isPushed = !1), void this._applyPosition(i, o);
            this._canFitWithFlexibleDimensions(l, a, n)
              ? s.push({
                  position: i,
                  origin: o,
                  overlayRect: e,
                  boundingBoxRect: this._calculateBoundingBoxRect(o, i),
                })
              : (!r || r.overlayFit.visibleArea < l.visibleArea) &&
                (r = {
                  overlayFit: l,
                  overlayPoint: a,
                  originPoint: o,
                  position: i,
                  overlayRect: e,
                });
          }
          if (s.length) {
            let t = null,
              e = -1;
            for (const n of s) {
              const s =
                n.boundingBoxRect.width *
                n.boundingBoxRect.height *
                (n.position.weight || 1);
              s > e && ((e = s), (t = n));
            }
            return (
              (this._isPushed = !1),
              void this._applyPosition(t.position, t.origin)
            );
          }
          if (this._canPush)
            return (
              (this._isPushed = !0),
              void this._applyPosition(r.position, r.originPoint)
            );
          this._applyPosition(r.position, r.originPoint);
        }
        detach() {
          this._clearPanelClasses(),
            (this._lastPosition = null),
            (this._previousPushAmount = null),
            this._resizeSubscription.unsubscribe();
        }
        dispose() {
          this._isDisposed ||
            (this._boundingBox &&
              Ri(this._boundingBox.style, {
                top: "",
                left: "",
                right: "",
                bottom: "",
                height: "",
                width: "",
                alignItems: "",
                justifyContent: "",
              }),
            this._pane && this._resetOverlayElementStyles(),
            this._overlayRef &&
              this._overlayRef.hostElement.classList.remove(xi),
            this.detach(),
            this._positionChanges.complete(),
            (this._overlayRef = this._boundingBox = null),
            (this._isDisposed = !0));
        }
        reapplyLastPosition() {
          if (
            !this._isDisposed &&
            (!this._platform || this._platform.isBrowser)
          ) {
            (this._originRect = this._getOriginRect()),
              (this._overlayRect = this._pane.getBoundingClientRect()),
              (this._viewportRect = this._getNarrowedViewportRect());
            const t = this._lastPosition || this._preferredPositions[0],
              e = this._getOriginPoint(this._originRect, t);
            this._applyPosition(t, e);
          }
        }
        withScrollableContainers(t) {
          return (this._scrollables = t), this;
        }
        withPositions(t) {
          return (
            (this._preferredPositions = t),
            -1 === t.indexOf(this._lastPosition) && (this._lastPosition = null),
            this._validatePositions(),
            this
          );
        }
        withViewportMargin(t) {
          return (this._viewportMargin = t), this;
        }
        withFlexibleDimensions(t = !0) {
          return (this._hasFlexibleDimensions = t), this;
        }
        withGrowAfterOpen(t = !0) {
          return (this._growAfterOpen = t), this;
        }
        withPush(t = !0) {
          return (this._canPush = t), this;
        }
        withLockedPosition(t = !0) {
          return (this._positionLocked = t), this;
        }
        setOrigin(t) {
          return (this._origin = t), this;
        }
        withDefaultOffsetX(t) {
          return (this._offsetX = t), this;
        }
        withDefaultOffsetY(t) {
          return (this._offsetY = t), this;
        }
        withTransformOriginOn(t) {
          return (this._transformOriginSelector = t), this;
        }
        _getOriginPoint(t, e) {
          let n, s;
          if ("center" == e.originX) n = t.left + t.width / 2;
          else {
            const s = this._isRtl() ? t.right : t.left,
              r = this._isRtl() ? t.left : t.right;
            n = "start" == e.originX ? s : r;
          }
          return (
            (s =
              "center" == e.originY
                ? t.top + t.height / 2
                : "top" == e.originY
                ? t.top
                : t.bottom),
            { x: n, y: s }
          );
        }
        _getOverlayPoint(t, e, n) {
          let s, r;
          return (
            (s =
              "center" == n.overlayX
                ? -e.width / 2
                : "start" === n.overlayX
                ? this._isRtl()
                  ? -e.width
                  : 0
                : this._isRtl()
                ? 0
                : -e.width),
            (r =
              "center" == n.overlayY
                ? -e.height / 2
                : "top" == n.overlayY
                ? 0
                : -e.height),
            { x: t.x + s, y: t.y + r }
          );
        }
        _getOverlayFit(t, e, n, s) {
          let { x: r, y: i } = t,
            o = this._getOffset(s, "x"),
            a = this._getOffset(s, "y");
          o && (r += o), a && (i += a);
          let l = 0 - i,
            c = i + e.height - n.height,
            u = this._subtractOverflows(e.width, 0 - r, r + e.width - n.width),
            h = this._subtractOverflows(e.height, l, c),
            d = u * h;
          return {
            visibleArea: d,
            isCompletelyWithinViewport: e.width * e.height === d,
            fitsInViewportVertically: h === e.height,
            fitsInViewportHorizontally: u == e.width,
          };
        }
        _canFitWithFlexibleDimensions(t, e, n) {
          if (this._hasFlexibleDimensions) {
            const s = n.bottom - e.y,
              r = n.right - e.x,
              i = Ai(this._overlayRef.getConfig().minHeight),
              o = Ai(this._overlayRef.getConfig().minWidth),
              a = t.fitsInViewportHorizontally || (null != o && o <= r);
            return (t.fitsInViewportVertically || (null != i && i <= s)) && a;
          }
          return !1;
        }
        _pushOverlayOnScreen(t, e, n) {
          if (this._previousPushAmount && this._positionLocked)
            return {
              x: t.x + this._previousPushAmount.x,
              y: t.y + this._previousPushAmount.y,
            };
          const s = this._viewportRect,
            r = Math.max(t.x + e.width - s.width, 0),
            i = Math.max(t.y + e.height - s.height, 0),
            o = Math.max(s.top - n.top - t.y, 0),
            a = Math.max(s.left - n.left - t.x, 0);
          let l = 0,
            c = 0;
          return (
            (l =
              e.width <= s.width
                ? a || -r
                : t.x < this._viewportMargin
                ? s.left - n.left - t.x
                : 0),
            (c =
              e.height <= s.height
                ? o || -i
                : t.y < this._viewportMargin
                ? s.top - n.top - t.y
                : 0),
            (this._previousPushAmount = { x: l, y: c }),
            { x: t.x + l, y: t.y + c }
          );
        }
        _applyPosition(t, e) {
          if (
            (this._setTransformOrigin(t),
            this._setOverlayElementStyles(e, t),
            this._setBoundingBoxStyles(e, t),
            t.panelClass && this._addPanelClasses(t.panelClass),
            (this._lastPosition = t),
            this._positionChanges.observers.length)
          ) {
            const e = this._getScrollVisibility(),
              n = new yi(t, e);
            this._positionChanges.next(n);
          }
          this._isInitialRender = !1;
        }
        _setTransformOrigin(t) {
          if (!this._transformOriginSelector) return;
          const e = this._boundingBox.querySelectorAll(
            this._transformOriginSelector
          );
          let n,
            s = t.overlayY;
          n =
            "center" === t.overlayX
              ? "center"
              : this._isRtl()
              ? "start" === t.overlayX
                ? "right"
                : "left"
              : "start" === t.overlayX
              ? "left"
              : "right";
          for (let r = 0; r < e.length; r++)
            e[r].style.transformOrigin = `${n} ${s}`;
        }
        _calculateBoundingBoxRect(t, e) {
          const n = this._viewportRect,
            s = this._isRtl();
          let r, i, o, a, l, c;
          if ("top" === e.overlayY)
            (i = t.y), (r = n.height - i + this._viewportMargin);
          else if ("bottom" === e.overlayY)
            (o = n.height - t.y + 2 * this._viewportMargin),
              (r = n.height - o + this._viewportMargin);
          else {
            const e = Math.min(n.bottom - t.y + n.top, t.y),
              s = this._lastBoundingBoxSize.height;
            (r = 2 * e),
              (i = t.y - e),
              r > s &&
                !this._isInitialRender &&
                !this._growAfterOpen &&
                (i = t.y - s / 2);
          }
          if (("end" === e.overlayX && !s) || ("start" === e.overlayX && s))
            (c = n.width - t.x + this._viewportMargin),
              (a = t.x - this._viewportMargin);
          else if (
            ("start" === e.overlayX && !s) ||
            ("end" === e.overlayX && s)
          )
            (l = t.x), (a = n.right - t.x);
          else {
            const e = Math.min(n.right - t.x + n.left, t.x),
              s = this._lastBoundingBoxSize.width;
            (a = 2 * e),
              (l = t.x - e),
              a > s &&
                !this._isInitialRender &&
                !this._growAfterOpen &&
                (l = t.x - s / 2);
          }
          return { top: i, left: l, bottom: o, right: c, width: a, height: r };
        }
        _setBoundingBoxStyles(t, e) {
          const n = this._calculateBoundingBoxRect(t, e);
          this._isInitialRender ||
            this._growAfterOpen ||
            ((n.height = Math.min(n.height, this._lastBoundingBoxSize.height)),
            (n.width = Math.min(n.width, this._lastBoundingBoxSize.width)));
          const s = {};
          if (this._hasExactPosition())
            (s.top = s.left = "0"),
              (s.bottom = s.right = s.maxHeight = s.maxWidth = ""),
              (s.width = s.height = "100%");
          else {
            const t = this._overlayRef.getConfig().maxHeight,
              r = this._overlayRef.getConfig().maxWidth;
            (s.height = Wt(n.height)),
              (s.top = Wt(n.top)),
              (s.bottom = Wt(n.bottom)),
              (s.width = Wt(n.width)),
              (s.left = Wt(n.left)),
              (s.right = Wt(n.right)),
              (s.alignItems =
                "center" === e.overlayX
                  ? "center"
                  : "end" === e.overlayX
                  ? "flex-end"
                  : "flex-start"),
              (s.justifyContent =
                "center" === e.overlayY
                  ? "center"
                  : "bottom" === e.overlayY
                  ? "flex-end"
                  : "flex-start"),
              t && (s.maxHeight = Wt(t)),
              r && (s.maxWidth = Wt(r));
          }
          (this._lastBoundingBoxSize = n), Ri(this._boundingBox.style, s);
        }
        _resetBoundingBoxStyles() {
          Ri(this._boundingBox.style, {
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            height: "",
            width: "",
            alignItems: "",
            justifyContent: "",
          });
        }
        _resetOverlayElementStyles() {
          Ri(this._pane.style, {
            top: "",
            left: "",
            bottom: "",
            right: "",
            position: "",
            transform: "",
          });
        }
        _setOverlayElementStyles(t, e) {
          const n = {},
            s = this._hasExactPosition(),
            r = this._hasFlexibleDimensions,
            i = this._overlayRef.getConfig();
          if (s) {
            const s = this._viewportRuler.getViewportScrollPosition();
            Ri(n, this._getExactOverlayY(e, t, s)),
              Ri(n, this._getExactOverlayX(e, t, s));
          } else n.position = "static";
          let o = "",
            a = this._getOffset(e, "x"),
            l = this._getOffset(e, "y");
          a && (o += `translateX(${a}px) `),
            l && (o += `translateY(${l}px)`),
            (n.transform = o.trim()),
            i.maxHeight &&
              (s ? (n.maxHeight = Wt(i.maxHeight)) : r && (n.maxHeight = "")),
            i.maxWidth &&
              (s ? (n.maxWidth = Wt(i.maxWidth)) : r && (n.maxWidth = "")),
            Ri(this._pane.style, n);
        }
        _getExactOverlayY(t, e, n) {
          let s = { top: "", bottom: "" },
            r = this._getOverlayPoint(e, this._overlayRect, t);
          this._isPushed &&
            (r = this._pushOverlayOnScreen(r, this._overlayRect, n));
          let i = this._overlayContainer
            .getContainerElement()
            .getBoundingClientRect().top;
          return (
            (r.y -= i),
            "bottom" === t.overlayY
              ? (s.bottom =
                  this._document.documentElement.clientHeight -
                  (r.y + this._overlayRect.height) +
                  "px")
              : (s.top = Wt(r.y)),
            s
          );
        }
        _getExactOverlayX(t, e, n) {
          let s,
            r = { left: "", right: "" },
            i = this._getOverlayPoint(e, this._overlayRect, t);
          return (
            this._isPushed &&
              (i = this._pushOverlayOnScreen(i, this._overlayRect, n)),
            (s = this._isRtl()
              ? "end" === t.overlayX
                ? "left"
                : "right"
              : "end" === t.overlayX
              ? "right"
              : "left"),
            "right" === s
              ? (r.right =
                  this._document.documentElement.clientWidth -
                  (i.x + this._overlayRect.width) +
                  "px")
              : (r.left = Wt(i.x)),
            r
          );
        }
        _getScrollVisibility() {
          const t = this._getOriginRect(),
            e = this._pane.getBoundingClientRect(),
            n = this._scrollables.map((t) =>
              t.getElementRef().nativeElement.getBoundingClientRect()
            );
          return {
            isOriginClipped: fi(t, n),
            isOriginOutsideView: pi(t, n),
            isOverlayClipped: fi(e, n),
            isOverlayOutsideView: pi(e, n),
          };
        }
        _subtractOverflows(t, ...e) {
          return e.reduce((t, e) => t - Math.max(e, 0), t);
        }
        _getNarrowedViewportRect() {
          const t = this._document.documentElement.clientWidth,
            e = this._document.documentElement.clientHeight,
            n = this._viewportRuler.getViewportScrollPosition();
          return {
            top: n.top + this._viewportMargin,
            left: n.left + this._viewportMargin,
            right: n.left + t - this._viewportMargin,
            bottom: n.top + e - this._viewportMargin,
            width: t - 2 * this._viewportMargin,
            height: e - 2 * this._viewportMargin,
          };
        }
        _isRtl() {
          return "rtl" === this._overlayRef.getDirection();
        }
        _hasExactPosition() {
          return !this._hasFlexibleDimensions || this._isPushed;
        }
        _getOffset(t, e) {
          return "x" === e
            ? null == t.offsetX
              ? this._offsetX
              : t.offsetX
            : null == t.offsetY
            ? this._offsetY
            : t.offsetY;
        }
        _validatePositions() {}
        _addPanelClasses(t) {
          this._pane &&
            Kt(t).forEach((t) => {
              "" !== t &&
                -1 === this._appliedPanelClasses.indexOf(t) &&
                (this._appliedPanelClasses.push(t),
                this._pane.classList.add(t));
            });
        }
        _clearPanelClasses() {
          this._pane &&
            (this._appliedPanelClasses.forEach((t) => {
              this._pane.classList.remove(t);
            }),
            (this._appliedPanelClasses = []));
        }
        _getOriginRect() {
          const t = this._origin;
          if (t instanceof s.l) return t.nativeElement.getBoundingClientRect();
          if (t instanceof Element) return t.getBoundingClientRect();
          const e = t.width || 0,
            n = t.height || 0;
          return {
            top: t.y,
            bottom: t.y + n,
            left: t.x,
            right: t.x + e,
            height: n,
            width: e,
          };
        }
      }
      function Ri(t, e) {
        for (let n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t;
      }
      function Ai(t) {
        if ("number" != typeof t && null != t) {
          const [e, n] = t.split(ki);
          return n && "px" !== n ? null : parseFloat(e);
        }
        return t || null;
      }
      class Ii {
        constructor(t, e, n, s, r, i, o) {
          (this._preferredPositions = []),
            (this._positionStrategy = new Ti(n, s, r, i, o)
              .withFlexibleDimensions(!1)
              .withPush(!1)
              .withViewportMargin(0)),
            this.withFallbackPosition(t, e),
            (this.onPositionChange = this._positionStrategy.positionChanges);
        }
        get positions() {
          return this._preferredPositions;
        }
        attach(t) {
          (this._overlayRef = t),
            this._positionStrategy.attach(t),
            this._direction &&
              (t.setDirection(this._direction), (this._direction = null));
        }
        dispose() {
          this._positionStrategy.dispose();
        }
        detach() {
          this._positionStrategy.detach();
        }
        apply() {
          this._positionStrategy.apply();
        }
        recalculateLastPosition() {
          this._positionStrategy.reapplyLastPosition();
        }
        withScrollableContainers(t) {
          this._positionStrategy.withScrollableContainers(t);
        }
        withFallbackPosition(t, e, n, s) {
          const r = new bi(t, e, n, s);
          return (
            this._preferredPositions.push(r),
            this._positionStrategy.withPositions(this._preferredPositions),
            this
          );
        }
        withDirection(t) {
          return (
            this._overlayRef
              ? this._overlayRef.setDirection(t)
              : (this._direction = t),
            this
          );
        }
        withOffsetX(t) {
          return this._positionStrategy.withDefaultOffsetX(t), this;
        }
        withOffsetY(t) {
          return this._positionStrategy.withDefaultOffsetY(t), this;
        }
        withLockedPosition(t) {
          return this._positionStrategy.withLockedPosition(t), this;
        }
        withPositions(t) {
          return (
            (this._preferredPositions = t.slice()),
            this._positionStrategy.withPositions(this._preferredPositions),
            this
          );
        }
        setOrigin(t) {
          return this._positionStrategy.setOrigin(t), this;
        }
      }
      const ji = "cdk-global-overlay-wrapper";
      class Pi {
        constructor() {
          (this._cssPosition = "static"),
            (this._topOffset = ""),
            (this._bottomOffset = ""),
            (this._leftOffset = ""),
            (this._rightOffset = ""),
            (this._alignItems = ""),
            (this._justifyContent = ""),
            (this._width = ""),
            (this._height = "");
        }
        attach(t) {
          const e = t.getConfig();
          (this._overlayRef = t),
            this._width && !e.width && t.updateSize({ width: this._width }),
            this._height && !e.height && t.updateSize({ height: this._height }),
            t.hostElement.classList.add(ji),
            (this._isDisposed = !1);
        }
        top(t = "") {
          return (
            (this._bottomOffset = ""),
            (this._topOffset = t),
            (this._alignItems = "flex-start"),
            this
          );
        }
        left(t = "") {
          return (
            (this._rightOffset = ""),
            (this._leftOffset = t),
            (this._justifyContent = "flex-start"),
            this
          );
        }
        bottom(t = "") {
          return (
            (this._topOffset = ""),
            (this._bottomOffset = t),
            (this._alignItems = "flex-end"),
            this
          );
        }
        right(t = "") {
          return (
            (this._leftOffset = ""),
            (this._rightOffset = t),
            (this._justifyContent = "flex-end"),
            this
          );
        }
        width(t = "") {
          return (
            this._overlayRef
              ? this._overlayRef.updateSize({ width: t })
              : (this._width = t),
            this
          );
        }
        height(t = "") {
          return (
            this._overlayRef
              ? this._overlayRef.updateSize({ height: t })
              : (this._height = t),
            this
          );
        }
        centerHorizontally(t = "") {
          return this.left(t), (this._justifyContent = "center"), this;
        }
        centerVertically(t = "") {
          return this.top(t), (this._alignItems = "center"), this;
        }
        apply() {
          if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
          const t = this._overlayRef.overlayElement.style,
            e = this._overlayRef.hostElement.style,
            n = this._overlayRef.getConfig(),
            { width: s, height: r, maxWidth: i, maxHeight: o } = n,
            a = !(
              ("100%" !== s && "100vw" !== s) ||
              (i && "100%" !== i && "100vw" !== i)
            ),
            l = !(
              ("100%" !== r && "100vh" !== r) ||
              (o && "100%" !== o && "100vh" !== o)
            );
          (t.position = this._cssPosition),
            (t.marginLeft = a ? "0" : this._leftOffset),
            (t.marginTop = l ? "0" : this._topOffset),
            (t.marginBottom = this._bottomOffset),
            (t.marginRight = this._rightOffset),
            a
              ? (e.justifyContent = "flex-start")
              : "center" === this._justifyContent
              ? (e.justifyContent = "center")
              : "rtl" === this._overlayRef.getConfig().direction
              ? "flex-start" === this._justifyContent
                ? (e.justifyContent = "flex-end")
                : "flex-end" === this._justifyContent &&
                  (e.justifyContent = "flex-start")
              : (e.justifyContent = this._justifyContent),
            (e.alignItems = l ? "flex-start" : this._alignItems);
        }
        dispose() {
          if (this._isDisposed || !this._overlayRef) return;
          const t = this._overlayRef.overlayElement.style,
            e = this._overlayRef.hostElement,
            n = e.style;
          e.classList.remove(ji),
            (n.justifyContent = n.alignItems = t.marginTop = t.marginBottom = t.marginLeft = t.marginRight = t.position =
              ""),
            (this._overlayRef = null),
            (this._isDisposed = !0);
        }
      }
      let Di = (() => {
          class t {
            constructor(t, e, n, s) {
              (this._viewportRuler = t),
                (this._document = e),
                (this._platform = n),
                (this._overlayContainer = s);
            }
            global() {
              return new Pi();
            }
            connectedTo(t, e, n) {
              return new Ii(
                e,
                n,
                t,
                this._viewportRuler,
                this._document,
                this._platform,
                this._overlayContainer
              );
            }
            flexibleConnectedTo(t) {
              return new Ti(
                t,
                this._viewportRuler,
                this._document,
                this._platform,
                this._overlayContainer
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Rb(ai), s.Rb(i.c), s.Rb(At), s.Rb(Ei));
            }),
            (t.ɵprov = Object(s.Gb)({
              factory: function () {
                return new t(
                  Object(s.Rb)(ai),
                  Object(s.Rb)(i.c),
                  Object(s.Rb)(At),
                  Object(s.Rb)(Ei)
                );
              },
              token: t,
              providedIn: "root",
            })),
            t
          );
        })(),
        Ni = 0,
        Li = (() => {
          class t {
            constructor(t, e, n, s, r, i, o, a, l, c, u) {
              (this.scrollStrategies = t),
                (this._overlayContainer = e),
                (this._componentFactoryResolver = n),
                (this._positionBuilder = s),
                (this._keyboardDispatcher = r),
                (this._injector = i),
                (this._ngZone = o),
                (this._document = a),
                (this._directionality = l),
                (this._location = c),
                (this._outsideClickDispatcher = u);
            }
            create(t) {
              const e = this._createHostElement(),
                n = this._createPaneElement(e),
                s = this._createPortalOutlet(n),
                r = new _i(t);
              return (
                (r.direction = r.direction || this._directionality.value),
                new Oi(
                  s,
                  e,
                  n,
                  r,
                  this._ngZone,
                  this._keyboardDispatcher,
                  this._document,
                  this._location,
                  this._outsideClickDispatcher
                )
              );
            }
            position() {
              return this._positionBuilder;
            }
            _createPaneElement(t) {
              const e = this._document.createElement("div");
              return (
                (e.id = "cdk-overlay-" + Ni++),
                e.classList.add("cdk-overlay-pane"),
                t.appendChild(e),
                e
              );
            }
            _createHostElement() {
              const t = this._document.createElement("div");
              return (
                this._overlayContainer.getContainerElement().appendChild(t), t
              );
            }
            _createPortalOutlet(t) {
              return (
                this._appRef || (this._appRef = this._injector.get(s.g)),
                new Qr(
                  t,
                  this._componentFactoryResolver,
                  this._appRef,
                  this._injector,
                  this._document
                )
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                s.Rb(gi),
                s.Rb(Ei),
                s.Rb(s.j),
                s.Rb(Di),
                s.Rb(wi),
                s.Rb(s.r),
                s.Rb(s.z),
                s.Rb(i.c),
                s.Rb(oe),
                s.Rb(i.f),
                s.Rb(Ci)
              );
            }),
            (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      const Mi = {
        provide: new s.q("cdk-connected-overlay-scroll-strategy"),
        deps: [Li],
        useFactory: function (t) {
          return () => t.scrollStrategies.reposition();
        },
      };
      let Fi = (() => {
        class t {}
        return (
          (t.ɵmod = s.Ib({ type: t })),
          (t.ɵinj = s.Hb({
            factory: function (e) {
              return new (e || t)();
            },
            providers: [Li, Mi],
            imports: [[ae, Zr, ci], ci],
          })),
          t
        );
      })();
      const Vi = ["mat-menu-item", ""],
        Hi = ["*"];
      function Ui(t, e) {
        if (1 & t) {
          const t = s.Ob();
          s.Nb(0, "div", 0),
            s.Ub("keydown", function (e) {
              return s.ic(t), s.Wb()._handleKeydown(e);
            })("click", function () {
              return s.ic(t), s.Wb().closed.emit("click");
            })("@transformMenu.start", function (e) {
              return s.ic(t), s.Wb()._onAnimationStart(e);
            })("@transformMenu.done", function (e) {
              return s.ic(t), s.Wb()._onAnimationDone(e);
            }),
            s.Nb(1, "div", 1),
            s.ac(2),
            s.Mb(),
            s.Mb();
        }
        if (2 & t) {
          const t = s.Wb();
          s.cc("id", t.panelId)("ngClass", t._classList)(
            "@transformMenu",
            t._panelAnimationState
          ),
            s.Ab("aria-label", t.ariaLabel || null)(
              "aria-labelledby",
              t.ariaLabelledby || null
            )("aria-describedby", t.ariaDescribedby || null);
        }
      }
      const zi = {
          transformMenu: de("transformMenu", [
            _e("void", ge({ opacity: 0, transform: "scale(0.8)" })),
            be(
              "void => enter",
              fe([
                ye(
                  ".mat-menu-content, .mat-mdc-menu-content",
                  pe("100ms linear", ge({ opacity: 1 }))
                ),
                pe(
                  "120ms cubic-bezier(0, 0, 0.2, 1)",
                  ge({ transform: "scale(1)" })
                ),
              ])
            ),
            be("* => void", pe("100ms 25ms linear", ge({ opacity: 0 }))),
          ]),
          fadeInItems: de("fadeInItems", [
            _e("showing", ge({ opacity: 1 })),
            be("void => *", [
              ge({ opacity: 0 }),
              pe("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)"),
            ]),
          ]),
        },
        Bi = new s.q("MatMenuContent"),
        qi = new s.q("MAT_MENU_PANEL");
      class $i {}
      const Ki = nr(tr($i));
      let Wi = (() => {
        class t extends Ki {
          constructor(t, e, n, s) {
            super(),
              (this._elementRef = t),
              (this._focusMonitor = n),
              (this._parentMenu = s),
              (this.role = "menuitem"),
              (this._hovered = new Pt.a()),
              (this._focused = new Pt.a()),
              (this._highlighted = !1),
              (this._triggersSubmenu = !1),
              s && s.addItem && s.addItem(this);
          }
          focus(t = "program", e) {
            this._focusMonitor
              ? this._focusMonitor.focusVia(this._getHostElement(), t, e)
              : this._getHostElement().focus(e),
              this._focused.next(this);
          }
          ngAfterViewInit() {
            this._focusMonitor &&
              this._focusMonitor.monitor(this._elementRef, !1);
          }
          ngOnDestroy() {
            this._focusMonitor &&
              this._focusMonitor.stopMonitoring(this._elementRef),
              this._parentMenu &&
                this._parentMenu.removeItem &&
                this._parentMenu.removeItem(this),
              this._hovered.complete(),
              this._focused.complete();
          }
          _getTabIndex() {
            return this.disabled ? "-1" : "0";
          }
          _getHostElement() {
            return this._elementRef.nativeElement;
          }
          _checkDisabled(t) {
            this.disabled && (t.preventDefault(), t.stopPropagation());
          }
          _handleMouseEnter() {
            this._hovered.next(this);
          }
          getLabel() {
            var t, e;
            const n = this._elementRef.nativeElement.cloneNode(!0),
              s = n.querySelectorAll("mat-icon, .material-icons");
            for (let r = 0; r < s.length; r++) {
              const e = s[r];
              null === (t = e.parentNode) || void 0 === t || t.removeChild(e);
            }
            return (
              (null === (e = n.textContent) || void 0 === e
                ? void 0
                : e.trim()) || ""
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Kb(s.l), s.Kb(i.c), s.Kb(Jt), s.Kb(qi, 8));
          }),
          (t.ɵcmp = s.Eb({
            type: t,
            selectors: [["", "mat-menu-item", ""]],
            hostAttrs: [1, "mat-focus-indicator"],
            hostVars: 10,
            hostBindings: function (t, e) {
              1 & t &&
                s.Ub("click", function (t) {
                  return e._checkDisabled(t);
                })("mouseenter", function () {
                  return e._handleMouseEnter();
                }),
                2 & t &&
                  (s.Ab("role", e.role)("tabindex", e._getTabIndex())(
                    "aria-disabled",
                    e.disabled.toString()
                  )("disabled", e.disabled || null),
                  s.Cb("mat-menu-item", !0)(
                    "mat-menu-item-highlighted",
                    e._highlighted
                  )("mat-menu-item-submenu-trigger", e._triggersSubmenu));
            },
            inputs: {
              disabled: "disabled",
              disableRipple: "disableRipple",
              role: "role",
            },
            exportAs: ["matMenuItem"],
            features: [s.wb],
            attrs: Vi,
            ngContentSelectors: Hi,
            decls: 2,
            vars: 2,
            consts: [
              [
                "matRipple",
                "",
                1,
                "mat-menu-ripple",
                3,
                "matRippleDisabled",
                "matRippleTrigger",
              ],
            ],
            template: function (t, e) {
              1 & t && (s.bc(), s.ac(0), s.Lb(1, "div", 0)),
                2 & t &&
                  (s.zb(1),
                  s.cc("matRippleDisabled", e.disableRipple || e.disabled)(
                    "matRippleTrigger",
                    e._getHostElement()
                  ));
            },
            directives: [ur],
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        );
      })();
      const Gi = new s.q("mat-menu-default-options", {
        providedIn: "root",
        factory: function () {
          return {
            overlapTrigger: !1,
            xPosition: "after",
            yPosition: "below",
            backdropClass: "cdk-overlay-transparent-backdrop",
          };
        },
      });
      let Qi = 0,
        Zi = (() => {
          class t {
            constructor(t, e, n) {
              (this._elementRef = t),
                (this._ngZone = e),
                (this._defaultOptions = n),
                (this._xPosition = this._defaultOptions.xPosition),
                (this._yPosition = this._defaultOptions.yPosition),
                (this._directDescendantItems = new s.D()),
                (this._tabSubscription = Dt.a.EMPTY),
                (this._classList = {}),
                (this._panelAnimationState = "void"),
                (this._animationDone = new Pt.a()),
                (this.overlayPanelClass =
                  this._defaultOptions.overlayPanelClass || ""),
                (this.backdropClass = this._defaultOptions.backdropClass),
                (this._overlapTrigger = this._defaultOptions.overlapTrigger),
                (this._hasBackdrop = this._defaultOptions.hasBackdrop),
                (this.closed = new s.n()),
                (this.close = this.closed),
                (this.panelId = "mat-menu-panel-" + Qi++);
            }
            get xPosition() {
              return this._xPosition;
            }
            set xPosition(t) {
              (this._xPosition = t), this.setPositionClasses();
            }
            get yPosition() {
              return this._yPosition;
            }
            set yPosition(t) {
              (this._yPosition = t), this.setPositionClasses();
            }
            get overlapTrigger() {
              return this._overlapTrigger;
            }
            set overlapTrigger(t) {
              this._overlapTrigger = $t(t);
            }
            get hasBackdrop() {
              return this._hasBackdrop;
            }
            set hasBackdrop(t) {
              this._hasBackdrop = $t(t);
            }
            set panelClass(t) {
              const e = this._previousPanelClass;
              e &&
                e.length &&
                e.split(" ").forEach((t) => {
                  this._classList[t] = !1;
                }),
                (this._previousPanelClass = t),
                t &&
                  t.length &&
                  (t.split(" ").forEach((t) => {
                    this._classList[t] = !0;
                  }),
                  (this._elementRef.nativeElement.className = ""));
            }
            get classList() {
              return this.panelClass;
            }
            set classList(t) {
              this.panelClass = t;
            }
            ngOnInit() {
              this.setPositionClasses();
            }
            ngAfterContentInit() {
              this._updateDirectDescendants(),
                (this._keyManager = new Qt(this._directDescendantItems)
                  .withWrap()
                  .withTypeAhead()
                  .withHomeAndEnd()),
                (this._tabSubscription = this._keyManager.tabOut.subscribe(() =>
                  this.closed.emit("tab")
                )),
                this._directDescendantItems.changes
                  .pipe(
                    Object(ce.a)(this._directDescendantItems),
                    Object(Nr.a)((t) =>
                      Object(xr.a)(...t.map((t) => t._focused))
                    )
                  )
                  .subscribe((t) => this._keyManager.updateActiveItem(t));
            }
            ngOnDestroy() {
              this._directDescendantItems.destroy(),
                this._tabSubscription.unsubscribe(),
                this.closed.complete();
            }
            _hovered() {
              return this._directDescendantItems.changes.pipe(
                Object(ce.a)(this._directDescendantItems),
                Object(Nr.a)((t) => Object(xr.a)(...t.map((t) => t._hovered)))
              );
            }
            addItem(t) {}
            removeItem(t) {}
            _handleKeydown(t) {
              const e = t.keyCode,
                n = this._keyManager;
              switch (e) {
                case 27:
                  Nt(t) || (t.preventDefault(), this.closed.emit("keydown"));
                  break;
                case 37:
                  this.parentMenu &&
                    "ltr" === this.direction &&
                    this.closed.emit("keydown");
                  break;
                case 39:
                  this.parentMenu &&
                    "rtl" === this.direction &&
                    this.closed.emit("keydown");
                  break;
                default:
                  (38 !== e && 40 !== e) || n.setFocusOrigin("keyboard"),
                    n.onKeydown(t);
              }
            }
            focusFirstItem(t = "program") {
              this.lazyContent
                ? this._ngZone.onStable
                    .pipe(Object(qt.a)(1))
                    .subscribe(() => this._focusFirstItem(t))
                : this._focusFirstItem(t);
            }
            _focusFirstItem(t) {
              const e = this._keyManager;
              if (
                (e.setFocusOrigin(t).setFirstItemActive(),
                !e.activeItem && this._directDescendantItems.length)
              ) {
                let t = this._directDescendantItems.first._getHostElement()
                  .parentElement;
                for (; t; ) {
                  if ("menu" === t.getAttribute("role")) {
                    t.focus();
                    break;
                  }
                  t = t.parentElement;
                }
              }
            }
            resetActiveItem() {
              this._keyManager.setActiveItem(-1);
            }
            setElevation(t) {
              const e = "mat-elevation-z" + Math.min(4 + t, 24),
                n = Object.keys(this._classList).find((t) =>
                  t.startsWith("mat-elevation-z")
                );
              (n && n !== this._previousElevation) ||
                (this._previousElevation &&
                  (this._classList[this._previousElevation] = !1),
                (this._classList[e] = !0),
                (this._previousElevation = e));
            }
            setPositionClasses(t = this.xPosition, e = this.yPosition) {
              const n = this._classList;
              (n["mat-menu-before"] = "before" === t),
                (n["mat-menu-after"] = "after" === t),
                (n["mat-menu-above"] = "above" === e),
                (n["mat-menu-below"] = "below" === e);
            }
            _startAnimation() {
              this._panelAnimationState = "enter";
            }
            _resetAnimation() {
              this._panelAnimationState = "void";
            }
            _onAnimationDone(t) {
              this._animationDone.next(t), (this._isAnimating = !1);
            }
            _onAnimationStart(t) {
              (this._isAnimating = !0),
                "enter" === t.toState &&
                  0 === this._keyManager.activeItemIndex &&
                  (t.element.scrollTop = 0);
            }
            _updateDirectDescendants() {
              this._allItems.changes
                .pipe(Object(ce.a)(this._allItems))
                .subscribe((t) => {
                  this._directDescendantItems.reset(
                    t.filter((t) => t._parentMenu === this)
                  ),
                    this._directDescendantItems.notifyOnChanges();
                });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Kb(s.l), s.Kb(s.z), s.Kb(Gi));
            }),
            (t.ɵdir = s.Fb({
              type: t,
              contentQueries: function (t, e, n) {
                var r;
                1 & t && (s.Db(n, Bi, !0), s.Db(n, Wi, !0), s.Db(n, Wi, !1)),
                  2 & t &&
                    (s.gc((r = s.Vb())) && (e.lazyContent = r.first),
                    s.gc((r = s.Vb())) && (e._allItems = r),
                    s.gc((r = s.Vb())) && (e.items = r));
              },
              viewQuery: function (t, e) {
                var n;
                1 & t && s.rc(s.L, !0),
                  2 & t && s.gc((n = s.Vb())) && (e.templateRef = n.first);
              },
              inputs: {
                backdropClass: "backdropClass",
                xPosition: "xPosition",
                yPosition: "yPosition",
                overlapTrigger: "overlapTrigger",
                hasBackdrop: "hasBackdrop",
                panelClass: ["class", "panelClass"],
                classList: "classList",
                ariaLabel: ["aria-label", "ariaLabel"],
                ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
                ariaDescribedby: ["aria-describedby", "ariaDescribedby"],
              },
              outputs: { closed: "closed", close: "close" },
            })),
            t
          );
        })(),
        Yi = (() => {
          class t extends Zi {}
          return (
            (t.ɵfac = function (e) {
              return Xi(e || t);
            }),
            (t.ɵdir = s.Fb({ type: t, features: [s.wb] })),
            t
          );
        })();
      const Xi = s.Pb(Yi);
      let Ji = (() => {
        class t extends Yi {
          constructor(t, e, n) {
            super(t, e, n);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Kb(s.l), s.Kb(s.z), s.Kb(Gi));
          }),
          (t.ɵcmp = s.Eb({
            type: t,
            selectors: [["mat-menu"]],
            exportAs: ["matMenu"],
            features: [
              s.yb([
                { provide: qi, useExisting: Yi },
                { provide: Yi, useExisting: t },
              ]),
              s.wb,
            ],
            ngContentSelectors: Hi,
            decls: 1,
            vars: 0,
            consts: [
              [
                "tabindex",
                "-1",
                "role",
                "menu",
                1,
                "mat-menu-panel",
                3,
                "id",
                "ngClass",
                "keydown",
                "click",
              ],
              [1, "mat-menu-content"],
            ],
            template: function (t, e) {
              1 & t && (s.bc(), s.nc(0, Ui, 3, 6, "ng-template"));
            },
            directives: [i.h],
            styles: [
              '.mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:"";display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n',
            ],
            encapsulation: 2,
            data: { animation: [zi.transformMenu, zi.fadeInItems] },
            changeDetection: 0,
          })),
          t
        );
      })();
      const to = new s.q("mat-menu-scroll-strategy"),
        eo = {
          provide: to,
          deps: [Li],
          useFactory: function (t) {
            return () => t.scrollStrategies.reposition();
          },
        },
        no = jt({ passive: !0 });
      let so = (() => {
          class t {
            constructor(t, e, n, r, i, o, a, l) {
              (this._overlay = t),
                (this._element = e),
                (this._viewContainerRef = n),
                (this._parentMenu = i),
                (this._menuItemInstance = o),
                (this._dir = a),
                (this._focusMonitor = l),
                (this._overlayRef = null),
                (this._menuOpen = !1),
                (this._closingActionsSubscription = Dt.a.EMPTY),
                (this._hoverSubscription = Dt.a.EMPTY),
                (this._menuCloseSubscription = Dt.a.EMPTY),
                (this._handleTouchStart = () => (this._openedBy = "touch")),
                (this._openedBy = null),
                (this.restoreFocus = !0),
                (this.menuOpened = new s.n()),
                (this.onMenuOpen = this.menuOpened),
                (this.menuClosed = new s.n()),
                (this.onMenuClose = this.menuClosed),
                e.nativeElement.addEventListener(
                  "touchstart",
                  this._handleTouchStart,
                  no
                ),
                o && (o._triggersSubmenu = this.triggersSubmenu()),
                (this._scrollStrategy = r);
            }
            get _deprecatedMatMenuTriggerFor() {
              return this.menu;
            }
            set _deprecatedMatMenuTriggerFor(t) {
              this.menu = t;
            }
            get menu() {
              return this._menu;
            }
            set menu(t) {
              t !== this._menu &&
                ((this._menu = t),
                this._menuCloseSubscription.unsubscribe(),
                t &&
                  (this._menuCloseSubscription = t.close.subscribe((t) => {
                    this._destroyMenu(),
                      ("click" !== t && "tab" !== t) ||
                        !this._parentMenu ||
                        this._parentMenu.closed.emit(t);
                  })));
            }
            ngAfterContentInit() {
              this._checkMenu(), this._handleHover();
            }
            ngOnDestroy() {
              this._overlayRef &&
                (this._overlayRef.dispose(), (this._overlayRef = null)),
                this._element.nativeElement.removeEventListener(
                  "touchstart",
                  this._handleTouchStart,
                  no
                ),
                this._menuCloseSubscription.unsubscribe(),
                this._closingActionsSubscription.unsubscribe(),
                this._hoverSubscription.unsubscribe();
            }
            get menuOpen() {
              return this._menuOpen;
            }
            get dir() {
              return this._dir && "rtl" === this._dir.value ? "rtl" : "ltr";
            }
            triggersSubmenu() {
              return !(!this._menuItemInstance || !this._parentMenu);
            }
            toggleMenu() {
              return this._menuOpen ? this.closeMenu() : this.openMenu();
            }
            openMenu() {
              if (this._menuOpen) return;
              this._checkMenu();
              const t = this._createOverlay(),
                e = t.getConfig();
              this._setPosition(e.positionStrategy),
                (e.hasBackdrop =
                  null == this.menu.hasBackdrop
                    ? !this.triggersSubmenu()
                    : this.menu.hasBackdrop),
                t.attach(this._getPortal()),
                this.menu.lazyContent &&
                  this.menu.lazyContent.attach(this.menuData),
                (this._closingActionsSubscription = this._menuClosingActions().subscribe(
                  () => this.closeMenu()
                )),
                this._initMenu(),
                this.menu instanceof Yi && this.menu._startAnimation();
            }
            closeMenu() {
              this.menu.close.emit();
            }
            focus(t = "program", e) {
              this._focusMonitor
                ? this._focusMonitor.focusVia(this._element, t, e)
                : this._element.nativeElement.focus(e);
            }
            _destroyMenu() {
              if (!this._overlayRef || !this.menuOpen) return;
              const t = this.menu;
              this._closingActionsSubscription.unsubscribe(),
                this._overlayRef.detach(),
                this._restoreFocus(),
                t instanceof Yi
                  ? (t._resetAnimation(),
                    t.lazyContent
                      ? t._animationDone
                          .pipe(
                            Object(U.a)((t) => "void" === t.toState),
                            Object(qt.a)(1),
                            Mr(t.lazyContent._attached)
                          )
                          .subscribe({
                            next: () => t.lazyContent.detach(),
                            complete: () => this._setIsMenuOpen(!1),
                          })
                      : this._setIsMenuOpen(!1))
                  : (this._setIsMenuOpen(!1),
                    t.lazyContent && t.lazyContent.detach());
            }
            _initMenu() {
              (this.menu.parentMenu = this.triggersSubmenu()
                ? this._parentMenu
                : void 0),
                (this.menu.direction = this.dir),
                this._setMenuElevation(),
                this._setIsMenuOpen(!0),
                this.menu.focusFirstItem(this._openedBy || "program");
            }
            _setMenuElevation() {
              if (this.menu.setElevation) {
                let t = 0,
                  e = this.menu.parentMenu;
                for (; e; ) t++, (e = e.parentMenu);
                this.menu.setElevation(t);
              }
            }
            _restoreFocus() {
              this.restoreFocus &&
                (this._openedBy
                  ? this.triggersSubmenu() || this.focus(this._openedBy)
                  : this.focus()),
                (this._openedBy = null);
            }
            _setIsMenuOpen(t) {
              (this._menuOpen = t),
                this._menuOpen
                  ? this.menuOpened.emit()
                  : this.menuClosed.emit(),
                this.triggersSubmenu() &&
                  (this._menuItemInstance._highlighted = t);
            }
            _checkMenu() {}
            _createOverlay() {
              if (!this._overlayRef) {
                const t = this._getOverlayConfig();
                this._subscribeToPositions(t.positionStrategy),
                  (this._overlayRef = this._overlay.create(t)),
                  this._overlayRef.keydownEvents().subscribe();
              }
              return this._overlayRef;
            }
            _getOverlayConfig() {
              return new _i({
                positionStrategy: this._overlay
                  .position()
                  .flexibleConnectedTo(this._element)
                  .withLockedPosition()
                  .withTransformOriginOn(
                    ".mat-menu-panel, .mat-mdc-menu-panel"
                  ),
                backdropClass:
                  this.menu.backdropClass || "cdk-overlay-transparent-backdrop",
                panelClass: this.menu.overlayPanelClass,
                scrollStrategy: this._scrollStrategy(),
                direction: this._dir,
              });
            }
            _subscribeToPositions(t) {
              this.menu.setPositionClasses &&
                t.positionChanges.subscribe((t) => {
                  this.menu.setPositionClasses(
                    "start" === t.connectionPair.overlayX ? "after" : "before",
                    "top" === t.connectionPair.overlayY ? "below" : "above"
                  );
                });
            }
            _setPosition(t) {
              let [e, n] =
                  "before" === this.menu.xPosition
                    ? ["end", "start"]
                    : ["start", "end"],
                [s, r] =
                  "above" === this.menu.yPosition
                    ? ["bottom", "top"]
                    : ["top", "bottom"],
                [i, o] = [s, r],
                [a, l] = [e, n],
                c = 0;
              this.triggersSubmenu()
                ? ((l = e = "before" === this.menu.xPosition ? "start" : "end"),
                  (n = a = "end" === e ? "start" : "end"),
                  (c = "bottom" === s ? 8 : -8))
                : this.menu.overlapTrigger ||
                  ((i = "top" === s ? "bottom" : "top"),
                  (o = "top" === r ? "bottom" : "top")),
                t.withPositions([
                  {
                    originX: e,
                    originY: i,
                    overlayX: a,
                    overlayY: s,
                    offsetY: c,
                  },
                  {
                    originX: n,
                    originY: i,
                    overlayX: l,
                    overlayY: s,
                    offsetY: c,
                  },
                  {
                    originX: e,
                    originY: o,
                    overlayX: a,
                    overlayY: r,
                    offsetY: -c,
                  },
                  {
                    originX: n,
                    originY: o,
                    overlayX: l,
                    overlayY: r,
                    offsetY: -c,
                  },
                ]);
            }
            _menuClosingActions() {
              const t = this._overlayRef.backdropClick(),
                e = this._overlayRef.detachments(),
                n = this._parentMenu ? this._parentMenu.closed : Object(F.a)(),
                s = this._parentMenu
                  ? this._parentMenu._hovered().pipe(
                      Object(U.a)((t) => t !== this._menuItemInstance),
                      Object(U.a)(() => this._menuOpen)
                    )
                  : Object(F.a)();
              return Object(xr.a)(t, n, s, e);
            }
            _handleMousedown(t) {
              Zt(t) ||
                ((this._openedBy = 0 === t.button ? "mouse" : null),
                this.triggersSubmenu() && t.preventDefault());
            }
            _handleKeydown(t) {
              const e = t.keyCode;
              this.triggersSubmenu() &&
                ((39 === e && "ltr" === this.dir) ||
                  (37 === e && "rtl" === this.dir)) &&
                this.openMenu();
            }
            _handleClick(t) {
              this.triggersSubmenu()
                ? (t.stopPropagation(), this.openMenu())
                : this.toggleMenu();
            }
            _handleHover() {
              this.triggersSubmenu() &&
                (this._hoverSubscription = this._parentMenu
                  ._hovered()
                  .pipe(
                    Object(U.a)(
                      (t) => t === this._menuItemInstance && !t.disabled
                    ),
                    Ur(0, Dr)
                  )
                  .subscribe(() => {
                    (this._openedBy = "mouse"),
                      this.menu instanceof Yi && this.menu._isAnimating
                        ? this.menu._animationDone
                            .pipe(
                              Object(qt.a)(1),
                              Ur(0, Dr),
                              Mr(this._parentMenu._hovered())
                            )
                            .subscribe(() => this.openMenu())
                        : this.openMenu();
                  }));
            }
            _getPortal() {
              return (
                (this._portal &&
                  this._portal.templateRef === this.menu.templateRef) ||
                  (this._portal = new Wr(
                    this.menu.templateRef,
                    this._viewContainerRef
                  )),
                this._portal
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                s.Kb(Li),
                s.Kb(s.l),
                s.Kb(s.P),
                s.Kb(to),
                s.Kb(Yi, 8),
                s.Kb(Wi, 10),
                s.Kb(oe, 8),
                s.Kb(Jt)
              );
            }),
            (t.ɵdir = s.Fb({
              type: t,
              selectors: [
                ["", "mat-menu-trigger-for", ""],
                ["", "matMenuTriggerFor", ""],
              ],
              hostAttrs: ["aria-haspopup", "true", 1, "mat-menu-trigger"],
              hostVars: 2,
              hostBindings: function (t, e) {
                1 & t &&
                  s.Ub("mousedown", function (t) {
                    return e._handleMousedown(t);
                  })("keydown", function (t) {
                    return e._handleKeydown(t);
                  })("click", function (t) {
                    return e._handleClick(t);
                  }),
                  2 & t &&
                    s.Ab("aria-expanded", e.menuOpen || null)(
                      "aria-controls",
                      e.menuOpen ? e.menu.panelId : null
                    );
              },
              inputs: {
                restoreFocus: ["matMenuTriggerRestoreFocus", "restoreFocus"],
                _deprecatedMatMenuTriggerFor: [
                  "mat-menu-trigger-for",
                  "_deprecatedMatMenuTriggerFor",
                ],
                menu: ["matMenuTriggerFor", "menu"],
                menuData: ["matMenuTriggerData", "menuData"],
              },
              outputs: {
                menuOpened: "menuOpened",
                onMenuOpen: "onMenuOpen",
                menuClosed: "menuClosed",
                onMenuClose: "onMenuClose",
              },
              exportAs: ["matMenuTrigger"],
            })),
            t
          );
        })(),
        ro = (() => {
          class t {}
          return (
            (t.ɵmod = s.Ib({ type: t })),
            (t.ɵinj = s.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [eo],
              imports: [Js],
            })),
            t
          );
        })(),
        io = (() => {
          class t {}
          return (
            (t.ɵmod = s.Ib({ type: t })),
            (t.ɵinj = s.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [eo],
              imports: [[i.b, Js, hr, Fi, ro], li, Js, ro],
            })),
            t
          );
        })();
      var oo = n("z6cu"),
        ao = n("cp0P"),
        lo = n("JIr8"),
        co = n("nYR2"),
        uo = n("w1tV");
      const ho = ["*"];
      function po(t) {
        return Error(`Unable to find icon with the name "${t}"`);
      }
      function fo(t) {
        return Error(
          `The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`
        );
      }
      function mo(t) {
        return Error(
          `The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`
        );
      }
      class go {
        constructor(t, e, n) {
          (this.url = t), (this.svgText = e), (this.options = n);
        }
      }
      let _o = (() => {
        class t {
          constructor(t, e, n, s) {
            (this._httpClient = t),
              (this._sanitizer = e),
              (this._errorHandler = s),
              (this._svgIconConfigs = new Map()),
              (this._iconSetConfigs = new Map()),
              (this._cachedIconsByUrl = new Map()),
              (this._inProgressUrlFetches = new Map()),
              (this._fontCssClassesByAlias = new Map()),
              (this._defaultFontSetClass = "material-icons"),
              (this._document = n);
          }
          addSvgIcon(t, e, n) {
            return this.addSvgIconInNamespace("", t, e, n);
          }
          addSvgIconLiteral(t, e, n) {
            return this.addSvgIconLiteralInNamespace("", t, e, n);
          }
          addSvgIconInNamespace(t, e, n, s) {
            return this._addSvgIconConfig(t, e, new go(n, null, s));
          }
          addSvgIconLiteralInNamespace(t, e, n, r) {
            const i = this._sanitizer.sanitize(s.I.HTML, n);
            if (!i) throw mo(n);
            return this._addSvgIconConfig(t, e, new go("", i, r));
          }
          addSvgIconSet(t, e) {
            return this.addSvgIconSetInNamespace("", t, e);
          }
          addSvgIconSetLiteral(t, e) {
            return this.addSvgIconSetLiteralInNamespace("", t, e);
          }
          addSvgIconSetInNamespace(t, e, n) {
            return this._addSvgIconSetConfig(t, new go(e, null, n));
          }
          addSvgIconSetLiteralInNamespace(t, e, n) {
            const r = this._sanitizer.sanitize(s.I.HTML, e);
            if (!r) throw mo(e);
            return this._addSvgIconSetConfig(t, new go("", r, n));
          }
          registerFontClassAlias(t, e = t) {
            return this._fontCssClassesByAlias.set(t, e), this;
          }
          classNameForFontAlias(t) {
            return this._fontCssClassesByAlias.get(t) || t;
          }
          setDefaultFontSetClass(t) {
            return (this._defaultFontSetClass = t), this;
          }
          getDefaultFontSetClass() {
            return this._defaultFontSetClass;
          }
          getSvgIconFromUrl(t) {
            const e = this._sanitizer.sanitize(s.I.RESOURCE_URL, t);
            if (!e) throw fo(t);
            const n = this._cachedIconsByUrl.get(e);
            return n
              ? Object(F.a)(bo(n))
              : this._loadSvgIconFromConfig(new go(t, null)).pipe(
                  Object(Lt.a)((t) => this._cachedIconsByUrl.set(e, t)),
                  Object(z.a)((t) => bo(t))
                );
          }
          getNamedSvgIcon(t, e = "") {
            const n = yo(e, t),
              s = this._svgIconConfigs.get(n);
            if (s) return this._getSvgFromConfig(s);
            const r = this._iconSetConfigs.get(e);
            return r
              ? this._getSvgFromIconSetConfigs(t, r)
              : Object(oo.a)(po(n));
          }
          ngOnDestroy() {
            this._svgIconConfigs.clear(),
              this._iconSetConfigs.clear(),
              this._cachedIconsByUrl.clear();
          }
          _getSvgFromConfig(t) {
            return t.svgText
              ? Object(F.a)(bo(this._svgElementFromConfig(t)))
              : this._loadSvgIconFromConfig(t).pipe(Object(z.a)((t) => bo(t)));
          }
          _getSvgFromIconSetConfigs(t, e) {
            const n = this._extractIconWithNameFromAnySet(t, e);
            if (n) return Object(F.a)(n);
            const r = e
              .filter((t) => !t.svgText)
              .map((t) =>
                this._loadSvgIconSetFromConfig(t).pipe(
                  Object(lo.a)((e) => {
                    const n = this._sanitizer.sanitize(s.I.RESOURCE_URL, t.url);
                    return (
                      this._errorHandler.handleError(
                        new Error(
                          `Loading icon set URL: ${n} failed: ${e.message}`
                        )
                      ),
                      Object(F.a)(null)
                    );
                  })
                )
              );
            return Object(ao.a)(r).pipe(
              Object(z.a)(() => {
                const n = this._extractIconWithNameFromAnySet(t, e);
                if (!n) throw po(t);
                return n;
              })
            );
          }
          _extractIconWithNameFromAnySet(t, e) {
            for (let n = e.length - 1; n >= 0; n--) {
              const s = e[n];
              if (s.svgText && s.svgText.indexOf(t) > -1) {
                const e = this._svgElementFromConfig(s),
                  n = this._extractSvgIconFromSet(e, t, s.options);
                if (n) return n;
              }
            }
            return null;
          }
          _loadSvgIconFromConfig(t) {
            return this._fetchIcon(t).pipe(
              Object(Lt.a)((e) => (t.svgText = e)),
              Object(z.a)(() => this._svgElementFromConfig(t))
            );
          }
          _loadSvgIconSetFromConfig(t) {
            return t.svgText
              ? Object(F.a)(null)
              : this._fetchIcon(t).pipe(Object(Lt.a)((e) => (t.svgText = e)));
          }
          _extractSvgIconFromSet(t, e, n) {
            const s = t.querySelector(`[id="${e}"]`);
            if (!s) return null;
            const r = s.cloneNode(!0);
            if ((r.removeAttribute("id"), "svg" === r.nodeName.toLowerCase()))
              return this._setSvgAttributes(r, n);
            if ("symbol" === r.nodeName.toLowerCase())
              return this._setSvgAttributes(this._toSvgElement(r), n);
            const i = this._svgElementFromString("<svg></svg>");
            return i.appendChild(r), this._setSvgAttributes(i, n);
          }
          _svgElementFromString(t) {
            const e = this._document.createElement("DIV");
            e.innerHTML = t;
            const n = e.querySelector("svg");
            if (!n) throw Error("<svg> tag not found");
            return n;
          }
          _toSvgElement(t) {
            const e = this._svgElementFromString("<svg></svg>"),
              n = t.attributes;
            for (let s = 0; s < n.length; s++) {
              const { name: t, value: r } = n[s];
              "id" !== t && e.setAttribute(t, r);
            }
            for (let s = 0; s < t.childNodes.length; s++)
              t.childNodes[s].nodeType === this._document.ELEMENT_NODE &&
                e.appendChild(t.childNodes[s].cloneNode(!0));
            return e;
          }
          _setSvgAttributes(t, e) {
            return (
              t.setAttribute("fit", ""),
              t.setAttribute("height", "100%"),
              t.setAttribute("width", "100%"),
              t.setAttribute("preserveAspectRatio", "xMidYMid meet"),
              t.setAttribute("focusable", "false"),
              e && e.viewBox && t.setAttribute("viewBox", e.viewBox),
              t
            );
          }
          _fetchIcon(t) {
            var e;
            const { url: n, options: r } = t,
              i =
                null !== (e = null == r ? void 0 : r.withCredentials) &&
                void 0 !== e &&
                e;
            if (!this._httpClient)
              throw Error(
                "Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports."
              );
            if (null == n) throw Error(`Cannot fetch icon from URL "${n}".`);
            const o = this._sanitizer.sanitize(s.I.RESOURCE_URL, n);
            if (!o) throw fo(n);
            const a = this._inProgressUrlFetches.get(o);
            if (a) return a;
            const l = this._httpClient
              .get(o, { responseType: "text", withCredentials: i })
              .pipe(
                Object(co.a)(() => this._inProgressUrlFetches.delete(o)),
                Object(uo.a)()
              );
            return this._inProgressUrlFetches.set(o, l), l;
          }
          _addSvgIconConfig(t, e, n) {
            return this._svgIconConfigs.set(yo(t, e), n), this;
          }
          _addSvgIconSetConfig(t, e) {
            const n = this._iconSetConfigs.get(t);
            return n ? n.push(e) : this._iconSetConfigs.set(t, [e]), this;
          }
          _svgElementFromConfig(t) {
            if (!t.svgElement) {
              const e = this._svgElementFromString(t.svgText);
              this._setSvgAttributes(e, t.options), (t.svgElement = e);
            }
            return t.svgElement;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Rb(it, 8), s.Rb(j), s.Rb(i.c, 8), s.Rb(s.m));
          }),
          (t.ɵprov = Object(s.Gb)({
            factory: function () {
              return new t(
                Object(s.Rb)(it, 8),
                Object(s.Rb)(j),
                Object(s.Rb)(i.c, 8),
                Object(s.Rb)(s.m)
              );
            },
            token: t,
            providedIn: "root",
          })),
          t
        );
      })();
      function bo(t) {
        return t.cloneNode(!0);
      }
      function yo(t, e) {
        return t + ":" + e;
      }
      class vo {
        constructor(t) {
          this._elementRef = t;
        }
      }
      const wo = er(vo),
        Co = new s.q("mat-icon-location", {
          providedIn: "root",
          factory: function () {
            const t = Object(s.U)(i.c),
              e = t ? t.location : null;
            return { getPathname: () => (e ? e.pathname + e.search : "") };
          },
        }),
        So = [
          "clip-path",
          "color-profile",
          "src",
          "cursor",
          "fill",
          "filter",
          "marker",
          "marker-start",
          "marker-mid",
          "marker-end",
          "mask",
          "stroke",
        ],
        Eo = So.map((t) => `[${t}]`).join(", "),
        Oo = /^url\(['"]?#(.*?)['"]?\)$/;
      let xo = (() => {
          class t extends wo {
            constructor(t, e, n, s, r) {
              super(t),
                (this._iconRegistry = e),
                (this._location = s),
                (this._errorHandler = r),
                (this._inline = !1),
                (this._currentIconFetch = Dt.a.EMPTY),
                n || t.nativeElement.setAttribute("aria-hidden", "true");
            }
            get inline() {
              return this._inline;
            }
            set inline(t) {
              this._inline = $t(t);
            }
            get svgIcon() {
              return this._svgIcon;
            }
            set svgIcon(t) {
              t !== this._svgIcon &&
                (t
                  ? this._updateSvgIcon(t)
                  : this._svgIcon && this._clearSvgElement(),
                (this._svgIcon = t));
            }
            get fontSet() {
              return this._fontSet;
            }
            set fontSet(t) {
              const e = this._cleanupFontValue(t);
              e !== this._fontSet &&
                ((this._fontSet = e), this._updateFontIconClasses());
            }
            get fontIcon() {
              return this._fontIcon;
            }
            set fontIcon(t) {
              const e = this._cleanupFontValue(t);
              e !== this._fontIcon &&
                ((this._fontIcon = e), this._updateFontIconClasses());
            }
            _splitIconName(t) {
              if (!t) return ["", ""];
              const e = t.split(":");
              switch (e.length) {
                case 1:
                  return ["", e[0]];
                case 2:
                  return e;
                default:
                  throw Error(`Invalid icon name: "${t}"`);
              }
            }
            ngOnInit() {
              this._updateFontIconClasses();
            }
            ngAfterViewChecked() {
              const t = this._elementsWithExternalReferences;
              if (t && t.size) {
                const t = this._location.getPathname();
                t !== this._previousPath &&
                  ((this._previousPath = t), this._prependPathToReferences(t));
              }
            }
            ngOnDestroy() {
              this._currentIconFetch.unsubscribe(),
                this._elementsWithExternalReferences &&
                  this._elementsWithExternalReferences.clear();
            }
            _usingFontIcon() {
              return !this.svgIcon;
            }
            _setSvgElement(t) {
              this._clearSvgElement();
              const e = t.querySelectorAll("style");
              for (let s = 0; s < e.length; s++) e[s].textContent += " ";
              const n = this._location.getPathname();
              (this._previousPath = n),
                this._cacheChildrenWithExternalReferences(t),
                this._prependPathToReferences(n),
                this._elementRef.nativeElement.appendChild(t);
            }
            _clearSvgElement() {
              const t = this._elementRef.nativeElement;
              let e = t.childNodes.length;
              for (
                this._elementsWithExternalReferences &&
                this._elementsWithExternalReferences.clear();
                e--;

              ) {
                const n = t.childNodes[e];
                (1 === n.nodeType && "svg" !== n.nodeName.toLowerCase()) ||
                  t.removeChild(n);
              }
            }
            _updateFontIconClasses() {
              if (!this._usingFontIcon()) return;
              const t = this._elementRef.nativeElement,
                e = this.fontSet
                  ? this._iconRegistry.classNameForFontAlias(this.fontSet)
                  : this._iconRegistry.getDefaultFontSetClass();
              e != this._previousFontSetClass &&
                (this._previousFontSetClass &&
                  t.classList.remove(this._previousFontSetClass),
                e && t.classList.add(e),
                (this._previousFontSetClass = e)),
                this.fontIcon != this._previousFontIconClass &&
                  (this._previousFontIconClass &&
                    t.classList.remove(this._previousFontIconClass),
                  this.fontIcon && t.classList.add(this.fontIcon),
                  (this._previousFontIconClass = this.fontIcon));
            }
            _cleanupFontValue(t) {
              return "string" == typeof t ? t.trim().split(" ")[0] : t;
            }
            _prependPathToReferences(t) {
              const e = this._elementsWithExternalReferences;
              e &&
                e.forEach((e, n) => {
                  e.forEach((e) => {
                    n.setAttribute(e.name, `url('${t}#${e.value}')`);
                  });
                });
            }
            _cacheChildrenWithExternalReferences(t) {
              const e = t.querySelectorAll(Eo),
                n = (this._elementsWithExternalReferences =
                  this._elementsWithExternalReferences || new Map());
              for (let s = 0; s < e.length; s++)
                So.forEach((t) => {
                  const r = e[s],
                    i = r.getAttribute(t),
                    o = i ? i.match(Oo) : null;
                  if (o) {
                    let e = n.get(r);
                    e || ((e = []), n.set(r, e)),
                      e.push({ name: t, value: o[1] });
                  }
                });
            }
            _updateSvgIcon(t) {
              if (
                ((this._svgNamespace = null),
                (this._svgName = null),
                this._currentIconFetch.unsubscribe(),
                t)
              ) {
                const [e, n] = this._splitIconName(t);
                e && (this._svgNamespace = e),
                  n && (this._svgName = n),
                  (this._currentIconFetch = this._iconRegistry
                    .getNamedSvgIcon(n, e)
                    .pipe(Object(qt.a)(1))
                    .subscribe(
                      (t) => this._setSvgElement(t),
                      (t) => {
                        this._errorHandler.handleError(
                          new Error(
                            `Error retrieving icon ${e}:${n}! ${t.message}`
                          )
                        );
                      }
                    ));
              }
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                s.Kb(s.l),
                s.Kb(_o),
                s.Sb("aria-hidden"),
                s.Kb(Co),
                s.Kb(s.m)
              );
            }),
            (t.ɵcmp = s.Eb({
              type: t,
              selectors: [["mat-icon"]],
              hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
              hostVars: 7,
              hostBindings: function (t, e) {
                2 & t &&
                  (s.Ab(
                    "data-mat-icon-type",
                    e._usingFontIcon() ? "font" : "svg"
                  )("data-mat-icon-name", e._svgName || e.fontIcon)(
                    "data-mat-icon-namespace",
                    e._svgNamespace || e.fontSet
                  ),
                  s.Cb("mat-icon-inline", e.inline)(
                    "mat-icon-no-color",
                    "primary" !== e.color &&
                      "accent" !== e.color &&
                      "warn" !== e.color
                  ));
              },
              inputs: {
                color: "color",
                inline: "inline",
                svgIcon: "svgIcon",
                fontSet: "fontSet",
                fontIcon: "fontIcon",
              },
              exportAs: ["matIcon"],
              features: [s.wb],
              ngContentSelectors: ho,
              decls: 1,
              vars: 0,
              template: function (t, e) {
                1 & t && (s.bc(), s.ac(0));
              },
              styles: [
                ".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n",
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })(),
        ko = (() => {
          class t {}
          return (
            (t.ɵmod = s.Ib({ type: t })),
            (t.ɵinj = s.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[Js], Js],
            })),
            t
          );
        })();
      function To(t, e) {
        if (1 & t) {
          const t = s.Ob();
          s.Nb(0, "button", 9),
            s.Ub("click", function () {
              s.ic(t);
              const n = e.$implicit;
              return s.Wb().changeLanguage(n);
            }),
            s.oc(1),
            s.Xb(2, "uppercase"),
            s.Mb();
        }
        if (2 & t) {
          const t = e.$implicit;
          s.zb(1), s.pc(s.Yb(2, 1, t));
        }
      }
      let Ro = (() => {
        class t {
          constructor(t) {
            (this.translatorService = t),
              (this.languages = r.a.languages),
              (this.changeTheme = new s.n());
          }
          ngOnInit() {
            this.selectedLanguage = this.translatorService.getSelectedLanguage();
          }
          changeLanguage(t) {
            (this.selectedLanguage = t),
              this.translatorService.changeLanguage(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Kb(kt));
          }),
          (t.ɵcmp = s.Eb({
            type: t,
            selectors: [["app-header"]],
            outputs: { changeTheme: "changeTheme" },
            decls: 33,
            vars: 9,
            consts: [
              ["color", "primary"],
              [1, "spacer"],
              ["mat-button", "", 3, "matMenuTriggerFor"],
              ["langMenu", "matMenu"],
              ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"],
              [
                "mat-icon-button",
                "",
                "aria-label",
                "Example icon-button with a menu",
                3,
                "matMenuTriggerFor",
              ],
              ["menu", "matMenu"],
              ["mat-menu-item", ""],
              ["mat-menu-item", "", "disabled", ""],
              ["mat-menu-item", "", 3, "click"],
            ],
            template: function (t, e) {
              if (
                (1 & t &&
                  (s.Nb(0, "mat-toolbar", 0),
                  s.Nb(1, "span"),
                  s.oc(2),
                  s.Xb(3, "translate"),
                  s.Mb(),
                  s.Lb(4, "span", 1),
                  s.Nb(5, "button", 2),
                  s.Nb(6, "mat-icon"),
                  s.oc(7, "language"),
                  s.Mb(),
                  s.oc(8),
                  s.Xb(9, "uppercase"),
                  s.Mb(),
                  s.Nb(10, "mat-menu", null, 3),
                  s.nc(12, To, 3, 3, "button", 4),
                  s.Mb(),
                  s.Nb(13, "button", 5),
                  s.Nb(14, "mat-icon"),
                  s.oc(15, "more_vert"),
                  s.Mb(),
                  s.Mb(),
                  s.Nb(16, "mat-menu", null, 6),
                  s.Nb(18, "button", 7),
                  s.Nb(19, "mat-icon"),
                  s.oc(20, "dialpad"),
                  s.Mb(),
                  s.Nb(21, "span"),
                  s.oc(22, "Redial"),
                  s.Mb(),
                  s.Mb(),
                  s.Nb(23, "button", 8),
                  s.Nb(24, "mat-icon"),
                  s.oc(25, "voicemail"),
                  s.Mb(),
                  s.Nb(26, "span"),
                  s.oc(27, "Check voice mail"),
                  s.Mb(),
                  s.Mb(),
                  s.Nb(28, "button", 7),
                  s.Nb(29, "mat-icon"),
                  s.oc(30, "notifications_off"),
                  s.Mb(),
                  s.Nb(31, "span"),
                  s.oc(32, "Disable alerts"),
                  s.Mb(),
                  s.Mb(),
                  s.Mb(),
                  s.Mb()),
                2 & t)
              ) {
                const t = s.hc(11),
                  n = s.hc(17);
                s.zb(2),
                  s.pc(s.Yb(3, 5, "APP_NAME")),
                  s.zb(3),
                  s.cc("matMenuTriggerFor", t),
                  s.zb(3),
                  s.qc(" ", s.Yb(9, 7, e.selectedLanguage), ""),
                  s.zb(4),
                  s.cc("ngForOf", e.languages),
                  s.zb(1),
                  s.cc("matMenuTriggerFor", n);
              }
            },
            directives: [_r, Er, so, xo, Ji, i.i, Wi],
            pipes: [Ot.d, i.m],
            styles: [
              ".spacer[_ngcontent-%COMP%]{flex:1 1 auto}  .mat-toolbar.mat-primary{background:#ff5733;position:sticky;top:0}",
            ],
          })),
          t
        );
      })();
      const Ao = [
        {
          path: "",
          component: (() => {
            class t {
              constructor() {
                this.defaultTheme = "dark-theme";
              }
              ngOnInit() {}
              changeTheme(t) {
                this.defaultTheme = t;
              }
            }
            return (
              (t.ɵfac = function (e) {
                return new (e || t)();
              }),
              (t.ɵcmp = s.Eb({
                type: t,
                selectors: [["app-layout"]],
                decls: 4,
                vars: 3,
                consts: [
                  [3, "changeTheme"],
                  [1, "inner-container"],
                ],
                template: function (t, e) {
                  1 & t &&
                    (s.Nb(0, "app-header", 0),
                    s.Ub("changeTheme", function (t) {
                      return e.changeTheme(t);
                    }),
                    s.Mb(),
                    s.Nb(1, "div"),
                    s.Nb(2, "div", 1),
                    s.Lb(3, "router-outlet"),
                    s.Mb(),
                    s.Mb()),
                    2 & t && (s.zb(1), s.Bb("container ", e.defaultTheme, ""));
                },
                directives: [Ro, Ct.d],
                styles: [
                  ".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:calc(100% - 64px)}.inner-container[_ngcontent-%COMP%]{width:80%;margin:20px auto 0}",
                ],
              })),
              t
            );
          })(),
          children: [
            { path: "", component: Et },
            {
              path: "tictac",
              loadChildren: () =>
                n
                  .e(4)
                  .then(n.bind(null, "H0As"))
                  .then((t) => t.TictacModule),
            },
          ],
        },
      ];
      let Io = (() => {
          class t {}
          return (
            (t.ɵmod = s.Ib({ type: t })),
            (t.ɵinj = s.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[Ct.c.forChild(Ao)], Ct.c],
            })),
            t
          );
        })(),
        jo = (() => {
          class t {}
          return (
            (t.ɵmod = s.Ib({ type: t })),
            (t.ɵinj = s.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[i.b, br, ko, Or, io], br, ko, Or, io],
            })),
            t
          );
        })(),
        Po = (() => {
          class t {}
          return (
            (t.ɵmod = s.Ib({ type: t })),
            (t.ɵinj = s.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[i.b, Io, jo, Ot.c]],
            })),
            t
          );
        })();
      const Do = [{ path: "", loadChildren: () => Po }];
      let No = (() => {
          class t {}
          return (
            (t.ɵmod = s.Ib({ type: t })),
            (t.ɵinj = s.Hb({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[Ct.c.forRoot(Do)], Ct.c],
            })),
            t
          );
        })(),
        Lo = (() => {
          class t {
            constructor(t) {
              (this.translatorService = t),
                this.translatorService.setDefaultLanguage();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Kb(kt));
            }),
            (t.ɵcmp = s.Eb({
              type: t,
              selectors: [["app-root"]],
              decls: 1,
              vars: 0,
              template: function (t, e) {
                1 & t && s.Lb(0, "router-outlet");
              },
              directives: [Ct.d],
              styles: [""],
            })),
            t
          );
        })();
      var Mo = n("NXyV"),
        Fo = n("GyhO"),
        Vo = n("KqfI");
      const Ho = new V.a(Vo.a);
      var Uo = n("oB13");
      const zo =
        "Service workers are disabled or not supported by this browser";
      class Bo {
        constructor(t) {
          if (((this.serviceWorker = t), t)) {
            const e = Jr(t, "controllerchange").pipe(
                Object(z.a)(() => t.controller)
              ),
              n = Object(Mo.a)(() => Object(F.a)(t.controller)),
              s = Object(Fo.a)(n, e);
            (this.worker = s.pipe(Object(U.a)((t) => !!t))),
              (this.registration = this.worker.pipe(
                Object(Nr.a)(() => t.getRegistration())
              ));
            const r = Jr(t, "message")
              .pipe(Object(z.a)((t) => t.data))
              .pipe(Object(U.a)((t) => t && t.type))
              .pipe(Object(Uo.a)(new Pt.a()));
            r.connect(), (this.events = r);
          } else
            this.worker = this.events = this.registration = Object(Mo.a)(() =>
              Object(oo.a)(
                new Error(
                  "Service workers are disabled or not supported by this browser"
                )
              )
            );
        }
        postMessage(t, e) {
          return this.worker
            .pipe(
              Object(qt.a)(1),
              Object(Lt.a)((n) => {
                n.postMessage(Object.assign({ action: t }, e));
              })
            )
            .toPromise()
            .then(() => {});
        }
        postMessageWithStatus(t, e, n) {
          const s = this.waitForStatus(n),
            r = this.postMessage(t, e);
          return Promise.all([s, r]).then(() => {});
        }
        generateNonce() {
          return Math.round(1e7 * Math.random());
        }
        eventsOfType(t) {
          return this.events.pipe(Object(U.a)((e) => e.type === t));
        }
        nextEventOfType(t) {
          return this.eventsOfType(t).pipe(Object(qt.a)(1));
        }
        waitForStatus(t) {
          return this.eventsOfType("STATUS")
            .pipe(
              Object(U.a)((e) => e.nonce === t),
              Object(qt.a)(1),
              Object(z.a)((t) => {
                if (!t.status) throw new Error(t.error);
              })
            )
            .toPromise();
        }
        get isEnabled() {
          return !!this.serviceWorker;
        }
      }
      let qo = (() => {
          class t {
            constructor(t) {
              if (
                ((this.sw = t),
                (this.subscriptionChanges = new Pt.a()),
                !t.isEnabled)
              )
                return (
                  (this.messages = Ho),
                  (this.notificationClicks = Ho),
                  void (this.subscription = Ho)
                );
              (this.messages = this.sw
                .eventsOfType("PUSH")
                .pipe(Object(z.a)((t) => t.data))),
                (this.notificationClicks = this.sw
                  .eventsOfType("NOTIFICATION_CLICK")
                  .pipe(Object(z.a)((t) => t.data))),
                (this.pushManager = this.sw.registration.pipe(
                  Object(z.a)((t) => t.pushManager)
                ));
              const e = this.pushManager.pipe(
                Object(Nr.a)((t) => t.getSubscription())
              );
              this.subscription = Object(xr.a)(e, this.subscriptionChanges);
            }
            get isEnabled() {
              return this.sw.isEnabled;
            }
            requestSubscription(t) {
              if (!this.sw.isEnabled) return Promise.reject(new Error(zo));
              const e = { userVisibleOnly: !0 };
              let n = this.decodeBase64(
                  t.serverPublicKey.replace(/_/g, "/").replace(/-/g, "+")
                ),
                s = new Uint8Array(new ArrayBuffer(n.length));
              for (let r = 0; r < n.length; r++) s[r] = n.charCodeAt(r);
              return (
                (e.applicationServerKey = s),
                this.pushManager
                  .pipe(
                    Object(Nr.a)((t) => t.subscribe(e)),
                    Object(qt.a)(1)
                  )
                  .toPromise()
                  .then((t) => (this.subscriptionChanges.next(t), t))
              );
            }
            unsubscribe() {
              return this.sw.isEnabled
                ? this.subscription
                    .pipe(
                      Object(qt.a)(1),
                      Object(Nr.a)((t) => {
                        if (null === t)
                          throw new Error(
                            "Not subscribed to push notifications."
                          );
                        return t.unsubscribe().then((t) => {
                          if (!t) throw new Error("Unsubscribe failed!");
                          this.subscriptionChanges.next(null);
                        });
                      })
                    )
                    .toPromise()
                : Promise.reject(new Error(zo));
            }
            decodeBase64(t) {
              return atob(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Rb(Bo));
            }),
            (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        $o = (() => {
          class t {
            constructor(t) {
              if (((this.sw = t), !t.isEnabled))
                return (this.available = Ho), void (this.activated = Ho);
              (this.available = this.sw.eventsOfType("UPDATE_AVAILABLE")),
                (this.activated = this.sw.eventsOfType("UPDATE_ACTIVATED"));
            }
            get isEnabled() {
              return this.sw.isEnabled;
            }
            checkForUpdate() {
              if (!this.sw.isEnabled) return Promise.reject(new Error(zo));
              const t = this.sw.generateNonce();
              return this.sw.postMessageWithStatus(
                "CHECK_FOR_UPDATES",
                { statusNonce: t },
                t
              );
            }
            activateUpdate() {
              if (!this.sw.isEnabled) return Promise.reject(new Error(zo));
              const t = this.sw.generateNonce();
              return this.sw.postMessageWithStatus(
                "ACTIVATE_UPDATE",
                { statusNonce: t },
                t
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Rb(Bo));
            }),
            (t.ɵprov = s.Gb({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      class Ko {}
      const Wo = new s.q("NGSW_REGISTER_SCRIPT");
      function Go(t, e, n, r) {
        return () => {
          if (
            !Object(i.o)(r) ||
            !("serviceWorker" in navigator) ||
            !1 === n.enabled
          )
            return;
          let o;
          if (
            (navigator.serviceWorker.addEventListener(
              "controllerchange",
              () => {
                null !== navigator.serviceWorker.controller &&
                  navigator.serviceWorker.controller.postMessage({
                    action: "INITIALIZE",
                  });
              }
            ),
            "function" == typeof n.registrationStrategy)
          )
            o = n.registrationStrategy();
          else {
            const [e, ...s] = (
              n.registrationStrategy || "registerWhenStable:30000"
            ).split(":");
            switch (e) {
              case "registerImmediately":
                o = Object(F.a)(null);
                break;
              case "registerWithDelay":
                o = Qo(+s[0] || 0);
                break;
              case "registerWhenStable":
                o = s[0] ? Object(xr.a)(Zo(t), Qo(+s[0])) : Zo(t);
                break;
              default:
                throw new Error(
                  "Unknown ServiceWorker registration strategy: " +
                    n.registrationStrategy
                );
            }
          }
          t.get(s.z).runOutsideAngular(() =>
            o
              .pipe(Object(qt.a)(1))
              .subscribe(() =>
                navigator.serviceWorker
                  .register(e, { scope: n.scope })
                  .catch((t) =>
                    console.error("Service worker registration failed with:", t)
                  )
              )
          );
        };
      }
      function Qo(t) {
        return Object(F.a)(null).pipe(Ur(t));
      }
      function Zo(t) {
        return t.get(s.g).isStable.pipe(Object(U.a)((t) => t));
      }
      function Yo(t, e) {
        return new Bo(
          Object(i.o)(e) && !1 !== t.enabled ? navigator.serviceWorker : void 0
        );
      }
      let Xo = (() => {
        class t {
          static register(e, n = {}) {
            return {
              ngModule: t,
              providers: [
                { provide: Wo, useValue: e },
                { provide: Ko, useValue: n },
                { provide: Bo, useFactory: Yo, deps: [Ko, s.B] },
                {
                  provide: s.d,
                  useFactory: Go,
                  deps: [s.r, Wo, Ko, s.B],
                  multi: !0,
                },
              ],
            };
          }
        }
        return (
          (t.ɵmod = s.Ib({ type: t })),
          (t.ɵinj = s.Hb({
            factory: function (e) {
              return new (e || t)();
            },
            providers: [qo, $o],
          })),
          t
        );
      })();
      class Jo {
        constructor(t, e = "/Games/assets/i18n/", n = ".json") {
          (this.http = t), (this.prefix = e), (this.suffix = n);
        }
        getTranslation(t) {
          return this.http.get(`${this.prefix}${t}${this.suffix}`);
        }
      }
      function ta(t) {
        return new Jo(t);
      }
      let ea = (() => {
        class t {}
        return (
          (t.ɵmod = s.Ib({ type: t, bootstrap: [Lo] })),
          (t.ɵinj = s.Hb({
            factory: function (e) {
              return new (e || t)();
            },
            providers: [],
            imports: [
              [
                M,
                No,
                Qs,
                vt,
                wt.b,
                Ot.c.forRoot({
                  loader: { provide: Ot.b, useFactory: ta, deps: [it] },
                }),
                Xo.register("ngsw-worker.js", { enabled: r.a.production }),
              ],
            ],
          })),
          t
        );
      })();
      r.a.production && Object(s.S)(),
        N()
          .bootstrapModule(ea)
          .catch((t) => console.error(t));
    },
    zn8P: function (t, e) {
      function n(t) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        });
      }
      (n.keys = function () {
        return [];
      }),
        (n.resolve = n),
        (t.exports = n),
        (n.id = "zn8P");
    },
    zx2A: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      }),
        n.d(e, "b", function () {
          return a;
        }),
        n.d(e, "c", function () {
          return l;
        });
      var s = n("7o/Q"),
        r = n("HDdC"),
        i = n("SeVD");
      class o extends s.a {
        constructor(t) {
          super(), (this.parent = t);
        }
        _next(t) {
          this.parent.notifyNext(t);
        }
        _error(t) {
          this.parent.notifyError(t), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(), this.unsubscribe();
        }
      }
      class a extends s.a {
        notifyNext(t) {
          this.destination.next(t);
        }
        notifyError(t) {
          this.destination.error(t);
        }
        notifyComplete() {
          this.destination.complete();
        }
      }
      function l(t, e) {
        if (!e.closed)
          return t instanceof r.a ? t.subscribe(e) : Object(i.a)(t)(e);
      }
    },
  },
  [[0, 0]],
]);
