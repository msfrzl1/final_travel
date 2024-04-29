import { useDispatch } from 'react-redux';
import { closeModal } from '../../../features/modalLogoutSlice';
import useAuth from '../../../hooks/isAuth';
import { useNavigate } from 'react-router-dom';

export default function ModalLogout() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { usersAuth } = useAuth();

   const handleLogout = async () => {
      await usersAuth('logout');
      dispatch(closeModal());
      navigate('/login');
   };

   return (
      <div
         className='modal fade show'
         style={{ display: 'block' }}
         tabIndex='-1'
      >
         <div className='modal-dialog modal-dialog-centered'>
            <div className='modal-content'>
               <div className='modal-header'>
                  <h5 className='modal-title'>Konfirmasi</h5>
                  <button
                     type='button'
                     className='btn-close'
                     aria-label='Close'
                     onClick={() => dispatch(closeModal())}
                  ></button>
               </div>
               <div className='modal-body'>
                  <p>Apakah Anda yakin ingin keluar?</p>
               </div>
               <div className='modal-footer'>
                  <button
                     onClick={handleLogout}
                     type='button'
                     className='btn btn-danger'
                  >
                     Confirm
                  </button>
                  <button
                     type='button'
                     className='btn btn-secondary'
                     onClick={() => dispatch(closeModal())}
                  >
                     Cancel
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
