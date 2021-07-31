import React from 'react';
import LayoutPartyPlace from '../layouts/party-place';
import styles from '../styles/privacypolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <LayoutPartyPlace>
      <div className={styles.container}>
        <h2>Privacy Policy</h2>
        <div>
          <h3>Introduction</h3>
          <p>
            The Occasionz Privacy Policy describes the practices and the policies followed by
            TheOccasionz to help our users better understand what information we collect about them
            and what may happen to that information.
          </p>
          <p>
            The terms "We, TheOccasionz, Us" refer to TheOccasionz.in and the terms "You, Your"
            refer to a user of TheOccasionz.in.
          </p>
          <p>
            By accessing TheOccasionz.in or providing information on our portal, you are in
            automatic agreement with this Privacy Policy. If you have any concerns about providing
            data, or having it used in any manner permitted in this Privacy Policy, you should not
            use our services.
          </p>
          <p>
            By using our Website, you expressly consent to our use and disclosure of your personal
            information in accordance with this Privacy Policy.
          </p>
        </div>
        <div>
          <h3>Collection of Sensitive Personal Data and other Information</h3>
          <p>
            In accordance with the Information Technology Act, 2000, and its successive amendments
            from time to time, we are required to give a disclosure of the Sensitive Personal Data
            and other Information we collect from you and how we use it if you register and avail
            various services on our website. We may collect and retain the following information
            from you:
          </p>
          <ul>
            <li>Your email address and website password</li>
            <li>Your name, address and phone number</li>
            <li>
              Your location and the information which we can determine about you based on your
              interaction with our website and services(e.g. through cookies)
            </li>
            <li>Other information you actively submit to us </li>
          </ul>
          <p>
            The information that we collect is generally used to make changes to the content you see
            and personalize your user experience, to fulfill your requests and improve our certain
            customer services, to contact you about our services and to send periodic emails and
            notifications to you.
          </p>
          <p>
            You have the option of browsing our website with the option of not providing any
            personal details. If there is a change in your your personally identifiable information,
            or if you no longer want our service, you may update, correct or disable your account by
            emailing our Customer Support at support@theoccasionz.in
          </p>
        </div>
        <div>
          <h4>Cookies</h4>
          <p>
            The Occasionz uses cookies on our website to personalise your website experience. A
            cookie is basically a small file which stores some information on your computer or
            mobile device. These cookies don’t contain any personal identifiable information about
            you .You can decide to disable the cookies through your web or mobile device browser
            settings. By accessing and/or using the Services you consent the use of cookies in
            accordance with this Privacy Policy.
          </p>
        </div>
        <div>
          <h4>Security</h4>
          <p>
            We implement a variety of security measures including secure servers to maintain the
            safety of your personal information when you access your personal information. We treat
            data as an asset that must be protected against unauthorized access and loss. We keep
            your information confidential except in the case that you have specifically made an
            enquiry.
          </p>
          <p>
            Further the advertisers/vendors who are associated with us may call you based on the
            query that you make with us enquiring about any Service/Product they might offer and
            they are obligated by a contract with The Occasionz where they are not allowed to reveal
            your personal data to anyone they collect from us.
          </p>
          <p>
            We will share Personal Information only under one or more of the following situations: -
            If we have your consent to do so or if it is required by law (including court orders) to
            do so.
          </p>
          <p>
            However, we may provide non- personal identifiable information to other parties for
            insights, marketing and other use.
          </p>
        </div>
        <div>
          <h4>Links to Third Party Websites</h4>
          <p>
            The Occasionz includes or offers third party links, products or services on our website.
            These third party websites have separate and independent privacy policy of their own.
            TheOccasionz is not responsible for the activities employed by these third party
            websites or the information or content contained on these third party websites. You
            should carefully review the privacy statements on their websites and other terms of use
            and you agree you provide information or engage in transactions with these websites at
            your own risk.
          </p>
        </div>
        <div>
          <h4>Updates on Privacy Policy</h4>
          <p>
            We reserve the rights to modify the Privacy Policies of The Occasionz.in at any time by
            updating this posting. Such revised policies will take effect from the day it is posted.{' '}
          </p>
        </div>
      </div>
    </LayoutPartyPlace>
  );
};

export default PrivacyPolicy;
