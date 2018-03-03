
var mainText = document.getElementById('mainText');

var btnc = document.getElementById('btnc');

function cliCked() {

var firebaseRef = firebase.database().ref();
var message = mainText.value;
firebaseRef.child("usman").set(message);
}
