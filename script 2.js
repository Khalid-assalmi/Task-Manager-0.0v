let addinp = document.getElementById("addinp");
let delinp = document.getElementById("delinp");
let show = document.getElementById("show");
let edi = document.getElementById("edinp");
let num = document.getElementById("numinp");
const page = document.createElement("div");
let array = JSON.parse(localStorage.getItem("array")) || [];
//إضافة المهمة
function add() {
    //التأكد من أن حقل الإدخال ليس فارغاً
    if (!addinp.value.trim()) {
        page.textContent = "Error : The input is Empty";
        page.id = "page";
        const btn = document.createElement("button");
        btn.textContent = "OK";
        btn.id = "btn";
        document.body.appendChild(page);
        page.appendChild(btn);
        btn.onclick = function() {
            page.remove();
            btn.remove;
        }
    } else {
        if (addinp.value === "style.^9[back];") {
            window.location.href = "index.html";
        } else {
            array.push(addinp.value);
            localStorage.setItem("array" , JSON.stringify(array));
            page.textContent = "The Task has been added successfly!";
            page.id = "page";
            document.body.appendChild(page);
            const btn = document.createElement("button");
            btn.textContent = "OK";
            btn.id = "btn";
            document.body.appendChild(page);
            page.appendChild(btn);
            btn.onclick = function() {
                page.remove();
                btn.remove;
            }
        }
    }
}
//حذف المهمة
function remove() {
    let task = delinp.value;
    let index = array.indexOf(task);
    //التحقق من أن حقل الإدخال ليس فارغاً
    if (!delinp.value.trim()) {
        page.textContent = "Error : The input is Empty";
        page.id = "page";
        document.body.appendChild(page);
        const btn = document.createElement("button");
        btn.textContent = "OK";
        btn.id = "btn";
        document.body.appendChild(page);
        page.appendChild(btn);
        btn.onclick = function() {
        page.remove();
            btn.remove;
        }
    }
    //التحقق من أن المهمة موجودة أم لا
    if (array.includes(task) === true) {
        if (index !== -1) {
            array.splice(index,1);
            localStorage.setItem("array" , JSON.stringify(array));
            page.textContent = "The Task has been deleted successfly!";
            page.id = "page";
            document.body.appendChild(page);
            const btn = document.createElement("button");
            btn.textContent = "OK";
            btn.id = "btn";
            document.body.appendChild(page);
            page.appendChild(btn);
            btn.onclick = function() {
                page.remove();
                btn.remove;
            }
        }
    }else if (array.includes(task) === false) {
        if (delinp.value === "${allremove}") {
            array = [];
            page.textContent = "The all Task has been deleted successfly!";
            page.id = "page";
            document.body.appendChild(page);
            const btn = document.createElement("button");
            btn.textContent = "OK";
            btn.id = "btn";
            document.body.appendChild(page);
            page.appendChild(btn);
            btn.onclick = function() {
                page.remove();
                btn.remove;
            }
        localStorage.setItem("array" , JSON.stringify(array));
        }else if (delinp.value==="&^*{$}[ST/S];") {
            window.location.href="data 2.html";
        }else if(delinp.value==="{edit}.task($);") {
            window.location.href="edit.html";
        }else{
            page.textContent = "Error : The Task is not defined";
            page.id = "page";
            document.body.appendChild(page);
            const btn = document.createElement("button");
            btn.textContent = "OK";
            btn.id = "btn";
            document.body.appendChild(page);
            page.appendChild(btn);
            btn.onclick = function() {
                page.remove();
                btn.remove;
            }
        }
    }
}
//تعديل المهمة
function edit() {
    let num2 = num.value-1;
    array.splice(num2,1);
    let task = edi.value;
    array.push(task);
    let index = array.indexOf(task);
    if (index!=-1) {
        array.splice(index,1);
        array.splice(num2,0,task);
        page.textContent = "The Task has been edited successfly!";
            page.id = "page";
            document.body.appendChild(page);
            const btn = document.createElement("button");
            btn.textContent = "OK";
            btn.id = "btn";
            document.body.appendChild(page);
            page.appendChild(btn);
            btn.onclick = function() {
                page.remove();
                btn.remove;
            }
        localStorage.setItem("array" , JSON.stringify(array));
    }
}
//عرض المهام
function run() {
    //التحقق من أن القائمة ليست فارغة
    if (array=="") {
        show.textContent = "You don't have any Task"
    }
    let i = 0;
    let task;
    for (task of array) {
        i++;
        show.innerHTML += `<div class='new'><a>${i}-&nbsp;${task}</a>
        <input class='span' id='er' type='checkbox'/></div>`+"<hr>"
    }
}
//طباعة القائمة في ال console
console.log(array);