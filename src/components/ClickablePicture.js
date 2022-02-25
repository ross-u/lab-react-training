import { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  const [classInitial, setClassInitial] = useState(true);
  const [imgInitial, setImgInitial] = useState(img);

  const checkImage = () => {
    if (classInitial) {
      setImgInitial(imgClicked);
    } else {
      setImgInitial(img);
    }
  };

  return (
    <div>
      <img
        src={imgInitial}
        onClick={() => checkImage(setClassInitial(!classInitial))}
        alt="clickable"
      />
    </div>
  );
}

export default ClickablePicture;
