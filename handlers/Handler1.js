const BaseHandler = require('./BaseHandler');

class Handler1 extends BaseHandler {
  handle(event) {
    if (event === 1) {
      return 1;
    }
    return this.next(event);
  }
}

module.exports = Handler1;
