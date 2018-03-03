
var mainText = document.getElementById('mainText');
var main_page =document.getElementById('main_page');

var btnc = document.getElementById('btnc');
var firebaseHedingRef =firebase.database().ref().child("heading");
firebaseHedingRef.on('value',function(datasnap){
    main_page.innerText = datasnap.val();
});
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
