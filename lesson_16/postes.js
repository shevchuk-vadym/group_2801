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
      console.log(data.list);
      for (let obj of data.list) {
        const ul = document.createElement("ul");
        const img = document.createElement("img");
        img.src = obj.preview.high;
        ul.append(img);
        this.rootElement.append(ul);
      }
    };
  }
}
export { Postes };
