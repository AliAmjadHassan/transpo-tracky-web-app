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
  Button
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
                      <th>Active status</th>
                      <th>Bus Capacity</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Millat</td>
                      <td>
                        <AppSwitch
                          className={"mx-1"}
                          variant={"3d"}
                          outline={"alt"}
                          color={"primary"}
                          defaultChecked
                          label
                        />
                      </td>
                      <td>72 </td>
                      <td>
                        <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                          <Button block color="ghost-success">
                            View
                          </Button>
                        </Col>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>abc</td>
                      <td>
                        <AppSwitch
                          className={"mx-1"}
                          variant={"3d"}
                          outline={"alt"}
                          color={"primary"}
                          defaultChecked
                          label
                        />
                      </td>
                      <td>
                       60
                      </td>
                      <td>
                        <Col col="3" sm="4" md="1" xl className="mb-3 mb-xl-0">
                          <Button block color="ghost-success">
                            View
                          </Button>
                        </Col>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Gulshan Ravi-Comsats</td>
                      <td>
                        <AppSwitch
                          className={"mx-1"}
                          variant={"3d"}
                          outline={"alt"}
                          color={"primary"}
                          label
                        />
                      </td>
                      <td>
                       35
                      </td>
                      <td>
                        <Row>
                          <Col col="1" md="">
                            <Button block color="ghost-secondary">
                              Update
                            </Button>
                          </Col>
                          <Col col="3" md="6">
                            <Button block color="ghost-danger">
                              Delete
                            </Button>
                          </Col>
                        </Row>
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
