class ResourceHandler {
  constructor() {}

  static fetchData(mode) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/data/resources.json", true);
    xhr.send(null);

    setInterval(() => {
      console.log(xhr.response);
    }, 3000);

    if (mode == "return") {
      return xhr.response;
    } else {
      console.log(response);
    }
  }

  static displayData() {
    const data = this.fetchData("return");
  }
}

// Future Features

function collectMissingTitles() {
  if (resource.title === "") {
    // navigate to website and collect respective title;
    // import { ResourceCollector } from '/public/utils/resourceCollector'
    // TODO: change ResourceCollector to WebPageCollector
    // In this case I'd have to refactor *Collector to handle a return statement vs console.log
  }

  const emptyTitleResources = resource.filter((y) => y.title === "");
}
