import axios from 'axios';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '9121d94bbe539aa984c37c9efc87111d';

        try {
            const res = await axios(`${proxy}http://food2fork.com/api/get?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
        } catch (error) {
            alert(error);
        }
    }
}