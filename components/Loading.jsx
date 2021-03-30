import Image from 'next/image';
import { FoldingCube } from 'better-react-spinkit';
const Loading = () => {
  return (
    <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <div>
        <Image
          src="/logo.png"
          alt="logo"
          height="250"
          width="300"
          style={{ marginBottom: 10 }}
        />
        <FoldingCube size={100} />
      </div>
    </center>
  );
};

export default Loading;
