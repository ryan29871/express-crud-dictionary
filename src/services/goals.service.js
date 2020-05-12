export class GoalService {
    /**
     * In-Memory Store
     */

    goals = {
        1: {
            id: 1,
            title: 'Go to college',
            description: 'Apply and start classes',
            complete: false
        },
        2: {
            id: 2,
            title: 'Get a degree',
            description: 'Start studying finish school',
            complete: true
        },
        3: {
            id: 3,
            title: 'Get a job',
            description: 'Apply for a job',
            complete: false
        },
    };

    /**
     * Service Methods
     */

    async create(newGoal) {
        const id = new Date().valueOf();
        this.goals[id] = {
            ...newGoal,
            id,
        };
    }

    async findAll() {
        return this.goals;
    }

    async findById(id) {
        const record = this.goals[id];

        if (record) {
            return record;
        }

        throw new Error('No record found');
    }

    async findByIdAndDelete(id) {
        const record = this.goals[id];

        if (record) {
            delete this.goals[id];
            return record;
        }

        throw new Error('No record found to delete');
    }

    async findByIdAndUpdate(id, body) {
        if (this.goals[id]) {
            this.goals[id].complete = body.complete;
            return this.goals[id];
        }

        throw new Error('No record found to update');
    }

    async findByIdAndReplace(id, body) {
        if (this.goals[id]) {
            let newGoal = {
                id: id,
                title: body.title,
                description: body.description,
                complete: body.complete
            }
            this.goals[id] = newGoal;
            return newGoal;
        }

        throw new Error('No record found to update');
    }
}