


const SingleClass = ({ course }) => {
    // console.log(course);
    const {picture,instructorName,classType,availableSeats,price} = course
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl object-cover h-96" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{classType}</h2>
                    <p>Instructor Name: {instructorName}</p>
                    <p>AvailableSeats: {availableSeats}</p>
                    <p>Course Price: {price}</p>
             
                </div>
            </div>
        </div>
    );
};

export default SingleClass;