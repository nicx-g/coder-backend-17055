"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Messages = function () {
  function Messages() {
    this.message = [];
  }

  Messages.prototype.getMessages = function () {
    return this.message;
  };

  Messages.prototype.saveMessage = function (id, email, message, date) {
    this.message.push({
      id: id,
      email: email,
      message: message,
      date: date
    });
  };

  return Messages;
}();

exports["default"] = Messages;