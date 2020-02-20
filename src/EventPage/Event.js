export default class Event {

    constructor(title, time, date, desc, location, type) {

        this.title = title;
        this.time = time;
        this.date = date;
        this.desc = desc;
        this.location = location;
        this.type = type;

    }


    get Time() {
        return this.time;
    }

    get Title() {
        return this.title;
    }

    get Location() {
        return this.location;
    }

    get Desc() {
        return this.desc;
    }

    get Type() {
        return this.type;
    }

    get Date() {
        return this.date;
    }



}