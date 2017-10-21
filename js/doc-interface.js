import { Doc } from './../js/doc.js';
let docClass = new Doc();

$(document).ready(function(){
  $('#search').submit(function(e) {
    e.preventDefault();
    alert('djf');
    let query = $('#symptom').val();
    displayDoctors(query);
  })
});

function displayDoctors(query) {
  docClass.callApi(query).then(function(response) {
    let parsed = JSON.parse(response);
    let arr = [];
    parsed.data.forEach(function(doc) {
      arr.push(doc.practices);
    });
    arr.forEach(function(doc) {
      $('#docName').append(`<li><a href='${doc[0].website}' id='${doc}' class='doc'>${doc[0].name}</a></li>`);
    });
    // displayDoctors();
  });
}

// function displayDoctors() {
//   $('a').click(function(event) {
//     event.preventDefault();
//     let manf = event.currentTarget.id;
//     console.log(manf);
//     bikeClass.manufacturerApi(manf).then(function(response) {
//       let parsed = JSON.parse(response);
//       let arr = [];
//       parsed.bikes.forEach(function(bike) {
//         arr.push(bike);
//       });
//       arr.forEach(function(bike) {
//         $('#manStole').append(`<li class="details" id=${bike.id}><a>${bike.title}</a></li>`);
//       });
//       $('#manName').hide(800);
//       $('#manStole').show(800);
//       manufacturerDetails();
//     });
//   });
// }
