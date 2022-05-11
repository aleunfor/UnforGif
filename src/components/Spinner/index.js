import ContentLoader from "react-content-loader"

const Spinner = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={150}
    viewBox="0 0 400 150"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-11" y="0" rx="5" ry="5" width="549" height="20" /> 
    <rect x="-3" y="33" rx="5" ry="5" width="457" height="19" /> 
    <rect x="-4" y="67" rx="5" ry="5" width="515" height="18" /> 
    <rect x="-5" y="98" rx="5" ry="5" width="440" height="19" />
  </ContentLoader>
)

export default Spinner