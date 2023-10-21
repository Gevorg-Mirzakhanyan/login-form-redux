import './User.css';
import { setFormData, setValidationErrors } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
function User() {
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.registration.formData);
    const errors = useSelector((state) => state.registration.errors);

    function handleChange(e) {
        const {name, value} = e.target;
        dispatch(setFormData({...formData, [name]: value}))
       }
    
    const validation = (e) => {
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email must be filled in';
        }
    
        if (!formData.password) {
            newErrors.password = 'Password must be filled in';
        }
    
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Confirm Password must be filled in';
        }
    
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
    
        if (formData.email && !emailValidate(formData.email)) {
            newErrors.email = 'Incorrect email value'
        }
       dispatch(setValidationErrors(newErrors))
    
    }   

    function emailValidate(email){ 
        return /\S+@\S+\.\S+/.test(email) 
      }
    return(
        <div className='user-form'>
            <label>
                <input
                    type='email'
                    value={formData.email}
                    name='email' 
                    placeholder='email' 
                    onChange={handleChange}
                />
            </label>
            {errors.email && <div>{errors.email}</div>}
            <label>
                <input 
                    type='password'
                    placeholder='password'
                    value={formData.password}
                    name='password'
                    onChange={handleChange}  
                />
            </label>
            {errors.password && <div>{errors.password}</div>}
            <label>
                <input 
                    type='password'
                    placeholder='confirm password' 
                    value={formData.confirmPassword}
                    name='confirmPassword' 
                    onChange={handleChange}
                />
            </label>
            {errors.confirmPassword && <div>{errors.confirmPassword}</div>}
            <button onClick={validation}>Add User</button>
        </div>
    )
}

export default User;