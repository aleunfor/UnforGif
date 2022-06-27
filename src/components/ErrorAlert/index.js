import Alert from 'react-bootstrap/Alert'

export default function ErrorAlert({ showAlert, error }) {
    return <>
        <Alert className='mt-4' show={showAlert} variant="warning" dismissible>
            <Alert.Heading>{error}</Alert.Heading>
        </Alert>
    </>
}