var pets = ['cat', 'dog', 'rat'];
pets.forEach(function(data, index, list) {
    list[index] += 's';
});
console.log(pets);

