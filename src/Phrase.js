import deleteImg from "./delete.jpg";
const Phrase = ({ phrases, index, handleChange, handleDelete }) => {
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
      <button className="delete">
        <img src={deleteImg} alt="delete" onClick={() => handleDelete(index)} />
      </button>
    </div>
  );
};

export default Phrase;
