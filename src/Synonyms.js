export default function Synonyms(props) {
  if (props.data[0]) {
    return (
      <div className="Synonyms d-block">
        Synonyms:
        {props.data.map((synonym, index) => {
          return (
            <span
              className="d-inline-block p-1 px-3 m-2 bg-white border rounded-pill text-secondary"
              key={index}
            >
              {synonym}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
