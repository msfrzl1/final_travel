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
         localStorage.setItem('user', JSON.stringify(res.data.data));
         return res;
      } catch (error) {
         return error;
      }
   };

   const usersAuth = async (url, callback) => {
      try {
         const res = await axios.get(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/${url}`, {
            headers: {
               apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
               Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
         });
         if (url === 'logout') {
            localStorage.clear();
            callback(res);
         } else {
            callback(res.data.data);
         }
      } catch (error) {
         return error;
      }
   };

   return { auth, usersAuth };
}
