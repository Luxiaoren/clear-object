
'use strict';
module.exports = clearObject;

function clearObject (object, target) {
  var returnObject;
  target = Array.isArray(target) ? target : [target];
  switch(Object.prototype.toString.call(object)) {
    case '[object Object]': 
    returnObject = {}
    Object.keys(object).forEach(key => {
      if (!target.includes(object[key])) {
        returnObject[key] = object[key]
      }
    })
    break;
    case '[object Array]': 
    returnObject = []
    returnObject = object.filter(v => !target.includes(v))
    break;
    default: returnObject = object; break;
  }
  return returnObject
}