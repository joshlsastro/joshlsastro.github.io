function main() {
  var l; // Rejection letter
  var name, demographic, parents, gpa, honors, essay; // Variables used to create rejection letter
  name = document.getElementById("name").value;
  l = "<h2>Letter from REjectU</h2>Dear "+name+",<br>We're sorry to inform you that we have rejected your application. ";
  /* Demographics */
  // Getting value
  var i, demos;
  demos = document.getElementsByName("demographic");
  for (i=0; i<demos.length; i++) {
    if (demos[i].checked) {
      demographic = demos[i].value;
    }
  }
  if (demographic === "known") {
    l += "While knowledge of your own demographic is good, there's little else on your application that reflects well on your chances. ";
  } else if (demographic === "unknown") {
    l += "Your lack of knowledge of your own demographic information indicates one of two possible scenarios:\n<ol>\n";
    // List of scenarios
    l += "<li>You are far too unintelligent to attend our university.</li>\n";
    l += "<li>Your demographic situation is so confusing that it would require mountains of paperwork; we're not willing to deal with that.</li>\n</ol>\n";
  } else {
    // We shouldn't be able to get here
    alert("Error!");
  }
  /* Parents */
  // Getting value
  var pars;
  pars = document.getElementsByName("parents");
  for (i=0; i<pars.length; i++) {
    if (pars[i].checked) {
      parents = pars[i].value;
    }
  }
  if (parents === "smart") {
    l += "Since your parents are so smart, REjectU believes that they should be accepted in your place. ";
  } else if (parents === "dumb") {
    l += "Since your parents are too stupid to help you on assignments, it is not worth our time to give you assignments that you cannot complete. ";
  } else {
    // We shouldn't be able to get here
    alert("Error!");
  }
  /* GPA */
  gpa = document.getElementById("gpa").value;
  threshold = 6;
  if (gpa >= threshold) {
    l += "Your GPA of "+gpa+" is too high for us to believe. We do not accept lying at our university. ";
  } else {
    l += "Your GPA of "+gpa+" is too low for our high standards. We require at least a "+threshold+" for admission. ";
  }
  /* Honors */
  // Getting value
  var hs;
  hs = document.getElementsByName("honors");
  for (i=0; i<hs.length; i++) {
    if (hs[i].checked) {
      honors = hs[i].value;
    }
  }
  if (honors === "yes") {
    l += "We currently view honors as a negative after the Attempted Boiling Of Oceans Scandal, which involved all of our honors students. ";
  } else if (honors === "no") {
    l += "Without honors, your academic performance is likely not high enough for our university's standards. ";
  }
  /* Activities */
  l += "You have not participated in enough activities to meet our extracurricular requirements. We require at least <a href=\"https://en.wikipedia.org/wiki/Graham%27s_number\">g<sub>64</sub></a> extracurricular activities prior to admission. "
  /* Essay */
  var whichcitation;
  essay = document.getElementById("essay").value;
  l += "We determined that the essay you wrote is plagiarized from another source. Plagiarism in all forms is not tolerated at our university, and is automatic grounds for rejection.\n";
  l += "<p>";
  if (essay === "") {
    l += "We determined that your essay is an exact copy of this paper: D. Upper, \"The unsuccessful self-treatment of a case of \"writer's block\"\", <a href=\"https://pubmed.ncbi.nlm.nih.gov/16795475/\">https://pubmed.ncbi.nlm.nih.gov/16795475/</a>.</p>";
  } else {
    l += "We determined that your essay is made from smaller essays from: Unicode, Inc., <i>Code Charts</i>, <a href=\"https://www.unicode.org/charts/\">https://www.unicode.org/charts/</a>.</p>";
  }
  /* Write letter to screen. */
  document.getElementById("Rejection Letter").innerHTML = l;
}
