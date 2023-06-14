
const SingleClass = ({ course }) => {
    // console.log(course);
    const {picture,classType,availableSeats,price} = course
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="picture" className="rounded-xl object-cover h-96 w-full " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{classType}</h2>
                    <p>AvailableSeats: {availableSeats}</p>
                    <p className="font-semibold">price: <span className="text-yellow-600">${price}</span></p>
             
                </div>
            </div>
        </div>
    );
};

export default SingleClass;