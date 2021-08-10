abstract class Builder {
  build() {
    this.test();
    this.lint();
    this.assemble();
    this.deploy();
  }
  abstract test(): void;
  abstract lint(): void;
  abstract assemble(): void;
  abstract deploy(): void;
}

class AndroidBuilder extends Builder {
  test = () => console.log("Running android tests");
  lint = () => console.log("Linting the android code");
  assemble = () => console.log("Assembling the android build");
  deploy = () => console.log("Deploying android build to server");
}

class IosBuilder extends Builder {
  test = () => console.log("Running ios tests");
  lint = () => console.log("Linting the ios code");
  assemble = () => console.log("Assembling the ios build");
  deploy = () => console.log("Deploying ios build to server");
}

export default function sampleTemplateMethod () {
    const androidBuilder = new AndroidBuilder();
    androidBuilder.build();
    const iosBuilder = new IosBuilder();
    iosBuilder.build();
}