import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';
import { isCartPage } from './lib/helpers/pageTypes';

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);
const elemToPollFor = isCartPage ? '.Cart.Cart--expanded' : '#sidebar-cart';
if (!ieChecks) {
  pollerLite(['body', elemToPollFor], activate);
}
