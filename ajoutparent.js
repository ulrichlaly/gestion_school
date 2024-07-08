// document.addEventListener("DOMContentLoaded", function () {
//   const parentForm = document.getElementById("parent-form");

//   function saveToLocalStorage(key, data) {
//     const existingData = JSON.parse(localStorage.getItem(key)) || [];
//     existingData.push(data);
//     localStorage.setItem(key, JSON.stringify(existingData));
//   }

//   function updateDashboard() {
//     const parentCount = (JSON.parse(localStorage.getItem("parents")) || [])
//       .length;

//     document.getElementById("parent-count").textContent = parentCount;
//   }

//   if (parentForm) {
//     parentForm.addEventListener("submit", function (event) {
//       event.preventDefault();
//       const parentData = {
//         name: document.getElementById("parent-name").value,
//         email: document.getElementById("parent-email").value,
//         phone: document.getElementById("parent-phone").value,
//       };
//       saveToLocalStorage("parents", parentData);
//       alert("Parent ajouté avec succès!");
//       parentForm.reset();
//     });
//   }

//   updateDashboard();
// });

document.addEventListener("DOMContentLoaded", function () {
  const parentForm = document.getElementById("parent-form");
  const parentsTableBody = document.getElementById("parents-table").querySelector("tbody");

  function saveToLocalStorage(key, data) {
      const existingData = JSON.parse(localStorage.getItem(key)) || [];
      existingData.push(data);
      localStorage.setItem(key, JSON.stringify(existingData));
  }

  function updateDashboard() {
      const parentCount = (JSON.parse(localStorage.getItem("parents")) || []).length;
      document.getElementById("parent-count").textContent = parentCount;
      updateTable();
  }

  function updateTable() {
      const parents = JSON.parse(localStorage.getItem("parents")) || [];
      parentsTableBody.innerHTML = '';
      parents.forEach(parent => {
          const row = document.createElement("tr");
          const nameCell = document.createElement("td");
          const emailCell = document.createElement("td");
          const phoneCell = document.createElement("td");

          nameCell.textContent = parent.name;
          emailCell.textContent = parent.email;
          phoneCell.textContent = parent.phone;

          row.appendChild(nameCell);
          row.appendChild(emailCell);
          row.appendChild(phoneCell);
          parentsTableBody.appendChild(row);
      });
  }

  if (parentForm) {
      parentForm.addEventListener("submit", function (event) {
          event.preventDefault();
          const parentData = {
              name: document.getElementById("parent-name").value,
              email: document.getElementById("parent-email").value,
              phone: document.getElementById("parent-phone").value,
          };
          saveToLocalStorage("parents", parentData);
          alert("Parent ajouté avec succès!");
          parentForm.reset();
          updateDashboard();
      });
  }

  updateDashboard();
});
