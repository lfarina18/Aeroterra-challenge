
import { useState } from 'react';
import { Form } from '../ui/Form';
import { MapPage } from './MapPage';

export const Home = () => {

  const [formValues, setFormValues] = useState({})


  return (
    <>
      <div className="flex flex-row gap-3 items-center">
        <div className="basis-1/3">
          <Form setFormValues={setFormValues} values={formValues} />
        </div>
        <div className="basis-2/3">
          <MapPage formVal={formValues} />
        </div>
      </div>
    </>
  );
};
