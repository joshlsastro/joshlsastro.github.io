Your mouse is <input type="button" value="Not here" id="buttonOne" />

<input type="button" id="doNotPush" value="Please do not push this button" onclick="evil()" />

[Very useful link](index.md)

[Even more useful link](blank.txt)

[Regular page](/#april-fools-2024)

<script>
  let buttonOne, buttonTwo;
  buttonOne = document.getElementById("buttonOne");
  buttonOne.onmouseleave = () => {
    buttonOne.value = "Not here";
  }
  buttonOne.onmouseenter = () => {
    buttonOne.value = "Here now";
  }

  buttonTwo = document.getElementById("doNotPush");
  evil = () => {
    buttonTwo.style.visibility = "hidden";
  }
</script>

<!--- Inspired by the about:robots page in Mozilla Firefox (https://mozilla.org/firefox) --->
