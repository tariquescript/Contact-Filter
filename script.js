let filterInput = document.querySelector("#filterInput");

filterInput.addEventListener("keyup", filter);

function filter() {
  let filterInput = document.querySelector("#filterInput").value.toUpperCase();
  let ul = document.getElementById("names");
  let li = ul.querySelectorAll("li.collection-item");
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filterInput) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
