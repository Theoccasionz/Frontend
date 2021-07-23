import { ChangeEvent, FC, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { imageUpload } from '../../../server';
import { addDesign, getSingleDesign, updateSingleDesign } from '../../../server/admin';
import { partyPlaceData } from '../../../server/party-place';
import Loading from '../../Loading/loading';

const IMG_BASE_URL = 'http://res.cloudinary.com/the-occassion/';

const AddDesignForm: FC = () => {
  const { register, handleSubmit, errors, reset } = useForm({ mode: 'onTouched' });
  const router = useRouter();

  const [file, setFile] = useState<null | File>(null);
  const [occasionSpecializedImage, setOccasionSpecializedImage] = useState<null | File>(null);
  const [setupPlaceImage, setSetupPlaceImage] = useState<null | File>(null);
  const [designFiles, setDesignFiles] = useState<null | FileList | string>(null);

  const [occasions, setOccasions] = useState([]);
  const [places, setPlaces] = useState([]);
  const [themes, setThemes] = useState([]);

  const [occasionChosen, setOccasionChosen] = useState('');
  const [placeChosen, setPlaceChosen] = useState('');
  const [themeChosen, setThemeChosen] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (router.asPath !== router.route) {
      if (router.query.designid) {
        fetchSingleDesign(parseInt(router.query.designid as string));
      }
    } else {
      fetchPartyData();
    }
  }, [router]);

  const fetchSingleDesign = async (id: Number) => {
    try {
      setLoading(true);
      await fetchPartyData();
      let response = await getSingleDesign(id);
      response = response[0];
      reset(
        {
          design_name: response.Design_Name,
          design_id: response.Design_Id,
          vendor_id: response.Vendor_Id,
          about: response.Design_Theme_Desc,
          rental_items: response.Design_Rentals,
          non_rental_items: response.Design_Non_Rentals,
          setup_time: response.Design_Setup_Duration,
          price: response.Design_Price,
          about_service: response.Design_Service_Desc,
          design_inclusions: response.Design_Inclusions,
          occasion: response.Design_Occasion_Specialized_Image_url,
          theme_name: response.Design_Theme_Image_url,
          setup_place: response.Design_Setup_Place_Image_url,
        },
        {
          keepDirty: false,
          keepIsSubmitted: false,
          keepTouched: false,
          keepIsValid: false,
          keepSubmitCount: false,
          keepErrors: false,
        }
      );
      setOccasionSpecializedImage(response.Design_Occasion_Specialized_Image_url);
      setSetupPlaceImage(response.Design_Setup_Place_Image_url);
      // for theme
      setFile(response.Design_Theme_Image_url);
      setDesignFiles(response.Design_ImageUrls_Array);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert('Error in fetching');
    }
  };

  const onSubmit = async (data: any, e: any) => {
    e.preventDefault();
    let {
      design_name,
      theme_name,
      design_id,
      vendor_id,
      occasion,
      setup_place,
      about,
      rental_items,
      non_rental_items,
      about_service,
      price,
      setup_time,
      design_inclusions,
      custom_occassion_name,
      custom_theme_name,
      custom_place_name,
      active
    } = data;

    try {
      setLoading(true);
      let image_url_design_theme: any;
      if (themeChosen === 'Add Value') {
        let imageFormData = new FormData();
        imageFormData.append('fileName', design_name);
        imageFormData.append('image', file as string | Blob);

        let response: any;
        response = await imageUpload(imageFormData);
        image_url_design_theme = response[0].url.replace(IMG_BASE_URL, '');
        theme_name = custom_theme_name;
      } else {
        image_url_design_theme = themeChosen;
        theme_name = findChosenName(themeChosen, themes);
      }

      let occasion_specialized_image_url: any;
      if (occasionChosen === 'Add Value') {
        let occassionImageFormData = new FormData();
        occassionImageFormData.append('fileName', occasion);
        occassionImageFormData.append('image', occasionSpecializedImage as string | Blob);

        let occasionImageresponse: any;
        occasionImageresponse = await imageUpload(occassionImageFormData);
        occasion_specialized_image_url = occasionImageresponse[0].url.replace(IMG_BASE_URL, '');
        occasion = custom_occassion_name;
      } else {
        occasion_specialized_image_url = occasionChosen;
        occasion = findChosenName(occasionChosen, occasions);
      }

      let setup_place_image_url: any;
      if (placeChosen === 'Add Value') {
        let setupPlaceImageFormData = new FormData();
        setupPlaceImageFormData.append('fileName', setup_place);
        setupPlaceImageFormData.append('image', setupPlaceImage as string | Blob);

        let setupImageResponse: any;
        setupImageResponse = await imageUpload(setupPlaceImageFormData);
        setup_place_image_url = setupImageResponse[0].url.replace(IMG_BASE_URL, '');
        setup_place = custom_place_name;
      } else {
        setup_place_image_url = placeChosen;
        setup_place = findChosenName(placeChosen, places);
      }

      let ImageUrlsArray: string[] = [];
      const formData = new FormData();

      let imgURLSFormData = new FormData();

      //@ts-ignore
      if (designFiles) {
        for (let i = 0; i < designFiles?.length; i++) {
          if (typeof designFiles[i] === 'string') {
            ImageUrlsArray.push(designFiles[i] as string);
          } else {
            imgURLSFormData.append(`fileName`, `${design_name}-${i}`);
            imgURLSFormData.append(`image`, designFiles[i]);
          }
        }
      }

      let imageURLSreponse = await imageUpload(imgURLSFormData);

      imageURLSreponse.forEach((imgURL: any) => {
        ImageUrlsArray.push(imgURL.url.replace(IMG_BASE_URL, ''));
      });

      let postalData = {
        Design_Name: design_name,
        Design_Occasion_Specialized: occasion,
        Design_Occasion_Specialized_Image_url: occasion_specialized_image_url,
        Design_Theme: theme_name,
        Design_Theme_Image_url: image_url_design_theme,
        Design_Theme_Desc: about,
        Design_Setup_Place: setup_place,
        Design_Setup_Place_Image_url: setup_place_image_url,
        Design_Setup_Duration: setup_time,
        Design_Inclusions: design_inclusions,
        Design_Rentals: rental_items,
        Design_Non_Rentals: non_rental_items,
        Design_Price: price,
        Design_Service_Desc: about_service,
        Vendor_Id: vendor_id,
        Design_ImageUrls_Array: ImageUrlsArray,
        Design_Active: active ? 1 : 0
      };

      if (router.query.designid) {
        let updateDesignData = {
          id: router.query.designid,
          content: { ...postalData },
        };
        // console.log(updateDesignData);
        let updateDesignResponse = await updateSingleDesign(updateDesignData);
        if (updateDesignResponse?.error) {
          throw new Error(updateDesignResponse?.error);
        }
      } else {
        let addDesignRespose = await addDesign(postalData);
        if (addDesignRespose?.error) {
          throw new Error(addDesignRespose?.error);
        }
      }
      setLoading(false);
      alert('Succesfull API CALL');
    } catch (error) {
      alert('ERROR');
      setLoading(false);
      console.error(error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, updateFunc: (file: File) => void) => {
    let tar = e.target;
    // @ts-ignore
    let selFile = tar.files[0];
    updateFunc(selFile);
  };

  const fetchPartyData = async () => {
    let response: any;
    try {
      response = await partyPlaceData();
      let occasionsArray: any[] = [];
      console.log(response);
      response.occassion.forEach((occ: any) => {
        let found = occasionsArray.some(o => o.name === occ.Design_Occasion_Specialized);
        if (!found) {
          occasionsArray.push({
            name: occ.Design_Occasion_Specialized,
            value: occ.Design_Occasion_Specialized_Image_url,
          });
        }
      });
      occasionsArray.push({
        name: 'Add Value',
        value: 'Add Value',
      });

      let placesArray: any[] = [];

      response.places.forEach((place: any) => {
        let found = placesArray.some(o => o.name === place.Design_Setup_Place);
        if (!found) {
          placesArray.push({
            name: place.Design_Setup_Place,
            value: place.Design_Setup_Place_Image_url,
          });
        }
      });
      placesArray.push({
        name: 'Add Value',
        value: 'Add Value',
      });

      let themesArray: any[] = [];
      response.themes.forEach((theme: any) => {
        let found = themesArray.some(o => o.name === theme.Design_Theme);
        if (!found) {
          themesArray.push({
            name: theme.Design_Theme,
            value: theme.Design_Theme_Image_url,
          });
        }
      });
      themesArray.push({ name: 'Add Value', value: 'Add Value' });

      //@ts-ignore
      setOccasions(occasionsArray);
      setOccasionChosen(occasionsArray[0].value);

      // @ts-ignore
      setThemes(themesArray);
      setThemeChosen(themesArray[0].value);

      // @ts-ignore
      setPlaces(placesArray);
      setPlaceChosen(placesArray[0].value);

      if (response.error) {
        throw new Error(response.error);
      }
    } catch (error) { }
  };

  const renderOptions = (data: any[]) => {
    return data.map(d => (
      <option value={d.value} key={d.value}>
        {d.name}
      </option>
    ));
  };

  const findChosenName = (value: string, data: any[]) => {
    let result = data.find(d => d.value === value);
    return result.name;
  };

  const handleOptionChange = (e: any, updateFunc: (arg: any) => void) => {
    updateFunc(e.target.value);
  };

  return (
    <Container fluid>
      {loading && <Loading />}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group as={Row}>
          <Form.Label column md={4} lg={2}>
            Design Name
          </Form.Label>
          <Col md={8} lg={4}>
            <Form.Control
              type="text"
              name="design_name"
              placeholder="Design Name"
              ref={register({ required: true })}
              style={errors.design_name && { border: '1px solid red' }}
            />
            {errors.design_name && <small className="text-danger">Theme Name required</small>}
          </Col>

          <Form.Label column md={4} lg={2}>
            Design ID
          </Form.Label>
          <Col md={8} lg={4}>
            <Form.Control
              type="text"
              name="design_id"
              placeholder="Theme ID"
              ref={register({ required: true })}
              style={errors.design_id && { border: '1px solid red' }}
            />
            {errors.design_id && <small className="text-danger">Design ID required</small>}
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
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
              onChange={e => handleOptionChange(e, setOccasionChosen)}
            >
              {/* {[1, 2, 3, 4, 5].map(d => (
                <option key={`occasion-${d}`}>{d}</option>
              ))} */}
              {renderOptions(occasions)}
            </Form.Control>
            {errors.occasion && <small className="text-danger">Occasion required</small>}
          </Col>
        </Form.Group>
        {occasionChosen === 'Add Value' && (
          <Form.Group as={Row}>
            <Form.Label column md={4} lg={2}>
              New Occasion Name
            </Form.Label>
            <Col md={8} lg={4}>
              <Form.Control
                type="text"
                name="custom_occassion_name"
                placeholder="Name"
                ref={register({ required: occasionChosen === 'Add Value' })}
                style={errors.custom_occassion_name && { border: '1px solid red' }}
              />
              {errors.custom_occasion_name && <small className="text-danger">Required Field</small>}
            </Col>
            <Form.Label column md={4} lg={2}>
              Occasion Specialized
            </Form.Label>
            <Col md={8} lg={4}>
              <input
                type="file"
                id="occasion_upload"
                name="occasion_specialized"
                onChange={e => handleChange(e, setOccasionSpecializedImage)}
                ref={register({ required: true })}
              />
              {errors.occasion_specialized && (
                <small className="text-danger">Image is required</small>
              )}
            </Col>
          </Form.Group>
        )}
        <Form.Group as={Row}>
          <Form.Label column md={4} lg={2}>
            Setup Place
          </Form.Label>
          <Col md={8} lg={4}>
            <Form.Control
              as="select"
              name="setup_place"
              ref={register({ required: true })}
              style={errors.setup_place && { border: '1px solid red' }}
              onChange={e => handleOptionChange(e, setPlaceChosen)}
            >
              {/* {[1, 2, 3, 4, 5].map(d => (
                <option key={`setup_place-${d}`}>{d}</option>
              ))} */}
              {renderOptions(places)}
            </Form.Control>
            {errors.setup_place && <small className="text-danger">Setup Place required</small>}
          </Col>
        </Form.Group>
        {placeChosen === 'Add Value' && (
          <Form.Group as={Row}>
            <Form.Label column md={4} lg={2}>
              New Setup Place Name
            </Form.Label>
            <Col md={8} lg={4}>
              <Form.Control
                type="text"
                name="custom_place_name"
                placeholder="Name"
                ref={register({ required: placeChosen === 'Add Value' })}
                style={errors.custom_place_name && { border: '1px solid red' }}
              />
              {errors.custom_place_name && <small className="text-danger">Required Field</small>}
            </Col>
            <Form.Label column md={4} lg={2}>
              Setup Place Image
            </Form.Label>
            <Col md={8} lg={4}>
              <input
                type="file"
                id="setup_upload"
                name="setup_place_image"
                onChange={e => handleChange(e, setSetupPlaceImage)}
                ref={register({ required: true })}
              />
              {errors.setup_place_image && <small className="text-danger">Image is required</small>}
            </Col>
          </Form.Group>
        )}
        <Form.Group as={Row}>
          <Form.Label column md={4} lg={2}>
            Theme Base
          </Form.Label>
          <Col md={8} lg={4}>
            <Form.Control
              as="select"
              name="theme_name"
              ref={register({ required: true })}
              style={errors.theme_name && { border: '1px solid red' }}
              onChange={e => handleOptionChange(e, setThemeChosen)}
            >
              {renderOptions(themes)}
            </Form.Control>
            {errors.theme_name && <small className="text-danger">Theme Base required</small>}
          </Col>
        </Form.Group>
        {themeChosen === 'Add Value' && (
          <Form.Group as={Row}>
            <Form.Label column md={4} lg={2}>
              New Theme Base Name
            </Form.Label>
            <Col md={8} lg={4}>
              <Form.Control
                type="text"
                name="custom_theme_name"
                placeholder="Name"
                ref={register({ required: themeChosen === 'Add Value' })}
                style={errors.custom_theme_name && { border: '1px solid red' }}
              />
              {errors.custom_theme_name && <small className="text-danger">Required Field</small>}
            </Col>
            <Form.Label column md={4} lg={2}>
              Theme Image
            </Form.Label>
            <Col md={8} lg={4}>
              <input
                type="file"
                id="upload"
                name="image_theme"
                onChange={e => handleChange(e, setFile)}
                ref={register({ required: true })}
              />
              {errors.image_theme && <small className="text-danger">Required field</small>}
            </Col>
          </Form.Group>
        )}
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
            Design Inclusions
          </Form.Label>
          <Col md={8} lg={4}>
            <Form.Control
              as="textarea"
              rows={3}
              name="design_inclusions"
              placeholder="Design Inclusions"
              ref={register({ required: true })}
              style={errors.design_inclusions && { border: '1px solid red' }}
            />
            {errors.design_inclusions && <small className="text-danger">Required field</small>}
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
              ref={register({ required: false })}
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
              ref={register({ required: false })}
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
              type="integer"
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
            Setup Time(hrs)
          </Form.Label>
          <Col md={8} lg={4}>
            <Form.Control
              type="number"
              name="setup_time"
              placeholder="Setup Time"
              ref={register({ required: true })}
              style={errors.setup_time && { border: '1px solid red' }}
            />
            {errors.setup_time && <small className="text-danger">Setup Time required</small>}
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={4}>
            Vendor Active
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="checkbox"
              name="active"
              placeholder="Name"
              ref={register({})}
              style={errors.active && { border: '1px solid red' }}
            />
            {errors.active && <small className="text-danger">Required field</small>}
          </Col>
        </Form.Group>
        <div className="">
          <label htmlFor="image_design" className="mr-3">
            Upload Image
          </label>
          <input
            type="file"
            id="upload"
            name="image_design"
            onChange={e => setDesignFiles(e.target.files)}
            ref={register({ required: !designFiles })}
            multiple={true}
          />
          {errors.image_design && <small className="text-danger">Require Deisgn Image(s)</small>}
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
      {/* {show && (
        <section className={styles.preview}>
          <div className="text-center">
            <img src={createPreviewURL(file)} className={styles.previewImage} />
            <button className={styles.closeBtn} onClick={() => setShow(false)}>
              Close
            </button>
          </div>
        </section>
      )} */}
    </Container>
  );
};

export default AddDesignForm;
