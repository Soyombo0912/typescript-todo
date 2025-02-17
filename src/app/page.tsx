"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { TodoItem } from "./components/todo-item";
import { Todo } from "./types/todo";
import { Switch } from "@radix-ui/react-switch";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("/api/todo")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  return (
    <div className="min-h-screen w-full flex justify-center items-center flex-col gap-4">
      <form className="flex gap-2 w-[400px]">
        <Input autoFocus className="w-full" />
        <Button>Save</Button>
        <Switch></Switch>
      </form>
      <ul className="pl-4 list-disc w-full max-w-[400px]">
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}