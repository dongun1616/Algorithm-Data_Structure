//재귀를 활용해 합병 정렬을 하는 함수 
//시간복잡도 O(n log n)

//배열 병합 함수
function merge(arr1, arr2) {
    //입력 두개를 취하는 함수를 정의하여 마지막에 반환할 빈 배열을 만든다.
    let res = [];
    //포인터 선언
    let point1 = 0;
    let point2 = 0;
    //하나의 포인터가 끝에 도달할 때까지
    while (point1 < arr1.length && point2 < arr2.length) {
        if (arr1[point1] < arr2[point2]) {
            res.push(arr1[point1])
            point1++
        }
        else {
            res.push(arr2[point2])
            point2++
        }
    }
    //남은 배열 결과 배열에 채우기
    while (point1 < arr1.length) {
        res.push(arr1[point1])
        point1++
    }
    while (point2 < arr2.length) {
        res.push(arr2[point2])
        point2++
    }
    return res;
}

//합병 정렬
function mergeSort(arr) {  //시간복잡도 O(n log n)
    //종료조건 arr길이가 1보다 작거나 같으면 종료
    if (arr.length <= 1) return arr;
    //중간지점 선언
    let middle = Math.floor(arr.length / 2);
    //분할된 배열을 재귀 시키고 복사
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));
    //분할된 요소들을 합병
    return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73, 71, 1, 9]))