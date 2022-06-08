/**
 * @fileoverview The triggers file contains all activation conditions for the experiment.
 * This is the first file to be evaluated.
 */

import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';
import { isPDP, isPLP } from './lib/helpers/utils';

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);

if (!ieChecks && (isPDP || isPLP)) {
  pollerLite(['body'], activate);
}
