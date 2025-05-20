let names = [];
let marks = [];

function addStudent() {
  const name = document.getElementById("name").value;
  const marksValue = document.getElementById("marks").value;

  if (name || marksValue) {
      alert('Please fill both fields!');
      return;
  }

  names.push(name);
  marks.push(Number(marksValue));

  updateDisplay();
}

function updateDisplay() {
  const list = names
    .map((name, index) => `${name}: ${marks[index]} marks`)

    .join("<br>");
  document.getElementById("studentList").innerHTML = list;
  document.getElementById("total").textContent = names.length;

  let avg = 0;
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  if (marks.length > 0) {
    avg = total / marks.length;
  }

  document.getElementById("average").textContent = avg.toFixed(2);
}
