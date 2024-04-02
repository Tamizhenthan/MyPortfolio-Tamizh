import Headroom from 'react-headroom';

function Header()
{
        return(
            <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <Headroom style={{
                            webkitTransition: 'all .5s ease-in-out',
                            mozTransition: 'all .5s ease-in-out',
                            oTransition: 'all .5s ease-in-out',
                            transition: 'all .5s ease-in-out',
                            backgroundColor:'white'
                            }}>
            <h1 className="name">Tamizh</h1>
                <a><h1 className="menu">Contact</h1></a>
                <a><h1 className="menu">Portfolio</h1></a>
                <a><h1 className="menu">Skills</h1></a>
                <a><h1 className="menu">About</h1></a>
                <a><h1 className="menu">Home</h1></a>
                <hr/>
                </Headroom>
            </>
        );
}

export default Header