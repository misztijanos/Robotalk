const Phrase = ({ phrases, index, handleChange }) => {
  return (
    <div className="phrase">
      <input
        className="num-input"
        type="number"
        onChange={(e) => handleChange(index, e)}
        value={phrases[index].time}
      />
      <input
        className="text-input"
        type="text"
        onChange={(e) => handleChange(index, e)}
        value={phrases[index].text}
      />
    </div>
  );
};

export default Phrase;
