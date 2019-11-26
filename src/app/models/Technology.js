import Sequelize, { Model } from 'sequelize';

class Technology extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );

        return this;
    }
}

export default Technology;
