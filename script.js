let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
    arr.forEach(developer => {
        if (developer.profession == "developer") {
            console.log(developer);
        }
    }
    )
}

function addData() {
    let object =
    {
        id: 4, name: "susan",
        age: "20", profession: "intern"
    }
    arr.push(object);
    console.log(arr);
}

function removeAdmin() {
    let remove = arr.filter((admin) => admin.profession != "admin")
    console.log(remove);
}

function concatenateArray() {
    let arr2 = [
        { id: 5, name: "Mbappe", age: "24", profession: "CEO" },
        { id: 6, name: "Bellingume", age: "22", profession: "manager" },
        { id: 7, name: "Kirtan", age: "21", profession: "designer" },
    ];
    let newarray = arr.concat(arr2);
    console.log(newarray);
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
}