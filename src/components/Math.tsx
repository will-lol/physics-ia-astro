import temml from "../scripts/temml.js"

interface whereItem {
  propertyAsLatex: string;
  value: string;
  unitAsLatex: string;
}

interface props {
  latex: string;
  whereList?: Array<whereItem>;
}

export default function Math(props: props) {
  const html = temml.renderToString(props.latex);
  const renderWhere = props.whereList != undefined;

  return (
    <>
      <div className="my-4" dangerouslySetInnerHTML={{ __html: html }}></div>
      {renderWhere && (
        <>
          <span className="text-sm">Where: </span>
          <ul className="mb-5 mx-3 list-none">
            {props.whereList!.map((whereItem, index) => {
              const propertyMathML: string = temml.renderToString(
                whereItem.propertyAsLatex + "="
              );
              const unitMathML: string = temml.renderToString(
                whereItem.unitAsLatex
              );

              return (
                <li key={index}>
                  <div className="inline-block"
                    dangerouslySetInnerHTML={{ __html: propertyMathML }}
                  ></div>
                  {whereItem.value + " "}
                  <div className="inline-block" dangerouslySetInnerHTML={{ __html: unitMathML }}></div>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}