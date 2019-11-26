module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('course_technology', {
            course_id: {
                type: Sequelize.INTEGER,
                references: { model: 'courses', key: 'id' },
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
        });
    },
    down: queryInterface => {
        return queryInterface.dropTable('course_technology');
    },
};
