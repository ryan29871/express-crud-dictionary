
/**
 * In-Memory Store
 */

var GoalModel = {
    goals: {
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
    },
    create: async (newGoal) => {
        const id = new Date().valueOf();
        if ('title' in newGoal && 'description' in newGoal && 'complete' in newGoal) {
            GoalModel.goals[id] = {
                ...newGoal,
                id,
            };
            return GoalModel.goals[id]; 
        }

        throw new Error('Goal validation failed: `title, `complete` and `description` are required.');
    },
    findAll: async () => {
        return GoalModel.goals;
    },
    findById: async (id) => {
        const record = GoalModel.goals[id];

        if (record) {
            return record;
        }

        return null;
        // throw new Error('No record found');
    },
    findByIdAndDelete: async (id) => {
        const record = GoalModel.goals[id];

        if (record) {
            delete GoalModel.goals[id];
            return record;
        }

        return null;
        // throw new Error('No record found to delete');
    },
    findByIdAndUpdate: async (id, body) => {
        if (GoalModel.goals[id]) {
            GoalModel.goals[id].complete = body.complete;
            return GoalModel.goals[id];
        }

        return null;
        // throw new Error('No record found to update');
    },
    findByIdAndReplace: async (id, body) => {
        if (GoalModel.goals[id]) {
            let newGoal = {
                id: id,
                title: body.title,
                description: body.description,
                complete: body.complete
            }
            GoalModel.goals[id] = newGoal;
            return GoalModel.goals[id];
        }

        return null;
        // throw new Error('No record found to update');
    }

}

export default GoalModel;
