// const sayHi=require("./script.js");
// console.log("Hello world");
// sayHi();



// const scriptModule=require("./script.js");
// console.log("Hello world");
// scriptModule.sayHello();
// console.log(scriptModule.user);
// console.log(scriptModule);

// import { sayHello as sayHi, user } from "./script.js";
// console.log("Hello world");
// sayHi();
// console.log(user);

// import * as ScriptModule from "./script.js";
// import lodash from "lodash"
// const {cloneDeep}=lodash;
// console.log("Hello world");
// ScriptModule.sayHi();
// console.log(ScriptModule.user);


// const arr=[];
// const copyArr=lodash.cloneDeep(arr);
// copyArr.push("1");
// console.log(arr);



// console.log("hello");
// import ("./script.js");


console.log("hello");
import ("./script.js").then((res)=>res.sayHello())

const result=await import("./script.js")
result.sayHello();









