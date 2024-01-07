import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./useTodos";
import axios from "axios";
import APIClient from "../apiClient";

const apiClient = new APIClient<Todo>('/todos');

const useAddTodos = (onAdd:()=>void) => {
    const queryClient = useQueryClient();
    return useMutation<Todo, Error, Todo>({
      mutationFn: apiClient.post,
      onSuccess: (savedTodo, newTodo) => {
        queryClient.setQueryData<Todo[]>(["todos"], (todos=[]) => [
          savedTodo,
          ...todos,
        ]);
        onAdd();
      },
    });

}
export default useAddTodos;