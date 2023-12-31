

const InstructorCard = ({instructor}) => {
    // console.log(instructor);
    const {picture,name,email} = instructor;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Name: {name}</h2>
          <p> Email: {email}</p>
     
        </div>
      </div>
    );
};

export default InstructorCard;