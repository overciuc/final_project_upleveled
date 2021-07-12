import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
// eslint-disable-next-line import/no-unresolved
import 'leaflet-defaulticon-compatibility';
import { css } from '@emotion/react';
import * as L from 'leaflet';
import Link from 'next/link';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const popUpStyles = css`
  width: 300px;
  min-height: 120px;
  max-height: 140px;
  > div {
    margin-left: 10px;
    margin-top: 10px;
  }

  > div > span {
    font-size: 18px;
    color: #0bc6d2;
    letter-spacing: 1.2px;
  }
  > div > span + span {
    font-size: 18px;
    color: gray;
  }
  > div > span {
    color: #0bc6d2;
    font-size: 18px;
  }
  > div > span + span {
    color: gray;
    font-size: 18px;
  }

  > div + div + div {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  > div > span > a {
    text-decoration: none;
    color: red;
    font-size: 18px;
  }
`;

const Map = (props: any) => {
  const leafIcon = L.Icon.extend({
    options: {},
  });

  const oneIcon = new leafIcon();
  oneIcon.options.iconUrl = '/images/pin1.svg';

  const twoIcon = new leafIcon();
  twoIcon.options.iconUrl = '/images/pin2.svg';

  const threeIcon = new leafIcon();
  threeIcon.options.iconUrl = '/images/pin3.svg';

  const fourIcon = new leafIcon();
  fourIcon.options.iconUrl = '/images/pin4.svg';

  const fiveIcon = new leafIcon();
  fiveIcon.options.iconUrl = '/images/pin5.svg';

  const sixIcon = new leafIcon();
  sixIcon.options.iconUrl = '/images/pin6.svg';

  const sevenIcon = new leafIcon();
  sevenIcon.options.iconUrl = '/images/pin7.svg';

  const eightIcon = new leafIcon();
  eightIcon.options.iconUrl = '/images/pin8.svg';

  const nineIcon = new leafIcon();
  nineIcon.options.iconUrl = '/images/pin9.svg';

  const tenIcon = new leafIcon();
  tenIcon.options.iconUrl = '/images/pin10.svg';

  const icons = [
    oneIcon,
    twoIcon,
    threeIcon,
    fourIcon,
    fiveIcon,
    sixIcon,
    sevenIcon,
    eightIcon,
    nineIcon,
    tenIcon,
  ];
  return (
    <MapContainer
      center={[48.2042154830387, 16.368015018501982]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: 898, width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.allReviews.map((review: any) => {
        let score;
        if (props.showSelectionOnMap === 'safety') {
          score = review.safetyScore;
        } else if (props.showSelectionOnMap === 'parks') {
          score = review.parksScore;
        } else if (props.showSelectionOnMap === 'shopping') {
          score = review.shoppingScore;
        } else if (props.showSelectionOnMap === 'kids_friendly') {
          score = review.kidsFriendlyScore;
        } else if (props.showSelectionOnMap === 'public_transport') {
          score = review.publicTransportScore;
        } else if (props.showSelectionOnMap === 'dining') {
          score = review.diningScore;
        } else if (props.showSelectionOnMap === 'entertainment') {
          score = review.entertainmentScore;
        } else if (props.showSelectionOnMap === 'noise_level') {
          score = review.noiseLevelScore;
        }

        return (
          <Marker
            key={`review-${review.id}`}
            position={review.coordinates}
            icon={icons[Math.ceil(score) - 1]}
          >
            <Popup>
              <section css={popUpStyles}>
                <div>
                  <span>District:</span>
                  <span>
                    &nbsp;{review.district}&nbsp;{review.districtName}
                  </span>
                </div>
                <div>
                  <span>Rating:</span>
                  <span>&nbsp;{Math.ceil(score)}</span>
                </div>
                <div>
                  <span>
                    <Link href="#1">
                      <a>View Reviews</a>
                    </Link>
                  </span>
                </div>
              </section>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
