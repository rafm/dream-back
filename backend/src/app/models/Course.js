import Sequelize, { Model } from 'sequelize';

class Course extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                duration: Sequelize.INTEGER,
                canceled_at: Sequelize.DATE,
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
            as: 'technologies',
        });
    }
}

export default Course;
