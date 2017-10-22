export class Doc {


  callApi(query) {
    let apiKey = require('./../.env').apiKey;
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=45.521728%2C-122.67326%2C20&skip=0&limit=10&user_key=${apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }

  // manufacturerApi(manf) {
  //   return new Promise(function(resolve, reject) {
  //     let request = new XMLHttpRequest();
  //     let url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=200&manufacturer=${manf}&location=45.521728%2C-122.67326&distance=10&stolenness=proximity`;
  //     console.log(url);
  //
  //     request.onload = function() {
  //       if (this.status === 200) {
  //         resolve(request.response);
  //       } else {
  //         reject(Error(request.statusText));
  //       }
  //     };
  //     request.open("GET", url, true);
  //     request.send();
  //   });
  // }
}
