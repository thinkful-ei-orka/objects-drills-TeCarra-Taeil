
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
  
  let finalResult = loaf.hydration();
  console.log(finalResult);
  