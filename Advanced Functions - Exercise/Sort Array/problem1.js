
function arraySort(arr, string) {

    let ascendingComparator = function (a, b) {
        return a - b;
    };

    let descendingComporator = function (a, b) {
        return b - a;
    };


    let sortingStrategies={
        'asc': ascendingComparator,
        'desc': descendingComporator
    };

    return arr.sort(sortingStrategies[string]);
}
