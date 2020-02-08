/*
This table contains the results of all the people who submitted the quiz
*/
module.exports = (sequelize, DataTypes) => {
    const Result = sequelize.define('result', {
        marks: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        completed_at: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },{
        timestamps: false
    });
    return Result;
}
