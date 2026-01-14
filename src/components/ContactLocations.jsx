import s from "./ContactLocations.module.css";

export default function LocationsSection() {
  return (
    <section className={s.hero}>
      <div className="container">

        <h2 className={s.sectionTitle}>Our Office Locations</h2>

        {/* BENGALURU */}
        <div className={s.locationCard}>
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3 className={s.city}>Bengaluru - Corporate Office</h3>
              <p className={s.address}>
                1st Floor, Darshan Plazza, Dwaraka Nagar,
                Banashankari 6th Stage 1st Block,
                Channasandra, Bengaluru, Karnataka 560098
              </p>
            </div>
            <div className="col-md-6">
              <iframe
                title="Bengaluru Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1118!2d77.5206129!3d12.900526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3faeb14f4ccf%3A0x230f219118d65659!2sNakshatra%20Namaha%20Creations!5e0!3m2!1sen!2sin!4v20260114"
                className={s.map}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* MYSURU */}
        <div className={`${s.locationCard} ${s.reverse}`}>
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2">
              <h3 className={s.city}>Mysuru - Branch Office</h3>
              <p className={s.address}>
                SUSWANI TOWERS, Akkamahadevi Rd,
                JP Nagar 2nd Stage, C-Block,
                Mysuru, Karnataka 570008
              </p>
            </div>
            <div className="col-md-6 order-md-1">
              <iframe
                title="Mysuru Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.7669!2d76.644418!3d12.264049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf6f2a2f997a55%3A0x84ddd6f882fbbf3a!2sNakshatra%20Namaha%20Creations%20Mysuru!5e0!3m2!1sen!2sin!4v20260114"
                className={s.map}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* HYDERABAD */}
        <div className={s.locationCard}>
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3 className={s.city}>Hyderabad </h3>
              <p className={s.address}>
                64/2 RT, Prakash Nagar,
                Begumpet, Hyderabad,
                Telangana 500016
              </p>
            </div>
            <div className="col-md-6">
              <iframe
                title="Hyderabad Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7612.7356!2d78.46998!3d17.442102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91cf429c8d33%3A0x354bddb11d7d6989!2sNakshatra%20Namaha%20Creations%20Hyderabad!5e0!3m2!1sen!2sin!4v20260114"
                className={s.map}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* MUMBAI */}
        <div className={`${s.locationCard} ${s.reverse}`}>
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2">
              <h3 className={s.city}>Mumbai </h3>
              <p className={s.address}>
                Lodha Signet, 302,
                Kolshet Road,
                Thane West,
                Maharashtra 400607
              </p>
            </div>
            <div className="col-md-6 order-md-1">
              <iframe
                title="Mumbai Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.4577!2d72.9854952!3d19.2339479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9d5e8737a41%3A0xbd231851659a1466!2sLodha%20Signet!5e0!3m2!1sen!2sin!4v20260114"
                className={s.map}
                loading="lazy"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
