"use strict";
const query = require("../../common/query");
const knex = require("../../database/config");

const createnotes = async (userData) => {
    // return query.insert('user', userData);
    var data = await query.insert('notes', userData);
    return data;
}


const updatenote = async (userData) => {
    var data =await query.update1('notes',userData, { "id": userData.id});
    let result = await query.usergetbyId('notes', { "id": data});
    if (result) {
        return ({ status: true, statusCode: 200, messages: "update successfully", data: result });
    }else{ 
        return ({ status: false, statusCode: 403, messages: "Incorrect Email", data: [] })
    }
}

// GetAll
const getnoteList = async (page_q, limit_q, term) => {
    var params = {
        page: page_q,
        limit: limit_q,
        term: term
    }
    // console.log(params);
    return query.findAll('notes', params);
};

// Get By Id
const getUserById = async (id) => {
    return query.usergetbyId('notes', { "id": id });
};

const deletenote = async (id) => {
    console.log(id);
    return query.Delete('notes', {id:id},"");
};


const getUsernotes = async (id,page_q, limit_q, term) => {
    var params = {
        page: page_q,
        limit: limit_q,
        term: term
    }
    const data = await knex.select('*').from('notes')
    .where('Title', 'like', `%${params.term}%`).andWhere({"user_id":id})
    .limit(params.limit).offset(params.page)
return data
    
};

const getById=async(id)=>{
    console.log(id);
    return query.getbyId('notes', {id:id},"");
}



const getevoilSubscription = async () => {

    const data = await knex.select('*').from('evoli_subscription')
    
return data
    
};

const getvimlaSubscription = async () => {
 
    const data = await knex.select('*').from('vimla_subscription')
   
return data
    
};

const getvimlaNonSubscription = async () => {
   
    const data = await knex.select('*').from('vimla_non_subscription')
   
return data
    
};

const userService = {
    getvimlaSubscription,
    getvimlaNonSubscription,
    getevoilSubscription,
    createnotes,
    updatenote,
    getnoteList,
    getUserById,
    deletenote,
    getUsernotes,
    getById
};
module.exports = userService;
