export {};

interface User {
    email: string;
    password: string;

    register(email: string, pwd: string): boolean;
    login(email: string, pwd: string): boolean;
    logout(): void;
}

class UserImpl implements User {
    email: string;
    password: string;

    private name: string;
    private age: number;
    private isLogin: boolean;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        console.log('User created');
    }

    public register(email: string, pwd: string) {
        this.email = email;
        this.password = pwd;
        console.log('User registered');
        return true;
    }

    public login(email: string, pwd: string): boolean {
        if (!this.isLogin) {
            if (email === this.email && pwd === this.password) {
                this.isLogin = true;
            } else {
                this.isLogin = false;
            }
        }
        return this.isLogin;
    }

    public logout() {
        this.isLogin = false;
    }
}

let user1 = new UserImpl("Alice", 23);
user1.register("alice@yahoo.mail", "pass123");
console.log(user1.login("alice@yahoo.mail", "pass12"));  // login fail
console.log(user1.login("alice@yahoo.mail", "pass123"));  // login success
user1.logout;
