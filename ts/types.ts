export {};

interface Todo {
    title: string;
    body: string;
}

function print(todo: Todo): void {
    console.log(todo.title + ': ' + todo.body);
}

let myTodo = {
    title: 'Trash',
    body: 'Empty trash can tonight',
    extra: "none"
};

print(myTodo);
