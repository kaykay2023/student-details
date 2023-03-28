import React from 'react';
import Student from './StudentDetails';

function StudentDetails(props) {
  const { students } = props;

  return (
    <>
      {students.map((student, index) => (
        <Student key={index} student={student} />
      ))}
    </> 
  );
}




export default StudentDetails;


// function Student(props) {
//   const { name, bio, scores } = props.student;

//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>{bio}</p>
//       <h3>Scores:</h3>
//       {scores.map((score, index) => (
//         <Score key={index} date={score.date} score={score.score} />
//       ))}
//     </div>
//   );
// }

