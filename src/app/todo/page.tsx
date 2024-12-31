// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { useState } from "react";

// interface Task {
//   title: string;
//   completed: boolean;
// }

// export default function TodoApp() {
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [newTask, setNewTask] = useState<string>("");
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [editIndex, setEditIndex] = useState<number | null>(null);

//   const addTask = () => {
//     if (newTask) {
//       setTasks([...tasks, { title: newTask, completed: false }]);
//       setNewTask("");
//     }
//   };

//   const updateTask = (index: number) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].title = newTask;
//     setTasks(updatedTasks);
//     setNewTask("");
//     setIsOpen(false);
//   };

//   const deleteTask = (index: number) => {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//   };

//   const toggleCompletion = (index: number) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].completed = !updatedTasks[index].completed;
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="p-5">
//       <h1 className="text-2xl mb-4">To-Do List</h1>
//       <input
//         type="text"
//         value={newTask}
//         onChange={(e) => setNewTask(e.target.value)}
//         className="border p-2 mb-4"
//         placeholder="Add a new task"
//       />
//       <Button onClick={addTask} className="mb-4">
//         Add Task
//       </Button>
//       <ul>
//         {tasks.map((task, index) => (
//           <li
//             key={index}
//             className={`flex justify-between items-center mb-2 ${
//               task.completed ? "line-through" : ""
//             }`}
//           >
//             <span
//               onClick={() => toggleCompletion(index)}
//               className="cursor-pointer"
//             >
//               {task.title}
//             </span>
//             <div>
//               <Button
//                 onClick={() => {
//                   setIsOpen(true);
//                   setEditIndex(index);
//                   setNewTask(task.title);
//                 }}
//               >
//                 Edit
//               </Button>
//               <Button onClick={() => deleteTask(index)} className="ml-2">
//                 Delete
//               </Button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <Dialog open={isOpen} onOpenChange={setIsOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Edit Task</DialogTitle>
//           </DialogHeader>
//           <div className="space-y-4">
//             <input
//               type="text"
//               value={newTask}
//               onChange={(e) => setNewTask(e.target.value)}
//               className="border p-2 mb-4"
//               placeholder="Edit your task"
//             />
//           </div>
//           <DialogFooter>
//             <Button onClick={() => updateTask(editIndex!)}>Update Task</Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

interface Task {
  title: string;
  completed: boolean;
}

export default function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, { title: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const updateTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].title = newTask;
    setTasks(updatedTasks);
    setNewTask("");
    setIsOpen(false);
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleCompletion = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">
        📝 Your To-Do List
      </h1>
      <div className="flex flex-col items-center mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 w-full mb-4 rounded-md shadow-sm"
          placeholder="Add a new task"
        />
        <Button onClick={addTask} className="w-1/2">
          Add Task
        </Button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-3 border rounded-md shadow-sm ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            <span
              onClick={() => toggleCompletion(index)}
              className="cursor-pointer"
            >
              {task.title}
            </span>
            <div>
              <Button
                onClick={() => {
                  setIsOpen(true);
                  setEditIndex(index);
                  setNewTask(task.title);
                }}
                variant="secondary"
              >
                Edit
              </Button>
              <Button onClick={() => deleteTask(index)} className="ml-2">
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Task</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="border p-2 w-full rounded-md shadow-sm"
              placeholder="Edit your task"
            />
          </div>
          <DialogFooter>
            <Button onClick={() => updateTask(editIndex!)}>Update Task</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
