const data = [
  { name: "API Requests", used: 7500, limit: 10000 },
  { name: "Storage (GB)", used: 420, limit: 500 },
  { name: "Users", used: 95, limit: 100 }
];

const tbody = document.getElementById("resources");

data.forEach(r => {
  const percent = (r.used / r.limit) * 100;
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${r.name}</td>
    <td>${r.used}</td>
    <td>${r.limit}</td>
    <td class="${percent > 90 ? "warn" : "ok"}">
      ${percent > 90 ? "Near Limit" : "Within Limit"}
    </td>
  `;
  tbody.appendChild(row);
});
