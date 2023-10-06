/* class RegisteredUser {
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
} */

//Canviar els == per ===
//subsitutïr index per service a la callback del forEach
//typeof és un operador que ens diu el tipus del valor d'un operand, no el nom d'una classe o objecte
//afegir el methos al constructor

class MultimediaContentClass {
    constructor(
        title = "title",
        streamingPrice = 0.0,
        downloadPrice = 0.0,
        duration = 60,
        adult = false,
        size = 0
    ) {
        this.title = title;
        this.streamingPrice = streamingPrice;
        this.downloadPrice = downloadPrice;
        this.duration = duration;
        this.adult = adult;
        this.size = size;
        title();
        streamingPrice();
        downloadPrice();
        duration();
        adult();
        size();
    }

    title() {
        return this.title;
    }
    streamingPrice() {
        if (this.streamingPrice) return this.streamingPrice;
    }
    downloadPrice() {
        if (this.downloadPrice) return this.downloadPrice;
    }
    duration() {
        return this.duration;
    }
    adult() {
        return this.adult;
    }
    size() {
        return this.size;
    }
}

class Service {
    constructor(
        timestamp = 0,
        MultimediaContent = new MultimediaContentClass(),
        type = "StreamingService"
    ) {
        this.timestamp = timestamp;
        this.MultimediaContent = MultimediaContent;
        this.type = type;
        this.getMultimediaContent();
    }

    getMultimediaContent() {
        return this.MultimediaContent;
    }
    type() {
        return this.type;
    }
}

class RegisteredUser {
    constructor(services = []) {
        this.services = services;
        this.getTotal();
    }

    getTotal() {
        let total = 0;
        this.services.forEach((service) => {
            let multimediaContent = service.getMultimediaContent();

            if (service.type === "StreamingService") {
                total += multimediaContent.streamingPrice();
            } else if (service.type === "DownloadService") {
                total += multimediaContent.downloadPrice();
            }

            if (multimediaContent.type === "PremiumContent") {
                total += multimediaContent.additionalFee();
            }
        });
        return total;
    }
}
