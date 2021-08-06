class EditorMemento {
  constructor(protected content: string) {
    this.content = content;
  }
  getContent = () => this.content;
}

class Editor {
  protected content = "";
  type = (words: string) =>
    (this.content = this.content ? `${this.content}${words}` : words);
  getContent = () => this.content;
  save = () => new EditorMemento(this.content);
  restore = (memento: EditorMemento) => (this.content = memento.getContent());
}

export default function sampleMemento() {
  const editor = new Editor();
  // Type some stuff
  editor.type("This is the first sentence.");
  editor.type("This is second.");
  // Save the state to restore to : This is the first sentence. This is second.
  let saved = editor.save();
  // Type some more
  editor.type("And this is third.");
  // Output: Content before Saving
  console.log(editor.getContent());
  // This is the first sentence. This is second. And this is third.

  // Restoring to last saved state
  editor.restore(saved);
  editor.getContent();
  // This is the first sentence. This is second.
}
