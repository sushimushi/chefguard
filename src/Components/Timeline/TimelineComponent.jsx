import React from 'react';
import './timeline.css'
import Zoom from 'react-reveal/Zoom';
function TimelineComponent() {
    return (
    <div>
      <h2 className='achievement'>ACHIEVEMENTS</h2>
      <div className="container">
          <div className="main-timeline">

                          {/* <!-- start experience section--> */}
                          <div className="timeline">
                              <div className="icon"></div>
                              <div className="date-content">
                                  <div className="date-outer">
                                      <span className="date">
                                              {/* <span className="month">2 Years</span> */}
                                      <span className="year">2013</span>
                                      </span>
                                  </div>
                              </div>
                              <Zoom>
                              <div className="timeline-content">
                                  <h5 className="title">Recieved Sree Chithirathirunnal Award</h5>
                                  <p className="description">
                                    Recieved Sree Chithirathirunnal Award from the former Union Minister of Industries, Mr. Kodikkunnil Suresh, Kerala.
                                    
                                  </p>
                              </div>
                              </Zoom>
                          </div>
                          {/* <!-- end experience section--> */}

                          {/* <!-- start experience section--> */}
                          <div className="timeline">
                              <div className="icon"></div>
                              <div className="date-content">
                                  <div className="date-outer">
                                      <span className="date">
                                              {/* <span className="month">1 Years</span> */}
                                      <span className="year">2014</span>
                                      </span>
                                  </div>
                              </div>
                              <Zoom>
                              <div className="timeline-content">
                                  <h5 className="title">Recieved Subash Chandra Bose Award</h5>
                                  <p className="description">
                                  Recieved Subash Chandra Bose Award From the then Minister Of Education, Mr. Abdu Rabb, Kerala.
                                  </p>
                              </div>
                              </Zoom>
                          </div>
                          {/* <!-- end experience section--> */}

                          {/* <!-- start experience section--> */}
                          <div className="timeline">
                              <div className="icon"></div>
                              <div className="date-content">
                                  <div className="date-outer">
                                      <span className="date">
                                              {/* <span className="month">2 Years</span> */}
                                      <span className="year">2015</span>
                                      </span>
                                  </div>
                              </div>
                              <Zoom>
                              <div className="timeline-content">
                                  <h5 className="title">Recieved Thilakan Smaraka Award</h5>
                                  <p className="description">
                                  Recieved Thilakan Smaraka Award From the then Minister of Health, Mr. V.S Shiva Kumar, Kerala.                                </p>
                              </div>
                              </Zoom>
                          </div>
                          {/* <!-- end experience section--> */}

                          {/* <!-- start experience section--> */}
                          <div className="timeline">
                              <div className="icon"></div>
                              <div className="date-content" style={{marginTop:'13px'}}>
                                  <div className="date-outer">
                                      <span className="date">
                                              {/* <span className="month">2 Years</span> */}
                                      <span className="year">2016</span>
                                      </span>
                                  </div>
                              </div>
                              <Zoom>
                              <div className="timeline-content">
                                  <h5 className="title">Become a member among the 500 main Industrialists.</h5>
                                  <p className="description">
                                  Join the exclusive group of 500 leading industrialists, surveyed by Dhanam Magazine. With 350 women currently employed, those showing industry potential can rise to managerial positions                                </p>
                              </div>
                              </Zoom>
                          </div>
                          {/* <!-- end experience section--> */}

          </div>
      </div>
    </div>
    );
}

export default TimelineComponent

