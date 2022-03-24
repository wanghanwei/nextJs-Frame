// IE兼容
import 'core-js/features/url-search-params';
import 'core-js/es/map';
import 'core-js/es/set';
// ahook兼容
import 'core-js/es/promise/finally';

// 兼容IE开发者模式
if (process.env.NODE_ENV === 'development') {
  require('@webcomponents/shadydom');
}
