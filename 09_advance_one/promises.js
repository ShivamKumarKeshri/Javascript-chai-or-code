// ****** Method 1 **********
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cyrptography, network

    setTimeout(function(){
        console.log('Async task completed')
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise consumed')
})


// ****** Method 2 **********
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task2');
        resolve()
    }, 1000)
}).then(function(){
    console.log('Promise consumed by Method2')
})

// ********* Promise 3 **********
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'chai', email: 'chai@example.com'})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);  // The above resolve data will be fetched here
})


// ********* Promise 4 **********
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: 'Shivam', password: 'chai@123'})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
promiseFour.then( (user) => {
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error)
})
.finally( ()=>{
    console.log("The Promise is either ressolved or rejected");
})


// ********* Promise 5 **********
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: 'Javascript', password: 'Js@123'})
        } else {
            reject('ERROR: Javascript went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

consumePromiseFive()

// *** async and await using -> try & catch *******
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/ShivamKumarKeshri')
//         const data = await response.json()     // await is necessary because to convert the response in json will take time
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }
// getAllUsers()


// *** async and await using -> then *******
fetch('https://api.github.com/users/ShivamKumarKeshri')
.then(function(response){
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch(function(error){
    console.log(error)
})

