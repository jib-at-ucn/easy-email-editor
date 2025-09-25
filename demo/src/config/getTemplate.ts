import { environment } from "@demo/environment";

export async function getTemplate(id: string | number): Promise<object> {
  return fetch(environment.baseUrl + `/templates/${id}`).then(r => r.json());
}
