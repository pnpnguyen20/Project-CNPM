class Project {
    constructor(proj_id, proj_name, proj_description, proj_createday, proj_deadline, proj_status, proj_admin, proj_owner, member_list) {
        this.proj_id = proj_id
        this.proj_name = proj_name
        this.proj_description = proj_description
        this.proj_createday = proj_createday
        this.proj_deadline = proj_deadline
        this.proj_status = proj_status
        this.proj_admin = proj_admin
        this.proj_owner = proj_owner
        this.member_list = member_list
    }
}

class Project_member extends User {
    constructor(user_id, proj_id, mem_pos) {
        super(user_id)
        this.proj_id = proj_id
        this.mem_pos = mem_pos
    }
}

function load_ProjectList(params) {

}