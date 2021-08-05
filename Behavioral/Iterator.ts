class RadioStation {
  protected frequency: number;
  constructor(frequency: number) {
    this.frequency = frequency;
  }
  getFrequency = () => this.frequency;
}

class StationList implements Iterable<RadioStation> {
  protected stations = Array<RadioStation>();
  protected counter = 0;

  addStation(station: RadioStation) {
    this.stations.push(station);
  }
  removeStation(toRemove: RadioStation) {
    let toRemoveFrequency = toRemove.getFrequency();
    this.stations = this.stations.filter(
      (station: RadioStation) => station.getFrequency() !== toRemoveFrequency
    );
  }
  next(): IteratorResult<RadioStation> {
    return {
      done: this.counter >= this.stations.length,
      value: this.stations[this.counter++],
    };
  }
  [Symbol.iterator](): IterableIterator<RadioStation> {
    return this;
  }
}

export default function sampleIterator() {
  const stationList = new StationList();
  stationList.addStation(new RadioStation(89));
  stationList.addStation(new RadioStation(101));
  stationList.addStation(new RadioStation(102));
  stationList.addStation(new RadioStation(103.2));
  for (let station of stationList) console.log(station.getFrequency());
}

//https://stackoverflow.com/questions/38508172/typescript-make-class-objects-iterable
