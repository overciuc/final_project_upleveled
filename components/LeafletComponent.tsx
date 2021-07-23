import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
// eslint-disable-next-line import/no-unresolved
import 'leaflet-defaulticon-compatibility';
import { css } from '@emotion/react';
import * as L from 'leaflet';
import { useState } from 'react';
import {
  LayersControl,
  MapContainer,
  Marker,
  Polygon,
  Popup,
  TileLayer,
} from 'react-leaflet';
import { districtShapes } from '../util/districts';
import { getRatingColor } from '../util/misc';
import MapLegend from './MapLegend';

const popUpStyles = css`
  width: 590px;
  height: 490px;
  margin-left: 20px;
  margin-top: 30px;

  > div {
    margin-top: 10px;
  }
`;

const districtLineStyles = css`
  > span {
    font-size: 18px;
    color: #0bc6d2;
    letter-spacing: 1.2px;
  }
  > span + span {
    font-size: 18px;
    color: gray;
    > span {
      font-size: 16px;
      color: gray;
      font-weight: normal;
    }
  }
`;

const averageRatingLineStyles = css`
  margin-top: 10px;
  > span {
    font-size: 18px;
    color: #0bc6d2;
    letter-spacing: 1.2px;
  }
  > span + span {
    font-size: 18px;
    color: gray;
    > span {
      font-size: 16px;
      color: gray;
      font-weight: normal;
    }
  }
`;

const scrollableContainer = css`
  overflow-x: hidden;
  overflow-y: auto;
  width: 550px;
  height: 400px;
`;

const commentSectionStyle = css`
  display: flex;
  font-size: 20px;
  margin-top: 40px;
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
  }
`;

const Map = (props: any) => {
  const [map, setMap] = useState<L.Map>();

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
    fillOpacity: 0,
  };
  const secondDistrict = {
    fillOpacity: 0,
  };
  const thirdDistrict = {
    fillOpacity: 0,
  };
  const fourthDistrict = {
    fillOpacity: 0,
  };
  const fifthDistrict = {
    fillOpacity: 0,
  };
  const sixthDistrict = {
    fillOpacity: 0,
  };
  const seventhDistrict = {
    fillOpacity: 0,
  };
  const eigthDistrict = {
    fillOpacity: 0,
  };
  const ninthDistrict = {
    fillOpacity: 0,
  };
  const tenthDistrict = {
    fillOpacity: 0,
  };
  const eleventhDistrict = {
    fillOpacity: 0,
  };
  const twelthDistrict = {
    fillOpacity: 0,
  };
  const thirteenthDistrict = {
    fillOpacity: 0,
  };
  const fourteenthDistrict = {
    fillOpacity: 0,
  };
  const fifteenthDistrict = {
    fillOpacity: 0,
  };
  const sixteenthDistrict = {
    fillOpacity: 0,
  };
  const seventeenthDistrict = {
    fillOpacity: 0,
  };
  const eigteenthDistrict = {
    fillOpacity: 0,
  };
  const ninteenthDistrict = {
    fillOpacity: 0,
  };
  const twentiethDistrict = {
    fillOpacity: 0,
  };
  const twentyFirstDistrict = {
    fillOpacity: 0,
  };
  const twentySecondDistrict = {
    fillOpacity: 0,
  };
  const twentyThirdDistrict = {
    fillOpacity: 0,
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
      style={{ height: '90vh', width: '100%' }}
      whenCreated={setMap}
      animate={true}
    >
      <LayersControl position="topright">
        <LayersControl.BaseLayer name="Black and White">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer checked name="With color">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>

        <MapLegend map={map} />
        <Polygon
          pathOptions={firstDistrict}
          positions={firstDistrictPolygon}
          css={polygonTransitionStyles}
        />
        <Polygon
          pathOptions={secondDistrict}
          positions={secondDistrictPolygon}
          css={polygonTransitionStyles}
        />
        <Polygon
          pathOptions={thirdDistrict}
          positions={thirdDistrictPolygon}
          css={polygonTransitionStyles}
        />
        <Polygon
          pathOptions={fourthDistrict}
          positions={fourthDistrictPolygon}
          css={polygonTransitionStyles}
        />
        <Polygon
          pathOptions={fifthDistrict}
          positions={fifthDistrictPolygon}
          css={polygonTransitionStyles}
        />
        <Polygon
          pathOptions={sixthDistrict}
          positions={sixthDistrictPolygon}
          css={polygonTransitionStyles}
        />
        <Polygon
          pathOptions={seventhDistrict}
          positions={seventhDistrictPolygon}
          css={polygonTransitionStyles}
        />
        <Polygon
          pathOptions={eigthDistrict}
          positions={eigthDistrictPolygon}
          css={polygonTransitionStyles}
        />
        <Polygon
          pathOptions={ninthDistrict}
          positions={ninthDistrictPolygon}
          css={polygonTransitionStyles}
        />
        <Polygon
          pathOptions={tenthDistrict}
          positions={tenthDistrictPolygon}
          css={polygonTransitionStyles}
        />
        <Polygon
          pathOptions={eleventhDistrict}
          positions={eleventhDistrictPolygon}
          css={polygonTransitionStyles}
        />
        <Polygon
          pathOptions={twelthDistrict}
          positions={twelthDistrictPolygon}
          css={polygonTransitionStyles}
        />
        <Polygon
          pathOptions={thirteenthDistrict}
          positions={thirteenthDistrictPolygon}
          css={polygonTransitionStyles}
        />
        <Polygon
          pathOptions={fourteenthDistrict}
          positions={fourteenthDistrictPolygon}
          css={polygonTransitionStyles}
        />
        <Polygon
          pathOptions={fifteenthDistrict}
          positions={fifteenthDistrictPolygon}
          css={polygonTransitionStyles}
        />
        <Polygon
          pathOptions={sixteenthDistrict}
          positions={sixteenthDistrictPolygon}
          css={polygonTransitionStyles}
        />
        <Polygon
          pathOptions={seventeenthDistrict}
          positions={seventeenthDistrictPolygon}
          css={polygonTransitionStyles}
        />
        <Polygon
          pathOptions={eigteenthDistrict}
          positions={eigteenthDistrictPolygon}
          css={polygonTransitionStyles}
        />
        <Polygon
          pathOptions={ninteenthDistrict}
          positions={ninteenthDistrictPolygon}
          css={polygonTransitionStyles}
        />
        <Polygon
          pathOptions={twentiethDistrict}
          positions={twentiethDistrictPolygon}
          css={polygonTransitionStyles}
        />
        <Polygon
          pathOptions={twentyFirstDistrict}
          positions={twentyFirstDistrictPolygon}
          css={polygonTransitionStyles}
        />
        <Polygon
          pathOptions={twentySecondDistrict}
          positions={twentySecondDistrictPolygon}
          css={polygonTransitionStyles}
        />
        <Polygon
          pathOptions={twentyThirdDistrict}
          positions={twentyThirdDistrictPolygon}
          css={polygonTransitionStyles}
        />

        {/* eslint-disable-next-line array-callback-return*/}
        {props.allReviews.reviews.map((review: any) => {
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
          if (review.latitude && review.longitude) {
            return (
              <Marker
                key={`review-${review.id}`}
                position={[review.latitude, review.longitude]}
                icon={icons[Math.ceil(score) - 1]}
                data-cy="find-marker-on-map"
              >
                <Popup maxWidth={600} minWidth={600} maxHeight={500}>
                  <section css={popUpStyles}>
                    <div>
                      <div css={districtLineStyles}>
                        <span>District:</span>
                        <span>
                          &nbsp;{review.comments[0].district}&nbsp;
                          {review.comments[0].districtName}
                        </span>
                      </div>

                      <div css={averageRatingLineStyles}>
                        <span>Average rating:</span>
                        <span>
                          &nbsp;{Math.ceil(score)}
                          <span>/10</span>
                        </span>
                        <span>
                          &nbsp;&nbsp;from {review.totalNumberOfReviews} reviews
                        </span>
                      </div>
                    </div>
                    <div css={scrollableContainer}>
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
                        } else if (
                          props.showSelectionOnMap === 'kids_friendly'
                        ) {
                          commentText = comment.kidsFriendlyComment;
                          commentScore = comment.kidsFriendlyScore;
                        } else if (
                          props.showSelectionOnMap === 'public_transport'
                        ) {
                          commentText = comment.publicTransportComment;
                          commentScore = comment.publicTransportScore;
                        } else if (props.showSelectionOnMap === 'dining') {
                          commentText = comment.diningComment;
                          commentScore = comment.diningScore;
                        } else if (
                          props.showSelectionOnMap === 'entertainment'
                        ) {
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

                              <span>
                                {commentText ? `"${commentText}"` : ''}
                              </span>
                            </div>
                            <div css={commentSectionUserDetails}>
                              review by
                              <span>&nbsp;{comment.username}&nbsp;</span> on
                              <span>&nbsp;{comment.dateString}</span>
                            </div>
                            <hr css={lineSeparator} />
                          </div>
                        );
                      })}
                    </div>
                  </section>
                </Popup>
              </Marker>
            );
          }
        })}
      </LayersControl>
    </MapContainer>
  );
};

export default Map;
