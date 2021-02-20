class User {
    constructor(id, name, password, email, image, title, chatNotification)
    {
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.image = image;
        this.title = title;
        this.chatNotification = chatNotification; // true / false
    }
}

export default User;