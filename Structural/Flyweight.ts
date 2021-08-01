// Anything that will be cached is flyweight.

import { SSL_OP_EPHEMERAL_RSA } from "constants";

// Types of tea here will be flyweights.
class KarakTea {}

//Acts as a factory and saves the tea
class TeaMaker {
  protected availableTea: any = {};
  make(preference: string) {
    if (!this.availableTea[preference]) {
      this.availableTea[preference] = new KarakTea();
    }
    return this.availableTea[preference];
  }
}

class TeaShop {
  protected orders: any = {};
  protected teaMaker: TeaMaker;

  constructor(teaMaker: TeaMaker) {
    this.teaMaker = teaMaker;
  }
  takeOrder(teaType: string, table: number) {
    this.orders[table] = this.teaMaker.make(teaType);
  }
  serve() {
    Object.keys(this.orders).forEach((table: string) => {
      console.log("Serving tea to table# " + table);
    });
  }
}

export default function sampleFlyweight() {
  const teaMaker = new TeaMaker();
  const shop = new TeaShop(teaMaker);
  shop.takeOrder("less sugar", 1);
  shop.takeOrder("more milk", 2);
  shop.takeOrder("without sugar", 5);
  shop.serve();
}
