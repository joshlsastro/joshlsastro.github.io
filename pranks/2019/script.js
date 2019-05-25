function cheese() {
    alert("The monster is confused and locks you in. You lose one life.");
}

// referrer set in index.md
var jokes = 
{"Firefox": "Due to a complaint from an animal cruelty society, this website no longer allows Firefox users. Please use Chrome.",
 "Internet Explorer": "Internet Explorer has gotten lost. Please upgrade to Firefox or Chrome",
 "Chrome": "Due to a Chromium shortage, I am unable to maintain this site on Chrome. Please use Firefox.",
 "Microsoft Edge": "You're actually <b>not</b> using Internet Explorer. However, your browser is too Edge-y for this website. Please use Firefox or Chrome.",
 "Safari": "I am not going on a safari to support you. Please use Firefox or Chrome.",
 "Opera": "You're using Opera. So where's the music? I mean, there's none on this page.",
 "Other":"What are you using?! How have you been able to browse the Web?"};
var joke = jokes[bowser.name];
if (referrer == "https://joshlsastro.github.io/troubasite/") {
	  document.write("<p>Hello fellow Troubadour! <a href=\"javascript:cheese()\">Use the cheese!</a><p>\n");
	  }
document.write("<p>");
    if (joke == undefined) {
	document.write(jokes["Other"]);
    }
    else {
	document.write(joke);
    }
document.write("</p>\n");
if (bowser.name != "Firefox") {
    document.write("<p><a href=\"https://mozilla.org/firefox\">Install Firefox</a></p>\n");
}
if (bowser.name != "Chrome") {
    document.write("<p><a href=\"https://www.google.com/chrome/\">Install Chrome</a></p>\n");
}
