import React from 'react'

export function App() {
  return (
    <div>
      <div className="wrapper">
        <header>
          <p>welcome</p>
        </header>
        <h1 id="app-title">LOREM IPSUM DOLOR</h1>
        {/* <------ this should be underneath everything ----> */}
        <div className="wave_a flip ">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1126.22 1917.5"
            fill="#CDF3FE"
            text-textAnchor="middle"
          >
            <path d="M0,0C39,244,227,268.5,369,271.5s491,0,491,0c125,3,265,37,266,178,.85,120.1-1,1468-1,1468L0,1916.5V0Z" />
          </svg>
        </div>
        <main>
          <section className="mid-blue">
            <div className="text-placement">
              <p>everything in it's place</p>
            </div>
          </section>
          <section>
            <div className="button-placement">
              <button>start</button>
            </div>
            <div className="wave_b">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1126.22 1917.5"
                fill="#64919D"
                text-textAnchor="middle"
              >
                <path d="M0,0C39,244,227,268.5,369,271.5s491,0,491,0c125,3,265,37,266,178,.85,120.1-1,1468-1,1468L0,1916.5V0Z" />
              </svg>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
