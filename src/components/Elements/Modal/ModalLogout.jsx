import { useDispatch } from 'react-redux';
import { closeModal } from '../../../features/modalLogoutSlice';

export default function ModalLogout() {
   const dispatch = useDispatch();
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
