import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
const useSelect = ()=>{
    const {user} = useContext(AuthContext);
    const { refetch , data : selectClass =[]} = useQuery({
        queryKey: ['select',user?.email],
      
        queryFn:async ()=>{
            const res = await fetch(`http://localhost:5000/select?email=${user?.email}`)
            return res.json();
        },

      })
      return [selectClass,refetch]
}
export default useSelect