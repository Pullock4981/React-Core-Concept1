

const Castomer = ({castomer}) => {
    return (
        <div className="student">
            <p>Castomer_ID: {castomer.id}</p>
            <h3>Castomer Name: {castomer.name}</h3>
            castomer age: {castomer.age}
        </div>
    );
};

export default Castomer;