

const CourseCard = ({course}) => {
    const {picture,name,classType,availableSeats,price} = course
    return (
        <div className="card w-96 bg-base-100 shadow-2xl mx-auto  ">
            <figure><img src={picture} alt="picture" className="h-96 object-cover rounded-lg w-full p-4" /></figure>
            <div className="card-body">
                <h2 className="card-title">Class: {classType}</h2>
                <p className="font-semibold">Instructor Name :{name}</p>
                <p className="font-semibold">Available Seats: {availableSeats}</p>
                <p className="font-semibold">price: <span className="text-yellow-600">${price}</span></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-600 rounded-md text-slate-600">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;