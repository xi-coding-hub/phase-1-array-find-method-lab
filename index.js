const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]
const finder = (element) => element.result === "W"
function superbowlWin(arr) {
    let op = arr.find(finder)
    // if (op === true) {
    //     console.log(op.year)   
    // }
    return op && op.year
}

superbowlWin(record)
