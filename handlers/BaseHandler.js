const defaultNoMatch = null;

class BaseHandler {
  constructor() {
    this.nextHandler = null;
  }

  setNext(handler) {
    if (handler && typeof handler.handle === 'function') {
      this.nextHandler = handler;
    } else {
      console.log('Incorrect next handler!')
    }
  }

  next(event) {
    return this.nextHandler ? this.nextHandler.handle(event) : this.defaultNoMatch;
  }

  handle(event) {
    return this.next(event);
  }

  get defaultNoMatch() {
    return defaultNoMatch;
  }
}

module.exports = BaseHandler;

