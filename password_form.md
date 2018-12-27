# Form for Saving Passwords in Firefox

<form method="get" action="#">
  <input type="text" placeholder="Username"><br>
  <input type="password" placeholder="Password"><br>
  <input type="Submit" value="Save Password">
</form>

This form is a way to save passwords in Firefox for sites that don't allow saving passwords.  
This form is built in a way such that it doesn't send the username or password anywhere, so don't worry about that.

<script>
  // From MDN website
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  
  function main() {
    // Get the length
    length = document.getElementById("length").value;
    var array = [];
    for (i = 1; i <= length; i++) {
    // Randomly pick an ASCII character that's not a control or space and append it to the array   
      array.push(String.fromCodePoint(getRandomInt(33, 127)));
    }
    // Turn the array into a password
    document.getElementById("MadePass").textContent = "Generated Password: " + array.join("");
  }
</script>
<p>Length: <input id="length" type="number">
<input type="button" value="Generate" onclick="main()"></p>
<p id="MadePass">Generated Password: </p>
