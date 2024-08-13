import PropTypes from 'prop-types';

const Movie = ({movie}) => {
    const{image}=movie;
    return (
        <div>
            <div className="max-w-lg p-4 shadow-md  dark:text-gray-800">
	<div className="flex justify-between pb-4 border-bottom">
		
		
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />

		</div>
		
	</div>
</div>
            
        </div>
    );
};

Movie.propTypes = {
    movie :PropTypes.object.isRequired
}

export default Movie;