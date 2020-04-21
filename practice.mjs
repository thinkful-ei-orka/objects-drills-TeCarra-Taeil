
  // Object drills
  // 1. Object initializers and methods
	 const loaf = {
     	     flour: 300,
           water: 210,
           hydration: function(){
             let result = (this.water / this.flour) * 100;
             return result;
           }
   }

  console.log(loaf.flour);
  console.log(loaf.water);

  let finalResult = loaf.hydration();
  console.log(finalResult);

  // 2. Iterating over an object's properties
  let foobarObj = {
    foo: 390,
    bar: "hello",
    fum: "fo fo",
    quux: 839,
    spam: 99999999
  }

  for (let key in foobarObj) {
    console.log(key, foobarObj[key]);
  }
