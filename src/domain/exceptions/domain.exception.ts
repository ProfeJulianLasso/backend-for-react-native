export class DomainException extends Error {
  constructor(message: string, stack?: string) {
    super(message);
    this.name = 'DomainException';
    this.stack = stack;
  }
}
