import Image from 'next/image';

const Loading = () => {
  return (
    <center>
      <div>
        <Image
          src="/logo.png"
          alt="logo"
          height="250"
          width="300"
          style={{ marginBottom: 10 }}
        />
      </div>
    </center>
  );
};

export default Loading;
