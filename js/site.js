function HelloWorld() {
    alert("Hello World!");
}

var subs =  [
        {subsName: "Netflix", 
        subsUrl: "https://www.netflix.com/",
        startDate: null,
        endDate: "27 Jan 2022",
        recurFee: 1748,
        recurFeeCurrency: "SGD",
        recurFeePeriod: "month"
        }
      ]

displaySubs();

function add(initialSubsName) {
subs.push({
  subsName: initialSubsName,
  subsUrl: "https://www.exampleURL.com/",
  startDate: null,
  endDate: "27 Jan 2022",
  recurFee: 1000,
  recurFeeCurrency: "SGD",
  recurFeePeriod: "month",
});
displaySubs();
}

function edit(position, newSubsName) {
subs[position].subsName = newSubsName;
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
        
    function toggleAll() {
        // if everything is false ==> all to true
        // if mixed ==> all to true
        /* if () {
            
        } else {}; */
        // if everything is true ==> all to false
        
    }
}