function Score(props) {
  const { data } = props;

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <p>{item.bio}</p>
          
          <ul>
            {item.scores.map((score, index) => (
              <li key={index}>
                {score.date} - {score.score}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Score;
