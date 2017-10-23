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
    if (arr.length > 0) {
      // debugger;
      arr.forEach(function(doc) {
        $('#docName').append(`<li><h4>${doc[0].name}</h4></li><li>${doc[0].visit_address.street}</li><li>${doc[0].visit_address.city}, ${doc[0].visit_address.state} ${doc[0].visit_address.zip}</li><li>${doc[0].phones[0].number}</li>`);

        if (doc[0].website != undefined) {
          $('#docName').append(`<a href="${doc[0].website}"><li>Website</li></a>`)
        }

        if (doc[0].accepts_new_patients === true) {
          $('#docName').append('<p>Currently Accepting New Patients.</p>')
        } else {
          $('#docName').append('<p>Not Currently Taking New Patients.</p>')
        }
      });
    } else {
      $('#docName').append('<li><p>No Results</p></li>')
    }
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
