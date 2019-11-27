import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Course from '../app/models/Course';
import Opportunity from '../app/models/Opportunity';
import Technology from '../app/models/Technology';
import User from '../app/models/User';

const models = [Course, Opportunity, Technology, User];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);
        models
            .map(model => model.init(this.connection))
            .forEach(
                model =>
                    model.associate && model.associate(this.connection.models)
            );
    }
}

export default new Database();
