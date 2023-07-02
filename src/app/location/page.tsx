const page = () => {
  return (
    <div className="container">
      <div className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11383.570026598722!2d34.17145751213378!3d44.496869336573596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4094c9ad3c71fea1%3A0x7ad1a0074bc2c2d!2z0K_Qu9GC0LAsINCd0LDQsdC10YDQtdC20L3QsNGP!5e0!3m2!1sru!2s!4v1688323971795!5m2!1sru!2s"
          width="700"
          height="550"
          style={{ border: 0 }}
          // allowfullscreen="true"
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
