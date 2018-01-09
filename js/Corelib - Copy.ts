import { models} from './Models';
import {context} from './context';
import {UI} from './UI';
import { ModuleStat } from './Consts';
declare var stop;
context.OnStat('../Apps/Shop/Apps', 0, (me, target, cstat, stat) => {
   stop();
    switch (cstat) {
        case ModuleStat.New:
            break;
        case ModuleStat.Defined:
            break;
        case ModuleStat.Defining:
            break;
        case ModuleStat.Downloaded:
            break;
        case ModuleStat.Downloading:
            break;
        case ModuleStat.Executed:
            break;

        case ModuleStat.Executing:
            break;
        case ModuleStat.Failed:
            break;
    }
    return cstat + 1;
});

context.OnGStat( ModuleStat.Executing, (me, target, cstat, stat) => {
    if (!(window as any).modls) (window as any).modls = [];
    (window as any).modls.push(target);
   stop();
    var t = context.Assemblies;
});
//declare var context: basic.IContext;
export declare type GFunction = Function | reflection.GenericType | reflection.DelayedType;
declare var require: (context:basic.IContext,type: Function) => MessageChannel;
declare type require = (type: Function) => MessageChannel;
export declare type Guid=number;
var jobs = {};
var e = {};
var _Instance: mvc.Initializer[] = [];

//secured vars
var isRunning = false;
var id = -1;
var stack: thread.IDispatcherCallback[] = [];
var djobs: thread.IDispatcherCallback[] = [];
var cj = 0;
//end secured vars

(window as any).cnt = [];
var _p = false;
var sw = true;
export namespace Common {
    export var Message: models.Message = null;
    export var Math = Math;
}

namespace vars {
    export var _c = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    export var _cnts = [7, 11, 15, 19, 32];
    export var names_scop_fromIn = false;
}

var max = 9223372036854775807;
export namespace css {
    export function toValidCssName(c) {
        if (typeof c !== 'string') return c;
        for (var i = 0; i < c.length; i++) {
            var h = c.charCodeAt(i);
            if (h > 64 && h < 91) {
                c = c.substring(0, i) + '-' + String.fromCharCode(h + 32) + c.substring(i + 1);
                i++;
            }
            else if (h === 36) {
                c = c.substring(0, i) + '-' + c.substring(++i);
            }

            else if (h === 95) {
                c = c.substring(0, i) + '--' + c.substring(++i);
            }
        }
        return c;
    }
    export function toValidEnumName(c) {
        if (typeof c !== 'string') return c;
        for (var i = 0; i < c.length; i++) {
            var h = c.charCodeAt(i);
            if (h >= 65 && h <= 90)
                throw "InvalidCssName";
            var nh = c.charCodeAt(i + 1);

            if (h === 45) {
                if (nh >= 97 && nh <= 122) {
                    c = c.substring(0, i) + String.fromCharCode(nh - 32) + c.substring(i + 2);
                }
                else {
                    if (c.charCodeAt(i + 1) === 45) {
                        {
                            c = c.substring(0, i) + '_' + c.substring(i + 2); continue;
                        }
                    } else
                        c = c.substring(0, i) + '$' + c.substring(i + 1);
                    i += 1;
                }

            }
        }
        return c;
    }
}


export namespace string {

    export function IsPrintable(keyCode:number,charCode:number) {
        // What a control/printable character is varies wildly based on the browser.
        // - most control characters (arrows, backspace) do not send a `keypress` event
        //   in Chrome, but the *do* on Firefox
        // - in Firefox, when they do send a `keypress` event, control chars have
        //   a charCode = 0, keyCode = xx (for ex. 40 for down arrow)
        // - printable characters always send a keypress event.
        // - in Firefox, printable chars always have a keyCode = 0. In Chrome, the keyCode
        //   always matches the charCode.
        // None of this makes any sense.
        // For these keys, ASCII code == browser keycode.

        var anyNonPrintable =
            (keyCode == 8) ||  // backspace
            (keyCode == 9) ||  // tab
            (keyCode == 13) ||  // enter
            (keyCode == 27);     // escape

        // For these keys, make sure it's a browser keycode and not an ASCII code.
        var mozNonPrintable =
            (keyCode == 19) ||  // pause
            (keyCode == 20) ||  // caps lock
            (keyCode == 45) ||  // insert
            (keyCode == 46) ||  // delete
            (keyCode == 144) ||  // num lock
            (keyCode == 145) ||  // scroll lock
            (keyCode > 32 && keyCode < 41) || // page up/down, end, home, arrows
            (keyCode > 111 && keyCode < 124); // fn keys

        return !anyNonPrintable && !(charCode == 0 && mozNonPrintable);
    }
}
export namespace basic {

    function defaultUrl(url: string) {
        if (!url) url = document.location.origin;
        var x = url.split('/');
        if ((url as any).endsWith('/')) {
            url = url.substr(0, url.length - 1);
        }
        return url;
    }
    export var host = defaultUrl(true ? null : 'http://127.0.0.1:801');// 'https://localhost:5000';
    export interface ICrypto {
        Encrypt(data: number[]): number[];
        Decrypt(data: number[]): number[];


        SEncrypt(data: string): string;
        SDecrypt(data: string): string;
    }
    export const Crypto: ICrypto = { Decrypt: (d) => d, Encrypt: (d) => d, SEncrypt: (d) => d, SDecrypt: (d) => d };

    var _guid = null;
    var _end = null;
    export function setGuidRange(start: number, end: number) {
        _guid = start;
        _end = end;
    }
    export function New() {
        if (_guid == null || _guid >= _end) {
            var x = Date.now() * 100000 + Math.floor(Math.random() * 775823);
            return x < max ? x : (Date.now() * 10000) / 10000 | (Math.random() * 771);
        } else {
            return _guid++;
        }
    }


    class GuidManager {
        start: number = 0; end: number = 0; get current(): number {
            return _guid;
        }
        constructor(private vars) {
        }
        get isValid(): boolean {
            return _guid !== 0 && _guid < _end;
        }
        public New<T>(callback: (id: number, param: T) => void, pram: T) {
            if (this.isValid)
                callback(_guid++, pram);
            else {
                var t = new net.WebRequest(null);
                t.Download({ Url: '/~Guid', HasBody: false, Method: net.WebRequestMethod.Get }, callback);
                t.OnComplete.On = (e) => {
                    callback(_guid, pram);
                    t.Dispose();
                    
                }
                
            }

        }
    }

    export function isFocused(v: Element) {
        var t = document.activeElement;
        while (t) {
            if (t == v) return true;
            t = t.parentElement;
        }
        return false;
    }
    
    declare var $;
    export class focuser {
                
        constructor(private bound: HTMLElement, private andButton: boolean) { }
        getNext(p: Element) {
            var ns;
            while (p && !(ns = p.nextElementSibling)) {
                if (this.bound.contains(p))
                    p = p.parentElement;
                else return null;
            }
            return ns;
        }
        _focuseNext(v: Element, array: Element[]) {
            if (!v) return false;
            if (array.indexOf(v) != -1) return false;
            array.push(v);
            if (v === document.activeElement) {
                v = getNext(v);
                if (!v) return true;
                array.push(v);
            }
            var tmp;
            if (v instanceof HTMLInputElement || (this.andButton && (v instanceof HTMLButtonElement|| v instanceof HTMLSelectElement))) {
                v.focus();
                if ((v as any).select) (v as any).select();
                return v;
            }
            if (v instanceof HTMLElement)
                if ((tmp =this. _focuseNext(v.firstElementChild, array))) return tmp;
            var n = getNext(v);
            if (n) return this._focuseNext(n, array);
            return true;
        }
        focuseNext(rebound: boolean) {
            var x = this._focuseNext(document.activeElement, [])
            if (rebound)
                if (x == true) return this._focuseNext(this.bound, []);
            return x;
        }
    }
    var _fc = new focuser(null, false);
    export function focuseOn(v: HTMLElement): boolean {
        (_fc as any).bound = v;
         return    _fc.focuseNext(true);
    }

    function getNext(p: Element) {
        var ns;
        while (p && !(ns = p.nextElementSibling))
            p = p.parentElement;
        return ns;
    }
    function _xfocuseNext(v: Element, array: Element[]) {
        if (!v) return false;
        if (array.indexOf(v) != -1) return false;
        array.push(v);
        if (v === document.activeElement) {
            v = getNext(v);
            if (!v) return true;
            array.push(v);
        }
        var tmp;
        if (v instanceof HTMLInputElement) {
            v.focus();
            return v;
        }
        if (v instanceof HTMLElement)
            if ((tmp = _xfocuseNext(v.firstElementChild, array))) return tmp;
        var n = getNext(v);
        if (n) return _xfocuseNext(n, array);
        return true;
    }
    export function focuseNext(v: Element) {
        return _xfocuseNext(v || document.activeElement, []);
    }


    export interface IRef<T> {
        value: T;
        aux?: any;
    }
    export interface IEventHandler extends IDisposable {
        Started: boolean;
        Start();
        Pause();
        Dispose();
        Reset();
    }
    export interface Module {
    }
    export interface IContext {
        CanAccessToMe(type: string, folder: string, name: string);
        GetPath(path: string): string;
        NameOf(type: Function): string;
        GetType(path: string): Function;
    }

    export interface IDisposable {
        Dispose(force?: boolean);
    }
    export interface IBindable {
        Owner?: any;
        Invoke(...args: any[]);
    }
    export interface ITBindable<T extends (...args: any[]) => void> extends IBindable {
        Invoke: T;
    }

    export interface IOnDisposing extends IDisposable {
        OnDisposing: (s: this) => void;
        Dispose();
    }
    export interface IDelegate extends IDisposable, EventListenerObject, IBindable {

        handleEvent(...args: any[]): void;
    }
    export class Delegate<T> implements IDelegate {
        constructor(public Owner: T, public Invoke: (...args: any[]) => void, private _dispose: (ihe: Delegate<T>) => void, public objectStat?: any) {
        }
        handleEvent(...args: any[]): void {
            this.Invoke.apply(this.Owner, args);
        }
        Dispose() {
            this._dispose(this);
            this.Owner = null;
            this._dispose = null;
            this.Invoke = null;
        }
    }
    export interface IValueCheck {
        [s: string]: (v: any) => boolean;
    }
    export interface IJob {
        Name: string,
        Todo?(job: bind.JobInstance, e: bind.EventArgs<any, any>): void;
        Check?(job: bind.JobInstance, e: bind.EventArgs<any, any>): void;
        OnError?(job: bind.JobInstance, e: bind.EventArgs<any, any>): void;
        OnInitialize?(job: bind.JobInstance, e: bind.EventArgs<any, any>): void;
        OnScopDisposing?(job: bind.JobInstance, e: bind.EventArgs<any, any>): void;
    }

    export class Rectangle {

        private _x: number;
        public get Left(): number {
            return this._x;
        }
        public set Left(v: number) {
            this._x = v;
            this.OnChanged();
        }


        private _y: number;
        public get Top(): number {
            return this._y;
        }
        public set Top(v: number) {
            this._y = v;
            this.OnChanged();
        }

        private _w: number;
        public get Width(): number {
            return this._w;
        }
        public set Width(v: number) {
            this._w = v;
            this.OnChanged();
        }

        private _h: number;
        public get Height(): number {
            return this._h;
        }
        public set Height(v: number) {
            this._h = v;
            this.OnChanged();
        }
        private OnChanged() {
            for (var i = 0; i < this._onchanged.length; i++) {
                var dlg = this._onchanged[i];
                dlg(this);
            }
        }
        private _onchanged: Array<(___this: Rectangle) => void> = [];
        constructor() {
            Object.freeze(this);
            Object.preventExtensions(this);
        }
        public Set(left: number, top: number, width: number, height: number) {
            this._x = left;
            this._y = top;
            this._w = width;
            this._h = height;
            this.OnChanged();
        }
    }
    export interface EqualInterface {
        Equals(o: Object): boolean;
    }
    export interface scopCollection {
        [s: string]: bind.Scop;
    }


    export class iGuid implements EqualInterface {
        public static Empty = new iGuid('00000000-0000-0000-0000-000000000000');
        private _id: string;
        public get Id() { return this._id; }
        constructor(g: string) {
            this._id = g.toUpperCase();
        }
        Equals(o: any): boolean {
            if (o instanceof iGuid)
                return this._id == (<iGuid>o)._id;
            return false;
        }
        toString() { return this._id.toString(); }

        private static FromNumber(v: number) {
            var c = vars._c;
            var cnts = vars._cnts;
            var cc = 0;
            var l = "";
            var i = 0;
            while (i < 32) {
                var d: number, r: number;
                if (v !== 0) {
                    var d = v / 16;
                    var r = Math.floor(v % 16);
                    v = Math.floor(d);
                } else
                    r = Math.floor(Math.random() * 16);
                l += c[r];
                if (i == cnts[cc]) {
                    l += '-';
                    cc++;
                }
                i++;
            }
            return new iGuid(l);
        }
        public static get New() {
            return iGuid.FromNumber(Date.now());
        }

    }
    export interface IId {
        Id: number;
    }

    export class EnumValue {
        constructor(
            public Name: string,
            public Value: number) { Object.freeze(this); }
        toString() { return this.Name; }
        public static GetValue(lst: collection.List<EnumValue>, n: number | string) {
            var c = lst.AsList();
            if (typeof n === 'number') {
                for (var i = 0; i < c.length; i++)
                    if (c[i].Value === n) return c[i];
            } else {
                for (var i = 0; i < c.length; i++)
                    if (c[i].Name === n) return c[i];
            }
            return undefined;
        }
    }
   
    var enums = {};
    export function getEnum(enumPath: string, enumValue?: Object): collection.List<EnumValue> {
        var _enum;
        if (typeof enumPath === 'string')
            _enum = enums[enumPath] || enumValue || context.GetEnum(enumPath);
        else throw "the Path Inspecified";
        if (!(_enum instanceof collection.List && (<collection.List<EnumValue>>_enum).IsFrozen())) {
            if (_enum == null) throw "Enum not founded";
            if (_enum.constructor !== Object) throw "Error Parsing Enum";
            enums[enumPath] = _enum = new collection.List(EnumValue, gen(_enum));
            _enum.Freeze();
        }
        return _enum;
    }
    function gen(_enum) {
        var o = [];
        for (var i in _enum)
            if (isNaN(parseFloat(i)))
                o.push(new basic.EnumValue(i, _enum[i]));
        return o;
    }
    var t = /@([a-zA-Z][a-zA-Z\d\.]*)/mgi;
    export interface SIndex {
        Name: string;
        Index: number;
    }
    export function CompileString(s: string, getString?: (value: any,param:any) => string,params?:any) {
        return StringCompile.Compile(s, getString,params);
    }
    export class EvalCode {
        /** @param {string} code*/
        /**@param {function} callback*/
        /** @returns {void} */

        static Compile(code, callback) {
            var b = new Blob([code], { type: "text/javascript" });
            var scrpt = document.createElement('script');
            scrpt.src = URL.createObjectURL(b, { oneTimeOnly: true });
            scrpt.addEventListener('load', function () {
                if (b.msClose) b.msClose();
                document.head.removeChild(scrpt);
                callback && callback();
            });
            document.head.appendChild(scrpt);
        }
        /** @param {string} code*/
        /**@param {function} callback*/
        /**@param {Array<string>} params*/
        /** @returns {void} */

        static CompileExpression(expression: string, params: string[], callback?: (exprFn: Function, stat: any) => void, stat?: any) {
            var code = internal.getExpression(expression, params, callback, stat);
            var b = new Blob([code], { type: "text/javascript" });
            var url = URL.createObjectURL(b, { oneTimeOnly: true });
            var scrpt = document.createElement('script');
            scrpt.src = url;
            scrpt.addEventListener('load', function () {
                if (b.msClose) b.msClose();
                document.head.removeChild(scrpt);
               // callback && callback();
            });
            document.head.appendChild(scrpt);
        }
    }
    interface IReg {
        name: string;
        stat?: any;
        callback: (exprFn: Function, stat: any) => void;
    }
    namespace internal {
        var reg: { [s: string]: IReg } = {};
        var i = 0;
        function register(rg: IReg) {
            if (reg[rg.name]) console.error("Duplicated ExprFn Occurred {}");
            reg[rg.name] = rg;
        }
        function defineExpression(name, expr) {
            var rg = reg[name];
            delete reg[name];
            if (rg.callback)
                rg.callback(expr, rg.stat);
        }
       export function getExpression(expression: string, params: string[], callback: (exprFn: Function, stat: any) => void, stat?: any) {
            var _expressionName = "$$__exprFn__" + i++;
            var _params = params.join(',');
            var code = "window.defineExpression('" + _expressionName + "', function (" + _params + ") { return " + expression + "; });";
            var rg: IReg = {
                name: _expressionName,
                callback: callback,
                stat: stat
            };
            register(rg);
            return code;
        }
        Object.defineProperty(window, "defineExpression", { get: () => { return defineExpression; }, set: () => { }, configurable: false, enumerable: false });
    }
    export class StringCompile {

        constructor(protected indexer: (string | SIndex)[], private getString: (name: string, value: any) => string, public params:any) {
            this.onDataChanged = this.onDataChanged.bind(this);
        }
        private static generateIndexer(s, array: SIndex[]) {
            var x: (string | SIndex)[] = [];
            var lcur = 0;
            for (var i = 0; i < array.length; i++) {
                var n = array[i];
                var l = n.Index - lcur;
                if (l > 0)
                    x.push(s.substr(lcur, l));
                x.push(n);
                lcur = n.Index + n.Name.length + 1;
            }
            l = s.length - lcur;
            if (l > 0)
                x.push(s.substr(lcur, l));
            return x;
        }
        public static Compile(s: string, getString?: (name: string, value: any) => string, params?: any) {
            var i = 0;
            var rslt: RegExpExecArray;
            var array: SIndex[] = [];
            while (rslt = t.exec(s))
                array.push(<SIndex>{ Name: rslt[1], Index: rslt.index });
            return new StringCompile(this.generateIndexer(s, array), getString, params);
        }
        
        public apply(data: any): string {
            
            var s: string = "";
            var a = this.indexer.slice();
            for (var i = 0; i < a.length; i++) {
                var t = a[i] as SIndex;
                if (typeof t !== 'string')
                    a[i] = this.getString ? this.getString(t.Name, data[t.Name]) : String(data[t.Name]);
            }
            return String.prototype.concat.apply("", a);
        }
        public bind(data: bind.DObject) {
            var ld = this.data;
            if (ld)
                ld.removeListener(this.onDataChanged);
            if (data)
                data.addListener(this.onDataChanged);
            this.data = data;
            return this.onDataChanged(null);
        }
        private data: bind.DObject;
        private pb: (ev: bind.EventArgs<any, any>) => void;
        private onDataChanged(ev:bind.EventArgs<any, any>):void {
            var s: string = "";
            var a = this.indexer.slice();
            var data = this.data || {};
            for (var i = 0; i < a.length; i++) {
                var t = a[i] as SIndex;
                if (typeof t !== 'string')
                    a[i] = this.data[t.Name] || "";
            }
            return this.Value = String.prototype.concat.apply("", a);
        }
        public Value: string;
    }
    window["SC"] = StringCompile;
    export interface Stat {
        Data: any;
        Back();
        Go();
        Forward();
    }
    export class History {
        private index: number = -1;
        private stats: Stat[] = [];
        public Push(stat: Stat) {
            this.stats.splice(this.index + 1, 0, stat);
        }
        public goBack() {
            var c = this.Current;
            c.Back();
            this.Index--;
            var c = this.Current;
            if (c) c.Go();
        }
        public goForward() {
            var c = this.Current;
            if (c)
                c.Forward();
            this.Index++;
            var c = this.Current;
            if (c) c.Go();
        }
        public get Current() { return this.stats[this.index]; }
        private set Index(i: number) {
            if (i < 0) this.index = -1;
            else if (i >= this.stats.length) this.index = this.stats.length - 1;
            else this.index = i;
        }
        private get Index() { return this.index; }
    }

    
}



export namespace reflection {


    function isInstanceOfClassName(instance, className) {
        while ((instance = instance.__proto__)) {
            if (instance.constructor.name == className)
                return true;
        }
        return false;
    }
    function isInstanceOfClass(instance, type) {
        while ((instance = instance.__proto__)) {
            if (instance.constructor == type)
                return true;
        }
        return false;
    }
    function _isInstanceOf(type: Function, superType: Function): boolean {
        var t: any = type;
        while (type) {
            if (type == superType) return true;
            t = t.base;
        }
        return false;
    }

    export function GetBaseType (type)  {
        if (type instanceof reflection.GenericType) {
            return (type as reflection.GenericType).GetBaseType();
        }
        var p = type.prototype.__proto__;
        if (p == null) return null;
        return p.constructor;
    }

    export function GetBaseTypes  (type, totype?):typeof Object[] {
        var l = [];
        var pr = type.prototype;
        do {
            if (pr.constructor == totype) break;
            l.push(pr.constructor);
            pr = pr.__proto__;
        } while (pr !== null);
        return l;
    }

    export function IsInstanceOf  (type, superType)  {
        if (type === superType || superType === Object) return true;
        if (type.constructor == reflection.GenericType) type = (type as reflection.GenericType).Constructor;
        if (superType.constructor == reflection.GenericType) superType = (superType as reflection.GenericType).Constructor;

        var pr = type.prototype;
        do {
            if (pr.constructor === superType) return true;
            pr = pr.__proto__;
        } while (pr !== null);
        return false;
    }
    
    export class Type {
        private passed = [];
        type: Function;
        constructor(type) {
            this.type = type;
        }
        _getPath(root) {
            for (var i in root) {
                var v = root[i];
                if (this.passed.indexOf(v) !== -1) continue;
                this.passed.push(v);
                switch (typeof v) {
                    case 'string': case 'number': case 'boolean': case 'undefined': continue;
                    default:
                        if (v === this.type) { return i; }
                        if (v instanceof Function) continue;
                        var x = this._getPath(v);
                        if (x != null) return i + '.' + x;
                        break;
                }
            }
        }
        GetType(root) {
            if (this.passed == null) this.passed = [];
            this.passed.length = 0;
            return this._getPath(root);
        }
    }
    var _gtypes: collection.Dictionary<GenericType, Function>
    function gtypes() {
        return _gtypes || (_gtypes = new collection.Dictionary<GenericType, Function>("GTypes", true));
    }

    export class GenericType {
        public prototype;
        constructor(
            public Constructor: Function,
            public Params: Function[], base: Function) {
            //super();
            this.prototype = Constructor.prototype;
            if (!_p) throw this;
            gtypes().Set(this, base);
            _p = false;
        }

        public get base() { return gtypes().Get(this) }
        public GetBaseType() {
            return gtypes().Get(this);
        }
        public static GetType(type: Function, params?: Function[], checkOnly?: boolean, base?: Function): GenericType | Function {
            if (typeof type !== 'function') throw 'type must be fanction';
            if (params == null || params.length === 0) return type;
            var i = this.i(type);
            for (var i = gtypes().Count - 1; i >= 0; i--) {
                var e = gtypes().GetKeyAt(i);
                if (type == e.Constructor) {
                    if (params.length == e.Params.length) {
                        var p = e.Params;
                        for (var j = p.length - 1; j >= 0; j--) {
                            if (p[j] != params[j]) {
                                p = undefined; break;
                            }
                        }
                        if (p) return e;
                    }
                }
            }
            if (checkOnly) return
            _p = true;
            return new GenericType(type, params, base == null ? GetBaseType(type) : base);
        }

        private static i(f) { return f instanceof GenericType ? 1 : 0; }
        private static IsInstanceOf(type, superType) {
            return (this as any)._isInstanceOf[this.i(type) + this.i(superType) * 2](type, superType);
        }
        private static _isInstanceOf = [
            (type: Function, superType: Function) => {
                return IsInstanceOf(type, superType);
            },
            (type: Function, superGType: GenericType) => {
                return IsInstanceOf(type, superGType.Constructor);
            },
            (gtype: GenericType, superGType: GenericType) => {
                return IsInstanceOf(gtype.Constructor, superGType.Constructor);
            },
            (gtype: GenericType, superType: Function) => {
                return IsInstanceOf(gtype.Constructor, superType);
            }];
    }

    (<any>Function).prototype.IsInstanceOf = reflection.IsInstanceOf;

    export class DelayedType{
        get Type(): Function {
            return this._type();
        }
        private _type: () => Function;
        constructor(type: () => Function) {
            this._type = type;
        }
    };
}

namespace services {
    export var Service = (function () {
        function execute() {
            var i = binds.length > 100 ? 100 : binds.length;
            while (i > 0) {
                i--;
                var t = binds.pop();
                var bs: bind.PropBinding[] = t[0];
                var arg: bind.EventArgs<any, any> = t[1];
                for (var i = 0; i < bs.length; i++) {
                    var b = bs[i];
                    b.handleEvent(arg);
                    b.IsWaiting = false;
                }

            }
        }
        class Service {
            public static Push(ps: bind.PropBinding[], e: bind.EventArgs<any, any>) {
                var a = (e.prop as any).IsAsync;
                var x = new Array<bind.PropBinding>();
                for (var i = 0; i < ps.length; i++) {
                    var p = ps[i];
                    if (a) {
                        if (!p.IsWaiting) {
                            p.IsWaiting = true;
                            x.push(p);
                        }
                        continue;
                    } else
                        p.handleEvent(e);
                }
                if (x.length > 0) binds.push([x, e]);
            }
            public static Close() {
                isRunning = true;
                clearInterval(id);
            }
            public static Restart() {
                clearInterval(id);
                id = setInterval(execute, 1000);
                isRunning = true;
            }

            public static get IsRunning() { return isRunning; }
        }
        //let id = setInterval(execute, 100);
        let isRunning: boolean = true;
        let binds: any[] = [];
        return Service;

    })();
}

namespace internal {
    export class __data {
        constructor(public name: string, public event: string, public delegate: EventListenerOrEventListenerObject) { }
    }
}

export namespace bind {
    export class Job implements basic.IJob {

        constructor(
            public Name: string,
            public Todo: (job: JobInstance, e: bind.EventArgs<any, any>) => void,
            public Check?: (job: JobInstance, e: bind.EventArgs<any, any>) => void,
            public OnError?: (job: JobInstance, e: bind.EventArgs<any, any>) => void,
            public OnInitialize?: (job: JobInstance, e: bind.EventArgs<any, any>) => void,
            public OnScopDisposing?: (job: JobInstance, e: bind.EventArgs<any, any>) => void

        ) {
            jobs[Name] = this;
        }
    }
    export class Jobs implements basic.IJob {
        private _jobs: basic.IJob[] = [];
        public Todo(job: JobInstance, e: bind.EventArgs<any, any>): void {
        }
        public Check(job: JobInstance, e: bind.EventArgs<any, any>): void {
        }
        public OnError(job: JobInstance, e: bind.EventArgs<any, any>): void { }
        public OnInitialize(job: JobInstance, e: bind.EventArgs<any, any>): void { }
        public OnScopDisposing(job: JobInstance, e: bind.EventArgs<any, any>): void {
        }
        constructor(public Name: string) {
            jobs[Name] = this;
        }
        public push(jobName) {
        }
    }
    export class JobInstance implements EventListenerObject {
        public Control: UI.JControl;
        private _events: internal.__data[] = [];
        public Handle: (ji: JobInstance, e: Event) => void;
        public addEventListener(name: string, event: string, delegate: EventListenerOrEventListenerObject|any) {
            this._events.push(new internal.__data(name, event, delegate));
            (this.dom as HTMLElement).addEventListener(event, delegate);
        }
        public removeEventListener(name: string) {
            var t = this._events;
            for (var i = t.length - 1; i >= 0; i--) {
                var d = t[i];
                if (d.name == name) {
                    this.dom.removeEventListener(d.event, d.delegate);
                    t.splice(i, 1);
                    return;
                }
            }
        }
        private getEvent(name: string) {
            var t = this._events;
            for (var i = t.length; i >= 0; i--) {
                var d = t[i];
                if (d.name == name)
                    return d.delegate;

            }
            return null;
        }
        constructor(public Scop: bind.Scop, public job: basic.IJob, public dom: HTMLElement) {
            this.propb = Scop.OnPropertyChanged(bind.Scop.DPValue, this.ValueChanged, this);
        }

        private propb: PropBinding;
        private ValueChanged(s, e: bind.EventArgs<any, Scop>) {
            if (this.job != null && this.job.Todo != null)
                this.job.Todo(this, e);
        }
        public Dispose() {
            var dx = this.job.OnScopDisposing;
            if (dx != null) dx(this, null);
            var t = this._events;
            for (var i = t.length - 1; i >= 0; i--) {
                var d = t[i];
                this.dom.removeEventListener(d.event, d.delegate);
                t[i] = null;
            }
            this._events.splice(0);
            this._events = null;
            this._store = null;
            this.Checker = null;
            this.dom = null;
            this.Handle = null;
            this.job = null;
            this.Scop.removeEvent(bind.Scop.DPValue, this.propb);
            this.Scop = null;
            this.propb.Dispose();
            this.propb = null;
            this.IsDisposed = true;
        }
        public IsDisposed;
        public _store: any = {};
        public addValue(name: string, value: any) {
            this._store[name] = value;
        }
        public getValue(name: string) {
            return this._store[name];
        }

        public Checker: (value: any) => boolean;
        public Ischanging: boolean;
        handleEvent(e: Event) {
            if (this.Handle) this.Handle(this, e);
        }
    }
    export function GetJob(name: string): basic.IJob {
        var l = jobs[name];
        if (l == null) return Register(new Job(name, null, null, null, null, null));
        return l;
    };
    export function Register(job:basic. IJob, override?: boolean): basic.IJob {
        var l: Job = jobs[job.Name];
        if (l != null)

            if (override) {
                jobs[job.Name] = job;
                return job;
            } else
                return l;
        else return jobs[job.Name] = job;
    };
 
}


export namespace thread {

    export interface IDispatcherCallback {
        callback: (delegate: (...param: any[]) => void, param: any, _this: any) => void;
        params: JobParam;
        _this: any;
        optimizable: boolean;
        isWaiting: boolean;
        id: number;
        children: IDispatcherCallback[];
        ce: number;
    };
    export class JobParam {
        public params: any[];
        constructor(public id: number, params?: any[]) {
            this.params = params || [];
        }
        public Set(...params: any[]) {
            let p;
            for (var i = params.length - 1; i >= 0; i--)
                if ((p = params[i]) === undefined) continue;
                else
                    this.params[i] = p;
            return this;
        }
        public Set1(params: any[]) {
            let p;
            for (var i = params.length - 1; i >= 0; i--)
                if ((p = params[i]) === undefined) continue;
                else
                    this.params[i] = p;
            return this;
        }
        public Clone() {
            var t = new JobParam(this.id);
            t.Set1(this.params);
            return t;
        }
    }
    var OnIdle: ({ owner: any, callback: () => void })[] = [];
    var isIdle: boolean;
    function asIdle() {
        isIdle = true;
        var idls = OnIdle.slice();
        OnIdle = [];
        for (var i = 0; i < OnIdle.length; i++) {
            try {
                var t = OnIdle[i];
                t.callback.call(t.owner);
            } catch (e) {
            }
        }
        
        isIdle = false;
        if (stack.length != 0) {
            clearTimeout(id);
            id = setTimeout((<any>Dispatcher).start, 0);
            isRunning = true;
        }
    }
    export class Dispatcher {
        public static OnIdle(owner: any, callback: () => void) {
            if (isIdle || !isRunning)
                try {
                    callback.call(owner);
                } catch (e) {

                }
            else
                OnIdle.push({ owner: owner, callback: callback });
        }
        
        static InIdle() { return isIdle;}
        static GC() {
            for (var i = 0, l = djobs.length; i < l; i++) {
                var c = djobs[i];
                c.children.length = 0;
                c.ce = 0;
            }
            stack.length = 0;
            cj = 0;
            asIdle();
        }
        static clone(ojob: IDispatcherCallback, params: any[]) {
            var l = {
                callback: ojob.callback,
                _this: ojob._this, id:
                ojob.id,
                isWaiting: true,
                optimizable: false,
                params: new JobParam(ojob.id).Set1(params || ojob.params.params)
            };
            ojob.children.push(l as thread.IDispatcherCallback);
            return l as IDispatcherCallback;
        }
        public static cretaeJob(delegate: (...param: any[]) => void, param: any[], _this: any, optimizable: boolean) {
            var t = {
                callback: delegate,
                params: new JobParam(djobs.length, param),
                _this: _this,
                optimizable: optimizable,
                isWaiting: false,
                id: djobs.length, children: [], ce: 0
            };
            djobs.push(t);
            return t.params;
        }
        public static Clear(o: JobParam) {
            var k = djobs[o.id];
            var pj = k.children;
            var ce = k.ce;
            var l = pj.length;
            for (var i = l - 1; i > ce; i--) {
                var c = pj[i];
                c.isWaiting = false;
                c.optimizable = true;
            }
            pj.length = 0;
            k.ce = 0;
        }
        public static get CurrentJob() {
            return stack[cj];
        }
        private static start() {
            isRunning = true;
            if (stack.length === 0) {
                isRunning = false; asIdle();
                return;
            }
         
            var to = cj + Math.min(3, stack.length - cj);
            for (; cj < to; cj++) {
                var c = stack[cj];
                if (c.isWaiting)
                    try {
                        var p = c.params.params;
                        c.callback.call(c._this, p[0], p[1], p[2]);
                    } catch (e) {
                    }
                if (!c.optimizable) {
                    var pj = djobs[c.id];
                    pj.ce++;
                }
                c.isWaiting = false;
                stack[cj] = null;
            }

            isRunning = cj < stack.length;
            if (isRunning)
                id = setTimeout(Dispatcher.start, 0);
            else Dispatcher.GC();
         
        }
        public static Push(ojob: JobParam, params?: any[]) {
            var job = djobs[ojob.id];
            if (!job.optimizable)
                job = this.clone(job, params);
            else {
                if (params)
                    job.params.Set(params);
                if (job.isWaiting) {  return; }
            }
            job.isWaiting = true;
            stack.push(job);
            if (!isRunning)
                if (stack.length > 0) {
                    clearTimeout(id);
                    id = setTimeout(Dispatcher.start, 0);
                    isRunning = true;
                    isIdle = false;
                }
            return job;
        }
        public static call(_this,fn: Function, ...args: any[]) {
            this.Push(delayedJob, [_this, fn, args]);
        }
    }
    var delayedJob = thread.Dispatcher.cretaeJob((context, fun: Function, args) => {
        fun.apply(context, args);
    }, [], null, false);
}

export module bind {
    
    export class DProperty<T, P> {
        Index: number;
        GType: reflection.GenericType;
        constructor(public Attribute: PropertyAttribute, public Name: string, public Type: GFunction, public DefaultValue?: T, public Changed?: (e: EventArgs<T, P>) => void, public Check?: (e: EventArgs<T, P>) => void) {
            if (Type instanceof reflection.GenericType)
                this.GType = Type as reflection.GenericType;
            this.RedifineChecker();
        }
        public get IsKey() {
            return (this.Attribute & PropertyAttribute.IsKey) === PropertyAttribute.IsKey;
        }
        private RedifineChecker() {
            switch (this.Type) {
                case reflection.GenericType:
                    this.checkType = this.isGenerictype;
                    break;
                case Object:
                    this.checkType = DProperty.isObject;
                    break;
                case String:
                    this.checkType = DProperty.isString;
                    break;

                case Number:
                    this.checkType = DProperty.isNumber;
                    break;

                case Boolean:
                    this.checkType = DProperty.isBoolean;
                    break;

                case reflection. DelayedType:
                    break;
                default:
                    if (this.Type.constructor ==reflection. DelayedType)
                        break;
                    else if (this.Type.constructor === reflection.GenericType)
                        this.checkType = this.isGenerictype;
                    else
                        this.checkType = this._checkType;
                    break;
            }
        }
        public checkType(val: T): boolean {
            var t = <reflection. DelayedType>this.Type;
            this.Type = t.Type;
            if (this.Type instanceof reflection.GenericType)
                this.GType = this.Type as reflection.GenericType;
            this.RedifineChecker();
            return this.checkType(val);
        }
        public _checkType<T>(val: T): boolean {
            return val instanceof <Function>this.Type;
        }

        private isGenerictype<T>(val: T) {
            return val instanceof (<reflection.GenericType>this.Type).Constructor;
        }
        private static isObject<T>(val: T) {
            return true;
        }
        private static isString<T>(val: T) {
            return typeof val == 'string';
        }
        private static isNumber<T>(val: T) {
            return typeof val == 'number';
        }

        private static isBoolean<T>(val: T) {
            return typeof val == 'boolean';
        }
    }
    export class EventArgs<T, P> implements basic.IDisposable {
        prop: DProperty<T, P>;
        __this: P;
        _old: T;
        _new: T;
        IsValid = true;
        constructor(prop: DProperty<T, P>, ithis: P, _old: T, _new: T) {
            this.prop = prop;
            this.__this = ithis;
            this._new = _new;
            this._old = _old;
        }
        public Dispose() {
            delete this.prop;
            delete this.__this;
            delete this._new;
            delete this._old;
        }
    }
    export class Ref<T> {
        private _key: T;
        public get key(): T {
            return this._key;
        }
        public set key(v: T) {
            this._key = v;
        }
    }
    export class EventListener<T extends Function> implements basic.IDisposable {
        private _deleagtes: T[] = [];
        private key: Object = new Object();
        private isSingliton: boolean;
        constructor(key: any, isSingliton?: boolean) {
            this.key = key;
            this.isSingliton = isSingliton === true;
        }
        public set On(delegate: T) {
            this._deleagtes.push(delegate);
        }
        private locks: T[] = [];
        public set Off(delegate: T) {
            if (this.lock) { this.locks.push(delegate); return; }
            var i = this._deleagtes.indexOf(delegate);
            if (i == -1) return;
            this._deleagtes.splice(i, 1);
        }
        private lock: boolean = false;
        public Invoke(key: Object, params: any[]) {
            if (key != this.key || l <= 0) return;
            this.lock = true;
            if (this.isSingliton) {
                while (this._deleagtes.length > 0)
                    try {
                        this._deleagtes.shift().apply(this, params);
                        //callBack(this._deleagtes.shift());
                    } catch (e) { }
                this.locks.length = 0;
            } else {
                for (var i = 0, l = this._deleagtes.length; i < l; i++)
                    try {
                        this._deleagtes[i].apply(this, params);
                        //callBack(this._deleagtes[i]);
                    } catch (e) { }
                this.lock = false;
                while (this.locks.length > 0)
                    this.Off = this.locks.pop();
            }
            this.lock = false;
        }
        public Invok(key: Object, callBack: (delegate: T) => any) {
            if (key != this.key || l <= 0) return;
            var lr;
            this.lock = true;
            if (this.isSingliton) {
                while (this._deleagtes.length > 0)
                    try { callBack(this._deleagtes.shift()); } catch (e) { }
                this.locks.length = 0;
            } else {
                for (var i = 0, l = this._deleagtes.length; i < l; i++)
                    try { lr = callBack(this._deleagtes[i]); } catch (e) { }
                this.lock = false;
                while (this.locks.length > 0)
                    this.Off = this.locks.pop();
            }
            this.lock = false;
            return lr;
        }
        public PInvok(key: Object, params: any[], owner?: any) {
            var l = this._deleagtes.length;
            if (key != this.key || l <= 0) return;
            var dlg = this._deleagtes.slice();
            var lr;
            if (this.isSingliton)
                this._deleagtes.length = 0;
            for (var i = 0; i < l; i++)
                try { lr = dlg[i].apply(owner, params); } catch (e) { }
            this.locks.length = 0;
            return lr;
        }
        public Add(delegate: T, key?: any) {
            if (this._store == null) this._store = [];
            if (key !== undefined)
                this._store[key] = delegate;
            this._deleagtes.push(delegate);
        }
        public Remove(key: any) {
            if (this._store) {
                var d = this._store[key];
                delete this._store[key];
                this.Off = d;
            }
        }
        private _store: any[];
        public Dispose() {
            this.key = null;
            this.locks.length = 0;
            this.locks = null;
            if (this._store) { this._store.length = 0; this._store = null; }
            this._deleagtes.length = 0;
            this._deleagtes = null;
        }
    }
    export class PropBinding implements basic.IDisposable,basic.IDelegate {
        public IsWaiting: boolean;
        constructor(public Invoke: (sender: PropBinding, e: EventArgs<any, any>) => void, public Owner?: any) {
            
        }
        private _isIvnoked;
        handleEvent(e: EventArgs<any, any>) {
            if (this._isIvnoked || this.Invoke == null) return;
            this._isIvnoked = true;
            try {
                if (this.Owner)
                    this.Invoke.apply(this.Owner || this, [this, e]);
                else
                    this.Invoke(this, e);
            } catch (error) {
                console.warn(error);
            }
            this._isIvnoked = false;
        }

        public Dispose() {
            this.Owner = null;
            this.Invoke = null;
        }
    }
    class PropertyStore implements basic.IDisposable {
        public Bindings: Array<PropBinding> = [];
        constructor(public Value?) {

        }
        public Dispose() {
            this.Value = null;
            for (var i = this.Bindings.length - 1; i >= 0; i--)
                this.Bindings[i].Dispose();
            this.Bindings.length = 0
            this.Bindings = null;
        }
    }
    export enum PropertyAttribute {
        NonSerializable = 2,
        Private = 4,
        SerializeAsId = 8,
        IsKey=16,
    }
    export enum ObjectAttribute {
        NonSerializable = 2,
    }
    class TypesMap {
        public get length() { return this.Fields.length; }
        public Fields: DProperty<any, DObject>[] = [];
        constructor(public Base: TypesMap) {
            this.Fields = Base ? Base.Fields.slice(0) : [];
        }
    }
    export abstract class DObject implements basic.IDisposable {
        private static _dpStore: Array<TypesMap> = [];
        private static _isOpen: boolean = false;
        public GetType() { return (<any>this).constructor; }
        public static __fields__(): bind.DProperty<any, any>[] { return []; }
        public static __attributes__() {

        }
        public static get isOpen(): boolean {
            return this._isOpen;
        }
        public static GetProperty(type: Function, name: string) {
            var id = DObject.getId(type);
            var s = DObject._dpStore[id];
            var f = s.Fields;
            for (var i = f.length - 1; i >= 0; i--) {
                var p = f[i];
                if (p.Name == name) return p;
            }
        }
        public static GetDPropertyAt(type: Function, index: number): DProperty<any, any> {
            var map = DObject.register(type);
            //var id = DObject.getId(type);
            //var s = DObject._dpStore[id];
            return map.Fields[index];
        }
        public GetProperty(name: string) {
            var types =reflection. GetBaseTypes(this.constructor, DObject);
            for (var j = 0; j < types.length; j++) {
                var id = DObject.getId(types[j]);
                var tm = DObject._dpStore[id];
                if (tm) {
                    for (var i = tm.Fields.length - 1; i >= 0; i--) {
                        if (tm.Fields[i].Name == name) { return tm.Fields[i]; }
                    }
                }
            }
            return null;
        }
        ToJson(_context: encoding.SerializationContext, indexer?: encoding.IIndexer): Object {
            indexer = indexer == undefined ? _context.getJson(this) : indexer;
            indexer.valid = true;
            var json = indexer.json;
            for (var tm = DObject._dpStore[DObject.getId(this.constructor)].Fields, j = 0, l = tm.length; j < l; j++) {
                var prop = tm[j];
                if ((prop.Attribute & 2) === 2) continue;
                var v = this.get(prop) as basic.IId;
                if ((prop.Attribute & 8) == 8)
                    if (v && v.Id) {
                        json[prop.Name] = v.Id;
                        continue;
                    } else continue;
                json[prop.Name] = _context.ToJson(v);
            }            
            return json;
        }

        FromJson(json: any, context: encoding.SerializationContext, update?: boolean): this {
            if (json == null) return this;
            var ref = json['@ref'] as encoding.IRef;
            delete json['@ref'];
            if (ref)
                context.set(ref.__ref__, this);
            update = update || false;
            for (var tm = DObject._dpStore[DObject.getId(this.constructor)].Fields, j = 0, l = tm.length; j < l; j++) {
                var prop = tm[j];
                if ((prop.Attribute & 4) === 4) continue;
                var val = json[prop.Name];
                if (update && val === undefined) continue;
               
                context.FromJson(val, prop.Type as any, new encoding.Path(this, prop));
            }
            return this;
        }
        public static IsClass(x: any) {
            if (typeof x == "function") {
                if (x == (<any>DObject).IsClass.constructor) return false;
                return true;
            }
            return false;
        }

        public static CreateField<PropertyType, ClassType>(name: string, type: Function | reflection.GenericType |reflection. DelayedType, defaultValue?: PropertyType, changed?: (e: EventArgs<PropertyType, ClassType>) => void, check?: (e: EventArgs<PropertyType, ClassType>) => void, attribute?: PropertyAttribute) {
            if (type == null)
                type = Object;
            return new DProperty<PropertyType, ClassType>(attribute, name, type, defaultValue, changed, check);
        }
        private static typeCount = 0;
        private static getId(type: any) {
            if (type.hasOwnProperty("__id__")) return type.__id__;
            var val = ++DObject.typeCount;
            Object.defineProperty(type, "__id__", {
                value: val, writable: false, configurable: false, enumerable: false
            });
            return val;
        }
        static xxx = window['xxx'] = [];
        private static _buildProperty(obj, propName: string) {
            var v = obj[propName];
            if (v != null) var t = v.constructor;
            else t = Object;
            return bind.DObject.CreateField(propName, t, v);
        }
        public static ToDObject(obj: any, props: string[]) {
            if (obj instanceof this || obj.hasOwnProperty("__id__")) return obj;
            var type = obj.getType instanceof Function ? obj.getType() : obj.constructor;
            if (!type.hasOwnProperty("__id__"))
                Object.defineProperty(type, "__id__", {
                    value: -1, writable: false, configurable: false, enumerable: false
                });
            else if (type !== -1) throw "Invalid type";
            
            var flds = new Array<bind.DProperty<any, any>>(props.length);
            for (var i = 0; i < props.length; i++) {
                var dp = flds[i] = this._buildProperty(obj, props[i]);
                dp.Index = i;
                setProperty(obj, dp);
            }
        }

        private static register(type: any) {

            var id = DObject.getId(type);
            var x = DObject._dpStore[id];
            if (x != null) return x;
            var c = reflection.GetBaseTypes(typeof (type) === 'function' ? type : type.constructor, DObject);            
            var u, lu: TypesMap;
            for (var i = c.length - 1; i >= 0; i--) {
                var bc = c[i];
                var id = DObject.getId(bc);
                u = DObject._dpStore[id];
                if (u == null) {
                    if (bc.hasOwnProperty('ctor'))
                        (bc as any).ctor();

                    if (bc.hasOwnProperty('_ctor'))
                        (bc as any)._ctor();
                    if (bc.hasOwnProperty('__fields__'))
                        var nld: () => DProperty<any, any>[] = bc["__fields__"];
                    else nld = null;
                    
                    DObject._isOpen = true;
                    u = new TypesMap(lu);
                    
                    var cnt = lu ? lu.length : 0;
                    var uf = nld ? bc["__fields__"]() : [];
                    for (var j = 0; j < uf.length; j++) {
                        var dp = uf[j] as DProperty<any, DObject>;
                        dp.Index = cnt + j;
                        if (!(dp.Type instanceof reflection.DelayedType))
                            Object.freeze(dp);
                        if (!bc.prototype.hasOwnProperty(dp.Name))
                            setProperty(bc, dp);
                        u.Fields.push(dp);
                    }
                    DObject._isOpen = false;
                    DObject._dpStore[id] = u;
                    Object.freeze(u);
                }
                lu = u;
            }
            return DObject._dpStore[id];
        }

        private store: PropertyStore[] = [];
        private getType() {
            return (<any>this).constructor;
        }
        private static stop = true;
        constructor() {            
            DObject.register(this.constructor);
        }
        public static getFieldsCount() {
            return this.register(this).Fields.length;
        }
        public static getFields(type?: Function) {
            var t = type || this;
            return this.register(type||this).Fields;
        }

        
        protected _isFrozen: boolean;
        protected set<T>(prop: DProperty<T, this>, value: T) {
            if (this._isFrozen) return;
            var ps = this.store[prop.Index] || (this.store[prop.Index] = new PropertyStore(prop.DefaultValue));
            var old = ps.Value;
            if (old === value) return;
            if (value != null)
                if (!prop.checkType(value))
                    throw { message: "Uncompatible type", this: this, property: prop, value: value };            
            var ev = new EventArgs(prop, this, <T>old, value);
            if (prop.Check)
                prop.Check(ev);
            if (old === ev._new || !ev.IsValid) return;
            ps.Value = ev._new;
            
            if (prop.Changed)
                prop.Changed(ev);
            this.onPropertyChanged(ev);
            return ev;
        }
        protected raise<T>(e: DProperty<T, this>) {
            var c = this.get(e);
            var ev = new EventArgs(e, this, c, c);
            this.onPropertyChanged(ev);
        }
        protected get<T>(prop: DProperty<T, this>): T {
            var ps = this.store[prop.Index];
            return ps ? ps.Value as T : prop.DefaultValue;
        }
        protected GetValues() {
            return this.store.map((v, i, a) => v && v.Value);
        }

        public GetValue<T>(prop: DProperty<T, this>): T {
            var ps = this.store[prop.Index];
            return ps ? ps.Value as T : prop.DefaultValue;
        }
        public SetValue<T>(prop: DProperty<T, this>, p: T) {
            this.set(prop, p);
        }

        private _propertyChanged: ((ev: EventArgs<any, this>) => void)[] = [];
        public removeListener(v: (ev: EventArgs<any, this>) => void) {
            var x = this._propertyChanged.indexOf((<any>v).Ref);
            if (x !== -1)
                this._propertyChanged.splice(x, 1);
            else
                return false;
            return true;
        }
        public addListener(v: (ev: EventArgs<any, this>) => void ) {
            if (this._propertyChanged.indexOf(v) !== -1) return false;
            this._propertyChanged.push(v);
            return true;
        }
        protected onPropertyChanged(ev: EventArgs<any, any>): void {
            for (var i = 0; i < this._propertyChanged.length; i++) {
                let dlg = this._propertyChanged[i];
                dlg(ev);
            }
            var x = this.store[ev.prop.Index];
            if (x) var y = x.Bindings;
            else return;
            for (var i = 0; i < y.length; i++)
                y[i].handleEvent(ev);
        }

        OnPropertyChanged<T>(prop: DProperty<T, this>, ev: (sender: PropBinding, ev: EventArgs<T, this>) => void, owner?: any): PropBinding {            
            var ps:any = this.store[prop.Index] || (this.store[prop.Index] = new PropertyStore(prop.DefaultValue));
            ps.Bindings.push(ps = new PropBinding(ev, owner));
            return ps;
        }
        public addEvent<T>(prop: DProperty<T, this>, b: PropBinding) {
            var ps: any = this.store[prop.Index] || (this.store[prop.Index] = new PropertyStore(prop.DefaultValue));
            ps.Bindings.push(b);
        }

        public removeEvent<T>(prop: DProperty<T, this>, y: PropBinding) {
            var ps = this.store[prop.Index];
            if (ps) {
                var i = ps.Bindings.indexOf(y);
                if (i != -1)
                    return ps.Bindings.splice(i, 1);
            }
            return null;
        }
        public get Disposed() { return this.DisposingStat !== 0; }
        protected DisposingStat: DisposingStat;
        protected OnDispose(): boolean {
            if (this.DisposingStat === 2) return null;
            var h = this.DisposingStat == 1;
            this.DisposingStat = 1;
            if (!h && this.OnDisposing)
                this._onDisposing.Invoke(0, [this]);
            return h;
        }
        public Dispose() {
            var h = this.OnDispose();
            if (h === null) return;
            this._propertyChanged.length = 0;
            this._propertyChanged = null;
            for (var i = 0, l = this.store.length; i < l; i++)
                this.store[i] && this.store[i].Dispose();
            this.store.length = 0;
            this.store = null;
            if (!h) this.DisposingStat = 2;
        }
        private _onDisposing: bind.EventListener<(o: DObject) => void>;
        public set OnDisposing(v: (s: this) => void) { if (this._onDisposing === undefined) this._onDisposing = new bind.EventListener<(x: this) => void>(0, true); this._onDisposing.On = v; }
        public set OffDisposing(v: (s: this) => void) { if (this._onDisposing == undefined) return; this._onDisposing.Off = v;}
        public CloneTo(o: DObject) {
            o._propertyChanged = this._propertyChanged;
            o.addListener = this.addListener;
            o.store = this.store;
        }

        public Freeze() {
            this._isFrozen = true;
            for (var i = this.store.length - 1; i >= 0; i--)
                Object.freeze(this.store[i]);
            Object.freeze(this.store);
        }

        public IsFrozen() { return this._isFrozen; }
        public CreateBackup(OnUndo?: (self: this, bl: BuckupList<this>) => void) {            
            var e: BuckupList<this>;
            backups.GetOrAdd(this.store, []).push(e = { OnUndo: OnUndo, values: this.store.map((p, i) => { return p.Value }) });
            return e;
        }
        public Save(r?: BuckupList<any>) {
            var l = backups.Get(this.store);
            if (l == null || l.length === 0) return false;
            if (r) {
                var i = l.indexOf(r);
                if (i === -1) return;
                l.splice(i);
            } else l.pop();
        }
        public Undo(b?: BuckupList<this>, walkTrougth?: boolean): boolean {
            if (b) return this.UndoTo(b, walkTrougth);
            var l = backups.Get(this.store);
            if (l == null || l.length === 0) return false;
            var x = l.pop();
            var ps = DObject._dpStore[(this.constructor as any).__id__];
            var c = x.values;
            for (var i = 0; i < c.length; i++)
                this.set(ps.Fields[i], c[i]);
            if (x.OnUndo) x.OnUndo(this, x);
            return true;
        }

        private UndoTo(b: BuckupList<this>, walkTrougth: boolean): boolean {
            var l = backups.Get(this.store);
            if (l == null || l.length === 0) return;
            var i = l.indexOf(b);
            if (i === -1) return false;
            var arr = l.splice(i, l.length - i);
            var ps = DObject._dpStore[(this.constructor as any).__id__];
            if (walkTrougth)
                for (var i = arr.length; i >= 0; i--) {
                    var x = arr[i];
                    var c = x.values;
                    for (var i = 0; i < c.length; i++)
                        this.set(ps.Fields[i], c[i]);
                }
            else {
                var x = arr[0];
                var c = x.values;
                for (var i = 0; i < c.length; i++)
                    this.set(ps.Fields[i], c[i]);
            }
            return true;
        }
    }
    
    var empty:any = () => { };
    export enum DisposingStat { None=0, Disposing=1, Disposed=2 }
    export class XPath {
        Name: string;
        Property: bind.DProperty<any, DObject>;
        Value: any;
        Binding: any;
        d: DObject;
        constructor(name: string) {
            this.Name = name;
        }
        public ListenTo(d: bind.DObject, callback: (sender: bind.PropBinding, e: bind.EventArgs<any, any>) => void) {
            if (!this.Property && d) this.Property = d.GetProperty(this.Name);
            if (this.Property) {
                if (this.Binding != null && this.d != null)
                    this.d.removeEvent(this.Property, this.Binding);
                if (d) {
                    this.Value = d.GetValue(this.Property);
                    this.Binding = d.OnPropertyChanged(this.Property, callback);
                }
            }
            else this.Value = d[this.Name];
            this.d = d;
        }
        
        public Dispose() {
            if (this.Property)
                if (this.Binding != null && this.d != null)
                    this.d.removeEvent(this.Property, this.Binding);

            this.Value = null;
            this.Binding = null;
        }
    }
    export class Observer extends bind.DObject {

        public static DPMe = bind.DObject.CreateField<any, Observer>("Me", Object, null,
            function (e: bind.EventArgs<any, Observer>) { e.__this.Start(0); },
            function (e: bind.EventArgs<any, Observer>) { e.__this.disposePath(); }
        );
        public get Me(): any { return this.get<any>(Observer.DPMe); }
        public set Me(value: any) { this.set<any>(Observer.DPMe, value); }

        public static DPPath = bind.DObject.CreateField<string[], Observer>("Path", Array, null, function (e) { e.__this.rebuidPath(e._new); });
        public get Path(): string[] { return this.get<string[]>(Observer.DPPath); }
        public set Path(value: string[]) { this.set<string[]>(Observer.DPPath, value); }

        public static DPValue = bind.DObject.CreateField<any, Observer>("Value", Object, null);
        public get Value(): any { return this.get<any>(Observer.DPValue); }
        public set Value(value: any) { this.set(Observer.DPValue, value); }

        public static __fields__() {
            return [
                Observer.DPMe, Observer.DPPath, Observer.DPValue
            ];
        }

        GenType() { return Observer; }

        public xpath: XPath[] = [];
        constructor(me: any, path: string[]) {
            super();
            this.Me = me;
            this.Path = path;
        }
        private rebuidPath(path: string[]) {
            this.disposePath();
            this.xpath = new Array<XPath>(path.length);
            for (var i = 0; i < path.length; i++) {
                var p = path[i];
                this.xpath[i] = new XPath(p);
            }
            this.Start(0);
        }
        private disposePath() {
            let r = this.xpath;
            let l = r.length;
            for (let i = 0; i < l; i++) {
                var p = r[i];
                p.Dispose();p.ListenTo
            }
            this.Value = null;
        }
        public getValue(l: number) {
            let t = this.Me;
            let r = this.xpath;
            for (let i = 0; i < l; i++) {
                var p = r[i];
                if (t == null) return null;
                if (p.Property)
                    t = t.get(p.Property);
                else
                    t = t[p.Name];
            }
            return t;
        }

        private callme: (e) => void = null;
        private Start(i?: number) {
            if (i == void 0) i = 0;
            this.callme = this.callme || this.callMe.bind(this);            
            var r = this.xpath;
            let t = this.getValue(i);
            for (var j = i; j < r.length; j++) {
                var p = r[j];
                if (t) {
                    if (t instanceof bind.DObject)
                        p.ListenTo(t as bind.DObject, this.callme);
                    else p.Value = t[p.Name];
                    t = p.Value;
                }
                else
                    p.Dispose();
            }
            this.Value = t;
        }
        private callMe(binding: bind.PropBinding, e: bind.EventArgs<any, any>) {
            for (var i = this.xpath.length - 1; i >= 0; i--) {
                var p = this.xpath[i];
                if (p.Binding == binding) {
                    this.Start(i + 1);
                    break;
                }
            }
            this.Value = this.getValue(this.xpath.length);
        }
        Dispose() {
            var h = this.OnDispose();
            if (h === null) return;
            this.callme = null;
            
            this.disposePath();
            super.Dispose();
            if (!h) this.DisposingStat = 2;
        }
    }

    export interface IJobScop {
        IsNew: boolean;
        Scop: Scop;
        Jobs: JobInstance[];
        Control: UI.JControl;
    }
    export class Controller extends DObject implements basic.IDisposable {
        private _processed: boolean = false;
        private p = false; 
        public processHowEver;
        GenType() { return Controller; }
        static __feilds__() {
            return [Controller.DPView];
        }
        public static DPView = bind.DObject.CreateField<HTMLElement, Controller>("View", HTMLElement, null, (e) => e.__this.ViewChanged(e), (e) => e.__this.PDispose());
        public get View(): HTMLElement { return this.get<HTMLElement>(Controller.DPView); }
        public set View(value: HTMLElement) { this.set<HTMLElement>(Controller.DPView, value); }
        public JCParent: UI.JControl[] = [];

        
        private ViewChanged(e: bind.EventArgs<HTMLElement, Controller>) {
            var dom = e._new;
            if (dom == null) return;
            if (this.processHowEver || this.implemented(dom))
                this.ProcessBinding();
            else
                dom.addEventListener('DOMNodeInserted', this);
        }
        private implemented(d: HTMLElement): boolean {
            return document.body.contains(d);
        }
        public handleEvent(e: Event) {
            var v = this.View;
            if (this._processed)
                return v.removeEventListener('DOMNodeInserted', this);
            if (e.srcElement == e.target && e.currentTarget == v) {
                if (e) {
                    e.preventDefault();
                    //e.stopImmediatePropagation();
                    e.stopPropagation();
                }
                this._processed = true;
                v.removeEventListener(e.type, this);

                if (this.processHowEver || this.implemented(v))
                    Controller._process(this, e, v);
                else
                    setTimeout(Controller._process, 0, this, e, v);
            }
        }

        private static _process(__this:bind.Controller, e: Event, v: HTMLElement) {
            switch (e.type) {
                case 'DOMNodeInserted':
                    __this.ProcessBinding(e);
                    v.addEventListener('DOMNodeRemoved', __this);
                    break;
                case 'DOMNodeRemoved':
                    __this.Dispose();
                    break;
            }
        }

        private ProcessBinding(e?: Event) {
            if (this.p || this._processed) {
                return;
            }
            this.p = true;
            thread.Dispatcher.Push(Controller.explorerJob, [this]);
        }

        private static pb(t: Controller) {            
            var v = t.View;
            t.ParseBinding(v, void 0, t.CurrentControl);
            t.p = false;
        }
        public Scop: Scop;
        public static explorerJob = thread.Dispatcher.cretaeJob(Controller.pb, [], null, false);
        public static collectJobs = thread.Dispatcher.cretaeJob(Controller.pb, [], null, false);
        private ExploreTree(dom: HTMLElement, parent: bind.Scop,control:UI.JControl) {
            for (var i = 0; i < dom.childElementCount; i++) {
                var el = <HTMLElement>dom.children.item(i);
                this.ParseBinding(el, parent, control);
            }
        }
        private get CurrentControl() { return this.JCParent[this.JCParent.length - 1];}
        private instances: IJobScop[] = [];
        private ParseBinding(dom: HTMLElement, parent: bind.Scop,control:UI.JControl) {
            var scop = bind.Compiler.Compile(dom, parent, control);
            if (scop) {
                if (scop.Jobs.length !== 0 || scop.IsNew) {
                    this.instances.push(scop);
                    var cnt = scop.Control;
                    if (cnt) {
                        cnt.Parent = this.CurrentControl;
                        this.JCParent.push(cnt);
                    }
                }
                this.ExploreTree(dom, scop.Scop, this.CurrentControl);
                if (cnt) this.JCParent.pop();
            } else this.ExploreTree(dom, scop as any, this.CurrentControl);
        }
        private UnresolvedDom: HTMLElement[] = [];
        constructor(parent:UI.JControl) {
            super();
            if (parent)
                this.JCParent.push(parent);
        }
        PDispose() {
            var s: IJobScop;
            var j: bind.JobInstance;
            var v = this.View;
            if (v != null) {
                v.removeEventListener('DOMNodeInserted', this);
                v.removeEventListener('DOMNodeRemoved', this);
            }
            
            for (var i = 0, s = this.instances[0]; i < this.instances.length; ++i, s = this.instances[i]) {
                if (s.IsNew)
                    s.Scop.Dispose();
                for (var ii = 0, j = s.Jobs[0]; ii < s.Jobs.length; ii++ , j = s.Jobs[ii])
                    j.Dispose();
                s.Jobs = null;
                s.Scop = null;
            }
            this._processed = false;
        
            this.p = false;
            this.instances.length = 0;
        }
        Dispose() {
            var h = this.OnDispose();
            if (h === null) return;
            this.PDispose();
            super.Dispose();            
            if (!h) this.DisposingStat = 2;
            
        }
    }
}

export module utils {
    export interface Node<T> {
        Depth: number;
        Value: T;
        param?: any;
        children: Node<T>[];
        Parent: Node<T>;
    }

    var dbn: any = {};
    export class Tree<T> {
        private dic = new collection.Dictionary<T, Node<T>>("nodes");
        constructor(private source: collection.List<T>, private getParent: (item: T) => T, listen: (base: Node<T>, target: Node<T>, add_remove_clear: boolean) => void) {
            this.OnChange.On = listen;
            this.Reset();
        }
        Remove(c: T) {
            if (this.OnRemove(c))
                this.source.Remove(c);
        }
        Add(c: T) {
            this.OnAdd(c);
            this.source.Add(c);
        }
        Clear() {
            this.OnClear();
            this.source.Clear();
        }

        Reset() {
            this.OnClear();
            var e = this.source.AsList();
            for (var i = 0; i < e.length; i++)
                this.OnAdd(e[i]);
        }
        private OnAdd(target: T) {
            var parent = this.getParent(target);
            var node_parent;
            var node_target = this.dic.GetOrAdd(target, <any>{
                children: [], Value: target, Parent: null, get Depth(): number {
                    return this._depth ? this._depth : (this._depth = this.Parent ? this.Prent.Depth + 1 : 0);
                }
            });
            if (parent) {
                (node_parent = this.dic.GetOrAdd(parent, {
                    children: [], Value: parent, Parent: null, get Depth(): number {
                        return this._depth ? this._depth : (this._depth = this.Parent ? this.Prent.Depth + 1 : 0);
                    }
                })).children.push(node_target);
                node_target.Parent = node_parent;
            }            
            this.OnChange.Invoke(this.source, [node_parent, node_target, true]);
        }
        public getNodes() { return this.dic.getValues();}
        public getBases() {
            var t: Node<T>[] = [];
            var e = this.dic.getValues();
            for (var i = 0; i < e.length; i++)
                if (e[i].Parent == null)
                    t.push(e[i]);
            return t;
        }
        private OnRemove(item: T):boolean {
            var node_target = this.dic.Get(item), parent = this.getParent(item);
            if (node_target)
                if (node_target.children.length > 0)
                    return false;
                else
                    if (parent) {
                        var node_parent = this.dic.Get(parent);
                        var t = node_parent.children.indexOf(node_target);
                        if (t >= 0)
                            node_parent.children.splice(t, 1);
                    }
            this.OnChange.Invoke(this.source, [node_parent, node_target, false]);
            return true;
        }
        private OnClear() {
            this.OnChange.Invoke(this.source, []);
            this.dic.Clear();
        }
        public OnChange = new bind.EventListener<(base: Node<T>, target: Node<T>, add_remove_clear: boolean) => void>(this.source);
    }
    export class RemoveRef<T> {
        public Ref: T;
        constructor(ref: T) {
            this.Ref = ref;
        }
    }



    export class ListEventArgs<P, T> implements basic.IDisposable {
        constructor(
            public oldItem: T,
            public newItem: T,
            public startIndex: P,
            public event: collection.CollectionEvent,
            public collection?: T[]
        ) { }
        public Dispose() {
            this.oldItem = null;
            this.newItem = null;
            this.startIndex = null;
            this.event = null;
        }
        public static get ResetEvent() {
            return this._r || (this._r = new ListEventArgs(null, null, 0, collection.CollectionEvent.Reset, []));
        }
        private static _r;
    }
    export interface IPatent<T> {
        Check(s: T): boolean;
        equals(p: IPatent<T>): boolean;
    }
    export abstract class Filter<T, P extends IPatent<T>> extends bind.DObject {
        protected _patent: P;
        public get Patent(): P | string { return this._patent; }
        protected abstract convertFromString(x: string): P;
        public abstract Begin(deb: number, count: number);
        public set Patent(p: P | string) {
            if (typeof p == 'string') v = this.convertFromString(p as any);
            var v: P = p as any;
            if (!v) {
                if (!this._patent) return;
                else if (this._patent.equals(null)) return;
            }
            else if (this._patent) { if (v.equals(this._patent)) return; }
            //else return;
            
            this._patent = v as P;
            var s = this._store;
            for (var i = 0; i < s.length; i++) {
                var e = s[i];
                e.callback(this, e.data);
            }
        }
        private _store: utils.filterCallback<T, P>[] = [];

        constructor() {
            super();
        }
        public OnChanged(callback: (filter: Filter<T, P>, data: any) => void, data: any, name?: string) {
            var t = new filterCallback(callback, data, name, Date.now());
            this._store.push(t);
            return t.id;
        }
        public OffChanged(name_id: string | number) {
            if (typeof (name_id) == 'string') {
                var name = name_id as string;
                var s = this._store;
                for (var i = s.length - 1; i >= 0; i--) {
                    var e = s[i]; if (e.name == name) { s.splice(i, 1); }
                }
            }
            else if (typeof (name_id) == 'number') {
                let id = name_id as number;
                var s = this._store;
                for (var i = s.length - 1; i >= 0; i--) {
                    var e = s[i]; if (e.id == id) { s.splice(i, 1); return; }
                }
            }
        }

        protected _ismath(str: string[]) {
            for (var i = 0; i < str.length; i++)
                if (str[i].indexOf(this._patent as any) !== -1) return true;
            
            return false;
        }
        public abstract IsMatch(index: number, item: T);
    }
    export class CostumeFilter<T, P extends IPatent<T>> extends Filter<T, P> {
        constructor(public _isMatch: (patent: P, item: T) => boolean) { super(); }
        public IsMatch(index: number, item: T): boolean {
            return this._isMatch == null ? true : this._isMatch(this._patent, item);
        }
        public convertFromString(x: string): P { return x as any as P; }
        public Begin(deb: number, count: number) { }
    }

    export class filterCallback<T, P extends IPatent<T>> {
        constructor(
            public callback: (filter: utils.Filter<T, P >, data: any) => void,
            public data: any,
            public name?: string, public id?: number) { if (id == void 0) id = Date.now(); }
    }
}



export module collection {

    export enum CollectionEvent {
        Added,
        Removed,
        Replace,
        Cleared,
        Reset
    }
    export declare type ListEventInvoker<T> = (e: utils.ListEventArgs<number, T>) => void;
    export declare type ListEventHandler<T> = ListEventInvoker<T> | (basic.ITBindable<ListEventInvoker<T>>);
    export declare type ListEventBindable<T> = basic.ITBindable<ListEventInvoker<T>>;

    export class List<T> extends bind.DObject {
        static __fields__(): any[] { return [List.DPCount]; }
        public static DPCount = List.CreateField<number, List<any>>('Count', Number, 0, null, null, 2);
        
        private UCount() { this.set(List.DPCount, this._list.length); }
        protected _list = [];
        public get ArgType() { return this.argType; }
        private type: Function;
        GetType(): Function | reflection.GenericType { return reflection.GenericType.GetType(this.constructor, [this.argType]) as reflection.GenericType }
        constructor(protected argType: Function, array?: T[]) {
            super();
            if (array)
                if (array.length)
                    for (var i = 0, len = array.length; i < len; i++)
                        this._list.push(array[i]);
            this.UCount();
        }
        public AsList():T[] {
            return this._list;
        }
        public Order(comp: (a:T, b:T) => boolean) {
            var p = this._list;
            var l = p.length;
            for (var i = 0; i < l; i++)
                for (var j = i + 1; j < l; j++) {
                    if (!comp(p[i], p[j])) {
                        var c = p[j];
                        p[j] = p[i];
                        p[i] = c;
                    }
                }           
        }
        public OrderBy(comp: (a: T, b: T) => number) {
            var x = this._list.sort(comp);
            this.OnChanged(null, 0, CollectionEvent.Reset, null, x);
        }
        
        Filtred(filter: utils.Filter<T, utils.IPatent<T>>): ExList<T,utils.IPatent<T>> {
            var c = new ExList<T, utils.IPatent<T>>(this.argType);
            c.Filter = filter;
            c.Source = this;
            return c;
            
        }
        public Set(i: number, value: T) {
            throw 'not implimented';
        }
        public Get(i: number): T {
            if (i < 0) return null;
            if (this._list.length <= i) return null;
            return this._list[i as number];
        }

        public Insert(i: number, item: T): boolean {
            if (this._isFrozen) return;
            if (i >= 0 && i <= this._list.length) {
                this._list.splice(i, 0, item);
                this.OnChanged(item, i, CollectionEvent.Added, null);
                return true;
            }
            return false;
        }

        public Freeze() {
            this._isFrozen = true;
        }
        public Add(item: T) {
            if (this._isFrozen) return;
            if (item == null) throw 'NullArgument detected';
            this._list.push(item);
            this.OnChanged(item, this._list.length - 1, CollectionEvent.Added, null);
            return this;
        }
        public AddRange(items: T[]) {
            if (this._isFrozen) return;
            for (var i = 0; i < items.length; i++) {
                this.Add(items[i]);
            }
        }

        public CheckIndex(i: number) {
            return i >= 0 && i < this._list.length;
        }
        public Remove(item: T | number) {
            if (this._isFrozen) return;
            if (typeof item != "number")
                item = this.IndexOf(item as any);
            return this.RemoveAt(item as any);
        }

        public RemoveAt(item: number) {
            if (this._isFrozen) return;
            if (typeof item != "number") return;
            if (this.CheckIndex(item)) {
                var t = this._list[item];
                this._list.splice(item, 1);
                this.OnChanged(t, item, CollectionEvent.Removed, t);
                return true;
            }
            return false;
        }
        public Clear() {
            if (this._isFrozen) return;
            var l = this._list.length;
            if (l > 0) {
                this.OnChanged(null, 0, CollectionEvent.Cleared, null, this._list.splice(0, this._list.length));
            }
        }

        public get Count(): number { return this._list.length; }

        public IndexOf(item: T) {
            return this._list.indexOf(item);

        }
        set Listen(delegate: ListEventHandler<T>) {
            var er: basic.IDelegate;
            this._changed.push(delegate);
        }
        set Unlisten(delegate: ListEventHandler<T>) {
            var x = this._changed.indexOf(delegate);
            if (x < 0) return;
            this._changed.slice(x, 1);
        }
        private OnChanged(item: T, startIndex: number, event: CollectionEvent, oldItem: T, collection?: T[]) {
            var e = new utils.ListEventArgs<number, T>(oldItem, item, startIndex, event, collection);
            var l = this._changed.length;
            this.UCount();
            for (var i = 0; i < l; i++) {
                var con = this._changed[i];
                if (typeof con === 'function')
                    (con as ListEventInvoker<T>)(e);
                else {
                    (<basic.ITBindable<ListEventInvoker<T>>>con).Invoke.call((<basic.ITBindable<ListEventInvoker<T>>>con).Owner, e);
                }
            }
        }

        private _changed: ListEventHandler<T>[] = [];

        protected getArgType(json): Function {
            var type = this.ArgType;
            if (type != null) return type;
            var typeName = json['__argtype__'];
            type = (typeName == undefined ? Object as Function : context.GetType(typeName)) as Function;
            return (type == undefined) ? this.argType == undefined ? Object : this.argType : type;
        }

        public ToJson(x: encoding.SerializationContext, indexer: encoding.IIndexer) {
            indexer = indexer == undefined ? x.getJson(this) : indexer;
            var ret: any | encoding.IRef = x.getJson(this);
            if (indexer.valid)
                return indexer.ref;
            else ret = super.ToJson(x, indexer);

            indexer.valid = true;
            var list = [];
            var t = this._list;
            for (var i = 0; i < t.length; i++) {
                var d = t[i];
                d = x.ToJson(d);
                list.push(d);
            }
            ret['__list__'] = list;
            ret['__argtype__'] = context.NameOf(this.argType);
            return ret;
        }
        FromJson(json: any, x: encoding.SerializationContext, update?: boolean, callback?: (prop: string, val: any) => Object) {
            super.FromJson(json, x, update);
            
            var list = json['__list__'] as Array<any> || [];
            var ol = this._list;            
            this._list = new Array<any>(0);
            var type = this.argType = this.getArgType(json);
            for (var i = 0; i < list.length; i++) {
                var c = list[i];
                if (c === undefined) continue;
                var st = List.getType(c);
                if (st === undefined) st = this.argType;
                x.FromJson(c, st === undefined ? type : st, new encoding.LPath(this, i));
            }
            this.OnDeserialize(this._list);
            if (json != null && json.IsFrozen)
                this.Freeze();
            return this;
        }
        OnDeserialize(list: T[]) {
        }
        private static getType(json) {
            var tn = json['__type__'];
            if (tn == undefined) return undefined;
            return context.GetType(tn);
        }
        UpdateDelegate: () => T[];

        public static GenType(T: Function) { return reflection.GenericType.GetType(this, [T]); }
    }
    export interface IKeyValuePair<T, P> {
        Key: T;
        Value: P;
    }
    export class Dictionary<T, P> extends bind.DObject {
        private keys: T[] = [];
        private values: P[] = [];

        constructor(public Name: string, public ReadOnly?: boolean) {
            super();
            ReadOnly = ReadOnly == null ? true : false;
        }
        public GetKeyAt(i: number) { return this.keys[i]; }
        public GetValueAt(i: number) { return this.values[i]; }
        public get Count() { return this.keys.length; }
        public Clear() {
            this.keys.length = 0;
            this.values.length = 0;
            this.OnChanged(null, null, CollectionEvent.Cleared, null);
        }
        public IndexOf(key: T, fromIndex?: number) {
            return this.keys.indexOf(key, fromIndex);
        }
        public IndexOfValue(val: P, fromIndex?:number) {
            return this.values.indexOf(val,fromIndex);
        }
        public Set(key: T, value: P) {
            var i = this.keys.indexOf(key);
            if (i === -1) {
                i = this.keys.length;
                this.keys.push(key);
            } else
                if (this.ReadOnly) if (this.values[i] === value) return; else throw "key is exist";
            this.values[i] = value;
        }
        public Remove(key: T) {
            var i = this.keys.indexOf(key);
            if (i === -1)
                return undefined;
            var val = this.values[i];
            this.values.splice(i, 1);
            this.keys.splice(i, 1);
            return val;
        }
        public RemoveAllValues(val: P):T[] {
            var keys = [];
            do {
                var i = this.values.indexOf(val, i);
                if (i === -1)
                    return keys;
                keys.push(this.keys[i]);
                this.values.splice(i, 1);
                this.keys.splice(i, 1);
            } while (true);
        }

        public RemoveAt(i: number):IKeyValuePair<T,P> {            
            if (i < this.keys.length && i >= 0) {
                var r: IKeyValuePair<T, P> = { Key: this.keys[i], Value: this.values[i] };
                this.values.splice(i, 1);
                this.keys.splice(i, 1);
                return r;
            }
            return undefined;
        }
        public getValues() { return this.values; }
        public Get(key: T):P {
            var i = this.keys.indexOf(key);
            return i === -1 ? null : this.values[i];
        }
        public GetOrAdd(key: T,value?:P): P {
            var i = this.keys.indexOf(key);
            if (i !== -1) return this.values[i];
            this.keys.push(key);
            this.values.push(value);
            return value;
        }
        public GetOrCreate(key: T, New: (key: T, param: any) => P, param: any): P {
            var i = this.keys.indexOf(key);
            if (i !== -1) return this.values[i];
            var value = New(key, param);
            this.keys.push(key);
            this.values.push(value);
            return value;
        }
        public GetKeyOf(val: P):T {
            var i = this.values.indexOf(val);
            return i === -1 ? undefined : this.keys[i];
        }
        set Listen(delegate: (e: utils.ListEventArgs<T, P>) => void) {
            this._changed.push(delegate);
        }
        set Unlisten(delegate: (e: utils.ListEventArgs<T, P>) => void) {
            var x = this._changed.indexOf(delegate);
            if (x < 0) return;
            this._changed.slice(x, 1);
        }
        private OnChanged(item: P, startIndex: T, event: CollectionEvent, oldItem: P) {
            var e = new utils.ListEventArgs<T, P>(oldItem, item, startIndex, event);
            var l = this._changed.length;
            for (var i = 0; i < l; i++) {
                var con = this._changed[i];
                con(e);
            }
        }
        private _changed: ((e: utils.ListEventArgs<T, P>) => void)[] = [];
        UpdateDelegate: () => T[];
    }
    export class ExList<T, P extends utils.IPatent<T>> extends List<T>{
        public static DPSource = bind.DObject.CreateField<List<any>, ExList<any, any>>("Source", List, null, (e) => { e.__this.sourceChanged(e); });
        public get Source(): List<T> { return this.get<List<T>>(ExList.DPSource); }
        public set Source(value: List<T>) { this.set(ExList.DPSource, value); }

        public static DPFilter = bind.DObject.CreateField<utils.Filter<any, any>, ExList<any, any>>("Filter", utils.Filter, null, (e) => { e.__this.filterChanged(e); });
        public get Filter(): utils.Filter<T, P> { return this.get<utils.Filter<T, P>>(ExList.DPFilter); }
        public set Filter(value: utils.Filter<T, P>) { this.set(ExList.DPFilter, value); }

        public static DPMaxResult = bind.DObject.CreateField<number, ExList<any, any>>("MaxResult", Number, Infinity, (e) => { e.__this.MaxResultChanged(e); });
        public get MaxResult(): number { return this.get(ExList.DPMaxResult); }
        public set MaxResult(value: number) { this.set(ExList.DPMaxResult, value); }

        public static DPShift = bind.DObject.CreateField<number, ExList<any, any>>("Shift", Number, 0, (e) => { e.__this.MaxResultChanged(e); });
        public get Shift(): number { return this.get(ExList.DPShift); }
        public set Shift(value: number) { this.set(ExList.DPShift, value); }

        static __fields__() { return [ExList.DPFilter, ExList.DPMaxResult, ExList.DPShift, ExList.DPSource]; }

        private _fid: number = null;
        private filterChanged(e: bind.EventArgs<utils.Filter<T, P>, ExList<T, P>>) {
            if (e._old)
                e._old.OffChanged(this._fid);
            if (e._new) this._fid = e._new.OnChanged(ExList.patentChanged, this);
            this.Reset();
        }
        private sourceChanged(e: bind.EventArgs<List<T>, ExList<T, P>>) {
            if (e._old)
                e._old.Unlisten = this.sicd;
            if (e._new) e._new.Listen = this.sicd;
            this.Reset();
        }
        private sicd: basic.IBindable = { Owner: this, Invoke: this.sourceItemChanged };
        private MaxResultChanged(e: bind.EventArgs<number, ExList<T, P>>) {
            this.Reset();
        }
        public static New<T, P extends utils.IPatent<T>>(source: List<T>, filter: utils.Filter<T, P>,argType?:Function) {
            var t = new ExList<T, P>(source == null ? argType : source.ArgType);
            t.Filter = filter;
            t.Source = source;
            return t;
        }
        constructor(argType: Function) {
            super(argType);
        }
        private static patentChanged<T, P extends utils.IPatent<T>>(e: utils.Filter<T, P>, t: ExList<T, P>) {
            t.Reset();
        }
        private sourceItemChanged(e: utils.ListEventArgs<number, T>) {
            switch (e.event) {
                case CollectionEvent.Added:
                    if (this.MaxResult <= this.Count) return;
                    if (this.isMatch(e.startIndex, e.newItem)) this.Add(e.newItem);
                    return;
                case CollectionEvent.Cleared:
                    return this.Clear();
                case CollectionEvent.Removed:
                    this.Remove(e.oldItem);
                    return;
                case CollectionEvent.Replace:
                    var i = this.IndexOf(e.oldItem);
                    var m = this.isMatch(e.startIndex, e.newItem);
                    if (m) {
                        if (i == -1) this.Add(e.newItem);
                        else
                            this.Set(i, e.newItem);
                    }
                    else if (i != -1) this.RemoveAt(i);
                    return;
                case CollectionEvent.Reset:
                    return this.Reset();
            }
        }
        private isMatch(i: number, item: T): boolean {
            var f = this.Filter;
            if (f == null) return true;
            return f.IsMatch(i, item);
        }
        public start: number;
        public Reset() {
            this.Clear();
            var s = this.Source;
            if (s == null) return;
            var f = this.Filter;
            var fin = f == null;
            var max = this.MaxResult;
            if (!fin)
                if (f.Begin(this.Shift, this.MaxResult))
                    this.AddRange(s.AsList());
                else
                    for (var i = 0, l = s.Count; i < l && max > 0; i++) {
                        var e = s.Get(i);
                        if (fin) this.Add(e);
                        else {
                            var r = f.IsMatch(i, e);
                            if (r === null) break;
                            if (r)
                                this.Add(e);
                        }
                    }
        }
    }

    export abstract class Binding<T> {
        GetType() { return Binding; }
        private _dataContext: collection.List<T>;
        get DataContext(): collection.List<T> { return this._dataContext; }
        set DataContext(value: collection.List<T>) {
            if (value == this._dataContext) return;
            var t = this._dataContext;
            if (t != null) t.Unlisten = this.initChanged;
            if (value != null) value.Listen = this.initChanged;
            this._dataContext = value;
            this.OnSourceInitialized(t, value);
        }

        constructor(dataContext: collection.List<T>) {
            this.DataContext = dataContext;

        }
        abstract OnItemAdded(item: T, index: number);
        abstract OnItemRemoved(item: T, index: number);
        abstract OnSourceCleared();
        abstract OnSourceInitialized(_old: collection.List<T>, _nex: collection.List<T>);
        abstract OnSourceReset();
        abstract OnSourceReplace(oldItem: T, newItem: T, index: number);
        private initChanged(e: utils.ListEventArgs<number, T>) {
            switch (e.event) {
                case collection.CollectionEvent.Added:
                    this.OnItemAdded(e.newItem, e.startIndex);
                    break;
                case collection.CollectionEvent.Removed:
                    this.OnItemRemoved(e.oldItem, e.startIndex);
                    break;
                case collection.CollectionEvent.Cleared:
                    this.OnSourceCleared();
                    break;
                case collection.CollectionEvent.Reset:
                    this.OnSourceReset();
                    break;
                case collection.CollectionEvent.Replace:
                    this.OnSourceReplace(e.oldItem, e.newItem, e.startIndex);
            }
        }
    }

    export abstract class Render<T, P> extends Binding<T> {
        GetType() { return Render; }
        private _rendredList: collection.List<P>;
        public get RendredList(): collection.List<P> {
            if (this._rendredList == null) this._rendredList = new collection.List<P>(Object, []);
            return this._rendredList;
        }
        constructor(dataContext: collection.List<T>) {
            super(dataContext);
        }
        abstract Render(item: T): P;

        OnItemAdded(item: T, index: number) {
            this.RendredList.Insert(index, this.Render(item));
        }
        OnItemRemoved(item: T, index: number) {
            this.RendredList.RemoveAt(index);
        }
        OnSourceCleared() {
            this.RendredList.Clear();
        }
        OnSourceInitialized(_old: collection.List<T>, _nex: collection.List<T>) {
            if (_nex != null) {
                var c = _nex.Count;
                this.RendredList.Clear();
                for (var i = 0; i < c; i++) {
                    var e = _nex.Count;
                    this._rendredList.Add(this.Render(_nex.Get(e)));
                }
            }
        }
    }
    /*
    export class Enum extends collection.List<basic. EnumValue> {
        private x = {};
        Add(v: basic.EnumValue) { return this; }
        Get(n: number) {
            var l = this.AsList();
            if (typeof n === 'number')
                for (var i = 0; i < l.length; i++)
                    if (l[i].Value === n) return l[i]; else;
            else for (var i = 0; i < l.length; i++)
                if (l[i].Name === (n as any)) return l[i];
            return null;
        }
        static gen(_enum) {
            var o = [];
            for (var i in _enum)
                if (isNaN(parseFloat(i)))
                    o.push(new basic.EnumValue(i, _enum[i]));
            return o;
        }
        constructor(_enum: any) {
            super(basic.EnumValue, Enum.gen(_enum));
            this.Freeze();
        }
    }*/
}


export module mvc {
    interface IContext {
        _this: mvc.Initializer;
        tmpl: mvc.iTemplate;
    }
    interface IGContext {
        _this: mvc.Initializer;
        tmpl: mvc.ITemplateGroup;
    }

    export abstract class ITemplate {
        abstract Create(): HTMLElement;
        constructor(public Category: string) {
        }
    }
    
    export class iTemplate extends ITemplate{
        private _Url: string;
        public get Url(): string {
            return this._Url;
        }  
        private _Shadow: HTMLTemplateElement;
        public get Shadow(): HTMLTemplateElement {
            return this._Shadow;
        }
        public set Shadow(v: HTMLTemplateElement) {
            if (v != null) {
                if (!(v instanceof HTMLElement))
                    throw 'shadow is not HTMLElement';
                this._isLoaded = true;
            }
            this._Shadow = v;
        }
        public Create(): HTMLElement {
            
            var s = this._Shadow;            
            return s == null ? null : (s.content as any).firstElementChild.cloneNode(true) as HTMLElement;
        }
        constructor(relativeUrl: string, category: string, shadow?: HTMLTemplateElement) {
            super(category);
            if (relativeUrl == null) throw "url is null";
            if (category == null) throw "category is null";
            this._Url = relativeUrl;
            if (shadow == undefined) return;
            this.Shadow = shadow;
        }
        private _isLoaded = false;
        public Load() {
        }
    }
    export interface ITemplateGroup {
        Url: string;
        OnError(init: Initializer);
        OnSuccess(init: Initializer);
    }

    export class MvcDescriptor {
        private static _store = {};
        public DataType: Function;

        public Name: string;
        private Templates: collection.List<ITemplate> = new collection.List<ITemplate>(ITemplate);

        constructor(name: string, dataType: Function) {
            if (name == null) throw "name is null";
            if (typeof name != 'string') throw "name is not string";
            name = name.trim()
            if (name == "") throw "name is empty";
            if (!(dataType instanceof Function)) throw "dataType is not a Type";

            this.Name = name;
            this.DataType = dataType;
            MvcDescriptor._store[name] = this;
        }

        public get Count(): number {
            return this.Templates.Count;
        }
        public Get(index: number | string) :ITemplate {
            if (typeof index == 'number')
                return this.Templates.Get(index as number);
            if (typeof index == 'string')
                for (var i = 0; i < this.Templates.Count; i++) {
                    var t = this.Templates.Get(i);
                    if (t.Category == index) return t;
                }
            return null;
        }
        public static GetByType(datatype: Function): MvcDescriptor {
            for (var mcv in MvcDescriptor._store) {
                if (MvcDescriptor._store.hasOwnProperty(mcv)) {
                    var p = MvcDescriptor._store[mcv];
                    if (p.DataType == datatype) return p;
                }
            }
            return null;
        }
        public static GetByName(templateName: string): MvcDescriptor {
            return MvcDescriptor._store[templateName];
        }
        public static Add(template: HTMLTemplateElement, path: string) {
            if (path == null) path = template.getAttribute('name');
            var ps = path.split('.');
            if (ps.length == 0) throw "invalid template name";
            if (ps.length == 1)
                var mvc = this.GetByName('templates') || (this._store['templates'] = new MvcDescriptor('templates', bind.DObject));
            else if (ps.length == 2)
                var mvc = this.GetByName(ps[0]) || (this._store[ps[0]] = new MvcDescriptor(ps[0], Object)),
                    path = ps[1];            
            else throw "invalid template path argument";
            mvc.registerTemplate(template, './#templates/' + mvc.Name + '/' + path, path);
        }

        public Add(templ: ITemplate) {
            if (templ instanceof mvc.ITemplate)
                this.Templates.Add(templ);
            return this;
        }
        public static Get(templatePath: string) {
            var path = templatePath.split(/[\s\\\/\.]+/);
            if (path.length == 0) return null;
            var p1 = path[0];
            var mvc = this.GetByName(p1);
            if (mvc != null) {
                var p2 = path[1];
                if (p2)
                    return mvc.Get(p2) || mvc.Get(0);
                return mvc.Get(0);
            }
            return null;
        }

        public registerTemplate(cat: HTMLTemplateElement, url: string, name?: string) {
            if (cat.tagName !== 'TEMPLATE') throw 'unresolved tag ' + cat.tagName;
            let templateName = name || cat.getAttribute('name');
            if (templateName == null) throw 'template must have a name \r\nfrom :' + url;
            if (cat.children.length > 1) {
                console.warn('the template must be encapsuled in single tag');
                var v = document.createElement('div');
                v.innerHTML = cat.innerHTML;
                cat.innerHTML = '';
                cat.appendChild(v);
            }
            this.Add(new mvc.iTemplate(url + '#' + name + '+' + templateName, templateName, cat));
        }
    }
    interface ITypeResolverCollection {
        [typeName: string]: Function;
    }
    export abstract class Initializer {
     
        public static get Instances(): Initializer[] {
            return _Instance;
        }

        constructor(private require: (modules: string, onsuccss?: (result: any) => void, onerror?: (result: any) => void, context?: any) => void) {
            if (require == null) throw 'require argument is null';
            _Instance.push(this);
            this.Init(); 
            this.Load();
        }
        protected abstract Init();
        abstract Dispose();
        get System(): collection.List<MvcDescriptor> { return null; }
        private _id: boolean = false;
        private tempsGroup: ITemplateGroup[] = [];
        protected Add(templGroup: ITemplateGroup) {
            if (this.tempsGroup.indexOf(templGroup) !== -1) return;
            this.tempsGroup.push(templGroup);            
        }
        private Load() {
            var s = this.System;
            for (; this.tempsGroup.length > 0;) {
                this.pending++;
                let tmpltg = this.tempsGroup.pop();
                this.require('template:' + tmpltg.Url, Initializer.gonsuccess, Initializer.gonerror, { _this: this, tmpl: tmpltg });
            }
            for (var i = 0; i < s.Count; i++) {
                var mvc = s.Get(i);
                for (var j = 0; j < mvc.Count; j++) {
                    let tmplt = mvc.Get(j);
                    if (tmplt instanceof iTemplate) {
                        this.pending++;
                        this.require('template:' + tmplt.Url, Initializer.onsuccess, Initializer.onerror, { _this: this,  tmpl: tmplt });
                    }
                }
            }
        }
        private static typeResolvers: ITypeResolverCollection = {};
        public static SetTypeResolver(name, typeResolver: (typeName: string) => Function) {
            Initializer.typeResolvers[name] = typeResolver;
        }
        private pending: number = 0;
        private static gonsuccess(r: any) {
            var t = this as any as IGContext;
            var _this = t._this;
            _this.pending--;
            _this.ExcecuteTemplate(t.tmpl.Url, _this.htmlToElements(r).children.item(0) as HTMLElement);
            if (t.tmpl.OnSuccess)
                thread.Dispatcher.call(t.tmpl, t.tmpl.OnSuccess, t._this);
            if (_this.pending === 0) Initializer.onfinish(t._this);
        }
        private static gonerror(r: any) {
            var t = this as any as IGContext;
            t._this.pending--;
            console.error(" Group of templates [" + t.tmpl.Url + "]: error downloading");
            if (t.tmpl.OnError)
                thread.Dispatcher.call(t.tmpl, t.tmpl.OnError, t._this);
            if (t._this.pending === 0) Initializer.onfinish(t._this);
        }
        private static onsuccess(r: any) {
            var t = this as any as IContext;
            var tmpl = t.tmpl;
            var _this = t._this;
            _this.pending--;            
            
            tmpl.Shadow = _this.htmlToElements(r) as any;
            if (_this.pending === 0) Initializer.onfinish(t._this);
        }
        private static onerror(r: any) {
            var t = this as any as IContext;
            t._this.pending--;
            console.error("template [" + t.tmpl.Url + "] error downloading");
            t.tmpl.Shadow = t._this.html2Template("<error>Error Downloading Template</error>");
            if (t._this.pending === 0)
                Initializer.onfinish(t._this);
        }
        html2Template(html: string) {
            var t = document.createElement('template') as HTMLTemplateElement;
            t.innerHTML = html;
            return t;
        }
        htmlToElements(html) {
            var t = document.createElement('div');
            t.innerHTML = html;
            return t;
        }
        public then(call: (Initializer: Initializer) => void) {
            if (this.pending <= 0) return call(this);
            Initializer.callbacks.push(call);
        }
        public static then(call: (Initializer: Initializer) => void) {
            Initializer.callbacks.push(call);
        }
        private static  callbacks: ((Initializer: Initializer) => void)[] = [];
        private onfinish() {
            for (var i = 0; i < Initializer.callbacks.length; i++)
                Initializer.callbacks[i](this);
        }
        private static onfinish(t: Initializer) {
            for (var i = 0; i < Initializer.callbacks.length; i++)
                Initializer.callbacks[i](t);
        }
        public static Get(type: Function) {
            var s = _Instance;
            for (var i = 0, l = s.length; i < l; i++) {
                var n = s[i].System;
                var l = n.Count;
                for (var i = 0; i < l; i++) {
                    var e = n.Get(i);
                    if (e.DataType == type) return e;
                }
            }
            return null;
        }
        public getDescriptor(name: string, type: Function):MvcDescriptor {
            var descipter = MvcDescriptor.GetByName(name);
            if (descipter == null) descipter = MvcDescriptor.GetByType(type);
            if (descipter == null) this.System.Add(descipter = new MvcDescriptor(name, type));
            else if (descipter.Name !== name || descipter.DataType !== type)
                throw "Conflit with others template";
            return descipter;
        }
        public ExcecuteTemplate(url: string, templ: HTMLElement, typeResolver?: (typeName: string) => Function) {
            var types = {};
            var nameTypess = {};
            var templatesDescrpt = this.getDescriptor("templates", bind.DObject);
            function getType(name) {
                var t = types[name];
                if (t != null) return t;
                if (typeResolver) t = typeResolver(name);
                if (t == null || !(t instanceof Function)) {
                    t = context.GetType(name);
                    if (t == undefined || !(t instanceof Function))
                        throw "type " + name + " unresolved";
                }
                types[name] = t;
                return t;
            }
            if (templ.tagName === 'TEMPLATES') {
                var des: HTMLElement;
                for (var i = 0; i < templ.children.length; i++) {
                    des = templ.children.item(i) as HTMLElement;
                    if (des.tagName === 'DESCRIPTOR')
                        this.registerGroupTemplates(des, url, getType);
                    else if (des.tagName === "TEMPLATE")
                        this.registerTemplate( templ as HTMLTemplateElement,templatesDescrpt, url);
                    else console.warn('unresolved tag ' + des.tagName);
                }
            }
            else if (templ.tagName == "TEMPLATE")
                this.registerTemplate(templ as HTMLTemplateElement, templatesDescrpt, url);
            else if (templ.tagName == "TEMPLATE")
                this.registerGroupTemplates(templ, url, getType);
            else throw 'root element must be a <templates> tag';
        }

        private registerGroupTemplates(des: HTMLElement, url: string, getType: (name: string) => Function) {
            var name = des.getAttribute('name');
            var type: any = getType(des.getAttribute('type'));
            var descipter = this.getDescriptor(name, type);
            for (var j = 0; j < des.children.length; j++) {
                var tmpl = des.children.item(j) as HTMLTemplateElement;
                this.registerTemplate(tmpl, descipter, url);
            }
        }

        private registerTemplate(cat: HTMLTemplateElement, descipter: MvcDescriptor, url: string) {
            if (cat.tagName !== 'TEMPLATE') throw 'unresolved tag ' + cat.tagName;
            let templateName = cat.getAttribute('name');
            if (templateName == null) throw 'template must have a name \r\nfrom :' + url;
            if (cat.children.length > 1) {
                console.warn('the template must be encapsuled in single tag');
                var v = document.createElement('div');
                v.innerHTML = cat.innerHTML;
                cat.innerHTML = '';
                cat.appendChild(v);
            }
            descipter.Add(new mvc.iTemplate(url + '#' + name + '+' + templateName, templateName, cat));
        }
    }
    export class Template {
        private static _store;
        public static TempplatesPath: string = "./templates/";
        private _type: any;
        private _view: HTMLElement;
        private _name: string = "";
        private _for: string = "";

        public get forType(): any { return this._type; }
        public get View() { return this._view; }
        public get Name() { return this._name; }
        public get For() { return this._for; }

        constructor(templateDOM: HTMLElement) {
            if (Template._store === undefined) Template._store = new collection.List<Template>(Template);
            if (Template.fromInside == true) {
                this._view = templateDOM;
                this._name = templateDOM.getAttribute("name");
                this._for = templateDOM.getAttribute("for");

                if (this._name == null) throw "name is null";

                Template._store.Add(this);
            } else throw "Access violatile";

        }

        public static getTemplates(type): Template[] {
            var c = Template._store;
            var rt: Template[] = [];
            for (var i = c.Count - 1; i >= 0; i--) {
                var t = c.Get(i);
                if (t.forType == type) rt.push(t);
            }
            return rt;
        }
        private static fromInside = false;
        public static LoadTemplate(templateName: string, context: basic.IContext) {
            var templatePath = Template.TempplatesPath + templateName;
            Template.getWebRequest().Download(new net.RequestUrl(templatePath, context), null);
        }
        public static getWebRequest() {
            if (Template._webRequest) return Template._webRequest;
            var c = <basic.ICrypto>basic.Crypto;
            var w = new net.WebRequest(c);
            w.OnComplete.On = Template.OnRecieveTemplates;
            return Template._webRequest = w;
        }
        private static _webRequest;
        private static OnRecieveTemplates(result: net.WebRequest) {
            if (Template.getWebRequest().IsSuccess == false) 
                return;
            var x = Template.getWebRequest();
            var r = x.Response;
            var templates = document.createElement("templates");
            templates.innerHTML = r;
            templates = <HTMLElement>templates.firstChild;
            for (var i = 0; i < templates.childElementCount; i++) {
                
                Template.createTemplate(<HTMLElement>templates.children.item(i));
            }
        }
        private static createTemplate(tmplate: HTMLElement) {
            Template.fromInside = true;
            var t = null;
            try {
                t = new Template(tmplate);
            } catch (error) {
            }
            Template.fromInside = false;
            return t;
        }
        public static GetAll(name: string) {
            if (arguments.length == 2)
                var a = Template._store;
            var x = [];
            for (var i = 0; i < a.Count; i++) {
                var t = a.Get(i);
                if (t._name == name) x.push(t);
            }
            return x;
        }
        public static Get(name: string, vtype: string) {
            var a = Template._store;
            for (var i = 0; i < a.Count; i++) {
                var t = a.Get(i);
                if (t._name == name && vtype == t._for) return t;
            }
            return null;
        }
        public static Foreach(callback: (tmplate: Template) => boolean) {
            var s = Template._store;
            for (var i = s.Count - 1; i >= 0; i--) {
                var t = s.Get(i);
                if (callback(t)) return;
            }
        }
    }
}

export module bind {
    var key = new Object();
    export interface IJobCollection { [s: string]: basic.IJob; }
    export abstract class Scop extends bind.DObject {
        GenType(): any { return Scop; }
        private _scops: basic.scopCollection = {};
        public getScop(path: string, createIfNotEist?: boolean) {
            return Scop.getScop(this, path.split(/[\s\\\/\.]+/), createIfNotEist);
        }
        public findScop(path: string[]) {
            var cs:Scop = this;
            do {
                var t = path.pop();
                switch (t) {
                    case '.':
                        continue;
                    case '..':
                       stop();
                        cs = cs.getParent();
                        break;
                    default:
                        var c = t.charCodeAt(0);
                        if (c === 36 || c === 126)
                            throw "optimize your code by delete the first part befor ($|~)";
                        if (c ===64) {
                            
                        }
                        cs = cs._scops[t];
                        break;
                }
            } while (path.length > 0);
        }
        public abstract getParent(): Scop;
        protected abstract setParent(v: Scop);
        private static getScop(scp: Scop, name: string[], createIfNotEist?: boolean): Scop {
            while (true) {
                if (name.length === 0) return scp;
                var fname = name.shift();
                let s: Scop;
                if (scp._scops.hasOwnProperty(fname))
                    s = scp._scops[fname];
                else if (createIfNotEist)
                {
                    scp._scops[fname] = s = new ValueScop(null);
                    s.setParent(scp);
                }
                else return null;
                scp = s;
            }
        }
        public setToScop(name: string, value: any) {
            var s = this.getScop(name, true);
            s.Value = value;
        }
        public static __fields__() {

            return [Scop.DPValue];
        }
        public static DPValue = bind.DObject.CreateField<any, Scop>("Value", Object, null, null);
        public get Value(): any { return this.get<any>(Scop.DPValue); }
        public set Value(value: any) {
            var e = this.set<any>(Scop.DPValue, value);
            if (this._bindingMode && e != null)
                this._OnValueChanged(e);
        }
        public get BindingMode() { return this._bindingMode; }
        protected _bindingMode: BindingMode;
        public set BindingMode(value: BindingMode) { this._bindingMode = value == null ? 1 : value; }

        constructor(_bindingMode: BindingMode) {
            super();
            if ((<any>this).constructor == Scop) throw "abstract class";
            this._bindingMode = _bindingMode == null ? 1 : _bindingMode;
        }
        private valueChanged(sender: bind.PropBinding, e: bind.EventArgs<any, any>) {
            (<Scop>e.__this)._OnValueChanged(e);
        }
        protected abstract _OnValueChanged(e: bind.EventArgs<any, any>);
        public static Create(s: string, parent?: Scop, bindingMode?: BindingMode): Scop {
            bindingMode = bindingMode == null ? 1 : bindingMode;
            var e = s.split('|');
            var p: Scop;
            if (e.length === 1) return this.GetScop(s.split(/[\s\\\/\.]+/), parent, bindingMode);
            
            for (var i = 0; i < e.length; i += 2) {
                var f1 = e[i], f2 = e[i + 1];
                parent = f1.length === 0 ? parent : this.GetScop(f1.split(/[\.]+/), parent, bindingMode);
                parent = f2.length == 0 ? parent : CreateFilter(f2, parent, bindingMode || 3) || parent;
            }
            return parent;
        }
        public static GetScop(path: string[], parent: Scop,bindngMode:BindingMode) {
            while (path.length > 0) {
                var t = path[0];
                switch (t.charAt(0)) {
                    case '$':
                        t = t.substring(1);
                        parent = NamedScop.Create(t,bindngMode);
                        path.shift();
                        continue;
                    case '*':
                        t = t.substring(1);
                        parent = Scop.getScop(parent, t.split('*'), true);
                        path.shift();
                        continue;
                    case '~':                     
                        parent = AnonymouseScop.UnRegister(parseInt(t.substring(1)));
                        path.shift();
                        continue;
                    case '^':
                        parent = parent.getParent();
                        path.shift();
                        continue;
                    case '@':
                        t = t.substring(1).trim();
                        if (t.length > 0) parent = new bind.Bind(path.join('.'), parent, bindngMode);
                        parent = new bind.StringScop("", parent);
                        break;
                    case '':
                        return parent;
                    default:
                        return new bind.Bind(path.join('.'), parent, bindngMode);
                }
            }
            return parent;
        }
        public AddJob(job: basic.IJob, dom: HTMLElement) {
            var ji: bind.JobInstance;
            this.jobs.push(ji = new bind.JobInstance(this, job, dom));
            if (job.OnInitialize != null)
                job.OnInitialize(ji, null);
            return ji;
        }
        private jobs: bind.JobInstance[] = [];
        
        Dispose() {
            var h = this.OnDispose();
            if (h === null) return;
            for (var i = 0; i < this.jobs.length; i++) {
                var ji = this.jobs[i];
                if (ji.IsDisposed) continue;
                ji.Dispose();
            }
            this.jobs.length = 0;
            this.jobs = null;
            super.Dispose();
            if (!h) this.DisposingStat = 2;
        }

        public RegisterJob(job: basic.IJob) {
            this.mjobs[job.Name] = job;
        }
        public GetJob(name: string) {
            return this.mjobs[name];
        }
        protected mjobs: IJobCollection = {};
    }

    export class StringScop extends bind.Scop {
        private sc: basic.StringCompile;
        private pb: bind.PropBinding;
        constructor(s: string, private parent: bind.Scop) {
            super(bind.BindingMode.Direct);            
            this.sc = basic.StringCompile.Compile(s);
            
        }
        protected _OnValueChanged(e: bind.EventArgs<any, any>) { }
        public  getParent() { return this.parent; }
        protected  setParent(v: Scop) {
            var lp = this.parent;
            if (lp && this.pb)
                lp.removeEvent(bind.Scop.DPValue, this.pb);
            if (v)
                v.addEvent(bind.Scop.DPValue, this.pb = new bind.PropBinding(this.ParentValueChanged, this));
            else this.pb = null;
            this.parent = v;
            this.sc.bind(v ? v.Value : null);
        }
        ParentValueChanged(sender: bind.PropBinding, e: bind.EventArgs<any, any>) {
            this.sc.bind(e._new);
        }
    }
    var scops = {};
    export class NamedScop extends Scop {
        GenType(): any { return NamedScop; }
        private _name: string;
        public get Name(): string { return this._name; }
        constructor(name: string, bindingMode: BindingMode) {
            super(bindingMode);
            if (vars.names_scop_fromIn != true) throw "Access violatil";
            this._name = name;
            if (name)
                scops[name] = this;
            vars.names_scop_fromIn = false;
        }
        public static Get(name: string):bind.NamedScop {
            return scops[name];
        }

        protected _OnValueChanged(e: bind.EventArgs<any, any>) {

        }
        public static Create(name: string, value?: any, twoWay?: BindingMode) {
            var t: NamedScop = scops[name];
            if (t != null) return t;
            vars.names_scop_fromIn = true;
            t = new NamedScop(name, twoWay);
            t.Value = value;
            return t;
        }
        public Dispose() {
            var h = this.OnDispose();
            if (h === null) return;
            super.Dispose();
            scops[this.Name] = undefined;
            delete scops[this.Name];
            if (!h) this.DisposingStat = 2;
        }
        getParent() { return null; }
        setParent(v: Scop) { }
    }

    export class Bind extends Scop {
        GenType(): any { return Bind; }
        public static __fields__() {
            return [Bind.DPParent, Bind.DPPath];
        }
        private static PathChanged(e: bind.EventArgs<any, Bind>) {
            e.__this.int = true;
            e.__this.observer.Path = e._new == null || e._new == '' ? [] : (<string>e._new).split('.');
            e.__this.int = false;
        }
        private pb: bind.PropBinding = null;
        private static ParentChanged(e: bind.EventArgs<Scop, Bind>) {
            var t = e.__this;
            var n = e._new;
            var o = e._old;
            if (o != null && t.pb != null) {
                o.removeEvent(Scop.DPValue, t.pb);
            }
            if (n != null) {
                t.pb = n.OnPropertyChanged(Scop.DPValue, t.ParentValueChanged, t);
                t.observer.Me = n.Value;
            } else t.observer.Me = null;

        }

        Dispose() {
            var h = this.OnDispose();
            if (h === null) return;
            this.removeEvent(Scop.DPValue as any, this.pb);
            this.observer.removeEvent(Observer.DPValue, this.observerBinding);
            this.observer.Dispose();
            this.pb = null;
            this.observerBinding = null;
            this.observer = null;
            super.Dispose();
            if (!h) this.DisposingStat = 2;
        }

        ParentValueChanged(sender: bind.PropBinding, e: bind.EventArgs<any, any>) {
            this.int = true;
            this.observer.Me = e._new;
            this.int = false;
        }

        private static DPPath = bind.DObject.CreateField<string, Bind>("Path", String, null, Bind.PathChanged);
        public get Path(): string { return this.get<string>(Bind.DPPath); }
        public set Path(value: string) { this.set<string>(Bind.DPPath, value); }

        private static DPParent = bind.DObject.CreateField<Scop, Bind>("Parent", Scop, null, Bind.ParentChanged);
        public get Parent(): Scop { return this.get<Scop>(Bind.DPParent); }
        public set Parent(value: Scop) { this.set<Scop>(Bind.DPParent, value); }

        private observer: bind.Observer = new bind.Observer(null, []);

        private observerBinding: PropBinding;
        constructor(path: string | string[], parent: Scop, bindMode?: BindingMode) {
            super(bindMode);

            if (path instanceof Array) path = (<string[]>path).join('/');
            this.Path = path as any;
            if (typeof (parent) == "string") parent = NamedScop.Create(parent as any, undefined);
            this.int = true;
            this.Parent = parent;
            this.Value = this.observer.Value;
            this.observerBinding = this.observer.OnPropertyChanged(Observer.DPValue, this.__OnValueChanged, this);
            this.int = false;
        }
        private isChanging: boolean;
        private __OnValueChanged(sender: bind.PropBinding, e: bind.EventArgs<any, any>) {
            this.isChanging = true;
            this.Value = e._new;
            this.isChanging = false;
        }
        protected AttributeChanged(e: Event) {
        }
        private int: boolean = false;
        protected _OnValueChanged(e: bind.EventArgs<any, any>) {
            if (this.isChanging) return;
            if (((this.BindingMode & 2) === 2) && !this.int) {
                var o = this.observer;
                var p = o.xpath;
                var l = p.length;
                if (l === 0) return;
                var parent;

                var lp = p[l - 1];
                if (l === 1)
                    parent = o.Me;
                else
                    parent = p[l - 2].Value;

                if (parent)
                    if (lp.Property != null)
                        (parent as any).set(lp.Property, e._new);
                    else
                        parent[lp.Name] = e._new;
            }
        }
        getParent() { return this.get(Bind.DPParent); }
        setParent(v: Scop) { this.set(Bind.DPParent, v); }
        getChildren() { return [] as Scop[]; }
    }
    var i = -1;
    var ascops: Scop[] = [];
    export namespace AnonymouseScop   {        
        export function Register(scop: Scop): number {
            ascops[++i] = scop;
            return i;
        }
        export function UnRegister(i: number) :Scop{
            var t = ascops[i];
            ascops[i] = undefined;
            return t;
        }
        export function Get(i: number): Scop {
            return ascops[i];
        }
    }
    export class ValueScop extends Scop {
        constructor(value: any, bindMode?:BindingMode) {
            super(bindMode);
            this.Value = value;
        }
        _OnValueChanged(e: EventArgs<any, any>) {
        }
        getParent() { return this._parent; }
        setParent(v: Scop) { this._parent = v; }
        private _parent: Scop;
    }
    var tx = {
        '3': 3,
        '2': 2,
        '1': 1,
        '': 0,
        'false': 1,
        'true': 3
    }
    function getDbTwoWay(t) {
        if (t == null) return 1;
        return tx[t] || BindingMode[t];
    }
    class db {
        public init: { [n: string]: any };
        public bind;
        public name;
        public job;
        public twoWay: BindingMode;
        public filter: string;
        public cmd: string;
        public exec: string;
        constructor(dom: HTMLElement) {
            this.bind = dom.getAttribute('db-bind');
            this.twoWay = getDbTwoWay(dom.getAttribute('db-twoWay'));
            this.name = dom.getAttribute('db-name');
            this.job = dom.getAttribute('db-job');
            this.filter = dom.getAttribute('db-filter');
            this.cmd = dom.getAttribute('db-cmd');
            this.exec = dom.getAttribute('db-exec');
            var init = dom.getAttribute('db-init');
            if (init) {
                try {
                    this.init = JSON.parse(init);
                } catch (e) {
                }
            }
        }
    }
    export class Compiler {
        private static UnresolvedDom: HTMLElement[] = [];
        public static GetParentScop(dom: HTMLElement): Scop {
            let s, d = dom.parentElement || dom.parentNode as HTMLElement, c;
            while (<any>d != document) {
                if (d == null) return;
                c = NamedScop.Get(d['']);
                if (c instanceof Scop) return c as Scop;
                s = d.getAttribute("db-bind");
                if (s != null)
                {
                    return Scop.Create(s);
                }
                d = <HTMLElement>d.parentElement || <HTMLElement>d.parentNode;
            }
            return null;
        }
        public static processComplicatedAttribute(dom: HTMLElement, parent: Scop, _scop: Scop,tsm:JobInstance[], attribute: string) {
            var isCmd;
            var x = attribute.split("->");
            var _bind = x[0] || '';
            var job = x[1] || '';
            if (job.length === 0) return;
            if (job[0] === '#')
                isCmd = true, job = job.substr(1);
            
            if (job.length === 0)  return; 
            if (_bind[0] == '.') {
                parent = _scop || parent;
                _bind = _bind.substr(1);
            }
            else if (parent == null) parent = _scop;
            if (_bind.length > 0)
                _scop = Scop.Create(_bind, parent,
                    attribute.indexOf('<->') !== -1 ? BindingMode.BiDirection :
                        attribute.indexOf('->') ? BindingMode.Direct : BindingMode.ToSource
                );
            if (isCmd) return ScopicCommand.Call(job, dom, _scop);
            var ijob = job == '.' ? _scop.GetJob(job.substring(1)) : bind.GetJob(job);
            var ji = _scop.AddJob(ijob, dom);
            tsm.push(ji);
        }
        private static _UI: typeof UI;
        private static get UI() {
            if (this._UI != null) return this._UI;
            this._UI = (require as any)('./UI');
            this._UI = this._UI && (this._UI as any).UI;
            return this._UI;
        }
        
        public static Compile(dom: HTMLElement, parent?: Scop,control?:UI.JControl):bind.IJobScop {
            if (dom.hasAttribute('compiled')) return;
            if (control == null) {
                debugger;
            }
            var ss = context.NameOf(control.constructor);
            if (!(control instanceof this.UI.ScopicTemplateShadow)) {
                debugger;
            }
            dom.setAttribute('compiled', '');
            var t = new db(dom);
            var isnew: boolean = false;
            
            if (t.bind != null) {
                var scop: Scop;
                //if (!(scop instanceof Scop)) {
                scop = Scop.Create(t.bind, parent, t.twoWay);
                isnew = true;
                //}
                //else {
                
                //    if (scop == null) this.UnresolvedDom.push(dom);
                //    else scop.BindingMode = t.twoWay;
                //}
            } else scop = parent;
            if (t.init) {
                
                for (var ic in t.init) {
                    var v = t.init[ic];
                    scop.setToScop(ic, v);
                }
            }
            if (t.filter) {
                scop = bind.CreateFilter(t.filter, scop, t.twoWay || 3);
            }
            var tsm: JobInstance[] = [];
            var cnt: UI.JControl;
            if (t.job != null) {
                var ts = t.job.split('|');
                for (var i = 0, l = ts.length; i < l; i++) {
                    var jn = ts[i] as string;
                    var job = jn[0] == '.' ? scop.GetJob(jn.substring(1)) : bind.GetJob(ts[i]);
                    var ji = scop.AddJob(job, dom);
                    tsm.push(ji);
                    if (!cnt)
                        if (ji.Control)
                            (cnt = ji.Control).Parent = control;
                }
            }
            if (t.cmd) {
                for (var xi of t.cmd.split('|'))
                    ScopicCommand.Call(xi, dom, scop);
            }
            if (t.exec)
                this.processComplicatedAttribute(dom, parent, scop, tsm, t.exec);
            return { IsNew: isnew, Scop: scop, Jobs: tsm, Control: cnt };
        }

    }

    export abstract class Filter<T, CT> extends Scop {
        private dbb: PropBinding;

        constructor(protected source: Scop, bindingMode?: BindingMode) {
            super(bindingMode);
        }
        public Initialize() {
            if (this.source)
                this.dbb = this.source.OnPropertyChanged(Scop.DPValue, this.SourceChanged, this);
            this.Value = this.Convert(this.source ? this.source.Value : null);
        }
        protected isChanging: boolean;
        protected SourceChanged(p: PropBinding, e: EventArgs<any, Scop>) {
            if ((this._bindingMode & 1) === 0) return;
            if (this.isChanging) return;
            this.isChanging = true;
            this.Value = this.Convert(e._new);
            this.isChanging = false;
        }
        protected _OnValueChanged(e: bind.EventArgs<any, any>) {
            if ((this._bindingMode & 2) === 0) return;
            if (this.isChanging) return;
            this.isChanging = true;
            this.source.Value = this.ConvertBack(e._new);
            this.isChanging = false;
        }

        public Update() {
            this.Value = this.Convert(this.source.Value);
        }
        public UpdateBack() {
            this.source.Value = this.ConvertBack(this.Value);
        }
        protected abstract Convert(data: T): CT;
        protected abstract ConvertBack(data: CT): T;
        getParent() { return this.source; }
        setParent(v: Scop) {
            if (this.source)
                this.source.removeEvent(Scop.DPValue, this.dbb);
            if (v)
                this.dbb = v.OnPropertyChanged(Scop.DPValue, this.SourceChanged, this);
            this.source = v;
            this.Initialize();
        }
        Dispose() {
            if (this.source)
                this.source.removeEvent(Scop.DPValue, this.dbb);
            this.source = null;
            super.Dispose();
        }
    }
    export class DoubleFilter extends Filter<number, number> {
        public set Fraction(v: number) {
            if (this.fraction === v) return;
            this.fraction = v;
            switch (this._bindingMode) {
                case 0:
                    return;
                case 2:
                    this.UpdateBack();
                    return;
                case 1:
                case 3:
                    this.Update();
                    return;
            }
        }
        private fraction: number = 0.3333;
        protected Convert(data: number): number { return data / this.fraction; }
        protected ConvertBack(data: number): number { return data * this.fraction; }
    }

    export interface IFilter {
        Name: string;
        BindingMode: BindingMode;
        CreateNew(source: Scop, bindingMode: BindingMode, param: string): Filter<any, any>;
    }
    var filters = {};
    export function RegisterFilter(filter:IFilter) {
        if (filters[filter.Name]) return false;
        Object.defineProperty(filters, filter.Name, { value: filter, writable: false, configurable: false, enumerable: false });
        return true;
    }
    export function CreateFilter(filterName: string, parent: Scop, bindingMode: BindingMode) {
        var i = filterName.indexOf(':');
        if (i == -1) var p = null, name = filterName;
        else {
            name = filterName.substring(0, i);
            p = filterName.substring(i + 1);
        }
        var f = filters[name] as IFilter;
        if (!f) return parent;
        
        var e = f.CreateNew(parent, bindingMode & f.BindingMode, p);
        e.Initialize();
        return e;
    }
    
    export enum BindingMode {
        Direct = 1,
        BiDirection = 3,
        ToSource = 2,
    }
    export class TwoBind<T> {
        private dba: PropBinding;
        private dbb: PropBinding;
        private IsChanging: boolean;
        constructor(private bindingMode:BindingMode,private a: DObject, private b: DObject, private pa: DProperty<T, any>, private pb: DProperty<T, any>) {
            this.dba = a.OnPropertyChanged(pa, this.pac, this);
            this.dbb = b.OnPropertyChanged(pb, this.pab, this);
            this.Dispose = this.Dispose.bind(this);
            a.OnDisposing = this.Dispose;
            b.OnDisposing = this.Dispose;

            if (bindingMode == 2)
                this.initB();
            else
                this.init();
        }

        protected init() {
            var va = this.a.GetValue(this.pa);
            (this.b as any).set(this.pb, va);
        }

        protected initB() {
            var vb = this.b.GetValue(this.pb);
            (this.a as any).set(this.pa, vb);
        }
        protected pac(p: PropBinding, e: EventArgs<any, any>) {
            if ((this.bindingMode & 1) == 0) return;
            if (this.IsChanging) return;
            this.IsChanging = true;
            (this.b as any).set(this.pb, e._new);
            this.IsChanging = false;
        }
        protected pab(p: PropBinding, e: EventArgs<any, any>) {
            if ((this.bindingMode & 2) == 0) return;
            if (this.IsChanging) return;
            this.IsChanging = true;
            (this.a as any).set(this.pa, e._new);
            this.IsChanging = false;
        }
        private disposed
        Dispose() {
            if (this.disposed) return;
            this.disposed = true;
            this.a.OffDisposing = this.Dispose;
            this.b.OffDisposing = this.Dispose;
            this.disposed = null;
            this.a.removeEvent(this.pa, this.dba);
            this.b.removeEvent(this.pb, this.dbb);
            this.a = null;
            this.b = null;
            this.dba = null;
            this.dbb = null;
            this.pa = null;
            this.pb = null;

        }
    }
    export class TwoDBind<T,P> {
        private dba: PropBinding;
        private dbb: PropBinding;
        private IsChanging: boolean;
        constructor(private bindingMode:BindingMode, private a: DObject, private b: DObject, private pa: DProperty<T, any>, private pb: DProperty<P, any>,private con:(v:T)=>P,private conBack:(v:P)=>T) {
            this.dba = a.OnPropertyChanged(pa, this.pac, this);
            this.dbb = b.OnPropertyChanged(pb, this.pab, this);
            this.Dispose = this.Dispose.bind(this);
            a.OnDisposing = this.Dispose;
            b.OnDisposing = this.Dispose;
            if (bindingMode == 2)
                this.initB();
            else
                this.init();
        }
        protected pac(p: PropBinding, e: EventArgs<any, any>) {
            if ((this.bindingMode & 1) == 0) return;
            if (this.IsChanging) return;
            this.IsChanging = true;
            (this.b as any).set(this.pb, this.con ? this.con(e._new) : e._new);
            this.IsChanging = false;
        }
        protected pab(p: PropBinding, e: EventArgs<any, any>) {
            if ((this.bindingMode & 2) == 0) return;
            if (this.IsChanging) return;
            this.IsChanging = true;
            (this.a as any).set(this.pa, this.conBack ? this.conBack(e._new) : e._new);
            this.IsChanging = false;
        }
        protected init() {
            var va = this.a.GetValue(this.pa);
            (this.b as any).set(this.pb, this.con ? this.con(va) : va);
        }
        protected initB() {
            var vb = this.b.GetValue(this.pb);
            (this.a as any).set(this.pa, this.con ? this.conBack(vb) : vb);
        }
        private disposed
        Dispose() {
            if (this.disposed) return;
            this.disposed = true;
            this.a.OffDisposing = this.Dispose;
            this.b.OffDisposing = this.Dispose;
            this.disposed = null;
            this.a.removeEvent(this.pa, this.dba);
            this.b.removeEvent(this.pb, this.dbb);
            this.a = null;
            this.b = null;
            this.dba = null;
            this.dbb = null;
            this.pa = null;
            this.pb = null;

        }
    }
}
bind.RegisterFilter({
    Name: '2bl', BindingMode: 3, CreateNew(s, b,p) {
        var e = new bind.DoubleFilter(s, b);
        if (p)
            e.Fraction = parseFloat(p);
        return e;
    }
});
export module ScopicCommand {
    interface scmd<T> {
        callback: basic.ITBindable<(n: string, dom: HTMLElement, scop: bind.Scop, param: T) => void>;
        Param: T;
    }
    interface cb { [i: string]:scmd<any> }
    var store: cb = {};
    var i= 0;
    export function Register<T>(callback: basic.ITBindable<(n:string,dom: HTMLElement, scop: bind.Scop, param: T) => void>,param?:T,name?:string): string {
        var n = name ? name : '@' + ++i;
        store[n] = {
            callback: callback, Param: param
        };
        return n;
    }
    export function Call(n: string, dom: HTMLElement, scop: bind.Scop) {
        var cb = store[n];
        return cb ? cb.callback.Invoke.call(cb.callback.Owner, n, dom, scop, cb.Param) : void 0;
    }
    export function Delete(n: string) {
        delete store[n];
    }
    export function contains(n: string) {
        return store[n] != null;
    }

}
export module Api {
    var $freeze = Object.freeze;
    var _apis: apiGarbage = {};
    export interface IApiTrigger {
        Name: string;
        Filter: (cmdCallback: IApiCallback, params: any) => boolean;
        CheckAccess: (t: IApiTrigger) => boolean;
        Params?: any;
    }

    export interface IApiCallback {
        hash?: string;
        Name: string;
        DoApiCallback: (trigger: IApiTrigger, callback: IApiCallback, params: IApiParam) => void;
        Owner?: any;
        Params?: any;
    }
    export function RegisterApiCallback<T extends Function>(api: IApiCallback) {
        if (typeof api.Name !== 'string') return false;
        if (api.DoApiCallback instanceof Function === false) return false;
        var c = _apis[api.Name];
        if (c == null) {
            c = { Callback: [api], Trigger: undefined };
            Object.defineProperty(_apis, api.Name, { value: c, configurable: false, enumerable: false, writable: false });
        } else {
            if (c.Callback.indexOf(api) !== -1) return;
            c.Callback.push(api);
        }
        $freeze(api);
    }
    export function RegisterTrigger(api: IApiTrigger) {
        if (typeof api.Name !== 'string') return false;
        if (api.Filter && !(api.Filter instanceof Function)) return false;
        var c = _apis[api.Name];
        if (c == null) {
            c = { Callback: [], Trigger: api };
            _apis[api.Name] = c;
            $freeze(c);
        } else if (c.Trigger == null) {
            c.Trigger = api;
            $freeze(c);
        } else throw "This Command Exist";
        $freeze(api);
        
    }
    export function RiseApi<T>(apiName: string, params: IApiParam) {
        var api = _apis[apiName];
        if (!api) throw "Cmd Is Not Exist";
        var t = api.Trigger;
        if (t) {
            if (t.CheckAccess) if (!t.CheckAccess(t)) throw "Access denied";
            var f = t.Filter;
        }

        var cs = api.Callback;
        for (var i = 0, l = cs.length; i < l; i++) {
            var c = cs[i];
            if (f && !t.Filter(c, params)) continue;
            try {
                c.DoApiCallback(t, c, params);
            } catch (e) { }
        }
    }
    interface IApiParam {
        data: any;
        callback?(p: IApiParam, args);
    }
    interface IApi {
        Trigger: IApiTrigger;
        Callback: IApiCallback[]
    }
    interface apiGarbage {
        [name: string]: IApi;
    }

}

export module encoding {
    interface IDRef {
        val: any;
        paths?: IPath<any, any>[];
        setted?: boolean
        
    }
    export interface IPath<OB,DP> {
        Owner: OB;
        Property: DP;
        Set<T>(value: T): T;
        executed: boolean;
    }
    export class BPath implements IPath<bind.DObject, bind.DProperty<any, any>> {
        executed: boolean;
        public Set(value: any) {
            (this.Owner as any).set(this.Property, value);
            this.executed = true;
            return value;
        }
        constructor(public Owner: bind.DObject, public Property: bind.DProperty<any, any>) {

        }
    }
    export class Path implements IPath<any | bind.DObject, string | bind.DProperty<any, any>> {        
        executed: boolean;
        public Set(value: any) {
            if (this.Property instanceof bind.DProperty)
                (this.Owner as any).set(this.Property, value);
            else
                this.Owner[this.Property as string] = value;
            this.executed = true;
            return value;
        }
        constructor(public Owner: any | bind.DObject, public Property: string | bind.DProperty<any, any>) {

        }
    }
    export class LPath implements IPath<collection.List<any>, number> {
        executed: boolean;
        public Set(value: any) {
            if (!this.Owner.Insert(this.Property, value))
                this.Owner.Add(value);
            this.executed = true;
            return value;
        }
        constructor(public Owner: collection.List<any>, public Property: number) {

        }
    }

    export interface Serialization<T> {
        FromJson(json, context: SerializationContext, ref: IRef): T;
        ToJson(data: T, context: SerializationContext,indexer:encoding.IIndexer);
    }
    export interface IRef {
        __ref__: number;
    }
    export interface IIndexer {
        ref: IRef;
        json: any;
        valid: boolean;
    }
    var _sstore = new collection.Dictionary<Function, Serialization<any>>("SerializationContext", false);
    export class SerializationContext {
        public static GlobalContext = new SerializationContext(true);
        private _store;
        private _ext: SerializationContext[] = [];
        public RequireNew: (json:any,type: Function| reflection.GenericType) => boolean;
        public Dispose() {
            this.reset();
            this._ext = null;
            this._store = null;
            this.cnt = null;
            this.indexer = null;
            this.refs = null;
        }
        constructor(isDefault: boolean) {
            if (isDefault) this._store = _sstore;
            else this._store = new collection.Dictionary<Function, Serialization<any>>("SerializationContext", false);
        }
        public Register<T>(type: Function, ser: Serialization<T>) {
            this._store.Set(type, ser);
        }
        public Append(con: SerializationContext) {
            this._ext.push(con);
        }
        public Get(type: Function): Serialization<any> {
            var v = this._store.Get(type);
            if (v) return v;
            var c = this._ext;
            for (var i = c.length - 1; i >= 0; i--)
                if ((v = c[i].Get(type)) != null) return v;
            return null;
        }
        private indexer = new collection. Dictionary<any, IIndexer>("Indexer", true);
        private refs: IDRef[] = [];
        public get(ref: number, path: IPath<any, any>) {
            var dref = this.refs[ref];
            if (dref) {
                if (dref.setted)
                    return path ? path.Set(this.refs[ref].val) : this.refs[ref].val;
                else
                    if (path) {
                        if (!dref.paths) dref.paths = [path];
                        else dref.paths.push(path);
                    }
                    else throw "entry Point not Found";
            }
            else {
                var i: IDRef = { val: undefined, paths: [path] };
                this.refs[ref] = i;
                
            }
            return undefined;
        }
        public set(ref: number, obj) {
            var x = this.refs[ref];
            if (x) {
                x.val = obj;
                x.setted = true;
                if (x.paths)
                    for (var i = 0; i < x.paths.length; i++)
                        x.paths[i].Set(obj);
            } else
                this.refs[ref] = { val: obj, setted: true };
        }

        private cnt: number = 0;
        public getJson(obj): IIndexer {
            var l = this.indexer.Get(obj);
            if (l == null) {
                var ref = { __ref__: ++this.cnt };
                var json = { '@ref': ref };
                this.indexer.Set(obj, l = { ref: ref, json: json, valid: false });
                if (obj instanceof bind.DObject) {
                    var type = context.NameOf(obj.constructor);
                    if (type != null) json['__type__'] = type;
                }
            }
            return l;
        }
        public reset() {
            this.indexer.Clear();
            this.cnt = 0;
            this.refs.length = 0;
            return this;
        }
        private static getType(type: Function) {
            while (true) {
                if (type instanceof reflection.DelayedType)
                    type = (type as any as reflection.DelayedType).Type;
                else if (type instanceof reflection.GenericType)
                    type = (type as any as reflection.GenericType).Constructor;
                else return type;
            }
        }
        
        public FromJson(json: any, type: Function| reflection.GenericType,path:IPath<any,any>) {
            if (json == null) return path ? path.Set(json) : json;
            if (type instanceof reflection.DelayedType)
                type = (type as any as reflection.DelayedType).Type;
            if (type instanceof reflection.GenericType)
                type = (type as any as reflection.GenericType).Constructor;    
            if (type === String || type === Number || type === Boolean)
                return path ? path.Set(json) : json;
            else if (type === Date)
                return path.Set(new Date(json));
            if (typeof json.__ref__ == 'number')
                return this.get(json.__ref__, path);
            var obj;
            var ref = json['@ref'] as IRef;
            delete json['@ref'];
            
            if (reflection. IsInstanceOf(type, bind.DObject)) {
                if ((type as any).CreateFromJson)
                    obj = (type as any).CreateFromJson(json, type, this.RequireNew ? this.RequireNew(json, type) : false);
                
                if (obj == null)
                    obj = new (type as any)() as bind.DObject;

                if (ref) this.set(ref.__ref__, obj);
                obj = (obj as bind.DObject).FromJson(json, this);
            }
            else {
                if (type.prototype != null && type.prototype.hasOwnProperty('fromJson'))
                    obj = type.prototype.fromJson(json, context, ref);
                else {
                    
                    var c = this.Get(type as any);
                    obj = c != null ? c.FromJson(json, this, ref) : json;

                } if (ref) this.set(ref.__ref__, obj);
            }            
            return path ? path.Set(obj) : obj;
        }

        public ToJson(obj: any) {
            if (obj === null) return null;
            switch (typeof obj) {
                case 'string':
                case 'number':
                case 'boolean':
                case 'undefined':
                    return obj;
                case 'function':
                    return (obj as Function).toString();
                default:
                    var ref_json: encoding.IIndexer = this.getJson(obj);
                    if (ref_json.valid) return ref_json.ref;                    
                    if (obj === Object) return this._toJson(obj, ref_json);
                    else if (obj instanceof bind.DObject)
                        return (obj as bind.DObject).ToJson(this, ref_json);
                    else{
                        var c = this.Get(obj.constructor);
                        if (c)
                        {
                            return c.ToJson(obj, this, ref_json);
                        }
                        else return this._toJson(obj,ref_json);
                    }
            }
        }
        private _toJson(obj, ret: IIndexer) {
            ret.valid = true;
            for (var i in obj)
                ret[i] = this.ToJson(obj[i]);
            return ret;
        }
        public toString() {
            JSON.stringify(this);
        }
    }

}


export module net {
    export class Header {
        private _key: string;

        public get key(): string {
            return this._key;
        }

        private _value: string;

        public get value(): string {
            return this._value;
        }

        constructor(key, value) {
            this._key = key;
            this._value = value;
        }
    }

    export enum ResponseType {
        json,
        Document,
        Text,
        ArrayBuffer,
        Blob
    }

    export enum WebRequestMethod {
        Get,
        Post,
        Head,
        Put,
        Delete,
        Options,
        Connect,
        Create,
        Open,
        Close,
        Validate,
        FastValidate,
        Print,
        UPDATE,
        SUPDATE,
    }

    export class WebRequest implements basic.IDisposable {
        private http: XMLHttpRequest = new XMLHttpRequest();
        private _responseType: ResponseType = null;

        public getResponseType(): ResponseType {
            return this._responseType || ResponseType.Text;
        }

        public setResponseType(v: ResponseType): ResponseType {
            this._responseType = v;
            return v;
        }
        public set Crypto(v: basic.ICrypto) {
            this.crypt = v;
        }

        private key: Object = new Object();
        private downloadDelegate: basic.IDelegate;

        constructor(public crypt: basic.ICrypto) {
            //this.OnInitialized = new bind.EventListener<(e: WebRequest) => void>(this.key);
            //this.OnSetup = new bind.EventListener<(e: WebRequest) => void>(this.key);
            //this.OnSended = new bind.EventListener<(e: WebRequest) => void>(this.key);
            //this.OnProgress = new bind.EventListener<(e: WebRequest) => void>(this.key);
            this.OnComplete = new bind.EventListener<(e: WebRequest) => void>(this.key);
            this.http.addEventListener('loadend',
                this.downloadDelegate = new basic.Delegate(this,
                    this._onprogress,
                    (p) => {
                        p.Owner.http.removeEventListener('loadend', p);
                        p.Owner.http.removeEventListener('error', p);
                    }));
            this.crypt = new crypto.AesCBC(key.slice(0));
            this.http.addEventListener('error', this.downloadDelegate);

        }

        Dispose() {
            /*
            this.OnInitialized.Dispose();
            this.OnSetup.Dispose();
            this.OnSended.Dispose();
            this.OnProgress.Dispose();*/
            this.OnComplete.Dispose();
            this.downloadDelegate.Dispose();
            this.key = null;
            this.http = null;
            /*
            this.OnInitialized = null;
            this.OnSetup = null;
            this.OnSended = null;
            this.OnProgress = null;*/
            this.OnComplete = null;
            this.downloadDelegate = null;
        }

        private _onprogress(e) {
            var cur: bind.EventListener<any> = null;
            switch (this.http.readyState) {
                //case 0:
                //    cur = this.OnInitialized;
                //    break;
                //case 1:
                //    cur = this.OnSetup;
                //    break;
                //case 2:
                //    cur = this.OnSended;
                //    break;
                //case 3:
                //    cur = this.OnProgress;
                //    break;
                case 4:
                    cur = this.OnComplete;
                    break;
            }

            if (cur) {
                var t = this;
                cur.Invoke(this.key, [t]); // function (dlg) { dlg(t); });
            }
        }

        public get IsSuccess() { return this.http.status == 200 && this.http.readyState == 4; }

        public Download(req: IRequestUrl, data: any) {
            this.http.open(WebRequestMethod[req.Method], req.Url, true);
            this.http.responseType = <any>ResponseType[this.getResponseType()].toLowerCase();
            if (req.Method === WebRequestMethod.Get)
                this.http.send();
            else this.http.send(JSON.stringify(data));
        }

		public Download2(c: Request) {
			if (c.url.beforRequest)
				if (!c.url.beforRequest(c.url)) {
					
						var cur = this.OnComplete;
						if (cur) {
							var t = this;
							cur.Invoke(this.key, [t]); // function (dlg) { dlg(t); });
						}
                }
            var req = c.url;
            var url = req.Url;
            if (c.params) {
                var s = url.lastIndexOf('?') != -1;
                for (var i in c.params)
                    url += (!s ? ((s = true) && '?') : '&') + (encodeURI(i) + '=' + encodeURI(String(c.params[i])));
            }
            this.http.open(WebRequestMethod[req.Method], url, true);
            this.http.setRequestHeader('Access-Control-Allow-Origin', 'true');
            this.http.responseType = <any>ResponseType[this.getResponseType()].toLowerCase();
            if (req.HasBody===false || req.Method === WebRequestMethod.Get )
                this.http.send();
            else {
                if (c.data)
                    try {
                        var x = btoa(c.data.OutputData());
                        var bytes = crypto.string2bytes(x);
                        if (this.crypt)
                            bytes = this.crypt.Encrypt(bytes);
                        this.http.send(new Uint8Array(bytes));
                    } catch (err) {
                    }
                else this.http.send();
            }
        }

        GetFileSize(url, callback) {
            this.http.open("HEAD", url, true);
            this.http.onreadystatechange = function () {
                if (this.readyState == this.DONE) {
                    if (callback)
                        callback(parseInt(this.getResponseHeader("Content-Length")));
                }
            };
            this.http.send();
        }

        GetHeader(url, callback) {
            this.http.open("HEAD", url, true);
            this.http.onreadystatechange = function () {
                if (this.readyState == this.DONE) {
                    if (callback) {

                        var h = this.getAllResponseHeaders().split('\r\n');
                        var t: Header[] = [];
                        for (var i = h.length - 1; i >= 0; i--) {
                            var p: string = h[i];
                            if (p) {
                                var vk = p.split(': ');
                                t.push(new Header(vk[0], vk[1]));
                            }
                        }
                        //Object.freeze(t);
                        callback(t);
                    }
                }
            };
            this.http.send();
        }

        //public OnInitialized: bind.EventListener<(e: WebRequest) => void>; //0
        //public OnSetup: bind.EventListener<(e: WebRequest) => void>; //1
        //public OnSended: bind.EventListener<(e: WebRequest) => void>; //2
        //public OnProgress: bind.EventListener<(e: WebRequest) => void>; //3
        public OnComplete: bind.EventListener<(e: WebRequest) => void>; //4

        public get Response() {
            return this.http.response;
        }

    }
    export abstract class RequestParams<T, S>
    {
        public IsSuccess: boolean = null;

        constructor(protected callback: (sender: S, result: any) => void, public data: T, public isPrivate?: boolean) {
            if (isPrivate == void 0) this.isPrivate = false;
        }

        public Callback(sender: S, result: any) {
            if (this.callback)
                this.callback(sender, result);
        }
        public abstract OutputData(): string;
        public InputData: string;
    }
    export interface RequestMethodShema {
        Method: WebRequestMethod;
        Name: string;
        SendData: boolean;
        ParamsFormat?: basic.StringCompile;
    }
    export interface IRequestParams{
        [name: string]: string|number|boolean;
    }
    export class Request {        
        public fail: boolean = undefined;
        constructor(public url: IRequestUrl, public data: RequestParams<any, QueeDownloader>,public params: IRequestParams) {
        }
    }

    export class QueeDownloader {
        private webr: net.WebRequest;

        public get Request(): net.WebRequest { return this.webr; }

        private quee: Request[] = [];
        private isRunning: boolean = false;
        private isDownloading = false;

        public set Crypto(v: basic.ICrypto) {
            this.webr.Crypto = v;
        }

        constructor(public crypt: basic.ICrypto) {
            this.webr = new net.WebRequest(crypt);
            this.webr.setResponseType(net.ResponseType.Text);
            this.webr.OnComplete.Add(this.DownloadComplete.bind(this), "DCT");
        }

        public current: Request;

        private DownloadComplete(xmlRequest) {

            this.isDownloading = false;
            var x = this.webr.IsSuccess ? this.OnSuccess : this.OnFail;            
            try {
                var ip = true;
                var th = this;
                if (th.current.data instanceof RequestParams) {
                    try {
                        var c = th.current.data;
                        c.IsSuccess = th.webr.IsSuccess;
                        c.Callback(this, this.webr);
                    } catch (e) {
                    }
                    ip = !(c.isPrivate);
                }
                if (ip)
                    x.Invok(1, function (arg: (d: QueeDownloader, data: any) => void) { arg(th, th.current.data); });
            } catch (error) {
            }
            this.Next();
        }

        private success: Request[] = [];
        private fails: Request[] = [];

        public Push(url: IRequestUrl, data: RequestParams<any, QueeDownloader>,params:IRequestParams) {
            url.Url = (url.Url as any).startsWith('http://') ? url.Url : basic.host + url.Url;
            this.quee.push(new Request(url, data, params));
            if (!this.isRunning) this.Start();
        }

        public Insert(dcall: Request) {
            this.quee.push(dcall);
            if (!this.isRunning) this.Start();
        }

        public Start() {
            if (this.isDownloading) return;
            this.isRunning = true;
            this.Next();
        }

        Next() {
            if (0 == this.quee.length) {
                this.isRunning = false;
                this.isDownloading = false;
                var ___this = this;
                this.OnFinish.Invoke(1, [___this, ___this.current.data]);
                return;
            }
            this.webr.Download2(this.current = this.quee.shift());
            this.isDownloading = true;
        }

        public Restart() {
            this.isDownloading = false;
            this.Start();
        }

        public OnSuccess: bind.EventListener<any> = new bind.EventListener<any>(1);
        public OnFail: bind.EventListener<any> = new bind.EventListener<any>(1);
        public OnFinish: bind.EventListener<any> = new bind.EventListener<any>(1);
    }
}


export module net{

    export interface IRequestHeader {
        [key: string]: string;
    }

    export interface IRequestUrl {
        beforRequest?: (req: net.IRequestUrl) => void;
        Url: string;
        Method?: net.WebRequestMethod;
        Header?: IRequestHeader;
        HasBody?: boolean;
    }

    export class RequestUrl implements IRequestUrl {
		beforRequest: (req: net.IRequestUrl) => void;
        public get Url() {
            if (this.context)
                return this.context.GetPath(this._url);
            return this._url;
        }
		public set Url(v: string) { this._url = v; }

        constructor(private _url: string, private context: basic.IContext,
            public Header?: IRequestHeader, public Method?: net.WebRequestMethod, public HasBody?:boolean) {
            if (Header == null) Header = {};
            if (Method == undefined) this.Method = net.WebRequestMethod.Get;
            if (HasBody == undefined) HasBody = true;
        }
    }
}

export namespace basic {
    var _events = new collection.Dictionary<DomEventHandler<any, any>, EventTarget>("ethandler");
    export class DomEventHandler<T extends Event, P> implements IEventHandler, EventListenerObject {
        Started: boolean = false;
        constructor(public dom: Element, public event: string, private handle: (eh: DomEventHandler<T, P>, ev: T, param: P) => void, private param?: P) {
            _events.Set(this, dom);
        }
        Start() {
            if (this.Started === false) {                
                this.Started = true;
                this.dom.addEventListener(this.event, this);
            }
        }
        Pause() {
            if (this.Started === true) {
                this.Started = false;
                this.dom.removeEventListener(this.event, this);
            }
        }
        Dispose() {
            if (this.Started === undefined) return;
            this.Pause();
            _events.Remove(this);
            this.dom = undefined;
            this.event = undefined;
            this.handle = undefined;
            this.Started = undefined;
            this.param = undefined;
        }
        Reset() {
            this.Pause();
            this.Start();
        }
        handleEvent(evt: Event): void {
            this.handle(this, evt as T, this.param);
        }
        public static Dispose(dom: EventTarget, event?: string) {
            let i;
            if (event == null)
                for (let i = 0, ks = _events.RemoveAllValues(dom); i < ks.length; i++)
                    ks[i].Dispose();
            else
                do
                    if ((i = _events.IndexOfValue(dom, i)) === -1) break;
                    else _events.RemoveAt(i).Key.Dispose();
                while (true);
        }
    }

}


export module crypto {

    var aes_store = {};
    var Sbox = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22];
    var ShiftRowTab = [0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 1, 6, 11];
    var ShiftRowTab_Inv: number[];
    var Sbox_Inv: number[], xtime: number[];

    export function string2bytes_16(a: string): Uint16Array {
        var c = new Uint16Array(a.length);
        for (var d = 0; d < a.length; d++)
            c[d] = a.charCodeAt(d);
        return c;
    }

    export function bytes2string_16(a: Uint16Array) {
        for (var c = "", d = 0; d < a.length; d++)
            c += String.fromCharCode(a[d]);
        return c;
    }


    export function string2bytes(a: string | number[]) {
        if (a instanceof Array) return a.slice(0);
        var c = new Array(a.length);
        for (var d = 0; d < a.length; d++) {
            var x = (a as string).charCodeAt(d);
            if (x > 255)
                throw "Invalid ASCII Charactere";
            c[d] = x;
        }
        return c;
    }

    export function bytes2string(a) {
        for (var c = "", d = 0; d < a.length; d++)
            c += String.fromCharCode(a[d]);
        return c
    }

    ;
    Sbox_Inv = Array(256);
    for (var b = 0; b < 256; b++)
        Sbox_Inv[Sbox[b]] = b;
    ShiftRowTab_Inv = Array(16);
    for (b = 0; b < 16; b++)
        ShiftRowTab_Inv[ShiftRowTab[b]] = b;
    xtime = Array(256);
    for (b = 0; b < 128; b++)
        xtime[b] = b << 1,
            xtime[128 + b] = b << 1 ^ 27;


    export class Aes implements basic.ICrypto {

        protected Key: number[];
        constructor(key: string | number[]) {
            if ('string' === typeof (key))
                this.Key = this.InitKey(string2bytes(key));
            else if (key instanceof Array)
                this.Key = this.InitKey(key);
            else throw "Invalid Key";
        }
        InitKey(key: number[]): number[] {
            return key;
        }

        static ExpandKey(b: number[]) {
            ;
            var c = b.length, d, e = 1;
            switch (c) {
                case 16:
                    d = 176;
                    break;
                case 24:
                    d = 208;
                    break;
                case 32:
                    d = 240;
                    break;
                default:
                    alert("my.ExpandKey: Only key lengths of 16, 24 or 32 bytes allowed!")
            }
            for (var g = c; g < d; g += 4) {
                var h = b.slice(g - 4, g);
                if (g % c == 0) {
                    if (h = [Sbox[h[1]] ^ e, Sbox[h[2]], Sbox[h[3]], Sbox[h[0]]],
                        (e <<= 1) >= 256)
                        e ^= 283
                } else
                    c > 24 && g % c == 16 && (h = [Sbox[h[0]], Sbox[h[1]], Sbox[h[2]], Sbox[h[3]]]);
                for (var f = 0; f < 4; f++)
                    b[g + f] = b[g + f - c] ^ h[f]
            }
        }

        Encrypt(data: number[]): number[] {
            ;
            var Key = this.Key;
            var d = Key.length;
            Aes.AddRoundKey(data, Key.slice(0, 16));
            for (var e = 16; e < d - 16; e += 16)
                Aes.SubBytes(data, Sbox),
                    Aes.ShiftRows(data, ShiftRowTab),
                    Aes.MixColumns(data),
                    Aes.AddRoundKey(data, Key.slice(e, e + 16));
            Aes.SubBytes(data, Sbox);
            Aes.ShiftRows(data, ShiftRowTab);
            Aes.AddRoundKey(data, Key.slice(e, d));
            return data;

        }

        Decrypt(data: number[]): number[] {
            ;
            var Key = this.Key;
            var d = Key.length;
            Aes.AddRoundKey(data, Key.slice(d - 16, d));
            Aes.ShiftRows(data, ShiftRowTab_Inv);
            Aes.SubBytes(data, Sbox_Inv);
            for (d -= 32; d >= 16; d -= 16)
                Aes.AddRoundKey(data, Key.slice(d, d + 16)),
                    Aes.MixColumns_Inv(data),
                    Aes.ShiftRows(data, ShiftRowTab_Inv),
                    Aes.SubBytes(data, Sbox_Inv);
            Aes.AddRoundKey(data, Key.slice(0, 16))
            return data;
        }

        SEncrypt(data: string): string {
            return bytes2string(this.Encrypt(string2bytes(data)));
        }
        SDecrypt(data: string): string {
            return bytes2string(this.Decrypt(string2bytes(data)));
        }

        static SubBytes(a, c) {
            ;
            for (var d = 0; d < 16; d++)
                a[d] = c[a[d]]
        }
        static AddRoundKey(a, c) {
            ;
            for (var d = 0; d < 16; d++)
                a[d] ^= c[d]
        }

        static ShiftRows(a, c) {
            ;
            for (var d = [].concat(a), e = 0; e < 16; e++)
                a[e] = d[c[e]]
        }

        static MixColumns(b) {
            ;
            var _xtime = xtime;
            for (var c = 0; c < 16; c += 4) {
                var d = b[c + 0]
                    , e = b[c + 1]
                    , g = b[c + 2]
                    , h = b[c + 3]
                    , f = d ^ e ^ g ^ h;
                b[c + 0] ^= f ^ _xtime[d ^ e];
                b[c + 1] ^= f ^ _xtime[e ^ g];
                b[c + 2] ^= f ^ _xtime[g ^ h];
                b[c + 3] ^= f ^ _xtime[h ^ d]
            }
        }
        static MixColumns_Inv(b) {
            ;
            var _xtime = xtime;
            for (var c = 0; c < 16; c += 4) {
                var d = b[c + 0]
                    , e = b[c + 1]
                    , g = b[c + 2]
                    , h = b[c + 3]
                    , f = d ^ e ^ g ^ h
                    , o = _xtime[f]
                    , p = _xtime[_xtime[o ^ d ^ g]] ^ f;
                f ^= _xtime[_xtime[o ^ e ^ h]];
                b[c + 0] ^= p ^ _xtime[d ^ e];
                b[c + 1] ^= f ^ _xtime[e ^ g];
                b[c + 2] ^= p ^ _xtime[g ^ h];
                b[c + 3] ^= f ^ _xtime[h ^ d]
            }
        }
    }

    export class AesCBC extends Aes {
        constructor(key: string | number[]) {
            super(key);
        }
        InitKey(key: number[]) {
            Aes.ExpandKey(key);
            return key;
        }
        static blockXOR(a, c) {
            ;
            for (var d = Array(16), e = 0; e < 16; e++)
                d[e] = a[e] ^ c[e];
            return d
        }
        static blockIV(): number[] {
            ;
            var a = new crypto.SecureRandom(), c = Array(16);
            a.nextBytes(c);
            return c;
        }

        static pad16(a: number[]): number[] {
            ;
            var c = a.slice(0)
                , d = (16 - a.length % 16) % 16;
            for (var i = a.length; i < a.length + d; i++)
                c.push(0);
            return c
        }
        ;
        static depad(a: number[]) {
            ;
            for (a = a.slice(0); a[a.length - 1] == 0;)
                a = a.slice(0, a.length - 1);
            return a
        }


        Encrypt(data: number[]) {
            ;
            var Key = this.Key;
            for (var e = AesCBC.pad16(data), g = AesCBC.blockIV(), h = 0; h < e.length / 16; h++) {
                var f = e.slice(h * 16, h * 16 + 16);
                f = AesCBC.blockXOR(g.slice(h * 16, h * 16 + 16), f);
                super.Encrypt(f);
                g = g.concat(f);
            }
            return g;
        }

        Decrypt(data: number[]) {
            ;
            var g = [];
            for (var h = 1; h < data.length / 16; h++) {
                var f = data.slice(h * 16, h * 16 + 16)
                    , o = data.slice((h - 1) * 16, (h - 1) * 16 + 16);
                super.Decrypt(f);
                f = AesCBC.blockXOR(o, f);
                g = g.concat(f)
            }
            return AesCBC.depad(g);
        }

    }

}

export module crypto {
    class Arcfour {
        ;
        public j: number;
        public i: number;
        public S: number[] = [];
        init(a) {
            ;
            var b, c, d;
            for (b = 0; b < 256; ++b)
                this.S[b] = b;
            for (b = c = 0; b < 256; ++b)
                c = c + this.S[b] + a[b % a.length] & 255,
                    d = this.S[b],
                    this.S[b] = this.S[c],
                    this.S[c] = d;
            this.j = this.i = 0
        }
        next() {
            ;
            var a;
            this.i = this.i + 1 & 255;
            this.j = this.j + this.S[this.i] & 255;
            a = this.S[this.i];
            this.S[this.i] = this.S[this.j];
            this.S[this.j] = a;
            return this.S[a + this.S[this.i] & 255]
        }
    }

    var rng_psize = 256, rng_state, rng_pool: Uint8Array, rng_pptr;

    if (rng_pool == null) {
        rng_pool = new Uint8Array(rng_psize);
        rng_pptr = 0;
        var t;
        if (navigator.appName == "Netscape" && navigator.appVersion < "5" && window.crypto) {
            var z = (window.crypto as any).random(32);
            for (t = 0; t < z.length; ++t)
                rng_pool[rng_pptr++] = z.charCodeAt(t) & 255
        }
        for (; rng_pptr < rng_psize;)
            t = Math.floor(65536 * Math.random()),
                rng_pool[rng_pptr++] = t >>> 8,
                rng_pool[rng_pptr++] = t & 255;
        rng_pptr = 0;
        rng_seed_time()
    }
    function prng_newstate() {
        return new Arcfour
    }

    function rng_seed_int(a) {
        ;
        rng_pool[rng_pptr++] ^= a & 255;
        rng_pool[rng_pptr++] ^= a >> 8 & 255;
        rng_pool[rng_pptr++] ^= a >> 16 & 255;
        rng_pool[rng_pptr++] ^= a >> 24 & 255;
        rng_pptr >= rng_psize && (rng_pptr -= rng_psize)
    }
    function rng_seed_time() {
        rng_seed_int((new Date).getTime())
    }
    export class SecureRandom {
        nextBytes(a) {
            ;
            var b;
            for (b = 0; b < a.length; ++b)
                a[b] = this.rng_get_byte()
        }
        rng_get_byte() {
            ;
            if (rng_state == null) {
                rng_seed_time();
                rng_state = prng_newstate();
                rng_state.init(rng_pool);
                for (rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
                    rng_pool[rng_pptr] = 0;
                rng_pptr = 0
            }
            return rng_state.next()
        }
    }
}


export interface BuckupList<T> {
    values: any[];
    OnUndo?: (self:T,bl: BuckupList<T>) => void;
}
var backups = new collection.Dictionary<Array<any>, BuckupList<any>[]>("buckups");



export namespace Ids {
    export class t1 { }
    export class t2 { }
    export class t3 { }
}



function setProperty<T>(type: typeof Object, p: bind.DProperty<T, bind.DObject>) {
    Object.defineProperty(type.prototype, p.Name, {
        get: function () { return this.get(p); },
        set: function (v: T) { this.set(p, v); },
        //configurable: !false,
        //enumerable: false
    });
}
var key = [234, 23, 196, 234, 69, 238, 92, 244, 50, 110, 70, 181, 109, 139, 252, 209, 146, 174, 40, 140, 129, 41, 58, 89, 102, 193, 99, 194, 178, 192, 239, 152];
var data = [65, 99, 104, 111, 117, 114, 32, 66, 114, 97, 104, 105, 109, 32, 83, 108, 105, 109, 97, 110, 101];
var cssRules = [];
class CSSRule {
    constructor(cssrule, parent) {
        var t;
        t = this;
        if (cssrule instanceof CSSMediaRule) {
            var mr = cssrule;
            var rs = mr.cssRules;
            for (var j = 0; j < rs.length; j++) {
                var r = rs[j];
                if (r instanceof CSSMediaRule)
                    new CSSRule(r, this);
            }
            t.IsMedia = true;
        }
        if (parent) {
            t.Parent = parent;
            if (!parent.children) parent.children = [this];
            else parent.children.push(this);
        }
        cssRules.push(this); t.Rule = cssrule;

    }
    Dispose() {
        var i = cssRules.indexOf(this);
        if (i == -1) return;
        cssRules.splice(i, 1);
    }
    get Selectors() {
        var t = null;
        t = this;
        var r = t.Rule;
        if (t.IsMedia) {
            return [];
        }
        t._selectors = r.selectorText.split(',');
        return t._selectors;
    }
    IsMatch(selector) {
        var c = this.Selectors;
        for (var i = 0; c.length; i++) {
            var x = c[i].split(/\:\+\>/);
            
        }
    }

}
function collectCss() {    
    var d;
    d = document;
    var ss = d.styleSheets;
    for (var i = 0; i < ss.length; i++) {
        var s = ss.item(i);
        var rs = s.cssRules;
        for (var j = 0; j < rs.length; j++) {
            var r = rs[j];
            new CSSRule(r, null);
        }
    }        
}
(window as any).collectCss = collectCss;
