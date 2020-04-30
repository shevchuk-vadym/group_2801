const xhr = XMLHttpRequest();
xhr.open(
  "GET",
  "https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/ads"
);

xhr.send();
xhr.onload = function () {
  Console.log(xhr);
};
