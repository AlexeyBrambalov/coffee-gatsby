import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              temporibus, quod quos at aliquam maiores, quibusdam dolore sint
              modi porro eligendi praesentium, neque asperiores ipsam.
              Accusamus, iure distinctio? Vel nam quisquam officia quibusdam
              perspiciatis eum quae laboriosam expedita dolor minima?
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
