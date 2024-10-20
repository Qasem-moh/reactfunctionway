export default function DataShow(props) {
  return (
    <div key={props.name.id}>
      <h3>{props.name.name}</h3>
      <img
        src={props.name.url}
        alt=""
        style={{
          minWidth: "450px",
          maxWidth: "450px",
          minHeight: "450px",
          maxHeight: "450px",
        }}
      />
    </div>
  );
}
