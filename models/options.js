/*
This table contains the options for the questions
*/
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('option', {
        qid: {
            type: DataTypes.INTEGER,
        },
        option: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }, {
        timestamps: false
    });
}