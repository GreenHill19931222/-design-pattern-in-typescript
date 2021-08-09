interface IAnimal {
  accept(operation: IAnimalOperation): void;
}
interface IAnimalOperation {
  visitMonkey(monkey: Monkey): void;
  visitLion(lion: Lion): void;
  visitDolphin(dolphin: Dolphin): void;
}

class Monkey implements IAnimal {
  shout = () => console.log("Ooh oo aa aa!");
  accept = (operation: IAnimalOperation) => operation.visitMonkey(this);
}
class Lion implements IAnimal {
  roar = () => console.log("Roaaar!");
  accept = (operation: IAnimalOperation) => operation.visitLion(this);
}
class Dolphin implements IAnimal {
  speak = () => console.log("Tuut tuttu tuutt!");
  accept = (operation: IAnimalOperation) => operation.visitDolphin(this);
}

class Speak implements IAnimalOperation {
  visitMonkey = (monkey: Monkey) => monkey.shout();
  visitLion = (lion: Lion) => lion.roar();
  visitDolphin = (dolphin: Dolphin) => dolphin.speak();
}

class Jump implements IAnimalOperation {
  visitMonkey = (monkey: Monkey) =>
    console.log("Jumped 20 feet high! on to the tree!");
  visitLion = (lion: Lion) => console.log("Jumped 7 feet! Back on the ground!");
  visitDolphin = (dolphin: Dolphin) =>
    console.log("Walked on water a little and disappeared");
}

export default function sampleVisitor() {
  const monkey = new Monkey();
  const lion = new Lion();
  const dolphin = new Dolphin();

  const speak = new Speak();
  const jump = new Jump();

  monkey.accept(speak);
  monkey.accept(jump);
  lion.accept(speak);
  lion.accept(jump);
  dolphin.accept(speak);
  dolphin.accept(jump);
}
