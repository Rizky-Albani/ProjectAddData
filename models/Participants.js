import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Participant = db.define('participants', {
    full_name:{
        type: DataTypes.STRING
    },
    business_name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    phone:{
        type: DataTypes.STRING
    },
},{
    freezeTableName: true
});

export default Participant;