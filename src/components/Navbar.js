import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
            <nav>
                <Link to='/fun-facts' className='navbar'>Toyota Supra Facts</Link>
            </nav>
        </div>
    )
}

// small change
export default withRouter(Navbar)