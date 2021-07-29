interface ILion {
  roar(): void;
}

class AfricanLion implements ILion {
  roar(): void {}
}

class AsianLion implements ILion {
  roar(): void {}
}

class Hunter {
  hunt(lion: ILion) {}
}

// This needs to be added to the game
class WildDog {
  bark(): void {}
}

// Adapter around wild dog to make it compatible with our game
class WildDogAdapter implements ILion {
  protected dog: any;

  constructor(dog:WildDog){
      this.dog = dog;
  }

  roar() {
      this.dog.bark();
  }
}

export default function adapterSample () {
    const wildDog = new WildDog();
    const wildDogAdapter = new WildDogAdapter(wildDog);
    const hunter =  new Hunter();
    hunter.hunt(wildDogAdapter);
}
