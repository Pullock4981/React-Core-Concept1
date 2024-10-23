

const Singer = ({singer}) => {
    return (
        <div className="student">
            <h3>Name: {singer.name}</h3>
            <p>Age: {singer.age}</p>
        </div>
    );
};

export default Singer;