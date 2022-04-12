import { Form } from '../ui/Form';
import { MapPage } from './MapPage';

export const Home = () => {
  return (
    <>
      <div className="flex flex-row gap-3 items-center">
        <div className="basis-1/3">
          <Form />
        </div>
        <div className="basis-2/3">
          <MapPage />
        </div>
      </div>
    </>
  );
};
