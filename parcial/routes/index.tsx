import Axios from "npm:axios";
import { Handlers } from "$fresh/server.ts";
import Telefono from "../components/Telefono.tsx";
import { PageProps, FreshContext } from "$fresh/server.ts";


export const handler: Handlers = {
  async GET(req, ctx) {
    return await ctx.render();
  },
  async POST(req, ctx) {
    const form = await req.formData();
    const pais = form.get("pais")?.toString();

    // Add email to list.

    // Redirect user to thank you page.
    const headers = new Headers();
    headers.set("location", `/country/${pais}`);
    return new Response(null, {
      status: 303, // See Other
      headers,
    });
  },
};

export default function Subscribe() {
  return (
    <>
    <div>Introduce un país</div>
      <form method="post">
        <input type="text" name="pais" value="" />
        <button type="submit">Buscar</button>
      </form>
    </>
  );
}
