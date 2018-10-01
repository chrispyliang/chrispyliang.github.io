var originalHtml = document.getElementById("resumeLink").innerHTML;
var originalSize = document.getElementById("resumeLink").style.fontSize;

function getDate() {
    document.getElementById("resumeLink").style.fontSize = '25px';
    document.getElementById("resumeLink").innerHTML = 'Last Update: Oct 1st 2018';
}


function getBack() {
    document.getElementById("resumeLink").style.fontSize = originalSize;
    document.getElementById("resumeLink").innerHTML = originalHtml;
}