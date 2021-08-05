interface IChatRoomMediator {
  showMessage(user: User, message: string): void;
}
class ChatRoom implements IChatRoomMediator {
  showMessage(user: User, message: string) {
    let time = new Date().toLocaleString();
    let sender = user.getName();
    console.log(`${time} [ ${sender} ] ${message}`);
  }
}

class User {
  constructor(
    protected name: string,
    protected chatMediator: IChatRoomMediator
  ) {
    this.name = name;
    this.chatMediator = chatMediator;
  }
  getName = () => this.name;
  send = (message: string) => this.chatMediator.showMessage(this, message);
}

export default function sampleMediator() {
  const mediator = new ChatRoom();
  const john = new User("John Doe", mediator);
  const jane = new User("Jane Doe", mediator);
  john.send("Hi there!");
  jane.send("Hey!");
}
