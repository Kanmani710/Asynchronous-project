// function greet(){
//     console.log("Hello");
// }

// function introduce(){
//     console.log("My name is Kanmani");
// }

// function saygoodbye(){
//     console.log("Goodbye.....");
// }

// greet();
// introduce();
// saygoodbye();

function getUser(userid){
    return new Promise(( resolve,reject)=>{

    
        
        setTimeout(()=>{
            const user={id: userid, name: 'Kanmani'}; 
            resolve(user);
        }, 1000);
}); /*resolve,reject,pending*/
    
}

function displayUser(user){
    console.log(user.name);
}

getUser(123.then (displayUser), displayUser);