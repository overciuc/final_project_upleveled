import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
// eslint-disable-next-line import/no-unresolved
import 'leaflet-defaulticon-compatibility';
import { css } from '@emotion/react';
import * as L from 'leaflet';
import { MapContainer, Marker, Polygon, Popup, TileLayer } from 'react-leaflet';
import { districtShapes } from '../util/districts';
import getRatingColor from '../util/helpers';

const popUpStyles = css`
  width: 590px;
  height: 490px;
  overflow-x: hidden;
  overflow-y: auto;
  margin-left: 20px;
  margin-top: 30px;

  > h5 {
    font-size: 20px;
    margin-top: 15px;
    color: gray;
  }
  > div {
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
    > span {
      font-size: 16px;
      color: gray;
      font-weight: normal;
    }
  }
  > div + div {
    margin-bottom: 40px;
  }
  > div + div > span + span {
    font-weight: bold;
    font-size: 24px;
    color: gray;
  }

  > div + div > span + span + span {
    font-size: 16px;
    color: gray;
    font-weight: normal;
  }
  > div > span {
    color: #0bc6d2;
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

const commentSectionStyle = css`
  display: flex;
  font-size: 20px;
  margin-top: 20px;
  > p {
    margin: auto 0;
    width: 40px;
  }
  > span {
    font-style: italic;
    color: gray;
    margin-left: 20px;
    text-align: left;
  }
`;

const commentSectionUserDetails = css`
  display: flex;
  font-size: 16px;
  color: #0bc6d2;
  margin-top: 10px;
  margin-left: 50px;

  > span {
    font-style: italic;
    color: gray;
    text-align: left;
  }
`;

const lineSeparator = css`
  border: 0;
  height: 2px;
  background-image: linear-gradient(to right, transparent, #ccc, transparent);
  margin-top: 20px;
  margin-bottom: 20px;
`;

const polygonTransitionStyles = css`
  transition: transform 0.3s ease;
  :hover {
    transform: translate(0, -10px);
    box-shadow: 0px 9px 15px 5px black;
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

  const firstDistrict = {
    color: 'hotPink',
    opacity: 0.3,
    fillOpacity: 0.2,
    fillColor: 'hotPink',
  };
  const secondDistrict = {
    color: 'indigo',
    opacity: 0.3,
    fillOpacity: 0.2,
    fillColor: 'indigo',
  };
  const thirdDistrict = {
    color: 'lawnGreen',
    opacity: 0.3,
    fillOpacity: 0.2,
    fillColor: 'lawnGreen',
  };
  const fourthDistrict = {
    color: 'dodgerBlue',
    opacity: 0.3,
    fillOpacity: 0.2,
    fillColor: 'dodgerBlue',
  };
  const fifthDistrict = {
    color: 'fireBrick',
    opacity: 0.3,
    fillOpacity: 0.2,
    fillColor: 'fireBrick',
  };
  const sixthDistrict = {
    color: 'darkOrange',
    opacity: 0.3,
    fillOpacity: 0.2,
    fillColor: 'darkOrange',
  };
  const seventhDistrict = {
    color: 'darkTurquoise',
    opacity: 0.3,
    fillOpacity: 0.2,
    fillColor: 'darkTurquoise',
  };
  const eigthDistrict = {
    color: 'green',
    opacity: 0.3,
    fillOpacity: 0.2,
    fillColor: 'green',
  };
  const ninthDistrict = {
    color: 'blue',
    opacity: 0.3,
    fillOpacity: 0.2,
    fillColor: 'blue',
  };
  const tenthDistrict = {
    color: 'coral',
    opacity: 0.3,
    fillOpacity: 0.2,
    fillColor: 'coral',
  };
  const eleventhDistrict = {
    color: 'cornFlowerBlue',
    opacity: 0.3,
    fillOpacity: 0.2,
    fillColor: 'cornFlowerBlue',
  };
  const twelthDistrict = {
    color: 'chocolate',
    opacity: 0.3,
    fillOpacity: 0.2,
    fillColor: 'chocolate',
  };
  const thirteenthDistrict = {
    color: 'aqua',
    opacity: 0.3,
    fillOpacity: 0.2,
    fillColor: 'aqua',
  };
  const fourteenthDistrict = {
    color: 'darkOrchid',
    opacity: 0.3,
    fillOpacity: 0.2,
    fillColor: 'darkOrchid',
  };
  const fifteenthDistrict = {
    color: 'mediumSlateBlue',
    opacity: 0.3,
    fillOpacity: 0.2,
    fillColor: 'mediumSlateBlue',
  };
  const sixteenthDistrict = {
    color: 'mediumSeaGreen',
    opacity: 0.3,
    fillOpacity: 0.2,
    fillColor: 'mediumSeaGreen',
  };
  const seventeenthDistrict = {
    color: 'mediumBlue',
    opacity: 0.3,
    fillOpacity: 0.2,
    fillColor: 'mediumBlue',
  };
  const eigteenthDistrict = {
    color: 'mediumVioletRed',
    opacity: 0.3,
    fillOpacity: 0.2,
    fillColor: 'mediumVioletRed',
  };
  const ninteenthDistrict = {
    color: 'paleVioletRed',
    opacity: 0.3,
    fillOpacity: 0.2,
    fillColor: 'paleVioletRed',
  };
  const twentiethDistrict = {
    color: 'rebeccaPurple',
    opacity: 0.3,
    fillOpacity: 0.2,
    fillColor: 'rebeccaPurple',
  };
  const twentyFirstDistrict = {
    color: 'sandyBrown',
    opacity: 0.3,
    fillOpacity: 0.2,
    fillColor: 'sandyBrown',
  };
  const twentySecondDistrict = {
    color: 'salmon',
    opacity: 0.3,
    fillOpacity: 0.2,
    fillColor: 'salmon',
  };
  const twentyThirdDistrict = {
    color: 'seaGreen',
    opacity: 0.3,
    fillOpacity: 0.2,
    fillColor: 'seaGreen',
  };

  const firstDistrictPolygon = districtShapes[3].coordinates;
  const secondDistrictPolygon = districtShapes[6].coordinates;
  const thirdDistrictPolygon = districtShapes[1].coordinates;
  const fourthDistrictPolygon = districtShapes[19].coordinates;
  const fifthDistrictPolygon = districtShapes[18].coordinates;
  const sixthDistrictPolygon = districtShapes[20].coordinates;
  const seventhDistrictPolygon = districtShapes[0].coordinates;
  const eigthDistrictPolygon = districtShapes[2].coordinates;
  const ninthDistrictPolygon = districtShapes[5].coordinates;
  const tenthDistrictPolygon = districtShapes[16].coordinates;
  const eleventhDistrictPolygon = districtShapes[15].coordinates;
  const twelthDistrictPolygon = districtShapes[17].coordinates;
  const thirteenthDistrictPolygon = districtShapes[21].coordinates;
  const fourteenthDistrictPolygon = districtShapes[10].coordinates;
  const fifteenthDistrictPolygon = districtShapes[22].coordinates;
  const sixteenthDistrictPolygon = districtShapes[4].coordinates;
  const seventeenthDistrictPolygon = districtShapes[8].coordinates;
  const eigteenthDistrictPolygon = districtShapes[7].coordinates;
  const ninteenthDistrictPolygon = districtShapes[11].coordinates;
  const twentiethDistrictPolygon = districtShapes[9].coordinates;
  const twentyFirstDistrictPolygon = districtShapes[13].coordinates;
  const twentySecondDistrictPolygon = districtShapes[12].coordinates;
  const twentyThirdDistrictPolygon = districtShapes[14].coordinates;

  return (
    <MapContainer
      center={[48.2042154830387, 16.368015018501982]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: 900, width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polygon pathOptions={firstDistrict} positions={firstDistrictPolygon} />
      <Polygon pathOptions={secondDistrict} positions={secondDistrictPolygon} />
      <Polygon pathOptions={thirdDistrict} positions={thirdDistrictPolygon} />
      <Polygon pathOptions={fourthDistrict} positions={fourthDistrictPolygon} />
      <Polygon pathOptions={fifthDistrict} positions={fifthDistrictPolygon} />
      <Polygon pathOptions={sixthDistrict} positions={sixthDistrictPolygon} />
      <Polygon
        pathOptions={seventhDistrict}
        positions={seventhDistrictPolygon}
      />
      <Polygon pathOptions={eigthDistrict} positions={eigthDistrictPolygon} />
      <Polygon pathOptions={ninthDistrict} positions={ninthDistrictPolygon} />
      <Polygon pathOptions={tenthDistrict} positions={tenthDistrictPolygon} />
      <Polygon
        pathOptions={eleventhDistrict}
        positions={eleventhDistrictPolygon}
      />
      <Polygon pathOptions={twelthDistrict} positions={twelthDistrictPolygon} />
      <Polygon
        pathOptions={thirteenthDistrict}
        positions={thirteenthDistrictPolygon}
      />
      <Polygon
        pathOptions={fourteenthDistrict}
        positions={fourteenthDistrictPolygon}
      />
      <Polygon
        pathOptions={fifteenthDistrict}
        positions={fifteenthDistrictPolygon}
      />
      <Polygon
        pathOptions={sixteenthDistrict}
        positions={sixteenthDistrictPolygon}
      />
      <Polygon
        pathOptions={seventeenthDistrict}
        positions={seventeenthDistrictPolygon}
      />
      <Polygon
        pathOptions={eigteenthDistrict}
        positions={eigteenthDistrictPolygon}
      />
      <Polygon
        pathOptions={ninteenthDistrict}
        positions={ninteenthDistrictPolygon}
        css={polygonTransitionStyles}
      />
      <Polygon
        pathOptions={twentiethDistrict}
        positions={twentiethDistrictPolygon}
      />
      <Polygon
        pathOptions={twentyFirstDistrict}
        positions={twentyFirstDistrictPolygon}
      />
      <Polygon
        pathOptions={twentySecondDistrict}
        positions={twentySecondDistrictPolygon}
      />
      <Polygon
        pathOptions={twentyThirdDistrict}
        positions={twentyThirdDistrictPolygon}
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
            <Popup maxWidth={600} minWidth={600} maxHeight={500}>
              <section css={popUpStyles}>
                <div>
                  <span>District:</span>
                  <span>
                    &nbsp;{review.district}&nbsp;{review.districtName}
                  </span>
                </div>

                <div>
                  <span>Average rating:</span>
                  <span>
                    &nbsp;{Math.ceil(score)}
                    <span>/10</span>
                  </span>
                  <span>
                    &nbsp;&nbsp;from {review.totalNumberOfReviews} reviews
                  </span>
                </div>

                {review.comments.map((comment: any) => {
                  let commentText;
                  let commentScore;

                  if (props.showSelectionOnMap === 'safety') {
                    commentText = comment.safetyComment;
                    commentScore = comment.safetyScore;
                  } else if (props.showSelectionOnMap === 'parks') {
                    commentText = comment.parksComment;
                    commentScore = comment.parksScore;
                  } else if (props.showSelectionOnMap === 'shopping') {
                    commentText = comment.shoppingComment;
                    commentScore = comment.shoppingScore;
                  } else if (props.showSelectionOnMap === 'kids_friendly') {
                    commentText = comment.kidsFriendlyComment;
                    commentScore = comment.kidsFriendlyScore;
                  } else if (props.showSelectionOnMap === 'public_transport') {
                    commentText = comment.publicTransportComment;
                    commentScore = comment.publicTransportScore;
                  } else if (props.showSelectionOnMap === 'dining') {
                    commentText = comment.diningComment;
                    commentScore = comment.diningScore;
                  } else if (props.showSelectionOnMap === 'entertainment') {
                    commentText = comment.entertainmentComment;
                    commentScore = comment.entertainmentScore;
                  } else if (props.showSelectionOnMap === 'noise_level') {
                    commentText = comment.noiseLevelComment;
                    commentScore = comment.noiseLevelScore;
                  }
                  const fillColor = getRatingColor(commentScore);
                  return (
                    <div key={`comment-${comment.id}`}>
                      <div css={commentSectionStyle}>
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill={fillColor}
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </p>
                        <span> "{commentText}"</span>
                      </div>
                      <div css={commentSectionUserDetails}>
                        review by <span>&nbsp;{comment.username}&nbsp;</span> on
                        <span>&nbsp;{comment.dateString}</span>
                      </div>
                      <hr css={lineSeparator} />
                    </div>
                  );
                })}
              </section>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
