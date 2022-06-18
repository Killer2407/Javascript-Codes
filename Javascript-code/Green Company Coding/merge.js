function merge(intervals) {
    //Check whether there are minimum 2 intervals
    if (intervals.length <= 1)
        return intervals;

    var stack = [];
    var top = null;
    //BONUS QUESTION: If they are not sorted
    //Sort the intervals.
    intervals = intervals.sort((x, y) => x[0] - y[0]);

    //Here, we are pushing first interval into the stack.
    stack.push(intervals[0]);
    //Than, we are starting to merge the intervals if needed.
    for (var i = 1; i < intervals.length; i++) {
        //We are getting to top element.
        top = stack[stack.length - 1];

        /*Condition, if overlapping of the current interval does not
        go with the top element, than push it to the stack.*/
        if (top[1] < intervals[i][0]) {
            stack.push(intervals[i]);
            /*Else, the end value of the top element should be updated.
            If end of current interval is higher*/
        } else if (top[1] < intervals[i][1]) {
            top[1] = intervals[i][1];
        }
    }

    return stack;
}

let result = merge([
    [1, 3],
    [5, 8],
    [4, 10],
    [20, 25]
]);
console.log(result); // [[1, 3], [4, 10], [20, 25]

result = merge([
    [7, 10],
    [1, 4],
    [4, 5]
]);
console.log(result); // [[1,5],[7,10]]


SELECT * FROM t_ausxoz3mu5zm6b3 WHERE LastName='Smith' or FirstName='Robert' ORDER BY Age ASC
