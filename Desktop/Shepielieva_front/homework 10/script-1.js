const user = {
    name: "Vlad",
    age: 28,
    city: "Lviv",
    occupation: "Programmer",
  
    getInfo: function () {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`City: ${this.city}`);
      console.log(`occupation: ${this.occupation}`);
    }
  };
  
user.getInfo();
  