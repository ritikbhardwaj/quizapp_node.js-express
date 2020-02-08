/*
This table contains the options for the questions
*/
module.exports = (sequelize, DataTypes) => {
    const Option = sequelize.define('option', {
        option: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }, {
        timestamps: false
    });
    Option.associate = function (models) {
        Option.belongsTo(models.user, {
            foreignKey: 'qid'
        })
    }
    return Option;
}