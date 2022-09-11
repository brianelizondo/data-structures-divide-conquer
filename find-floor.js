function findFloor(arr, val){
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if ((arr[leftIdx] < val && arr[rightIdx] < val)) {
            return arr[rightIdx];
        } else if(leftIdx == middleIdx && rightIdx == middleIdx && middleVal > val && middleIdx > 0){
            return arr[middleIdx - 1];
        }else if (middleVal > val) {
            rightIdx = middleIdx - 1;
        } else if (middleVal < val) {
            leftIdx = middleIdx + 1;
        }
    }

    return -1;
}

module.exports = findFloor;
