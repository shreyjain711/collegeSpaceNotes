var streamList = [document.querySelector('#coe'),
                  document.querySelector('#it'),
                  document.querySelector('#ece'),
                 document.querySelector('#ice'),
                 document.querySelector('#mpae'),
                 document.querySelector('#bt')];

function myFunction(x) {
  x.childNodes[3].classList.toggle("change");
  // console.log(x.childNodes);
}
function streams(x) {
  streamList.forEach( function(stream){
    stream.classList.remove("active");
  });
  x.classList.add("active");
  // console.log(x.classList);  
}
