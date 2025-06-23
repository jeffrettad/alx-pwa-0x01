const MovieCard: React.FC = () => {
    return(
        <div className= "bg-white shadow-md rounded p-4">
            <div className= "h-48 bg-gray-200 mb-4"/>
            <h3 className= "text-lg font-bold"> Movie Title</h3>
            <p className= "text-sm text-gray-600"> Movie Description</p>
        </div>
    );
};
export default MovieCard;