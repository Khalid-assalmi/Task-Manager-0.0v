let addinp = document.getElementById("addinp");
let delinp = document.getElementById("delinp");
let show = document.getElementById("show");
let edi = document.getElementById("edinp");
let num = document.getElementById("numinp");
let array = JSON.parse(localStorage.getItem("array")) || [];
//إضافة المهمة
function add() {
    //التأكد من أن حقل الإدخال ليس فارغاً
    if (!addinp.value.trim()) {
        alert("Error : The input is Empty");
    } else {
        if (addinp.value === "style.^9[remove];") {
            window.location.href = "index 2.html";
        } else {
            array.push(addinp.value);
            localStorage.setItem("array" , JSON.stringify(array));
            alert("The Task has been added successfly!");
        }
    }
}
//حذف المهمة
function remove() {
    let task = delinp.value;
    let index = array.indexOf(task);
    //التحقق من أن حقل الإدخال ليس فارغاً
    if (!delinp.value.trim()) {
        alert("Error : The input is Empty");
    }
    //التحقق من أن المهمة موجودة أم لا
    if (array.includes(task) === true) {
        if (index !== -1) {
            array.splice(index,1);
            localStorage.setItem("array" , JSON.stringify(array));
            alert("The Task has been deleted successfly!");
        }
    }else if (array.includes(task) === false) {
        if (delinp.value === "${allremove}") {
            array = [];
            localStorage.setItem("array" , JSON.stringify(array));
            alert("The all Task has been deleted successfly!");
        }else if (delinp.value==="&^*{$}[ST/S];") {
            window.location.href="data.html";
        }else if(delinp.value==="{edit}.task($);") {
            window.location.href="edit.html";
        }else{
            alert("Error : The Task is not defined");
        }
    }
}
//تعديل المهمة
function edit() {
    let num2 = num.value-1;
    if (num.value >= 0) {
        array.splice(num2,1);
        let task = edi.value;
        array.push(task);
        let index = array.indexOf(task);
        if (index!=-1) {
            array.splice(index,1);
            array.splice(num2,0,task);
            alert("The Task has been edited successfly!");
            localStorage.setItem("array",JSON.stringify(array))
        }
    } else if (num.value <= 0) {
        alert("Error : The Task is not defined");
    }
}
//عرض المهام
function run() {
    //التحقق من أن القائمة ليست فارغة
    if (array=="") {
        show.textContent = "You don't have any Task"
    } else {
        let i = 0;
        let task;
        for (task of array) {
            i++;
            show.innerHTML += `<div class='new'><a>${i}-&nbsp;${task}</a>
            <input class='span' id='er' type='checkbox'/></div>`+"<hr>"
        }
    }
}
//طباعة القائمة في ال console
console.log(array);