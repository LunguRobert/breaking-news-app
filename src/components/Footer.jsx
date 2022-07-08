import React from 'react'

function Footer() {
  return (

      <footer className="bg-dark text-center text-white">

        <div className="container p-4">

          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input type="email" id="form5Example21" className="form-control" />
                    <label className="form-label" htmlFor="form5Example21">Email address</label>
                  </div>
                </div>

              </div>
            </form>
          </section>

        </div>

        <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
          <a className="text-white" href="#">Lungu Robert 2022</a>
        </div>

      </footer>
      
  )
}

export default Footer