import React, { Component } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row
} from "reactstrap";
class AddBus extends Component {
  state = {};
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>Add New Bus</strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Bus ID</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="number" id="bid" placeholder="Number" />
                      <FormText color="muted">Enter Bus ID Here</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Bus Plate Number</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="number" id="bPlate" placeholder="Number" />
                      <FormText color="muted">
                        Enter Bus Plate Number Here
                      </FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Manufacture Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="bManufactureName"
                        name="text-input"
                        placeholder="Name"
                      />
                      <FormText color="muted">
                        Enter Bus Manufacture Name Here
                      </FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Bus Model</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="bModel"
                        name="text-input"
                        placeholder="Model"
                      />
                      <FormText color="muted">Enter Bus Model Here</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Bus Type</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="bTyepe"
                        name="text-input"
                        placeholder="Bus-Tyepe"
                      />
                      <FormText color="muted">Enter Bus Type Here</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Bus Capacity</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="bCapacity"
                        placeholder="Number"
                      />
                      <FormText color="muted">
                        Enter Maximum Number of passengers possible
                      </FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="rModifiedDate">Bus Modified Date</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="date"
                        id="bModifiedDate"
                        name="date-input"
                        placeholder="Modified date"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Active Status</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="bActiveStatus">
                        <option value="0">Please select</option>
                        <option value="2">Active</option>
                        <option value="3">Not Active</option>
                      </Input>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AddBus;
