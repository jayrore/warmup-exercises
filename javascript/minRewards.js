
function minRewards(array) {
  let rewards = (new Array(array.length)).fill(1)
  let minPeaksIdx = getMinPeaksIdx(array)

  for (let i = 0; i < minPeaksIdx.length; i++) {
    const minPeakIdx = minPeaksIdx[i]

    // traverse right
    let rightIdx = minPeakIdx + 1
    while ( array[rightIdx] > array[rightIdx - 1] ) {
      rewards[rightIdx] = rewards[rightIdx - 1] + 1
      rightIdx++
    }

    // traverse left
    let lefttIdx = minPeakIdx - 1
    while ( array[lefttIdx] > array[lefttIdx + 1] ) {
      rewards[lefttIdx] = Math.max(rewards[lefttIdx] , rewards[lefttIdx + 1] + 1 )
      lefttIdx--
    }

  }

  return rewards.reduce((acc,value)=> acc + value, 0)
}

function getMinPeaksIdx( nums ) {
  let minPeaks = []
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if ( i == 0 ) {
      if ( num < nums[i + 1] ) {
        minPeaks.push(i)
      }
      continue
    }
    if (i >= nums.length - 1) {
      if ( num < nums[i - 1] ) {
        minPeaks.push(i)
      }
      continue
    }
    if (num < nums[i - 1] && num < nums[i + 1] ) {
      minPeaks.push(i)
    }
  }

  return minPeaks
}

exports.minRewards = minRewards