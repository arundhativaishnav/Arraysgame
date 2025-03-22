let array = [];

function performAction(action) {
    const input = document.getElementById('arrayInput').value;
    if (input) {
        array = input.split(',').map(item => item.trim());
    }

    let output;
    switch (action) {
        case 'push':
            const pushValue = prompt("Enter value to push:");
            array.push(pushValue);
            output = array;
            break;
        case 'pop':
            output = array.pop();
            break;
        case 'shift':
            output = array.shift();
            break;
        case 'unshift':
            const unshiftValue = prompt("Enter value to unshift:");
            array.unshift(unshiftValue);
            output = array;
            break;
        case 'sort':
            array.sort();
            output = array;
            break;
        case 'reverse':
            array.reverse();
            output = array;
            break;
        case 'filter':
            const filterValue = prompt("Enter a value to filter out:");
            output = array.filter(item => item !== filterValue);
            break;
        case 'map':
            const mapValue = prompt("Enter a value to append to each element:");
            output = array.map(item => item + mapValue);
            break;
        case 'reduce':
            output = array.reduce((acc, curr) => acc + curr, '');
            break;
        default:
            output = "Invalid action";
    }

    document.getElementById('output').textContent = JSON.stringify(output, null, 2);
}
