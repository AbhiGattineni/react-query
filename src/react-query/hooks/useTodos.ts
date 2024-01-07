import { useQuery } from "@tanstack/react-query";
import APIClient from "../apiClient";

export interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
  }

  const apiClient = new APIClient<Todo>('/todos');
  

const useTodos = () => {

      return useQuery<Todo[], Error>({
        queryKey: ["todos"],
        queryFn: apiClient.getAll,
      });

}

export default useTodos;