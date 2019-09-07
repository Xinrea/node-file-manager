var path = require('path');

var DATA_ROOT = C.data.root;

exports.filePath = function (relPath, decodeURI) {
  if (decodeURI) relPath = decodeURIComponent(relPath);
  if (relPath.indexOf('..') >= 0){
    var e = new Error('请不要在相对路径中包含 .. !');
    e.status = 400;
    throw e;
  }
  else {
    return path.join(DATA_ROOT, relPath);
  }
};
