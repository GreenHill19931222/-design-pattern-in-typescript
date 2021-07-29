import { runInThisContext } from "vm";

interface IWebPage {
  getContent(): string;
}
class About implements IWebPage {
  protected theme: ITheme;
  constructor(theme: ITheme) {
    this.theme = theme;
  }
  getContent(): string {
    return "About page in " + this.theme.getColor();
  }
}

class Careers implements IWebPage {
  protected theme: ITheme;
  constructor(theme: ITheme) {
    this.theme = theme;
  }
  getContent() {
    return "Careers page in " + this.theme.getColor();
  }
}

interface ITheme {
  getColor(): string;
}

class DarkTheme implements ITheme {
  getColor() {
    return "Dark Black";
  }
}

class LightTheme implements ITheme {
  getColor() {
    return "Off White";
  }
}

class AquaTheme implements ITheme {
  getColor() {
    return "Light Blue";
  }
}

export default function bridgeSample() {
  const darkTheme = new DarkTheme();
  let about = new About(darkTheme);
  let careers = new Careers(darkTheme);

  console.log(about.getContent());
  console.log(careers.getContent());
}
