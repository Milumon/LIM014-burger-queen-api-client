import React from 'react';
import { Link } from 'react-router-dom';


function Home(props) {
    return (
        <>  
            <div className="container">
                <div className="container-sm">
                    <div className="row">
                        <div className="col-md-6">
                            <form>
                                <div className="mt-5 mb-3 col-auto">
                                <label for="exampleFormControlInput1" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div className="mt-5 mb-3 col-auto">
                                    <div className="row"> 
                                    <div className="col-sm-6">
                                            <img src="..." className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <Link to="#" class="btn btn-primary">Go somewhere</Link>

                                            </div>
                                    </div>
                                    <div className="col-sm-6">
                                            <img src="..." className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <Link to="#" class="btn btn-primary">Go somewhere</Link>

                                            </div>
                                    </div>
                                    <div className="col-sm-6">
                                            <img src="..." className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <Link to="#" class="btn btn-primary">Go somewhere</Link>

                                            </div>
                                    </div>
                                    <div className="col-sm-6">
                                            <img src="..." className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <Link to="#" class="btn btn-primary">Go somewhere</Link>

                                            </div>
                                    </div>
                                        
                                    </div>
 
                                </div> 
                                
                            </form>
                        </div>
                        <div className="col-md-6">
                        2 of 2
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;