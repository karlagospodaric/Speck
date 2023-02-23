let list = document.getElementById("tech");
function addTech(){
    tech = document.getElementById("addNew").value;
    let li = document.createElement("li");
    li.innerText = tech;
    list.appendChild(li);
    var getValue= document.getElementById("addNew");
        if (getValue.value !="") {
            getValue.value = "";
        }
}
function removeAll(){
    document.getElementById("tech").innerHTML = "";
}
    