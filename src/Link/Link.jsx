import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <li className="mr-10 px-4 hover:bg-red-400 rounded-sm" ><a href={route.path}>{route.name}</a>
        </li>
    );
};

Link.propTypes = {
    route:PropTypes.object
}
export default Link;