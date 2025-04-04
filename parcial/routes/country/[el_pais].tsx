import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";

type Data = {
  location: string;
  capital: string;
};
type apiData = {
  capital: string;
};
type arrApi = apiData[];

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const { el_pais } = ctx.params;
    try {
      const apiresponse = await axios.get<arrApi>(
        `https://api.api-ninjas.com/v1/country?name=${el_pais}`,
        {
          headers: { "X-Api-Key": "woAbEJKgkh3OUyTOtSDtaw==dl7GWvZrfYajkd1u" },
        },
      );

      return ctx.render({
        location: el_pais,
        capital: apiresponse.data[0].capital,
      });
    } catch (error) {
      throw new error(404);
    }
  },
};

const Page = (props: PageProps<Data>) => {
  return (
    <div>
      <a href={"/"} class="pallado">Back</a>
      <div>{props.data.location}</div>
      <a href={`/city/${props.data.capital}`}>{props.data.capital}</a>
    </div>
  );
};

export default Page;
