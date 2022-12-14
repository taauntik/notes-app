import { useRef, FormEvent } from 'react';
import { Stack, Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CreatableReactSelect from 'react-select';

type Note = { 
    id : String
} & NoteData

type NoteData = {
    title : String
    markdown : String
    tags : Tag[]
}

type Tag = {
    id : String
    label : String
}

export function NoteForm() {
    const titleRef = useRef<HTMLInputElement>(null);
    const markdownRef = useRef<HTMLTextAreaElement>(null);
    
    const handleSubmit = (e : FormEvent) => {
        e.preventDefault();

    }
    return (
        <Form onSubmit={handleSubmit}>
            <Stack gap={4}>
                <Row>
                    <Col>
                        <Form.Group controlId='title'>
                            <Form.Label>Title</Form.Label>
                            <Form.Control required ref={titleRef} />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId='tags'>
                            <Form.Label>Tags</Form.Label>
                            <CreatableReactSelect isMulti />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId='markdown'>
                    <Form.Label>Body</Form.Label>
                    <Form.Control required as="textarea" ref={markdownRef} rows={15}  />
                </Form.Group>
                <Stack gap={2} direction='horizontal' className='justify-content-end'>
                    <Button type='submit' variant='primary'>Save</Button>
                    <Link to='..'>
                        <Button type='button' variant='outline-secondary'>Cancel</Button>
                    </Link>
                </Stack>
            </Stack>
        </Form>
    )
}