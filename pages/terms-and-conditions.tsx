import React, { ReactElement, FC } from 'react';
import LayoutPartyPlace from '../layouts/party-place';

import styles from '../styles/termsandconditions.module.css';

const TermsAndConditionsPage: FC = (): ReactElement => {
  return (
    <LayoutPartyPlace>
      <div className={styles.container}>
        <h2>Terms &amp; Conditions</h2>
        <h3>Last updated: July 11th, 2021</h3>
        <p>
          The Occasionz (hereafter referred to as "Occassionz ","we", "us", or "our") provides an
          online platform that connects Vendors who have knowledge and experience with a particular
          decoration design with people seeking to experience such decoration design (collectively
          with the Site and Application (each as defined below), the "Services").
        </p>
        <p>
          The Services are accessible at https://www.TheOccasionz.com and any other websites through
          which Occasionz makes the Services available (collectively, the "Site") and any related
          applications (the "Application"). By using the Services, you agree to comply with and be
          legally bound by the terms and conditions of these Terms of Service ("Terms"), whether or
          not you become a registered user of the Services. These Terms govern your access to and
          use of the Site, Application and Services and all Collective Content (defined below) and
          constitute a binding legal agreement between you and The Occasionz .
        </p>
        <p>
          Please carefully read these Terms and our Privacy Policy and our Legal Notice, each of
          which is incorporated by reference into these Terms. If you do not agree to these Terms,
          you have no right to obtain information from or otherwise continue using the Services.
          Failure to use the Services in accordance with these Terms may subject you to civil and
          criminal penalties.
        </p>
        <p>
          THE SERVICES COMPRISE AN ONLINE PLATFORM THROUGH WHICH OPERATORS (DEFINED BELOW) MAY
          CREATE LISTINGS (DEFINED BELOW) FOR CUSTOMER(DEFINED BELOW) AND CORPORATE (DEFINED BELOW)
          MAY LEARN ABOUT AND BOOK SUCH DECORATION SETUPS.
        </p>
        <p>
          YOU UNDERSTAND AND AGREE THAT The Occasionz IS NOT A PARTY TO ANY AGREEMENTS ENTERED INTO
          BETWEEN OPERATORS AND CUSTOMER, NOR IS The Occasionz AN AGENT OR INSURER. The Occasionz
          HAS NO CONTROL OVER THE CONDUCT OF OPERATORS, PEOPLE AND OTHER USERS OF THE SERVICES, AND
          DISCLAIMS ALL LIABILITY IN THIS REGARD.
        </p>
        <div style={{ marginTop: '3rem' }}>
          <h3>Key Terms</h3>
          <p>
            "Collective Content" means Member Content and The Occasionz Content. "Content" means
            text, graphics, images, music, software (excluding the Application), audio, video,
            information or other materials. "Operator Service provider or Vendor" means a Member who
            creates a Listing via the Services. "Listing" means an Decoration Design that is listed
            by an Vendor as available for booking via the Services. "Member" means a person who
            completes The Occasionz's account registration process, including, but not limited to
            Vendors, as described under "Account Registration" below. "Member Content" means all
            Content that a Member posts, uploads, publishes, submits or transmits to be made
            available through the Services. "Tax" or "Taxes" mean any sales taxes, value added taxes
            (VAT), goods and services taxes (GST) and other similar municipal, state and federal
            indirect or other withholding and personal or corporate income taxes. "The Occasionz
            Content" means all Content that The Occasionz makes available through the Services,
            including any Content licensed from a third party, but excluding Member Content.
            "Customer" means a Member who requests a booking of a particular design via the Services
            and is not the Operator for such decoration. Certain portions of the Services (and your
            access to or use of certain aspects of the Services or Collective Content) may have
            different terms and conditions posted or may require you to agree with and accept
            additional terms and conditions. If there is a conflict between these Terms and terms
            and conditions posted for a specific portion of the Services, or Collective Content, the
            latter terms and conditions will take precedence with respect to your use of or access
            to that portion of the Services, or Collective Content.
          </p>
          <p>
            YOU ACKNOWLEDGE AND AGREE THAT, BY ACCESSING OR USING THE SERVICES OR BY DOWNLOADING OR
            POSTING ANY CONTENT FROM OR ON THE SITE, VIA THE APPLICATION OR OTHERWISE THROUGH THE
            SERVICES YOU ARE INDICATING THAT YOU HAVE READ, AND THAT YOU UNDERSTAND AND AGREE TO BE
            BOUND BY THESE TERMS, WHETHER OR NOT YOU HAVE REGISTERED WITH THE SERVICES. IF YOU DO
            NOT AGREE TO THESE TERMS, THEN YOU HAVE NO RIGHT TO ACCESS OR USE THE SERVICES, OR
            COLLECTIVE CONTENT.
          </p>
          <p>
            If you accept or agree to these Terms on behalf of a company or other legal entity, you
            represent and warrant that you have the authority to bind that company or other legal
            entity to these Terms and, in such event, "you" and "your" will refer and apply to that
            company or other legal entity.
          </p>
        </div>
        <div style={{ marginTop: '3rem' }}>
          <h3>Modification</h3>
          <p>
            The Occasionz reserves the right, at its sole discretion, to modify the Services at any
            time and without prior notice. If we modify these Terms, we will post the modification
            on the Site or via the Services or provide you with notice of the modification. We will
            also update the "Last Updated Date" at the top of these Terms. Any changes will become
            effective immediately upon your acceptance of the modified Terms, whether by, without
            limitation, creating a Listing or requesting the booking of an Group Tour. If the
            modified Terms are not acceptable to you, your only recourse is to cease using the
            Services.
          </p>
        </div>
        <div style={{ marginTop: '3rem' }}>
          <h3>
            General Booking and Financial Terms Traveller Cancellations, Refunds and Complaints
          </h3>
          <p>
            If, as a Customer, you cancel your requested booking by raising a ticket, or if our
            decoration Vendor declines your booking request due to non availability or any other
            unforeseen situation, which will automatically cancel any booking and customers are not
            liable to pay any charges on cancellation and since The Occasionz don’t collect any
            advance charges for the bookings and hence no refund is initiated on cancellation. Also,
            the vendor retains the right to cancel the booking after accepting the booking, due to
            some unforeseen event and no compensation will be paid to customers and no penalty will
            be charged from the vendor. The customers can reach The Occasionz in case of some
            emergency for some other design set up.
          </p>
          <p>
            In case the decoration vendor reach the set up location and then the service is declined
            by the customer. In such circumstances, customer is liable to pay 50% of the total
            billing amount and if customer refused to pay the penalty than it will be considered as
            a breach of contract entered by the customer at the time of booking the design.
          </p>
          <p>
            All customer complaints about their experience on services will be passed onto the
            decoration vendor &amp; his team to resolve. The Occasionz is committed to working with
            vendors to achieve a high level of service. If the response time and/or response quality
            of the vendor however continue to fall below acceptable timing and quality despite our
            working together to rectify any issues, The Occasionz reserves the right to remove the
            operators' tour listings from The Occasionz .com Marketplace, Affiliate websites, Mobile
            Apps and remove any Applications provided by us.
          </p>
        </div>
      </div>
    </LayoutPartyPlace>
  );
};

export default TermsAndConditionsPage;
