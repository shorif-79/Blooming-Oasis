function qryQuiz() {
  // Input Values
  let sun = document.getElementById("sun").value;
  let care = document.getElementById("care").value;
  let pet = document.getElementById("pet").value;
  let result = "";

  // Conditions Check
  if (sun === "low" && care === "easy") {
    result = "Peace Lily Plant is your perfect choice!";
  } else if (sun === "medium" && care === "moderate") {
    result = "Monstera Plant is your perfect choice!";
  } else if (sun === "bright" && care === "moderate") {
    result = "Red Lily Plant is your perfect choice!";
  } else {
    result = "Snake Plant is your perfect choice!";
  }

  // Display Result
  document.getElementById("result").innerHTML = result;
}


form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        form.classList.add('was-validated')
      }else alert ("submited")

     
    }, false)
    