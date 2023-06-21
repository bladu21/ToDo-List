let input = prompt('What would you like to do?')
const toDos = ['Collect the eggs', 'Clean cat litter box'];

while (input !== 'quit' && 'q') {
    if (input === 'list') {
        console.log('*************');
        for (let i = 0; i < toDos.length; i++) {
            console.log(`${i}: ${toDos[i]}`);
        }
        console.log('*************');
    } else if (input === 'new') {
        const newToDo = prompt('OK, what is the new to do?');
        toDos.push(newToDo);
        console.log(`${newToDo} added to the list`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('OK, enter an index to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = toDos.splice(index, 1);
            console.log(`${deleted} was removed from your list`);  
        } else {
            console.log('Unknown index')
        }
    }
    input = prompt('What would you like to do?');
} 
console.log('Ok, you quit the app')