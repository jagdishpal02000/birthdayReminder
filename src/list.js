const List = ({ peoples }) => {
  return (
    <>
      {peoples.map((people) => {
        const { id, name, age, image } = people;
        return (
          <article className="person">
            <img align="left" src={image} className="avtar" />
            <h4>{name}</h4>
            <p>{age}</p>
          </article>
        );
      })}
    </>
  );
};

export default List;
