const { PrismaClient } = require('@prisma/client');
const { json } = require('express');
const prisma = new PrismaClient();
const { DataChecker, Message } = require('./DataChecker')
const checker = new DataChecker()

class Task_info {
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

    async findNewID() {
        const oldTask = await prisma.tASK_INFO.
        aggregate({
            _min: {
                task_id: true,
            },
            where: {
                task_name: "",
            },
        })
        if (oldTask._min && oldTask._min.task_id > 0) {
            this.task_id = oldTask._min.task_id
            await prisma.tASK_INFO.delete({
                where: {
                    task_id: this.task_id
                }
            })
        } else {
            const newID = await prisma.tASK_INFO.
            aggregate({
                _max: {
                    task_id: true
                }
            })

            this.task_id = newID._max.task_id + 1
        }
    }

    async delete(task) {

    }
}

class Task_employee extends User {
    constructor(user_id, proj_id, task_id) {
        super(user_id)
        this.proj_id = proj_id
        this.task_id = task_id
    }
}