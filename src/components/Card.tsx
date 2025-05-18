
import '../styles.css';
import Rooms, { Room } from '../Rooms';

interface CardProps { //1. 선택적인 props 정의
  item?: Room;
}

export default function Card({ item = Rooms[0] }: CardProps) { //2. 기본 props지정
  return (
    <div className="container">
      <div className="box image">
        <img src={item.image} className="boximage" alt={item.name} />
      </div>
      <div className="box">
        <div className="location">{item.location}에 위치</div>
        <div className="title">{item.name}</div>
        <hr />
        <div className="guest">최대인원{item.totalGuest} 명</div>
        <div className="rating">
          평점: {item.rating}{' '}
          <span className="visits">({item.numberOfRating})</span>
        </div>
        <div className="price">
          {item.price} 원<span className="month">/ month</span>
        </div>
      </div>
    </div>
  );
}
