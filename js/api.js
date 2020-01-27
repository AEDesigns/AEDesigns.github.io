(function pullInDev() {
  const devAPI = "https://dev.to/api/articles/me/";
  const devKey = "ktsJ13dtsy3fqRN44rfq4nXC";

  return fetch(devAPI, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "api-key": devKey,
      "Content-Type": "application/json"
    }
  }).then(function(req, res) {
    console.log(req);
    console.log(res);
  });
})();
