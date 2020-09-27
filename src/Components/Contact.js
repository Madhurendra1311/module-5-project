import React from "react";

export default function Contact() {
    return (
        <div>
            <header className="container my-5 text-center border-bottom p-5">
                <h1 className="display-5 p-5 font-weight-normal">
                    Designed to do More
                </h1>
                <p className="lead">
                    Studio Proper is a boutique product design studio based in
                    Melbourne, Australia, focused on simplifying everyday
                    interactions with technology in a beautiful and minimal
                    fashion. Founded on the principal that good design should be
                    seamless; we designed a range of mounts, stands, and
                    accessories that fit cohesively in every use case with Apple
                    devices. Studio Proper currently offers mounting solutions
                    for the iPhone, iPad, and Apple Watch; featuring desk
                    stands, travel accessories, wall mounts, and more. As well
                    as a range of specialised Business Solutions designed to
                    simplify point of sale experiences and create seamless
                    customer interactions in retail, hospitality, and large
                    enterprise.
                </p>
            </header>
            <div className="container my-5 ">
                <div className="row">
                    <div className="col-md-4 col-12 p-5">
                        <h3>We are based in Melbourne, Australia</h3>
                    </div>
                    <div className="col-md-4 col-12 p-5 text-center">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your email"
                        />
                        <button className="btn btn-primary btn-block p-2 mt-3">
                            Subscribe
                        </button>
                    </div>
                    <div className="col-md-4 col-12 p-5 text-center">
                        <h5>Didn't find what you were looking for?</h5>
                        <button className="btn btn-primary btn-block p-2">
                            Submit a request
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}