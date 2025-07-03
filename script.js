const fetchData = async() => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json() )
    .then(data => console.log(data))
    .catch(error => {
        console.error('Error:', error);
    })
}

window.onload = fetchData;
