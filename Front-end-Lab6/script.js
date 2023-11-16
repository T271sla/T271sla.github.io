function fetchRandomUsers(count) {
    Promise.all(Array.from({ length: count }, () => fetch('https://randomuser.me/api').then(response => response.json())))
      .then(data => {
        displayUserTable(data.map(user => user.results[0]));
      })
      .catch(error => console.error('Error fetching random users:', error));
  }
  
  function displayUserTable(users) {
    const table = `
      <table>
        <tr>
          <th>User</th>
          <th>Photo</th>
          <th>Cell</th>
          <th>City</th>
          <th>Country</th>
          <th>Postcode</th>
        </tr>
        ${users.map((user, index) => `
          <tr>
            <td>User ${index + 1}</td>
            <td><img src="${user.picture.large}" alt="User Photo"></td>
            <td>${user.cell}</td>
            <td>${user.location.city}</td>
            <td>${user.location.country}</td>
            <td>${user.location.postcode}</td>
          </tr>
        `).join('')}
      </table>
    `;
  
    document.getElementById('user-table').innerHTML = table;
  }
  