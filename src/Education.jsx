const Education = () => {
  return (
    <div>
      <section
        id="section4"
        className="min-h-screen p-8 text-white overflow-hidden"
      >
        <h2 className="text-4xl font-bold text-center mb-8 transition-all duration-300 hover:text-white hover:scale-125">
          My Education
        </h2>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="md:w-1/2 md:pr-4 mb-8 md:mb-0">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-opacity-20 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">
                Heritage Institute of Technology, Kolkata – MAKAUT (2022 – 2024)
              </h3>
              <h4 className="text-lg mb-1">Master of Computer Application</h4>
              <h5 className="text-sm">CGPA: 7.12/10</h5>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg mt-4 transition-all duration-300 hover:bg-opacity-20 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">
                Mahishadal Raj College, Purba Medinipur – Vidyasagar University
                (2019 – 2022)
              </h3>
              <h4 className="text-lg mb-1">Bachelor of Computer Science</h4>
              <h5 className="text-sm">CGPA: 8.54/10</h5>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-4">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-opacity-20 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">
                Haldia Govt. Spon. Vivekananda Vidyabhaban, Purba Medinipur
              </h3>
              <h4 className="text-lg mb-1">
                West Bengal Council of Higher Secondary Education
              </h4>
              <h5 className="text-sm">Percentage: 65.30%</h5>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg mt-4 transition-all duration-300 hover:bg-opacity-20 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">
                Vivekananda Mission Asram Sikshayatan, Purba Medinipur
              </h3>
              <h4 className="text-lg mb-1">
                West Bengal Board of Secondary Education
              </h4>
              <h5 className="text-sm">Percentage: 83.20%</h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
