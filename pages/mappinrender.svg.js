import MapPinColored from '../components/MapPinColored';

export default function MapPinRender(props) {
  return <MapPinColored color={props.color} />;
}

export async function getServerSideProps(context) {
  // Redirect from HTTP to HTTPS on Heroku
  if (
    context.req.headers.host &&
    context.req.headers['x-forwarded-proto'] &&
    context.req.headers['x-forwarded-proto'] !== 'https'
  ) {
    return {
      redirect: {
        destination: `https://${context.req.headers.host}/mappinrender.svg.js`,
        permanent: true,
      },
    };
  }

  context.res.setHeader('Content-Type', 'image');
  return {
    props: {
      color: context.query.color,
    },
  };
}
