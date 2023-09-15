import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalBody, ModalHeader, FormGroup, Label } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateCommentForm } from "../../utils/validateCommentForm";
import { addComment } from "./commentsSlice";

const CommentForm = ({ gameId }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();
    const handleSubmit = (values) => {
        const comment = {
            gameId: parseInt(gameId),
            rating: values.rating,
            author: values.author,
            text: values.commentText,
            date: new Date(Date.now()).toISOString()
        };

        console.log(comment);
        dispatch(addComment(comment));
        setModalOpen(false);
    };

    return (
        <>
            <Button outline onClick={() => { setModalOpen(true) }}>
                <i className="fa fa-pencil fa-lg" /> Add Comment
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader 
                    toggle={() => setModalOpen(false)} 
                    style={{background: 'rgb(73, 73, 73)'}} 
                >
                    <h4 style={{ color: "#AFBE8F" }}>
                        Add Comment
                    </h4>
                </ModalHeader>
                <ModalBody style={{background: '#252525' }}>
                    <Formik initialValues={{
                        rating: undefined,
                        author: '',
                        commentText: '',
                    }}
                        onSubmit={handleSubmit}
                        validate={validateCommentForm}
                    >
                        <Form>
                            <FormGroup>
                                <Label style={{color: 'aliceblue'}}  htmlFor="rating">Rating</Label>
                                <Field
                                    name='rating'
                                    as='select'
                                    className='form-control'
                                    style={{background: '#252525', color:'aliceblue'}}
                                >
                                    <option style={{color: 'aliceblue'}}>Select...</option>
                                    <option style={{color: 'aliceblue'}}>1</option>
                                    <option style={{color: 'aliceblue'}}>2</option>
                                    <option style={{color: 'aliceblue'}}>3</option>
                                    <option style={{color: 'aliceblue'}}>4</option>
                                    <option style={{color: 'aliceblue'}}>5</option>
                                </Field>
                                <ErrorMessage name="rating">
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label style={{color: 'aliceblue'}} htmlFor="author">Your Name</Label>
                                <Field
                                    name='author'
                                    placeholder='Your Name'
                                    className='form-control'
                                    style={{background: '#252525', color:'aliceblue'}}
                                />
                                <ErrorMessage name="author">
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label style={{color: 'aliceblue'}} htmlFor="commentText">Comment</Label>
                                <Field
                                    name='commentText'
                                    as='textarea'
                                    rows='12'
                                    className='form-control'
                                    style={{background: '#252525', color: 'aliceblue'}} 
                                />
                            </FormGroup>
                            <Button type="submit" outline>
                                Submit
                            </Button>
                        </Form>

                    </Formik>
                </ModalBody>
            </Modal>
        </>
    );
};

export default CommentForm;