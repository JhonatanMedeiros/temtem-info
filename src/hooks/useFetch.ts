import useSWR from "swr";
import api from "../services/api";

export function useFetch<Data = never, Error = never>(url: string) {
  const { data, error, mutate } = useSWR<Data, Error>(url, async url => {
    const response = await api.get(url);

    return response.data;
  });

  return { data, error, mutate };
}
