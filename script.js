var streamList = [document.querySelector('#coe'),
                  document.querySelector('#it'),
                  document.querySelector('#ece'),
                 document.querySelector('#ice'),
                 document.querySelector('#mpae'),
                 document.querySelector('#bt')
                 ];
var currentStream = "coe";
var prevSem = "";
function myFunction( x ) {
  if(!prevSem) {
    prevSem = x;
    idName = "#sem" + x.childNodes[1].innerText + "List";
    x.childNodes[3].classList.toggle( "change" );  
    $(idName).slideToggle("slow");
    
  }else if(prevSem != x){
    prevSem.childNodes[3].classList.toggle( "change" );
    x.childNodes[3].classList.toggle( "change" );  
    var idName ="#sem" + prevSem.childNodes[1].innerText + "List";
    $(idName).slideToggle("slow");
    idName = "#sem" + x.childNodes[1].innerText + "List";
    $(idName).slideToggle("slow");
    prevSem = x;
  }else {
    prevSem = ""
    x.childNodes[3].classList.toggle( "change" );  
    var idName = "#sem" + x.childNodes[1].innerText + "List";
    $(idName).slideToggle("slow");
  }
}
function streams(x) {
  streamList.forEach( function( stream ) {
    stream.classList.remove( "active" );
  });
  x.classList.add( "active" );
  //debugger;
  if( x.id !== currentStream ){
    currentStream = x.id;
    view.streamUpdate( currentStream );
  }
}
var sem1Data;
var one = document.getElementById( 'sem1List' );
var xhttp = new XMLHttpRequest();

function sem1(){
  xhttp.open( "GET", "https://raw.githubusercontent.com/shreyjain711/collegeSpaceNotes/master/sem1.json", false);
  xhttp.send();
  var arr = JSON.parse( xhttp.responseText );
  arr.forEach( function( x ){
    var a = document.createElement( 'a' );
    var br = document.createElement( 'br' );
    a.href = x.link.split( "'" ).join( "" );
    a.innerText = x.name.split( '_' ).join( " " );
    a.target = "_blank";
    one.appendChild( a );
    one.appendChild( br );
  });
}
sem1();
var allSems = [];
function sems () {
  xhttp.open( "GET", "https://raw.githubusercontent.com/shreyjain711/collegeSpaceNotes/master/sem2To8.json", false);
  xhttp.send();
  allSems = JSON.parse( xhttp.responseText );
}
sems();

var view = {
  streamUpdate: function( stream ) {
    for( var i = 2; i < 9; i++ ){
      var x = document.getElementById( "sem" + i + "List" );
      x.innerHTML = "";
    }
    allSems[stream].forEach( function( semester, i ) {
      var curSem = document.getElementById( "sem" + ( i + 2 ) + "List" );
      if(semester.length === 0){
        curSem.innerHTML = "<p> Files you are looking for will be uploaded soon. <p>";
      } else {
        semester.forEach(function( x ) {
          var a = document.createElement( 'a' );
          var br = document.createElement( 'br' );
          a.href = x.link.split( "'" ).join( "" );
          a.innerText = x.name.split( '_' ).join( " " );
          a.target = "_blank";
          curSem.appendChild( a );
          curSem.appendChild( br );
        });
      }
    });
  }
};

view.streamUpdate( currentStream );
