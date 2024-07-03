document.addEventListener("DOMContentLoaded", function () {
  const parentForm = document.getElementById("parent-form");

  function saveToLocalStorage(key, data) {
    const existingData = JSON.parse(localStorage.getItem(key)) || [];
    existingData.push(data);
    localStorage.setItem(key, JSON.stringify(existingData));
  }

  function updateDashboard() {
    const parentCount = (JSON.parse(localStorage.getItem("parents")) || [])
      .length;

    document.getElementById("parent-count").textContent = parentCount;
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
    });
  }

  updateDashboard();
});
