import classes from './PriceTable.module.css';
import { useTranslation } from 'react-i18next';

function PriceTable() {
	const { t } = useTranslation();
	
	return (
		<table className={classes.price_table}>
			<tbody className={classes.price_table_tbody}>
				<tr className={classes.price_table_tr}>
					<th className={classes.price_table_th} colSpan="2">{t('price.table_title1')}</th>
				</tr>
				<tr className={classes.price_table_tr}>
					<td className={classes.price_table_td}>{t('price.title_200')}</td>
					<td className={classes.price_table_td_cost}>{t('price.value_200')}</td>
				</tr>
				<tr className={classes.price_table_tr}>
					<td className={classes.price_table_td}>{t('price.title_100_200')}</td>
					<td className={classes.price_table_td_cost}>{t('price.value_100_200')}</td>
				</tr>
				<tr className={classes.price_table_tr}>
					<td className={classes.price_table_td}>{t('price.title_40_100')}</td>
					<td className={classes.price_table_td_cost}>{t('price.value_40_100')}</td>
				</tr>
				<tr className={classes.price_table_tr}>
					<td className={classes.price_table_td}>{t('price.title_20_40')}</td>
					<td className={classes.price_table_td_cost}>{t('price.value_20_40')}</td>
				</tr>
				<tr className={classes.price_table_tr}>
					<th className={classes.price_table_th} colSpan="2">{t('price.table_title2')}</th>
				</tr>
				<tr className={classes.price_table_tr}>
					<td className={classes.price_table_td} colSpan="2">{t('price.service_1')}</td>
				</tr>
				<tr className={classes.price_table_tr}>
					<td className={classes.price_table_td} colSpan="2">{t('price.service_2')}</td>
				</tr>
				<tr className={classes.price_table_tr}>
					<td className={classes.price_table_td} colSpan="2">{t('price.service_3')}</td>
				</tr>
				<tr className={classes.price_table_tr}>
					<td className={classes.price_table_td} colSpan="2">{t('price.service_4')}</td>
				</tr>
				<tr className={classes.price_table_tr}>
					<td className={classes.price_table_td} colSpan="2">{t('price.service_5')}</td>
				</tr>
				<tr className={classes.price_table_tr}>
					<td className={classes.price_table_td} colSpan="2">{t('price.service_6')}</td>
				</tr>
				<tr className={classes.price_table_tr}>
					<td className={classes.price_table_td} colSpan="2">{t('price.service_7')}</td>
				</tr>
				<tr className={classes.price_table_tr}>
					<td className={classes.price_table_td} colSpan="2">{t('price.service_8')}</td>
				</tr>
				<tr className={classes.price_table_tr}>
					<td className={classes.price_table_td} colSpan="2">{t('price.service_9')}</td>
				</tr>
				<tr className={classes.price_table_tr}>
					<td className={classes.price_table_td} colSpan="2">{t('price.service_10')}</td>
				</tr>
				<tr className={classes.price_table_tr}>
					<td className={classes.price_table_td} colSpan="2">{t('price.service_11')}</td>
				</tr>
				<tr className={classes.price_table_tr}>
					<td className={classes.price_table_td} colSpan="2">{t('price.service_12')}</td>
				</tr>
				<tr className={classes.price_table_tr}>
					<td className={classes.price_table_td} colSpan="2">{t('price.service_13')}</td>
				</tr>
				<tr className={classes.price_table_tr}>
					<td className={classes.price_table_td} colSpan="2">{t('price.service_14')}</td>
				</tr>
				<tr className={classes.price_table_tr}>
					<td className={classes.price_table_td} colSpan="2">{t('price.service_15')}</td>
				</tr>
				<tr className={classes.price_table_tr}>
					<td className={classes.price_table_td} colSpan="2">{t('price.service_16')}</td>
				</tr>
				<tr className={classes.price_table_tr}>
					<td className={classes.price_table_td} colSpan="2">{t('price.service_17')}</td>
				</tr>
				<tr className={classes.price_table_tr}>
					<td className={classes.price_table_td} colSpan="2">{t('price.service_18')}</td>
				</tr>
			</tbody>
		</table>
	);
};

export default PriceTable;