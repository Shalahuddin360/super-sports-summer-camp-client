
import { useParams } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
// TODO:provide 
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const {price} = useParams()
    console.log(price)
    return (
        <div className='w-full'>
            <SectionTitle subHeading={"please proceed"} heading={"payment"}></SectionTitle>
            <h2 className='text-3xl ml-8'>Payment</h2>
            <Elements stripe={stripePromise}>
            <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;