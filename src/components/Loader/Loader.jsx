import { Rings } from 'react-loader-spinner';
import './Loader.css';

const Loader = () => {
  return (
    <div className="backdrop">
      <Rings
        height="100"
        width="100"
        color="#FF6C00"
        radius="6"
        wrapperStyle={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </div>
  );
};

export default Loader;
