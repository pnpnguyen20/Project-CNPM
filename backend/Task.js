class Task {
    constructor(proj_id, task_id, task_name, task_status, task_description, task_createday, task_deadline, task_last_edit_time, task_last_editor, task_creator, task_emp) {
        this.proj_id = proj_id
        this.task_id = task_id
        this.task_name = task_name
        this.task_status = task_status
        this.task_description = task_description
        this.task_createday = task_createday
        this.task_deadline = task_deadline
        this.task_last_edit_time = task_last_edit_time
        this.task_last_editor = task_last_editor
        this.task_creator = task_creator
        this.task_emp = task_emp
    }
}

class Task_employee extends User {
    constructor(user_id, proj_id, task_id) {
        super(user_id)
        this.proj_id = proj_id
        this.task_id = task_id
    }
}

function load_TaskList(params) {

}