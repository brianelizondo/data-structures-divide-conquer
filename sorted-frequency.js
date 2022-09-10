function sortedFrequency(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if(arr[leftIdx] < val){
            leftIdx++;
        } else if(arr[rightIdx] > val){
            rightIdx--;
        } else if(arr[leftIdx] == val && arr[rightIdx] == val){
            return (rightIdx - leftIdx) + 1;
        }
    }

    return -1;
}

module.exports = sortedFrequency;

