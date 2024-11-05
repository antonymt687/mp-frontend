import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Landingpage() {

   const navigateByurl = useNavigate();

  return (
    <>
      <Row className="mt-5 align-items-center justify-content-between w-100">
        <Col></Col>
        <Col lg={5}>
          <h1 style={{ fontSize: "40px" }}> Welcome to <span className="text-warning">Media-Player</span></h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A asperiores fuga corporis dolor voluptatum perferendis, ut eaque aspernatur libero! Illum cupiditate quos esse dolorem, provident neque rerum sunt? Quidem, veritatis.
            Mollitia quod beatae nemo fuga laboriosam, nobis pariatur, eveniet labore repellat quos ut natus harum quae tempore incidunt expedita provident quis, culpa tenetur. Dolores voluptatem laboriosam similique quo, excepturi soluta.
            Suscipit magni at quis. Debitis odit fugit neque quos quisquam rem esse atque? Eos, fugiat possimus! Nam, nobis, enim expedita ad odio quidem minima facere aliquid, cupiditate distinctio et nesciunt!
            Fuga dolorum molestias ut vero nemo deleniti. Voluptatibus earmodi. Deserunt maxime voluptas veritatis aspernatur possimus rem. Enim minus tempore at molestiae expedita dicta rem earum non ratione est.
          </p>
          <button onClick={() => navigateByurl('/home')} className="btn btn-info mt-4">Get Started</button>
        </Col>
        <Col lg={5}>
          <img src="https://i.pinimg.com/originals/02/be/ef/02beef54af1eb68390b7e2ffc5c1e667.gif" alt="Media-Player GIF" />
        </Col>
        <Col></Col>
      </Row>

      <div className="container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column">
        <h3>Features</h3>
        <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.gifer.com/OpOK.gif" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.gifer.com/OpOK.gif" />
            <Card.Body>
              <Card.Title>Categorized Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.gifer.com/OpOK.gif" />
            <Card.Body>
              <Card.Title>Watch-History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w-100">
        <div className="col-lg-5">
          <h4 className="text-warning">Simple, Powerful & Fast</h4>
          <h6 className="mb-5 mt-3">
            <span className="text-warning fw-bolder">Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae at dolores maiores accusamus, neque mollitia iure voluptatum sed fugiat accusantium labore? Debitis ut modi vel. Sed magnam ducimus minus veniam! Aperiam dolor aspernatur.
          </h6>
          <h6 className="mb-5 mt-3">
            <span className="text-warning fw-bolder">Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae at dolores maiores accusamus, neque mollitia iure voluptatum sed fugiat accusantium labore? Debitis ut modi vel. Sed magnam ducimus minus veniam! Aperiam dolor aspernatur.
          </h6>
          <h6 className="mb-5 mt-3">
            <span className="text-warning fw-bolder">Managing Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae at dolores maiores accusamus, neque mollitia iure voluptatum sed fugiat accusantium labore? Debitis ut modi vel. Sed magnam ducimus minus veniam! Aperiam dolor aspernatur.
          </h6>
        </div>
        <div className="video col-lg-5">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/XR7Ev14vUh8?si=xXhmtyBDxheOtvyD"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
