import propTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {

  return (
    <>
        <h1 data-testid="test-title"> { title } </h1>
        <p>{ subTitle }</p>
        <p>{ subTitle }</p>
        <p>{ name }</p>        
    </>
  );
}

FirstApp.propTypes = {
  title: propTypes.string.isRequired,
  subTitle: propTypes.string
}

FirstApp.defaultProps = {
  name: 'Fernando Herrera',
  subTitle: 'No hay subtítulo',
  // title: 'No hay título',
}