import React from 'react';
import LayoutPartyPlace from '../layouts/party-place';

import styles from '../styles/faqs.module.css';

const FAQs = () => {
  return (
    <LayoutPartyPlace>
      <div className={styles.container}>
        <h2>FAQs</h2>
        <div>
          <ol>
            <li>
              <span className={styles.question}>
                How can I contact The Occasionz customer care support?
              </span>
              <br />
              <span className={styles.answer}>
                You can write your query to us at support@theoccasionz.in or call us at
                +912249423758 and we will be happy to solve your problem.
              </span>
            </li>
            <li>
              <span className={styles.question}>Do you accept online payment?</span>
              <br />
              <span className={styles.answer}>
                No, we don’t accept any online payment on the website for now. However, after the
                decoration service is provided you can do payment through cash, Google Pay or Paytm
                to the concerned person who has come for the decoration setup.
              </span>
            </li>
            <li>
              <span className={styles.question}>
                Do you provide any add ons besides the decoration setup booked?
              </span>
              <br />
              <span className={styles.answer}>
                Besides the main decoration setup we provide, you can request for additional items
                or services directly to The Occasionz decoration vendor once they contact you after
                the booking confirmation.They will quote the charges of the additional service for
                which you have requested.The Occasionz is not liable or committed for any additional
                service request raised by the customer.
              </span>
            </li>
            <li>
              <span className={styles.question}>
                {' '}
                In how much time will we receive the confirmation for booking ?
              </span>
              <br />
              <span className={styles.answer}>
                You will receive the confirmation for booking within 1 hour if you book during the
                working hours otherwise you will receive the confirmation the next day between 9:00
                am. to 10:00 a.m.
                <br /> Incase of any unforeseen event , The Occasionz decoration vendor has the
                right to cancel the confirmed booking and update the customer.
              </span>
            </li>
            <li>
              <span className={styles.question}>
                What is the minimum time before which we can book a decoration design ?
              </span>
              <br />
              <span className={styles.answer}>
                You can book a decoration theme at least one day before the set up day and same day
                bookings are not allowed.
              </span>
            </li>
            <li>
              <span className={styles.question}>
                How can I share my feedback or an idea that I have with you ?
              </span>
              <br />
              <span className={styles.answer}>
                You can write back to us at support@theoccasionz.in or call us at +912249423758 and
                we will be happy to receive your feedback or idea.
              </span>
            </li>
            <li>
              <span className={styles.question}>Is there any cancellation charge?</span>
              <br />
              <span className={styles.answer}>
                There are no cancellation charges for bookings that will be cancelled till the
                booking date. However if you cancel your booking once the vendor reaches the
                required place, you are obligated to pay 50% of the price of the decoration setup
                booked to us as mentioned in our Terms and Conditions.
              </span>
            </li>
            <li>
              <span className={styles.question}>
                What has been done to ensure the safety of the customer by The Occasionz ?
              </span>
              <br />
              <span className={styles.answer}>
                All the vendors associated with us are verified by us. Whenever the concerned person
                visits the required place for decoration setup, you can verify the person’s identity
                by The Occasionz Photo ID card of that person .
              </span>
            </li>
          </ol>
        </div>
      </div>
    </LayoutPartyPlace>
  );
};

export default FAQs;
