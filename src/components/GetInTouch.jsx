const GetInTouch = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-10">Get In Touch</h1>
      <div className="flex items-center justify-center">
        <div className="h-[480px] w-96 lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1634.569366712022!2d91.86904129798839!3d22.571626821210607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2b2c939e19fd%3A0xf64ca46572ffd75a!2sAbdullahpur%20Government%20Primary%20School!5e1!3m2!1sen!2sbd!4v1688374051133!5m2!1sen!2sbd"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
