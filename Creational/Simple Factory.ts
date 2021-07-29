//interface => method
interface IDoor {
  getWidth(): number;
  getHeight(): number;
}

class WoodenDoor implements IDoor {
  protected width: number;
  protected height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getWidth(): number {
    return this.width;
  }
  getHeight(): number {
    return this.height;
  }
}

class DoorFactory {
  static makeDoor(width: number, height: number) {
    return new WoodenDoor(width, height);
  }
}

export default function simpleFactorySample() {
  let door = DoorFactory.makeDoor(100, 200);
  console.log("Width: " + door.getWidth());
  console.log("Height: " + door.getHeight());
}
