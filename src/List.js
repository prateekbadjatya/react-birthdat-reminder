import React from "react";

// const List = (props) => {
const List = ({ persons }) => {
  return (
    <>
      {persons.map(person => {
        return (
          <div key={person.id} className="person">
            <img src={person.image} alt={person.name} />
            <h4>
              {person.name} <p>{person.age}</p>
            </h4>
          </div>
        );
      })}
    </>
  );
};

export default List;
