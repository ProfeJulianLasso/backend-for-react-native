export class MyException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MyException';
  }

  getStatus() {
    return 400;
  }
}
