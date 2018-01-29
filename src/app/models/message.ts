export class Message {
  constructor(public content: string, public avatar: string, public me: boolean, public timestamp?: Date) {
  }
}
