import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="formContainer animate__animated animate__fadeIn">
        <h4 className="titleContact">Cuéntanos, ¿en qué te podemos ayudar?</h4>
        <Form className="form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Correo:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción:</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              className="contactDescription"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
    </>
  );
};
export default Contact;
