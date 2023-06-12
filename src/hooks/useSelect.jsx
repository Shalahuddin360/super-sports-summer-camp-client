import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'

const useSelect = ()=>{

    const {user,loading} = useContext(AuthContext);
    const token = localStorage.getItem('access-token')
   
    const { refetch , data : selectClass =[]} = useQuery({
        queryKey: ['select',user?.email],
        enabled: !loading,
        queryFn:async ()=>{
            const res = await fetch(`http://localhost:5000/select?email=${user?.email}`,{
                headers :{
                    authorization :`bearer ${token}`
                }
            })
            return res.json();
        },
   

      })
      return [selectClass,refetch]
}
export default useSelect