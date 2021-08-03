//Receiver
class Bulb {
  turnOn() {
    console.log("Bulb has been lit");
  }
  turnOff() {
    console.log("Darkness!");
  }
}
interface ICommand {
  execute(): any;
  undo(): any;
  redo(): any;
}
//Command
class TurnOn implements ICommand {
  protected bulb: Bulb;
  constructor(bulb: Bulb) {
    this.bulb = bulb;
  }
  execute() {
    this.bulb.turnOn();
  }
  undo() {
    this.bulb.turnOff();
  }
  redo() {
    this.execute();
  }
}

class TurnOff implements ICommand {
  protected bulb: Bulb;
  constructor(bulb: Bulb) {
    this.bulb = bulb;
  }
  execute() {
    this.bulb.turnOff();
  }
  undo() {
    this.bulb.turnOn();
  }
  redo() {
    this.execute();
  }
}

//Invoker

class RemoteControl {
  submit(command: ICommand) {
    command.execute();
  }
}

export default function sampleCommand() {
  const bulb = new Bulb();
  const turnOn = new TurnOn(bulb);
  const turnOff = new TurnOff(bulb);
  const remote = new RemoteControl();
  remote.submit(turnOn);
  remote.submit(turnOff);
}
