import {
  CardContainer,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
  CardPrice,
  CardProductName
} from "./styles/Card";
import Button from "./Button";
const Card = ({ src, price, productName }) => {
  return (
    <CardContainer width="500px">
      <CardImage src={src} />
      <CardBody>
        <CardPrice>{price}</CardPrice>
        <CardProductName>{productName}</CardProductName>
        <Button />
      </CardBody>
    </CardContainer>
  );
};
export default Card;
