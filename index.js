const title=(document.getElementById("title"));
const discription=(document.getElementById("discription"));
const form=(document.querySelector("form"));
const container=(document.querySelector(".container"));
const tasks=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")) : [];
showAllTask();

function showAllTask() {
    tasks.forEach((value,index) => {
        const div= document.createElement("div");
        div.setAttribute("class","task");
        const innerDiv= document.createElement("div");
        div.append(innerDiv);
        const p=document.createElement("p");
        p.innerText=value.title;
        innerDiv.append(p);

        const span=document.createElement("span");
        span.innerText=value.discription;
        innerDiv.append(span);

        const btn=document.createElement("button");
        btn.setAttribute("class","deleteBtn");
        btn.innerText="-";
        btn.addEventListener("click",()=>{
            remooveTask();
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks));
            showAllTask();
        });

        div.append(btn);
        container.append(div);
    });

}
function remooveTask() {
    tasks.forEach(() => {
        const temp=document.querySelector(".task");
        temp.remove();

    });

}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    remooveTask()
    tasks.push({
        title: title.value,
        discription: discription.value
    });
    localStorage.setItem("tasks",JSON.stringify(tasks));
    showAllTask();
});
