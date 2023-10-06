class RegisteredUser {
  constructor(services = []) {
    this.services = services;
  }

  getTotal() {
    let total = 0;
    this.services.forEach(service, (index) => {
      let multimediaContent = service.getMultimediaContent();

      if (typeof service == StreamingService) {
        total += multimediaContent.streamingPrice;
      } else if (typeof service == DownloadService) {
        total += multimediaContent.downloadPrice;
      }

      if (typeof multimediaContent == PremiumContent) {
        total += multimediaContent.additionalFee;
      }
    });
    return total;
  }
}

//Canviar els == per ===
//subsitutïr index per service a la callback del forEach
//typeof és un operador que ens diu el tipus del valor d'un operand, no el nom d'una classe o objecte

class RegisteredUser {
  constructor(services = []) {
    this.services = services;
  }

  getTotal() {
    let total = 0;
    this.services.forEach((service) => {
      let multimediaContent = service.getMultimediaContent();

      if (service.type === "StreamingService") {
        total += multimediaContent.streamingPrice;
      } else if (service.type === "DownloadService") {
        total += multimediaContent.downloadPrice;
      }

      if (multimediaContent.type === "PremiumContent") {
        total += multimediaContent.additionalFee;
      }
    });
    return total;
  }
}
