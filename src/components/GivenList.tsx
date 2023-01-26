import temml from "../scripts/temml.js";

interface givenItem {
  latex: string;
  note?: string;
}

interface props {
  givenList: Array<givenItem>;
}

export default function GivenList(props: props) {
  return (
    <>
      <span className="text-sm">Given: </span>
      <ul className="my-4 mx-3 list-none">
        {props.givenList!.map((givenItem) => {
          const mathML: string = temml.renderToString(givenItem.latex);

          return (
            <li>
              <div
                className="inline-block"
                dangerouslySetInnerHTML={{ __html: mathML }}
              ></div>
              {(givenItem.note != undefined) && " " + givenItem.note}
            </li>
          );
        })}
      </ul>
    </>
  );
}
