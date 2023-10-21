export const setFormData = (formData) => ({
    type: 'SET_FORM_DATA',
    formData
});

export const setValidationErrors = (errors) => ({
    type: 'SET_VALIDATION_ERRORS',
    errors,
});

const initialState = {
    formData: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    errors: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  };

  export const registrationReducers = (state = initialState, action) => {
    switch(action.type) {
      case 'SET_FORM_DATA':
          return {...state, formData: action.formData};
      case 'SET_VALIDATION_ERRORS':
          return { ...state, errors: action.errors };
      default:
          return state;
    }
  }