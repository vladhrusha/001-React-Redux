import './AddPost.scss'
import {useFormik} from 'formik'
import {FormValues} from '../../../models/post'


type Props = {
    addPost: (arg : FormValues) => void,
}

export const AddPost: React.VFC<Props> = ({addPost} : Props) => {
    const formik = useFormik({
        initialValues: {
            title: '',
            body: ''
        },
        onSubmit: formValues => onSubmit(formValues),
    })

    const onSubmit = async (formValues : FormValues) => {
        addPost(formValues)
        formik.resetForm()
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
        <button type="submit" className='submitButton'>Add</button>
    </form>)
}
