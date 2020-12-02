import React from 'react';
//dbshajdbaskdnbaskjdas
function CardItem(props) {
  return (
    <>

      <li className="cards--item">
        <div className="cards--item--link" to={props.path}>
          <figure className="cards--item--pic-wrap" data-category={props.label}>
            <img src={props.src} className="cards--item--img" alt="main" />
          </figure>
          <div className="cards--item--info">
            <h5 className="cards--item--text">{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  )
}

export default CardItem
