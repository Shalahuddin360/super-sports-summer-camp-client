import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAdmin =()=>{
    const {user} = useContext(AuthContext)
    const {data : isAdmin} = useQuery({
        queryKey:['isAdmin',user?.email],
        queryFn: async ()=>{
          const res = await fetch(`http://localhost:5000/users?email=${user?.email}`);
          return res.json();
        }

    })
    
    return [isAdmin]

}
export default useAdmin;