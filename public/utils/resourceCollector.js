// function resourceCollector() {
//   const obj = {
//     title: document.title,
//     url: window.location.href,
//   };

//   var stringLiteral = `
// ,
//     {
//       "title": "${obj.title}",
//       "url": "${obj.url}",
//       "topic": ""
//     }`;

//   console.log(stringLiteral);
// }

class ResourceCollector {
  constructor() {}

  static pageData() {
    const pageInformation = {
      title: document.title,
      url: window.location.href,
      createdAt: new Date(),
    };

    return pageInformation;
  }

  static displayPageInformation() {
    const { title, url, createdAt } = this.pageData();
    const stringLiteral = `
    ,
        {
          "title": "${title}",
          "url": "${url}",
          "topic": "",
          "createdAt": ${createdAt}
        }`;
    console.log(stringLiteral);
  }
}

export default ResourceCollector;
