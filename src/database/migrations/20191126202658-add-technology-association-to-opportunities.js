module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('opportunity_technology', {
            opportunity_id: {
                type: Sequelize.INTEGER,
                references: { model: 'opportunities', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                primaryKey: true,
                allowNull: false,
            },
            technology_id: {
                type: Sequelize.INTEGER,
                references: { model: 'technologies', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                primaryKey: true,
                allowNull: false,
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
        return queryInterface.dropTable('opportunity_technology');
    },
};
