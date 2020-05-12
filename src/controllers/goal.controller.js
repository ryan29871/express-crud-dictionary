import { GoalService } from '../services/goals.service';

export class GoalController extends GoalService {
  constructor() {
    super();
  }

  createGoal = async (req, res, next) => {
    try {
      const goal = await this.create(req.body);
      res.status(201).json(goal);
    } catch (error) {
      next(error)
    }
  };

  deleteGoal = async (req, res, next) => {
    try {
      const goal = await this.findByIdAndDelete(req.params.goalId);
      if (goal) {
        res.status(200).json(goal);
      } else {
        res.status(404).send();
      }
    } catch (err) {
      next(err);
    }
  };

  getGoalById = async (req, res, next) => {
    try {
      const goal = await this.findById(req.params.goalId);
      if (goal) {
        res.status(200).json(goal);
      } else {
        res.status(404).send();
      }
    } catch (error) {
      next(error);
    }
  };

  getGoals = async (req, res, next) => {
    try {
      const goals = await this.findAll();
      res.status(200).json(goals);
    } catch (error) {
      next(error);
    }
  };

  replaceGoal = async (req, res, next) => {
    try {
      const goal = await this.findByIdAndReplace(
        req.params.goalId,
        req.body
      );
      if (goal) {
        res.status(200).json(goal);
      } else {
        res.status(404).send();
      }
    } catch (err) {
      next(err);
    }
  };

  updateGoal = async (req, res, next) => {
    try {
      const goal = await this.findByIdAndUpdate(
        req.params.goalId,
        req.body
      );
      if (goal) {
        res.status(200).json(goal);
      } else {
        res.status(404).send();
      }
    } catch (err) {
      next(err);
    }
  };
}
