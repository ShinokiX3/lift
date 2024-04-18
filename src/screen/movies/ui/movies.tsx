import { useEffect, useState } from "react";
import cls from './movies.module.scss';
import { useTypedSelector } from 'hooks/useTypedSelector';
import movieService from "api/movies/movies.service";
import { VIEW_LIMIT } from '../const/movies.const';
import { Movie } from "api/movies/movies.type";
import { Loader } from 'shared/ui/loader/loader';
import Card from "widgets/card/ui/card";
import ErrorIcon from 'shared/assets/svg/emoji/image 501.svg?react';

const Movies = () => {
	const data = useTypedSelector(state => state.quiz.answers);

	const [movies, setMovies] = useState<Movie[]>([]);
	const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

	useEffect(() => {
		(async () => {
			try {
				const title = data.find(asnwer => asnwer.id === 'title')?.answers[0] ?? '';
				const response = await movieService.getMovies(title);
				
				if (response.Response === 'False') 
					setError('Oops, no movie found!');
				else 
					setMovies(response.Search.slice(0, VIEW_LIMIT));

				setLoading(false);
			} catch (error) {
				setError('Failed with request!');
				setLoading(false);
			}
		})()
	}, [data]);

	if (loading) {
		return (
            <div  className={`${cls.wrapper} ${cls.center}`}>
				<Loader size='100px' />
			</div>
        )
	}

    if (error) {
        return (
            <div className={`${cls.wrapper} ${cls.center}`}>
                <ErrorIcon width={'150px'} height={'150px'} />
                <h2>{error}</h2>
            </div>
        )
    }
	
	return (
		<ul className={cls.wrapper}>
			{movies?.map(({ Title, Poster, Year }) => (
                <li key={Title}>
                    <Card
						image={Poster} 
						year={Year} 
						title={Title} 
					/>
                </li>
            ))}
		</ul>
	)
}

export default Movies;