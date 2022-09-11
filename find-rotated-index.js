function checkPivot(arr){
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if(middleVal > arr[middleIdx + 1]){
            return middleIdx + 1;
        }else if(arr[leftIdx] <= middleVal){
            leftIdx = middleIdx + 1;
        }else{
            rightIdx = middleIdx - 1;
        }
    }
}

function findValue(arr, val, leftIdx, rightIdx){
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal < val) {
            leftIdx = middleIdx + 1;
        } else if (middleVal > val) {
            rightIdx = middleIdx - 1;
        } else {
            return middleIdx;
        }
    }

    return -1;
}

function findRotatedIndex(arr, val) {
    let pivot = checkPivot(arr);
    if(val >= arr[0] && val <= arr[pivot - 1]){
        return findValue(arr, val, 0, pivot - 1);
    }else{
        return findValue(arr, val, pivot, arr.length - 1);
    }
}

module.exports = findRotatedIndex;
