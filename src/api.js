import axios from 'axios'

export function getCategoryList (applyUpdate) {
  axios.get('https://opentdb.com/api_category.php')
    .then(response => applyUpdate(response.data.trivia_categories))
}
