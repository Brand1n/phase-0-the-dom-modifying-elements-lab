// Write your code here!

 const main = document.getElementById("main");
  main.remove()
  const newHeader = document.createElement("h1")
  newHeader.id = "victory"
  newHeader.textContent = "Brandon Tucker is the champion"
  document.body.append(newHeader)