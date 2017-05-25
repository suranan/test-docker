export interface user {
    firstname: String,
    lastname: String,
    email: String,
    sex: String,
    birthday: String
}
export default class User {
    private firstname: String;
    private lastname: String;
    private email: String;
    private sex: String;
    private birthday: String;

    constructor(user: user) {
        this.firstname = user.firstname;
        this.lastname = user.lastname;
        this.email = user.email;
        this.sex = user.sex;
        this.birthday = user.birthday;
    }

    get userFirstname() {
        return this.firstname;
    }
    set userFirstname(firstname: String) {
        this.firstname = firstname
    }
    get userLastname() {
        return this.lastname
    }
    set userLastname(lastname: String) {
        this.lastname = lastname
    }
    get userEmail() {
        return this.email;
    }
    set userEmail(email: String) {
        this.email = email
    }
    get userSex() {
        return this.sex;
    }
    set userSex(sex: String) {
        this.sex = sex
    }
     get userBirthday() {
        return this.birthday;
    }
    set userBirthday(birthday: String) {
        this.birthday = birthday
    }
}
