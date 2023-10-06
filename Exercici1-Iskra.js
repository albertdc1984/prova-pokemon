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
        size = 0,
        additionalFee = 0,
        premiumContent = false
    ) {
        this.title = title;
        this.streamingPrice = streamingPrice;
        this.downloadPrice = downloadPrice;
        this.duration = duration;
        this.adult = adult;
        this.size = size;
        this.additionalFee = additionalFee;
        this.premiumContent = premiumContent;
    }

    title() {
        return this.title;
    }
    streamingPrice() {
        return this.streamingPrice;
    }
    downloadPrice() {
        return this.downloadPrice;
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
    additionalFee() {
        if (!this.premiumContent) return;
        return this.additionalFee;
    }
    premiumContent() {
        return this.premiumContent;
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

            if (multimediaContent.premiumContent) {
                total += multimediaContent.additionalFee;
            }
        });
        return total;
    }
}
const streamingtestMovie = new MultimediaContentClass(
    "Test",
    33.0,
    35.0,
    30,
    true,
    360,
    20,
    true
);
const downloadtestMovie = new MultimediaContentClass(
    "Test2",
    35.0,
    36.0,
    30,
    true,
    360,
    0,
    false
);
const serviceList = [
    new Service(30, streamingtestMovie, "StreamingService"),
    new Service(30, downloadtestMovie, "DownloadService"),
];
const testUser = new RegisteredUser(serviceList);

console.log(testUser.getTotal());
