document.addEventListener("DOMContentLoaded", function () {
  const teacherForm = document.getElementById("teacher-form");

  function saveToLocalStorage(key, data) {
    const existingData = JSON.parse(localStorage.getItem(key)) || [];
    existingData.push(data);
    localStorage.setItem(key, JSON.stringify(existingData));
  }

  function updateDashboard() {
    const teacherCount = (JSON.parse(localStorage.getItem("teachers")) || [])
      .length;

    document.getElementById("teacher-count").textContent = teacherCount;
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
    });
  }

  updateDashboard();
});
