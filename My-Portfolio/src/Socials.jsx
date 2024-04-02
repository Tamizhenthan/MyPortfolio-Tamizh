function Socials()
{
    const style={
        float: "left",
        paddingTop: "156px",
        paddingLeft: "45px",
        verticalAign: "20px",
    }
    const style1={
        height: "20px",
        width: "20px",
        paddingBottom: "60px"
    }
    return(
        <>
        <div style={style}>
            <table>
            <tr>  
            <a href="https://github.com/Tamizhenthan" target="_blank"><img style={style1} src="./github.png"/></a>
            </tr>  
            <tr>
            <a href="https://www.instagram.com/igtamizh_17?igsh=MTA1NWxmZGhuZWJuMw==" target="_blank"> <img style={style1} src="./instagram.png"/></a>
            </tr>  
            <tr>
            <a href="https://www.linkedin.com/in/tamizhenthans" target="_blank"><img style={style1} src="./linkedin.png"/></a>
            </tr>  
            </table>
        </div>
        </>
    )

}
export default Socials