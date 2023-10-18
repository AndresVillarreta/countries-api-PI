export default function Pagination(props) {
  return (
    <div className={props?.styleC.pagination}>
      {props.thisPage > 1 ? (
        <button value={props.thisPage - 1} onClick={props.changePage}>
          &lt;
        </button>
      ) : (
        ""
      )}
      {props.thisPage > 3 && props.thisPage <= props?.pagination ? (
        <button value={1} onClick={props.changePage}>
          1
        </button>
      ) : (
        ""
      )}
      {/* {props.thisPage > 1 ? <button>{props.thisPage - 1}</button> : ""} */}
      <button className={props.styleC.thispage}>{props.thisPage}</button>
      {props.thisPage + 1 <= props?.pagination ? (
        <button value={props.thisPage + 1} onClick={props.changePage}>
          {props.thisPage + 1}
        </button>
      ) : (
        ""
      )}
      {props.thisPage + 2 < props?.pagination ? (
        <button value={props.thisPage + 2} onClick={props.changePage}>
          {props.thisPage + 2}
        </button>
      ) : (
        ""
      )}
      {props.thisPage + 3 < props?.pagination ? (
        <button className={props.styleC.more_page}>...</button>
      ) : (
        ""
      )}
      {props.thisPage + 1 < props?.pagination ? (
        <button value={props?.pagination} onClick={props.changePage}>
          {props?.pagination}
        </button>
      ) : (
        ""
      )}
      {props.thisPage < props?.pagination ? (
        <button value={props.thisPage + 1} onClick={props.changePage}>
          &gt;
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
