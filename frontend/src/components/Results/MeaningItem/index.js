const MeaningItem = ({ meanings }) => {
  return (
    <>
      {meanings.map(meaning => (
        <div key={meaning.partOfSpeech}>
          <b>Part of speech:</b><br /><br /> {" " + meaning.partOfSpeech}
          <br /><br />
          {meaning.definitions?.map(definition => (
            <div key={definition.definition}>
              <b>Definition:</b>
              <p>{definition.definition}</p>
              <b>Example:</b>
              <br />
              <p>{definition.example}</p>
            </div>
          ))}
        </div>
      ))}
    </>
  )
}

export default MeaningItem
