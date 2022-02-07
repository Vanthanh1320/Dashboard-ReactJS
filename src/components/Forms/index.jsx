import React from "react";

function Forms() {
  return (
    <section  className="forms show" data-index="1">
      <h2  className="title">Forms</h2>

      <div  className="forms-head bor-shaw">
        <div  className="forms-header">
          <h2  className="heading__name">Form group in grid</h2>
        </div>
        <div  className="forms-body">
          <div  className="row">
            <div  className="col l-4 m-4 c-12">
              <div  className="forms-group">
                <label  className="forms-label"  >
                  One of three cols
                </label>
                <input
                  type="text"
                   className="form-controll"
                  placeholder="One of three cols"
                />
              </div>
            </div>

            <div  className="col l-4 m-4 c-12">
              <div  className="forms-group">
                <label  className="forms-label"  >
                  One of three cols
                </label>
                <input
                  type="text"
                   className="form-controll"
                  placeholder="One of three cols"
                />
              </div>
            </div>

            <div  className="col l-4 m-4 c-12">
              <div  className="forms-group">
                <label  className="forms-label"  >
                  One of three cols
                </label>
                <input
                  type="text"
                   className="form-controll"
                  placeholder="One of three cols"
                />
              </div>
            </div>
          </div>

          <div  className="row">
            <div  className="col l-3 m-3 c-12">
              <div  className="forms-group">
                <label  className="forms-label"  >
                  One of four cols
                </label>
                <input
                  type="text"
                   className="form-controll"
                  placeholder="One of four cols"
                />
              </div>
            </div>

            <div  className="col l-3 m-3 c-12">
              <div  className="forms-group">
                <label  className="forms-label"  >
                  One of four cols
                </label>
                <input
                  type="text"
                   className="form-controll"
                  placeholder="One of four cols"
                />
              </div>
            </div>

            <div  className="col l-3 m-3 c-12">
              <div  className="forms-group">
                <label  className="forms-label"  >
                  One of four cols
                </label>
                <input
                  type="text"
                   className="form-controll"
                  placeholder="One of four cols"
                />
              </div>
            </div>

            <div  className="col l-3 m-3 c-12">
              <div  className="forms-group">
                <label  className="forms-label"  >
                  One of four cols
                </label>
                <input
                  type="text"
                   className="form-controll"
                  placeholder="One of four cols"
                />
              </div>
            </div>
          </div>

          <div  className="row">
            <div  className="col l-6 m-6 c-12">
              <div  className="forms-group">
                <label  className="forms-label"  >
                  One of two cols
                </label>
                <input
                  type="text"
                   className="form-controll"
                  placeholder="One of two cols"
                />
              </div>
            </div>

            <div  className="col l-6 m-6 c-12">
              <div  className="forms-group">
                <label  className="forms-label"  >
                  One of two cols
                </label>
                <input
                  type="text"
                   className="form-controll"
                  placeholder="One of two cols"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  className="forms-html">
        <div  className="row">
          <div  className="col l-6 m-6 c-12">
            <div  className="forms-item bor-shaw">
              <div  className="forms-header">
                <h2  className="heading__name">HTML 5 inputs</h2>
              </div>

              <div  className="forms-body">
                <form action=""  className="form">
                  <div  className="forms-group">
                    <label  className="forms-label col-md-2"  >
                      Text
                    </label>
                    <input
                      type="text"
                       className="form-controll col-md-10"
                      placeholder="Text"
                    />
                  </div>

                  <div  className="forms-group">
                    <label  className="forms-label col-md-2"  >
                      Search
                    </label>
                    <input
                      type="text"
                       className="form-controll col-md-10"
                      placeholder="Search"
                    />
                  </div>
                  <div  className="forms-group">
                    <label  className="forms-label col-md-2"  >
                      Email
                    </label>
                    <input
                      type="text"
                       className="form-controll col-md-10"
                      placeholder="Email"
                    />
                  </div>
                  <div  className="forms-group">
                    <label  className="forms-label col-md-2"  >
                      Phone
                    </label>
                    <input
                      type="number"
                       className="form-controll col-md-10"
                      placeholder="Phone"
                    />
                  </div>
                  <div  className="forms-group">
                    <label  className="forms-label col-md-2"  >
                      Password
                    </label>
                    <input
                      type="password"
                       className="form-controll col-md-10"
                      placeholder="Password"
                    />
                  </div>
                  <div  className="forms-group">
                    <label  className="forms-label col-md-2"  >
                      Datetime
                    </label>
                    <input
                      type="datetime-local"
                       className="form-controll col-md-10"
                      placeholder="15/11/2021 11:30SA"
                    />
                  </div>
                </form>
              </div>
            </div>

            <div  className="forms-item bor-shaw">
              <div  className="forms-header">
                <h2  className="heading__name">Checkboxs and radios</h2>
              </div>

              <div  className="forms-body ">
                <div  className="forms-checkradio">
                  <label  className="forms-label"  >
                    Check box
                  </label>
                  <input type="checkbox"  className="form-controll col-md-2" />
                </div>

                <div  className="forms-checkradio">
                  <label  className="forms-label"  >
                    Check box
                  </label>
                  <input type="checkbox"  className="form-controll col-md-2" />
                </div>

                <div  className="forms-checkradio">
                  <label  className="forms-label"  >
                    Radio
                  </label>
                  <input type="radio"  className="form-controll col-md-2" />
                </div>

                <div  className="forms-checkradio">
                  <label  className="forms-label"  >
                    Radio
                  </label>
                  <input type="radio"  className="form-controll col-md-2" />
                </div>
              </div>
            </div>
          </div>

          <div  className="col l-6 m-6 c-12">
            <div  className="forms-item bor-shaw">
              <div  className="forms-header">
                <h2  className="heading__name">Text inputs</h2>
              </div>

              <div  className="forms-body">
                <div  className="forms-group">
                  <label  className="forms-label"  >
                    Basic textarea
                  </label>
                  <textarea rows="3"  className="form-controll"></textarea>
                </div>

                <div  className="forms-group">
                  <label  className="forms-label"  >
                    Unresizable textarea
                  </label>
                  <textarea
                     className="form-controll"
                    resize="none"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>

            <div  className="forms-item bor-shaw">
              <div  className="forms-header">
                <h2  className="heading__name">Select</h2>
              </div>

              <div  className="forms-body">
                <div  className="forms-group">
                  <label  className="forms-label"  >
                    Basic select
                  </label>
                  <select rows="3"  className="form-controll">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>

                <div  className="forms-group">
                  <label  className="forms-label"  >
                    Unresizable textarea
                  </label>
                  <select  className="form-controll" disabled>
                    <option value="1">1</option>
                  </select>
                </div>

                <div  className="forms-group">
                  <label  className="forms-label"  >
                    Unresizable textarea
                  </label>
                  <select  className="form-controll" multiple>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Forms;
