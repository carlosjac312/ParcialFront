import { FunctionComponent } from "preact/src/index.d.ts";

type Props = {
  telephone: string;
  pais: string;
};

const Telefono: FunctionComponent<Props> = (props) => {
  return (
    <div>
      <form method="post" action="/">
        <input type="text" name="phone" value="" />
        <button type="submit">Subscribe</button>
      </form>
      {props &&
        (
          <div>
            <div>{props.telephone}</div>
            <a>{props.pais}</a>
          </div>
        )}
    </div>
  );
};

export default Telefono;
