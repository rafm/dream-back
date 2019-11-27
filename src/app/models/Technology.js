import Sequelize, { Model } from 'sequelize';

class Technology extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                canceled_at: Sequelize.DATE,
            },
            {
                sequelize,
            }
        );

        return this;
    }
}

export default Technology;
