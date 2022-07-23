class User {
    constructor(user_id, user_info, user_authen) {
        this.user_id = user_id
        this.user_info = user_info
        this.user_authen = user_authen
    }
}

class User_info {
    constructor(user_name, mail, phone, birth, gender, address, user_id) {
        this.user_name = user_name
        this.mail = mail
        this.phone = phone
        this.birth = birth
        this.gender = gender
        this.address = address
        this.user_id = user_id
    }
}

class User_authenticator {
    constructor(account, password, user_id, token) {
        this.account = account
        this.password = password
        this.user_id = user_id
        this.token = token
    }
}


var db = require('../database')

load_UserList = function() {
    db.transaction(function(transaction) {
        transaction.executeSql('SELECT US_ID, US_ACCOUNT FROM USER_AUTHEN', [], selectedRowValues, errorHandler);
    });
};

selectedRowValues = function(transaction, results) {
    for (var i = 0; i < results.rows.length; i++) {
        var row = results.rows.item(i);
        alert(row['ID']);
        alert(row['ACCOUNT']);
    }
};