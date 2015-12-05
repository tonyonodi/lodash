import apply from './apply';
import baseToPath from './baseToPath';
import isKey from './isKey';
import last from '../array/last';
import parent from './parent';

/**
 * The base implementation of `_.invoke` without support for individual
 * method arguments.
 *
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the method to invoke.
 * @param {Array} args The arguments to invoke the method with.
 * @returns {*} Returns the result of the invoked method.
 */
function baseInvoke(object, path, args) {
  if (!isKey(path, object)) {
    path = baseToPath(path);
    object = parent(object, path);
    path = last(path);
  }
  var func = object == null ? object : object[path];
  return func == null ? undefined : apply(func, object, args);
}

export default baseInvoke;
