export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  let iteratorResult = reportWithIterator.next();
  
  while (!iteratorResult.done) {
    result += iteratorResult.value;
    
    // Check if there are more employees, if so, add a separator
    iteratorResult = reportWithIterator.next();
    if (!iteratorResult.done) {
      result += ' | ';
    }
  }
  
  return result;
}
