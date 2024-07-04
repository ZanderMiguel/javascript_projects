import View from './View.js';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    // Page 1, and there are other pages
    // Page 1, and there are no other pages
    // Last Page
    // Other page
  }
}

export default new PaginationView();
