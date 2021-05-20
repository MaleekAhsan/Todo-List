let num = prompt("Enter What You Want !");
let todo = ['Here below is your list starting from index 1']
while (num !== "quit") {
    if (num === 'list') {
        console.log("****************************************");
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i} :  ${todo[i]}`);
        }
        console.log("****************************************");

    }
    if (num === "new") {
        let newNum = prompt("Ok ! Add whatever you want to add in your list")
        todo.push(newNum);
        console.log(`"${newNum}" is added into your list.`)
    }
    else if (num === "delete") {
        let index = parseInt(prompt("Enter an index number that you want to delete from your list"));
        if (!Number.isNaN(index)) {
            let del = todo.splice(index, 1);
            console.log(`Ok ! "${del[0]}" is deleted from your list...`);
        }
        else {
            console.log("Sorry! You Entered an In valid index"); r
        }
    }
    num = prompt("Enter What You Want !");
}
console.log("Ok ! You Quit");