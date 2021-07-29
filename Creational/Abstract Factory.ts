interface IDoor {
  getDescription(): void;
}

class WoodenDoor implements IDoor {
  getDescription() {
    console.log("I am wooden door");
  }
}

class IronDoor implements IDoor {
  getDescription() {
    console.log("I am an iron door");
  }
}

interface IDoorFittingExpert {
  getDescription(): void;
}

class Welder implements IDoorFittingExpert {
  getDescription(): void {
    console.log("I can only fit iron door");
  }
}

class Carpenter implements IDoorFittingExpert {
  getDescription(): void {
    console.log("I can only fit wooden doors");
  }
}

interface IDoorFactory {
  makeDoor(): IDoor;
  makeFittingExpert(): IDoorFittingExpert;
}

class WoodenDoorFactory implements IDoorFactory {
    makeDoor(): IDoor {
        return new WoodenDoor();
    }
    makeFittingExpert(): IDoorFittingExpert {
        return new Carpenter();

    }
    
}

class IronDoorFactory implements IDoorFactory {
    makeDoor(): IDoor {
        return new IronDoor();

    }
    makeFittingExpert(): IDoorFittingExpert {
        return new Welder();

    }
    
}

export default function abstractFactorySample() {
    let woodenFactory = new WoodenDoorFactory();
    let door = woodenFactory.makeDoor();
    let expert = woodenFactory.makeFittingExpert();
    door.getDescription();
    expert.getDescription();
    
    let ironFactory = new IronDoorFactory();
    
    door = ironFactory.makeDoor();
    expert = ironFactory.makeFittingExpert();
    door.getDescription();
    expert.getDescription();

}

// export {WoodenDoorFactory}

