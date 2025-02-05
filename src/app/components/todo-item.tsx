import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Todo } from "../types/todo";
import { Switch } from "@/components/ui/switch";



export const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <li className="flex justify-between items-center">
      <label className="flex items-center">
        <Switch />
        <input type="" defaultChecked={todo.checked} />
        {todo.title}
      </label>
      <Button variant="outline">
        <X />
      </Button>
    </li>
  );
};