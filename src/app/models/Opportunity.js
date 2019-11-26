import Sequelize, { Model } from 'sequelize';

class Opportunity extends Model {
    static init(sequelize) {
        super.init(
            {
                title: Sequelize.STRING,
                description: Sequelize.STRING,
                estimated_duration: Sequelize.INTEGER,
                company_name: Sequelize.STRING,
                remuneration: Sequelize.INTEGER,
            },
            {
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsToMany(models.Technology, {
            through: 'opportunity_technology',
        });
    }
}

export default Opportunity;
