



const Header = () => {
    return(
        <div className="container-fluid shadow bg-light">
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-primary d-flex justify-content-between align-items-center flew-row w-100">
                    <a className="navbar-brand" href="/">Admin Panel</a>
                    <ul className="navbar-nav flex-row">
                        <li className="nav-item p-2 active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item p-2 active">
                            <a className="nav-link" href="/posts">Posts</a>
                        </li>
                        <li className="nav-item p-2 active">
                            <a className="nav-link" href="/users">Users</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header; 