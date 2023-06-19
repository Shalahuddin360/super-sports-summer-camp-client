import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const PaymentHistory = () => {
    const { data: payment = [] } = useQuery(['payments'], async () => {
        const res = await fetch('http://localhost:5000/payments');
        return res.json();

    })
    return (
        <div className='w-full'>

            <SectionTitle subHeading={"looking now"} heading={"Payment History"}></SectionTitle>
            <div className="overflow-x-auto w-full h-[500px] overflow-y-scroll scroll-smooth">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>TransactionId</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payment.map((ph,index)=>   <tr
                            
                                key={ph._id}>

                                <td>{index +1}</td>
                                <td>{ph.email}</td>
                                <td>{ph.transactionId}</td>
                                <td>{ph.price}</td>
                                <td>{ph.date}</td>
    
                            </tr>)
                        }
                     
                   
                   
                 
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default PaymentHistory;