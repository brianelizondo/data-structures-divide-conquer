function findRotationCount(arr) {
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

    return 0;
}

module.exports = findRotationCount