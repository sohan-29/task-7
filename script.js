const fetchData = async () => {
  await fetch('https://jsonplaceholder.typicode.com/users')
    .then(async (response) => {
      const data = await response.json();
      console.log(data);
      return data;
    })
    .catch(error => {
      console.error('Error:', error);
      return error;
    })
}

window.onload = fetchData;
