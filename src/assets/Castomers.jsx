import Castomer from "./Castomer";


const Castomers = ({castomers}) => {
    return (
        <div className="task">
            <h3 className="task">Castomers: {castomers.length}</h3>
            {
                castomers.map(castomer=><Castomer castomer={castomer}></Castomer>)
            }
        </div>
    );
};

export default Castomers;