class User {
    constructor(account, password, user_id, token) {
        this.account = account
        this.password = password
        this.user_id = user_id
        this.token = token
    }
}

class User_info {
    constructor(user_id, user_name, mail, phone, birth, gender, address) {
        this.user_id = user_id
        this.user_name = user_name
        this.mail = mail
        this.phone = phone
        this.birth = birth
        this.gender = gender
        this.address = address
    }
}