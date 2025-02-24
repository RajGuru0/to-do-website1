let todo = [];
let req = prompt("what enter your req");
// console.log(req);
while(true){
    if (req == "quit"){
        console.log("quitting the todo website");
        break;
    }

    if(req == "list"){
        console.log("+++++++++++++++");
        for(let i = 0; i < todo.length; i++){
            console.log(i , todo[i]);
        }
        console.log("+++++++++++++++");
    }

    else if(req == "add"){
        let task = prompt("what enter your task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req == "delete"){
        let idx = prompt("what enter the index you want to delete");
        todo.splice(idx , 1);
        console.log("task deleted");    

    }
    req = prompt("what enter your req again");
}
        