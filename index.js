
var mainText = document.getElementById('mainText');

var btnc = document.getElementById('btnc');

function cliCked() {
var firebaseRef = firebase.database().ref();
firebaseRef.child("usman").set(" are cool");
}
