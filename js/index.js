function loadData(){
    fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => userList(data))
}

function userList(data){
    const ul = document.getElementById('user-list');
    for(user of data){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}

