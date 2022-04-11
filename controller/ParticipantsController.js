import Participant from "../models/Participants.js";

export const getData = async (req, res) => {
    try{
        const participant = await Participant.findAll();
        res.json(participant);
    }catch (error){
        res.json({ message: error.message });
    }
};

export const getDataById = async (req, res) => {
    try{
        const participant = await Participant.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(participant[0]);
    }catch (error){
        res.json({ message: error.message });
    }
};

export const createData = async (req, res) => {
    try{
        await Participant.create(req.body);
        res.json({ "message": "Success add new data!"});
    }catch (error){
        res.json({ message: error.message });
    }
};

export const updateData = async (req, res) => {
    try{
        await Participant.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({ "message": "Success update data!"});
    }catch (error){
        res.json({ message: error.message });
    }
};

export const deleteData = async (req, res) => {
    try{
        await Participant.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({ "message": "Success delete data!"});
    }catch (error){
        res.json({ message: error.message });
    }
};