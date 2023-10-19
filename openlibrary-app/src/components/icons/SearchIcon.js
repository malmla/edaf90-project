const SIZE = 20;
const STROKE_WIDTH = 3;


function SearchIcon(props) {
  const { onClick } = props;
  return (
    <div
      className="border border-primary rounded ps-2 pe-2 pt-1 bg-primary"
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={SIZE}
        height={SIZE}
        viewBox="0 0 26 26"
      >
        <circle cx="10" cy="10" r="7" stroke="#ffffff" fill="none" strokeWidth={STROKE_WIDTH}/>

        <line x1="15" y1="15" x2="22" y2="22" stroke="#ffffff" strokeWidth={STROKE_WIDTH} strokeLinecap="round"/>
      </svg>
    </div>
  );
}

export default SearchIcon;