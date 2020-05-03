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
        const p = document.createElement("p");
        const h3 = document.createElement("h3");
        const h5 = document.createElement("h5");

        p.textContent = obj.description;
        h3.textContent = obj.title;
        h5.textContent = obj.genre;
        img.src = obj.preview.high;

        ul.append(h3);
        ul.append(img);
        ul.append(p);
        ul.append(h5);

        this.rootElement.append(ul);
      }
    };
  }
}
export { Postes };
