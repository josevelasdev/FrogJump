/**
 * A frog is crossing a river. The river is divided into some number of units, and at each unit,
 *  there may or may not exist a stone. The frog can jump on a stone, but it must not jump into the water.
 Given a list of stones' positions (in units) in sorted ascending order, determine if the frog can cross the river 
 by landing on the last stone. Initially, the frog is on the first stone and assumes the first jump must be 1 unit.
 If the frog's last jump was 
 * 
 *  k units, its next jump must be either
 *  k - 1, 
 *  k 
 *  k + 1 units. 
 * 
 * The frog can only jump in the forward direction.
 */
const readyStones = [0, 1, 3, 5, 6, 8, 12, 17];

const wrongStones = [0, 1, 2, 3, 4, 8, 9, 11];

function checkFrogCanCrossRiver(stones) {
  return helperJumpCheck(stones, 0, 1);
}

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

console.log(
  "the frog can pass the river?",
  checkFrogCanCrossRiver(readyStones)
);
