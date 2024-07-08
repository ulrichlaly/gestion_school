// document.addEventListener("DOMContentLoaded", function () {
//   const teacherForm = document.getElementById("teacher-form");

//   function saveToLocalStorage(key, data) {
//     const existingData = JSON.parse(localStorage.getItem(key)) || [];
//     existingData.push(data);
//     localStorage.setItem(key, JSON.stringify(existingData));
//   }

//   function updateDashboard() {
//     const teacherCount = (JSON.parse(localStorage.getItem("teachers")) || [])
//       .length;

//     document.getElementById("teacher-count").textContent = teacherCount;
//   }

//   if (teacherForm) {
//     teacherForm.addEventListener("submit", function (event) {
//       event.preventDefault();
//       const teacherData = {
//         name: document.getElementById("teacher-name").value,
//         email: document.getElementById("teacher-email").value,
//         phone: document.getElementById("teacher-phone").value,
//       };
//       saveToLocalStorage("teachers", teacherData);
//       alert("Enseignant ajouté avec succès!");
//       teacherForm.reset();
//     });
//   }

//   updateDashboard();
// });
document.addEventListener("DOMContentLoaded", function () {
  const teacherForm = document.getElementById("teacher-form");
  const teachersTableBody = document.getElementById("teachers-table").querySelector("tbody");

  function saveToLocalStorage(key, data) {
      const existingData = JSON.parse(localStorage.getItem(key)) || [];
      existingData.push(data);
      localStorage.setItem(key, JSON.stringify(existingData));
  }

  function updateDashboard() {
      const teacherCount = (JSON.parse(localStorage.getItem("teachers")) || []).length;
      document.getElementById("teacher-count").textContent = teacherCount;
      updateTable();
  }

  function updateTable() {
      const teachers = JSON.parse(localStorage.getItem("teachers")) || [];
      teachersTableBody.innerHTML = '';
      teachers.forEach(teacher => {
          const row = document.createElement("tr");
          const nameCell = document.createElement("td");
          const emailCell = document.createElement("td");
          const phoneCell = document.createElement("td");

          nameCell.textContent = teacher.name;
          emailCell.textContent = teacher.email;
          phoneCell.textContent = teacher.phone;

          row.appendChild(nameCell);
          row.appendChild(emailCell);
          row.appendChild(phoneCell);
          teachersTableBody.appendChild(row);
      });
  }

  if (teacherForm) {
      teacherForm.addEventListener("submit", function (event) {
          event.preventDefault();
          const teacherData = {
              name: document.getElementById("teacher-name").value,
              email: document.getElementById("teacher-email").value,
              phone: document.getElementById("teacher-phone").value,
          };
          saveToLocalStorage("teachers", teacherData);
          alert("Enseignant ajouté avec succès!");
          teacherForm.reset();
          updateDashboard();
      });
  }

  updateDashboard();
});