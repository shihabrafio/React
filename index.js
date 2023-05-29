Array.prototype.myPush = function(...a) {
    this.push(a[0]);
    init();
  }
  
  const display = document.getElementById("fruits");
  const button = document.querySelector("#button");
  
  let fruits = ['mango', 'guava', 'apple', 'oragne'];
  
  const init = function() {
    document.getElementById("fruits").innerHTML = '';
    fruits.sort().forEach(fruit => {
      let item = document.createElement("li");
      item.textContent = fruit;
      document.getElementById("fruits").appendChild(item);
    });
  }
  
  const addItem = function() {
    fruits.myPush(document.getElementById('input').value);
  }
  