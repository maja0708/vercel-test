function TestButton() {
  const handleClick = () => {
    console.log("Test text");
  };

  return (
    <button onClick={handleClick}>
      Klikni me
    </button>
  );
}

export default TestButton;
