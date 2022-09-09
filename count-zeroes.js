function countZeroes(arr) {
    let val = 0;
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];
    
        if (middleVal > val){
            leftIdx = middleIdx + 1;
        } else if(arr[leftIdx] > val){
            leftIdx++;
        } else if(arr[leftIdx] == val){
            return arr.length - leftIdx;
        } else if(middleVal == val){
            return arr.length - middleIdx;
        }
    }

    return 0;
}

module.exports = countZeroes;

