import { ChangeEvent, FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styles from '../../../styles/admin/add-design.module.css';

const AddDesignForm: FC = () => {
  const { register, handleSubmit, errors } = useForm({ mode: 'onTouched' });

  const [file, setFile] = useState<null | File>(null);
  const [show, setShow] = useState(false);

  const onSubmit = (data: any, e: any) => {
    console.log(typeof data);
    const {
      theme_name,
      theme_id,
      vendor_id,
      vendor_name,
      occasion,
      setup_place,
      about,
      rental_items,
      non_rental_items,
      about_service,
      price,
      setup_time,
    } = data;

    // const formData = new FormData(form)
    // formData.append("Design_Name");
    // formData.append("Design_Occasion_Specialized",);
    // formData.append("Design_Occasion_Specialized_Image_url",);
    // formData.append("Design_Theme",theme_name);
    // formData.append("Design_Theme_Image_url",);
    // formData.append("Design_Theme_Desc",);
    // formData.append("Design_Setup_Place",setup_place);
    // formData.append("Design_Setup_Place_Image_url",);
    // formData.append("Design_Setup_Duration",);
    // formData.append("Design_Inclusions",);
    // formData.append("Design_Rentals",rental_items);
    // formData.append("Design_Non_Rentals",non_rental_items);
    // formData.append("Design_ImageUrls",);
    // formData.append("Design_Price",price);
    // formData.append("Design_Service_Desc",);
    // formData.append("Vendor_Id",vendor_id);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let tar = e.target;
    let selFile = tar.files[0];
    setFile(selFile);
  };

  const createPreviewURL = (file: File | null) => {
    return URL.createObjectURL(file);
  };

  return (
    <Container fluid>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group as={Row}>
          <Form.Label column md={4} lg={2}>
            Theme Name
          </Form.Label>
          <Col md={8} lg={4}>
            <Form.Control
              type="text"
              name="theme_name"
              placeholder="Theme Name"
              ref={register({ required: true })}
              style={errors.theme_name && { border: '1px solid red' }}
            />
            {errors.theme_name && <small className="text-danger">Theme Name required</small>}
          </Col>
          <Form.Label column md={4} lg={2}>
            Theme ID
          </Form.Label>
          <Col md={8} lg={4}>
            <Form.Control
              type="text"
              name="theme_id"
              placeholder="Theme ID"
              ref={register({ required: true })}
              style={errors.theme_id && { border: '1px solid red' }}
            />
            {errors.theme_id && <small className="text-danger">Theme ID required</small>}
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column md={4} lg={2}>
            Vendor Name
          </Form.Label>
          <Col md={8} lg={4}>
            <Form.Control
              type="text"
              name="vendor_name"
              placeholder="Vendor Name"
              ref={register({ required: true })}
              style={errors.vendor_name && { border: '1px solid red' }}
            />
            {errors.vendor_name && <small className="text-danger">Vendor Name required</small>}
          </Col>
          <Form.Label column md={4} lg={2}>
            Vendor ID
          </Form.Label>
          <Col md={8} lg={4}>
            <Form.Control
              type="text"
              name="vendor_id"
              placeholder="Vendor ID"
              ref={register({ required: true })}
              style={errors.vendor_id && { border: '1px solid red' }}
            />
            {errors.vendor_id && <small className="text-danger">Vendor ID required</small>}
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column md={4} lg={2}>
            Occasion
          </Form.Label>
          <Col md={8} lg={4}>
            <Form.Control
              as="select"
              name="occasion"
              ref={register({ required: true })}
              style={errors.occasion && { border: '1px solid red' }}
            >
              {[1, 2, 3, 4, 5].map(d => (
                <option key={`occasion-${d}`}>{d}</option>
              ))}
            </Form.Control>
            {errors.occasion && <small className="text-danger">Occasion required</small>}
          </Col>
          <Form.Label column md={4} lg={2}>
            Setup Place
          </Form.Label>
          <Col md={8} lg={4}>
            <Form.Control
              as="select"
              name="setup_place"
              ref={register({ required: true })}
              style={errors.setup_place && { border: '1px solid red' }}
            >
              {[1, 2, 3, 4, 5].map(d => (
                <option key={`setup_place-${d}`}>{d}</option>
              ))}
            </Form.Control>
            {errors.setup_place && <small className="text-danger">Setup Place required</small>}
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column md={4} lg={2}>
            Theme Base
          </Form.Label>
          <Col md={8} lg={4}>
            <Form.Control
              as="select"
              name="theme_base"
              ref={register({ required: true })}
              style={errors.theme_base && { border: '1px solid red' }}
            >
              {[1, 2, 3, 4, 5].map(d => (
                <option key={`theme_base-${d}`}>{d}</option>
              ))}
            </Form.Control>
            {errors.theme_base && <small className="text-danger">Theme Base required</small>}
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column md={4} lg={2}>
            About theme
          </Form.Label>
          <Col md={8} lg={4}>
            <Form.Control
              as="textarea"
              rows={3}
              name="about"
              placeholder="About theme"
              ref={register({ required: true })}
              style={errors.about && { border: '1px solid red' }}
            />
            {errors.about && <small className="text-danger">Required field</small>}
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column md={4} lg={2}>
            Rental Items
          </Form.Label>
          <Col md={8} lg={4}>
            <Form.Control
              as="textarea"
              rows={3}
              name="rental_items"
              placeholder="Goggles, Clothing"
              ref={register({ required: true })}
              style={errors.rental_items && { border: '1px solid red' }}
            />
            {errors.rental_items && <small className="text-danger">Required field</small>}
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column md={4} lg={2}>
            Non Rental Items
          </Form.Label>
          <Col md={8} lg={4}>
            <Form.Control
              as="textarea"
              rows={3}
              name="non_rental_items"
              placeholder="Goggles, Clothing"
              ref={register({ required: true })}
              style={errors.non_rental_items && { border: '1px solid red' }}
            />
            {errors.non_rental_items && <small className="text-danger">Required field</small>}
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column md={4} lg={2}>
            About Service
          </Form.Label>
          <Col md={8} lg={4}>
            <Form.Control
              as="textarea"
              rows={3}
              name="about_service"
              placeholder="About Service"
              ref={register({ required: true })}
              style={errors.about_service && { border: '1px solid red' }}
            />
            {errors.about_service && <small className="text-danger">Required field</small>}
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column md={4} lg={2}>
            Price
          </Form.Label>
          <Col md={8} lg={4}>
            <Form.Control
              type="text"
              name="price"
              placeholder="Price"
              ref={register({ required: true })}
              style={errors.price && { border: '1px solid red' }}
            />
            {errors.price && <small className="text-danger">Price required</small>}
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column md={4} lg={2}>
            Setup Time
          </Form.Label>
          <Col md={8} lg={4}>
            <Form.Control
              type="text"
              name="setup_time"
              placeholder="Setup Time"
              ref={register({ required: true })}
              style={errors.setup_time && { border: '1px solid red' }}
            />
            {errors.setup_time && <small className="text-danger">Setup Time required</small>}
          </Col>
        </Form.Group>
        <div className="text-right">
          <label htmlFor="upload" className={styles.label}>
            <input
              type="file"
              id="upload"
              name="image_design"
              hidden={true}
              onChange={handleChange}
              ref={register({ required: true })}
            />
            Upload Image
          </label>
          {errors.image_design && <small className="text-danger">Image is required</small>}
          <button
            className={`${styles.label}`}
            disabled={!file}
            onClick={() => setShow(true)}
            type="button"
          >
            Preview Image
          </button>
        </div>
        <div className="text-right">
          <Button variant="primary" type="submit">
            Save
          </Button>
          <Button variant="danger" type="button" className="ml-3">
            Delete
          </Button>
        </div>
      </Form>
      {show && (
        <section className={styles.preview}>
          <div className="text-center">
            <img src={createPreviewURL(file)} className={styles.previewImage} />
            <button className={styles.closeBtn} onClick={() => setShow(false)}>
              Close
            </button>
          </div>
        </section>
      )}
    </Container>
  );
};

export default AddDesignForm;
