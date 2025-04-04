import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <div class={"container"}>
        <div class="up">Heather</div>
      <Component />
      <div class="down">Bottom</div>
    </div>
  );
}