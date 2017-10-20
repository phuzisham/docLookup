import { Doc } from './../js/doc.js';
let apiKey = require('./../.env').apiKey;
let docClass = new Doc();

$(document).ready(function(){
  docClass.callApi().then(function(response) {
    let parsed = JSON.parse(response);
    let arr = [];
    // debugger;
    parsed.data.forEach(function(doc) {

        arr.push(doc.practices);

      arr = arr.filter( function( item, index, inputArray ) {
        return inputArray.indexOf(item) == index;
      });
      arr = arr.sort();
    });
    arr.forEach(function(doc) {
      $('#docName').append(`<li><a href='${doc}' id='${doc}' class='doc'>${doc}</a></li>`);
    });
    // displayDoctors();
  });
});

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
