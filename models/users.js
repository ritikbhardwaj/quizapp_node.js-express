/*
This table contains all the users that have ever logged in
*/
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        roll_number: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        marks: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        created_at:{
            type: DataTypes.DATE,
            allowNull: false
        }
    },{
        timestamps: false
    });
    User.associate = function(models){
        User.hasOne(models.result,{
            foreignKey: 'rollnumber'
        })
    }
    return User;
}
