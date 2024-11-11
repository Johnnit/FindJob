let jobtitle = document.getElementById("Jobtitle");
let company = document.getElementById("company");
let place = document.getElementById("location");
let description = document.getElementById("jobdesc");
 function addJob(e){
  e.preventDefault();
 let job = {
   title : Jobtitle
 }
 localStorage.setItem("name", JSON.stringify(job));
let store = JSON.parse(localStorage.getItem("name"));
 console.log(store);
 alert(store);
}