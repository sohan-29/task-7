const fetchData = async () => {
  await fetch('https://jsonplaceholder.typicode.com/users')
    .then(async (response) => {
      const data = await response.json();
      console.log(data);
      var container = document.getElementsByClassName('mainContainer')[0];
      data.forEach(user => {
        const card = document.createElement('div');
        card.className = 'card';
        const userName = document.createElement('h3');
        userName.textContent = user.name;
        userName.className = 'name';
        const id = document.createElement('p');
        id.textContent = user.id;
        id.className = 'id';
        const userEmail = document.createElement('p');
        userEmail.textContent = user.email;
        userEmail.className = 'email';
        const userAddress = document.createElement('p');
        const address = [user.address?.street, user.address?.city, user.address?.zipcode]
        userAddress.textContent = address.join(', ');
        userAddress.className = 'address';
        container.appendChild(id);
        container.appendChild(userName);
        container.appendChild(userEmail);
        container.appendChild(userAddress);
      });
    })
    .catch(error => {
      console.error('Error:', error);
      return error;
    })
}

window.onload = fetchData;
