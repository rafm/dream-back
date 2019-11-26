import Sequelize, { Model } from 'sequelize';

class Course extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                duration: Sequelize.INTEGER,
            },
            {
                sequelize,
            }
        );

        return this;
    }
}

export default Course;
