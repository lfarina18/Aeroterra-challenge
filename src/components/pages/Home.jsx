import { useEffect, useReducer } from 'react';
import { polReducer } from '../../reducers/polReducer';
import { PolList } from '../PolList';
import { Form } from '../ui/Form';
import { MapPage } from './MapPage';

const init = () => {
  return JSON.parse(localStorage.getItem('pol')) || [];
};

export const Home = () => {
  const [pol, dispatch] = useReducer(polReducer, [], init);

  useEffect(() => {
    localStorage.setItem('pol', JSON.stringify(pol));
  }, [pol]);

  const handleDelete = (polId) => {
    const action = {
      type: 'delete',
      payload: polId,
    };
    dispatch(action);
  };

  const handleAddPol = (newPol) => {
    dispatch({
      type: 'add',
      payload: newPol,
    });
  };

  return (
    <>
      <div className="block lg:flex lg:flex-row gap-1">
        <div className="md:basis-1/3 mb-10">
          <Form handleAddPol={handleAddPol} />
        </div>
        <div className="md:basis-2/3 mx-3">
          <MapPage formVal={pol} />
        </div>
      </div>
      <PolList handleDelete={handleDelete} pol={pol} />
    </>
  );
};
