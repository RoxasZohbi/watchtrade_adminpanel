import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';

import { Link  } from 'react-router-dom';
import Axios from "../AxiosService";
import Moment from 'react-moment';
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  Table,
} from "react-bootstrap";
function ProductManage(props) {
  const [product, setProduct] = useState({
    "userId": "", "name": "", "brand": "", "modelNo":"", "bidHistory": []
  });

  useEffect(() => {    
    Axios.get('/products/?_id='+props.match.params.id)
        .then(async response => {
          console.log(response.data)
          setProduct(response.data[0])
        })
        .catch(error => {
            // this.setState({ errorMessage: error.toString() });
            // console.error('There was an error!', error);
        });
  }, []);
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Product</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Product Owner</label>
                        <Form.Control
                          value={product.userId}
                          disabled
                          placeholder="Product Owner"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1"> Name </label>
                        <Form.Control placeholder="Name" value={product.name} type="text"
                          onChange={(e)=>setProduct({name:e.targer.value})}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1"> Brand </label>
                        <Form.Control placeholder="Brand" value={product.brand} type="text"
                          onChange={(e)=>setProduct({brand:e.targer.value})}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1"> Model Number </label>
                        <Form.Control placeholder="Model Number" value={product.modelNo} type="text"
                          onChange={(e)=>setProduct({modelNo:e.targer.value})}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>About Me</label>
                        <CKEditor
                            editor={ ClassicEditor }
                            data={product.description}
                            config={{
                              // Enable the "Insert image" button in the toolbar.
                              // toolbar: [ 'uploadImage'],
                              ckfinder: {
                                  // Upload the images to the server using the CKFinder QuickUpload command.
                                  uploadUrl: 'https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json'
                              }
                          } }
                            onReady={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                console.log( { event, editor, data } );
                            } }
                            // onBlur={ ( event, editor ) => {
                            //     console.log( 'Blur.', editor );
                            // } }
                            // onFocus={ ( event, editor ) => {
                            //     console.log( 'Focus.', editor );
                            // } }
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Update Profile
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Bid History</Card.Title>
                <p className="card-category">  </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">S.No</th>
                      <th className="border-0">User</th>
                      <th className="border-0">Time</th>
                      <th className="border-0">Amount</th>
                      <th className="border-0">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                  {product.bidHistory.map((bid, index) =>(
                    <tr key={"bid"+index}>
                      <td>{index+1}</td>
                      <td>{bid.userId}</td>
                      <td>
                        <Moment format="MM/DD/YYYY hh:mm:ss">{bid.bidTime}</Moment>
                      </td>
                      <td>${bid.bidAmount}</td>
                      <td>{bid.status}</td>
                      
                    </tr>
                  ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductManage;
