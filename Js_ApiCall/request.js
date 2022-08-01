const request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/");
request.send();
request.onload = ()=>{
    console.log(request);
    if (request.status === 200){
        // console.log(request.response);
        console.log(JSON.parse(request.response));
    }else {
        console.log(request)
        console.log(`error ${request.status}`)
    }
};

//fetch api

// console.log(window);
fetch('https://jsonplaceholder.typicode.com/')
.then(response =>{
    return response.json();
})

//3 rd way aync/ await

//4th way axios 