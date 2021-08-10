interface IWritingState {
  write(words: string): void;
}

class UpperCase implements IWritingState {
  write = (words: string) => console.log(words.toUpperCase());
}
class LowerCase implements IWritingState {
  write = (words: string) => console.log(words.toLowerCase());
}
class Default implements IWritingState {
  write = (words: string) => console.log(words);
}

class TextEditor {
  constructor(protected state: IWritingState) {
    this.state = state;
  }
  setState = (state: IWritingState) => (this.state = state);
  type = (words: string) => this.state.write(words);
}

export default function sampleState() {
  const editor = new TextEditor(new Default());
  editor.type("First line");
  editor.setState(new UpperCase());
  editor.type("Second line");
  editor.type("Third line");
  editor.setState(new LowerCase());
  editor.type("Fourth line");
  editor.type("Fifth line");
}
