import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { Table } from 'react-bootstrap';
import { fetchMissions } from '../redux/missions/missionSlice';
import Mission from './Mission';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const status = useSelector((state) => state.missions.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMissions());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  } if (status === 'succeeded') {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="mission-name">Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission
              key={nanoid()}
              id={mission.mission_id}
              mission={mission.mission_name}
              description={mission.description}
              reserved={mission.reserved}
            />
          ))}
        </tbody>
      </Table>
    );
  } if (status === 'failed') {
    return <div>Error loading missions.</div>;
  }

  return null;
}

export default Missions;
