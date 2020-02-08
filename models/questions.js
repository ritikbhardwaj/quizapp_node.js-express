/*
This table contains the questions for the quiz
*/
module.exports = (sequelize,DataTypes)=>{
    const Question =  sequelize.define('question', {
        qid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        qtext: {
            type: DataTypes.STRING(500),
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

