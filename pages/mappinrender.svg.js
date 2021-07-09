import MapPinColored from '../components/MapPinColored';

export default function MapPinRender(props) {
  return <MapPinColored color={props.color} />;
}

export async function getServerSideProps(context) {
  context.res.setHeader('Content-Type', 'image');
  return {
    props: {
      color: context.query.color,
    },
  };
}
