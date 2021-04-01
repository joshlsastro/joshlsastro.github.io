# Rapid Ejection University (REjectU) Application

<script src="rejection.js"></script>

Your name here: <input id="name" type="text" placeholder="Name"><br>

<p>
Do you know your own demographic information?<br>
<input type="radio" name="demographic" value="known" checked>Yes<br>
<input type="radio" name="demographic" value="unknown">No<br>
</p>

<p>
Are your parents smart?<br>
<input type="radio" name="parents" value="smart">Yes<br>
<input type="radio" name="parents" value="dumb" checked>No<br>
</p>

<p>
What is your current GPA? <input id="gpa" type="number" step="0.1" placeholder="0.0"><br>
</p>

<p>
Do you have any honors?<br>
<input type="radio" name="honors" value="yes">Yes<br>
<input type="radio" name="honors" value="no" checked>No<br>
</p>

<p>
What activities did you participate in?<br>
<textarea>

</textarea>
</p>

<p>
Please write your application essay here. You may pick your prompt.<br>
<textarea id="essay">
</textarea>
</p>

<p><input type="button" value="Submit Form" onclick="main()"></p>

<div id="Rejection Letter">
</div>

## Disclaimer
No information entered here leaves your computer. REjectU is not a real university. This form will reject you no matter what you put in. This was inspired by Andreas Zeller's [Autoreject](https://autoreject.org). My actual website is [here](/#april-fools-2021).
