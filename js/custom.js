var originalHtml = document.getElementById("resumeLink").innerHTML;
var originalSize = document.getElementById("resumeLink").style.fontSize;

function getDate() {
    document.getElementById("resumeLink").style.fontSize = '25px';
    document.getElementById("resumeLink").innerHTML = 'Last Update: Jan 26th';
}


function getBack() {
    document.getElementById("resumeLink").style.fontSize = originalSize;
    document.getElementById("resumeLink").innerHTML = originalHtml;
}