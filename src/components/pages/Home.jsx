import { useState } from 'react';
import { Form } from '../ui/Form';
import { MapPage } from './MapPage';

export const Home = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <>
      <div className="block lg:flex lg:flex-row gap-1">
        <div className="md:basis-1/3 mb-10">
          <Form setFormValues={setFormValues} values={formValues} />
        </div>
        <div className="md:basis-2/3 mx-3">
          <MapPage formVal={formValues} />
        </div>
      </div>
    </>
  );
};
