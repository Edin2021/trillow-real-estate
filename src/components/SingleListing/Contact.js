import { BiPhone } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";

function Contact({ singleListing }) {
  const phoneOffice1 =
    singleListing.office.phones && singleListing.office.phones.length > 0
      ? singleListing.office.phones[0].number
      : "";

  const phoneOffice2 =
    singleListing.branding && singleListing.branding.listing_office
      ? singleListing.branding.listing_office.details &&
        singleListing.branding.listing_office.details.phone
      : false;

  const phoneAgent =
    singleListing.branding && singleListing.branding.listing_agent
      ? singleListing.branding.listing_agent.details &&
        singleListing.branding.listing_agent.details.phone
      : "";

  const emailOffice = singleListing.office && singleListing.office.email;

  const emailManagement =
    singleListing.management && singleListing.management.email;

  const emailAgent =
    singleListing.agents &&
    singleListing.agents[0] &&
    singleListing.agents[0].email;

  if (
    !phoneOffice1 &&
    !phoneOffice2 &&
    !phoneAgent &&
    !emailOffice &&
    !emailManagement &&
    !emailAgent
  ) {
    return <></>;
  }
  return (
    <section className="contact">
      <h3>Contact</h3>

      {emailManagement ? (
        <label>
          <div>
            <span className="icon" aria-hidden="true">
              <MdMailOutline />
            </span>
            Email(Management)
          </div>
          <b>{emailManagement}</b>
        </label>
      ) : (
        <></>
      )}
      {emailOffice ? (
        <label>
          <div>
            <span className="icon" aria-hidden="true">
              <MdMailOutline />
            </span>
            Email(Office)
          </div>
          <b>{emailOffice}</b>
        </label>
      ) : (
        <></>
      )}
      {emailAgent ? (
        <label>
          <div>
            <span className="icon" aria-hidden="true">
              <MdMailOutline />
            </span>
            Email(Agent)
          </div>
          <b>{emailAgent}</b>
        </label>
      ) : (
        <></>
      )}

      {phoneOffice1 ? (
        <label>
          <div>
            <span className="icon" aria-hidden="true">
              <BiPhone />
            </span>
            Phone(Office)
          </div>
          <b>{phoneOffice1}</b>
        </label>
      ) : (
        <>
          {phoneOffice2 ? (
            <label>
              <div>
                <span className="icon" aria-hidden="true">
                  <BiPhone />
                </span>
                Phone(Office)
              </div>
              <b>{phoneOffice2}</b>
            </label>
          ) : (
            ""
          )}
        </>
      )}
      {phoneAgent && (
        <label>
          <div>
            <span className="icon" aria-hidden="true">
              <BiPhone />
            </span>
            Phone(Agent)
          </div>
          <b>{phoneAgent}</b>
        </label>
      )}
    </section>
  );
}

export default Contact;
