export default function taskBlock(trueOrFalse) {
  let task;
  let task2 ;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
