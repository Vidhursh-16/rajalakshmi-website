const app = document.getElementById("app");
const week1Btn = document.getElementById("week1Btn");

week1Btn.addEventListener("click", () => {
  renderWeek1();
});

function renderWeek1() {
  app.innerHTML = `
    <div class="container">
      <h2 style="margin-bottom:20px;">Week 1 – Lab Schedule</h2>
      <div class="day-grid">
        ${labData.week1
          .map(
            day => `
            <div class="day-card">
              ${day}
            </div>
          `
          )
          .join("")}
      </div>
    </div>
  `;
}
