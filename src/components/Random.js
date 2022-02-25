function getRandomNumber(min, max) {
  let randomNum = Math.floor(Math.random() * (max - min) + min);
  return randomNum;
}

function Random({ min, max }) {
  return (
    <>
      <p>
        random value between {max} and {min} = {getRandomNumber(min, max)}{' '}
      </p>
    </>
  );
}

export default Random;
