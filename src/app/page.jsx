import { prisma } from "@/libs/prisma";
import TaskCard from "@/components/TaskCard";
async function loadTasks() {
  return await prisma.task.findMany();
}

async function HomePage() {
  const tasks = await loadTasks();

  return (
    <section className="container mx-auto flex justify-center mt-24 ">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-5 max-w-screen-lg m-4">
    {tasks.map((task) => (
      <TaskCard key={task.id} task={task} />
    ))}
  </div>
</section>
  );
}

export default HomePage;
