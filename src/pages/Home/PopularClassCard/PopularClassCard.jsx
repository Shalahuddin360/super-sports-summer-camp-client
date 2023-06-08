
const PopularClassCard = ({course}) => {
    // console.log(course)
    const {picture,classType,numberOfStudents} = course
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={picture} alt="picture" className="rounded-xl h-48 w-full p-2" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Class : {classType}</h2>
          <p>Enroll Of Students : {numberOfStudents}</p>
        </div>
      </div>
    );
};

export default PopularClassCard;