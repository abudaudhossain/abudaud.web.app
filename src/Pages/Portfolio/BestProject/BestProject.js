import React from 'react';
import { Link } from 'react-router-dom';
import useFeckData from '../../../hooks/feckData';
import "./BestProject.css";

const BestProject = () => {
    const {useBestProjects} = useFeckData();
    const  myProjects = useBestProjects();
   
    return (
        <div>
            <header className="container">
                <h2 className='title-text' style={{ width: "205px", margin: "auto" }}>Best <span className="text-color">Projects</span></h2>

                
                <div className="d-flex my-5 py-5  align-items-center  ">
                    <div className="card-img mx-3">
                        <img className="img-fluid" src={ myProjects[0]?.image} alt="img" />
                    </div>
                    <div className="col-7 mx-3">
                        <div>
                            <h3>{ myProjects[0]?.name}</h3>
                            <p>
                                { myProjects[0]?.description}
                            </p>
                            {
                                 myProjects[0]?.technology.map(tech => <span key={tech} className="skill-myBtn mr">{tech}</span>)
                            }
                        </div>
                        <div className="mt-4">
                            <Link className="myBtn mr" to={`/details/7`}>Details</Link>
                            <span className="code">
                                <a className="m-2" href={ myProjects[0]?.link.live} title="Live website">

                                    <span
                                        className="web-link"><i className="fas fa-external-link-alt"></i></span>
                                </a>
                                <a className="m-2"href={ myProjects[0]?.link.client} title="Client Code"><span
                                    className=""><i className="fa fa-github"></i></span></a>
                                {
                                     myProjects[0]?.link.server &&
                                    <a className="m-2" href={ myProjects[0]?.link.server} title="Server Code"> <span
                                        className=""><i className="fa fa-github"></i></span></a>
                                }
                            </span>
                        </div>
                    </div>
                </div>

                <div className="d-flex my-5 py-5  align-items-center">
                    <div className="card-img mx-3 order-2">

                        <img className="img-fluid" src={ myProjects[1]?.image} alt="img" />
                    </div>
                    <div className="col-7 mx-3">
                        <div>
                            <h3>{ myProjects[1]?.name}</h3>
                            <p>
                                { myProjects[1]?.description}
                            </p>
                            {
                                 myProjects[1]?.technology.map(tech => <span key={tech} className="skill-myBtn mr">{tech}</span>)
                            }
                        </div>
                        <div className="mt-4">
                            <Link className="myBtn mr" to={`/details/8`}>Details</Link>
                            <span className="code">
                                <a className="m-2" href={ myProjects[1]?.link.live} title="Live website">

                                    <span
                                        className="web-link"><i className="fas fa-external-link-alt"></i></span>
                                </a>
                                <a className="m-2"href={ myProjects[1]?.link.client} title="Client Code"><span
                                    className=""><i className="fa fa-github"></i></span></a>
                                {
                                     myProjects[1]?.link.server &&
                                    <a className="m-2" href={ myProjects[1]?.link.server} title="Server Code"> <span
                                        className=""><i className="fa fa-github"></i></span></a>
                                }
                            </span>
                        </div>
                    </div>
                </div>

                <div className="d-flex my-5 py-5  align-items-center">
                    <div className="card-img mx-3">

                        <img className="img-fluid" src={ myProjects[2]?.image} alt="img" />
                    </div>
                    <div className="col-7 mx-3">
                        <div>
                            <h3>{ myProjects[2]?.name}</h3>
                            <p>
                                { myProjects[2]?.description }
                            </p>
                            {
                                 myProjects[2]?.technology.map(tech => <span key={tech} className="skill-myBtn mr">{tech}</span>)
                            }
                        </div>
                        <div className="mt-4">
                            <Link className="myBtn mr" to={`/details/1`}>Details</Link>
                            <span className="code">
                                <a className="m-2" href={ myProjects[2]?.link.live} title="Live website">

                                    <span
                                        className="web-link"><i className="fas fa-external-link-alt"></i></span>
                                </a>
                                <a className="m-2"href={ myProjects[2]?.link.client} title="Client Code"><span
                                    className=""><i className="fa fa-github"></i></span></a>
                                {
                                     myProjects[2]?.link.server &&
                                    <a className="m-2" href={ myProjects[2]?.link.server} title="Server Code"> <span
                                        className=""><i className="fa fa-github"></i></span></a>
                                }
                            </span>
                        </div>
                    </div>
                </div>


            </header>
        </div>
    );
};

export default BestProject;