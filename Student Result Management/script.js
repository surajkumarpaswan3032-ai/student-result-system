let results = JSON.parse(localStorage.getItem("results")) || [];

function addResult(){
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);

    let total = m1 + m2 + m3;
    let percent = (total / 300) * 100;

    let grade = "";
    if(percent >= 80) grade = "A";
    else if(percent >= 60) grade = "B";
    else if(percent >= 40) grade = "C";
    else grade = "Fail";

    let student = {name, roll, total, percent: percent.toFixed(2), grade};

    results.push(student);
    localStorage.setItem("results", JSON.stringify(results));

    alert("Result Saved Successfully!");
}

function loadResults(){
    let table = document.getElementById("result-data");
    if(!table) return;

    table.innerHTML = "";

    results.forEach((stu, index)=>{
        table.innerHTML += `
        <tr>
            <td>${stu.name}</td>
            <td>${stu.roll}</td>
            <td>${stu.total}</td>
            <td>${stu.percent}%</td>
            <td>${stu.grade}</td>
            <td><button onclick="deleteResult(${index})">Delete</button></td>
        </tr>
        `;
    });
}

function deleteResult(index){
    results.splice(index,1);
    localStorage.setItem("results", JSON.stringify(results));
    loadResults();
}

loadResults();
