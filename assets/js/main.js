let steuerCalculator = () => {
  let incomeInput = document.getElementById("incomeInput").value;
  let stYear = document.getElementById("stYear").value;
  let result = document.getElementById("result");
  let grundRadio = document.getElementById("grundRadio");
  let splitRadio = document.getElementById("splitRadio");

  if (splitRadio.checked) {
    incomeInput = incomeInput / 2;
  }
  //   # # # # # # # # # # # # # # # # # #
  //              2021
  //   # # # # # # # # # # # # # # # # # #
  if (stYear == "2021") {
    // unter 9744€

    if (Number(incomeInput) <= 9744) {
      result.innerHTML = "0€";
    }
    // zwischen 9745€ & 14753€
    else if (9745 <= Number(incomeInput) && Number(incomeInput) <= 14753) {
      let y = (Number(incomeInput) - 9744) / 10000;
      let ESt = (995.21 * y + 1400) * y;
      if (splitRadio.checked) {
        result.innerHTML = (ESt * 2).toFixed(1) + "0€";
      } else {
        result.innerHTML = ESt.toFixed(1) + "0€";
      }
    }
    // zwischen 14754€ & 57918€
    else if (14754 <= Number(incomeInput) && Number(incomeInput) <= 57918) {
      let z = (Number(incomeInput) - 14753) / 10000;
      let ESt = (208.85 * z + 2397) * z + 950.96;
      if (splitRadio.checked) {
        result.innerHTML = (ESt * 2).toFixed(1) + "0€";
      } else {
        result.innerHTML = ESt.toFixed(1) + "0€";
      }
    }
    // zwischen 57919€ & 274612€
    else if (57919 <= Number(incomeInput) && Number(incomeInput) <= 274612) {
      let ESt = 0.42 * Number(incomeInput) - 9136.63;
      if (splitRadio.checked) {
        result.innerHTML = (ESt * 2).toFixed(1) + "0€";
      } else {
        result.innerHTML = ESt.toFixed(1) + "0€";
      }
    }
    // über 274613€
    else if (274613 <= Number(incomeInput)) {
      let ESt = 0.45 * Number(incomeInput) - 17374.99;
      if (splitRadio.checked) {
        result.innerHTML = (ESt * 2).toFixed(1) + "0€";
      } else {
        result.innerHTML = ESt.toFixed(1) + "0€";
      }
    }
  }
  //   # # # # # # # # # # # # # # # # # #
  //              2020
  //   # # # # # # # # # # # # # # # # # #
  else if (stYear == "2020") {
    // unter 9408€

    if (Number(incomeInput) <= 9744) {
      result.innerHTML = "0€";
    }
    // zwischen 9745€ & 14753€
    else if (9745 <= Number(incomeInput) && Number(incomeInput) <= 14753) {
      let y = (Number(incomeInput) - 9744) / 10000;
      let ESt = (995.21 * y + 1400) * y;
      if (splitRadio.checked) {
        result.innerHTML = (ESt * 2).toFixed(1) + "0€";
      } else {
        result.innerHTML = ESt.toFixed(1) + "0€";
      }
    }
    // zwischen 14754€ & 57918€
    else if (14754 <= Number(incomeInput) && Number(incomeInput) <= 57918) {
      let z = (Number(incomeInput) - 14753) / 10000;
      let ESt = (208.85 * z + 2397) * z + 950.96;
      if (splitRadio.checked) {
        result.innerHTML = (ESt * 2).toFixed(1) + "0€";
      } else {
        result.innerHTML = ESt.toFixed(1) + "0€";
      }
    }
    // zwischen 57919€ & 274612€
    else if (57919 <= Number(incomeInput) && Number(incomeInput) <= 274612) {
      let ESt = 0.42 * Number(incomeInput) - 9136.63;
      if (splitRadio.checked) {
        result.innerHTML = (ESt * 2).toFixed(1) + "0€";
      } else {
        result.innerHTML = ESt.toFixed(1) + "0€";
      }
    }
    // über 274613€
    else if (274613 <= Number(incomeInput)) {
      let ESt = 0.45 * Number(incomeInput) - 17374.99;
      if (splitRadio.checked) {
        result.innerHTML = (ESt * 2).toFixed(1) + "0€";
      } else {
        result.innerHTML = ESt.toFixed(1) + "0€";
      }
    }
  } else if (stYear == "2019") {
  }
};
