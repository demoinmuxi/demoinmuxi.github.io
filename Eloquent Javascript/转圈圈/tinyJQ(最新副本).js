; (function (window, undefined) {
    window.$ = function (selector, all) {
        if (selector[0] === "+") {
            if (all) {
                var temp=new _$(document.createElement(selector.substring(1)));
                temp.dom.innerHTML=all;
                return temp;
            }else{
                return new _$(document.createElement(selector.substring(1)));
            }
            
        } else if (selector[0] === "-") {
            if (selector.substring(1)) {
                var temp = (new _$(selector.substring(1)));
                temp.dom.parentNode.removeChild($(temp.dom.parentNode).$(selector.substring(1)).dom);
            } else if (all) {
                var temp;
                if (all instanceof _$) {
                    temp=all;
                    all=all.dom;
                }else{
                    temp=$(all);
                }
                temp.dom.parentNode.removeChild(all);
            }
        } else {
            return new _$(selector, all);
        }
    }
    window.$random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    window.$quicksort = function (arr) {
        var baseNum = arr[0];
        var leftArr = [], rightArr = [];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < baseNum) {
                leftArr.push(arr[i]);
            } else {
                rightArr.push(arr[i]);
            }
        }
        if (leftArr.length >= 2) leftArr = $quicksort(leftArr);
        if (rightArr.length >= 2) rightArr = $quicksort(rightArr);
        return leftArr.concat(baseNum, rightArr);
    }
    function _$(selector, all, fatherele) {
        if (selector instanceof Node) {
            this.dom = selector;
        } else if (selector instanceof NodeList || selector instanceof HTMLCollection) {
            this.dom = selector;
            this.alldom = true;
        }
        else {
            this.dom =
                fatherele ?
                    (all ? (this.alldom = true, fatherele.querySelectorAll(selector)) : fatherele.querySelector(selector))
                    : (all ? (this.alldom = true, document.querySelectorAll(selector)) : document.querySelector(selector));
        }
    }
    _$.prototype = {
        constructor: _$,
        addEvent: function (name, fn) {
            if (typeof name === "string" && typeof fn === "function") {
                if (this.dom instanceof HTMLElement) {
                    this.dom.addEventListener(name, fn, false);
                } else if (this.alldom) {
                    for (let i = 0; i < this.dom.length; i++) {
                        this.dom[i].addEventListener(name, fn, false);
                    }
                }
            } else if (typeof name === "object") {
                var key = Object.keys(name);
                if (this.dom instanceof HTMLElement) {
                    for (let i = 0; i < key.length; i++) {
                        this.dom.addEventListener(key[i], name[key[i]], false);
                    }
                } else if (this.alldom) {
                    for (let i = 0; i < this.dom.length; i++) {
                        for (let j = 0; j < key.length; j++) {
                            this.dom[i].addEventListener(key[j], name[key[j]], false);
                        }
                    }
                }
            } else if (fn instanceof Array) {
                var len = this.dom.length > fn.length ? fn.length : this.dom.length;
                for (let i = 0; i < len; i++) {
                    if (fn[i]) {
                        this.dom[i].addEventListener(name, fn[i], false);
                    }
                }
            }
            return this;
        },
        css: function (key, name) {
            if (!this.alldom) {
                if (key instanceof Object) {
                    var arr = Object.keys(key);
                    for (let i = 0, len = arr.length; i < len; i++) {
                        this.dom.style[arr[i]] = key[arr[i]];
                    }
                    // for (const zkey in key) {
                    //     this.dom.style[zkey]=key[zkey];
                    //     console.log("xiugaishux",this.dom.style[zkey],key[zkey],zkey);
                    // }
                    return this;
                } else if (this.dom instanceof HTMLElement) {
                    return name ? (this.dom.style[key] = name, this) : this.dom.style[key];
                }
            } else {
                var f = this.dom.length;
                if (name instanceof Array) {
                    var len = f > name.length ? name.length : f;
                    for (let i = 0; i < len; i++) {
                        this.dom[i].style[key] = name[i] || this.dom[i].style[key];
                    }

                } else if (key instanceof Object) {
                    var arr = Object.keys(key);
                    for (let j = 0; j < f; j++) {
                        for (let i = 0, len = arr.length; i < len; i++) {
                            this.dom[j].style[arr[i]] = key[arr[i]];
                        }
                    }
                } else if (name) {
                    for (let i = 0; i < this.dom.length; i++) {
                        this.dom[i].style[key] = name;
                    }
                }
                return this;
            }
        },
        class: function (change) {
            if (!this.alldom) {
                if (change[0] == "+") {
                    this.dom.classList.add(change.substring(1));
                } else if (change[0] == ".") {
                    this.dom.classList.remove(change.substring(1));
                } else {
                    this.dom.classList.toggle(change);
                }
            } else {
                for (let i = 0; i < this.dom.length; i++) {
                    if (change[0] == "+") {
                        this.dom[i].classList.add(change.substring(1));
                    } else if (change[0] == ".") {
                        this.dom[i].classList.remove(change.substring(1));
                    } else {
                        this.dom[i].classList.toggle(change);
                    }
                }
            }
            return this;
        },
        Sibling: function (doit, selector) {
            var f;
            if (typeof doit === "function") {
                f = selector ? this.dom.parentNode.querySelectorAll(selector) : this.dom.parentNode.children;
                for (let i = 0; i < f.length; i++) {
                    if (f[i] !== this.dom) {
                        doit(f[i], i);
                    }
                }
                return this;
            } else {
                f = doit ? this.dom.parentNode.querySelectorAll(doit) : this.dom.parentNode.children;
                var t = new _$(f);
                var arr = [];
                for (let i = 0; i < f.length; i++) {
                    if (f[i] !== this.dom) {
                        arr.push(f[i]);
                    }
                }
                t.dom = arr;
                return t;
            }
        },
        eq: function (num) {
            return new _$(this.dom[num]);
        },
        all: function (doit) {
            var f = this.dom;
            for (let i = 0; i < f.length; i++) {
                doit(f[i], i);
            }
            return this;
        },
        text: function (val, newval) {
            //暂时未实现修改value
            if (!val) {
                return this.dom.innerText || this.dom.value;
            } else if (newval === true) {
                return this.dom.textContent;
            } else if (val) {
                this.dom.textContent = val;
                return this;
            }
        },
        root: function (num) {
            // num如果为空或小于等于1则返回第一层父级，否则返回第num层父级
            var d = this.dom instanceof HTMLElement ? this.dom : this.dom[0];
            var f = d.parentNode;
            if (num) {
                while ((num-- > 1) && f.parentNode !== null) {
                    f = f.parentNode;
                }
            }
            return new _$(f);
        },
        display: function (vshow) {
            if (!this.alldom) {
                if (vshow === false) {
                    this.dom.style.display = "none";
                } else {
                    this.dom.style.display = vshow;
                }
            } else {
                for (let i = 0; i < this.dom.length; i++) {
                    if (vshow === false) {
                        this.dom[i].style.display = "none";
                    } else {
                        this.dom[i].style.display = vshow;
                    }
                }
            }
            return this;
        },
        addTo: function (father, before) {
            if (before === 'before') {
                father.dom.parentNode.insertBefore(this.dom, father.dom);
            } else {
                father.dom.appendChild(this.dom);
            }
            return this;
        },
        clear: function (item) {
            //占位
        },
        attr: function (attrname, newone) {
            if (this.alldom) {
                for (let i = 0; i < this.dom.length; i++) {
                    if (this.dom[i][attrname] !== undefined) {
                        this.dom[i][attrname] = newone;
                    } else {
                        this.dom[i].setAttribute(attrname, newone);
                    }
                }
                return this;
            } else if (typeof newone === "undefined") {
                if (this.dom[attrname] !== undefined) {
                    return this.dom[attrname];
                } else {
                    return this.dom.getAttribute(attrname);
                }
            } else {
                if (this.dom[attrname]) {
                    this.dom[old] = newone;
                } else {
                    this.dom.setAttribute(attrname, newone);
                }
                return this;
            }
        },
        easedo: function (distanceX, distanceY, callback) {
            distanceY ? "" : distanceY = 0;
            function isPoistive(num, targetnum) {
                return num > 0 ? targetnum : -targetnum;
            }
            clearInterval(t);
            var t = setInterval(() => {
                this.css("left", this.attr('offsetLeft') + isPoistive(distanceX, Math.ceil(Math.abs(distanceX / 10))) + "px");
                this.css("top", this.attr('offsetTop') + isPoistive(distanceY, Math.ceil(Math.abs(distanceY / 10))) + "px");
                if (distanceX == 0 && distanceY == 0) {
                    clearInterval(t);
                    if (callback) {
                        callback();
                    }
                }
                distanceX -= isPoistive(distanceX, Math.ceil(Math.abs(distanceX / 10)));
                distanceY -= isPoistive(distanceY, Math.ceil(Math.abs(distanceY / 10)));
            }, 15);
            return this;
        },
        $: function (selector, all) {
            return new _$(selector, all, this.dom);
        },
    }
})(window);
