import React, { Component } from "react";
import { AppSwitch } from "@coreui/react";

import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
  Button,
} from "reactstrap";

class ViewBus extends Component {
  state = {};
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <i className=""></i> <strong>Routes</strong>
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                    <tr>
                      <th>Bus Number</th>
                      <th>Manufacture Name</th>
                      <th>Bus Capacity</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>LEH-1596</td>
                      <td>Millat</td>
                      <td>72 </td>
                      <td>
                        <Col col="3" md="12">
                          <Button block color="ghost-success">
                            Edit
                          </Button>
                        </Col>
                      </td>
                    </tr>
                    <tr>
                      <td>LEP-1592</td>
                      <td>Milllat</td>
                      <td>60</td>
                      <td>
                        <Col col="3" md="12">
                          <Button block color="ghost-success">
                            Edit
                          </Button>
                        </Col>
                      </td>
                    </tr>
                    <tr>
                      <td>ALI-1234</td>
                      <td>Audi</td>
                      <td>35</td>
                      <td>
                        <Col col="3" md="12">
                          <Button block color="ghost-success">
                            Edit
                          </Button>
                        </Col>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem>
                      <PaginationLink previous tag="button">
                        Prev
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">4</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink next tag="button">
                        Next
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ViewBus;
