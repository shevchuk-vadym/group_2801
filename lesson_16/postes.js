class Postes {
  constructor(rootElement) {
    this.rootElement = rootElement;
  }
  init() {
    this.render();
    this.getData();
  }

  render() {
    this.postes = document.createElement("li");

    this.rootElement.append(this.postes);
  }
  getData() {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/movies"
    );
    xhr.send();
    xhr.onload = () => {
      const data = JSON.parse(xhr.response);
      for (let obj of data) {
        const ul = document.createElement("ul");
        const img = document.createElement("img");
        img.src = obj.img;
        ul.append(img);
        this.postes.append(ul);
      }
    };
  }
}
export { Postes };
