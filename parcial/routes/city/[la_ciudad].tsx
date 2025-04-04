import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios, { Axios } from "npm:axios";

type apiData = {
  name: string;
  latitude: string;
  longitude: string;
  country: string;
  population: string;
  is_capital: string;
};
type arrApi = apiData[];

type apiTemp = {
  wind_speed: string;
  wind_degrees: string;
  temp: string;
  humidity: string;
  sunset: string;
  min_temp: string;
  cloud_pct: string;
  feels_like: string;
  sunrise: string;
  max_temp: string;
};

type Data = {
  ciudad: string;
  pais: string;
  temperatura: string;
};

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const { la_ciudad } = ctx.params;
    try {
      const apiresponse = await axios.get<arrApi>(
        `https://api.api-ninjas.com/v1/city?name=${la_ciudad}`,
        {
          headers: { "X-Api-Key": "woAbEJKgkh3OUyTOtSDtaw==dl7GWvZrfYajkd1u" },
        },
      );
      const apitemperatura = await axios.get<apiTemp>(
        `https://api.api-ninjas.com/v1/weather?lat=${
          apiresponse.data[0].latitude
        }&lon=${apiresponse.data[0].longitude}`,
        {
          headers: { "X-Api-Key": "woAbEJKgkh3OUyTOtSDtaw==dl7GWvZrfYajkd1u" },
        },
      );

      return ctx.render({
        ciudad: apiresponse.data[0].name,
        pais: apiresponse.data[0].country,
        temperatura: apitemperatura.data.temp,
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
      <div>{props.data.ciudad}</div>
      <div>{props.data.pais}</div>
      <div>{props.data.temperatura}</div>
    </div>
  );
};

export default Page;
