
const Experience = () => {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-center mt-5 mb-5 text-blue-950"> Experience</h2>
      <ul className="mt-5 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle ">
            <svg fill="" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-pink-500" viewBox="0 0 495.398 495.398"
              xmlSpace="preserve">
              <g>
                <g>
                  <g>
                    <path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391
				v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158
				c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747
				c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"/>
                    <path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401
				c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79
				c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"/>
                  </g>
                </g>
              </g>
              <path className="bg-pink-500" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10 w-80 bg-slate-200 rounded-md hover:bg-blue-900 hover:text-white">
            <div className="p-5">
            <time className="font-mono italic">2024-2025</time>
            <div className="text-xl font-medium">Next.js Intership</div>
           Edupy Academy
            <li className="">
              <ul>
              Developed and maintained scalable full-stack applications using Next.js, Node.js, and Express.js with TypeScript.Implemented server-side rendering (SSR) and API routes in Next.js for improved performance and SEO.
              </ul>
            </li>
            </div>

          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-end mb-10 w-80 bg-slate-200 rounded-md hover:bg-blue-900 hover:text-white">
          <div className="p-5">
            <time className="font-mono italic">2023</time>
            <div className="text-xl font-medium">Web Development Course</div>
            Programming Hero | Certificate of Completion
            <li className="">
              <ul>
                Completed the comprehensive Complete Web Development course on Programming Hero.
              </ul>
              <ul>
                Acquired hands-on experience with cutting-edge technologies, including React.js, MongoDB, Express.js, and Tailwind CSS.
              </ul>
            </li>
            </div>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default Experience;