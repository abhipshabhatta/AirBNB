import { Link } from 'react-router-dom';
import '../styles.css';

const AppartmectSquare = ({appartment}) => {
    return(
		<Link to={`/apartment/${appartment.id}`}>
			<article className="card">
				<h3>{appartment.title}</h3>
				<img className="card-img" src={appartment.cover} alt={appartment.title} />
			</article>
		</Link>
    )
}

export default AppartmectSquare;