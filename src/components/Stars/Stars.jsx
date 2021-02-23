import PropTypes from 'prop-types';
import Star from '../Star/Star';

export default function Stars({ count }) {
  if ((typeof count !== 'number') || (count < 1) || (count > 5)) return null;

  return (
    <ul class="card-body-stars u-clearfix">
      {(new Array(count)).map(() => (<li><Star/></li>))}
    </ul>
  );
}

Stars.propTypes = {
  count: PropTypes.number.isRequired
};
