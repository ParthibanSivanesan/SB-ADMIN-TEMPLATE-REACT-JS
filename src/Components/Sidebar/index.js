import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceLaughWink, faGaugeHigh, faGear, faScrewdriverWrench, faFolder, faChartArea, faTable, faCaretLeft } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return (

        // <!-- Sidebar -->

        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <FontAwesomeIcon icon={faFaceLaughWink} size="2xl" style={{ color: "#fcfcfc", }} />
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <a className="nav-link" href="index.html">
                    <FontAwesomeIcon icon={faGaugeHigh} />
                    <span>  Dashboard</span></a>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading" >
                Interface
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item ">

                <div className="btn-group ">

                    <button type="button" className="btn dropdown-toggle drp-dwn" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="nav-link collapsed" href="#" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <FontAwesomeIcon icon={faGear} />  Components</span>
                    </button>

                    <ul className="dropdown-menu">
                        <li><a className="dropdown-header" href="#">Custom Components</a></li>
                        <li><a className="dropdown-item" href="#">Buttons</a></li>
                        <li><a className="dropdown-item" href="#">Cards</a></li>
                    </ul>
                </div>


            </li>

            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            <li className="nav-item">

                <div className="btn-group">
                    <button type="button" className="btn dropdown-toggle drp-dwn" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="nav-link collapsed" href="#" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <FontAwesomeIcon icon={faScrewdriverWrench} />  Utilities</span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-header" href="#">Custom Utilities</a></li>
                        <li><a className="dropdown-item" href="#">Colors</a></li>
                        <li><a className="dropdown-item" href="#">Borders</a></li>
                        <li><a className="dropdown-item" href="#">Animations</a></li>
                        <li><a className="dropdown-item" href="#">Other</a></li>
                    </ul>
                </div>


            </li>



            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Addons
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">

                <div className="btn-group">
                    <button type="button" className="btn dropdown-toggle drp-dwn" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="nav-link collapsed" href="#" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <FontAwesomeIcon icon={faFolder} />  Pages</span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-header" href="#">Login Screens</a></li>
                        <li><a className="dropdown-item" href="#">Login</a></li>
                        <li><a className="dropdown-item" href="#">Register</a></li>
                        <li><a className="dropdown-item" href="#">Forgot Password</a></li>
                        <li><a className="dropdown-header" href="#">Other Pages</a></li>
                        <li><a className="dropdown-item" href="#">404 Page</a></li>
                        <li><a className="dropdown-item" href="#">Blank Page</a></li>
                    </ul>
                </div>


            </li>


            {/* <!-- Nav Item - Charts --> */}
            <li className="nav-item txt-css">
                <a className="nav-link" href="charts.html">
                    <FontAwesomeIcon icon={faChartArea} />
                    <span>  Charts</span></a>
            </li>

            {/* <!-- Nav Item - Tables --> */}
            <li className="nav-item txt-css ">
                <a className="nav-link" href="tables.html">
                    <FontAwesomeIcon icon={faTable} />
                    <span>  Tables</span></a>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block" />

            {/* <!-- Sidebar Toggler (Sidebar) --> */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"><FontAwesomeIcon icon={faCaretLeft} /></button>
            </div>

            {/* <!-- Sidebar Message --> */}
            <div className="sidebar-card d-none d-lg-flex">
                <img className="sidebar-card-illustration mb-2" src="https://w7.pngwing.com/pngs/49/467/png-transparent-spacecraft-rocket-rocket-spacecraft-cartoon-outer-space-thumbnail.png" alt="..." />
                <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>

        </ul>
        // {/* <!-- End of Sidebar --></hr> */}

    )
}


export default Sidebar;