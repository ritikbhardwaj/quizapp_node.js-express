/*
This table contains the questions for the quiz
*/

module.exports = (sequelize,DataTypes)=>{
    return sequelize.define('question', {
        qid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        qtext: {
            type: DataTypes.STRING,
            allowNull: false
        },
        options: {
            type: DataTypes.STRING,
            allowNull: false
        },
        answer: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },{
        timestamps: false
    });
}

