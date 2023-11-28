let count = 0;

let add = document.getElementById("add")
let sub = document.getElementById("sub")
let reset = document.getElementById("reset")

add.addEventListener("click", function () {
  count += 1
  document.getElementById("count").innerHTML = count
})
sub.addEventListener("click", function () {
  count -= 1
  document.getElementById("count").innerHTML = count
})
reset.addEventListener("click", function () {
  count = 0
  document.getElementById("count").innerHTML = count
})