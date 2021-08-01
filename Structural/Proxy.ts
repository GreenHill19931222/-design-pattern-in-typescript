interface IDoor {
  open(): void;
  close(): void;
}

class LabDoor implements IDoor {
  open(): void {
    console.log("Opening lab door");
  }
  close(): void {
    console.log("Closing the lab door");
  }
}
class Security {
  protected door: IDoor;
  constructor(door: IDoor) {
    this.door = door;
  }
  open(password: string) {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log("Big no! It ain't possible.");
    }
  }
  authenticate(password: string): boolean {
    return password === "$ecr@t";
  }
  close() {
    this.door.close();
  }
}

export default function sampleProxy() {
  const door = new Security(new LabDoor());
  door.open("invalid");
  door.open("$ecr@t");
  door.close();
}
