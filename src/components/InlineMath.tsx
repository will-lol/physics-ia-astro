import temml from "../scripts/temml.js";

interface props {
  latex: string;
}

export default function InlineMath(props: props) {
  const html = temml.renderToString(props.latex);

  return (
    <math
      className="inline-block"
      dangerouslySetInnerHTML={{ __html: html }}
    ></math>
  );
}
