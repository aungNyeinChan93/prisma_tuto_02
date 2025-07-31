

type Todo = {
    id: number,
    task: string,
    completed: boolean
}


export const todos: Todo[] = [
    { id: 1, task: 'task 1', completed: false },
    { id: 2, task: 'task 2', completed: false },
    { id: 3, task: 'task 3', completed: false },
];


export async function POST(request: Request) {
    const { task, completed } = await request.json();
    const newTodo = {
        id: Math.floor(Math.random() * 1000),
        task,
        completed
    }
    todos.push(newTodo)
    return Response.json({ newTodo }, { status: 201 })
}


export async function GET() {
    return new Response(JSON.stringify(todos), {
        headers: {
            "Content-type": "text/html"
        },
        status: 200
    })
};

