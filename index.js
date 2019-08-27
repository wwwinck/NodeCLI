#!/usr/bin/env node
const countryList = require('country-list');
const axios = require('axios');
const api = 'https://date.nager.at/api/v2/PublicHolidays/';
var date = new Date();
var year = date.getFullYear();
const args = process.argv;
var country = args[2];
const { getCode } = countryList;
const countryCode = getCode(country);

console.log()
console.log()

const holidates = async () => {
    try {
        const res = await axios.get(`${api}${year}/${countryCode}`)
        var data = res.data
        console.log()
        console.log()
        console.log('Here is the list of holidays in '+ country + ':');
        console.log()
        data.forEach(element =>
            {
                console.log('Date : ' + element.date + '   ' +  'Name : ' + element.name);
            });
            console.log()
            console.log()
        console.log('There is actually ' + data.length + ' holidays in '+ country);
        console.log()
        console.log()
    } catch (err)
        {
            console.error(err);
        }
};
holidates();
