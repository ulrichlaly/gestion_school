// document.addEventListener("DOMContentLoaded", function () {
//   const courseForm = document.getElementById("course-form");

//   function saveToLocalStorage(key, data) {
//     const existingData = JSON.parse(localStorage.getItem(key)) || [];
//     existingData.push(data);
//     localStorage.setItem(key, JSON.stringify(existingData));
//   }

//   function updateDashboard() {
//     const courseCount = (JSON.parse(localStorage.getItem("courses")) || [])
//       .length;

//     document.getElementById("course-count").textContent = courseCount;
//   }

//   if (courseForm) {
//     courseForm.addEventListener("submit", function (event) {
//       event.preventDefault();
//       const courseData = {
//         name: document.getElementById("course-name").value,
//         description: document.getElementById("course-description").value,
//       };
//       saveToLocalStorage("courses", courseData);
//       alert("Cours ajouté avec succès!");
//       courseForm.reset();
//     });
//   }

//   updateDashboard();
// });


document.addEventListener("DOMContentLoaded", function () {
  const courseForm = document.getElementById("course-form");
  const coursesTableBody = document.getElementById("courses-table").querySelector("tbody");

  function saveToLocalStorage(key, data) {
      const existingData = JSON.parse(localStorage.getItem(key)) || [];
      existingData.push(data);
      localStorage.setItem(key, JSON.stringify(existingData));
  }

  function updateDashboard() {
      const courseCount = (JSON.parse(localStorage.getItem("courses")) || []).length;
      document.getElementById("course-count").textContent = courseCount;
      updateTable();
  }

  function updateTable() {
      const courses = JSON.parse(localStorage.getItem("courses")) || [];
      coursesTableBody.innerHTML = '';
      courses.forEach(course => {
          const row = document.createElement("tr");
          const nameCell = document.createElement("td");
          const descriptionCell = document.createElement("td");

          nameCell.textContent = course.name;
          descriptionCell.textContent = course.description;

          row.appendChild(nameCell);
          row.appendChild(descriptionCell);
          coursesTableBody.appendChild(row);
      });
  }

  if (courseForm) {
      courseForm.addEventListener("submit", function (event) {
          event.preventDefault();
          const courseData = {
              name: document.getElementById("course-name").value,
              description: document.getElementById("course-description").value,
          };
          saveToLocalStorage("courses", courseData);
          alert("Cours ajouté avec succès!");
          courseForm.reset();
          updateDashboard();
      });
  }

  updateDashboard();
});
