import Layout from "@/components/Layout"
const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">

    <Hero />
    <Services/>

  </Layout>
)

export default IndexPage

/// Page Sections
const Hero = () => (<div className="relative pt-16 pb-32 flex content-center items-center justify-center"
  style={{
    minHeight: "75vh"
  }}>
  <div className="absolute top-0 w-full h-full bg-center bg-cover"
    style={{
      backgroundImage: "url('https://scx2.b-cdn.net/gfx/news/hires/2018/neuralnetwork.jpg')"
    }}>
    <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
  </div>
  <div className="container relative mx-auto">
    <div className="items-center flex flex-wrap">
      <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
        <div className="pr-1">
          <h1 className="text-white font-semibold text-5xl">
              </h1>
          <p className="mt-4 text-lg text-gray-300">
          Horizon Ai revolutionizes radiology with cloud-deployed ML models for precise anomaly prediction in medical images. Seamlessly integrating Flask, OpenCV, React UI, and Language Model analysis, it enhances diagnostic accuracy and workflow efficiency for healthcare professionals
              </p>
        </div>
      </div>

    </div>
  </div>
  <div
    className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
    style={{ height: "70px" }}
  >
    <svg
      className="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0"
    >
      <polygon
        className="text-gray-300 fill-current"
        points="2560 0 2560 100 0 100"
      ></polygon>
    </svg>
  </div>
</div>)

const Services = () => <section className="pb-20 bg-gray-300 -mt-24">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap">
      <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
              <i className="fas fa-award"></i>
            </div>
            <h6 className="text-xl font-semibold">Training</h6>
            <p className="mt-2 mb-4 text-gray-600">
             Horizon harnesses the power of an extensive dataset, training with over 5000 images to deliver unparalleled accuracy in anomaly prediction for radiology
              </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
              <i className="fas fa-retweet"></i>
            </div>
            <h6 className="text-xl font-semibold">
              Accuracy and Precision
              </h6>
            <p className="mt-2 mb-4 text-gray-600">
            Horizon attains exceptional performance metrics, boasting a remarkable 97.7% accuracy and an impressive 98.1% precision in anomaly prediction, setting a new standard in radiology diagnostics
              </p>
          </div>
        </div>
      </div>

      <div className="pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
              <i className="fas fa-fingerprint"></i>
            </div>
            <h6 className="text-xl font-semibold">
            Models
              </h6>
            <p className="mt-2 mb-4 text-gray-600">
            We Offer Two Specialized Models for Pneumonia's and Tuberculosis Detection
              </p>
          </div>
        </div>
      </div>
    </div>


    
  </div>
</section>

const Featured = () =>  <section className="relative py-20">
<div
  className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
  style={{ height: "80px" }}
>
  <svg
    className="absolute bottom-0 overflow-hidden"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    version="1.1"
    viewBox="0 0 2560 100"
    x="0"
    y="0"
  >
    <polygon
      className="text-white fill-current"
      points="2560 0 2560 100 0 100"
    ></polygon>
  </svg>
</div>

<div className="container mx-auto px-4">
  <div className="items-center flex flex-wrap">
    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
      <img
        alt="..."
        className="max-w-full rounded-lg shadow-lg"
        src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      />
    </div>
    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
      <div className="md:pr-12">
        <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
          <i className="fas fa-rocket text-xl"></i>
        </div>
        <h3 className="text-3xl font-semibold">
          A growing company
            </h3>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          The extension comes with three pre-built pages to help you
          get started faster. You can change the text and images and
          you're good to go.
            </p>
        <ul className="list-none mt-6">
          <li className="py-2">
            <div className="flex items-center">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                  <i className="fas fa-fingerprint"></i>
                </span>
              </div>
              <div>
                <h4 className="text-gray-600">
                  Carefully crafted components
                    </h4>
              </div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                  <i className="fab fa-html5"></i>
                </span>
              </div>
              <div>
                <h4 className="text-gray-600">Amazing page examples</h4>
              </div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                  <i className="far fa-paper-plane"></i>
                </span>
              </div>
              <div>
                <h4 className="text-gray-600">Dynamic components</h4>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</section>

const Team = ()=> <section className="pt-20 pb-48">
<div className="container mx-auto px-4">
  <div className="flex flex-wrap justify-center text-center mb-24">
    <div className="w-full lg:w-6/12 px-4">
      <h2 className="text-4xl font-semibold">
        Here are our heroes
          </h2>
      <p className="text-lg leading-relaxed m-4 text-gray-600">
        According to the National Oceanic and Atmospheric
        Administration, Ted, Scambos, NSIDClead scentist, puts the
        potentially record maximum.
          </p>
    </div>
  </div>
  <div className="flex flex-wrap">
    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
      <div className="px-6">
   
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">
            Ryan Tompson
              </h5>
          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
            Web Developer
              </p>
          <div className="mt-6">
            <button
              className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <i className="fab fa-twitter"></i>
            </button>
            <button
              className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <i className="fab fa-facebook-f"></i>
            </button>
            <button
              className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <i className="fab fa-dribbble"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
      <div className="px-6">
      
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">
            Romina Hadid
              </h5>
          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
            Marketing Specialist
              </p>
          <div className="mt-6">
            <button
              className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <i className="fab fa-google"></i>
            </button>
            <button
              className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <i className="fab fa-facebook-f"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
      <div className="px-6">
     
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">
            Alexa Smith
              </h5>
          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
            UI/UX Designer
              </p>
          <div className="mt-6">
            <button
              className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <i className="fab fa-google"></i>
            </button>
            <button
              className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <i className="fab fa-twitter"></i>
            </button>
            <button
              className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <i className="fab fa-instagram"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
      <div className="px-6">
  
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">
            Jenna Kardi
              </h5>
          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
            Founder and CEO
              </p>
          <div className="mt-6">
            <button
              className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <i className="fab fa-dribbble"></i>
            </button>
            <button
              className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <i className="fab fa-google"></i>
            </button>
            <button
              className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <i className="fab fa-twitter"></i>
            </button>
            <button
              className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <i className="fab fa-instagram"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

const Finisher = ()=><section className="pb-20 relative block bg-gray-900">
<div
  className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
  style={{ height: "80px" }}
>
  <svg
    className="absolute bottom-0 overflow-hidden"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    version="1.1"
    viewBox="0 0 2560 100"
    x="0"
    y="0"
  >
    <polygon
      className="text-gray-900 fill-current"
      points="2560 0 2560 100 0 100"
    ></polygon>
  </svg>
</div>

<div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
  <div className="flex flex-wrap text-center justify-center">
    <div className="w-full lg:w-6/12 px-4">
      <h2 className="text-4xl font-semibold text-white">
        Build something
          </h2>
      <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
        Put the potentially record low maximum sea ice extent tihs year down to low ice.
        According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
          </p>
    </div>
  </div>
  <div className="flex flex-wrap mt-12 justify-center">
    <div className="w-full lg:w-3/12 px-4 text-center">
      <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
        <i className="fas fa-medal text-xl"></i>
      </div>
      <h6 className="text-xl mt-5 font-semibold text-white">
        Excelent Services
          </h6>
      <p className="mt-2 mb-4 text-gray-500">
        Some quick example text to build on the card title and make up
        the bulk of the card's content.
          </p>
    </div>
    <div className="w-full lg:w-3/12 px-4 text-center">
      <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
        <i className="fas fa-poll text-xl"></i>
      </div>
      <h5 className="text-xl mt-5 font-semibold text-white">
        Grow your market
          </h5>
      <p className="mt-2 mb-4 text-gray-500">
        Some quick example text to build on the card title and make up
        the bulk of the card's content.
          </p>
    </div>
    <div className="w-full lg:w-3/12 px-4 text-center">
      <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
        <i className="fas fa-lightbulb text-xl"></i>
      </div>
      <h5 className="text-xl mt-5 font-semibold text-white">
        Launch time
          </h5>
      <p className="mt-2 mb-4 text-gray-500">
        Some quick example text to build on the card title and make up
        the bulk of the card's content.
          </p>
    </div>
  </div>
</div>
</section>

const Contact = ()=>  <section className="relative block py-24 lg:pt-0 bg-gray-900">
<div className="container mx-auto px-4">
  <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
    <div className="w-full lg:w-6/12 px-4">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
        <div className="flex-auto p-5 lg:p-10">
          <h4 className="text-2xl font-semibold">
            Want to work with us?
              </h4>
          <p className="leading-relaxed mt-1 mb-4 text-gray-600">
            Complete this form and we will get back to you in 24 hours.
              </p>
          <div className="relative w-full mb-3 mt-8">
            <label
              className="block uppercase text-gray-700 text-xs font-bold mb-2"
              htmlFor="full-name"
            >
              Full Name
                </label>
            <input
              type="text"
              className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Full Name"
              style={{ transition: "all .15s ease" }}
            />
          </div>

          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
                </label>
            <input
              type="email"
              className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Email"
              style={{ transition: "all .15s ease" }}
            />
          </div>

          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-gray-700 text-xs font-bold mb-2"
              htmlFor="message"
            >
              Message
                </label>
            <textarea
              rows={4}
              cols={80}
              className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Type a message..."
            />
          </div>
          <div className="text-center mt-6">
            <button
              className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              style={{ transition: "all .15s ease" }}
            >
              Send Message
                </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

