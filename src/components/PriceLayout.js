import PriceTable from './PriceTable';
import GeneratePricePDF from './GeneratePricePDF';
import { useMainNavigation } from './Contexts/MainNavigationContext';

import classes from './PriceLayout.module.css';
import { useTranslation } from 'react-i18next';

function PriceLayout() {
	const { t } = useTranslation();
	const { mainNavigationHeight } = useMainNavigation();
	
	return (
		<div
			className={classes.price_wrapper}
			style={{ paddingTop: `${mainNavigationHeight}px` }}
		>
			<h1 className="block_title">{t('price.title')}</h1>
			<span className="block_description">{t('price.description')}</span>
			
			<div id="price_data">
				<PriceTable />
			
				<div className={classes.price_notes} >
					<span className={classes.price_note} >{t('price.note')}</span>

					<h3 className={classes.price_additions_title}>{t('price.additions_title')}</h3>

					<ul className={classes.price_additions_list} >
						<li>{t('price.addition_1')}</li>
						<li>{t('price.addition_2')}</li>
					</ul>

					{/* Real-time PDF generation button */}
					<button className={classes.price_pdf_button} onClick={() => GeneratePricePDF(classes)}>
						{t("price.pdf_button")}
					</button>
				</div>

			</div>
		</div>
	);
};

export default PriceLayout;