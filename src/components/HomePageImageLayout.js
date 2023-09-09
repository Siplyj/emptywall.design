import classes from './HomePageImageLayout.module.css';

function HomePageImageLayout() {
	return (
		<div className={classes.homepage_main_image_wrapper}>
			<div>
				<div className={classes.homepage_main_image_data}>
					<h1 className="block_title">Let's Create Your Dream Interior</h1>
					<p className="block_description">The world needs innovators and problem solvers who turn challenges into greater opportunities.</p>
				</div>
			</div>
		</div>
	)
}

export default HomePageImageLayout;