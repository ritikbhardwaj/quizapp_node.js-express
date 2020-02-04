/*
This table contains the results of all the people who submitted the quiz
*/
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('result', {
        rollnumber: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        marks: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pof: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{
        timestamps: false
    });
}
