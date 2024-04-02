import ReactTyped from "react-typed";

const style1 ={
  fontSize: "33px",
  fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  fontWeight:625,
  paddingBottom:"0px"
}

function Typeanime() {
  return (
        <b style={style1}><ReactTyped strings={[" Student."," Developer."]} typeSpeed={200}  backSpeed={200} loop /></b>
  );
};

export default Typeanime 