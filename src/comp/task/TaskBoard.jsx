import { useState } from "react";
import AddTask from "./AddTask";
import Search from "./Search";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "react",
    description: "I want to learn react",
    tags: ["web", "react", "js"],

    priority: "high",
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showModal, setShowModal] = useState(false);

  const handleAddTask = (newTask) => {
    console.log(newTask);
    setTasks([...tasks, newTask]);
    setShowModal(false);
  };
  return (
    <>
      <section className="mb-20" id="tasks">
        {/* //if true */}
        {showModal && <AddTask onSave={handleAddTask} />}
        <div className="container mx-auto">
          <div className="p-2 flex justify-end">
            <Search></Search>
          </div>
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction onAddTask={() => setShowModal(true)}></TaskAction>

            <TaskList tasks={tasks}></TaskList>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
