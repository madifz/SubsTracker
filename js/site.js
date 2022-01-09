function HelloWorld() {
  alert("Hello World!");
}

var button = document.getElementById("enter");
var input = document.getElementById("subInput");
var ul = document.getElementById("sub-ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    var btn = document.createElement("button");
    btn.textContent = "Remove";
    btn.id = "removeBtn";
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(btn);
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
      createListElement();
    }
} 

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

var subs = [
  {
    subsName: "Netflix",
    subsUrl: "https://www.netflix.com/",
    startDate: null,
    endDate: "27 Jan 2022",
    recurFee: 1748,
    recurFeeCurrency: "SGD",
    recurFeePeriod: "month",
  },
];

displaySubs();



function add(
  initSubsName = "example sub",
  initUrl = "https://www.exampleURL.com/",
  initStartDate = null,
  initEndDate = null,
  initRecurFee = 0,
  initRecurFeeCurrency = "SGD",
  initRecurFeePeriod = "mth"
) {
  subs.push({
    subsName: initSubsName,
    subsUrl: initUrl,
    startDate: initStartDate,
    endDate: initEndDate,
    recurFee: initRecurFee,
    recurFeeCurrency: initRecurFeeCurrency,
    recurFeePeriod: initRecurFeePeriod,
  });
  displaySubs();
}

function edit(position, subsProp, newInput) {
  subs[position][subsProp] = newInput;
  displaySubs();
}

function remove(position) {
  subs.splice(position, 1);
  displaySubs();
}

/*
function toggle(position) {
if (subs[position].completed === true) {
    subs[position].completed = false;
} else {
    subs[position].completed = true;
}

displaySubs();
}
*/

function displaySubs() {
  for (i = 0; i < subs.length; i++) {
    console.log(subs[i]);
  }
}
