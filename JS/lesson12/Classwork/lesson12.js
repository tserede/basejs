// console.log("A");
// console.log("B");
// console.log("C");


// const request=()=>{
//     console.log("init request");
//     setTimeout(() => {
//         console.log("create response");
//         const response={
//             name:"Alex",
//             age:26,
        
//         };
//             setTimeout(()=>{
//                 response.modified=true;
//                 console.log(response);
//             },2000);
        
//     },2000);
// }
// request();


const requestOne=()=>{
    console.log("init request");
    return new Promise(function(resolve,reject){
        setTimeout(() => {
                    console.log("create response");
                    const response={
                        name:"Alex",
                        age:26,
                    
                    };
                    resolve(response);
                },2000);
    })
}

const requestTwo=(result)=>{
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            result.modified=true;
            resolve(result);
        },2000);
    });
};
requestOne()
.then((result)=>requestTwo(result))
.then((response)=>console.log(response));