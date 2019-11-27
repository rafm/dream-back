module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('opportunities', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            estimated_duration: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            company_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            remuneration: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            canceled_at: {
                type: Sequelize.DATE,
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: queryInterface => {
        return queryInterface.dropTable('opportunities');
    },
};
