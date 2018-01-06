/**
 * @author: Ricky Januari, http://rickyjanuari.com
 * You can add any task to catalog /tasks.
*/

const requireDir = require('require-dir');

requireDir('./tasks', { recurse: true });
