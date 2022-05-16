import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ProductForm = props => {
  const [product, setProduct] = useState({
    campaignName: props.product ? props.product.campaignName : '',
    keywords: props.product ? props.product.keywords : '',
    bidAmount: props.product ? props.product.bidAmount : '',
    campaignFund: props.product ? props.product.campaignFund : '',
    status: props.product ? props.product.status : '',
    town: props.product ? props.product.town : '',
    radius: props.product ? props.product.radius : '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const {
    campaignName,
    keywords,
    bidAmount,
    campaignFund,
    status,
    town,
    radius,
  } = product;

  const handleOnSubmit = event => {
    event.preventDefault();
    const values = [
      campaignName,
      keywords,
      bidAmount,
      campaignFund,
      status,
      town,
      radius,
    ];
    let errorMsg = '';

    const allFieldsFilled = values.every(field => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const product = {
        id: uuidv4(),
        campaignName,
        keywords,
        bidAmount,
        campaignFund,
        status,
        town,
        radius,
        date: new Date(),
      };
      props.handleOnSubmit(product);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'bidAmount':
        if (value === '' || parseInt(value) === +value) {
          setProduct(prevState => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case 'CampaignFund':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setProduct(prevState => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setProduct(prevState => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="campaignName">
          <Form.Label>Campaign name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="campaignName"
            value={campaignName}
            placeholder="..."
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="keywords">
          <Form.Label>Keywords</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="keywords"
            value={keywords}
            placeholder="..."
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="bidAmount">
          <Form.Label>Bid amount</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="bidAmount"
            value={bidAmount}
            placeholder="..."
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="campaignFund">
          <Form.Label>Campaign fund</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="campaignFund"
            value={campaignFund}
            placeholder="..."
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="status">
          <Form.Label>Status (on/off)</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="status"
            value={status}
            placeholder="..."
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="town">
          <Form.Label>Town</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="town"
            value={town}
            placeholder="..."
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="radius">
          <Form.Label>Radius</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="radius"
            value={radius}
            placeholder="..."
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ProductForm;
