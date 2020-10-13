! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var l = t[r] = { i: r, l: !1, exports: {} };
        return e[r].call(l.exports, l, l.exports, n), l.l = !0, l.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var l in e) n.d(r, l, function(t) { return e[t] }.bind(null, l));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() { return e.default } : function() { return e };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 0)
}([function(e, t, n) {
    "use strict";

    function r(e, t, n, r) { const l = document.createElement(e); return t && (l.id = t), n && n.forEach(e => l.classList.add(e)), r && (l.innerText = r), l }

    function l() { return Math.random().toString().split(".").join("") }
    n.r(t);
    const d = document.querySelector("#folders .card");
    class i {
        constructor(e) { this.title = e, this.id = l(), this.tasks = [] }
        render() {
            const e = r("div", this.id, ["folder"], null),
                t = r("p", null, null, this.title),
                n = r("img", null, ["delete"], null);
            n.src = "./img/delete.svg", n.addEventListener("click", () => { this.delete() }), e.appendChild(t), e.appendChild(n), d.appendChild(e), e.addEventListener("click", () => { a = this, a.active = !1, this.renderTasks(), document.querySelectorAll(".folder").forEach(e => e.classList.value = "folder"), document.querySelectorAll(".delete").forEach(e => e.src = "./img/delete.svg"), e.classList.value.includes("active") || (e.classList.add("active"), n.src = "./img/delete-white.svg") })
        }
        delete() { s = s.filter(e => e.id !== this.id), i.renderFolders() }
        renderTasks() { document.querySelector("#task-container").innerHTML = "", this.tasks.forEach(e => e.render()) }
        static renderFolders() { d.innerHTML = "", s.forEach(e => e.render()) }
        static setCurrentFolder(e) { a = e }
    }
    let s = [new i("Test Folder")],
        a = s[0];
    const o = document.querySelector("#task-container");
    class u {
        constructor(e, t, n) { this.name = e, this.date = t, this.priority = n, this.id = l() }
        render() {
            const e = r("div", this.id, ["task"], null),
                t = r("div", null, ["task-name"], null),
                n = r("input", null, ["checkbox"], null);
            n.type = "checkbox";
            const l = r("p", null, null, this.name),
                d = r("div", null, ["task-info"], null),
                i = r("p", null, null, this.date),
                s = r("div", null, ["badge"], this.priority),
                a = r("img", null, ["delete"], null);
            a.src = "./img/delete.svg";
            const u = r("img", null, ["edit"], null);
            u.src = "./img/edit.svg", u.addEventListener("click", () => { this.edit() }), t.appendChild(n), t.appendChild(l), d.appendChild(i), d.appendChild(s), d.appendChild(a), d.appendChild(u), e.appendChild(t), e.appendChild(d), o.appendChild(e), n.addEventListener("change", () => { l.classList.toggle("done") }), "urgent" === this.priority && s.classList.add("urgent"), a.addEventListener("click", () => { this.delete() })
        }
        delete() { a.tasks = a.tasks.filter(e => e.id !== this.id), a.renderTasks() }
        edit() {
            const e = document.getElementById("myModal");
            e.style.display = "flex";
            document.getElementById("form-task-edit").addEventListener("submit", t => {
                t.preventDefault();
                const n = document.getElementById("task-name-edit");
                if ("" === n.value) return void alert("The task must have a name");
                const r = document.getElementById("task-date-edit");
                if ("" === r.value) return void alert("Please choose a deadline");
                const l = document.getElementById("task-priority-edit");
                this.name = n.value, this.date = r.value, this.priority = l.value, e.style.display = "none", a.renderTasks()
            })
        }
    }
    document.getElementById("form-folder").addEventListener("submit", e => {
        e.preventDefault();
        const t = document.getElementById("folder-name");
        if ("" === t.value) return void alert("A pasta precisa de um nome");
        const n = new i(t.value);
        s.push(n), t.value = "", i.renderFolders(), i.setCurrentFolder(n);
        let r = document.querySelectorAll(".folder");
        r[r.length - 1].classList.add("active"), r[r.length - 1].lastChild.src = "./img/delete-white.svg"
    });
    document.getElementById("form-task").addEventListener("submit", e => {
        e.preventDefault();
        const t = document.getElementById("task-name");
        if ("" === t.value) return void alert("A tarefa precisa de um nome");
        const n = document.getElementById("task-date");
        if ("" === n.value) return void alert("Por favor coloque uma data de expiracao");
        const r = document.getElementById("task-priority"),
            l = new u(t.value, n.value, r.value);
        a.tasks.push(l), l.render()
    }), i.renderFolders();
    const c = prompt("Qual é o seu nome?");
    document.querySelector(".user-name").innerText = c || "User"
}]);