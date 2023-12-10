<<<<<<< HEAD
function printObjectProperties(obj) {
  if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
    return;
  }

  for (let property in obj) {
    console.log(`${property}: ${obj[property]}`);
  }
}

const myObject = {
  name: "John",
  age: 30,
  city: "New York"
};

printObjectProperties(myObject);

=======
function printObjectProperties(obj) {
  if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
    return;
  }

  for (let property in obj) {
    console.log(`${property}: ${obj[property]}`);
  }
}

const myObject = {
  name: "John",
  age: 30,
  city: "New York"
};

printObjectProperties(myObject);

>>>>>>> eac8f8087e1230f38cb1d11080500a9abc7ccffb
