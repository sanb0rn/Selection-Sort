const blockSort = document.querySelector(".blockSort");

function generateNumbers() {
  
  for (let i = 0; i < 10; i ++) {
    const value = Math.floor(Math.random() * 100);

    const blockNumber = document.createElement("div");
    blockNumber.classList.add("element");

    blockNumber.innerHTML = value;
    blockSort.appendChild(blockNumber);
  }
}

function swap(element1, element2,element3) {
  return new Promise(resolve => {
    window.requestAnimationFrame(function() {
      setTimeout(() => {
        blockSort.insertBefore(element2, element1);
        blockSort.insertBefore(element1, element3);
        resolve();
      }, 2000);
    });
  });
}

btnSort.onclick=async function bubbleSort() {
             
  let elements = document.querySelectorAll(".element");
  for (let i = 0; i < elements.length - 1; i++) {
    let min = i;
    elements[i].style.backgroundColor = "red";
    for (let j = i+1; j < elements.length; j++) {
      elements[j].style.backgroundColor = "yellow";
      // elements[j + 1].style.backgroundColor = "red";
      
      await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, 2000)
      );

      const value1 = Number(elements[j].innerHTML);
      const value2 = Number(elements[min].innerHTML);

      if (value1 < value2) { 
        elements[min].style.backgroundColor = "deepskyblue";  
        elements[j].style.backgroundColor = "red";   
        min=j;       
      } else{ elements[j].style.backgroundColor = "deepskyblue";}
      
    }
    elements[i].style.backgroundColor = "red";  
    await swap(elements[i], elements[min], elements[min+1]);
    elements[i].style.backgroundColor = "deepskyblue"; 
    elements = document.querySelectorAll(".element");
    elements[i].style.backgroundColor = "green";
  }
  elements[elements.length-1].style.backgroundColor = "green";
}

generateNumbers();
