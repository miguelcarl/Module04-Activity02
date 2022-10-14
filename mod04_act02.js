function condition(){
    let val1 = prompt('Please enter value:', '');
    let val2 = prompt('Please enter another value:', '');

    if (val1 == val2) {
        alert ('Equal Values');
    } else if (val1 > val2) {
        alert (`The value: ${val1} is higher than value: ${val2}`);
    } else if (val2 > val1) {
        alert (`The value: ${val2} is higher than value: ${val1}`);
    }
}