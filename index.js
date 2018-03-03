
var mainText = document.getElementById('mainText');

var btnc = document.getElementById('btnc');

function cliCked() {
  var selectedVal = "";
  var selected = $("input[type='radio'][name='eve']:checked");
  if (selected.length > 0) {
      selectedVal = selected.val();
  }
var firebaseRef = firebase.database().ref();
var message = mainText.value;
firebaseRef.child("sssffd").set(message);
firebaseRef.child("sdsffsd").set(selectedVal);
}
