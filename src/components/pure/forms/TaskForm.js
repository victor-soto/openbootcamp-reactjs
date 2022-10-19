import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { LEVELS } from '../../../models/levels.enum'
import { TaskModel } from '../../../models/task.model'

const TaskForm = ({ add, length }) => {

  const levels = Object.values(LEVELS)

  const schema = Yup.object().shape({
    name: Yup.string().min(3, 'Name is too short (min 3)').required('Name is required'),
    description: Yup.string().min(5, 'Description is too short (min 5)').required('Description is required'),
    completed: Yup.boolean(),
    level: Yup.string().oneOf(levels, `Must select a valid level (${levels.join(', ')})`)
  })

  const initialValues = { name: '', description: '', completed: false, level: LEVELS.NORMAL }

  const RequiredMessage = (field) => {
    return <span style={ {color: '#dc3545'} }>{field.children}</span>
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={ task => add(new TaskModel(task.name, task.description, task.completed, task.level)) }>
      {({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
        <Form>
          <div className='mb-3'>
            <label htmlFor="name" className='form-label'>Name:</label>
            <Field id='name' className='form-control' name='name' placeholder='Name' />
            {
              errors.name && touched.name && (
                <ErrorMessage name='name' component={RequiredMessage} />
              )
            }
          </div>
          <div className='mb-3'>
            <label htmlFor='description' className='form-label'>Description:</label>
            <Field id='description' className='form-control' as='textarea' rows='5' name='description' placeholder='Description' />
            {
              errors.description && touched.description && (
                <ErrorMessage name='description' component={RequiredMessage} />
              )
            }
          </div>
          <div className='mb-3 form-check'>
            <Field id='completed' className='form-check-input' type='checkbox' name='completed' placeholder='Completed' />
            <label htmlFor='completed' className='form-check-label'>Completed</label>
            {
              errors.placeholder && touched.placeholder && (
                <ErrorMessage name='level' component={RequiredMessage} />
              )
            }
          </div>
          <div className='mb-3'>
            <label htmlFor='level' className='form-label'>Level:</label>
            <Field id='level' className='form-select' as='select' name='level' placeholder='Level'>
              {levels.map(level => <option key={level} value={level}>{level}</option>)}
            </Field>
            {
              errors.level && touched.level && (
                <ErrorMessage name='level' component={RequiredMessage} />
              )
            }
          </div>
          <button type='submit' className='btn btn-success btn-lg btn-block'>
            { length > 0 ? 'Add new task' : 'Create your first task' }
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default TaskForm
