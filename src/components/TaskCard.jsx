"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

function TaskCard({ task }) {
  const router = useRouter();

  return (
    <>
      <motion.div
        whileHover={{ scale: [null, 1.1, 1.1] }}
        transition={{ duration: 0.3 }}
        className="bg-slate-900 p-3 hover:cursor-pointer hover:bg-slate-700 rounded-md"
        onClick={() => {
          router.push(`/tasks/edit/${task.id}`);
        }}
      >
        <h3 className=" text-xl md:text-2xl font-bold mb-2 text-red-400 text-center">
          {task.title}
        </h3>
        <p>{task.description}</p>
        <p>{new Date(task.created_at).toLocaleDateString()}</p>
      </motion.div>
    </>
  );
}

export default TaskCard;
