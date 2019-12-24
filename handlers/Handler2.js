const BaseHandler = require('./BaseHandler');

class Handler2 extends BaseHandler {
  constructor(reply = 222) {
    super();
    this.reply = reply;
  }
  handle(event) {
    return (event === 2) ? this.reply : this.next(event);
  }
}

module.exports = Handler2;
