// document.addEventListener("DOMContentLoaded", function () {
//   const studentForm = document.getElementById("student-form");

//   function saveToLocalStorage(key, data) {
//     const existingData = JSON.parse(localStorage.getItem(key)) || [];
//     existingData.push(data);
//     localStorage.setItem(key, JSON.stringify(existingData));
//   }

//   function updateDashboard() {
//     const studentCount = (JSON.parse(localStorage.getItem("students")) || [])
//       .length;
//     document.getElementById("student-count").textContent = studentCount;
//   }

//   if (studentForm) {
//     studentForm.addEventListener("submit", function (event) {
//       event.preventDefault();
//       const studentData = {
//         name: document.getElementById("student-name").value,
//         email: document.getElementById("student-email").value,
//         phone: document.getElementById("student-phone").value,
//       };
//       saveToLocalStorage("students", studentData);
//       alert("Étudiant ajouté avec succès!");
//       studentForm.reset();
//     });
//   }

//   updateDashboard();
// });

document.addEventListener("DOMContentLoaded", function () {
  const studentForm = document.getElementById("student-form");
  const studentsTableBody = document.getElementById("students-table").querySelector("tbody");

  function saveToLocalStorage(key, data) {
      const existingData = JSON.parse(localStorage.getItem(key)) || [];
      existingData.push(data);
      localStorage.setItem(key, JSON.stringify(existingData));
  }

  function updateDashboard() {
      const studentCount = (JSON.parse(localStorage.getItem("students")) || []).length;
      document.getElementById("student-count").textContent = studentCount;
      updateTable();
  }

  function updateTable() {
      const students = JSON.parse(localStorage.getItem("students")) || [];
      studentsTableBody.innerHTML = '';
      students.forEach(student => {
          const row = document.createElement("tr");
          const nameCell = document.createElement("td");
          const emailCell = document.createElement("td");
          const phoneCell = document.createElement("td");

          nameCell.textContent = student.name;
          emailCell.textContent = student.email;
          phoneCell.textContent = student.phone;

          row.appendChild(nameCell);
          row.appendChild(emailCell);
          row.appendChild(phoneCell);
          studentsTableBody.appendChild(row);
      });
  }

  if (studentForm) {
      studentForm.addEventListener("submit", function (event) {
          event.preventDefault();
          const studentData = {
              name: document.getElementById("student-name").value,
              email: document.getElementById("student-email").value,
              phone: document.getElementById("student-phone").value,
          };
          saveToLocalStorage("students", studentData);
          alert("Étudiant ajouté avec succès!");
          studentForm.reset();
          updateDashboard();
      });
  }

  updateDashboard();
});
