// Write your code here!
// const element =  document.createElement("div");
// document.body.append(element);

// const ul = document.createElement("ul");

// for (let i = 0; i < 3; i ++) {
//     const li = document.createElement("li");
//     li.textContent = (i + 1).toString();
//     ul.append(li);
// }

// element.append(ul);

// const main = document.getElementById("main");
// main.innerHTML = "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";
// main.style.height = "300px";
// main.style.backgroundColor = "#27647B";
// main.textContent = "You've changed what's on the screen";
// main.style.fontSize = "24px";
// main.style.marginLeft = "30px";
// main.style.lineHeight = 2;
// main.className = "pet-listing dog";
// main.classList.remove("dog");
// main.classList.add("cat","sale");

const main = document.querySelector('#main');
main.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
document.body.append(newHeader);

function insertName(name){
newHeader.textContent = `${name} is the champion`;
}

insertName('NESTOR-MASINDE');

// This is correct don't know what's up with that npm test but, the problem ain't the code