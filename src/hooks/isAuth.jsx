import axios from 'axios';

// login dan Register
export default function useAuth() {
   const auth = async (url, body) => {
      try {
         const res = await axios.post(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/${url}`, body, {
            headers: {
               apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
            },
         });
         localStorage.setItem('token', res.data.token);
         return res;
      } catch (error) {
         return error;
      }
   };

   return { auth };
}
