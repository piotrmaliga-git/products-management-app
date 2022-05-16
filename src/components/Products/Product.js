import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = ({
  id,
  campaignName,
  keywords,
  bidAmount,
  campaignFund,
  status,
  town,
  radius,
  handleRemoveProduct,
}) => {
  const navigate = useNavigate();

  return (
    <Card style={{ width: '18rem' }} className="product">
      <Card.Body>
        <Card.Title className="product-title">{campaignName}</Card.Title>
        <div className="product-details">
          <div>Keywords: {keywords}</div>
          <div>Bid amount: {bidAmount} </div>
          <div>Campaign fund: {campaignFund} </div>
          <div>Status: {status} </div>
          <div>Town: {town} </div>
          <div>Radius: {radius} </div>
        </div>
        <Button variant="primary" onClick={() => navigate(`/edit/${id}`)}>
          Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveProduct(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
