import './Card.css'
const Card = ({ item }) => {
    return (
      <div className="card-body">
    
        <img className="multi__image_card" src={item} alt="" />

      </div>
    );
    };

    export default Card;