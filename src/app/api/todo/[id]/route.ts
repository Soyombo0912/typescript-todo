import { NextRequest, NextResponse } from "next/server";
import { todos } from "../route";
import { ADDRGETNETWORKPARAMS } from "dns";
import { comment } from "postcss";

export const PUT = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const { title, checked } = await req.json();
  const existingTodo = todos.find((todo) => todo.id === id);
  if (!existingTodo) {
    return NextResponse.json({ message: "todo not found!" }, { status: 404 });
  }
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  const updatingTodo = { id: existingTodo.id, title, checked };
  todos.splice(todoIndex, 1, updatingTodo);
  return NextResponse.json(updatingTodo);

   
};

