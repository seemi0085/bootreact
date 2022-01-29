import React from 'react'
import { Card } from 'react-bootstrap'

export default function Main() {
    return (
        <React.Fragment>
            {/* <div style={{ marginLeft: "14rem", height: "43rem"}}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </div> */}
            {/* <div id="pcoded" className="pcoded">
                <div className="pcoded-container navbar-wrapper">
                    <div className="pcoded-main-container"> */}
            {/* <div className="pcoded-wrapper"> */}
            <div className="pcoded-content">
                <div className="pcoded-inner-content">
                    <div className="main-body">
                        <div className="page-wrapper">
                            <div className="page-body">
                                <div className="row">
                                    <div className="col-xl-3 col-md-6">
                                        <div className="card bg-c-yellow update-card">
                                            <div className="card-block">
                                                <div className="row align-items-end">
                                                    <div className="col-8">
                                                        <h4 className="text-white">$30200</h4>
                                                        <h6 className="text-white m-b-0">All Earnings</h6>
                                                    </div>
                                                    <div className="col-4 text-right">
                                                        <canvas id="update-chart-1" height="50"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <p className="text-white m-b-0"><i
                                                    className="feather icon-clock text-white f-14 m-r-10"></i>update
                                                    : 2:15 am</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div className="card bg-c-green update-card">
                                            <div className="card-block">
                                                <div className="row align-items-end">
                                                    <div className="col-8">
                                                        <h4 className="text-white">290+</h4>
                                                        <h6 className="text-white m-b-0">Page Views</h6>
                                                    </div>
                                                    <div className="col-4 text-right">
                                                        <canvas id="update-chart-2" height="50"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <p className="text-white m-b-0"><i
                                                    className="feather icon-clock text-white f-14 m-r-10"></i>update
                                                    : 2:15 am</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-md-6">
                                        <div className="card bg-c-pink update-card">
                                            <div className="card-block">
                                                <div className="row align-items-end">
                                                    <div className="col-8">
                                                        <h4 className="text-white">145</h4>
                                                        <h6 className="text-white m-b-0">Task Completed</h6>
                                                    </div>
                                                    <div className="col-4 text-right">
                                                        <canvas id="update-chart-3" height="50"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <p className="text-white m-b-0"><i
                                                    className="feather icon-clock text-white f-14 m-r-10"></i>update
                                                    : 2:15 am</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-md-6">
                                        <div className="card bg-c-lite-green update-card">
                                            <div className="card-block">
                                                <div className="row align-items-end">
                                                    <div className="col-8">
                                                        <h4 className="text-white">500</h4>
                                                        <h6 className="text-white m-b-0">Downloads</h6>
                                                    </div>
                                                    <div className="col-4 text-right">
                                                        <canvas id="update-chart-4" height="50"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <p className="text-white m-b-0"><i
                                                    className="feather icon-clock text-white f-14 m-r-10"></i>update
                                                    : 2:15 am</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-8 col-md-12">
                                        <div className="card table-card">
                                            <div className="card-header">
                                                <h5>Application Sales</h5>
                                                <div className="card-header-right">
                                                    <ul className="list-unstyled card-option">
                                                        <li><i className="feather icon-maximize full-card"></i></li>
                                                        <li><i className="feather icon-minus minimize-card"></i>
                                                        </li>
                                                        <li><i className="feather icon-trash-2 close-card"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="card-block">
                                                <div className="table-responsive">
                                                    <table className="table table-hover  table-borderless">
                                                        <thead>
                                                            <tr>
                                                                <th>
                                                                    <div className="chk-option">
                                                                        <div
                                                                            className="checkbox-fade fade-in-primary">
                                                                            <label className="check-task">
                                                                                <input type="checkbox" value="" />
                                                                                <span className="cr">
                                                                                    <i
                                                                                        className="cr-icon feather icon-check txt-default"></i>
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    Application
                                                                </th>
                                                                <th>Sales</th>
                                                                <th>Change</th>
                                                                <th>Avg Price</th>
                                                                <th>Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className="chk-option">
                                                                        <div
                                                                            className="checkbox-fade fade-in-primary">
                                                                            <label className="check-task">
                                                                                <input type="checkbox" value="" />
                                                                                <span className="cr">
                                                                                    <i
                                                                                        className="cr-icon feather icon-check txt-default"></i>
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-inline-block align-middle">
                                                                        <h6>Able Pro</h6>
                                                                        <p className="text-muted m-b-0">Powerful
                                                                            Admin Theme</p>
                                                                    </div>
                                                                </td>
                                                                <td>16,300</td>
                                                                <td><canvas id="app-sale1" height="50"
                                                                    width="100"></canvas></td>
                                                                <td>$53</td>
                                                                <td className="text-c-blue">$15,652</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="chk-option">
                                                                        <div
                                                                            className="checkbox-fade fade-in-primary">
                                                                            <label className="check-task">
                                                                                <input type="checkbox" value="" />
                                                                                <span className="cr">
                                                                                    <i
                                                                                        className="cr-icon feather icon-check txt-default"></i>
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-inline-block align-middle">
                                                                        <h6>Photoshop</h6>
                                                                        <p className="text-muted m-b-0">Design
                                                                            Software</p>
                                                                    </div>
                                                                </td>
                                                                <td>26,421</td>
                                                                <td><canvas id="app-sale2" height="50"
                                                                    width="100"></canvas></td>
                                                                <td>$35</td>
                                                                <td className="text-c-blue">$18,785</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="chk-option">
                                                                        <div
                                                                            className="checkbox-fade fade-in-primary">
                                                                            <label className="check-task">
                                                                                <input type="checkbox" value="" />
                                                                                <span className="cr">
                                                                                    <i
                                                                                        className="cr-icon feather icon-check txt-default"></i>
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-inline-block align-middle">
                                                                        <h6>Guruable</h6>
                                                                        <p className="text-muted m-b-0">Best Admin
                                                                            Template</p>
                                                                    </div>
                                                                </td>
                                                                <td>8,265</td>
                                                                <td><canvas id="app-sale3" height="50"
                                                                    width="100"></canvas></td>
                                                                <td>$98</td>
                                                                <td className="text-c-blue">$9,652</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="chk-option">
                                                                        <div
                                                                            className="checkbox-fade fade-in-primary">
                                                                            <label className="check-task">
                                                                                <input type="checkbox" value="" />
                                                                                <span className="cr">
                                                                                    <i
                                                                                        className="cr-icon feather icon-check txt-default"></i>
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-inline-block align-middle">
                                                                        <h6>Flatable</h6>
                                                                        <p className="text-muted m-b-0">Admin App
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td>10,652</td>
                                                                <td><canvas id="app-sale4" height="50"
                                                                    width="100"></canvas></td>
                                                                <td>$20</td>
                                                                <td className="text-c-blue">$7,856</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <div className="text-center">
                                                        <a href="#!" className=" b-b-primary text-primary">View all
                                                            Projects</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-12">
                                        <div className="card user-activity-card">
                                            <div className="card-header">
                                                <h5>User Activity</h5>
                                            </div>
                                            <div className="card-block">
                                                <div className="row m-b-25">
                                                    <div className="col-auto p-r-0">
                                                        <div className="u-img">
                                                            <img src="assets/images/breadcrumb-bg.jpg"
                                                                alt="user image" className="img-radius cover-img" />
                                                            <img src="assets/images/avatar-2.jpg"
                                                                alt="user image" className="img-radius profile-img" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <h6 className="m-b-5">John Deo</h6>
                                                        <p className="text-muted m-b-0">Lorem Ipsum is simply dummy
                                                            text.</p>
                                                        <p className="text-muted m-b-0"><i
                                                            className="feather icon-clock m-r-10"></i>2 min ago
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row m-b-25">
                                                    <div className="col-auto p-r-0">
                                                        <div className="u-img">
                                                            <img src="assets/images/breadcrumb-bg.jpg"
                                                                alt="user image" className="img-radius cover-img" />
                                                            <img src="assets/images/avatar-2.jpg"
                                                                alt="user image" className="img-radius profile-img" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <h6 className="m-b-5">John Deo</h6>
                                                        <p className="text-muted m-b-0">Lorem Ipsum is simply dummy
                                                            text.</p>
                                                        <p className="text-muted m-b-0"><i
                                                            className="feather icon-clock m-r-10"></i>2 min ago
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row m-b-25">
                                                    <div className="col-auto p-r-0">
                                                        <div className="u-img">
                                                            <img src="assets/images/breadcrumb-bg.jpg"
                                                                alt="user image" className="img-radius cover-img" />
                                                            <img src="assets/images/avatar-2.jpg"
                                                                alt="user image" className="img-radius profile-img" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <h6 className="m-b-5">John Deo</h6>
                                                        <p className="text-muted m-b-0">Lorem Ipsum is simply dummy
                                                            text.</p>
                                                        <p className="text-muted m-b-0"><i
                                                            className="feather icon-clock m-r-10"></i>2 min ago
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row m-b-5">
                                                    <div className="col-auto p-r-0">
                                                        <div className="u-img">
                                                            <img src="assets/images/breadcrumb-bg.jpg"
                                                                alt="user image" className="img-radius cover-img" />
                                                            <img src="assets/images/avatar-2.jpg"
                                                                alt="user image" className="img-radius profile-img" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <h6 className="m-b-5">John Deo</h6>
                                                        <p className="text-muted m-b-0">Lorem Ipsum is simply dummy
                                                            text.</p>
                                                        <p className="text-muted m-b-0"><i
                                                            className="feather icon-clock m-r-10"></i>2 min ago
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                    <a href="#!" className="b-b-primary text-primary">View all
                                                        Projects</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-12">
                                        <div className="card latest-update-card">
                                            <div className="card-header">
                                                <h5>Latest Updates</h5>
                                                <div className="card-header-right">
                                                    <ul className="list-unstyled card-option">
                                                        <li><i className="fa fa fa-wrench open-card-option"></i>
                                                        </li>
                                                        <li><i className="fa fa-window-maximize full-card"></i></li>
                                                        <li><i className="fa fa-minus minimize-card"></i></li>
                                                        <li><i className="fa fa-refresh reload-card"></i></li>
                                                        <li><i className="fa fa-trash close-card"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="card-block">
                                                <div className="latest-update-box">
                                                    <div className="row p-b-15">
                                                        <div className="col-auto text-right update-meta">
                                                            <p className="text-muted m-b-0 d-inline">4 hrs ago</p>
                                                            <i
                                                                className="feather icon-briefcase bg-simple-c-pink update-icon"></i>
                                                        </div>
                                                        <div className="col">
                                                            <h6>+ 5 New Products were added!</h6>
                                                            <p className="text-muted m-b-0">Congratulations!</p>
                                                        </div>
                                                    </div>
                                                    <div className="row p-b-15">
                                                        <div className="col-auto text-right update-meta">
                                                            <p className="text-muted m-b-0 d-inline">1 day ago</p>
                                                            <i
                                                                className="feather icon-check bg-simple-c-yellow  update-icon"></i>
                                                        </div>
                                                        <div className="col">
                                                            <h6>Database backup completed!</h6>
                                                            <p className="text-muted m-b-0">Download the <span
                                                                className="text-c-blue">latest backup</span>.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="row p-b-0">
                                                        <div className="col-auto text-right update-meta">
                                                            <p className="text-muted m-b-0 d-inline">2 day ago</p>
                                                            <i
                                                                className="feather icon-facebook bg-simple-c-green update-icon"></i>
                                                        </div>
                                                        <div className="col">
                                                            <h6>+1 Friend Requests</h6>
                                                            <p className="text-muted m-b-10">This is great, keep it
                                                                up!</p>
                                                            <div className="table-responsive">
                                                                <table className="table table-hover m-b-0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="b-none">
                                                                                <a href="#!"
                                                                                    className="align-middle">
                                                                                    <img src="assets/images/avatar-2.jpg"
                                                                                        alt="user image"
                                                                                        className="img-radius img-40 align-top m-r-15" />
                                                                                    <div className="d-inline-block">
                                                                                        <h6>Jeny William</h6>
                                                                                        <p
                                                                                            className="text-muted m-b-0">
                                                                                            Graphic Designer</p>
                                                                                    </div>
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <a href="#!" className="b-b-primary text-primary">View all
                                                        Projects</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-12">
                                        <div className="card user-card-full">
                                            <div className="row m-l-0 m-r-0">
                                                <div className="col-sm-4 bg-c-lite-green user-profile">
                                                    <div className="card-block text-center text-white">
                                                        <div className="m-b-25">
                                                            <img src="assets/images/avatar-4.jpg"
                                                                className="img-radius" alt="User-Profile-Image" />
                                                        </div>
                                                        <h6 className="f-w-600">Jeny William</h6>
                                                        <p>Web Designer</p>
                                                        <i className="feather icon-edit m-t-10 f-16"></i>
                                                    </div>
                                                </div>
                                                <div className="col-sm-8">
                                                    <div className="card-block">
                                                        <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information
                                                        </h6>
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <p className="m-b-10 f-w-600">Email</p>
                                                                <h6 className="text-muted f-w-400">jeny@gmail.com
                                                                </h6>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <p className="m-b-10 f-w-600">Phone</p>
                                                                <h6 className="text-muted f-w-400">0023-333-526136
                                                                </h6>
                                                            </div>
                                                        </div>
                                                        <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                                                            Projects</h6>
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <p className="m-b-10 f-w-600">Recent</p>
                                                                <h6 className="text-muted f-w-400">Guruable Admin
                                                                </h6>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <p className="m-b-10 f-w-600">Most Viewed</p>
                                                                <h6 className="text-muted f-w-400">Able Pro Admin
                                                                </h6>
                                                            </div>
                                                        </div>
                                                        <ul className="social-link list-unstyled m-t-40 m-b-10">
                                                            <li><a href="#!" data-toggle="tooltip"
                                                                data-placement="bottom" title=""
                                                                data-original-title="facebook"><i
                                                                    className="feather icon-facebook facebook"
                                                                    aria-hidden="true"></i></a></li>
                                                            <li><a href="#!" data-toggle="tooltip"
                                                                data-placement="bottom" title=""
                                                                data-original-title="twitter"><i
                                                                    className="feather icon-twitter twitter"
                                                                    aria-hidden="true"></i></a></li>
                                                            <li><a href="#!" data-toggle="tooltip"
                                                                data-placement="bottom" title=""
                                                                data-original-title="instagram"><i
                                                                    className="feather icon-instagram instagram"
                                                                    aria-hidden="true"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-md-6">
                                        <div className="card social-card bg-simple-c-blue">
                                            <div className="card-block">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <i
                                                            className="feather icon-mail f-34 text-c-blue social-icon"></i>
                                                    </div>
                                                    <div className="col">
                                                        <h6 className="m-b-0">Mail</h6>
                                                        <p>231.2w downloads</p>
                                                        <p className="m-b-0">Lorem Ipsum is simply dummy text of the
                                                            printing</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#!" className="download-icon"><i
                                                className="feather icon-arrow-down"></i></a>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6">
                                        <div className="card social-card bg-simple-c-pink">
                                            <div className="card-block">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <i
                                                            className="feather icon-twitter f-34 text-c-pink social-icon"></i>
                                                    </div>
                                                    <div className="col">
                                                        <h6 className="m-b-0">twitter</h6>
                                                        <p>231.2w downloads</p>
                                                        <p className="m-b-0">Lorem Ipsum is simply dummy text of the
                                                            printing</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#!" className="download-icon"><i
                                                className="feather icon-arrow-down"></i></a>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-12">
                                        <div className="card social-card bg-simple-c-green">
                                            <div className="card-block">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <i
                                                            className="feather icon-instagram f-34 text-c-green social-icon"></i>
                                                    </div>
                                                    <div className="col">
                                                        <h6 className="m-b-0">Instagram</h6>
                                                        <p>231.2w downloads</p>
                                                        <p className="m-b-0">Lorem Ipsum is simply dummy text of the
                                                            printing</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#!" className="download-icon"><i
                                                className="feather icon-arrow-down"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
            {/* </div>
                </div>
            </div> */}
        </React.Fragment>
    )
}
