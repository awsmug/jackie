import HamburgerMenu from './HamburgerMenu';
import StickyElement from './StickyElement';

document.addEventListener( 'DOMContentLoaded', () => {
    new StickyElement( '.sticky-header', 150 );
    new HamburgerMenu( 'header nav', 1079 );
});