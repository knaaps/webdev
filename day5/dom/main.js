const para1 = document.getElementById("main_para");
para1.innerHTML = "<h3>innerHTML triggered</h3>";
para1.style.color = "red";
para1.style.fontSize = "36px";

const head = document.getElementsByTagName("h1")[0];
console.log(head);
head.classList.add("highlight");

const leadButton = document.querySelector(".lead button");
leadButton.addEventListener("click", function(e) {
  console.log(e.type);
  console.log(e.target);
});

const form = document.querySelector("#Signupform");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullName = document.getElementById("input").value;
  console.log(`Form submitted as: ${fullName}`);
});

const ip = document.querySelector("#input");
ip.addEventListener("input", (e)=>{
    console.log(e.target.value);
})


//API - a programming abstraction that hides inner workings to instead just provide functionality. a medium for programs to communicate with each other. waiter_API in a hotel(customer, cook)-programmes
//callbacks(depreceated due to callback-hell):  a means to implement asynchronousity to js.
//