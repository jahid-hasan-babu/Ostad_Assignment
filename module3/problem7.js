<<<<<<< HEAD
class Animal {
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }
  
    makeSound() {
      console.log(this.sound);
    }
  }
  
  class Dog extends Animal {
    fetch() {
      console.log("Fetching the ball!");
    }
  }
  
  const animal = new Animal("Lion", "Roar");
  animal.makeSound();
  
  const dog = new Dog("Buddy", "Woof");
  dog.makeSound(); 
  dog.fetch(); 
=======
class Animal {
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }
  
    makeSound() {
      console.log(this.sound);
    }
  }
  
  class Dog extends Animal {
    fetch() {
      console.log("Fetching the ball!");
    }
  }
  
  const animal = new Animal("Lion", "Roar");
  animal.makeSound();
  
  const dog = new Dog("Buddy", "Woof");
  dog.makeSound(); 
  dog.fetch(); 
>>>>>>> eac8f8087e1230f38cb1d11080500a9abc7ccffb
  