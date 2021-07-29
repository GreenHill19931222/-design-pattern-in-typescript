class President {
  static instance: President;
  //Hide the constructor
  private constructor() {}
  static getInstance(): President {
    if (!President.instance) {
      President.instance = new President();
    }

    return President.instance;
  }
}

export default function singletonSample() {
  const president1 = President.getInstance();
  const president2 = President.getInstance();

  console.log(president1 === president2);
}
