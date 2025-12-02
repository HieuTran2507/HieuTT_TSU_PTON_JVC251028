let original = {
    name: "Bob",
    age: 30
};
let copy = structuredClone(original);
copy.name = "Charlies";
console.log(original);
console.log(copy);