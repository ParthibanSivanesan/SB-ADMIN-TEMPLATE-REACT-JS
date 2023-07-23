import Header from "../Header";
import Footer from "../Footer";
import "./Body.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faCalendar,
  faDollarSign,
  faClipboardList,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const Body = (props) => {
  const username = props.username;
  const setUser = props.setUser;

  const handleSubmit = (e) => {
    e.preventDefault();
    var userinput = document.getElementById("username").value;
    //console.log(userinput   );
    setUser(userinput);
    alert(`Welcome ${userinput}! Username Updated`);
  };


  return (
    <div>
      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          <Header username={username} setUser={setUser} />

          {/* <!-- Begin Page Content --> */}
          <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              <form>
                {/* Getting User Name     */}
                <span>
                  <div className="form-group">
                    <label for="exampleFormControlInput1">
                      Enter the User Name
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="username"
                      placeholder="User Name"
                    ></input>
                  </div>
                  <button
                    type="button"
                    className="btn btn-success bttn-css"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </span>

                {/* Getting The Amount from User */}
                {/* <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select</button>
                                    <div className="dropdown-menu">
                                    <a className="dropdown-item" >EARNINGS (MONTHLY)</a>
                                    <a className="dropdown-item" >EARNINGS (ANNUAL)</a>
                                    <a className="dropdown-item" >TASKS</a>
                                    <a className="dropdown-item" >PENDING REQUESTES</a>
                                    </div>
                                </div>
                                <input type="text" className="form-control" aria-label="Text input with dropdown button"></input>
                                </div> */}
              </form>

              <a
                href="#"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <FontAwesomeIcon icon={faDownload} /> Generate Report
              </a>
            </div>

            {/* <!-- Content Row --> */}
            <div className="row">
              {/* <!-- Earnings (Monthly) Card Example --> */}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          Earnings (Monthly)
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          $40,000
                        </div>
                      </div>
                      <div className="col-auto">
                        <FontAwesomeIcon
                          className="icon-size"
                          icon={faCalendar}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Earnings (Monthly) Card Example --> */}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                          Earnings (Annual)
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          $215,000
                        </div>
                      </div>
                      <div className="col-auto">
                        <FontAwesomeIcon
                          className="icon-size"
                          icon={faDollarSign}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Earnings (Monthly) Card Example --> */}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                          Tasks
                        </div>
                        <div className="row no-gutters align-items-center">
                          <div className="col-auto">
                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                              50%
                            </div>
                          </div>
                          <div className="col">
                            <div className="progress progress-sm mr-2">
                              <div
                                className="progress-bar bg-info"
                                role="progressbar"
                                style={{
                                  width: "50%",
                                }}
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <FontAwesomeIcon
                          className="icon-size"
                          icon={faClipboardList}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Pending Requests Card Example --> */}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                          Pending Requests
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          18
                        </div>
                      </div>
                      <div className="col-auto">
                        <FontAwesomeIcon
                          className="icon-size"
                          icon={faComments}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Content Row --> */}

            <div className="row">
              {/* <!-- Area Chart --> */}
              <div className="col-xl-8 col-lg-7">
                <div className="card shadow mb-4">
                  {/* <!-- Card Header - Dropdown --> */}
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Earnings Overview
                    </h6>
                  </div>
                  {/* <!-- Card Body --> */}
                  <div className="card-body">
                    <div className="chart-area">
                      <img
                        src="https://img.freepik.com/premium-vector/business-arrow-growing-up-investment-finance-graph-with-coin-stock-financial-investment-income_252172-17.jpg?w=2000"
                        style={{ width: "740px", height: "300px" }}
                      ></img>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Pie Chart --> */}
              <div className="col-xl-4 col-lg-5">
                <div className="card shadow mb-4">
                  {/* <!-- Card Header - Dropdown --> */}
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Revenue Sources
                    </h6>
                    <div className="dropdown no-arrow">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <div className="dropdown-header">Dropdown Header:</div>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Card Body --> */}
                  <div className="card-body">
                    <img
                      src="https://apexcharts.com/wp-content/uploads/2018/05/simple-donut-chart.svg"
                      style={{ width: "300px", height: "300px" }}
                    ></img>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Content Row --> */}
            <div className="row">
              {/* <!-- Content Column --> */}
              <div className="col-lg-6 mb-4">
                {/* <!-- Project Card Example --> */}
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Projects
                    </h6>
                  </div>
                  <div className="card-body">
                    <h4 className="small font-weight-bold">
                      Server Migration <span className="float-right">20%</span>
                    </h4>
                    <div className="progress mb-4">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{
                          width: "20%",
                        }}
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h4 className="small font-weight-bold">
                      Sales Tracking <span className="float-right">40%</span>
                    </h4>
                    <div className="progress mb-4">
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{
                          width: "20%",
                        }}
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h4 className="small font-weight-bold">
                      Customer Database <span className="float-right">60%</span>
                    </h4>
                    <div className="progress mb-4">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: "20%",
                        }}
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h4 className="small font-weight-bold">
                      Payout Details <span className="float-right">80%</span>
                    </h4>
                    <div className="progress mb-4">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{
                          width: "20%",
                        }}
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h4 className="small font-weight-bold">
                      Account Setup{" "}
                      <span className="float-right">Complete!</span>
                    </h4>
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{
                          width: "20%",
                        }}
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>

                {/* <!-- Color System --> */}
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-primary text-white shadow">
                      <div className="card-body">
                        Primary
                        <div className="text-white-50 small">#4e73df</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-success text-white shadow">
                      <div className="card-body">
                        Success
                        <div className="text-white-50 small">#1cc88a</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-info text-white shadow">
                      <div className="card-body">
                        Info
                        <div className="text-white-50 small">#36b9cc</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-warning text-white shadow">
                      <div className="card-body">
                        Warning
                        <div className="text-white-50 small">#f6c23e</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-danger text-white shadow">
                      <div className="card-body">
                        Danger
                        <div className="text-white-50 small">#e74a3b</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-secondary text-white shadow">
                      <div className="card-body">
                        Secondary
                        <div className="text-white-50 small">#858796</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-light text-black shadow">
                      <div className="card-body">
                        Light
                        <div className="text-black-50 small">#f8f9fc</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">
                        Dark
                        <div className="text-white-50 small">#5a5c69</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                {/* <!-- Illustrations --> */}
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Illustrations
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        classNameName="img-fluid px-3 px-sm-4 mt-3 mb-4"
                        style={{ width: "25rem" }}
                        src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
                        alt="..."
                      />
                    </div>
                    <p>
                      Add some quality, svg illustrations to your project
                      courtesy of{" "}
                      <a
                        target="_blank"
                        rel="nofollow"
                        href="https://undraw.co/"
                      >
                        unDraw
                      </a>
                      , a constantly updated collection of beautiful svg images
                      that you can use completely free and without attribution!
                    </p>
                    <a target="_blank" rel="nofollow" href="https://undraw.co/">
                      Browse Illustrations on unDraw &rarr;
                    </a>
                  </div>
                </div>

                {/* <!-- Approach --> */}
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Development Approach
                    </h6>
                  </div>
                  <div className="card-body">
                    <p>
                      SB Admin 2 makes extensive use of Bootstrap 4 utility
                      classNamees in order to reduce CSS bloat and poor page
                      performance. Custom CSS classNamees are used to create
                      custom components and custom utility classNamees.
                    </p>
                    <p className="mb-0">
                      Before working with this theme, you should become familiar
                      with the Bootstrap framework, especially the utility
                      classNamees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /.container-fluid --> */}
        </div>
        {/* <!-- End of Main Content --> */}

        <Footer />
      </div>
      {/* <!-- End of Content Wrapper --> */}
    </div>
  );
};

export default Body;
