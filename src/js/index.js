import store from './store/index';
import { addArticle, viewArticle } from './actions/index';

window.store = store;
window.addArticle = addArticle;
window.viewArticle = viewArticle;