"use strict";
exports.__esModule = true;
var UserImpl = /** @class */ (function () {
    function UserImpl(name, age) {
        this.name = name;
        this.age = age;
        this.married = false;
        console.log('User created');
    }
    UserImpl.prototype.register = function (email, pwd, verify) {
        this.email = email;
        return verify;
    };
    UserImpl.prototype.login = function (email, pwd) {
        var success = false;
        // Do something
        return success;
    };
    UserImpl.prototype.logout = function () {
    };
    return UserImpl;
}());
