# Frog Crossing a River

The problem is about a frog trying to cross a river, and it requires validating each jump it will take. Therefore it is required to have a `helperJumpCheck()`; inside of this will have to validate each path according to the jump options that the frog has Always set. In each iteration, the frog will have at least three options for jumping, given by the value of jump, and these can be:

- k - 1
- k
- k + 1

  To validate in each iteration if the jump that the frog will make will allow us to get to the end, necessarily before taking the jump we need recursively check if, by doing so, we can reach the end.
  The `helperJumpCheck()` is going to receive three params:

- `stones`: it's the array with the path
- `lastIndex`: indicate the last position in the array to determine the jump and his cost
- `currentIndex`: shows the current index to calculate the value of the previous jump and the new jump

```javascript
function helperJumpCheck(stones, lastIndex, currentIndex) {
  // 1.Validate when arrive to the last position of array
  if (currentIndex === stones.length - 1) {
    return true;
  }

  // 2.Caculate the last jump
  let lastJump = stones[currentIndex] - stones[lastIndex];

  // 3.Get the next index relative to the currentIndex
  let nextIndex = currentIndex + 1;

  // 4. Loop through the array
  while (
    nextIndex < stones.length &&
    stones[nextIndex] <= stones[currentIndex] + lastJump + 1
  ) {
    // 5. Calculate the new Jump
    let newJump = stones[nextIndex] - stones[currentIndex];

    // 6. Calculate the value of the jump, this value require
    // to be at least 1, 0, - 1
    let jump = newJump - lastJump;

    //7. Validate if the frog are goin to jump with value
    //k - 1, k, k + 1;
    if (jump >= -1 && jump <= 1) {
      //8. We validate the jump calling
      if (helperJumpCheck(stones, currentIndex, nextIndex)) {
        return true;
      }
    }
    //9. If the helperReturnTrue We move to the nextIndex
    nextIndex++;
  }

  //10. return false when the selected  combination don't satisfy the condition
  return false;
}
```
