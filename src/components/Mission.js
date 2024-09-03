import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { join, leave } from '../redux/missions/missionSlice';

const Mission = (props) => {
  const {
    mission, description, id, reserved,
  } = props;
  const dispatch = useDispatch();
  const missionJoin = (id) => {
    dispatch(join(id));
  };

  const missionLeave = (id) => {
    dispatch(leave(id));
  };
  return (
    <tr>
      <td>{mission}</td>
      <td>{description}</td>
      <td className="wide-td">
        <span
          className="member-span"
          style={{
            color: 'white',
            backgroundColor: reserved ? '#47a6a5' : '#777',
            border: 'none',
            borderRadius: '3px',
            cursor: 'default',
            padding: '3px',
          }}
        >
          {reserved ? 'Active Member' : 'Not a Member'}
        </span>
      </td>
      <td className="wide-td">
        {reserved
          ? (
            <button
              type="button"
              onClick={() => missionLeave(id)}
              style={{
                border: '1px solid red',
                backgroundColor: 'transparent',
                color: 'red',
                padding: '5px',
                borderRadius: '4px',
              }}
            >
              Leave Mission
            </button>
          )
          : (
            <button
              type="button"
              onClick={() => missionJoin(id)}
              style={{
                border: '1px solid black',
                backgroundColor: 'transparent',
                color: 'black',
                padding: '5px',
                borderRadius: '4px',
              }}
            >
              Join Mission
            </button>
          )}
      </td>
    </tr>
  );
};
Mission.propTypes = {
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
