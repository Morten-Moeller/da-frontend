import * as PropTypes from 'prop-types';

export const Card = ({ title, content }) => {

  return (
    <div style={{ border: '1px solid rebeccapurple', padding: '10px', margin: '10px' }}>
      <h1>{title}</h1>
      <span>{content}</span>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}
