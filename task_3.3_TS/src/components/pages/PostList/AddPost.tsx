import './AddPost.scss'
import {useFormik} from 'formik'
import {FormValues} from '../../../models/post'



function AddPost({addPost} : FuncProps) {
    const formik = useFormik({
        initialValues: {
            title: '',
            body: ''
        },
        onSubmit: formValues => onSubmit(formValues),
    })

    const onSubmit = async (formValues : FormValues) => {
        addPost(formValues)
        formik.values.body = ''
        formik.values.title = ''
    }

    return (
    <form className="addPost" onSubmit={formik.handleSubmit}>
        <textarea
            name="title"
            placeholder="title"
            className="titleInput"
            value={formik.values.title}
            onChange={formik.handleChange}
        >
        </textarea>
        <textarea
            name="body"
            placeholder="Content"
            className="contentInput"
            value={formik.values.body}
            onChange={formik.handleChange}
        >
        </textarea>
        <button type="submit" className='submitButton' onSubmit={e => e.preventDefault()}>Add</button>
    </form>)
}

interface FuncProps {
    addPost(arg : FormValues) : void
}

export {AddPost}