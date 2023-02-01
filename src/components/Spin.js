import { ColorRing } from 'react-loader-spinner';
import { useSelector } from 'react-redux';

function Spin(props) {
  const spinner = useSelector((state) => {
    const { appReducer } = state;
    return appReducer.loading;
  });
  return (
    <div className="loader-styles">
      <ColorRing
        visible={spinner}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#000']}
      />
    </div>
  );
}

export default Spin;
