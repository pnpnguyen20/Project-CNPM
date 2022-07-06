class User {
    constructor(username, password, user_id) {
        this.username = username
        this.password = password
        this.user_id = user_id
    }
}

function UserInformation(name, birthday, number, gender, address) {
    this.name = name,
        this.birthday = birthday,
        this.number = number,
        this.gender = gender
    this.address = address
}

function Admin() {
    this.add_proj = function() {}
    this.del_proj = function() {}
    this.view_all_proj_info = function() {}
    this.assign_teamleader = function() {}
    this.set_proj_deadline = function() {}
}

function ProjectMember() {}

function TeamLeader() {
    this.set_task_deadline = function() {}

}