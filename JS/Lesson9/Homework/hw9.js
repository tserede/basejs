function f() {
    alert(this);
   }
   
   let user = {
    g: f.bind(null),
   };
   