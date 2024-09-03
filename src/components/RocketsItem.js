import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import '../modules/RocketsItem.css';
import { reserveRocket } from '../redux/Rockets/RocketsSlice';

const RocketsItem = ({
  id, name, image, description, reserved,
}) => {
  const dispatch = useDispatch();
  const reserveRockets = (buttonId) => {
    dispatch(reserveRocket(buttonId));
  };
  return (
    <li className="rocket-content">
      <img className="rocket-content-right" alt="rocket" src={image} style={{ width: '250px' }} />
      <div className="rocket-content-left">
        <p className="rocket-name">{name}</p>
        <p className="rocket-desc">
          { reserved && <span className="reserved">Reserved</span>}
          {description}

        </p>
        <button
          onClick={() => reserveRockets(id)}
          className={reserved ? 'cancel-reserve-btn' : 'reserve-rocket-btn'}
          type="submit"
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </li>

  );
};

RocketsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketsItem;
