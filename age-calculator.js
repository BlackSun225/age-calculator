const d = document.getElementById("d");
const m = document.getElementById("m");
const y = document.getElementById("y");
const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");

var validDay = false; //day validator
var validMonth = false; //month validator
var validYear = false; //year validator
var birthD; //value of the day
var birthM; //value of the month
var birthY; //value of the year
var birth; //the birthday
const today = new Date(); //today date

const mm = 12; //the max month 
const md = 31; //the max day

function checkDay() { //check the day and set the day validator
  if (d.value === "" || d.value <= 0 || d.value > 31) {
    if(d.value === "") {
      d.nextElementSibling.innerHTML = "This field is required";
    }else if (d.value > 31 || d.value < 0) {
      d.nextElementSibling.innerHTML = "Must be a valid day"; 
    }
    d.style.borderColor = "hsl(0, 100%, 67%)";
    d.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    validDay = false;
  }else{
    d.nextElementSibling.innerHTML = "";
    d.style.borderColor = "hsl(0, 0%, 86%)";
    d.previousElementSibling.style.color = "hsl(0, 1%, 44%)";
    birthD = d.value;
    validDay = true;
    setBirth();
  }
}
function checkMonth() { //check the month and set the month validator
  if (m.value === "" || m.value <= 0 || m.value > 12) {
    if(m.value === "") {
      m.nextElementSibling.innerHTML = "This field is required";
    }else if (m.value > 12 || m.value < 0) {
      m.nextElementSibling.innerHTML = "Must be a valid month"; 
    }
    m.style.borderColor = "hsl(0, 100%, 67%)";
    m.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    validMonth = false;
  }else{
    m.nextElementSibling.innerHTML = "";
    m.style.borderColor = "hsl(0, 0%, 86%)";
    m.previousElementSibling.style.color = "hsl(0, 1%, 44%)";
    birthM = m.value - 1;
    validMonth = true;
    setBirth();
  }
}
function checkYear() { //check the year and set the year validator
  if(y.value === "" || y.value >= 2023 || y.value < 0) {
    if(y.value === "") {
      y.nextElementSibling.innerHTML = "This field is required";
    }else if (y.value >= 2023) {
      y.nextElementSibling.innerHTML = "Must be in the past";
    }else if(y.value < 0) {
      y.nextElementSibling.innerHTML = "Must be a valid year";  
    }
    y.style.borderColor = "hsl(0, 100%, 67%)";
    y.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    validYear = false; 
  }else{
    y.nextElementSibling.innerHTML = "";
    y.style.borderColor = "hsl(0, 0%, 86%)";
    y.previousElementSibling.style.color = "hsl(0, 1%, 44%)";
    birthY = y.value;
    validYear = true;
    setBirth();
  }
}
function updateVal (a) { //update the value of the day and month field
  if(a.target.value.length === 1 && a.target.value > 0) {
    a.target.value = "0" + a.target.value;
  }
}
function setBirth () { //set the birth
  if(validDay && validMonth && validYear) {
    birth = new Date(birthY, birthM, birthD);
  }
}

function calcAge () {
  if(validDay && validMonth && validYear) {
    if(birth.getDate() === today.getDate() && birth.getMonth() === today.getMonth()) {
      //if today's day = birthday's day and today's month = birthday's month 
      year.innerHTML = today.getFullYear() - birth.getFullYear();
      month.innerHTML = 0;
      day.innerHTML = 0;
    }else if(birth.getDate() === today.getDate() && birth.getMonth() > today.getMonth()) {
      //if today's day = birthday's day and today's month < birthday's month
      year.innerHTML = today.getFullYear() - birth.getFullYear() -1;
      month.innerHTML = mm - (birth.getMonth() - today.getMonth());
      day.innerHTML = 0;
      return;
    }else if(birth.getDate() === today.getDate() && birth.getMonth() < today.getMonth()) {
      //if today's day = birthday's day and today's month > birthday's month
      year.innerHTML = today.getFullYear() - birth.getFullYear();
      month.innerHTML = today.getMonth() - birth.getMonth();
      day.innerHTML = 0;
      return;
    }else if(birth.getMonth() === today.getMonth() && birth.getDate() > today.getDate()) {
      //if today's month = birthday's month and today's day < birthday's day  
      year.innerHTML = today.getFullYear() - birth.getFullYear() - 1;
      month.innerHTML = mm - 1;
      day.innerHTML = md - (birth.getDate() - today.getDate());
      return;
    }else if(birth.getMonth() === today.getMonth() && birth.getDate() < today.getDate()) {
      //if today's month = birthday's month and today's day > birthday's day
      year.innerHTML = today.getFullYear() - birth.getFullYear();
      month.innerHTML = 0;
      day.innerHTML = today.getDate() - birth.getDate();
      return;
    }else if(birth.getMonth() > today.getMonth() && birth.getDate() > today.getDate()) {
      //if today's month < birthday's month and today's day < birthday's day
      year.innerHTML = today.getFullYear() - birth.getFullYear() - 1;
      month.innerHTML = mm - (birth.getMonth() - today.getMonth()) - 1;
      day.innerHTML = md - (birth.getDate() - today.getDate());
      return;
    }else if(birth.getMonth() > today.getMonth() && birth.getDate() < today.getDate()) {
      //if today's month < birthday's month and today's day > birthday's day
      year.innerHTML = today.getFullYear() - birth.getFullYear() - 1;
      month.innerHTML = mm - (birth.getMonth() - today.getMonth());
      day.innerHTML = today.getDate() - birth.getDate();
      return;
    }else if(birth.getMonth() < today.getMonth() && birth.getDate() > today.getDate()) {
      //if today's month > birthday's month and today's day < birthday's day
      year.innerHTML = today.getFullYear() - birth.getFullYear();
      month.innerHTML = today.getMonth() - birth.getMonth() - 1;
      day.innerHTML = md - (birth.getDate() - today.getDate());
      return;
    }else if(birth.getMonth() < today.getMonth() && birth.getDate() < today.getDate()) {
      //if today's month >  birthday's month and today's day > birthday's day 
      year.innerHTML = today.getFullYear() - birth.getFullYear();
      month.innerHTML = today.getMonth() - birth.getMonth();
      day.innerHTML = today.getDate() - birth.getDate();
      return;
    }
  }
}

d.addEventListener("input", checkDay);
d.addEventListener("blur", event => {
  updateVal(event);
});
d.addEventListener("mouseover", event => event.target.style.borderColor = "hsl(259, 100%, 65%)");
d.addEventListener("mouseout", event => event.target.style.borderColor = "hsl(0, 0%, 86%)");
m.addEventListener("input", checkMonth);
m.addEventListener("blur", event => {
  updateVal(event);
});
m.addEventListener("mouseover", event => event.target.style.borderColor = "hsl(259, 100%, 65%)");
m.addEventListener("mouseout", event => event.target.style.borderColor = "hsl(0, 0%, 86%)");
y.addEventListener("input", checkYear);
y.addEventListener("mouseover", event => event.target.style.borderColor = "hsl(259, 100%, 65%)");
y.addEventListener("mouseout", event => event.target.style.borderColor = "hsl(0, 0%, 86%)");

document.getElementById("btn").addEventListener("click", (event)=>{
  event.preventDefault();
  calcAge();
});
