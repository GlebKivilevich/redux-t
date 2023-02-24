import { ColorRing } from 'react-loader-spinner';
import { useSelector } from 'react-redux';

function Spin(props) {
  const { statusComm } = useSelector((state) => state.comments);
  return (
    <div className="loader-styles">
      <ColorRing
        visible={statusComm === "loading" ? true || statusComm === "idle" : false }
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
