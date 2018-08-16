import { ADD_ARTICLE, VIEW_ARTICLE } from '../constants/action-types';

export const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article
});

// export const viewArticle = article => ({
//   type: VIEW_ARTICLE,
//   payload: article
// });