import { toast } from "react-toastify";

export async function createGoalCompletion(goalId: string) {
  const api = await fetch(`${process.env.API_inOrbit}/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ goalId }),
  });

  if (api.status === 400) {
    toast.error("Meta já concluída neste dia!");
  } else {
    toast.success("Meta concluída com sucesso!");
  }
}
