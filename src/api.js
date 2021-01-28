import axios from 'axios'

export function getCategoryList () {
  axios.get('https://opentdb.com/api_category.php')
    .then(response => response.data.trivia_categories)
}
