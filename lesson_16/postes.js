class Postes {
  constructor(rootElement) {
    this.rootElement = rootElement;
  }
  init() {
    this.render();
    this.getData();
  }

  render() {
    this.postes = document.createElement("ul");

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
        const li = document.createElement("li");
        const img = document.createElement("img");
        const p = document.createElement("p");
        const h3 = document.createElement("h3");
        const h5 = document.createElement("h5");

        p.textContent = obj.description;
        h3.textContent = obj.title;
        h5.textContent = obj.genre;
        img.src = obj.preview.high;

        li.append(h3);
        li.append(img);
        li.append(p);
        li.append(h5);

        li.classList.add("movie");
        img.classList.add("image");
        h3.classList.add("name");
        h5.classList.add("preview");

        this.rootElement.append(li);
      }
    };
  }
}
export { Postes };
