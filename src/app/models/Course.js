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

    static associate(models) {
        this.belongsToMany(models.Technology, {
            through: 'course_technology',
        });
    }
}

export default Course;
