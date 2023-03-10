import React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import ReactMapGL, { Marker, NavigationControl, Popup } from 'react-map-gl'

import { LocationType } from '../types'
import { recordAuthentication } from '../auth'
import { isLoggedIn, logout } from '../auth'
import { LoginSuccess, LoginUserType } from '../types'
import map from '../images/map.png'

export function Location() {
  const [viewport, setViewport] = useState({
    latitude: 27.77101804911986,
    longitude: -82.66090611749074,
    zoom: 9.8,
  })

  const [selectedMapLocation, setSelectedMapLocation] =
    useState<LocationType | null>(null)

  const MAPBOX_TOKEN = import.meta.env.VITE_APP_MAPBOX_TOKEN as string
  // console.log(MAPBOX_TOKEN)

  return (
    <>
      <form className="entry-form">
        <p className="form-input">
          <label htmlFor="search">search</label>
          <input type="search" name="search" id="search" />
        </p>

        <button type="submit">submit</button>
      </form>
      <section className="map">
        <ReactMapGL
          initialViewState={viewport}
          style={{ width: '100%', height: '100%' }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={MAPBOX_TOKEN}
          // onViewportChange={setViewport}
        >
          <div style={{ position: 'absolute', left: 10 }}>
            <NavigationControl />
          </div>
          {selectedMapLocation ? (
            <Popup
              latitude={selectedMapLocation.latitude}
              longitude={selectedMapLocation.longitude}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setSelectedMapLocation(null)}
              // offsetTop={-5}
            >
              <div>
                <p>{selectedMapLocation.locationName}</p>
                {/* <p>{selectedMapLocation.address}</p> */}
              </div>
            </Popup>
          ) : null}

          <Marker latitude={27.77101804911986} longitude={-82.66090611749074}>
            <i
              className="fa-solid fa-om"
              style={{ color: 'green' }}
              aria-label="aum"
            />
          </Marker>
        </ReactMapGL>
      </section>
    </>
  )
}
