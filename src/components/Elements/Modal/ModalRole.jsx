import { useDispatch } from 'react-redux';
import { closeModal } from '../../../features/modalRoleSlice';
import FormInput from '../FormInput';
import useUpdate from './../../../hooks/isUpdate';

export default function ModalRole({ id }) {
   const dispatch = useDispatch();
   const { update } = useUpdate();

   const handleUpdateRole = async (id) => {
      let radioButtons = document.getElementsByName('role');

      // Mencari radio button yang dipilih
      let role;
      for (let i = 0; i < radioButtons.length; i++) {
         if (radioButtons[i].checked) {
            role = radioButtons[i].value;
            break;
         }
      }

      const dataRole = {
         role: role,
      };

      const response = await update(`update-user-role/${id}`, dataRole);
      if (response.status === 200) {
         dispatch(closeModal());
      }
      window.location.reload();
   };

   return (
      <div className='fixed z-50 inset-0 overflow-y-auto'>
         <div className='flex items-center justify-center min-h-screen'>
            <div className='modal-overlay fixed inset-0 bg-gray-500 opacity-75'></div>
            <div className='modal-container bg-white w-96 mx-auto rounded shadow-lg z-50 overflow-y-auto'>
               <div className='modal-content py-4 text-left px-6'>
                  <div className='modal-header flex justify-center items-center'>
                     <h5 className='text-lg font-bold border-b-2'>Pengaturan User Role</h5>
                  </div>
                  <div className='modal-body py-4'>
                     <form onSubmit={handleUpdateRole}>
                        <div className='w-full justify-center flex gap-4'>
                           <div className='flex gap-2'>
                              <FormInput
                                 value='admin'
                                 title='Admin'
                                 htmlFor='admin'
                                 type='radio'
                                 name='role'
                              />
                           </div>
                           <div className='flex gap-2'>
                              <FormInput
                                 value='user'
                                 title='User'
                                 htmlFor='user'
                                 type='radio'
                                 name='role'
                              />
                           </div>
                        </div>
                     </form>
                  </div>
                  <div className='modal-footer flex justify-center border-t pt-2'>
                     <button
                        onClick={() => handleUpdateRole(id)}
                        type='button'
                        className='bg-red-500 hover:bg-red-600 text-white mr-2 px-4 py-2 rounded'
                     >
                        Confirm
                     </button>
                     <button
                        onClick={() => dispatch(closeModal())}
                        type='button'
                        className='bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded'
                     >
                        Cancel
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
