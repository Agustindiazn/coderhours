class User {
    constructor(name, email, password, online) {
        // this.id = userData.id;
        this.name = name
        this.email = email
        this.password = password
        this.online = online || false
    }

}

export default User;
