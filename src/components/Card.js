import { Button } from "react-bootstrap";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

function Card() {
  const [hitung, setHitung] = useState(0);
  const [show, setShow] = useState(false);

  const addHitung = () => {
    setHitung(hitung + 1);
  };

  const minHitung = () => {
    setHitung(hitung - 1);
  };

  return (
    <div className="container">
      <div className="editcard">
        <h1>Produk</h1>
        <br />
        <div className="container">
          <div className="row">
            <div className="col">
              <div class="card" style={{ width: "20rem" }}>
                <img
                  src="https://4.bp.blogspot.com/-DmlAQSh-abM/WGL5J3lRgLI/AAAAAAAABDw/GT8ih0vAblwJw5FcTSTUW4UDk0-KZClpQCLcB/s1600/ebook%2Bdownload%2Bsatanic%2Bfinance%2Bpdf.jpg"
                  class="card-img-top"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's conten.
                  </p>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i class="fa-solid fa-cart-shopping"> Beli</i>
                  </button>
                  {/* modal */}
                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Modal title
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <h1>Beli</h1>
                          <p>{hitung}</p>
                          <Button onClick={addHitung} variant="warning">
                            Add
                          </Button>
                          {""}
                          <Button onClick={minHitung} variant="danger">
                            Min
                          </Button>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <Button onClick={() => setShow(true)}>
                            Beli <i class="fa-solid fa-cart-shopping"></i>
                          </Button>
                          <Toast
                            onClose={() => setShow(false)}
                            show={show}
                            delay={3000}
                            autohide
                          >
                            <Toast.Header>
                              <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                              />
                              <strong className="me-auto">
                                Argosy Bookstore
                              </strong>
                              <small>Baru Saja</small>
                            </Toast.Header>
                            <Toast.Body>
                              Terima Kasih Telah Membeli Buku Di Toko Kami!!
                            </Toast.Body>
                          </Toast>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card" style={{ width: "20rem" }}>
                <img
                  src="https://www.bukukita.com/babacms/displaybuku/116798_f.jpg"
                  class="card-img-top"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's conten.
                  </p>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i class="fa-solid fa-cart-shopping"> Beli</i>
                  </button>
                  {/* modal */}
                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Modal title
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <h1>Beli</h1>
                          <p>{hitung}</p>
                          <Button onClick={addHitung} variant="warning">
                            Add
                          </Button>
                          {""}
                          <Button onClick={minHitung} variant="danger">
                            Min
                          </Button>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <Button onClick={() => setShow(true)}>
                            Beli <i class="fa-solid fa-cart-shopping"></i>
                          </Button>
                          <Toast
                            onClose={() => setShow(false)}
                            show={show}
                            delay={3000}
                            autohide
                          >
                            <Toast.Header>
                              <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                              />
                              <strong className="me-auto">
                                Argosy Bookstore
                              </strong>
                              <small>Baru Saja</small>
                            </Toast.Header>
                            <Toast.Body>
                              Terima Kasih Telah Membeli Buku Di Toko Kami!!
                            </Toast.Body>
                          </Toast>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card" style={{ width: "20rem" }}>
                <img
                  src="https://pts.com.my/assets/book_cover/_hires/50_Misteri.jpg"
                  class="card-img-top"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's conten.
                  </p>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i class="fa-solid fa-cart-shopping"> Beli</i>
                  </button>
                  {/* modal */}
                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Modal title
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <h1>Beli</h1>
                          <p>{hitung}</p>
                          <Button onClick={addHitung} variant="warning">
                            Add
                          </Button>
                          {""}
                          <Button onClick={minHitung} variant="danger">
                            Min
                          </Button>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <Button onClick={() => setShow(true)}>
                            Beli <i class="fa-solid fa-cart-shopping"></i>
                          </Button>
                          <Toast
                            onClose={() => setShow(false)}
                            show={show}
                            delay={3000}
                            autohide
                          >
                            <Toast.Header>
                              <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                              />
                              <strong className="me-auto">
                                Argosy Bookstore
                              </strong>
                              <small>Baru Saja</small>
                            </Toast.Header>
                            <Toast.Body>
                              Terima Kasih Telah Membeli Buku Di Toko Kami!!
                            </Toast.Body>
                          </Toast>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
            </div>
            <div className="col">
              <div class="card" style={{ width: "20rem" }}>
                <img
                  src="https://2.bp.blogspot.com/-wAJoFgyODuA/Vguc9s8gnLI/AAAAAAAAARg/jIsScxMJK98/s1600/MISTERI%2BALTER%2BEGO%2BDPN.jpg"
                  class="card-img-top"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's conten.
                  </p>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i class="fa-solid fa-cart-shopping"> Beli</i>
                  </button>
                  {/* modal */}
                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Modal title
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <h1>Beli</h1>
                          <p>{hitung}</p>
                          <Button onClick={addHitung} variant="warning">
                            Add
                          </Button>
                          {""}
                          <Button onClick={minHitung} variant="danger">
                            Min
                          </Button>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <Button onClick={() => setShow(true)}>
                            Beli <i class="fa-solid fa-cart-shopping"></i>
                          </Button>
                          <Toast
                            onClose={() => setShow(false)}
                            show={show}
                            delay={3000}
                            autohide
                          >
                            <Toast.Header>
                              <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                              />
                              <strong className="me-auto">
                                Argosy Bookstore
                              </strong>
                              <small>Baru Saja</small>
                            </Toast.Header>
                            <Toast.Body>
                              Terima Kasih Telah Membeli Buku Di Toko Kami!!
                            </Toast.Body>
                          </Toast>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card" style={{ width: "20rem" }}>
                <img
                  src="https://pts.com.my/assets/book_cover/_hires/hitler_31_cover.jpg"
                  class="card-img-top"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's conten.
                  </p>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i class="fa-solid fa-cart-shopping"> Beli</i>
                  </button>
                  {/* modal */}
                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Modal title
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <h1>Beli</h1>
                          <p>{hitung}</p>
                          <Button onClick={addHitung} variant="warning">
                            Add
                          </Button>
                          {""}
                          <Button onClick={minHitung} variant="danger">
                            Min
                          </Button>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <Button onClick={() => setShow(true)}>
                            Beli <i class="fa-solid fa-cart-shopping"></i>
                          </Button>
                          <Toast
                            onClose={() => setShow(false)}
                            show={show}
                            delay={3000}
                            autohide
                          >
                            <Toast.Header>
                              <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                              />
                              <strong className="me-auto">
                                Argosy Bookstore
                              </strong>
                              <small>Baru Saja</small>
                            </Toast.Header>
                            <Toast.Body>
                              Terima Kasih Telah Membeli Buku Di Toko Kami!!
                            </Toast.Body>
                          </Toast>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card" style={{ width: "20rem" }}>
                <img
                  src="https://1.bp.blogspot.com/-pNK0Mg2_4Cc/VOSTdGZiGaI/AAAAAAAAAL4/2gwTOQRHpq8/s1600/petrus.jpg"
                  class="card-img-top"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's conten.
                  </p>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i class="fa-solid fa-cart-shopping"> Beli</i>
                  </button>
                  {/* modal */}
                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Modal title
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <h1>Beli</h1>
                          <p>{hitung}</p>
                          <Button onClick={addHitung} variant="warning">
                            Add
                          </Button>
                          {""}
                          <Button onClick={minHitung} variant="danger">
                            Min
                          </Button>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <Button onClick={() => setShow(true)}>
                            Beli <i class="fa-solid fa-cart-shopping"></i>
                          </Button>
                          <Toast
                            onClose={() => setShow(false)}
                            show={show}
                            delay={3000}
                            autohide
                          >
                            <Toast.Header>
                              <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                              />
                              <strong className="me-auto">
                                Argosy Bookstore
                              </strong>
                              <small>Baru Saja</small>
                            </Toast.Header>
                            <Toast.Body>
                              Terima Kasih Telah Membeli Buku Di Toko Kami!!
                            </Toast.Body>
                          </Toast>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Card;
