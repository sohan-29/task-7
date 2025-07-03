const fetchData = async () => {
  await fetch('https://jsonplaceholder.typicode.com/users')
    .then(async (response) => {
      const data = await response.json();
      console.log(data);
      var container = document.getElementsByClassName('mainContainer')[0];
      data.forEach(user => {
        const card = document.createElement('div');
        card.className = 'card';

        const userName = document.createElement('p');
        const name = document.createElement('span');
        const nameText = document.createTextNode(user.name);
        name.className = 'label';
        name.textContent = 'Name: ';
        userName.className = 'name';
        userName.appendChild(name);
        userName.appendChild(nameText)

        const id = document.createElement('p');
        id.textContent = '#' + user.id;
        id.className = 'id';

        const userEmail = document.createElement('p');
        const email = document.createElement('span');
        const emailText = document.createTextNode(user.email);
        email.className = 'label';
        email.textContent = 'Email: ';
        userEmail.className = 'email';
        userEmail.appendChild(email);
        userEmail.appendChild(emailText);

        const userAddress = document.createElement('p');
        const fullAddress = [user.address?.street, user.address?.city, user.address?.zipcode + '.']
        const address = document.createElement('span');
        const addressText = document.createTextNode(fullAddress.join(', '));
        address.className = 'label';
        address.textContent = 'Address: ';
        userAddress.className = 'address';
        userAddress.appendChild(address);
        userAddress.appendChild(addressText)
        
        card.appendChild(id);
        card.appendChild(userName);
        card.appendChild(userEmail);
        card.appendChild(userAddress);
        container.append(card);
      });
    })
    .catch(error => {
      console.error('Error:', error);
      return error;
    })
}

window.onload = fetchData;
