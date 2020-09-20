function myfoo(array1, array2) {
    var pushLength = array1.filter(el => el === 0).length
    for (i = 0; i <= pushLength - 1; i++) {
        array1.push(array2[i])
    }
    return array1.filter(el => el != 0).sort()
}