// Global app controller
import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements, renderLoader, clearLoader} from './views/base';

// *** GLOBAL STATE ***
const state = {};



//SEARCH CONTROLLER
const controlSearch = async () => {
    // get query from the view
    const query = searchView.getInput(); 

    if (query) {
        //new search object and add to state
        state.search = new Search(query);

        // prepare UI for results
        searchView.clearInput();
        searchView.clearResults();

        renderLoader(elements.searchResultsList);

        // search for results 
        await state.search.getResults();

        clearLoader();

        // render the results
        searchView.renderResults(state.search.result);
    };
}

elements.searchForm.addEventListener('submit', event => {
    event.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', event => {
    const button = event.target.closest('.btn-inline');
    if (button) {
        const goToPage = parseInt(button.dataset.goto, 10);
        console.log(goToPage);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});


//RECIPE CONTROLLER
window.addEventListener('hashchange', event => {
    console.log(window.location.hash);
});