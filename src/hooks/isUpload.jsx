import axios from 'axios';

export default function useUpload() {
   const uploadImage = async (url, body) => {
      try {
         const res = await axios.post(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/${url}`, body, {
            headers: {
               apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
               Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NWE4MDNjMy1iNTFlLTQ3YTAtOTBkYi0yYzJmM2Y0ODE1YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzk4NDM0NDR9.ETsN6dCiC7isPReiQyHCQxya7wzj05wz5zruiFXLx0k`,
               'Content-Type': 'multipart/form-data',
            },
         });
         return res;
      } catch (error) {
         return error;
      }
   };
   return { uploadImage };
}
