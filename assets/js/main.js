let steuerCalculator = () => {
  let incomeInput = document.getElementById("incomeInput").value;
  let stYear = document.getElementById("stYear").value;
  let kiSt = document.getElementById("kiSt").value;
  let result = document.getElementById("result");
  let splitRadio = document.getElementById("splitRadio");
  let ESt = 0;

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
      ESt = (995.21 * y + 1400) * y;
    }
    // zwischen 14754€ & 57918€
    else if (14754 <= Number(incomeInput) && Number(incomeInput) <= 57918) {
      let z = (Number(incomeInput) - 14753) / 10000;
      ESt = (208.85 * z + 2397) * z + 950.96;
    }
    // zwischen 57919€ & 274612€
    else if (57919 <= Number(incomeInput) && Number(incomeInput) <= 274612) {
      ESt = 0.42 * Number(incomeInput) - 9136.63;
    }
    // über 274613€
    else if (274613 <= Number(incomeInput)) {
      ESt = 0.45 * Number(incomeInput) - 17374.99;
    }
  }
  //   # # # # # # # # # # # # # # # # # #
  //              2020
  //   # # # # # # # # # # # # # # # # # #
  else if (stYear == "2020") {
    // unter 9408€
    if (Number(incomeInput) <= 9408) {
      result.innerHTML = "0€";
    }
    // zwischen 9409€ & 14532€
    else if (9409 <= Number(incomeInput) && Number(incomeInput) <= 14532) {
      let y = (Number(incomeInput) - 9408) / 10000;
      ESt = (972.87 * y + 1400) * y;
    }
    // zwischen 14533€ & 57051€
    else if (14533 <= Number(incomeInput) && Number(incomeInput) <= 57051) {
      let z = (Number(incomeInput) - 14532) / 10000;
      ESt = (212.02 * z + 2397) * z + 972.79;
    }
    // zwischen 57052€ & 270500€
    else if (57052 <= Number(incomeInput) && Number(incomeInput) <= 270500) {
      ESt = 0.42 * Number(incomeInput) - 8963.74;
    }
    // über 270501€
    else if (270501 <= Number(incomeInput)) {
      ESt = 0.45 * Number(incomeInput) - 17078.74;
    }
  }
  //   # # # # # # # # # # # # # # # # # #
  //              2019
  //   # # # # # # # # # # # # # # # # # #
  else if (stYear == "2019") {
    // unter 9168€
    if (Number(incomeInput) <= 9168) {
      result.innerHTML = "0€";
    }
    // zwischen 9169€ & 14254€
    else if (9169 <= Number(incomeInput) && Number(incomeInput) <= 14254) {
      let y = (Number(incomeInput) - 9168) / 10000;
      ESt = (980.14 * y + 1400) * y;
    }
    // zwischen 14255€ & 55960€
    else if (14255 <= Number(incomeInput) && Number(incomeInput) <= 55960) {
      let z = (Number(incomeInput) - 14254) / 10000;
      ESt = (216.16 * z + 2397) * z + 965.58;
    }
    // zwischen 55961€ & 265326€
    else if (55961 <= Number(incomeInput) && Number(incomeInput) <= 265326) {
      ESt = 0.42 * Number(incomeInput) - 8780.9;
    }
    // über 265327€
    else if (265327 <= Number(incomeInput)) {
      ESt = 0.45 * Number(incomeInput) - 16740.68;
    }
  }
  if (splitRadio.checked) {
    ESt = ESt * 2;
  }
  if (kiSt == "keine") {
    result.innerHTML = Math.floor(ESt) + "€";
  } else if (kiSt == "8") {
    ESt = ESt * 1.08;
    result.innerHTML = Math.floor(ESt) + "€";
  } else if (kiSt == "9") {
    ESt = ESt * 1.09;
    result.innerHTML = Math.floor(ESt) + "€";
  }
};
