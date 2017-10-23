import { Doc } from './../js/doc.js';
let docClass = new Doc();

$(document).ready(function(){
  $('#search').submit(function(e) {
    e.preventDefault();
    let query = $('#symptom').val();
    displayDoctorsSymptom(query);
  });

  $('#searchName').submit(function(e) {
    e.preventDefault();
    let name = $('#name').val();
    displayDoctorsName(name);
  });
});

function displayDoctorsSymptom(query) {
  docClass.callApiSymptom(query).then(function(response) {
    let parsed = JSON.parse(response);
    let arr = [];
    parsed.data.forEach(function(doc) {
      arr.push(doc.practices);
    });
    arr.forEach(function(doc) {
      debugger;
      $('#docName').append(`<li><a href='${doc[0].website}' id='${doc[0].uid}' class='doc'>${doc[0].name}</a></li>`);
    });
  });
}

function displayDoctorsName(name) {
  docClass.callApiName(name).then(function(response) {
    let parsed = JSON.parse(response);
    let arr = [];
    parsed.data.forEach(function(doc) {
      arr.push(doc.practices);
    });
    arr.forEach(function(doc) {
      $('#docName').append(`<li><a href='${doc[0].website}' id='${doc.uid}' class='doc'>${doc[0].name}</a></li>`);
    });
  });
}
